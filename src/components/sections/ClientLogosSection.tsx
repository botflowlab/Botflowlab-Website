import React from 'react';
import { motion } from 'framer-motion';

interface ClientLogosProps {
  isVisible: boolean;
}

export const ClientLogosSection: React.FC<ClientLogosProps> = ({ isVisible }) => {
  const clients = [
    {
      name: 'Mariano',
      logo: 'https://i.postimg.cc/1X8rFLZF/mariano-Botflowlab-00000.png',
      alt: 'Mariano - Cliente Botflowlab'
    },
    {
      name: 'Alex y Rebe',
      logo: 'https://i.postimg.cc/SRRDrncJ/alexyrebe-Botflowlab-00000.png',
      alt: 'Alex y Rebe - Cliente Botflowlab'
    },
    {
      name: 'José',
      logo: 'https://i.postimg.cc/C52J6w4J/jose-Botflowlab-00000.png',
      alt: 'José - Cliente Botflowlab'
    }
  ];

  return (
    <div className="relative bg-black py-16 md:py-0 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900/50 to-black opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                scale: isVisible ? 1 : 0.8 
              }}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#DA6040]/20 to-[#eb5633]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110" />
              
              {/* Logo container */}
              <div className="relative transition-all duration-500">
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="w-full h-auto max-w-[200px] md:max-w-[250px] mx-auto filter brightness-90 group-hover:brightness-100 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating particles for extra visual appeal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + Math.sin(i) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};