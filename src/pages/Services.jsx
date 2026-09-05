import React from 'react';
import PageHero from '../components/PageHero';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import FinalCTA from '../components/FinalCTA';

export default function Services() {
  return (
    <>
      <PageHero eyebrow="WHAT WE DO" title="Capabilities That Move Industry Forward.">
        Consulting, industrial engineering, automation, data & AI, digital & cloud, and managed services —
        one team, one accountable delivery line.
      </PageHero>
      <ServicesSection />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
