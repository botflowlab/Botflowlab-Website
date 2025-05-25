import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTransition } from '../../context/TransitionContext';

export const VerticalReveal: React.FC = () => {
  const { isTransitioning } = useTransition();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ scaleY: 0, transformOrigin: 'top' }}
            animate={{ 
              scaleY: 1,
              transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1.000] }
            }}
            exit={{ 
              scaleY: 0,
              transformOrigin: 'bottom',
              transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1.000], delay: 0.2 }
            }}
          />
          
          <motion.div
            className="absolute text-white text-2xl md:text-2xl font-light tracking-tight z-10"
            initial={{ y: 100, opacity: 0 }}
            animate={{ 
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }
            }}
            exit={{ 
              y: -100,
              opacity: 0,
              transition: { duration: 0.5, ease: "easeIn" }
            }}
          >
            botflowlab
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};