import React from 'react';
import PageHero from '../components/PageHero';
import BlueFeatureSection from '../components/BlueFeatureSection';
import FeatureApproach from '../components/FeatureApproach';
import CapabilityStrip from '../components/CapabilityStrip';
import FinalCTA from '../components/FinalCTA';

export default function Solutions() {
  return (
    <>
      <PageHero eyebrow="WHAT WE BUILD" title="Solutions shaped around your goals.">
        Platforms, pipelines and automation designed for the constraints you actually have,
        not the reference architecture on a vendor slide.
      </PageHero>
      <BlueFeatureSection />
      <CapabilityStrip />
      <FeatureApproach />
      <FinalCTA />
    </>
  );
}
