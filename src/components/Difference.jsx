import React from 'react';
import { motion } from 'motion/react';

const differentiators = [
  {
    title: 'Multi-Disciplinary Domain Depth',
    description: 'Our certified engineers hold deep operational expertise across semiconductor fabs, bio-pharma cells, and high-speed robotic manufacturing lines.',
    metric: '10+ Yrs Field Experience'
  },
  {
    title: 'End-to-End Turnkey Delivery',
    description: 'We engineer complete hardware-to-software pipelines: from UL 508A control cabinets and SCADA to edge Docker nodes and cloud data lakes.',
    metric: 'Zero-Vendor Fingerpointing'
  },
  {
    title: 'Deterministic Edge AI',
    description: 'Applying neural anomaly radar and sub-millisecond machine learning algorithms directly to local sensors to eliminate unplanned stops.',
    metric: '< 12ms Inference Time'
  },
  {
    title: 'IEC 62443 Certified Cyber Defense',
    description: 'Every network topology is audited against rigorous OT cybersecurity standards, implementing deep-packet inspection and DMZ firewalls.',
    metric: 'Zero-Trust Architecture'
  }
];

export default function Difference() {
  return (
    <section id="differentiators" className="py-24 md:py-32 px-6 md:px-8 bg-brand-darknavy font-sans relative overflow-hidden border-b border-white/10 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start text-left">
          <div className="lg:col-span-6">
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-brand-sky mb-3 block">
              THE DHGSOFT ADVANTAGE
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05] tracking-tight">
              Engineering Rigor. Measurable Industrial Outcomes.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pl-10 pt-4">
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              We combine deep mechanical and electrical machine control know-how with modern cloud and AI architectures to guarantee reliability, regulatory compliance, and maximum throughput.
            </p>
          </div>
        </div>

        {/* List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff, idx) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="p-8 rounded-[2.5rem] bg-brand-navy/60 border border-white/15 text-left hover:border-brand-blue/50 hover:bg-brand-navy hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-sky flex items-center justify-center font-bold text-sm font-mono border border-brand-blue/30">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                    {diff.metric}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-3">{diff.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{diff.description}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-brand-sky">
                <span>Verified Capability</span>
                <span>✓</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
