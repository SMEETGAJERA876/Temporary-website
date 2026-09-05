import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, useReducedMotion } from 'motion/react';

/**
 * Cursor-reactive visual system for the hero: a thin column grid, a soft
 * spotlight that follows the pointer, and a few outlined geometric forms
 * that drift with a slight parallax offset. No canvas, no particles —
 * a handful of DOM nodes animated on transform/opacity only.
 */
export default function HeroField() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 50, damping: 20, mass: 0.6 });
  const smy = useSpring(my, { stiffness: 50, damping: 20, mass: 0.6 });

  const spotlightX = useTransform(smx, [0, 1], ['15%', '85%']);
  const spotlightY = useTransform(smy, [0, 1], ['15%', '85%']);
  const spotlightBg = useMotionTemplate`radial-gradient(520px circle at ${spotlightX} ${spotlightY}, rgba(255,255,255,0.08), transparent 70%)`;

  const shapeAX = useTransform(smx, [0, 1], [-18, 18]);
  const shapeAY = useTransform(smy, [0, 1], [-14, 14]);
  const shapeBX = useTransform(smx, [0, 1], [14, -14]);
  const shapeBY = useTransform(smy, [0, 1], [10, -10]);
  const shapeCX = useTransform(smx, [0, 1], [-8, 8]);
  const shapeCY = useTransform(smy, [0, 1], [8, -8]);

  function handleMouseMove(e) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Thin Swiss-grid column guides */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(255,255,255,0.9) 0, rgba(255,255,255,0.9) 1px, transparent 1px, transparent 8.3333%)'
        }}
      />

      {/* Cursor-following spotlight */}
      {!reduceMotion && <motion.div className="absolute inset-0" style={{ background: spotlightBg }} />}

      {/* Outlined geometric forms with subtle parallax */}
      <motion.div
        style={reduceMotion ? {} : { x: shapeAX, y: shapeAY }}
        className="hidden md:block absolute top-[12%] right-[8%] w-72 h-72 rounded-full border border-white/15"
      />
      <motion.div
        style={reduceMotion ? {} : { x: shapeBX, y: shapeBY }}
        className="hidden md:block absolute bottom-[16%] right-[24%] w-40 h-40 border border-[#E86A1C]/35 rotate-45"
      />
      <motion.div
        style={reduceMotion ? {} : { x: shapeCX, y: shapeCY }}
        className="hidden lg:block absolute top-[42%] right-[34%] w-24 h-24 rounded-full border border-white/12"
      />
      <motion.div
        style={reduceMotion ? {} : { x: shapeBY, y: shapeAX }}
        className="hidden lg:block absolute bottom-[30%] right-[6%] w-px h-32 bg-white/10"
      />
    </div>
  );
}
