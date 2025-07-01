import React from 'react';
import { ServicesHeader } from './services/ServicesHeader';
import { ServicesGrid } from './services/ServicesGrid';
import { PlanetOutline } from './services/PlanetOutline';

export const ServicesSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div id="services" className="relative min-h-screen bg-black overflow-hidden py-32">
      
      <div className="max-w-[1400px] mx-auto px-6 relative">
        <ServicesHeader isVisible={isVisible} />

        <div className="relative">
          <PlanetOutline />
          <div className="relative z-10 mt-8">
            <ServicesGrid isVisible={isVisible} />
          </div>
        </div>
      </div>
    </div>
  );
};