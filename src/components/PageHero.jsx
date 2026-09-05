import React from 'react';
import ScrollText from './ScrollText';

/** Title band that opens every page except Home. */
export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="relative pt-32 lg:pt-40 pb-16 md:pb-20 px-6 md:px-8 bg-[#F5F7FA] border-b border-[#E2E6EF] font-sans overflow-hidden">
      <div className="absolute inset-0 bg-corporate-grid opacity-60 pointer-events-none" />
      <div className="drift absolute -top-24 right-0 w-[520px] h-[520px] bg-[#EEF2FF] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <span
          style={{ '--d': '0.05s' }}
          className="fade-up-in text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-4 block"
        >
          ● {eyebrow}
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0111A2] leading-[1.06] tracking-tight mb-6 max-w-4xl">
          <span className="mask-line"><span style={{ '--d': '0.15s' }}>{title}</span></span>
        </h1>

        {children && (
          <p
            style={{ '--d': '0.32s' }}
            className="fade-up-in text-base sm:text-lg text-[#5B6475] leading-relaxed max-w-2xl font-normal"
          >
            {children}
          </p>
        )}
      </div>
    </section>
  );
}
