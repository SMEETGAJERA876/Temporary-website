import React from 'react';
import PageHero from '../components/PageHero';
import CaseStudiesSection from '../components/CaseStudiesSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialSection from '../components/TestimonialSection';
import FinalCTA from '../components/FinalCTA';

export default function Resources() {
  return (
    <>
      <PageHero eyebrow="PROOF & METHOD" title="How the work actually goes.">
        Case studies, delivery methodology and the standards we hold ourselves to.
      </PageHero>
      <CaseStudiesSection />
      <ProcessSection />
      <TestimonialSection />
      <FinalCTA />
    </>
  );
}
