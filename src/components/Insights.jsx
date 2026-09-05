import React from 'react';
import { motion } from 'motion/react';
import { easeCustom } from '../utils/motionVariants';
import { ArrowUpRight } from 'lucide-react';

const insightsList = [
  {
    category: 'NEWS',
    title: 'dhgsoft Expands Cleanroom Robotics & SECS/GEM Automation Practice',
    date: 'August 28, 2026',
    desc: 'Scaling semiconductor wafer cassette tracking and ultra-low vibration telemetry deployments across Tier-1 fabrication facilities.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    link: '#contact'
  },
  {
    category: 'INSIGHTS',
    title: 'The Realities of Edge AI on the Plant Floor: Overcoming Inference Bottlenecks',
    date: 'July 14, 2026',
    desc: 'How containerized neural classifiers achieve sub-12ms inference on fanless industrial PCs without continuous cloud bandwidth.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    link: '#contact'
  },
  {
    category: 'TECHNOLOGY',
    title: 'ISA-95 Level 0–4 Blueprint: Shielding Control Networks with Zero-Trust DMZs',
    date: 'June 02, 2026',
    desc: 'A comprehensive architectural guide to integrating OT PLC controllers with IT cloud lakes under IEC 62443 security standards.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
    link: '#contact'
  },
  {
    category: 'ENGINEERING',
    title: 'Physics-Accurate Digital Twins: Eliminating Risk in Multi-Axis Assembly Cells',
    date: 'May 18, 2026',
    desc: 'Why virtual commissioning before mechanical fabrication is reducing total factory deployment timelines by more than 40%.',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
    link: '#contact'
  }
];

export default function Insights() {
  return (
    <section id="insights" className="py-28 md:py-36 px-6 md:px-8 bg-[#000B21] font-sans relative overflow-hidden text-white border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-brand-orange/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: easeCustom }}
              className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-brand-orange mb-3 block"
            >
              ● PERSPECTIVES & RESEARCH
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.04] tracking-tight"
            >
              Latest thinking.
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
            className="text-sm sm:text-base text-brand-gray max-w-md mt-4 md:mt-0 font-normal leading-relaxed text-left"
          >
            Insights on deterministic control, edge AI, cyber security, and intelligent manufacturing engineering.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {insightsList.map((art, idx) => (
            <motion.div
              key={art.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: easeCustom }}
              whileHover={{ y: -6, scale: 1.012 }}
              data-cursor="view"
              className="group bg-[#00143D] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-brand-orange/60 hover:shadow-[0_0_30px_rgba(248,85,8,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden relative border-b border-white/10">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-45 group-hover:opacity-65 filter grayscale-[40%]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00143D] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#000B21]/90 border border-white/15 text-[10px] font-mono font-bold tracking-widest text-brand-orange uppercase backdrop-blur-md">
                      {art.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-mono text-white/40 block mb-2">{art.date}</span>
                  <h3 className="text-lg font-display font-extrabold text-white mb-3 group-hover:text-white transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-brand-gray leading-relaxed font-normal">
                    {art.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                <a href={art.link} className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-wider text-brand-orange group-hover:text-white transition-colors gap-1.5">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
