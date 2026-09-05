import React from 'react';
import { motion } from 'motion/react';
import { easeCustom, buttonHover } from '../utils/motionVariants';

const reasons = [
  {
    num: '01',
    title: 'Multi-Disciplinary Engineering Depth',
    desc: 'From electrical schematics and UL 508A enclosures to Beckhoff TwinCAT, Rockwell, and Siemens PLC logic, our team brings hardware and software together under one roof.'
  },
  {
    num: '02',
    title: 'Deterministic Edge AI Intelligence',
    desc: 'We embed high-speed neural networks directly on plant floor hardware for real-time acoustic bearing diagnosis, automated optical inspection, and predictive anomaly radar.'
  },
  {
    num: '03',
    title: 'Zero-Downtime Virtual Commissioning',
    desc: 'Testing every line of control code and kinematics trajectory against a physics-accurate 3D digital twin before metal is cut or machines are delivered.'
  },
  {
    num: '04',
    title: 'IEC 62443 Certified Cyber Shielding',
    desc: 'Every network topology is audited against strict industrial OT cybersecurity standards, isolating mission-critical machine loops from cloud-facing endpoints.'
  }
];

export default function WhyDHGsoft() {
  return (
    <section id="why-dhgsoft" className="py-32 md:py-44 px-6 md:px-8 bg-[#000B21] bg-grid-lines font-sans relative overflow-hidden text-white border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-orange/15 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-left relative z-10">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeCustom }}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-brand-orange uppercase mb-8"
        >
          <span>● THE DHGSOFT ADVANTAGE</span>
        </motion.div>

        {/* Large Editorial Headline (Line by Line) */}
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: easeCustom }}
            className="text-2xl sm:text-3xl md:text-4xl text-brand-gray font-display font-medium leading-tight mb-4"
          >
            What makes dhgsoft different isn't just technology.
          </motion.p>

          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1, ease: easeCustom }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white leading-[1.02] tracking-tighter"
          >
            It's what happens when technology, engineering and intelligence <span className="text-brand-orange glow-orange-text">converge.</span>
          </motion.h2>
        </div>

        {/* 4 Architectural Reason Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 pt-8 border-t border-white/10">
          {reasons.map((r, idx) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: easeCustom }}
              className="p-8 rounded-3xl bg-[#00143D] border border-white/10 hover:border-brand-orange/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-brand-orange">FEATURE {r.num}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{r.title}</h3>
              <p className="text-sm text-brand-gray leading-relaxed font-normal">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: easeCustom }}
        >
          <motion.a
            href="#contact"
            whileHover={buttonHover.hover}
            whileTap={buttonHover.tap}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-orange hover:bg-brand-orangeBright text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-brand-orange/30"
          >
            <span>Discover dhgsoft</span>
            <span>→</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
