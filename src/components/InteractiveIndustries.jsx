import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { easeCustom } from '../utils/motionVariants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const industriesData = [
  {
    id: 'manufacturing',
    title: 'Manufacturing & Automotive',
    headline: 'High-Throughput Robotic Kinematics & Body Assembly',
    description: 'Engineering multi-axis synchronized welding cells, automated stamping press lines, and deterministic PLC networks for Tier-1 automotive and industrial OEMs.',
    highlights: ['Sub-millisecond robotic kinematics synchronization', 'OEE optimization & predictive tool wear alerts', '3D physics digital twin pre-commissioning'],
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80',
    stat: '32% Cycle Reduction'
  },
  {
    id: 'lifesciences',
    title: 'Life Sciences & Pharma',
    headline: 'GAMP 5 Cleanroom Automation & Electronic Batch Records',
    description: 'Deploying FDA 21 CFR Part 11 compliant SCADA platforms, automated syringe filling isolators, and clean-in-place (CIP) continuous loops.',
    highlights: ['Full GAMP 5 & FDA regulatory validation packages', 'Automated optical vial & particulate inspection', 'Real-time electronic batch record (EBR) sync'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    stat: '100% FDA Compliance'
  },
  {
    id: 'consumer',
    title: 'Consumer Packaging',
    headline: 'High-Speed Vision Sorting & Zero-Defect Pick & Place',
    description: 'High-speed automated cartoners, dynamic vision-guided delta robotics, and real-time end-of-line palletizing automation for global FMCG brands.',
    highlights: ['1,200 parts/min automated visual defect sorting', 'Rapid recipe switchover for multi-SKU lines', 'Integrated carton serialization and tracking'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    stat: '1,200 Parts / Min'
  },
  {
    id: 'logistics',
    title: 'Logistics & Intralogistics',
    headline: 'AMR Fleet Orchestration & Automated High-Bay Storage',
    description: 'Autonomous mobile robot (AMR) routing, high-bay automated storage & retrieval systems (ASRS), and dynamic order fulfillment sorting grids.',
    highlights: ['Dynamic multi-robot fleet traffic deconfliction', 'Zero-downtime integration with warehouse WMS/ERP', 'LiDAR safety zones and SIL3 certified interlocks'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    stat: '99.99% Sort Precision'
  },
  {
    id: 'energy',
    title: 'Energy & Utilities',
    headline: 'Distributed DCS Telemetry & Battery Cell Automation',
    description: 'Deploying distributed control systems (DCS), high-voltage battery formation automation, and SCADA monitoring for critical infrastructure.',
    highlights: ['Hardened IEC 62443 cyber-secure OT perimeter', 'High-frequency vibration & thermal monitoring', 'Grid telemetry aggregation under DNP3 & Modbus'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    stat: 'Zero-Jitter Telemetry'
  },
  {
    id: 'engineering',
    title: 'Advanced Engineering & Semi',
    headline: 'Cleanroom Wafer Automation & SECS/GEM Data Streams',
    description: 'Engineering ultra-clean semiconductor wafer cassette handlers, precision vacuum robotics, and SECS/GEM factory communication backbones.',
    highlights: ['SECS/GEM & GEM300 compliance standards', 'Sub-micron vibration dampening kinematics', 'Real-time wafer tracking & yield telemetry'],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    stat: '99.98% Wafer Yield'
  }
];

export default function InteractiveIndustries() {
  const [activeTab, setActiveTab] = useState('manufacturing');
  const currentIndustry = industriesData.find(i => i.id === activeTab) || industriesData[0];

  return (
    <section id="industries" className="py-28 md:py-40 px-6 md:px-8 bg-black font-sans relative text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-brand-orange mb-3 block">
            ● DOMAIN SPECIALIZATIONS
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.04] tracking-tight mb-6">
            Built for environments where <br />
            <span className="text-brand-orange glow-orange-text">precision matters.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Select an industry sector below to examine our dedicated domain architectures and performance benchmarks.
          </p>
        </div>

        {/* Master Interactive Panel Container */}
        <div className="rounded-[3rem] bg-[#00194F] border border-white/15 p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Industry Selector List */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3 text-left">
            {industriesData.map((ind) => {
              const isActive = activeTab === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`p-4 sm:p-5 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? 'bg-brand-blue border-brand-orange text-white shadow-xl shadow-brand-blue/40'
                      : 'bg-[#00143D] border-white/10 text-white/80 hover:border-white/30 hover:bg-[#00236B]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full transition-all ${isActive ? 'bg-brand-orange animate-ping' : 'bg-white/30'}`} />
                    <span className="font-display font-bold text-sm sm:text-base tracking-tight">
                      {ind.title}
                    </span>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-brand-orange translate-x-1' : 'text-white/40 group-hover:text-white'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep-Dive Media & Highlight Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndustry.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: easeCustom }}
                className="h-full rounded-[2.5rem] bg-[#00143D] border border-white/15 overflow-hidden flex flex-col justify-between text-left shadow-2xl relative"
              >
                {/* Visual Image Header */}
                <div className="h-64 sm:h-72 w-full relative overflow-hidden border-b border-white/10">
                  <img
                    src={currentIndustry.image}
                    alt={currentIndustry.headline}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00143D] via-transparent to-transparent" />
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-4 right-6 px-4 py-1.5 rounded-full bg-brand-orange text-white font-mono font-bold text-xs shadow-lg shadow-brand-orange/40">
                    {currentIndustry.stat}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4 leading-tight">
                      {currentIndustry.headline}
                    </h3>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 font-normal">
                      {currentIndustry.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-2.5 mb-8">
                      {currentIndustry.highlights.map(h => (
                        <div key={h} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white/95">
                          <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-white/50">
                      dhgsoft verified scope
                    </span>
                    <a
                      href="#contact"
                      className="px-6 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orangeBright text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-brand-orange/30"
                    >
                      Request Domain Proposal →
                    </a>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
