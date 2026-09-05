import ScrollText from './ScrollText';
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  'Artificial Intelligence',
  'Industrial Data',
  'Digital Transformation',
  'Intelligent Manufacturing',
  'Automation',
  'Energy & Sustainability'
];

const articles = [
  {
    category: 'ARTIFICIAL INTELLIGENCE',
    title: 'Where AI Actually Pays Off on the Plant Floor',
    desc: 'Separating high-value industrial AI use cases from the ones that never leave the pilot stage.',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=900&q=80'
  },
  {
    category: 'INDUSTRIAL DATA',
    title: 'Why Most Industrial Data Platforms Stall at Site One',
    desc: 'The data governance decisions that determine whether a platform scales past a single plant.',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80'
  },
  {
    category: 'INTELLIGENT MANUFACTURING',
    title: 'The Quiet Return of the Golden Batch',
    desc: 'How modeling ideal process conditions is becoming a practical quality strategy again.',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80'
  }
];

export default function Insights() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-8 bg-white font-sans text-left">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
              ● INSIGHTS
            </span>
            <ScrollText as="h2" className="text-4xl sm:text-5xl font-display font-extrabold text-[#0111A2] tracking-tight">Perspectives on the Future of Industry</ScrollText>
          </div>
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 rounded-[8px] bg-[#F5F7FA] border border-[#E2E6EF] text-xs font-semibold text-[#5B6475]"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* 3 Featured Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div
              key={art.title}
              style={{ '--d': `${idx * 0.08}s` }}
              className="reveal-up hover:-translate-y-1.5 group rounded-[16px] overflow-hidden border border-[#E2E6EF] bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="wipe h-52 w-full relative overflow-hidden bg-slate-100" style={{ '--d': `${idx * 0.08 + 0.1}s` }}>
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-[6px] bg-white/95 backdrop-blur-md border border-[#E2E6EF] text-[10px] font-mono font-bold tracking-wider text-[#0111A2] uppercase">
                  {art.category}
                </div>
              </div>

              <div className="p-7 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs font-mono text-[#5B6475] block mb-2">{art.date}</span>
                  <h3 className="text-lg font-display font-bold text-[#111827] group-hover:text-[#0111A2] transition-colors mb-3 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-sm text-[#5B6475] leading-relaxed font-normal mb-6">
                    {art.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E6EF] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0111A2] uppercase tracking-wider group-hover:text-[#E86A1C] transition-colors">
                    Read Article
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#0111A2] group-hover:text-[#E86A1C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
