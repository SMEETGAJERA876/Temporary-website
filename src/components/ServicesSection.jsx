import ScrollText from './ScrollText';
import React from 'react';
import { ArrowUpRight, Cpu, Layers, Compass, Cog, Database } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Digital Transformation',
    icon: Layers,
    desc: 'Modernizing legacy architectures into resilient, cloud-native digital ecosystems built for enterprise scale.'
  },
  {
    num: '02',
    title: 'Process Optimization',
    icon: Cog,
    desc: 'Streamlining end-to-end operational workflows to eliminate bottlenecks and accelerate cycle velocity.'
  },
  {
    num: '03',
    title: 'Technology Consulting',
    icon: Cpu,
    desc: 'Advising executive leaders on technical roadmaps, stack modernization, and risk-managed digital deployments.'
  },
  {
    num: '04',
    title: 'Business Strategy',
    icon: Compass,
    desc: 'Aligning business models with emerging technology capabilities to establish sustainable competitive advantages.'
  },
  {
    num: '05',
    title: 'Intelligent Automation',
    icon: Cpu,
    desc: 'Designing deterministic robotic workflows and autonomous AI agents to automate complex repetitive processes.'
  },
  {
    num: '06',
    title: 'Data & Analytics',
    icon: Database,
    desc: 'Unifying fragmented data lakes into real-time analytical pipelines that deliver executive clarity and ROI.'
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
              ● OUR EXPERTISE
            </span>
            <ScrollText as="h2" className="text-4xl sm:text-5xl font-display font-extrabold text-[#0111A2] tracking-tight">What We Do</ScrollText>
          </div>
          <p className="reveal-up text-base text-[#5B6475] max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            We deliver end-to-end engineering, advisory, and digital transformation solutions that drive measurable performance.
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
