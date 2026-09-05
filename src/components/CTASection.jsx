import React from 'react';
import { motion } from 'motion/react';
import { easeCustom, buttonHover } from '../utils/motionVariants';

export default function CTASection() {
  return (
    <section id="contact" className="py-32 md:py-44 px-6 md:px-8 bg-[#000B21] font-sans overflow-hidden relative border-t border-white/10 text-white">
      {/* Background Dark Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1600&q=80" 
          alt="High-Tech Manufacturing Plant" 
          className="w-full h-full object-cover opacity-25 filter contrast-150 grayscale-[50%]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/85 to-brand-bg/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/70 to-brand-bg" />
      </div>

      {/* Orange Ambient Core Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-brand-orange/20 rounded-full blur-[200px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeCustom }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-brand-orange/40 text-xs font-mono font-bold tracking-[0.25em] text-brand-orange uppercase mb-8"
        >
          <span>● NEXT GENERATION AUTOMATION</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.1, ease: easeCustom }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white leading-[0.98] tracking-tighter mb-8 max-w-4xl mx-auto"
        >
          Ready to turn complexity into <span className="text-brand-orange glow-orange-text">performance?</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.2, ease: easeCustom }}
          className="text-xl sm:text-2xl text-brand-gray font-display font-medium mb-12 max-w-2xl mx-auto"
        >
          Let's build what's next.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.3, ease: easeCustom }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-md mx-auto"
        >
          <motion.a
            href="mailto:contact@dhgsoft.com"
            whileHover={buttonHover.hover}
            whileTap={buttonHover.tap}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-brand-orange hover:bg-brand-orangeBright text-white font-bold text-xs uppercase tracking-widest shadow-2xl shadow-brand-orange/40 transition-all text-center"
          >
            Start a Conversation →
          </motion.a>

          <motion.a
            href="#solutions"
            whileHover={buttonHover.hover}
            whileTap={buttonHover.tap}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#00143D] border border-white/20 text-white hover:border-brand-orange hover:bg-white/5 font-bold text-xs uppercase tracking-widest transition-all text-center"
          >
            Explore Stack
          </motion.a>
        </motion.div>

        {/* Direct Inquiries Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 text-xs font-mono text-white/40"
        >
          Direct Engineering Office: <span className="text-white/70">contact@dhgsoft.com</span> • Global Deployment Active
        </motion.div>

      </div>
    </section>
  );
}
