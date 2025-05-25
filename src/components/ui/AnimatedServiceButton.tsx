import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedServiceButtonProps {
  isVisible: boolean;
  buttonText?: string;
  onClick?: () => void;
}

export const AnimatedServiceButton: React.FC<AnimatedServiceButtonProps> = ({ 
  isVisible, 
  buttonText = "Start Your Project",
  onClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative inline-block group cursor-pointer"
      onClick={onClick}
    >
      <button className="relative px-8 py-4 bg-transparent overflow-hidden group">
        <div className="absolute inset-0 w-0 bg-white/10 transition-all duration-[750ms] ease-out group-hover:w-full"/>
        <div className="absolute inset-0 border border-white/20 group-hover:border-white/40 transition-colors duration-300"/>
        <div className="absolute -inset-[1px] bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-sm opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-1000 animate-glow"/>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-full h-[1px] bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"/>
        </div>
        <span className="relative text-white/80 text-sm tracking-wider font-light uppercase group-hover:text-white transition-colors duration-300">
          {buttonText}
        </span>
      </button>
    </motion.div>
  );
};