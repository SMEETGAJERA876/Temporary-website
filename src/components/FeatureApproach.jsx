import ScrollText from './ScrollText';
import React from 'react';
import Parallax from './Parallax';
import { Link } from '../router';
import { Check, ArrowRight } from 'lucide-react';

export default function FeatureApproach() {
  return (
    <section id="solutions" className="py-28 md:py-36 px-6 md:px-8 bg-[#F5F7FA] font-sans border-t border-[#E2E6EF]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large High-End Product / Human Visual */}
          <div className="reveal-up lg:col-span-6 relative">
            <div className="wipe relative rounded-[16px] overflow-hidden border border-[#E2E6EF] shadow-lg bg-white">
              <Parallax amount={30}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Strategy and execution collaborative workshop"
                  className="w-full h-[420px] sm:h-[480px] object-cover scale-110"
                  loading="lazy"
                />
              </Parallax>
              
              {/* Floating Stat Badge */}
              <div className="absolute top-6 left-6 p-4 rounded-[10px] bg-white/95 backdrop-blur-md border border-[#E2E6EF] shadow-md text-left">
                <div className="text-xs font-mono font-bold text-[#0111A2] uppercase tracking-wider">Methodology</div>
                <div className="text-sm font-bold text-[#111827]">Agile Delivery Cycles</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content, Checklist & Orange CTA */}
          <div style={{ '--d': '0.12s' }} className="reveal-up lg:col-span-6 text-left">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
              ● OUR APPROACH
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0111A2] leading-[1.1] tracking-tight mb-6">
              <ScrollText as="span" className="block">Better processes.</ScrollText>
              <ScrollText as="span" className="block">Better experiences.</ScrollText>
              <ScrollText as="span" className="block text-[#111827]">Better outcomes.</ScrollText>
            </h2>

            <p className="text-base text-[#5B6475] leading-relaxed mb-8 font-normal">
              We combine rigorous business analysis with cutting-edge software engineering to build digital products that scale seamlessly and create verifiable economic value.
            </p>

            {/* 3 Checkpoints */}
            <div className="space-y-4 mb-10">
              {[
                { title: 'Strategic thinking', desc: 'Grounding every technical choice in long-term commercial goals.' },
                { title: 'Practical execution', desc: 'Shipping production-ready architectures without unnecessary bloat.' },
                { title: 'Measurable results', desc: 'Benchmarking performance against tangible efficiency and growth KPIs.' }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#EEF2FF] border border-[#0111A2]/20 flex items-center justify-center text-[#0111A2] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#0111A2]" />
                  </div>
                  <div>
                    <span className="text-base font-bold text-[#111827]">{item.title}</span>
                    <span className="text-sm text-[#5B6475] block mt-0.5">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Orange CTA */}
            <Link
              to="/services"
              className="sheen inline-flex items-center gap-2 px-8 py-3.5 rounded-[8px] bg-[#E86A1C] hover:bg-[#d55e15] text-white font-semibold text-[15px] shadow-sm transition-all duration-200"
            >
              <span>Discover Our Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
