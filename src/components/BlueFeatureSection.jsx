import ScrollText from './ScrollText';
import React from 'react';
import { Sparkles, Database, Award, TrendingUp, Wrench, Zap, Activity, Cloud } from 'lucide-react';

const solutionCards = [
  {
    icon: Sparkles,
    title: 'AI-Powered Operations',
    challenge: 'Manual decisions slow down operations.',
    solution: 'Applying AI models directly to live operational data.',
    outcome: 'Faster, more consistent operating decisions.'
  },
  {
    icon: Database,
    title: 'Industrial Data Platform',
    challenge: 'Data is fragmented across systems and sites.',
    solution: 'A unified, trusted industrial data foundation.',
    outcome: 'One source of truth for the whole enterprise.'
  },
  {
    icon: Award,
    title: 'Golden Batch Intelligence',
    challenge: 'Batch quality varies between runs and lines.',
    solution: 'Modeling the golden batch and flagging deviation early.',
    outcome: 'Consistent quality and fewer rejected batches.'
  },
  {
    icon: TrendingUp,
    title: 'Yield Optimization',
    challenge: 'Yield loss erodes margin across the process.',
    solution: 'Identifying and closing the gaps that drive loss.',
    outcome: 'Measurable yield gains without new capital spend.'
  },
  {
    icon: Wrench,
    title: 'Predictive Maintenance',
    challenge: 'Unplanned downtime disrupts production.',
    solution: 'Predicting failures before they stop the line.',
    outcome: 'Higher uptime and lower maintenance cost.'
  },
  {
    icon: Zap,
    title: 'Energy Intelligence',
    challenge: 'Energy costs and emissions are hard to control.',
    solution: 'Real-time visibility into energy use and waste.',
    outcome: 'Lower cost and a smaller carbon footprint.'
  },
  {
    icon: Activity,
    title: 'Operational Intelligence',
    challenge: 'Leaders lack a real-time view of operations.',
    solution: 'Consolidated dashboards across sites and systems.',
    outcome: 'Faster, better-informed operating decisions.'
  },
  {
    icon: Cloud,
    title: 'Digital Operations',
    challenge: 'Paper and manual processes slow the operation.',
    solution: 'Digitizing workflows from the floor to the office.',
    outcome: 'A leaner, more responsive operation.'
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
            ● SOLUTIONS
          </span>

          <ScrollText as="h2" from="#6E79C4" className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-6">Solutions Designed Around Business Outcomes</ScrollText>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
            Every solution starts with a business challenge, not a technology stack.
          </p>
        </div>

        {/* 8 Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {solutionCards.map((card, idx) => {
            const Icon = card.icon;
            const featured = idx === 0;
            return (
              <div
                key={card.title}
                style={{ '--d': `${idx * 0.06}s` }}
                className={`reveal-up hover:-translate-y-1.5 p-7 rounded-[12px] backdrop-blur-md transition-all duration-300 flex flex-col justify-between ${
                  featured
                    ? 'lg:col-span-2 bg-white/15 border-2 border-[#E86A1C]/50 hover:border-[#E86A1C]/70'
                    : 'bg-white/10 border border-white/15 hover:bg-white/15'
                }`}
              >
                <div>
                  <div className={`rounded-[8px] flex items-center justify-center text-white mb-5 ${featured ? 'w-14 h-14 bg-[#E86A1C]' : 'w-11 h-11 bg-white/15'}`}>
                    <Icon className={featured ? 'w-6 h-6' : 'w-5 h-5'} />
                  </div>

                  {featured && (
                    <span className="inline-block text-[10px] font-mono font-bold tracking-widest text-[#E86A1C] uppercase mb-2">
                      ★ Flagship Solution
                    </span>
                  )}

                  <h3 className={`font-display font-bold text-white mb-4 ${featured ? 'text-2xl' : 'text-lg'}`}>
                    {card.title}
                  </h3>

                  <div className="space-y-2.5 text-xs leading-relaxed font-normal">
                    <p><span className="font-mono font-bold text-white/50 uppercase tracking-wide mr-1.5">Challenge:</span><span className="text-white/80">{card.challenge}</span></p>
                    <p><span className="font-mono font-bold text-white/50 uppercase tracking-wide mr-1.5">Solution:</span><span className="text-white/80">{card.solution}</span></p>
                    <p><span className="font-mono font-bold text-[#E86A1C] uppercase tracking-wide mr-1.5">Outcome:</span><span className="text-white">{card.outcome}</span></p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white/60">
                  <span>Outcome-Driven</span>
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
