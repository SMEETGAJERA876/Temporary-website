import ScrollText from './ScrollText';
import React from 'react';
import { Activity, Factory, Laptop, ShoppingBag, Landmark, Briefcase } from 'lucide-react';

const industries = [
  {
    name: 'Healthcare & Life Sciences',
    icon: Activity,
    desc: 'HIPAA-compliant platforms, automated patient intake portals, and diagnostic workflow integration.'
  },
  {
    name: 'Manufacturing & Logistics',
    icon: Factory,
    desc: 'Supply chain telemetry, IoT plant floor connectivity, and predictive maintenance dashboards.'
  },
  {
    name: 'Technology & SaaS',
    icon: Laptop,
    desc: 'Cloud-native multi-tenant SaaS architecture, API monetization engines, and scalable microservices.'
  },
  {
    name: 'Retail & Commerce',
    icon: ShoppingBag,
    desc: 'Omnichannel inventory synchronization, real-time checkout pipelines, and personalization algorithms.'
  },
  {
    name: 'Banking & Financial Services',
    icon: Landmark,
    desc: 'Automated KYC/AML verification workflows, high-frequency ledger processing, and open banking APIs.'
  },
  {
    name: 'Professional Services',
    icon: Briefcase,
    desc: 'Practice management automation, billing intelligence systems, and collaborative client portals.'
  }
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-28 md:py-36 px-6 md:px-8 bg-[#F5F7FA] font-sans text-left border-t border-[#E2E6EF]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
            ● DOMAIN EXPERTISE
          </span>
          <ScrollText as="h2" className="text-4xl sm:text-5xl font-display font-extrabold text-[#0111A2] tracking-tight mb-4">Solutions Across Industries</ScrollText>
          <p className="text-base text-[#5B6475] leading-relaxed">
            Deep domain knowledge tailored to meet the strict compliance, operational, and architectural standards of your industry.
          </p>
        </div>

        {/* 6-Grid Clean Industries Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                style={{ '--d': `${idx * 0.07}s` }}
                className="reveal-up hover:-translate-y-1.5 group p-8 rounded-[12px] bg-white border border-[#E2E6EF] hover:bg-[#EEF2FF] hover:border-[#0111A2]/30 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-[8px] bg-[#EEF2FF] group-hover:bg-[#0111A2] flex items-center justify-center text-[#0111A2] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="w-2 h-2 rounded-full bg-transparent group-hover:bg-[#E86A1C] transition-colors" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-[#111827] group-hover:text-[#0111A2] transition-colors mb-3">
                    {ind.name}
                  </h3>

                  <p className="text-sm text-[#5B6475] leading-relaxed font-normal">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E6EF] group-hover:border-[#0111A2]/15 flex items-center justify-between text-xs font-semibold text-[#0111A2]">
                  <span>Explore Industry Framework</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
