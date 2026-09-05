import React from 'react';
import { motion } from 'motion/react';

const coreHighlights = [
  {
    tag: 'DETERMINISTIC CONTROL',
    title: 'Hard Real-Time PLC & Robotics',
    desc: 'Sub-millisecond loop execution across Beckhoff TwinCAT, Rockwell ControlLogix, and Siemens S7-1500 controllers with fail-safe safety interlocks.'
  },
  {
    tag: 'EDGE TELEMETRY',
    title: 'OPC UA & MQTT-Sparkplug B',
    desc: 'Zero-trust edge gateway pipelines collecting up to 50,000 I/O tags per second, synchronizing shop floor data directly to cloud data lakes.'
  },
  {
    tag: 'PREDICTIVE AI',
    title: 'Neural Anomaly & Quality Radar',
    desc: 'Machine learning classifiers running directly on local edge hardware to detect tool drift, bearing wear, and optical defects before line stoppages occur.'
  }
];

export default function Introduction() {
  return (
    <section id="introduction" className="relative py-24 md:py-32 px-6 md:px-8 bg-brand-darknavy font-sans overflow-hidden border-b border-white/10 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Side: Eyebrow + Large Editorial Headline */}
        <div className="lg:col-span-5 flex flex-col items-start text-left relative pl-6 lg:pl-10">
          
          {/* Vertical Glowing Accent Laser */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-brand-sky via-brand-blue to-transparent rounded-full shadow-lg shadow-brand-sky/30" />

          <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-brand-sky uppercase mb-4">
            WHO WE ARE & WHAT WE DELIVER
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Engineering Excellence. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-white to-brand-bright">
              Autonomous Operations.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
            DHGsoft connects physical industrial machinery with intelligent digital engineering — turning raw sensor streams into predictable, highly optimized manufacturing throughput.
          </p>

          <a
            href="#solutions"
            className="inline-flex items-center gap-2 font-bold text-brand-sky hover:text-white transition-colors text-sm md:text-base border-b border-brand-sky hover:border-white pb-1"
          >
            <span>Explore full solution architecture</span>
            <span>→</span>
          </a>
        </div>

        {/* Right Side: 3 High-Impact Capability Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 gap-5 text-left">
          {coreHighlights.map((item, idx) => (
            <motion.div
              key={item.tag}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-brand-navy/60 border border-white/10 hover:border-brand-blue/40 hover:bg-brand-navy transition-all duration-300 shadow-xl group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-sky font-mono">
                  {item.tag}
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-blue group-hover:bg-brand-bright group-hover:animate-ping transition-colors" />
              </div>
              <h3 className="text-lg md:text-xl font-bold font-display text-white mb-2 group-hover:text-brand-bright transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
