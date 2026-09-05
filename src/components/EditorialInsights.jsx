import React from 'react';
import { motion } from 'motion/react';
import { easeCustom } from '../utils/motionVariants';
import { ArrowUpRight } from 'lucide-react';

const insightsArticles = [
  {
    category: 'AI & EDGE',
    title: 'Eliminating Cloud Latency with Sub-12ms Edge Ingestion on Industrial PCs',
    date: 'August 2026',
    desc: 'How deploying quantized neural models directly to fanless DIN-rail hardware enables real-time acoustic defect sorting at full line speed.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read'
  },
  {
    category: 'ENGINEERING',
    title: 'The Multi-Axis Pre-Commissioning Playbook: Validating Kinematics in 3D',
    date: 'July 2026',
    desc: 'Why testing complete Beckhoff and Siemens PLC logic against physics-accurate digital CAD simulations cuts on-site installation timelines by 40%.',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
    readTime: '7 min read'
  },
  {
    category: 'CYBER SECURITY',
    title: 'ISA-95 Level 0-4 Defense: Hardening Industrial OT Without Choking Telemetry',
    date: 'June 2026',
    desc: 'An architectural blueprint for implementing IEC 62443 zero-trust DMZs that shield critical machine safety loops while streaming MQTT data.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
    readTime: '6 min read'
  }
];

export default function EditorialInsights() {
  return (
    <section id="insights" className="py-28 md:py-40 px-6 md:px-8 bg-[#00071A] font-sans relative overflow-hidden text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-brand-orange mb-3 block">
              ● RESEARCH & PERSPECTIVES
            </span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.04] tracking-tight">
              Thinking beyond <br />
              <span className="text-brand-orange glow-orange-text">the next machine.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-300 max-w-md mt-4 md:mt-0 font-normal leading-relaxed text-left">
            Engineering publications exploring edge neural computing, deterministic controls, and factory cybersecurity.
          </p>
        </div>

        {/* 3 Large Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {insightsArticles.map((art, idx) => (
            <motion.div
              key={art.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: easeCustom }}
              whileHover={{ y: -8, scale: 1.012 }}
              data-cursor="view"
              className="group bg-[#00143D]/90 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-brand-orange/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between shadow-2xl backdrop-blur-md"
            >
              <div>
                <div className="h-56 overflow-hidden relative border-b border-white/10">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1 rounded-full bg-black/75 border border-white/15 text-[10px] font-mono font-bold tracking-widest text-brand-orange uppercase shadow-sm backdrop-blur-md">
                      {art.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/50 mb-3">
                    <span>{art.date}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="text-xl font-display font-extrabold text-white mb-3 group-hover:text-brand-orange transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {art.desc}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2 border-t border-white/10 flex items-center justify-between">
                <a href="#contact" className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-brand-orange group-hover:text-white transition-colors gap-1.5">
                  <span>Read Publication</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
