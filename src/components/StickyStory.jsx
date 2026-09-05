import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { easeCustom } from '../utils/motionVariants';

const storySteps = [
  {
    step: '01',
    phase: 'CONNECT',
    title: 'Machine Telemetry & OT/IT Convergence',
    description: 'We connect heterogeneous plant floor devices, legacy PLCs, modern industrial robots, and environmental sensors through secure OPC UA and MQTT-Sparkplug B pipelines into centralized data lakes.',
    highlights: ['Zero-Trust OT Network DMZ', 'Multi-Protocol Fieldbus Ingestion', '50,000+ Tags/Sec Real-Time Sync', 'ISA-95 Level 0-4 Standardization']
  },
  {
    step: '02',
    phase: 'AUTOMATE',
    title: 'Deterministic PLC & Kinematics Control',
    description: 'Our certified controls engineers write structured IEC 61131-3 logic for Beckhoff TwinCAT, Siemens, and Rockwell platforms, integrating multi-axis servo drives and fail-safe safety routines.',
    highlights: ['Sub-Millisecond Loop Execution', 'Synchronized Multi-Axis Kinematics', 'UL 508A Enclosure Fabrication', 'Virtual Commissioning & FAT/SAT']
  },
  {
    step: '03',
    phase: 'ANALYZE',
    title: 'Edge AI & Automated Optical Inspection',
    description: 'Neural defect inspection networks and acoustic bearing wear classifiers run directly on local industrial PCs, scoring component health in real time without sending raw data to the cloud.',
    highlights: ['< 12ms Edge Inference Latency', 'Sub-Micron Surface Defect Radar', 'Acoustic Bearing Anomaly Scoring', 'Containerized Docker Edge Fleets']
  },
  {
    step: '04',
    phase: 'OPTIMIZE',
    title: 'Enterprise OEE & Continuous Scale',
    description: 'Executive dashboards and MES integrations empower plant managers to anticipate tool wear, balance cycle bottlenecks, and sustain peak equipment effectiveness across all facilities.',
    highlights: ['+34% Average OEE Uplift', 'Predictive Downtime Prevention', '24/7 SLA Technical Handover', 'Quarterly Firmware Upgrades']
  }
];

export default function StickyStory() {
  const containerRef = useRef(null);

  return (
    <section 
      id="story"
      ref={containerRef}
      className="py-28 md:py-36 px-6 md:px-8 bg-[#000E2E] font-sans relative overflow-hidden text-white border-t border-white/10"
    >
      {/* Ambient Orange Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-brand-orange/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Sticky Heading */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeCustom }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-brand-orange uppercase mb-4"
          >
            <span>● THE INTEGRATION LIFECYCLE</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.04] tracking-tight mb-6"
          >
            From complexity <br />
            to <span className="text-brand-orange glow-orange-text">clarity.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-md font-normal"
          >
            A disciplined four-stage transformation framework that turns fragmented factory data into predictable, scalable industrial performance.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeCustom }}
            className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-brand-orange hover:text-white transition-colors border-b border-brand-orange/60 pb-1"
          >
            <span>Discuss your integration scope</span>
            <span>→</span>
          </motion.a>
        </div>

        {/* RIGHT COLUMN: Scrolling Interactive Panels */}
        <div className="lg:col-span-7 flex flex-col gap-8 text-left">
          {storySteps.map((panel) => (
            <motion.div
              key={panel.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: easeCustom }}
              whileHover={{ borderColor: 'rgba(248, 85, 8, 0.7)', y: -4 }}
              className="p-8 sm:p-10 rounded-[2.5rem] bg-[#00194F] border border-white/15 transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(248,85,8,0.2)] group relative overflow-hidden"
            >
              {/* Corner Watermark Number */}
              <div className="absolute right-8 top-6 text-5xl sm:text-6xl font-mono font-extrabold text-white/[0.05] group-hover:text-brand-orange/20 transition-colors pointer-events-none">
                {panel.step}
              </div>

              {/* Step Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-[10px] font-mono font-bold text-brand-orange uppercase tracking-wider">
                  STAGE {panel.step} / {panel.phase}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-brand-orange transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4 group-hover:text-brand-orange transition-colors">
                {panel.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 font-normal">
                {panel.description}
              </p>

              {/* Checklist Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/10">
                {panel.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-white/90">
                    <span className="w-4 h-4 rounded-full bg-brand-orange/25 text-brand-orange flex items-center justify-center font-bold text-[10px]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
