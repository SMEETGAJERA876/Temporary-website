import React from 'react';
import { motion } from 'motion/react';
import { easeCustom } from '../utils/motionVariants';
import { ArrowUpRight } from 'lucide-react';

const industryCards = [
  {
    id: 'industrial',
    category: 'INDUSTRIAL',
    title: 'Heavy Automation & Robotic Manufacturing',
    description: 'Transforming high-throughput automotive cells, semiconductor fabs, and advanced machining lines with deterministic robotics, multi-axis kinematics, and automated material handling.',
    tags: ['Automation', 'Robotics', 'Manufacturing', 'Material Handling'],
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80',
    gridSpan: 'lg:col-span-7',
    minHeight: 'min-h-[520px]'
  },
  {
    id: 'life-sciences',
    category: 'LIFE SCIENCES',
    title: 'Precision Bio-Pharma & Cleanroom Systems',
    description: 'Engineering GAMP 5 compliant cleanrooms, automated optical inspection, and digital batch record suites for medical technology leaders.',
    tags: ['Precision Systems', 'Digital Manufacturing', 'Quality Automation', 'Data Integration'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    gridSpan: 'lg:col-span-5',
    minHeight: 'min-h-[520px]'
  },
  {
    id: 'consumer',
    category: 'CONSUMER',
    title: 'Smart Consumer Goods & High-Speed Packaging',
    description: 'High-speed sorting, vision-guided picking robotics, and smart supply telemetry engineered for zero-defect fast-moving consumer lines.',
    tags: ['Packaging', 'Production', 'Logistics', 'Smart Operations'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    gridSpan: 'lg:col-span-12',
    minHeight: 'min-h-[440px]'
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-28 md:py-36 px-6 md:px-8 bg-[#000B21] font-sans relative overflow-hidden text-white">
      {/* Subtle Ambient Orange Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-brand-orange/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: easeCustom }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-brand-orange uppercase mb-4"
          >
            <span>● TARGET DOMAINS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.04] tracking-tight mb-6"
          >
            Engineering intelligence <br />
            for every industry.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
            className="text-base sm:text-lg text-brand-gray leading-relaxed font-normal"
          >
            From complex manufacturing environments to connected enterprise systems, dhgsoft builds solutions around the challenges that matter most.
          </motion.p>
        </div>

        {/* Asymmetric Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {industryCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: idx * 0.15, ease: easeCustom }}
              whileHover={{ scale: 1.015 }}
              data-cursor="view"
              className={`${card.gridSpan} ${card.minHeight} group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-brand-surface p-8 sm:p-12 flex flex-col justify-between text-left transition-colors duration-500 hover:border-brand-orange/60 shadow-2xl`}
            >
              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover opacity-35 transition-transform duration-700 ease-out group-hover:scale-108 group-hover:opacity-55 filter grayscale-[30%]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/75 to-brand-bg/40 transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              {/* Top Bar: Category Pill & Arrow */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/15 text-[11px] font-mono font-bold tracking-widest text-brand-orange uppercase">
                  {card.category}
                </span>

                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-brand-orange group-hover:bg-brand-orange transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 mt-auto pt-16">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4 group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-brand-gray leading-relaxed mb-8 max-w-2xl font-normal">
                  {card.description}
                </p>

                {/* Subcategory Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3.5 py-1.5 rounded-xl bg-[#00143D]/90 border border-white/10 text-white/80 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Animated Orange Accent Line that expands Left -> Right */}
                <div className="relative w-full h-[2px] bg-white/10 overflow-hidden rounded-full mt-6">
                  <div className="absolute left-0 top-0 bottom-0 w-0 bg-brand-orange group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
