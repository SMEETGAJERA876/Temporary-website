import React from 'react';
import PageHero from '../components/PageHero';
import TransformationStories from '../components/TransformationStories';
import ProcessSection from '../components/ProcessSection';
import TestimonialSection from '../components/TestimonialSection';
import FinalCTA from '../components/FinalCTA';

export default function Resources() {
  return (
    <>
      <PageHero eyebrow="TRANSFORMATION STORIES" title="Real Challenges. Real Transformation.">
        How our engagements actually go: the challenge, the approach, the solution, the technology
        and the business outcome that resulted.
      </PageHero>
      <TransformationStories />
      <ProcessSection />
      <TestimonialSection />
      <FinalCTA />
    </>
  );
}
