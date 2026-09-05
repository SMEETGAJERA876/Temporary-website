import ScrollText from './ScrollText';
import React from 'react';

const partners = [
  { name: 'AVEVA', mark: 'AV', category: 'Industrial Software', accent: 'blue' },
  { name: 'Schneider Electric', mark: 'SE', category: 'Automation & Energy', accent: 'orange' },
  { name: 'Phoenix Contact', mark: 'PC', category: 'Industrial Connectivity', accent: 'blue' },
  { name: 'AWS', mark: 'AWS', category: 'Cloud Platform', accent: 'orange' },
  { name: 'Microsoft Azure', mark: 'Az', category: 'Cloud Platform', accent: 'blue' },
  { name: 'Databricks', mark: 'DB', category: 'Data & AI', accent: 'orange' },
  { name: 'Kepware', mark: 'KW', category: 'Industrial Connectivity', accent: 'blue' },
  { name: 'Matrikon', mark: 'MK', category: 'OPC Connectivity', accent: 'orange' }
];

export default function PartnersEcosystem() {
  return (
    <section className="py-24 md:py-28 px-6 md:px-8 bg-[#F5F7FA] font-sans text-center border-t border-[#E2E6EF] relative overflow-hidden">
      <div className="drift absolute -top-28 -left-24 w-[420px] h-[420px] bg-white rounded-full blur-[110px] pointer-events-none" aria-hidden="true" />
      <div className="drift-alt absolute -bottom-28 -right-24 w-[360px] h-[360px] bg-[#E86A1C]/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative z-10">

        <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
          ● PARTNERS & ECOSYSTEM
        </span>
        <ScrollText as="h2" className="text-3xl sm:text-4xl font-display font-extrabold text-[#0111A2] tracking-tight mb-5">Partnering Across the Technology Ecosystem</ScrollText>
        <p className="text-base text-[#5B6475] leading-relaxed max-w-2xl mx-auto mb-14 font-normal">
          We bring together the right technologies, platforms and engineering expertise to solve complex industrial challenges.
        </p>

        {/* Partner Symbol Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 text-left">
          {partners.map((p, idx) => {
            const isBlue = p.accent === 'blue';
            return (
              <div
                key={p.name}
                style={{ '--d': `${idx * 0.06}s` }}
                className={`reveal-up group p-5 rounded-[12px] bg-white border border-[#E2E6EF] transition-all duration-300 flex flex-col gap-4 hover:-translate-y-1.5 ${
                  isBlue
                    ? 'hover:border-[#0111A2]/40 hover:shadow-[0_16px_32px_-8px_rgba(1,17,162,0.18)]'
                    : 'hover:border-[#E86A1C]/40 hover:shadow-[0_16px_32px_-8px_rgba(232,106,28,0.18)]'
                }`}
              >
                {/* Symbol / Monogram */}
                <div
                  className={`w-12 h-12 rounded-[10px] flex items-center justify-center font-display font-extrabold text-white text-sm shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                    isBlue ? 'bg-[#0111A2]' : 'bg-[#E86A1C]'
                  }`}
                >
                  {p.mark}
                </div>

                <div>
                  <div className="text-sm font-display font-bold text-[#111827] leading-snug mb-0.5">
                    {p.name}
                  </div>
                  <div className="text-[11px] font-mono text-[#5B6475] uppercase tracking-wide">
                    {p.category}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
