import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const immersivePillars = [
  {
    id: 'digital-twins',
    tabName: '01. Digital Twin Emulation',
    badge: 'Virtual Commissioning',
    title: 'Physics-Accurate Robotics & Kinematics Twin',
    subtitle: 'Zero downtime virtual commissioning before physical deployment.',
    description: 'We build comprehensive 3D physics-accurate digital models of production lines and robotic workcells, testing every PLC routine and cycle speed in virtual space before metal is cut.',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Cycle Time Simulation', value: '0.38s (Optimal)' },
      { label: 'Commissioning Risk', value: '0.00% Zero-Defect' },
      { label: 'Engineering Hours Saved', value: '340+ Hrs / Line' }
    ],
    features: ['Multi-Axis Kinematics', 'PLC Signal Emulation', 'Collision Avoidance', 'Virtual FAT/SAT Testing']
  },
  {
    id: 'semiconductor-fab',
    tabName: '02. Semiconductor Cleanroom',
    badge: 'Sub-Micron Precision',
    title: 'Automated Wafer Fabrication & SECS/GEM Telemetry',
    subtitle: 'High-throughput cleanroom factory execution systems.',
    description: 'Connecting wafer tracking robots, chemical bath lines, and lithography stages with SECS/GEM tool communication for maximum yield and zero micro-vibration disruption.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Wafer Yield Rate', value: '99.98%' },
      { label: 'Protocol Standard', value: 'SECS / GEM 300mm' },
      { label: 'Cleanroom Class', value: 'ISO Class 1 Compliant' }
    ],
    features: ['SECS/GEM Integration', 'Carrier Wafer Tracking', 'Vibration Monitoring', 'Recipe Management']
  },
  {
    id: 'control-determinism',
    tabName: '03. Deterministic SCADA & PLC',
    badge: 'Hard Real-Time Control',
    title: 'Sub-Millisecond Machine Logic & Supervisory Control',
    subtitle: 'Fail-safe control architectures for high-speed factories.',
    description: 'Architecting ultra-low latency PLC control grids, synchronized multi-axis servo drives, and intuitive SCADA dashboards with distributed fault isolation.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Logic Scan Cycle', value: '< 800 µs' },
      { label: 'Safety Interlocks', value: 'SIL 3 / Ple Certified' },
      { label: 'I/O Determinism', value: '100% Jitter-Free' }
    ],
    features: ['TwinCAT 3 / ControlLogix', 'Loop PID Tuning', 'SCADA Alarm Redundancy', 'Fail-Safe Safety Logic']
  },
  {
    id: 'edge-vision-ai',
    tabName: '04. Industrial Edge AI',
    badge: 'Neural Defect Detection',
    title: 'Real-Time Automated Optical Inspection & Predictive Anomaly',
    subtitle: 'Containerized AI models running directly on the factory floor.',
    description: 'Deploying custom computer vision models to edge compute nodes for sub-second surface inspection, acoustic bearing diagnosis, and autonomous drift correction.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Inspection Accuracy', value: '99.99%' },
      { label: 'Edge Inference Speed', value: '11.4 ms' },
      { label: 'Unplanned Stop Reduction', value: '-42% Downtime' }
    ],
    features: ['High-Speed Optical AI', 'Bearing Anomaly Radar', 'Edge Docker Fleet', 'Cloud Model Retraining']
  }
];

export default function FeaturedImmersive() {
  const [activePillarIdx, setActivePillarIdx] = useState(0);
  const pillar = immersivePillars[activePillarIdx];

  return (
    <section className="relative bg-brand-navy font-sans overflow-hidden py-24 md:py-32 border-y border-white/10 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-bright/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-12 text-center items-center">
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-brand-sky uppercase mb-3 block">
            INTERACTIVE DIGITAL ENGINEERING CENTERPIECE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05] tracking-tight max-w-4xl">
            From Plant Floor to Enterprise Intelligence
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mt-4 leading-relaxed">
            Click across our core industrial technology pillars to experience live simulated telemetry, digital twin kinematics, and edge AI architectures.
          </p>
        </div>

        {/* Pillar Switcher Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {immersivePillars.map((item, idx) => {
            const isActive = activePillarIdx === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActivePillarIdx(idx)}
                className={`relative px-4 py-3.5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-brand-blue/30 border-brand-blue shadow-lg shadow-brand-blue/25 translate-y-[-2px]'
                    : 'bg-brand-darknavy/60 border-white/10 hover:border-white/20 hover:bg-brand-darknavy'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-brand-sky' : 'text-white/40'}`}>
                    {item.badge}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-brand-bright animate-ping' : 'bg-white/20'}`} />
                </div>
                <div className="font-display font-bold text-white text-xs md:text-sm leading-snug">
                  {item.tabName}
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activePillarIndicator"
                    className="absolute inset-0 rounded-2xl border-2 border-brand-bright/60 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-[3rem] bg-brand-darknavy/90 border border-white/15 overflow-hidden shadow-2xl p-8 md:p-12 text-left"
          >
            {/* LEFT: Rich Visual with Live HUD overlay */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden border border-white/10 group">
              <img
                src={pillar.image}
                alt={pillar.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darknavy via-brand-darknavy/30 to-transparent" />

              {/* Floating Telemetry Stats on image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-brand-navy/80 border border-white/15 backdrop-blur-md grid grid-cols-3 gap-2 text-center">
                {pillar.stats.map(s => (
                  <div key={s.label}>
                    <div className="text-[10px] font-semibold text-white/50 truncate uppercase">{s.label}</div>
                    <div className="text-xs sm:text-sm font-mono font-bold text-brand-sky mt-0.5">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Content, Capabilities & Action */}
            <div className="lg:col-span-6 flex flex-col justify-between py-2">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/40 text-xs font-bold text-brand-sky mb-4">
                  <span>{pillar.badge}</span>
                  <span className="w-1 h-1 rounded-full bg-brand-bright" />
                  <span>Real-time Integration</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm font-medium text-brand-sky/90 mb-4 uppercase tracking-wide">
                  {pillar.subtitle}
                </p>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8">
                  {pillar.description}
                </p>

                {/* Key feature checklist tags */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {pillar.features.map(f => (
                    <div key={f} className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white/90">
                      <span className="w-4 h-4 rounded-full bg-brand-blue/30 text-brand-sky flex items-center justify-center font-bold text-[10px]">
                        ✓
                      </span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-white/60">
                  Ready to deploy on your manufacturing floor?
                </span>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-brand-blue hover:bg-brand-electric font-bold text-xs sm:text-sm text-white shadow-lg shadow-brand-blue/30 transition-all hover:scale-105 text-center"
                >
                  Schedule Solution Walkthrough →
                </a>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
