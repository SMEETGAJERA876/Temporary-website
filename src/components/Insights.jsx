import ScrollText from './ScrollText';
import React, { useState } from 'react';
import { Link } from '../router';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

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
    category: 'Artificial Intelligence',
    title: 'Where AI Actually Pays Off on the Plant Floor',
    desc: 'Separating high-value industrial AI use cases from the ones that never leave the pilot stage.',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=900&q=80'
  },
  {
    category: 'Industrial Data',
    title: 'Why Most Industrial Data Platforms Stall at Site One',
    desc: 'The data governance decisions that determine whether a platform scales past a single plant.',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80'
  },
  {
    category: 'Intelligent Manufacturing',
    title: 'The Quiet Return of the Golden Batch',
    desc: 'How modeling ideal process conditions is becoming a practical quality strategy again.',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80'
  },
  {
    category: 'Digital Transformation',
    title: "The Difference Between Digitizing and Transforming",
    desc: "Why moving a paper process onto a screen isn't the same as redesigning how the operation runs.",
    date: 'May 2026',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80'
  },
  {
    category: 'Automation',
    title: 'Where Automation Should Stop',
    desc: 'The parts of an operation worth automating first, and the ones that still need a human in the loop.',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80'
  },
  {
    category: 'Energy & Sustainability',
    title: 'Turning Energy Data Into an Operating Decision',
    desc: "Why energy monitoring only pays off once it's connected to the decisions operators actually make.",
    date: 'March 2026',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=900&q=80'
  }
];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;

  function toggleCategory(cat) {
    setActiveCategory((current) => (current === cat ? null : cat));
  }

  return (
    <section className="py-28 md:py-36 px-6 md:px-8 bg-white font-sans text-left relative overflow-hidden">
      <div className="drift absolute -top-28 -right-24 w-[420px] h-[420px] bg-[#EEF2FF] rounded-full blur-[110px] pointer-events-none" aria-hidden="true" />
      <div className="drift-alt absolute -bottom-28 -left-24 w-[360px] h-[360px] bg-[#EEF2FF]/60 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
              ● INSIGHTS
            </span>
            <ScrollText as="h2" className="text-4xl sm:text-5xl font-display font-extrabold text-[#0111A2] tracking-tight">Perspectives on the Future of Industry</ScrollText>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => toggleCategory(cat)}
                aria-pressed={isActive}
                className={`px-4 py-2 rounded-[8px] border text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0111A2] border-[#0111A2] text-white'
                    : 'bg-[#F5F7FA] border-[#E2E6EF] text-[#5B6475] hover:border-[#0111A2]/40 hover:text-[#0111A2]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles (filtered) */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filtered.map((art, idx) => (
              <Link
                to="/resources"
                key={art.title}
                style={{ '--d': `${idx * 0.08}s` }}
                className="reveal-up is-in hover:-translate-y-1.5 group rounded-[16px] overflow-hidden border border-[#E2E6EF] bg-white shadow-brand-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-52 w-full relative overflow-hidden bg-slate-100">
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
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-10 rounded-[16px] border border-dashed border-[#E2E6EF] bg-[#F5F7FA] text-center">
            <p className="text-sm text-[#5B6475] mb-4">
              New perspectives on <strong className="text-[#111827]">{activeCategory}</strong> are on the way.
              In the meantime, see how we've applied this in practice.
            </p>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0111A2] hover:text-[#E86A1C] transition-colors"
            >
              <span>View Transformation Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
