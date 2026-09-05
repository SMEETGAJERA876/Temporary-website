import ScrollText from './ScrollText';
import React from 'react';

const steps = [
  {
    num: '01',
    name: 'Discover',
    desc: 'Auditing legacy systems, interviewing stakeholders, and pinpointing core architectural friction points.'
  },
  {
    num: '02',
    name: 'Define',
    desc: 'Establishing strict technical blueprints, user experience requirements, and quantifiable KPI targets.'
  },
  {
    num: '03',
    name: 'Design',
    desc: 'Prototyping high-fidelity interface systems and validating data flows before writing single lines of code.'
  },
  {
    num: '04',
    name: 'Build',
    desc: 'Engineering resilient, scalable, and automated cloud software using modern enterprise best practices.'
  },
  {
    num: '05',
    name: 'Optimize',
    desc: 'Continuous performance benchmarking, user analytics monitoring, and proactive system iterations.'
  }
];

export default function ProcessSection() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-8 bg-white font-sans text-left border-t border-[#E2E6EF]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
            ● DELIVERY METHODOLOGY
          </span>
          <ScrollText as="h2" className="text-4xl sm:text-5xl font-display font-extrabold text-[#0111A2] tracking-tight mb-4">How We Work</ScrollText>
          <p className="text-base text-[#5B6475] leading-relaxed">
            A structured, transparent 5-stage delivery lifecycle engineered to minimize risk and accelerate time-to-value.
          </p>
        </div>

        {/* Process Timeline Track */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div className="draw-line hidden lg:block absolute top-6 left-6 right-6 h-[2px] bg-gradient-to-r from-[#0111A2] via-[#0111A2] to-[#E86A1C] -z-0" />

          {/* 5 Process Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                style={{ '--d': `${idx * 0.09}s` }}
                className="reveal-up hover:-translate-y-1.5 group p-6 rounded-[12px] bg-white border border-[#E2E6EF] shadow-sm hover:border-[#0111A2] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-[8px] bg-[#0111A2] group-hover:bg-[#E86A1C] text-white flex items-center justify-center font-display font-extrabold text-sm mb-6 transition-colors shadow-sm">
                    {step.num}
                  </div>

                  <h3 className="text-lg font-display font-bold text-[#111827] group-hover:text-[#0111A2] transition-colors mb-2">
                    {step.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5B6475] leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
