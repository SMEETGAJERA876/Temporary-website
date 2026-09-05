import React from 'react';
import { motion } from 'motion/react';
import { easeCustom } from '../utils/motionVariants';

const techLayers = [
  { name: 'AI & Neural Models', spec: 'Sub-12ms Edge TensorRT', desc: 'Predictive bearing wear radar, vibration acoustics, and defect neural inference.' },
  { name: 'Machine Vision', spec: 'GigE & GenICam 1,200 ppm', desc: 'Sub-micron automated optical inspection on high-speed discrete production lines.' },
  { name: 'Robotics Kinematics', spec: 'Multi-Axis Synchronization', desc: 'Deterministic 6-axis robot kinematics, welding cells, and collision-free paths.' },
  { name: 'Fieldbus & IIoT', spec: 'IO-Link, EtherNet/IP, Profinet', desc: 'Industrial sensor aggregation across heterogeneous shop floor fieldbuses.' },
  { name: 'Enterprise Cloud', spec: 'Azure IoT Hub & AWS SiteWise', desc: 'Centralized model fleet management, multi-site analytics, and executive OEE.' },
  { name: 'Data Pipelines', spec: '50k Tags/Sec OPC UA & MQTT', desc: 'Unified industrial time-series streams delivering zero jitter and full ISA-95 mapping.' },
  { name: 'Digital Twins 3D', spec: 'Physics Simulation & Pre-FAT', desc: 'Virtual commissioning suites executing exact PLC logic against 3D physics CAD.' },
  { name: 'Deterministic Control', spec: '< 800µs Cyclic Logic Scan', desc: 'Hard real-time IEC 61131-3 structured control for Beckhoff, Siemens, and Rockwell.' }
];

export default function TechnologyLayer() {
  return (
    <section id="technology" className="py-28 md:py-40 px-6 md:px-8 bg-black font-sans relative overflow-hidden text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-brand-orange mb-3 block">
            ● THE INFRASTRUCTURE LAYER
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.04] tracking-tight mb-6">
            The technology layer <br />
            behind <span className="text-brand-orange glow-orange-text">modern industry.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Eight modular technology domains engineered for zero-jitter deterministic execution and cloud scalability.
          </p>
        </div>

        {/* 8-Grid Architecture Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {techLayers.map((layer, idx) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: easeCustom }}
              whileHover={{ y: -6, borderColor: 'rgba(248, 85, 8, 0.6)' }}
              className="p-7 rounded-[2rem] bg-[#00143D]/90 border border-white/10 shadow-2xl hover:shadow-brand-orange/20 transition-all duration-300 flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                  <span className="text-[10px] font-mono font-bold tracking-wider text-white/50 uppercase">
                    DOMAIN 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2">
                  {layer.name}
                </h3>
                <div className="text-xs font-mono font-bold text-brand-orange mb-4">
                  {layer.spec}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-normal pt-4 border-t border-white/10">
                {layer.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
