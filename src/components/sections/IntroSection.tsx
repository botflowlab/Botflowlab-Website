import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Rocket, Bot, CreditCard, Sparkles, Zap, Target } from 'lucide-react';
import { AnimatedServiceButton } from '../ui/AnimatedServiceButton';
import { useTransition } from '../../context/TransitionContext';

export const IntroSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const navigate = useNavigate();
  const { startTransition } = useTransition();

  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Página Web",
      description: "Hecha estratégicamente para captar leads y cerrar ventas.",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      glowColor: "rgba(239, 68, 68, 0.3)"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "SEO",
      description: "Aparece en las primeras búsquedas.",
      gradient: "from-blue-500 via-purple-500 to-indigo-500",
      glowColor: "rgba(59, 130, 246, 0.3)"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatización",
      description: "Flujos de mensajería, reservas online, chatbots.",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      glowColor: "rgba(16, 185, 129, 0.3)"
    }
  ];

  const handleClick = async () => {
    await startTransition();
    navigate('/contactform');
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Hero Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-20"
          >

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight"
            >
              <span className="block text-white mb-4">
                No dejes que tu negocio sea
              </span>
              <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 
                bg-clip-text text-transparent relative">
                un granito de arena
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl sm:text-2xl lg:text-3xl text-white/80 font-light max-w-4xl mx-auto"
            >
              Convierte visitas en ventas desde el día 1
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card Background with Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] 
                  rounded-3xl border border-white/10 backdrop-blur-sm
                  group-hover:border-white/20 transition-all duration-500" />
                
                {/* Hover Glow */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 blur-xl"
                  style={{ 
                    background: `radial-gradient(circle at center, ${feature.glowColor} 0%, transparent 70%)`
                  }}
                />

                {/* Card Content */}
                <div className="relative p-8 lg:p-10 text-center">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl 
                      bg-gradient-to-r ${feature.gradient} mb-6 shadow-2xl`}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 
                    group-hover:text-transparent group-hover:bg-gradient-to-r 
                    group-hover:from-white group-hover:to-gray-300 
                    group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-lg leading-relaxed group-hover:text-white/90 
                    transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full mt-6 
                      transform origin-left`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center"
          >
            {/* Call to Action Text */}
            <div className="mb-12">
              <p className="text-xl lg:text-2xl text-white/90 mb-4 font-light">
                No te conformes con una web "casi-buena" o que nadie visita.
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="text-xl lg:text-2xl font-medium"
              >
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 
                  bg-clip-text text-transparent">
                  La hacemos por ti, con un estudio completo de lo que sirve en tu mercado.
                </span>
              </motion.p>
            </div>

            {/* CTA Button - Using the consistent AnimatedServiceButton */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 2 }}
              onClick={handleClick}
            >
              <AnimatedServiceButton isVisible={isVisible} buttonText="Quiero mi sitio" />
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/50 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Entrega en 72 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>Soporte incluido</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span>Garantía de resultados</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};