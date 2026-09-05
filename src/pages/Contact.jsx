import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';
import FinalCTA from '../components/FinalCTA';

const channels = [
  { icon: Mail, label: 'Email', value: 'contact@dhgsoft.com', href: 'mailto:contact@dhgsoft.com' },
  { icon: Phone, label: 'Phone', value: '+1 (800) 450-DHG', href: 'tel:+1000000000' },
  { icon: MapPin, label: 'Office', value: 'Available worldwide, remote-first', href: null }
];

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="START THE CONVERSATION" title="Tell us what you are trying to move.">
        Send us the problem in a paragraph. You will get a considered reply from an engineer,
        not a sales sequence.
      </PageHero>

      <section className="py-24 md:py-28 px-6 md:px-8 bg-white font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {channels.map((c, idx) => {
            const Icon = c.icon;
            const body = (
              <>
                <div className="w-12 h-12 rounded-[8px] bg-[#EEF2FF] group-hover:bg-[#0111A2] flex items-center justify-center text-[#0111A2] group-hover:text-white transition-all mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono font-bold tracking-[0.18em] text-[#0111A2] uppercase mb-2">
                  {c.label}
                </div>
                <div className="text-lg font-display font-bold text-[#111827]">{c.value}</div>
              </>
            );

            const className =
              'reveal-up hover:-translate-y-1.5 group block p-8 rounded-[12px] bg-white border border-[#E2E6EF] shadow-sm hover:border-[#0111A2] hover:shadow-md transition-all duration-300 text-left';

            return c.href ? (
              <a key={c.label} href={c.href} style={{ '--d': `${idx * 0.08}s` }} className={className}>
                {body}
              </a>
            ) : (
              <div key={c.label} style={{ '--d': `${idx * 0.08}s` }} className={className}>
                {body}
              </div>
            );
          })}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
