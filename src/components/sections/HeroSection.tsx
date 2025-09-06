import React from 'react';
import { TrackingButton } from '../ui/TrackingButton';
import ScrollIndicator from '../ui/ScrollIndicator';
import { StarsAnimation } from '../ui/StarsAnimation';
import { motion } from 'framer-motion';


export const HeroSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const titleVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const words = "Lanzamos tu sitio web listo para vender".split(" ");

  return (
    <div id='hero' className="relative min-h-screen w-full overflow-hidden bg-black">
      
      {/* Stars animation layer */}
      <div className="absolute inset-0 z-4">
        <StarsAnimation />
      </div> 

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
          
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-[7.5rem] font-extrabold tracking-tight text-center leading-none text-white max-w-6xl mx-auto mb-8"
            style={{ 
              fontFamily: 'Kumbh Sans, sans-serif',
              letterSpacing: '-0.04em'
            }}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-4 md:mr-6"
                variants={wordVariants}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          
          <div className="mt-16">
            <TrackingButton />
          </div>
        </div>
      </div>
    </div>
  );
};
