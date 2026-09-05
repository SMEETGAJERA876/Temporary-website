import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { easeCustom } from '../utils/motionVariants';
import { ArrowUpRight } from 'lucide-react';

const caseStudiesList = [
  {
    category: 'SMART FACTORY TRANSFORMATION',
    title: 'Tier-1 Automotive Robotic Kinematics & Synchronized Line Overhaul',
    desc: 'Engineered multi-axis welding kinematics and pre-commissioned complete line PLC logic via 3D digital twins, cutting cycle times by 32%.',
    result: '+32% Throughput Boost',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1000&q=80',
    link: '#contact'
  },
  {
    category: 'AI VISION INSPECTION',
    title: 'Sub-Micron Automated Optical Inspection for Semiconductor Wafer Carriers',
    desc: 'Deployed high-speed neural defect classifiers running on local edge industrial PCs, achieving 99.98% wafer yield validation under SECS/GEM.',
    result: '99.98% Wafer Yield',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80',
    link: '#contact'
  },
  {
    category: 'AUTOMATED MATERIAL HANDLING',
    title: 'Autonomous Mobile Robot (AMR) Fleet & High-Bay Warehouse Routing',
    desc: 'Architected dynamic fleet coordination software and safety LiDAR interlocks for a 450,000 sq.ft. pharmaceutical fulfillment facility.',
    result: 'Zero Collision Safety',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    link: '#contact'
  },
  {
    category: 'DIGITAL MANUFACTURING PLATFORM',
    title: 'GAMP 5 Electronic Batch Records & Real-Time Bio-Pharma Cleanroom Control',
    desc: 'Created FDA 21 CFR Part 11 compliant SCADA interfaces and automated clean-in-place (CIP) loops for a global biotherapeutics manufacturer.',
    result: '100% FDA Validated',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
    link: '#contact'
  }
];

export default function CaseStudies() {
  const scrollContainerRef = useRef(null);

  return (
    <section id="case-studies" className="py-28 md:py-36 px-6 md:px-8 bg-[#000E2E] font-sans relative overflow-hidden text-white border-t border-white/10">
      {/* Ambient Orange Glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-brand-orange/15 rounded-full blur-[180px] pointer-events-none" />

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
              ● PROVEN PERFORMANCE
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.04] tracking-tight"
            >
              Real technology. <br />
              Real outcomes.
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
            className="text-sm sm:text-base text-brand-gray max-w-md mt-4 md:mt-0 font-normal leading-relaxed text-left"
          >
            Explore how dhgsoft delivers measurable throughput increases, regulatory compliance clearance, and virtual commissioning velocity.
          </motion.p>
        </div>

        {/* Horizontal Scroll Track on Desktop / Stacked on Mobile */}
        <div 
          ref={scrollContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
        >
          {caseStudiesList.map((cs, idx) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: easeCustom }}
              whileHover={{ y: -8, scale: 1.015 }}
              data-cursor="view"
              className="group bg-[#00143D] border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-300 hover:border-brand-orange/70 hover:shadow-[0_0_35px_rgba(248,85,8,0.25)] flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Zoom on Hover */}
                <div className="h-60 overflow-hidden relative border-b border-white/10">
                  <img 
                    src={cs.image} 
                    alt={cs.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-45 group-hover:opacity-70 filter grayscale-[30%]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00143D] via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1 rounded-full bg-[#000B21]/90 border border-white/15 text-[10px] font-mono font-bold tracking-widest text-brand-orange uppercase backdrop-blur-md">
                      {cs.category}
                    </span>
                  </div>

                  {/* Result Pill */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-brand-orange text-white font-mono font-bold text-xs backdrop-blur-md shadow-lg shadow-brand-orange/40">
                    {cs.result}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-display font-extrabold text-white mb-3 group-hover:text-white transition-colors leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-gray leading-relaxed font-normal">
                    {cs.desc}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-7 pb-7 pt-2 border-t border-white/5 flex items-center justify-between">
                <a 
                  href={cs.link} 
                  className="inline-flex items-center text-xs font-bold font-mono uppercase tracking-wider text-brand-orange group-hover:text-white transition-colors gap-1.5"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
