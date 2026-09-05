import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { easeCustom } from '../utils/motionVariants';

const processSteps = [
  {
    step: '01',
    name: 'Discover',
    tagline: 'Audit & Telemetry Discovery',
    desc: 'Deep on-site audits of plant floor fieldbus networks, legacy PLC logic, cycle bottlenecks, and security perimeters.'
  },
  {
    step: '02',
    name: 'Design',
    tagline: '3D Physics Digital Twin',
    desc: 'Architecting deterministic control schematics, safety loop matrices, and virtual commissioning 3D simulations.'
  },
  {
    step: '03',
    name: 'Engineer',
    tagline: 'PLC & Edge AI Development',
    desc: 'Writing structured IEC 61131-3 code, training high-speed vision classifiers, and building UL 508A control panels.'
  },
  {
    step: '04',
    name: 'Integrate',
    tagline: 'FAT / SAT & Site Commissioning',
    desc: 'Connecting robotic kinematics, MES execution, SCADA interfaces, and executing full-speed factory validation.'
  },
  {
    step: '05',
    name: 'Optimize',
    tagline: 'Continuous OEE & 24/7 SLA',
    desc: 'Continuous real-time anomaly telemetry, predictive tool wear forecasting, and quarterly algorithm enhancements.'
  }
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section 
      id="process"
      ref={containerRef}
      className="py-28 md:py-40 px-6 md:px-8 bg-[#00071A] font-sans relative overflow-hidden text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-brand-orange mb-3 block">
            ● ENGINEERING METHODOLOGY
          </span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.04] tracking-tight mb-6">
            From challenge <br />
            to <span className="text-brand-orange glow-orange-text">intelligence.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A disciplined 5-stage industrial delivery lifecycle engineered to eliminate deployment risk and guarantee throughput.
          </p>
        </div>

        {/* Desktop Horizontal Timeline Track */}
        <div className="relative">
          
          {/* Connecting Progress Line */}
          <div className="hidden lg:block absolute top-10 left-8 right-8 h-[2px] bg-white/10 rounded-full">
            <motion.div 
              style={{ width: lineWidth }}
              className="h-full bg-brand-orange shadow-[0_0_12px_rgba(248,85,8,0.85)] rounded-full origin-left"
            />
          </div>

          {/* 5 Step Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-left">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: easeCustom }}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#00143D]/90 border border-white/10 hover:border-brand-orange/60 hover:shadow-2xl transition-all duration-300 min-h-[300px] backdrop-blur-md"
              >
                {/* Step Circle & Number */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#00194F] border border-white/15 flex items-center justify-center font-mono font-extrabold text-sm text-white group-hover:bg-brand-orange group-hover:border-brand-orange transition-colors duration-300 shadow-md">
                    {step.step}
                  </div>
                  <span className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-brand-orange transition-colors" />
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <span className="text-[10px] font-mono tracking-widest text-brand-orange uppercase font-bold block mb-1">
                    {step.tagline}
                  </span>
                  <h3 className="text-xl font-display font-extrabold text-white mb-3">
                    {step.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
