import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { easeCustom } from '../utils/motionVariants';
import { ArrowUpRight } from 'lucide-react';

const capabilityItems = [
  {
    num: '01',
    title: 'Automation Solutions',
    description: 'Deterministic PLC architectures, fail-safe safety interlocks, continuous PID loop tuning, and turnkey machine controllers engineered for high-throughput discrete and process plants.',
    tags: ['Beckhoff TwinCAT', 'Siemens TIA Portal', 'Rockwell Studio 5000', 'SCADA / HMI'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    gridClass: 'lg:col-span-7'
  },
  {
    num: '02',
    title: 'AI & Intelligent Systems',
    description: 'Deploying neural defect classifiers and acoustic bearing anomaly detection models directly onto factory floor edge hardware with sub-12ms inference speeds.',
    tags: ['Edge Computer Vision', 'Predictive Anomaly Radar', 'Acoustic Analytics', 'Docker Edge Fleet'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
    gridClass: 'lg:col-span-5'
  },
  {
    num: '03',
    title: 'Controls & Digital Integration',
    description: 'Bridging physical machinery to enterprise cloud data lakes, MES execution, electronic batch records (EBR), and ISA-95 compliant OT/IT network segmentation.',
    tags: ['ISA-95 Architecture', 'OPC UA & MQTT', 'MES Integration', 'Zero-Trust OT DMZ'],
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1000&q=80',
    gridClass: 'lg:col-span-5'
  },
  {
    num: '04',
    title: 'Robotics & Vision',
    description: 'Synchronized multi-axis robotic cells, 3D physics digital twin pre-commissioning, automated optical inspection, and sub-millisecond precision part handling.',
    tags: ['Kinematics Emulation', 'Multi-Axis Welding', 'Automated Optical Inspection', 'RobotStudio / KSS'],
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1000&q=80',
    gridClass: 'lg:col-span-7'
  }
];

export default function Capabilities() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center']
  });

  const progressBarHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section 
      id="capabilities" 
      ref={sectionRef}
      className="py-28 md:py-36 px-6 md:px-8 bg-[#000B21] font-sans relative overflow-hidden text-white border-t border-white/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-orange/15 rounded-full blur-[160px] pointer-events-none" />

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
              ● CORE DISCIPLINES
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.04] tracking-tight"
            >
              What we're built to do.
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
            className="text-sm sm:text-base text-brand-gray max-w-md mt-4 md:mt-0 font-normal leading-relaxed text-left"
          >
            End-to-end industrial engineering capabilities that merge deep physical machine controls with intelligent software.
          </motion.p>
        </div>

        {/* Layout Grid with Vertical Progress Track on Left for Desktop */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Vertical Orange Progress Indicator Track (Hidden on Mobile) */}
          <div className="hidden lg:block absolute -left-6 top-0 bottom-0 w-[2px] bg-white/10 rounded-full">
            <motion.div 
              style={{ height: progressBarHeight }}
              className="w-full bg-brand-orange shadow-[0_0_15px_rgba(248,85,8,0.85)] rounded-full origin-top"
            />
          </div>

          {/* 4 Asymmetric Capability Cards */}
          {capabilityItems.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: easeCustom }}
              whileHover={{ y: -6, scale: 1.012 }}
              data-cursor="view"
              className={`${item.gridClass} group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#00143D] p-8 sm:p-10 flex flex-col justify-between min-h-[460px] text-left transition-colors duration-500 hover:border-brand-orange/60 shadow-2xl`}
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-25 transition-transform duration-700 ease-out group-hover:scale-108 group-hover:opacity-45 filter grayscale-[40%]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/85 to-brand-bg/40" />
              </div>

              {/* Top Header: Number & Link Arrow */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <span className="text-3xl sm:text-4xl font-display font-extrabold font-mono text-white/30 group-hover:text-brand-orange transition-colors">
                  {item.num}
                </span>

                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Content: Title, Description, Tags */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-3 group-hover:text-brand-orangeBright transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed mb-6 font-normal max-w-xl">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {item.tags.map(t => (
                    <span key={t} className="text-xs px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
