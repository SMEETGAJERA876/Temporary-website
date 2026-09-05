import ScrollText from './ScrollText';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const flow = ['CONNECT', 'DATA', 'CONTEXT', 'AI', 'INSIGHT', 'ACTION', 'OPTIMIZATION'];

export default function IntelligentIndustry() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-8 bg-[#0111A2] font-sans text-white text-center relative overflow-hidden">
      {/* Background Abstract Geometric Shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#1638C8] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[6px] bg-white/10 border border-white/20 text-xs font-mono font-bold tracking-[0.2em] text-white uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E86A1C]" />
          <span>INTELLIGENT INDUSTRY</span>
        </div>

        <ScrollText as="h2" from="#6E79C4" className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white leading-[1.08] tracking-tight mb-8">From Operations to Intelligence</ScrollText>

        {/* Flow Visualization */}
        <div className="reveal-up flex flex-wrap items-center justify-center gap-x-2 gap-y-4 mb-10">
          {flow.map((step, idx) => (
            <React.Fragment key={step}>
              <span className="px-4 py-2 rounded-[8px] bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-mono font-bold tracking-[0.14em] text-white">
                {step}
              </span>
              {idx < flow.length - 1 && (
                <ArrowRight className="w-4 h-4 text-[#E86A1C] shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="text-base sm:text-xl text-white/85 max-w-3xl mx-auto font-normal leading-relaxed">
          We connect industrial environments, build trusted data foundations and apply AI to transform operational
          information into measurable business outcomes.
        </p>

      </div>
    </section>
  );
}
