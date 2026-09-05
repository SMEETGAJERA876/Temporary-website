import ScrollText from './ScrollText';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    category: 'DIGITAL TRANSFORMATION',
    title: 'Building a Smarter Customer Experience',
    desc: 'Redesigned the multi-channel digital touchpoints for a Tier-1 financial provider, increasing onboarding completion rates by 48%.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    metric: '+48% Conversion'
  },
  {
    category: 'AUTOMATION',
    title: 'Redesigning Complex Operations',
    desc: 'Deployed autonomous robotic process automation and AI workflow queues, reducing manual verification latency from 4 hours to 12 seconds.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    metric: '99.2% Faster'
  },
  {
    category: 'TECHNOLOGY INFRASTRUCTURE',
    title: 'Creating Scalable Digital Infrastructure',
    desc: 'Architected a multi-region Kubernetes cloud migration supporting 500,000 concurrent daily active enterprise users with zero downtime.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
    metric: '99.999% Uptime'
  }
];

export default function CaseStudiesSection() {
  return (
    <section id="resources" className="py-28 md:py-36 px-6 md:px-8 bg-white font-sans text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
              ● PROVEN CASE STUDIES
            </span>
            <ScrollText as="h2" className="text-4xl sm:text-5xl font-display font-extrabold text-[#0111A2] tracking-tight">Selected Work</ScrollText>
          </div>
          <p className="reveal-up text-base text-[#5B6475] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            Explore how we partner with industry leaders to deliver transformative technological and operational breakthroughs.
          </p>
        </div>

        {/* 3 Large Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={proj.title}
              style={{ '--d': `${idx * 0.1}s` }}
              className="reveal-up hover:-translate-y-2 group rounded-[16px] overflow-hidden border border-[#E2E6EF] bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Image Container */}
              <div style={{ '--d': `${idx * 0.1 + 0.12}s` }} className="wipe h-60 sm:h-64 w-full relative overflow-hidden bg-slate-100">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Metric Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-[6px] bg-white/95 backdrop-blur-md border border-[#E2E6EF] text-xs font-bold text-[#0111A2] shadow-sm">
                  {proj.metric}
                </div>
              </div>

              {/* Content Box */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs font-mono font-bold tracking-wider text-[#E86A1C] uppercase mb-2 block">
                    {proj.category}
                  </span>
                  
                  <h3 className="text-xl font-display font-bold text-[#111827] group-hover:text-[#0111A2] transition-colors mb-3 leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-sm text-[#5B6475] leading-relaxed font-normal mb-6">
                    {proj.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E6EF] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0111A2] uppercase tracking-wider group-hover:text-[#E86A1C] transition-colors">
                    Read Case Study
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EEF2FF] group-hover:bg-[#E86A1C] flex items-center justify-center text-[#0111A2] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
