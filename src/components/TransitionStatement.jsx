import React from 'react';
import { motion } from 'motion/react';
import { easeCustom } from '../utils/motionVariants';

const brandSwatches = [
  { hex: '#0111A2', label: 'PRIMARY BLUE', rgb: '1 17 162', bg: 'bg-[#0111A2] text-white border border-white/20' },
  { hex: '#F85508', label: 'ORANGE', rgb: '248 85 8', bg: 'bg-[#F85508] text-white' },
  { hex: '#FFFFFF', label: 'WHITE', rgb: '255 255 255', bg: 'bg-[#FFFFFF] text-brand-navy' },
  { hex: '#000000', label: 'BLACK', rgb: '0 0 0', bg: 'bg-[#000000] text-white border border-white/20' },
  { hex: '#00194F', label: 'DEEP NAVY', rgb: '0 25 79', bg: 'bg-[#00194F] text-white border border-white/20' }
];

export default function TransitionStatement() {
  return (
    <section id="manifesto-intro" className="relative py-28 md:py-36 px-6 md:px-8 bg-brand-blue overflow-hidden select-none border-t border-blue-800 font-sans text-white">
      {/* Background Volumetric Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-navy/70 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-orange/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeCustom }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-xs font-mono font-bold tracking-[0.2em] text-white uppercase mb-8 shadow-sm backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
          <span>INTELLIGENCE IN MOTION</span>
        </motion.div>

        {/* Huge Editorial Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.1, ease: easeCustom }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-white leading-[0.98] tracking-tighter max-w-6xl mx-auto uppercase mb-8"
        >
          THE FUTURE OF INDUSTRY IS <span className="text-brand-orange glow-orange-text">CONNECTED.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
          className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-normal leading-relaxed mb-16"
        >
          Bridging physical industrial machinery, deterministic edge control, and enterprise AI platforms into a unified operational fabric.
        </motion.p>

        {/* Architectural Brand Swatch Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeCustom }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl mx-auto text-left"
        >
          {brandSwatches.map((swatch) => (
            <div
              key={swatch.hex}
              className={`p-4 rounded-2xl ${swatch.bg} flex flex-col justify-between min-h-[90px] shadow-lg`}
            >
              <div className="text-[10px] font-mono font-bold tracking-wider opacity-85 uppercase">
                {swatch.label}
              </div>
              <div className="text-xs font-mono font-bold mt-2">
                <div>HEX: {swatch.hex}</div>
                <div className="text-[10px] opacity-75">RGB: {swatch.rgb}</div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
