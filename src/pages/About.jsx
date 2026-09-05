import React from 'react';
import PageHero from '../components/PageHero';
import FeatureApproach from '../components/FeatureApproach';
import TrustMetrics from '../components/TrustMetrics';
import TestimonialSection from '../components/TestimonialSection';
import FinalCTA from '../components/FinalCTA';

export default function About() {
  return (
    <>
      <PageHero eyebrow="WHO WE ARE" title="A team built around outcomes.">
        We are engineers, strategists and analysts who believe technology only matters
        when it moves a number that the business cares about.
      </PageHero>
      <FeatureApproach />
      <TrustMetrics />
      <TestimonialSection />
      <FinalCTA />
    </>
  );
}
