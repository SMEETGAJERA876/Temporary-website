import React from 'react';
import PageHero from '../components/PageHero';
import IndustriesSection from '../components/IndustriesSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import FinalCTA from '../components/FinalCTA';

export default function Industries() {
  return (
    <>
      <PageHero eyebrow="SECTORS WE SERVE" title="Depth in the industries we work in.">
        Regulation, legacy estates and margin pressure look different in every sector.
        We bring the context, not just the stack.
      </PageHero>
      <IndustriesSection />
      <CaseStudiesSection />
      <FinalCTA />
    </>
  );
}
