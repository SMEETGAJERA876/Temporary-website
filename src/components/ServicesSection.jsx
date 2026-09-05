import ScrollText from './ScrollText';
import React from 'react';
import { ArrowUpRight, Compass, Factory, Cog, Database, Cloud, LifeBuoy } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Consulting & Transformation',
    icon: Compass,
    desc: 'Shaping the roadmap for operational modernization, aligning technology investment with business outcomes.'
  },
  {
    num: '02',
    title: 'Industrial Engineering',
    icon: Factory,
    desc: 'Deep plant and process engineering expertise applied to design, upgrade and de-risk industrial assets.'
  },
  {
    num: '03',
    title: 'Automation & Integration',
    icon: Cog,
    desc: 'Connecting control systems, equipment and software into a single, reliable operating architecture.'
  },
  {
    num: '04',
    title: 'Data & Artificial Intelligence',
    icon: Database,
    desc: 'Building trusted industrial data foundations and applying AI to turn information into decisions.'
  },
  {
    num: '05',
    title: 'Digital & Cloud',
    icon: Cloud,
    desc: 'Scalable cloud platforms and digital applications that extend the plant floor to the enterprise.'
  },
  {
    num: '06',
    title: 'Managed Services',
    icon: LifeBuoy,
    desc: 'Ongoing operation, support and continuous improvement of the systems we design and deploy.'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 md:py-36 px-6 md:px-8 bg-white font-sans text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
              ● WHAT WE DO
            </span>
            <ScrollText as="h2" className="text-4xl sm:text-5xl font-display font-extrabold text-[#0111A2] tracking-tight">Capabilities That Move Industry Forward</ScrollText>
          </div>
          <p className="reveal-up text-base text-[#5B6475] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            Six integrated capabilities spanning consulting, engineering, automation, data, cloud and managed operations — carried end to end by one team.
          </p>
        </div>

        {/* 6-Grid Services Layout with Blue Hover Transition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.num}
                style={{ '--d': `${idx * 0.07}s` }}
                className="reveal-up hover:-translate-y-1.5 group relative p-8 sm:p-10 rounded-[12px] bg-white border border-[#E2E6EF] hover:bg-[#0111A2] hover:border-[#0111A2] transition-all duration-300 flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-xl cursor-pointer"
              >
                {/* Top Row: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-display font-extrabold font-mono text-[#0111A2] group-hover:text-white transition-colors">
                    {svc.num}
                  </span>
                  
                  <div className="w-10 h-10 rounded-[8px] bg-[#EEF2FF] group-hover:bg-white/10 flex items-center justify-center text-[#0111A2] group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Content: Title, Description, Orange Arrow */}
                <div className="mt-auto">
                  <h3 className="text-xl font-display font-bold text-[#111827] group-hover:text-white transition-colors mb-3">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-[#5B6475] group-hover:text-white/80 transition-colors leading-relaxed mb-6 font-normal">
                    {svc.desc}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#E2E6EF] group-hover:border-white/20 transition-colors">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0111A2] group-hover:text-[#E86A1C] transition-colors">
                      Learn More
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#0111A2] group-hover:text-[#E86A1C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
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
