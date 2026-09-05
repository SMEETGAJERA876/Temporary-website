import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { easeCustom } from '../utils/motionVariants';

const systemNodes = [
  {
    id: 'ai',
    title: 'AI & Inference',
    category: 'Neural Diagnostics',
    description: 'Sub-12ms neural defect classifiers and acoustic bearing anomaly detection deployed directly to plant floor edge hardware.',
    coords: { x: 50, y: 15 },
    angle: -90
  },
  {
    id: 'automation',
    title: 'Automation & PLC',
    category: 'Deterministic Controls',
    description: 'Sub-millisecond cyclic execution on Beckhoff TwinCAT, Siemens, and Rockwell architectures with safety interlocks.',
    coords: { x: 75, y: 25 },
    angle: -45
  },
  {
    id: 'software',
    title: 'Connected Software',
    category: 'Industrial Platforms',
    description: 'ISA-95 compliant MES integrations, electronic batch records (EBR), and web-based SCADA visualization pipelines.',
    coords: { x: 85, y: 50 },
    angle: 0
  },
  {
    id: 'robotics',
    title: 'Robotics & Kinematics',
    category: 'Multi-Axis Cells',
    description: 'Synchronized multi-axis robot control, collision-free trajectory planning, and high-speed pick-and-place automation.',
    coords: { x: 75, y: 75 },
    angle: 45
  },
  {
    id: 'vision',
    title: 'Machine Vision',
    category: 'Optical Inspection',
    description: 'GigE high-speed line-scan automated optical inspection validating micron-level dimensional tolerances at 1,200 parts/min.',
    coords: { x: 50, y: 85 },
    angle: 90
  },
  {
    id: 'data',
    title: 'Industrial Data',
    category: 'Time-Series Lakes',
    description: 'Unified 50,000+ tag/second telemetry pipelines streaming MQTT Sparkplug B and OPC UA packets with zero jitter.',
    coords: { x: 25, y: 75 },
    angle: 135
  },
  {
    id: 'cloud',
    title: 'Cloud Orchestration',
    category: 'Fleet Management',
    description: 'Hybrid edge-to-cloud infrastructure delivering centralized model retraining, container fleet deployment, and enterprise OEE.',
    coords: { x: 15, y: 50 },
    angle: 180
  },
  {
    id: 'iot',
    title: 'IIoT & Fieldbus',
    category: 'Sensor Telemetry',
    description: 'Zero-trust OT network DMZs bridging IO-Link, Profinet, EtherNet/IP, and Modbus TCP sensor telemetry.',
    coords: { x: 25, y: 25 },
    angle: 225
  }
];

export default function SystemVisualization() {
  const [hoveredNodeId, setHoveredNodeId] = useState('ai');
  const activeNode = systemNodes.find(n => n.id === hoveredNodeId) || systemNodes[0];

  return (
    <section id="system" className="py-28 md:py-40 px-6 md:px-8 bg-[#000E2E] relative overflow-hidden font-sans text-white border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-blue/15 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-brand-orange mb-3 block">
            ● THE DHGSOFT SYSTEM
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.04] tracking-tight mb-6">
            One system. <br />
            <span className="text-brand-orange glow-orange-text">Infinite possibilities.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Hover over any discipline in our connected system architecture to inspect real-time integration parameters.
          </p>
        </div>

        {/* System Interactive Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left / Center: Interactive Radial Node Network (SVG) */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[480px] sm:min-h-[580px] bg-gradient-to-br from-[#00143D]/90 via-[#000E2E] to-black rounded-[3rem] border border-white/15 p-6 shadow-2xl backdrop-blur-xl">
            
            {/* SVG Connecting Vector Lines */}
            <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Central Outer Ring */}
              <circle cx="250" cy="250" r="170" fill="none" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="250" cy="250" r="110" fill="none" stroke="rgba(1, 17, 162, 0.4)" strokeWidth="1" />

              {/* Connecting Spokes */}
              {systemNodes.map((node) => {
                const isHovered = hoveredNodeId === node.id;
                const radians = (node.angle * Math.PI) / 180;
                const targetX = 250 + 170 * Math.cos(radians);
                const targetY = 250 + 170 * Math.sin(radians);

                return (
                  <g key={`line-${node.id}`}>
                    <line
                      x1="250"
                      y1="250"
                      x2={targetX}
                      y2={targetY}
                      stroke={isHovered ? '#F85508' : 'rgba(255, 255, 255, 0.18)'}
                      strokeWidth={isHovered ? '2.5' : '1'}
                      strokeDasharray={isHovered ? 'none' : '4 4'}
                      className="transition-all duration-300"
                    />
                    {isHovered && (
                      <circle cx={targetX} cy={targetY} r="5" fill="#F85508" filter="drop-shadow(0 0 6px rgba(248,85,8,0.8))" />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Central DHGSOFT Core Circle */}
            <div className="relative z-20 w-32 h-32 rounded-full bg-brand-navy shadow-2xl flex flex-col items-center justify-center text-center p-3 select-none text-white border-2 border-brand-orange">
              <span className="text-[10px] font-mono tracking-widest text-brand-orange uppercase font-bold">CORE</span>
              <span className="text-sm font-display font-extrabold tracking-wider">DHGSOFT</span>
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping mt-1" />
            </div>

            {/* Orbiting Satellite Interactive Node Buttons */}
            {systemNodes.map((node) => {
              const isHovered = hoveredNodeId === node.id;
              const radians = (node.angle * Math.PI) / 180;
              const radius = 170;
              const leftPercent = 50 + (radius / 250) * 50 * Math.cos(radians);
              const topPercent = 50 + (radius / 250) * 50 * Math.sin(radians);

              return (
                <button
                  key={node.id}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onClick={() => setHoveredNodeId(node.id)}
                  style={{
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  className={`absolute z-30 px-3.5 py-2 rounded-2xl text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                    isHovered
                      ? 'bg-brand-orange text-white scale-110 shadow-lg shadow-brand-orange/40 border border-brand-orange'
                      : 'bg-[#00194F] text-white/80 border border-white/15 shadow-sm hover:border-brand-orange hover:text-white'
                  }`}
                >
                  {node.title.split(' ')[0]}
                </button>
              );
            })}

          </div>

          {/* Right: Active Discipline Deep-Dive Panel */}
          <div className="lg:col-span-5 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: easeCustom }}
                className="p-8 sm:p-10 rounded-[2.5rem] bg-[#00143D]/90 border border-white/15 shadow-2xl relative overflow-hidden backdrop-blur-md"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-xs font-mono font-bold text-brand-orange uppercase">
                    {activeNode.category}
                  </span>
                  <span className="text-xs font-mono text-white/50">
                    System Node: 0{systemNodes.indexOf(activeNode) + 1}
                  </span>
                </div>

                <h3 className="text-3xl font-display font-extrabold text-white mb-4">
                  {activeNode.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 font-normal">
                  {activeNode.description}
                </p>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs font-mono text-white/50">
                    Full Industrial Protocol Scope
                  </div>
                  <a
                    href="#solutions"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-orange hover:text-white transition-colors"
                  >
                    <span>View Architecture</span>
                    <span>→</span>
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
