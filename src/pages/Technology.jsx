import React from 'react';
import PageHero from '../components/PageHero';
import TechnologyStack from '../components/TechnologyStack';
import CapabilityStrip from '../components/CapabilityStrip';
import FinalCTA from '../components/FinalCTA';

export default function Technology() {
  return (
    <>
      <PageHero eyebrow="TECHNOLOGY" title="Powered by Technology. Driven by Engineering.">
        Technology agnostic. Engineering driven. We select the right platform for the problem,
        then engineer it to work as one connected system.
      </PageHero>
      <TechnologyStack />
      <CapabilityStrip />
      <FinalCTA />
    </>
  );
}
