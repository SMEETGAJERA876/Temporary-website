import ScrollText from './ScrollText';
import React from 'react';
import { Link } from '../router';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    category: 'AI-DRIVEN YIELD IMPROVEMENT',
    title: 'Turning process data into a measurable yield gain.',
    desc: 'Unified historian and lab data for a global chemicals manufacturer, then modeled the drivers of yield variation in real time.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    metric: '+6.4% Yield'
  },
  {
    category: 'ENTERPRISE INDUSTRIAL DATA PLATFORM',
    title: 'One data foundation across a dozen plants.',
    desc: 'Unified twelve separate historians and reporting stacks into a single industrial data platform for enterprise-wide visibility.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    metric: '12 Sites Unified'
  },
  {
    category: 'GOLDEN BATCH INTELLIGENCE',
    title: 'Modeling the perfect batch, then chasing it every time.',
    desc: 'Built a real-time golden batch model for a life sciences producer, flagging deviation before it becomes a rejected batch.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80',
    metric: '-38% Rejections'
  }
];

export default function CaseStudiesSection() {
  return (
    <section id="resources" className="py-28 md:py-36 px-6 md:px-8 bg-white font-sans text-left relative overflow-hidden">
      <div className="drift absolute -top-28 -right-24 w-[420px] h-[420px] bg-[#EEF2FF] rounded-full blur-[110px] pointer-events-none" aria-hidden="true" />
      <div className="drift-alt absolute -bottom-28 -left-24 w-[360px] h-[360px] bg-[#EEF2FF]/60 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
              ● TRANSFORMATION STORIES
            </span>
            <ScrollText as="h2" className="text-4xl sm:text-5xl font-display font-extrabold text-[#0111A2] tracking-tight">Real Challenges. Real Transformation.</ScrollText>
          </div>
          <p className="reveal-up text-base text-[#5B6475] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            Explore how we partner with industrial leaders to deliver measurable operational and business outcomes.
          </p>
        </div>

        {/* 3 Large Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <Link
              to="/resources"
              key={proj.title}
              style={{ '--d': `${idx * 0.1}s` }}
              className="reveal-up hover:-translate-y-2 group rounded-[16px] overflow-hidden border border-[#E2E6EF] bg-white shadow-brand-hover transition-all duration-300 flex flex-col justify-between"
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
                    Read Transformation Story
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EEF2FF] group-hover:bg-[#E86A1C] flex items-center justify-center text-[#0111A2] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
