import React from 'react';
import { motion } from 'motion/react';

const productCategories = [
  {
    title: 'Industrial Automation Systems',
    description: 'PLCs, HMIs, and distributed control systems (DCS) for continuous and discrete manufacturing plants.',
    tags: ['Beckhoff TwinCAT', 'Siemens S7-1500', 'Rockwell ControlLogix', 'Ignition HMI'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Industrial Networking & Connectivity',
    description: 'Managed ethernet switches, robust fiber backbones, and secure industrial wireless routing hardware.',
    tags: ['Managed Layer-3 Switches', 'Zero-Trust DMZ', 'Fiber Optic Transceivers', 'TSN Networks'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Industrial Computing & Edge Platforms',
    description: 'High-performance fanless computers, ruggedized tablets, and analytics nodes for raw telemetry collection.',
    tags: ['Fanless DIN-Rail IPC', 'Edge Docker Fleet', 'M.2 NVMe RAID', 'Wide-Temp -40°C to 75°C'],
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 px-6 md:px-8 bg-brand-navy font-sans relative overflow-hidden border-b border-white/10 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left items-start">
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-brand-sky mb-3 block">
            HARDWARE & SOFTWARE PROVISIONING
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05] tracking-tight">
            Trusted Industrial Technology. Global Reliability.
          </h2>
          <p className="text-base sm:text-lg text-white/70 mt-4 max-w-2xl leading-relaxed">
            Industrial-grade hardware platforms, rugged edge servers, and deterministic controllers sourced from Tier-1 certified manufacturers.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((prod, idx) => (
            <motion.div
              key={prod.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-brand-darknavy/90 border border-white/15 rounded-[2.5rem] overflow-hidden hover:border-brand-blue/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-56 overflow-hidden relative border-b border-white/10">
                  <img 
                    src={prod.image} 
                    alt={prod.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darknavy/80 via-transparent to-transparent" />
                </div>

                <div className="p-8 text-left">
                  <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-brand-sky transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-6 leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {prod.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono font-semibold text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2 text-left border-t border-white/5">
                <a href="#contact" className="inline-flex items-center text-brand-sky font-bold text-xs group-hover:text-white transition-colors gap-1">
                  <span>Request Hardware Specs</span>
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
