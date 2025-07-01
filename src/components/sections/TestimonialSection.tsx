import React from 'react';
import { motion } from 'framer-motion';
import { IntroSeparatorSection } from './IntroSeparatorSection';

export const TestimonialSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <IntroSeparatorSection isVisible={isVisible} />
      
      <div className="relative z-10 flex items-center justify-center py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Decorative Corner Elements */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/30"></div>
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/30"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/30"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/30"></div>

          <div className="text-center max-w-5xl mx-auto">
            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-16 leading-tight"
              style={{ fontFamily: 'Kumbh Sans' }}
            >
              <span className="text-white">Un Sitio</span>
              <br />
              <span className="bg-gradient-to-r from-[#DA6040] to-[#eb5633] bg-clip-text text-transparent">
                DE CLASE MUNDIAL
              </span>
            </motion.h2>

            {/* Testimonial Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-1xl lg:text-2xl text-white/90 font-light italic leading-relaxed mb-16 max-w-5xl mx-auto"
            >
              "La experiencia fue 100% positiva y ágil, especialmente porque mi trabajo es demandante y no podía dedicarle demasiado tiempo de mi día. Me gustó que fuera proactivo y que buscara la oportunidad, que llegó en un buen momento. Recomiendo el proceso y la respuesta a cada consulta para lograrla."
            </motion.blockquote>

            {/* Client Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Client Photo */}
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src="https://i.postimg.cc/sXPYnsFq/Photo-17-9-20-10-28-43-AM.jpg"
                    alt="Andrés Castro"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Glow effect behind photo */}
                <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-[#DA6040] to-[#eb5633] opacity-20 blur-xl -z-10"></div>
              </div>

              {/* Client Name and Title */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  ANDRÉS CASTRO
                </h3>
                <p className="text-white/60 text-sm md:text-base uppercase tracking-wider">
                  ARQUITECTO
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <IntroSeparatorSection isVisible={isVisible} />
    </div>
    
  );
};