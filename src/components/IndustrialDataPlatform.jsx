import React from 'react';
import { motion } from 'motion/react';

const platformPillars = [
  { name: 'Machines', tag: 'Fieldbus & PLC', desc: 'OPC UA, IO-Link, and EtherCAT cyclic telemetry streaming from 500+ plant floor assets.' },
  { name: 'Data', tag: 'High-Frequency Ingestion', desc: 'Zero-jitter 50,000 tag/sec real-time time-series streams processed through edge brokers.' },
  { name: 'AI Models', tag: 'Neural Classification', desc: 'Sub-12ms inference running locally on industrial PCs for acoustic wear and optical defect checks.' },
  { name: 'People', tag: 'HMI & Digital Batch', desc: 'Responsive ISA-101 high-performance operator screens and digital work instructions.' },
  { name: 'Operations', tag: 'Enterprise OEE', desc: 'Plant-wide predictive maintenance dashboards balancing cycle bottlenecks across all sites.' }
];

export default function IndustrialDataPlatform() {
  return (
    <section id="platform" className="py-28 md:py-40 px-6 md:px-8 bg-black font-sans relative overflow-hidden text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-brand-orange mb-3 block">
            ● INDUSTRIAL INTELLIGENCE FABRIC
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.04] tracking-tight mb-6">
            Connected intelligence <br />
            across <span className="text-brand-orange glow-orange-text">every dimension.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Unifying raw physical field signals, edge neural analytics, human operators, and executive operations into a single deterministic telemetry stream.
          </p>
        </div>

        {/* Interactive SVG Flow Visualization */}
        <div className="rounded-[3rem] bg-[#00143D]/90 border border-white/10 p-8 sm:p-12 mb-12 shadow-2xl relative overflow-hidden backdrop-blur-md">
          
          {/* Animated SVG Data Bus */}
          <div className="h-44 sm:h-52 w-full relative flex items-center justify-center">
            <svg viewBox="0 0 1000 200" className="w-full h-full">
              <defs>
                <linearGradient id="streamGradDark" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0111A2" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#F85508" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0111A2" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Main Data Bus Lines */}
              <line x1="50" y1="100" x2="950" y2="100" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2" strokeDasharray="6 6" />
              <motion.line
                x1="50"
                y1="100"
                x2="950"
                y2="100"
                stroke="url(#streamGradDark)"
                strokeWidth="3.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* 5 Vertical Tap Spokes and Nodes */}
              {[150, 325, 500, 675, 850].map((x, i) => (
                <g key={`spoke-${i}`}>
                  <line x1={x} y1="30" x2={x} y2="170" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
                  <motion.circle
                    cx={x}
                    cy="100"
                    r="8"
                    fill={i === 2 ? '#F85508' : '#0111A2'}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  />
                  <circle cx={x} cy="30" r="4" fill="#F85508" />
                  <circle cx={x} cy="170" r="4" fill="#0111A2" />
                </g>
              ))}
            </svg>
          </div>

          {/* 5 Dimension Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left pt-6 border-t border-white/10">
            {platformPillars.map((p, idx) => (
              <div key={p.name} className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-brand-orange">0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                </div>
                <h4 className="text-base font-display font-bold text-white mb-1">{p.name}</h4>
                <div className="text-[10px] font-mono text-white/50 mb-2 uppercase">{p.tag}</div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
