import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { IntroSection } from './sections/IntroSection';
import { IntroSeparatorSection } from './sections/IntroSeparatorSection';
import { ClientLogosSection } from './sections/ClientLogosSection';
import { WhyWebsiteSection } from './sections/WhyWebsiteSection';
import { TestimonialSection } from './sections/TestimonialSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { ServicesSection } from './sections/ServicesSection';
import { SuccessCasesSection } from './sections/SuccessCasesSection';
import { FinalCTASection } from './sections/FinalCTASection';
import { Footer } from './Footer';

export const NavigationGrid: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div className="relative w-full">
      <div className="relative z-10">
        <HeroSection isVisible={isVisible} />
        {/* <IntroSection isVisible={isVisible} /> */}
        <ClientLogosSection isVisible={isVisible} />
        <WhyWebsiteSection isVisible={isVisible} />
        <TestimonialSection isVisible={isVisible} />
        <ServicesSection isVisible={isVisible} />
        <HowItWorksSection isVisible={isVisible} />
        <SuccessCasesSection isVisible={isVisible} />
        <FinalCTASection isVisible={isVisible} />
        <Footer isVisible={isVisible} />
      </div>
    </div>
  );
};