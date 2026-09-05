import ScrollText from './ScrollText';
import React from 'react';
import { RefreshCw, Network, Sparkles, Gauge } from 'lucide-react';

const pillars = [
  {
    icon: RefreshCw,
    title: 'Transform',
    desc: 'Modernize operations and business processes.'
  },
  {
    icon: Network,
    title: 'Connect',
    desc: 'Connect people, assets, systems and data.'
  },
  {
    icon: Sparkles,
    title: 'Intelligent',
    desc: 'Turn data into AI-powered insights and decisions.'
  },
  {
    icon: Gauge,
    title: 'Optimize',
    desc: 'Continuously improve operational performance.'
  }
];

export default function BusinessValue() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-8 bg-white font-sans text-left border-t border-[#E2E6EF]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
            ● BUSINESS VALUE
          </span>
          <ScrollText as="h2" className="text-4xl sm:text-5xl font-display font-extrabold text-[#0111A2] tracking-tight mb-6">Technology That Creates Business Impact</ScrollText>
          <p className="text-base sm:text-lg text-[#5B6475] leading-relaxed font-normal">
            DHGsoft helps organizations modernize operations, unlock industrial data and apply AI to improve
            productivity, quality, reliability, sustainability and growth.
          </p>
        </div>

        {/* 4 Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                style={{ '--d': `${idx * 0.08}s` }}
                className="reveal-up hover:-translate-y-1.5 group p-8 rounded-[12px] bg-white border border-[#E2E6EF] hover:bg-[#0111A2] hover:border-[#0111A2] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between min-h-[220px]"
              >
                <div className="w-12 h-12 rounded-[8px] bg-[#EEF2FF] group-hover:bg-white/10 flex items-center justify-center text-[#0111A2] group-hover:text-white transition-all mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-[#111827] group-hover:text-white transition-colors mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#5B6475] group-hover:text-white/80 transition-colors leading-relaxed font-normal">
                    {p.desc}
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
