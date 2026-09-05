import ScrollText from './ScrollText';
import React from 'react';
import { Factory, Wrench, Database, Layers, Network, Target } from 'lucide-react';

const reasons = [
  {
    icon: Factory,
    title: 'Industrial Depth',
    desc: 'Built around real operational environments, not generic IT assumptions.'
  },
  {
    icon: Wrench,
    title: 'Engineering Excellence',
    desc: 'Strong technical execution from design through to deployment.'
  },
  {
    icon: Database,
    title: 'Data & AI Expertise',
    desc: 'Turning industrial data into intelligence that drives decisions.'
  },
  {
    icon: Layers,
    title: 'End-to-End Capability',
    desc: 'Strategy through implementation and ongoing operations, one team.'
  },
  {
    icon: Network,
    title: 'Technology Ecosystem',
    desc: 'Industrial, cloud, data and AI technologies working as one system.'
  },
  {
    icon: Target,
    title: 'Outcome Focus',
    desc: 'Solutions designed around measurable business value, not features.'
  }
];

export default function WhyDHGsoft() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-8 bg-[#F5F7FA] font-sans text-left border-t border-[#E2E6EF]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
            ● WHY DHGSOFT
          </span>
          <ScrollText as="h2" className="text-4xl sm:text-5xl font-display font-extrabold text-[#0111A2] tracking-tight">Why DHGsoft</ScrollText>
        </div>

        {/* 6 Differentiators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                style={{ '--d': `${idx * 0.07}s` }}
                className="reveal-up hover:-translate-y-1.5 group p-8 rounded-[12px] bg-white border border-[#E2E6EF] hover:border-[#0111A2] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[200px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-[8px] bg-[#EEF2FF] group-hover:bg-[#0111A2] flex items-center justify-center text-[#0111A2] group-hover:text-white transition-all mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#111827] mb-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-[#5B6475] leading-relaxed font-normal">
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
