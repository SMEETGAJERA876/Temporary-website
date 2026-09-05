import React from 'react';
import { Link } from '../router';
import PageHero from '../components/PageHero';

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="That page does not exist.">
        The link may be out of date. Everything else is one click away.
      </PageHero>

      <section className="py-24 px-6 md:px-8 bg-white font-sans text-center relative overflow-hidden">
        <div className="drift absolute -top-24 -right-20 w-[360px] h-[360px] bg-[#EEF2FF] rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="drift-alt absolute -bottom-24 -left-20 w-[320px] h-[320px] bg-[#EEF2FF]/60 rounded-full blur-[90px] pointer-events-none" aria-hidden="true" />
        <Link
          to="/"
          className="relative z-10 sheen inline-flex items-center gap-2 px-8 py-4 rounded-[8px] bg-[#E86A1C] hover:bg-[#d55e15] text-white font-semibold text-[15px] shadow-sm transition-all duration-200"
        >
          Back to home
        </Link>
      </section>
    </>
  );
}
