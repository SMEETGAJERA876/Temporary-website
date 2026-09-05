import React from 'react';
import { motion } from 'motion/react';

const tags = ['Automation', 'Industrial IoT', 'Deterministic PLC', 'Edge AI', 'Enterprise Cloud', 'Cyber Shield'];

export default function BrandStatement() {
  return (
    <section className="py-28 md:py-36 bg-brand-darknavy bg-dot-grid relative border-y border-white/10 text-white overflow-hidden">
      {/* Center glowing light flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-blue/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-xs font-mono font-bold text-brand-sky uppercase tracking-widest mb-8">
          <span>THE CONVERGENCE MANIFESTO</span>
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-[4.6rem] font-display font-light leading-[1.08] tracking-tight text-white mb-12 max-w-4xl mx-auto">
          Industrial transformation isn't <br />
          about isolated technologies. <br />
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-white to-brand-bright">
            It's about connecting them.
          </span>
        </h2>

        {/* Convergence tags */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-4xl mx-auto mb-10">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 rounded-2xl bg-white/5 border border-white/15 text-lg md:text-2xl font-display font-extrabold text-white shadow-xl backdrop-blur-md hover:border-brand-sky hover:text-brand-sky transition-colors cursor-default"
            >
              {tag}.
            </motion.span>
          ))}
        </div>

        <div className="text-xs font-mono font-bold tracking-[0.3em] text-brand-sky uppercase">
          ● One Unified Autonomous Intelligence Stack ●
        </div>

      </div>
    </section>
  );
}
