import React from 'react';
import { motion } from 'framer-motion';

export const PlanetOutline: React.FC = () => {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] md:w-[150%] lg:w-[130%] min-w-[1000px] aspect-[2/1] pointer-events-none">
      {/* Rotating Purple Light */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 w-full h-full z-0 flex items-center justify-center"
      >
        <img 
          src="/purple-light.svg" 
          alt="auroralight"
          className="w-auto h-full object-contain opacity-30"
        />
      </motion.div>

      
      {/* Main Planet Outline */}
      <img 
        src="/planet-outline.svg" 
        alt="" 
        className="relative z-[2] w-full h-full object-cover"
      />
    </div>
  );
};