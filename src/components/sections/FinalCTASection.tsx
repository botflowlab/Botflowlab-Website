import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AnimatedServiceButton } from '../ui/AnimatedServiceButton';
import { useTransition } from '../../context/TransitionContext';
import { Sparkles, ArrowRight } from 'lucide-react';

interface FinalCTASectionProps {
  isVisible: boolean;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ isVisible }) => {
  const navigate = useNavigate();
  const { startTransition } = useTransition();

  const handleClick = async () => {
    await startTransition();
    navigate('/contactform');
  };

  return (
    <div className="relative bg-black overflow-hidden py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-[#DA6040]/30 to-[#eb5633]/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight"
          style={{ fontFamily: 'Kumbh Sans' }}
        >
          <span className="text-white block mb-4">
            Obtén una Consultoría Gratis
          </span>
          <span className="bg-gradient-to-r from-[#DA6040] to-[#eb5633] bg-clip-text text-transparent">
            para ver qué podemos hacer por tu negocio
          </span>
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Analizaremos tu situación actual y te mostraremos 
          exactamente cómo podemos ayudarte a crecer online.
        </motion.p>

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 text-sm md:text-base"
        >
          {[
            "Análisis personalizado", 
            "Estrategia clara",
            "Resultados garantizados"
          ].map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="flex items-center gap-2 text-white/70 bg-white/5 backdrop-blur-sm 
                border border-white/10 rounded-full px-4 py-2 hover:border-white/20 
                hover:text-white/90 transition-all duration-300"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-[#DA6040] to-[#eb5633] rounded-full"></div>
              <span>{benefit}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={handleClick}
          className="flex justify-center"
        >
          <div className="relative group">
            <AnimatedServiceButton 
              isVisible={isVisible} 
              buttonText="SÍ, LA QUIERO" 
            />
            
            {/* Arrow indicator */}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ArrowRight className="w-6 h-6 text-[#DA6040]" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isVisible ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#DA6040] to-transparent"
      />
    </div>
  );
};