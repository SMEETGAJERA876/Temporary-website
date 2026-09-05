import React from 'react';
import Hero from '../components/Hero';
import CapabilityStrip from '../components/CapabilityStrip';
import TrustMetrics from '../components/TrustMetrics';
import ServicesSection from '../components/ServicesSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import TestimonialSection from '../components/TestimonialSection';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <TrustMetrics />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialSection />
      <FinalCTA />
    </>
  );
}
