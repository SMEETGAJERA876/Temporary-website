import ScrollText from './ScrollText';
import React from 'react';
import { ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';

const solutionCards = [
  {
    icon: Zap,
    title: 'Speed & Scalability',
    desc: 'Optimized cloud infrastructure designed to support exponential transaction throughput with sub-millisecond latency.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    desc: 'Zero-trust architecture, automated compliance scanning, and bank-grade data encryption protocols baked into every layer.'
  },
  {
    icon: Globe,
    title: 'Global Ecosystems',
    desc: 'Multi-region architectures and seamless third-party API integrations that connect your entire operational stack.'
  },
  {
    icon: Sparkles,
    title: 'Intelligent AI Agents',
    desc: 'Bespoke neural models and autonomous automation workflows tailored to your specific organizational datasets.'
  }
];

export default function BlueFeatureSection() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-8 bg-[#0111A2] font-sans text-white relative overflow-hidden">
      {/* Background Abstract Geometric Shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#1638C8] blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#E86A1C] uppercase mb-3 block">
            ● SCALABLE SOLUTIONS
          </span>
          
          <ScrollText as="h2" from="#6E79C4" className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-6">Designed Around Your Goals</ScrollText>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
            Every solution we engineer is custom-tailored to solve your specific operational challenges while building long-term digital resilience.
          </p>
        </div>

        {/* 4 Solution Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {solutionCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                style={{ '--d': `${idx * 0.08}s` }}
                className="reveal-up hover:-translate-y-1.5 p-8 rounded-[12px] bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-[8px] bg-white/15 flex items-center justify-center text-white mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm text-white/80 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white/60">
                  <span>Enterprise Ready</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E86A1C]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
