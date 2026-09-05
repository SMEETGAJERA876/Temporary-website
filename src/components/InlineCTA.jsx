import React from 'react';
import { Link } from '../router';
import { ArrowRight } from 'lucide-react';

export default function InlineCTA() {
  return (
    <section className="py-12 md:py-14 px-6 md:px-8 bg-[#EEF2FF] font-sans border-y border-[#0111A2]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111827]">
            Not sure where to start?
          </h3>
          <p className="text-sm text-[#5B6475] mt-1">
            Tell an engineer the problem — get a straight answer, not a sales sequence.
          </p>
        </div>

        <Link
          to="/contact"
          className="sheen shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-[8px] bg-[#0111A2] hover:bg-[#1638C8] text-white font-semibold text-[14px] shadow-sm transition-all duration-200 group"
        >
          <span>Talk to an Expert</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
