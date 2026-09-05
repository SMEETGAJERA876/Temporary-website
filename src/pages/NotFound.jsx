import React from 'react';
import { Link } from '../router';
import PageHero from '../components/PageHero';

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="That page does not exist.">
        The link may be out of date. Everything else is one click away.
      </PageHero>

      <section className="py-24 px-6 md:px-8 bg-white font-sans text-center">
        <Link
          to="/"
          className="sheen inline-flex items-center gap-2 px-8 py-4 rounded-[8px] bg-[#E86A1C] hover:bg-[#d55e15] text-white font-semibold text-[15px] shadow-sm transition-all duration-200"
        >
          Back to home
        </Link>
      </section>
    </>
  );
}
