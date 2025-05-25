import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AnimatedServiceButton } from '../../ui/AnimatedServiceButton';
import { useTransition } from '../../context/TransitionContext';

interface ServicesHeaderProps {
  isVisible: boolean;
}

export const ServicesHeader: React.FC<ServicesHeaderProps> = ({ isVisible }) => {
  const navigate = useNavigate();
  const { startTransition } = useTransition();

  const handleClick = async () => {
    await startTransition();
    navigate('/contactform');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8 }}
      className="text-center relative"
    >
      <h2 className="text-6xl md:text-7xl font-bold mb-4" style={{ fontFamily: 'Kumbh Sans' }}>
        Servicios.
      </h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-white/70 max-w-2xl mx-auto text-center mb-12"
      >
        Esto es lo que podemos hacer por tu negocio.
      </motion.p>

      <div onClick={handleClick}>
        <AnimatedServiceButton isVisible={isVisible} buttonText="Pedir Cuota" />
      </div>
    </motion.div>
  );
};