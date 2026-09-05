import React from 'react';
import { motion } from 'motion/react';
import { easeCustom } from '../utils/motionVariants';

const statementLines = [
  "Technology is only powerful",
  "when it changes what is possible."
];

export default function WhyDHGsoftStatement() {
  return (
    <section id="why-dhgsoft" className="py-32 md:py-44 px-6 md:px-8 bg-brand-blue font-sans relative overflow-hidden text-white select-none border-t border-blue-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-navy/70 rounded-full blur-[220px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-orange/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-left">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeCustom }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-xs font-mono font-bold tracking-[0.2em] text-white uppercase mb-10 shadow-sm backdrop-blur-md"
        >
          <span>● THE DHGSOFT MANIFESTO</span>
        </motion.div>

        {/* Huge Editorial Statement Line by Line */}
        <div className="space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: easeCustom }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-white leading-[0.98] tracking-tighter"
          >
            {statementLines[0]}
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: easeCustom }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold text-brand-orange glow-orange-text leading-[0.98] tracking-tighter"
          >
            {statementLines[1]}
          </motion.h2>
        </div>

        {/* Narrative Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-white/20 text-sm sm:text-base text-white/80 font-normal leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.25, ease: easeCustom }}
          >
            At dhgsoft, we believe true industrial transformation happens at the exact intersection of mechanical physics, deterministic PLC control, and autonomous edge intelligence. We do not just build software—we engineer connected physical reality.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.35, ease: easeCustom }}
          >
            From high-speed semiconductor cleanrooms to automotive multi-axis assembly lines, our engineers design systems with zero tolerance for jitter, latency, or unscheduled downtime.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
