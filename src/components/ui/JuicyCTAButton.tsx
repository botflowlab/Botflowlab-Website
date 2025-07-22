import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

interface JuicyCTAButtonProps {
  isVisible: boolean;
  buttonText?: string;
  onClick?: () => void;
}

export const JuicyCTAButton: React.FC<JuicyCTAButtonProps> = ({ 
  isVisible, 
  buttonText = "SÍ, LA QUIERO",
  onClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative inline-block group cursor-pointer"
      onClick={onClick}
    >
      {/* Outer glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#DA6040] to-[#eb5633] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      
      {/* Main button container */}
      <motion.button 
        className="relative px-12 py-6 bg-gradient-to-r from-[#DA6040] to-[#eb5633] rounded-2xl overflow-hidden group shadow-2xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Animated background shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        
        {/* Button content */}
        <div className="relative flex items-center justify-center gap-3">
          {/* Sparkle icon */}
          <motion.div
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="opacity-80 group-hover:opacity-100"
          >
            <Sparkles className="w-6 h-6 text-white" />
          </motion.div>
          
          {/* Button text */}
          <span className="text-white text-xl md:text-2xl font-light tracking-wide">
            {buttonText}
          </span>
          
          {/* Arrow icon */}
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="opacity-80 group-hover:opacity-100"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </motion.div>
        </div>
        
        {/* Pulse effect on hover */}
        <motion.div
          className="absolute inset-0 bg-white/10 rounded-2xl"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ 
            scale: 1,
            opacity: [0, 0.3, 0],
            transition: { duration: 0.6, ease: "easeOut" }
          }}
        />
      </motion.button>
      
      {/* Bottom shadow */}
      <div className="absolute top-2 left-2 right-2 bottom-0 bg-gradient-to-r from-[#DA6040]/50 to-[#eb5633]/50 rounded-2xl blur-sm -z-10 group-hover:blur-md transition-all duration-300" />
    </motion.div>
  );
};