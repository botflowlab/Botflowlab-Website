import React from 'react';
import { motion } from 'framer-motion';

export const IntroSeparatorSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="relative w-full h-32 flex items-center justify-center overflow-hidden bg-black"
    >

      {/* Línea animada centrada y más corta */}
      <div className="relative z-10 w-full flex justify-center px-4">
        <div className="h-[2px] w-[300px] md:w-[400px] lg:w-[500px] flight-line-horizontal rounded-full opacity-70" />
      </div>
    </motion.div>
  );
};