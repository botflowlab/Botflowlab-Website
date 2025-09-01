import React from 'react';
import { AnimatedTitle } from '../ui/animated-title';
import { TrackingButton } from '../ui/TrackingButton';
import ScrollIndicator from '../ui/ScrollIndicator';
import { StarsAnimation } from '../ui/StarsAnimation';
import { motion } from 'framer-motion';


export const HeroSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div id='hero' className="relative min-h-screen w-full overflow-hidden bg-black">
      
      {/* Stars animation layer */}
      <div className="absolute inset-0 z-4">
        <StarsAnimation />
      </div> 
      
      {/* Background image 
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: 'easeOut', delay: 0.3 }}
        className="absolute inset-0 z-[2] bg-[url('https://i.postimg.cc/cLzsHZSf/bghero.png')] bg-no-repeat bg-[position:bottom_center] bg-contain opacity-60"
      >
  
        <div className="absolute inset-0 bg-black opacity-50 z-[3] pointer-events-none" />
      </motion.div> */}

      
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-black/25 via-black/15 to-black z-10"></div>
      
      {/* Content layer */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <ScrollIndicator />
        <div className="max-w-[1400px] mx-auto">
          {/* Badge */}
          <div className="mb-16">
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full 
              px-6 py-2 text-sm tracking-wide text-white/70 uppercase font-mono">
              Más crecimiento, más clientes, más ventas. 
            </div>
          </div>
          
          <AnimatedTitle title="Lanzamos tu sitio web listo para vender" />
          
          <div className="mt-16">
            <TrackingButton />
          </div>
        </div>
      </div>
    </div>
  );
};
