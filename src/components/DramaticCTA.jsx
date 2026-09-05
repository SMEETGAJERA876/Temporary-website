import React from 'react';
import { motion } from 'motion/react';
import { easeCustom, buttonHover } from '../utils/motionVariants';

export default function DramaticCTA() {
  return (
    <section id="contact" className="py-32 md:py-44 px-6 md:px-8 bg-gradient-to-b from-[#0111A2] via-[#00194F] to-[#00071A] font-sans overflow-hidden relative text-white text-center select-none border-t border-white/10">
      
      {/* Cobalt Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-blue/30 rounded-full blur-[220px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-brand-orange/20 rounded-full blur-[180px] pointer-events-none" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-dot-grid-dark opacity-30 pointer-events-none" />

      {/* Floating Animated Geometric Frame */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-12 right-20 w-48 h-48 border border-white/10 rounded-[2.5rem] pointer-events-none hidden lg:block"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeCustom }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-brand-orange/40 text-xs font-mono font-bold tracking-[0.2em] text-brand-orange uppercase mb-8 backdrop-blur-md shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
          <span>START THE TRANSFORMATION</span>
        </motion.div>

        {/* Dramatic Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.1, ease: easeCustom }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-white leading-[0.98] tracking-tighter mb-8"
        >
          Let's build what <br />
          industry <span className="text-brand-orange glow-orange-text">needs next.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
          className="text-base sm:text-xl text-white/85 font-normal leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Speak with our multi-disciplinary engineering leads to assess your facility's automation, machine controls, and edge AI opportunities.
        </motion.p>

        {/* Large Orange Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeCustom }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-md mx-auto"
        >
          <motion.a
            href="mailto:contact@dhgsoft.com"
            whileHover={buttonHover.hover}
            whileTap={buttonHover.tap}
            className="w-full sm:w-auto px-12 py-5 rounded-full bg-brand-orange hover:bg-brand-orangeBright text-white font-display font-extrabold text-sm uppercase tracking-widest shadow-2xl shadow-brand-orange/40 hover:shadow-brand-orange/60 transition-all text-center"
          >
            START A CONVERSATION →
          </motion.a>
        </motion.div>

        {/* Direct Email Indicator */}
        <div className="mt-10 text-xs font-mono text-white/60">
          Direct Engineering Dispatch: <span className="text-white font-semibold underline">contact@dhgsoft.com</span>
        </div>

      </div>
    </section>
  );
}
