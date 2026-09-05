import React from 'react';
import { motion } from 'motion/react';
import { easeCustom } from '../utils/motionVariants';
import { ArrowUpRight } from 'lucide-react';

const editorialStudies = [
  {
    category: 'AI COMPUTER VISION',
    headline: 'From manual inspection to intelligent vision.',
    client: 'Semiconductor Wafer Manufacturer',
    challenge: 'Human visual inspection of microscopic silicon defects resulted in variable yields and 18-minute validation cycles per wafer lot.',
    solution: 'Engineered a custom automated optical inspection cell running edge neural classifiers under SECS/GEM factory protocols.',
    metrics: [
      { label: 'Inspection Time', value: '↓ 42%' },
      { label: 'Throughput Uplift', value: '↑ 31%' },
      { label: 'Detection Accuracy', value: '99.4%' }
    ],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'ROBOTIC KINEMATICS',
    headline: 'From fragmented lines to synchronized robotics.',
    client: 'Tier-1 Automotive Body Supplier',
    challenge: 'Unsynchronized legacy robotic cells caused line jams, inconsistent welds, and 6-week commissioning downtimes.',
    solution: 'Built physics-accurate 3D digital twins to validate PLC kinematics before deployment, synchronizing 14 robotic arms.',
    metrics: [
      { label: 'Commissioning Downtime', value: '↓ 55%' },
      { label: 'Welding Cycle Speed', value: '↑ 28%' },
      { label: 'Collision Incidents', value: 'Zero' }
    ],
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function EditorialCaseStudies() {
  return (
    <section id="case-studies" className="py-28 md:py-40 px-6 md:px-8 bg-[#00071A] font-sans relative text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-brand-orange mb-3 block">
            ● PROVEN IMPACT
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.04] tracking-tight mb-6">
            Real outcomes. <br />
            <span className="text-brand-orange glow-orange-text">Measurable impact.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Examine how dhgsoft combines deterministic controls and AI to deliver verifiable industrial performance.
          </p>
        </div>

        {/* Editorial Case Studies Stack */}
        <div className="space-y-16 text-left">
          {editorialStudies.map((study, idx) => (
            <motion.div
              key={study.headline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: easeCustom }}
              className="p-8 sm:p-12 rounded-[3rem] bg-[#00194F] border border-white/15 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center hover:border-brand-orange/50 transition-all duration-500"
            >
              {/* Left Column: Headline, Narrative & Challenge/Solution */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3.5 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-[10px] font-mono font-bold tracking-widest text-brand-orange uppercase">
                      {study.category}
                    </span>
                    <span className="text-xs font-mono text-white/50">• {study.client}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-6 leading-tight">
                    {study.headline}
                  </h3>

                  <div className="space-y-4 mb-8 text-sm text-slate-300 leading-relaxed font-normal">
                    <p><strong className="text-white font-semibold">Challenge:</strong> {study.challenge}</p>
                    <p><strong className="text-white font-semibold">Solution:</strong> {study.solution}</p>
                  </div>
                </div>

                {/* Performance Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  {study.metrics.map(m => (
                    <div key={m.label}>
                      <div className="text-2xl sm:text-3xl font-display font-extrabold text-brand-orange mb-1">
                        {m.value}
                      </div>
                      <div className="text-[11px] font-mono text-white/50">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Media Card */}
              <div className="lg:col-span-5 h-[320px] sm:h-[380px] rounded-[2.5rem] overflow-hidden border border-white/10 relative shadow-2xl">
                <img
                  src={study.image}
                  alt={study.headline}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00194F] via-transparent to-transparent" />
                <a
                  href="#contact"
                  className="absolute bottom-6 right-6 p-4 rounded-full bg-brand-orange text-white hover:bg-brand-orangeBright transition-all shadow-xl shadow-brand-orange/40 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider"
                >
                  <span>Case Study Data</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
