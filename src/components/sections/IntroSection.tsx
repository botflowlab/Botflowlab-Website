import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Rocket, Bot, CreditCard, ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedServiceButton } from '../ui/AnimatedServiceButton';
import { useTransition } from '../../context/TransitionContext';

export const IntroSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const navigate = useNavigate();
  const { startTransition } = useTransition();

  const features = [
    {
      icon: <Rocket className="w-8 h-8 text-[#eb5633]" />,
      title: "Página Web",
      description: "Estratégicamente diseñada para captar leads y cerrar ventas"
    },
    {
      icon: <Bot className="w-8 h-8 text-[#eb5633]" />,
      title: "SEO Optimizado",
      description: "Aparece en las primeras búsquedas de Google"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-[#eb5633]" />,
      title: "Automatización IA",
      description: "Chatbots, reservas online y flujos automáticos"
    }
  ];

  const handleClick = async () => {
    await startTransition();
    navigate('/contactform');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-black z-0" />
      
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-4 h-4 text-[#eb5633]" />
            <span className="text-sm font-medium text-white/80 tracking-wide">
              CONVIERTE VISITAS EN VENTAS
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            No dejes que tu negocio sea
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#eb5633] via-pink-500 to-purple-500 text-transparent bg-clip-text">
                un granito de arena
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#eb5633] via-pink-500 to-purple-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isVisible ? 1 : 0 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full
                hover:bg-white/[0.05] hover:border-[#eb5633]/30 transition-all duration-500
                hover:shadow-[0_0_30px_rgba(235,86,51,0.15)] overflow-hidden">
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#eb5633]/5 via-transparent to-purple-500/5 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-white/[0.05] border border-white/10 
                    group-hover:border-[#eb5633]/30 group-hover:bg-[#eb5633]/10 transition-all duration-500">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover arrow */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-5 h-5 text-[#eb5633]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl lg:text-2xl font-light text-white/90 leading-relaxed">
              No te conformes con una web{' '}
              <span className="text-white/60">"casi-buena"</span> o que nadie visita.
            </p>
            <p className="text-xl lg:text-2xl font-light mt-2">
              <span className="bg-gradient-to-r from-[#eb5633] via-pink-500 to-purple-500 text-transparent bg-clip-text font-medium">
                La hacemos por ti, con un estudio completo de lo que sirve en tu mercado.
              </span>
            </p>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="inline-block cursor-pointer"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#eb5633] via-pink-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-black border border-white/20 rounded-lg px-8 py-4 group-hover:border-[#eb5633]/50 transition-all duration-300">
                <span className="text-white font-semibold text-lg tracking-wide">
                  Quiero mi sitio web
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};