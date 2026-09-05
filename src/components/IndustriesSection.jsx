import ScrollText from './ScrollText';
import React from 'react';
import {
  Factory, Activity, Car, Cpu, UtensilsCrossed, FlaskConical, Fuel,
  Zap, Mountain, Droplets, Package, Server, HardHat, Sprout
} from 'lucide-react';

const industries = [
  { name: 'Industrial Manufacturing', icon: Factory, desc: 'Discrete and process production performance.' },
  { name: 'Life Sciences', icon: Activity, desc: 'Regulated, validated, GxP-ready operations.' },
  { name: 'Automotive', icon: Car, desc: 'High-volume, high-precision assembly lines.' },
  { name: 'Semiconductor', icon: Cpu, desc: 'Precision, yield and cleanroom control.' },
  { name: 'Food & Beverages', icon: UtensilsCrossed, desc: 'Quality, traceability and changeover speed.' },
  { name: 'Chemical Manufacturing', icon: FlaskConical, desc: 'Process safety, batch quality and yield.' },
  { name: 'Oil & Gas', icon: Fuel, desc: 'Upstream, midstream and downstream operations.' },
  { name: 'Power & Utilities', icon: Zap, desc: 'Grid, generation and asset reliability.' },
  { name: 'Mining & Metals', icon: Mountain, desc: 'Heavy asset uptime and throughput.' },
  { name: 'Water & Wastewater Management', icon: Droplets, desc: 'Treatment reliability and compliance.' },
  { name: 'Consumer Packaged Goods (CPG)', icon: Package, desc: 'Speed, quality and supply chain visibility.' },
  { name: 'Data Centres', icon: Server, desc: 'Uptime, energy efficiency and capacity planning.' },
  { name: 'Engineering, Procurement & Construction (EPC)', icon: HardHat, desc: 'Project data, schedule and commissioning control.' },
  { name: 'Agriculture', icon: Sprout, desc: 'Yield, resource use and supply chain traceability.' }
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-28 md:py-36 px-6 md:px-8 bg-[#F5F7FA] font-sans text-left border-t border-[#E2E6EF] relative overflow-hidden">
      <div className="drift absolute -top-28 -left-24 w-[420px] h-[420px] bg-white rounded-full blur-[110px] pointer-events-none" aria-hidden="true" />
      <div className="drift-alt absolute -bottom-28 -right-24 w-[360px] h-[360px] bg-[#E86A1C]/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">

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
                className="reveal-up hover:-translate-y-1.5 group p-6 rounded-[12px] bg-white border border-[#E2E6EF] hover:bg-[#EEF2FF] hover:border-[#0111A2]/30 transition-all duration-300 flex flex-col justify-between shadow-brand-hover cursor-pointer min-h-[168px]"
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
