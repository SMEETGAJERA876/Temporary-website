import React from 'react';
import PageHero from '../components/PageHero';
import IndustriesSection from '../components/IndustriesSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import FinalCTA from '../components/FinalCTA';

export default function Industries() {
  return (
    <>
      <PageHero eyebrow="INDUSTRIES" title="Deep Expertise. Industry by Industry.">
        Technology is only valuable when it understands the business it serves.
      </PageHero>
      <IndustriesSection />
      <CaseStudiesSection />
      <FinalCTA />
    </>
  );
}
