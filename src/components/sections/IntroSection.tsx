import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Rocket, Bot, CreditCard } from 'lucide-react';
import { AnimatedServiceButton } from '../ui/AnimatedServiceButton';
import { useTransition } from '../../context/TransitionContext';
import { MagmaGlow } from '../ui/MagmaGlow';

export const IntroSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const navigate = useNavigate();
  const { startTransition } = useTransition();

  const features = [
    {
      icon: <Rocket className="w-6 h-6 text-[#eb5633]" />,
      title: "Página Web",
      description: "Hecha estratégicamente para captar leads y cerrar ventas."
    },
    {
      icon: <Bot className="w-6 h-6 text-[#eb5633]" />,
      title: "SEO",
      description: "Aparece en las primeras búsquedas."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#eb5633]" />,
      title: "Automatización",
      description: "Flujos de mensajería, reservas online, chatbots."
    }
  ];

  const handleClick = async () => {
    await startTransition();
    navigate('/contactform');
  };

  return (
    <div className="relative min-h-screen flex items-start justify-center pt-24 pb-24 bg-black px-4 sm:px-6">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-black z-0" />

      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-6xl mx-auto mb-16"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-5 font-mono">
            No dejes que tu negocio sea
            <br />
            <span className="bg-gradient-to-r from-[#eb5633] via-pink-500 to-purple-500 text-transparent bg-clip-text">
              un granito de arena
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-mono">
            Convierte visitas en ventas desde el día 1
          </p>
        </motion.div>

        <div className="mx-auto">
          <div className="flex flex-wrap justify-center gap-[20px] mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="relative max-w-sm w-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-12
                  hover:border-[#eb5633]/30 transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(235,86,51,0.1)] group flex flex-col items-center text-center overflow-hidden"
              >
                <MagmaGlow />
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-xl bg-white/[0.03] border border-white/10 
                    group-hover:border-[#eb5633]/30 transition-all duration-300 mb-4 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-white font-mono flex items-center justify-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-white font-mono leading-relaxed flex items-center justify-center">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-center"
          >
            <p className="text-xl md:text-2xl font-light text-white/90 mb-8 font-mono">
              No te conformes con una web "casi-buena" o que nadie visita.
              <br />
              <span className="bg-gradient-to-r from-[#eb5633] via-pink-500 to-purple-500 text-transparent bg-clip-text">
                La hacemos por ti, con un estudio completo de lo que sirve en tu mercado.
              </span>
            </p>
            <div onClick={handleClick}>
              <AnimatedServiceButton isVisible={isVisible} buttonText="Quiero mi sitio" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};