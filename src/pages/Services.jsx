import React from 'react';
import PageHero from '../components/PageHero';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import FinalCTA from '../components/FinalCTA';

export default function Services() {
  return (
    <>
      <PageHero eyebrow="WHAT WE DO" title="Capabilities That Move Industry Forward.">
        From digital transformation strategy and OT/IT integration to AI, cybersecurity and
        managed operations — one team, one accountable delivery line.
      </PageHero>
      <ServicesSection />
      <ProcessSection />
      <FinalCTA />
    </>
  );
}
