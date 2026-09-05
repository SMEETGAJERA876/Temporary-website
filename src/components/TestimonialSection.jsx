import ScrollText from './ScrollText';
import React from 'react';
import { Quote } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 md:px-8 bg-[#F5F7FA] font-sans text-left border-t border-[#E2E6EF] relative overflow-hidden">
      <div className="drift absolute -top-28 -left-24 w-[420px] h-[420px] bg-white rounded-full blur-[110px] pointer-events-none" aria-hidden="true" />
      <div className="drift-alt absolute -bottom-28 -right-24 w-[360px] h-[360px] bg-[#E86A1C]/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto relative z-10">

        <div
          className="reveal-up p-10 sm:p-16 rounded-[16px] bg-white border border-[#E2E6EF] shadow-md relative"
        >
          {/* Blue Quotation Icon */}
          <div className="w-14 h-14 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#0111A2] mb-8">
            <Quote className="w-7 h-7 fill-[#0111A2]/20" />
          </div>

          {/* Editorial Testimonial Statement */}
          <ScrollText as="blockquote" className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-[#0111A2] leading-[1.25] tracking-tight mb-10">"dhgsoft turned a decade of fragmented plant data into a single, trusted source of truth — and the AI models built on top of it now catch quality issues before they cost us a batch."</ScrollText>

          {/* Client Details */}
          <div className="flex items-center gap-4 pt-6 border-t border-[#E2E6EF]">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
              alt="Elena Rostova"
              className="w-12 h-12 rounded-full object-cover border border-[#0111A2]/20"
            />
            <div>
              <div className="text-base font-bold text-[#111827]">Elena Rostova</div>
              <div className="text-xs sm:text-sm text-[#5B6475]">VP of Operations • Global Chemicals Manufacturer</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
