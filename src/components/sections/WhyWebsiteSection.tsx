import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Users, BarChart as ChartBar, UserCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { IntroSeparatorSection } from './IntroSeparatorSection';

interface WhyWebsiteCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  gradient: string;
}

export const WhyWebsiteSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reasons: WhyWebsiteCard[] = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Aparece donde te buscan",
      description: "Un negocio con sitio web aparece en búsquedas locales de Google, que representan el 46% de todas las búsquedas. Y el 81% de los consumidores investiga online antes de hacer una compra.",
      stat: "46%",
      statLabel: "de búsquedas son locales",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <ChartBar className="w-8 h-8" />,
      title: "Doble de ingresos",
      description: "Las empresas con sitio web generan en promedio más del doble de ingresos que las que no tienen presencia online. Las pequeñas empresas con una web optimizada pueden incrementar sus conversiones hasta en un 30%.",
      stat: "2x",
      statLabel: "más ingresos promedio",
      gradient: "from-emerald-500 to-teal-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "40% más de oportunidades",
      description: "Una web permite generar leads y ventas incluso fuera del horario comercial. Esto puede representar hasta un 40% más de oportunidades respecto a negocios que solo dependen de redes sociales.",
      stat: "40%",
      statLabel: "más oportunidades",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Imagen profesional y creíble",
      description: "El 84% de los consumidores cree que una empresa con sitio web es más creíble que una sin web. Un sitio web bien diseñado puede aumentar la percepción de profesionalismo en hasta un 75%.",
      stat: "84%",
      statLabel: "más credibilidad",
      gradient: "from-orange-500 to-red-400"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reasons.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reasons.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reasons.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reasons.length) % reasons.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      
      <div className="relative z-10 flex items-center justify-center py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: 'Kumbh Sans' }}>
              ¿Por qué tener una página web?
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Solo mira estos datos...
            </p>
          </motion.div>

          {/* Main Carousel Container */}
          <div className="relative">
            {/* Desktop View - Side by Side */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
              {/* Left Side - Current Card */}
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 hover:border-white/20 transition-all duration-500 group">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${reasons[currentSlide].gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {reasons[currentSlide].icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {reasons[currentSlide].title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed text-lg mb-6">
                    {reasons[currentSlide].description}
                  </p>

                  {/* Stat */}
                  <div className="flex items-center gap-4">
                    <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${reasons[currentSlide].gradient} text-transparent bg-clip-text`}>
                      {reasons[currentSlide].stat}
                    </div>
                    <div className="text-white/60 text-sm uppercase tracking-wide">
                      {reasons[currentSlide].statLabel}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Preview Cards */}
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`cursor-pointer transition-all duration-300 ${
                      index === currentSlide 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-60 scale-95 hover:opacity-80'
                    }`}
                    whileHover={{ scale: index === currentSlide ? 1 : 0.98 }}
                  >
                    <div className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${
                      index === currentSlide 
                        ? 'border-white/30 bg-white/10' 
                        : 'border-white/10 hover:border-white/20'
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${reason.gradient} flex items-center justify-center flex-shrink-0`}>
                          <div className="text-white text-sm">
                            {reason.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-semibold text-lg mb-1 truncate">
                            {reason.title}
                          </h4>
                          <div className="flex items-center gap-2">
                            <span className={`text-2xl font-bold bg-gradient-to-r ${reason.gradient} text-transparent bg-clip-text`}>
                              {reason.stat}
                            </span>
                            <span className="text-white/60 text-sm">
                              {reason.statLabel}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile/Tablet View - Full Card Carousel */}
            <div className="lg:hidden">
              <div className="relative overflow-hidden rounded-3xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8"
                  >
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${reasons[currentSlide].gradient} flex items-center justify-center mb-6`}>
                      <div className="text-white">
                        {reasons[currentSlide].icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                      {reasons[currentSlide].title}
                    </h3>

                    {/* Stat */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${reasons[currentSlide].gradient} text-transparent bg-clip-text`}>
                        {reasons[currentSlide].stat}
                      </div>
                      <div className="text-white/60 text-sm uppercase tracking-wide">
                        {reasons[currentSlide].statLabel}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 leading-relaxed">
                      {reasons[currentSlide].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {reasons.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white scale-125' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Progress Bar (Desktop) */}
            <div className="hidden lg:block mt-12">
              <div className="flex justify-center">
                <div className="flex gap-2">
                  {reasons.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className="relative group"
                    >
                      <div className={`w-16 h-1 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white' 
                          : 'bg-white/20 group-hover:bg-white/40'
                      }`} />
                      {index === currentSlide && isAutoPlaying && (
                        <motion.div
                          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#DA6040] to-[#eb5633] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 5, ease: "linear" }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};