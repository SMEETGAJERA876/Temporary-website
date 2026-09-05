import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { easeCustom } from '../utils/motionVariants';

export function AnimatedCounter({ target, suffix = '', duration = 2.2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const statsData = [
  {
    targetNumber: 500,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Transforming discrete and continuous manufacturing lines worldwide.'
  },
  {
    targetNumber: 25,
    suffix: '+',
    label: 'Countries Served',
    description: 'Providing multi-site international engineering & validation.'
  },
  {
    targetNumber: 15,
    suffix: '+',
    label: 'Years Experience',
    description: 'Unifying machine controls, SCADA, edge telemetry & AI platforms.'
  },
  {
    targetNumber: 100,
    suffix: '+',
    label: 'Experts',
    description: 'Multi-disciplinary automation engineers, software architects & scientists.'
  }
];

export default function Stats() {
  return (
    <section id="stats" className="relative bg-[#00071A] border-y border-white/10 py-20 px-6 md:px-8 font-sans overflow-hidden text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-32 bg-brand-orange/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: easeCustom }}
              whileHover={{ y: -4, borderColor: 'rgba(248, 85, 8, 0.6)' }}
              className="group relative p-8 rounded-[2rem] bg-[#00143D]/80 border border-white/10 text-left transition-all duration-300 shadow-2xl hover:shadow-brand-orange/20 flex flex-col justify-between backdrop-blur-md"
            >
              {/* Top Accent */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/50">
                  METRIC 0{idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-orange group-hover:animate-ping transition-all" />
              </div>

              {/* Stat Number in Electric Orange */}
              <div className="text-5xl md:text-6xl font-display font-extrabold tracking-tight text-brand-orange glow-orange-text mb-3">
                <AnimatedCounter target={stat.targetNumber} suffix={stat.suffix} />
              </div>

              {/* Title & Description */}
              <div className="mt-2">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {stat.description}
                </p>
              </div>

              {/* Bottom Orange Line on Hover */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-brand-orange/0 group-hover:bg-brand-orange transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
