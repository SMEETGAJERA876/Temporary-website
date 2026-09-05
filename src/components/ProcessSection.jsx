import ScrollText from './ScrollText';
import React from 'react';

const steps = [
  { num: '01', name: 'Discover', subtitle: 'Understand', desc: 'Understanding the operation, the data and the outcome that matters most.' },
  { num: '02', name: 'Strategize', subtitle: 'Define', desc: 'Defining the roadmap, priorities and measurable targets for the engagement.' },
  { num: '03', name: 'Design', subtitle: 'Engineer', desc: 'Engineering the architecture across systems, data and applications.' },
  { num: '04', name: 'Integrate', subtitle: 'Connect', desc: 'Connecting assets, systems and data into one coherent operating picture.' },
  { num: '05', name: 'Deploy', subtitle: 'Implement', desc: 'Implementing the solution safely, on schedule, inside live operations.' },
  { num: '06', name: 'Optimize', subtitle: 'Improve', desc: 'Improving continuously against the metrics that define success.' }
];

export default function ProcessSection() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-8 bg-white font-sans text-left border-t border-[#E2E6EF]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
            ● HOW WE DELIVER
          </span>
          <ScrollText as="h2" className="text-4xl sm:text-5xl font-display font-extrabold text-[#0111A2] tracking-tight mb-4">From Vision to Value</ScrollText>
          <p className="text-base text-[#5B6475] leading-relaxed">
            A structured, transparent 6-stage delivery lifecycle that carries the entire transformation lifecycle end to end.
          </p>
        </div>

        {/* Process Timeline Track */}
        <div className="relative">

          {/* Desktop Connecting Line */}
          <div className="draw-line hidden lg:block absolute top-6 left-6 right-6 h-[2px] bg-gradient-to-r from-[#0111A2] via-[#0111A2] to-[#E86A1C] -z-0" />

          {/* 6 Process Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                style={{ '--d': `${idx * 0.08}s` }}
                className="reveal-up hover:-translate-y-1.5 group p-6 rounded-[12px] bg-white border border-[#E2E6EF] shadow-sm hover:border-[#0111A2] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-[8px] bg-[#0111A2] group-hover:bg-[#E86A1C] text-white flex items-center justify-center font-display font-extrabold text-sm mb-6 transition-colors shadow-sm">
                    {step.num}
                  </div>

                  <h3 className="text-lg font-display font-bold text-[#111827] group-hover:text-[#0111A2] transition-colors mb-1">
                    {step.name}
                  </h3>
                  <div className="text-xs font-mono font-bold text-[#E86A1C] uppercase tracking-wider mb-3">
                    {step.subtitle}
                  </div>

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
