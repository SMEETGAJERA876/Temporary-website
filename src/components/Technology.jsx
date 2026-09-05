import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { easeCustom } from '../utils/motionVariants';

const techNodes = [
  {
    id: 'robotics',
    name: 'Robotics',
    category: 'Kinematics & Multi-Axis',
    desc: 'Deterministic multi-axis robot control, synchronized welding, and dynamic toolpath trajectory planning with zero collision risk.',
    protocols: ['EtherCAT', 'KSS / KUKA', 'RobotStudio', 'iRVision'],
    stat: '0.38s Cycle'
  },
  {
    id: 'ai',
    name: 'AI',
    category: 'Neural Classifiers',
    desc: 'Edge-deployed deep neural networks for acoustic bearing diagnosis and predictive tool wear degradation forecasting.',
    protocols: ['TensorRT', 'ONNX Runtime', 'Edge Containers', 'PyTorch'],
    stat: '< 12ms Latency'
  },
  {
    id: 'vision',
    name: 'Computer Vision',
    category: 'Automated Optical Inspection',
    desc: 'High-speed line-scan camera inspection validating dimensional tolerances and micron-level surface flaws at 1,200 parts/min.',
    protocols: ['GigE Vision', 'GenICam', 'OpenCV', 'Deep Vision'],
    stat: '99.99% Accuracy'
  },
  {
    id: 'iot',
    name: 'IoT',
    category: 'Fieldbus Telemetry',
    desc: 'Shop floor sensor networks aggregating high-frequency temperature, vibration, pressure, and flow telemetry into centralized gateways.',
    protocols: ['IO-Link', 'Modbus TCP', 'Profinet', 'EtherNet/IP'],
    stat: '50k Tags/Sec'
  },
  {
    id: 'twins',
    name: 'Digital Twins',
    category: '3D Physics Emulation',
    desc: 'Virtual commissioning suites executing exact PLC logic against real-time 3D physics models prior to physical machine assembly.',
    protocols: ['Emulate3D', 'Physics Engines', 'HIL Testing', 'Kinematics CAD'],
    stat: '100% Pre-FAT'
  },
  {
    id: 'data',
    name: 'Data Platforms',
    category: 'Industrial Data Lakes',
    desc: 'Real-time telemetry pipelines transforming raw unstructured time-series machine data into actionable analytics and compliance logs.',
    protocols: ['OPC UA', 'MQTT Sparkplug B', 'Kafka', 'InfluxDB'],
    stat: 'Zero Jitter'
  },
  {
    id: 'cloud',
    name: 'Cloud',
    category: 'Enterprise Orchestration',
    desc: 'Hybrid edge-to-cloud infrastructure delivering centralized model retraining, fleet device management, and executive OEE dashboards.',
    protocols: ['Azure IoT Hub', 'AWS SiteWise', 'Kubernetes', 'REST / GraphQL'],
    stat: '99.99% Uptime'
  },
  {
    id: 'automation',
    name: 'Automation',
    category: 'Deterministic Control',
    desc: 'Turnkey PLC, DCS, and SCADA programming, hard real-time loop PID tuning, safety interlocks, and responsive HMI operator screens.',
    protocols: ['TwinCAT 3', 'Studio 5000', 'TIA Portal', 'Ignition SCADA'],
    stat: '< 800µs Scan'
  }
];

export default function Technology() {
  const [activeNodeId, setActiveNodeId] = useState('automation');
  const activeNode = techNodes.find(n => n.id === activeNodeId) || techNodes[0];

  return (
    <section id="solutions" className="py-28 md:py-36 px-6 md:px-8 bg-[#000E2E] font-sans relative overflow-hidden text-white border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: easeCustom }}
            className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-brand-orange mb-3 block"
          >
            ● CONNECTED ARCHITECTURE
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.04] tracking-tight mb-6"
          >
            Technology that moves <br />
            your operation forward.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
            className="text-base sm:text-lg text-brand-gray leading-relaxed font-normal"
          >
            An interconnected industrial stack engineered to bridge raw sensor signals with deterministic control and cloud AI intelligence.
          </motion.p>
        </div>

        {/* Interactive Technology Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Node Selector (2x4 Grid) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {techNodes.map((node) => {
              const isActive = activeNodeId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className={`p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between min-h-[140px] cursor-pointer ${
                    isActive
                      ? 'bg-[#032063] border-brand-orange shadow-[0_0_30px_rgba(248,85,8,0.35)] translate-y-[-2px]'
                      : 'bg-[#00143D] border-white/10 hover:border-white/25 hover:bg-[#00194F]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-brand-orange animate-ping' : 'bg-white/30'}`} />
                    <span className="text-[10px] font-mono text-white/40">{node.stat}</span>
                  </div>
                  <div>
                    <h4 className={`text-base font-display font-extrabold ${isActive ? 'text-white' : 'text-white/80'}`}>
                      {node.name}
                    </h4>
                    <span className="text-[11px] text-brand-gray block mt-0.5 truncate">
                      {node.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Node Deep-Dive Visualizer Panel */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: easeCustom }}
                className="h-full rounded-[2.5rem] bg-[#00143D] border border-brand-orange/40 p-8 sm:p-10 flex flex-col justify-between text-left shadow-2xl relative overflow-hidden"
              >
                {/* Ambient Orange Glow inside panel */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/15 rounded-full blur-[90px] pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3.5 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-xs font-mono font-bold text-brand-orange uppercase">
                      {activeNode.category}
                    </span>
                    <span className="text-xs font-mono text-white/60">
                      Standard: ISO / ISA
                    </span>
                  </div>

                  <h3 className="text-3xl font-display font-extrabold text-white mb-4">
                    {activeNode.name}
                  </h3>

                  <p className="text-sm sm:text-base text-brand-gray leading-relaxed mb-8 font-normal">
                    {activeNode.desc}
                  </p>

                  <div className="mb-6">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/60 block mb-3">
                      Verified Protocols & Runtimes:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeNode.protocols.map(p => (
                        <span key={p} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-semibold text-white/90">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-white/40 uppercase">Performance Benchmark</div>
                    <div className="text-base font-mono font-extrabold text-brand-orange">{activeNode.stat}</div>
                  </div>

                  <a
                    href="#contact"
                    className="px-5 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orangeBright text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-brand-orange/30"
                  >
                    Request Specs →
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
