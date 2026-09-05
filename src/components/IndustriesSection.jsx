import ScrollText from './ScrollText';
import React from 'react';
import { Activity, FlaskConical, Factory, Zap, Fuel, Car, Mountain, UtensilsCrossed, Droplets, Cpu } from 'lucide-react';

const industries = [
  { name: 'Life Sciences', icon: Activity, desc: 'Regulated, validated, GxP-ready operations.' },
  { name: 'Chemicals', icon: FlaskConical, desc: 'Process safety, batch quality and yield.' },
  { name: 'Manufacturing', icon: Factory, desc: 'Discrete and process production performance.' },
  { name: 'Energy & Utilities', icon: Zap, desc: 'Grid, generation and asset reliability.' },
  { name: 'Oil & Gas', icon: Fuel, desc: 'Upstream, midstream and downstream operations.' },
  { name: 'Automotive', icon: Car, desc: 'High-volume, high-precision assembly lines.' },
  { name: 'Metals & Mining', icon: Mountain, desc: 'Heavy asset uptime and throughput.' },
  { name: 'Food & Beverage', icon: UtensilsCrossed, desc: 'Quality, traceability and changeover speed.' },
  { name: 'Water & Wastewater', icon: Droplets, desc: 'Treatment reliability and compliance.' },
  { name: 'High-Tech & Semiconductor', icon: Cpu, desc: 'Precision, yield and cleanroom control.' }
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-28 md:py-36 px-6 md:px-8 bg-[#F5F7FA] font-sans text-left border-t border-[#E2E6EF]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
            ● INDUSTRIES
          </span>
          <ScrollText as="h2" className="text-4xl sm:text-5xl font-display font-extrabold text-[#0111A2] tracking-tight mb-4">Deep Expertise. Industry by Industry.</ScrollText>
          <p className="text-base text-[#5B6475] leading-relaxed">
            Technology is only valuable when it understands the business it serves.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                style={{ '--d': `${idx * 0.05}s` }}
                className="reveal-up hover:-translate-y-1.5 group p-6 rounded-[12px] bg-white border border-[#E2E6EF] hover:bg-[#EEF2FF] hover:border-[#0111A2]/30 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md cursor-pointer min-h-[168px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[8px] bg-[#EEF2FF] group-hover:bg-[#0111A2] flex items-center justify-center text-[#0111A2] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="w-2 h-2 rounded-full bg-transparent group-hover:bg-[#E86A1C] transition-colors" />
                  </div>

                  <h3 className="text-sm sm:text-base font-display font-bold text-[#111827] group-hover:text-[#0111A2] transition-colors mb-1.5 leading-snug">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-[#5B6475] leading-relaxed font-normal">
                    {ind.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
