import React from 'react';
import Hero from '../components/Hero';
import CapabilityStrip from '../components/CapabilityStrip';
import BusinessValue from '../components/BusinessValue';
import ServicesSection from '../components/ServicesSection';
import IndustriesSection from '../components/IndustriesSection';
import IntelligentIndustry from '../components/IntelligentIndustry';
import BlueFeatureSection from '../components/BlueFeatureSection';
import TechnologyStack from '../components/TechnologyStack';
import InlineCTA from '../components/InlineCTA';
import CaseStudiesSection from '../components/CaseStudiesSection';
import TestimonialSection from '../components/TestimonialSection';
import ProcessSection from '../components/ProcessSection';
import WhyDHGsoft from '../components/WhyDHGsoft';
import Insights from '../components/Insights';
import PartnersEcosystem from '../components/PartnersEcosystem';
import CompanyCredibility from '../components/CompanyCredibility';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <BusinessValue />
      <ServicesSection />
      <IndustriesSection />
      <IntelligentIndustry />
      <BlueFeatureSection />
      <TechnologyStack />
      <InlineCTA />
      <CaseStudiesSection />
      <TestimonialSection />
      <ProcessSection />
      <WhyDHGsoft />
      <Insights />
      <PartnersEcosystem />
      <CompanyCredibility />
      <FinalCTA />
    </>
  );
}
