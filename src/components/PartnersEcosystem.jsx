import ScrollText from './ScrollText';
import React from 'react';

const partners = [
  'AVEVA',
  'Schneider Electric',
  'Phoenix Contact',
  'AWS',
  'Microsoft Azure',
  'Databricks',
  'Kepware',
  'Matrikon'
];

export default function PartnersEcosystem() {
  return (
    <section className="py-24 md:py-28 px-6 md:px-8 bg-[#F5F7FA] font-sans text-center border-t border-[#E2E6EF]">
      <div className="max-w-4xl mx-auto">

        <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
          ● PARTNERS & ECOSYSTEM
        </span>
        <ScrollText as="h2" className="text-3xl sm:text-4xl font-display font-extrabold text-[#0111A2] tracking-tight mb-5">Partnering Across the Technology Ecosystem</ScrollText>
        <p className="text-base text-[#5B6475] leading-relaxed max-w-2xl mx-auto mb-12 font-normal">
          We bring together the right technologies, platforms and engineering expertise to solve complex industrial challenges.
        </p>

        {/* Restrained Partner Badge Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {partners.map((name, idx) => (
            <div
              key={name}
              style={{ '--d': `${idx * 0.05}s` }}
              className="reveal-up px-4 py-5 rounded-[10px] bg-white border border-[#E2E6EF] text-sm font-display font-bold text-[#5B6475] hover:text-[#0111A2] hover:border-[#0111A2]/30 transition-colors flex items-center justify-center text-center"
            >
              {name}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
