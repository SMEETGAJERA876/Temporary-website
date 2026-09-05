import React from 'react';
import { Factory, Cog, Database, Briefcase, ArrowRight } from 'lucide-react';

const personas = [
  {
    icon: Factory,
    role: 'Plant & Operations Leader',
    covers: 'Uptime, throughput, quality and safety outcomes.',
    subject: 'Operations inquiry'
  },
  {
    icon: Cog,
    role: 'OT & Automation Engineer',
    covers: 'PLC/SCADA integration, control systems and connectivity.',
    subject: 'OT & automation inquiry'
  },
  {
    icon: Database,
    role: 'IT & Data Leader',
    covers: 'Data platforms, architecture, security and AI enablement.',
    subject: 'IT & data inquiry'
  },
  {
    icon: Briefcase,
    role: 'Executive & Business Leader',
    covers: 'ROI, transformation roadmap and business case.',
    subject: 'Executive inquiry'
  }
];

export default function TalkToTheRightPerson() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-8 bg-[#F5F7FA] font-sans text-left border-b border-[#E2E6EF] relative overflow-hidden">
      <div className="drift absolute -top-24 -left-20 w-[360px] h-[360px] bg-white rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="drift-alt absolute -bottom-24 -right-20 w-[320px] h-[320px] bg-[#E86A1C]/5 rounded-full blur-[90px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0111A2] uppercase mb-3 block">
            ● TALK TO THE RIGHT PERSON
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#111827] tracking-tight">
            Tell us who you are, and we'll route it to someone who speaks your language.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {personas.map((p, idx) => {
            const Icon = p.icon;
            return (
              <a
                key={p.role}
                href={`mailto:contact@dhgsoft.com?subject=${encodeURIComponent(p.subject)}`}
                style={{ '--d': `${idx * 0.07}s` }}
                className="reveal-up hover:-translate-y-1.5 group p-6 rounded-[12px] bg-white border border-[#E2E6EF] hover:border-[#0111A2] shadow-brand-hover transition-all duration-300 flex flex-col justify-between min-h-[190px]"
              >
                <div>
                  <div className="w-11 h-11 rounded-[8px] bg-[#EEF2FF] group-hover:bg-[#0111A2] flex items-center justify-center text-[#0111A2] group-hover:text-white transition-all mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-display font-bold text-[#111827] mb-2 leading-snug">
                    {p.role}
                  </h3>
                  <p className="text-xs text-[#5B6475] leading-relaxed font-normal">
                    {p.covers}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E2E6EF] flex items-center justify-between text-xs font-semibold text-[#0111A2] group-hover:text-[#E86A1C] transition-colors">
                  <span>Email this team</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
