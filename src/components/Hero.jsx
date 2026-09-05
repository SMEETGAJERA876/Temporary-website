import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Link } from '../router';
import { ArrowRight } from 'lucide-react';
import HeroField from './HeroField';
import MagneticButton from './MagneticButton';

const pillars = ['Engineering', 'Automation', 'Data', 'Artificial Intelligence', 'Digital'];

export default function Hero() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden font-sans"
      style={{ background: 'linear-gradient(160deg, #000E2E 0%, #0111A2 62%, #0111A2 100%)' }}
    >
      <HeroField />

      {/* Soft cinematic merge into the next section */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white/[0.06] to-transparent pointer-events-none" />

      <motion.div
        style={{ y: reduceMotion ? 0 : contentY, opacity: reduceMotion ? 1 : contentOpacity }}
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-20"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            style={{ '--d': '0.05s' }}
            className="fade-up-in flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-px bg-[#E86A1C]" />
            <span className="text-xs font-mono font-bold tracking-[0.28em] text-white/60 uppercase">
              dhgsoft — Industrial Engineering &amp; AI
            </span>
          </div>

          {/* Oversized editorial headline */}
          <h1 className="text-[13vw] sm:text-6xl md:text-7xl lg:text-[6rem] font-display font-extrabold text-white leading-[0.98] tracking-tight mb-8">
            <span className="mask-line"><span style={{ '--d': '0.15s' }}>Engineering</span></span>
            <span className="mask-line">
              <span style={{ '--d': '0.26s' }} className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E86A1C]">
                Intelligent Industries.
              </span>
            </span>
          </h1>

          {/* Supporting line */}
          <p
            style={{ '--d': '0.4s' }}
            className="fade-up-in text-base sm:text-lg text-white/65 leading-relaxed max-w-md mb-12 font-normal"
          >
            Transforming industrial operations through engineering, automation, data and AI.
          </p>

          {/* CTAs */}
          <div style={{ '--d': '0.5s' }} className="fade-up-in flex flex-wrap items-center gap-5">
            <MagneticButton>
              <Link
                to="/solutions"
                className="sheen inline-flex items-center gap-2 px-8 py-4 rounded-[8px] bg-[#E86A1C] hover:bg-[#d55e15] text-white font-semibold text-[15px] shadow-lg shadow-black/20 transition-colors duration-200 group"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.35}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-2 py-4 text-white/80 hover:text-white font-semibold text-[15px] transition-colors duration-200 border-b border-white/25 hover:border-white/70"
              >
                Let's Talk
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Editorial index strip */}
        <div
          style={{ '--d': '0.62s' }}
          className="fade-up-in flex flex-wrap gap-x-8 gap-y-2 mt-24 md:mt-32 pt-6 border-t border-white/10"
        >
          {pillars.map((p, i) => (
            <span key={p} className="text-[11px] font-mono text-white/35 tracking-wide">
              <span className="text-white/70">0{i + 1}</span> — {p}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="hidden sm:flex absolute bottom-10 left-6 md:left-10 lg:left-16 items-center gap-3 text-white/40 z-10">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em]">Scroll</span>
        <div className="relative w-px h-12 bg-white/15 overflow-hidden">
          {!reduceMotion && (
            <motion.div
              className="absolute top-0 left-0 w-px h-4 bg-white/70"
              animate={{ y: [0, 32, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
