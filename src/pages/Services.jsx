import React from 'react';
import PageHero from '../components/PageHero';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import FinalCTA from '../components/FinalCTA';

export default function Services() {
  return (
    <>
      <PageHero eyebrow="OUR EXPERTISE" title="Services that carry an engagement end to end.">
        From the first architecture review to the production rollout and the quarter after it —
        one team, one accountable delivery line.
      </PageHero>
      <ServicesSection />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
