import React from 'react';
import { motion } from 'motion/react';
import { easeCustom } from '../utils/motionVariants';
import { ArrowUpRight } from 'lucide-react';

const solutionModules = [
  {
    num: '01',
    title: 'INTELLIGENT AUTOMATION',
    subtitle: 'Deterministic PLC & Multi-Axis Motion Control',
    description: 'Engineering hard real-time machine controls, deterministic loop execution, and fail-safe safety architectures on Beckhoff TwinCAT, Siemens TIA Portal, and Rockwell Studio 5000.',
    metric: '< 800µs Loop Cycle',
    tags: ['TwinCAT 3 / EtherCAT', 'Siemens S7-1500', 'Kinematics Synchronization', 'UL 508A Fabrication'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    gridSpan: 'lg:col-span-7'
  },
  {
    num: '02',
    title: 'AI & COMPUTER VISION',
    subtitle: 'Sub-Micron Automated Optical Inspection',
    description: 'High-speed GigE vision systems and edge-deployed deep neural classifiers detecting sub-surface defects and anomalies in real-time under high-throughput production.',
    metric: '99.98% Accuracy Yield',
    tags: ['Edge Neural Classifiers', 'Automated Optical Inspection', 'Acoustic Bearing Radar', 'GenICam / GigE'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
    gridSpan: 'lg:col-span-5'
  },
  {
    num: '03',
    title: 'CONNECTED SOFTWARE',
    subtitle: 'Enterprise MES & ISA-95 Cloud Pipelines',
    description: 'Bridging shop floor fieldbus sensors to enterprise cloud lakes, electronic batch records (EBR), and web-based SCADA visualization pipelines with zero jitter.',
    metric: '50k Tags/Sec Streaming',
    tags: ['ISA-95 Level 0-4', 'MQTT Sparkplug B', 'OPC UA Servers', 'Zero-Trust OT DMZ'],
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1000&q=80',
    gridSpan: 'lg:col-span-5'
  },
  {
    num: '04',
    title: 'DIGITAL OPERATIONS',
    subtitle: '3D Digital Twins & Virtual Commissioning',
    description: 'Simulating mechanical kinematics, sensor responses, and complete line PLC logic in physics-accurate 3D virtual environments prior to metal fabrication.',
    metric: '40% Faster Commissioning',
    tags: ['Physics Digital Twin', 'Emulate3D Simulation', 'HIL Virtual Testing', 'FAT / SAT Acceleration'],
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1000&q=80',
    gridSpan: 'lg:col-span-7'
  }
];

export default function SolutionsArchitecture() {
  return (
    <section id="solutions" className="py-28 md:py-40 px-6 md:px-8 bg-[#00071A] font-sans relative text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-brand-orange mb-3 block">
              ● SOLUTION ARCHITECTURE
            </span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.04] tracking-tight">
              Technology built around <br />
              <span className="text-brand-orange glow-orange-text">real problems.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-300 max-w-md mt-4 md:mt-0 font-normal leading-relaxed text-left">
            Four scalable engineering pillars engineered to eliminate operational bottlenecks and accelerate factory output.
          </p>
        </div>

        {/* 4 Asymmetric Architecture Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          {solutionModules.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: easeCustom }}
              whileHover={{ y: -6, scale: 1.01 }}
              data-cursor="view"
              className={`${item.gridSpan} group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#00143D]/90 p-8 sm:p-12 flex flex-col justify-between min-h-[480px] transition-all duration-500 hover:border-brand-orange/60 shadow-2xl backdrop-blur-md hover:shadow-brand-orange/20`}
            >
              {/* Visible Image Container */}
              <div className="h-48 w-full rounded-2xl overflow-hidden mb-6 relative border border-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00143D] via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-brand-orange text-white font-mono font-bold text-xs shadow-lg shadow-brand-orange/40">
                  {item.metric}
                </div>
              </div>

              {/* Header: Number & Subtitle */}
              <div className="relative z-10 flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-display font-extrabold font-mono text-white group-hover:text-brand-orange transition-colors">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 font-semibold">
                    {item.subtitle}
                  </span>
                </div>

                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-white transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Subcategory Technical Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {item.tags.map(t => (
                    <span key={t} className="text-xs px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-white/80 font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expanding Orange Accent Line on Hover */}
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
