import React from 'react';
import { motion } from 'motion/react';

const researchPapers = [
  {
    category: 'AI / ML Research',
    title: 'Autonomous Process Loop Optimizers',
    description: 'Evaluating neural reinforcement algorithms deployed directly on local edge gateway units.',
    link: '#contact'
  },
  {
    category: 'Digital Twins',
    title: 'Emulation Systems & Kinematics',
    description: 'Building physics-accurate structural digital twin frameworks to validate complex tooling cycles.',
    link: '#contact'
  },
  {
    category: 'Edge AI',
    title: 'Anomalies & Predictive Maintenance',
    description: 'Deploying fast anomaly check architectures straight to sensors to predict component wear-out.',
    link: '#contact'
  },
  {
    category: 'OT Cybersecurity',
    title: 'IDS Intrusion Pattern Analysis',
    description: 'Implementing hardware detection modules to scanning industrial network telemetry anomalies.',
    link: '#contact'
  }
];

export default function Innovation() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 bg-brand-navy bg-dot-grid relative overflow-hidden font-sans">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col mb-16 text-left items-start">
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-brand-sky uppercase mb-4 block">DHGSOFT INNOVATION INSTITUTE</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05] tracking-tight max-w-4xl">
            Advancing Industrial Innovation Through Research, Engineering & Intelligence
          </h2>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {researchPapers.map((paper, idx) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-brand-darknavy/60 border border-white/10 p-8 rounded-[2rem] text-left hover:border-brand-blue/40 hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-xs font-bold text-brand-sky uppercase mb-3">{paper.category}</h4>
              <h3 className="text-lg font-bold text-white mb-4">{paper.title}</h3>
              <p className="text-xs text-white/60 leading-relaxed mb-6">{paper.description}</p>
              <a href={paper.link} className="text-brand-bright font-bold text-xs group-hover:text-white transition-colors">
                Read Paper →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-left">
          <button 
            onClick={() => window.location.href='#contact'}
            className="inline-flex items-center justify-center font-semibold tracking-tight transition-all duration-300 rounded-full bg-brand-blue text-white px-8 py-3.5 text-sm md:text-base hover:bg-brand-electric shadow-lg shadow-brand-blue/20"
          >
            Explore Innovation
          </button>
        </div>

      </div>
    </section>
  );
}
