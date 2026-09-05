import React from 'react';
import PageHero from '../components/PageHero';
import BlueFeatureSection from '../components/BlueFeatureSection';
import FeatureApproach from '../components/FeatureApproach';
import CapabilityStrip from '../components/CapabilityStrip';
import FinalCTA from '../components/FinalCTA';

export default function Solutions() {
  return (
    <>
      <PageHero eyebrow="SOLUTIONS" title="Solutions Designed Around Business Outcomes.">
        Every solution starts with a business challenge, not a technology stack — and ends with
        a measurable outcome.
      </PageHero>
      <BlueFeatureSection />
      <CapabilityStrip />
      <FeatureApproach />
      <FinalCTA />
    </>
  );
}
