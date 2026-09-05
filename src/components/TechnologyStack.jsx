import ScrollText from './ScrollText';
import React from 'react';
import { Factory, Database, Network, Cloud } from 'lucide-react';

const layers = [
  {
    icon: Factory,
    title: 'Industrial Technology',
    items: ['AVEVA', 'Schneider Electric', 'Phoenix Contact']
  },
  {
    icon: Database,
    title: 'Industrial Data',
    items: ['AVEVA PI', 'Historians', 'Data Platforms']
  },
  {
    icon: Network,
    title: 'Connectivity',
    items: ['OPC UA', 'MQTT', 'Modbus', 'APIs']
  },
  {
    icon: Cloud,
    title: 'Cloud & AI',
    items: ['AWS', 'Azure', 'Google Cloud', 'Databricks', 'AI/ML']
  }
];

export default function TechnologyStack() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-8 bg-white font-sans text-left relative overflow-hidden">
      <div className="drift absolute -top-28 -right-24 w-[420px] h-[420px] bg-[#EEF2FF] rounded-full blur-[110px] pointer-events-none" aria-hidden="true" />
      <div className="drift-alt absolute -bottom-28 -left-24 w-[360px] h-[360px] bg-[#EEF2FF]/60 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
            ● TECHNOLOGY
          </span>
          <ScrollText as="h2" className="text-4xl sm:text-5xl font-display font-extrabold text-[#0111A2] tracking-tight mb-4">Powered by Technology. Driven by Engineering.</ScrollText>
          <p className="text-base text-[#5B6475] leading-relaxed">
            Technology agnostic. Engineering driven.
          </p>
        </div>

        {/* 4 Technology Layers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {layers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.title}
                style={{ '--d': `${idx * 0.08}s` }}
                className="reveal-up hover:-translate-y-1.5 p-8 rounded-[12px] bg-white border border-[#E2E6EF] hover:border-[#0111A2] shadow-brand-hover transition-all duration-300 flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <div className="w-12 h-12 rounded-[8px] bg-[#EEF2FF] flex items-center justify-center text-[#0111A2] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-[#111827] mb-4">
                    {layer.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E2E6EF]">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-semibold px-3 py-1.5 rounded-[6px] bg-[#F5F7FA] border border-[#E2E6EF] text-[#5B6475]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
