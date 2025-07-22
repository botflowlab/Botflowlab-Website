import React from 'react';
import { motion } from 'framer-motion';

interface SuccessCasesHeaderProps {
  isVisible: boolean;
}

export const SuccessCasesHeader: React.FC<SuccessCasesHeaderProps> = ({ isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8 }}
      className="text-center relative"
    >
      <h2 className="text-6xl md:text-7xl font-light mb-4" style={{ fontFamily: 'Kumbh Sans' }}>
        Casos de Éxito.
      </h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-white/70 max-w-2xl mx-auto text-center mb-12"
      >
        Proyectos que han transformado negocios.
      </motion.p>
    </motion.div>
  );
};