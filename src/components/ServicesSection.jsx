import ScrollText from './ScrollText';
import React from 'react';
import { ArrowUpRight, Layers, Network, Database, Sparkles, Wifi, Cog, AppWindow, Cloud, ShieldCheck, LifeBuoy } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Industrial Digital Transformation',
    icon: Layers,
    desc: 'Modernizing plant and process operations for the digital era.'
  },
  {
    num: '02',
    title: 'OT / IT Integration',
    icon: Network,
    desc: 'Connecting plant-floor systems with enterprise IT architecture.'
  },
  {
    num: '03',
    title: 'Industrial Data Platforms',
    icon: Database,
    desc: 'AVEVA PI, historians and data lakes built on trusted data.'
  },
  {
    num: '04',
    title: 'Artificial Intelligence & Analytics',
    icon: Sparkles,
    desc: 'Predictive models and analytics that drive real decisions.'
  },
  {
    num: '05',
    title: 'Industrial IoT (IIoT)',
    icon: Wifi,
    desc: 'Edge-to-cloud connectivity across every plant asset.'
  },
  {
    num: '06',
    title: 'Digital Engineering Services',
    icon: Cog,
    desc: 'Automation, controls and SCADA/HMI engineering.'
  },
  {
    num: '07',
    title: 'Enterprise Applications',
    icon: AppWindow,
    desc: 'SAP, MES, LIMS and ERP integration across the operation.'
  },
  {
    num: '08',
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    desc: 'Industrial cloud and hybrid infrastructure at scale.'
  },
  {
    num: '09',
    title: 'Cybersecurity',
    icon: ShieldCheck,
    desc: 'OT network security, risk assessment and monitoring.'
  },
  {
    num: '10',
    title: 'Managed Services',
    icon: LifeBuoy,
    desc: 'Ongoing support, operations and continuous improvement.'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 md:py-36 px-6 md:px-8 bg-white font-sans text-left relative overflow-hidden">
      <div className="drift absolute -top-28 -right-24 w-[420px] h-[420px] bg-[#EEF2FF] rounded-full blur-[110px] pointer-events-none" aria-hidden="true" />
      <div className="drift-alt absolute -bottom-28 -left-24 w-[360px] h-[360px] bg-[#EEF2FF]/60 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
              ● WHAT WE DO
            </span>
            <ScrollText as="h2" className="text-4xl sm:text-5xl font-display font-extrabold text-[#0111A2] tracking-tight">Capabilities That Move Industry Forward</ScrollText>
          </div>
          <p className="reveal-up text-base text-[#5B6475] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            Ten integrated capabilities, from digital transformation strategy to day-two managed operations.
          </p>
        </div>

        {/* 10-Grid Services Layout with Blue Hover Transition */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.num}
                style={{ '--d': `${idx * 0.05}s` }}
                className="reveal-up hover:-translate-y-1.5 group relative p-6 rounded-[12px] bg-white border border-[#E2E6EF] hover:bg-[#0111A2] hover:border-[#0111A2] transition-all duration-300 flex flex-col justify-between min-h-[240px] shadow-brand-hover cursor-pointer"
              >
                {/* Top Row: Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-lg font-display font-extrabold font-mono text-[#0111A2] group-hover:text-white transition-colors">
                    {svc.num}
                  </span>

                  <div className="w-9 h-9 rounded-[8px] bg-[#EEF2FF] group-hover:bg-white/10 flex items-center justify-center text-[#0111A2] group-hover:text-white transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content: Title, Description, Orange Arrow */}
                <div className="mt-auto">
                  <h3 className="text-sm font-display font-bold text-[#111827] group-hover:text-white transition-colors mb-2 leading-snug">
                    {svc.title}
                  </h3>

                  <p className="text-xs text-[#5B6475] group-hover:text-white/80 transition-colors leading-relaxed mb-4 font-normal">
                    {svc.desc}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-[#E2E6EF] group-hover:border-white/20 transition-colors">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0111A2] group-hover:text-[#E86A1C] transition-colors">
                      Learn More
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#0111A2] group-hover:text-[#E86A1C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
