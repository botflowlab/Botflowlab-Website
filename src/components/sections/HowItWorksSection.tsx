import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Monitor, Database, LineChart, Rocket, ChevronDown, ChevronUp } from 'lucide-react';
import { IntroSeparatorSection } from './IntroSeparatorSection';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

export const HowItWorksSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps: ProcessStep[] = [
    {
      step: "PASO 1",
      title: "Desarrollo del sitio web",
      description: "Creamos tu página con estructura clara, rápida y pensada para convertir. El sitio está diseñado con tus clientes en mente, dándoles una experiencia intuitiva y sin esfuerzo.",
      icon: <Monitor className="w-8 h-8" />,
      color: "#3B82F6",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      step: "PASO 2", 
      title: "Automatizaciones + CRM",
      description: "Conectamos un CRM para que no pierdas ningún lead. Tendrás automatizaciones listas para dar seguimiento, enviar correos, recibir pagos y agendar citas online.",
      icon: <Database className="w-8 h-8" />,
      color: "#10B981",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      step: "PASO 3",
      title: "Captura y seguimiento de leads",
      description: "El sistema integrado no solo recopila datos, también los activa. Cada lead que entra desde formularios o suscripciones se guarda automáticamente y comienza una secuencia de seguimiento automatizado. No se trata solo de capturar, sino de mantener el contacto, aportar valor y avanzar la conversación.",
      icon: <LineChart className="w-8 h-8" />,
      color: "#8B5CF6",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      step: "PASO 4",
      title: "Lanzamiento y mejora continua",
      description: "No paramos en la publicación del sitio. Una vez publicado, seguimos monitoreando cómo navegan tus usuarios para detectar qué funciona y qué se puede optimizar. Usamos datos reales para mantener el rendimiento en su punto más alto.",
      icon: <Rocket className="w-8 h-8" />,
      color: "#F59E0B",
      gradient: "from-amber-500 to-amber-600"
    }
  ];

  // Scroll-based timeline progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  // Transform scroll progress to timeline progress
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Update active step based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const stepIndex = Math.floor(latest * steps.length);
      const clampedIndex = Math.min(Math.max(stepIndex, 0), steps.length - 1);
      setActiveStep(clampedIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress, steps.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setExpandedStep(expandedStep === index ? null : index);
  };

  const toggleExpanded = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <div id='process' className="min-h-screen relative overflow-hidden" ref={sectionRef}>
      <IntroSeparatorSection isVisible={isVisible} />
      
      {/* Background with gradient transition */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-[1]" />

      <div className="relative flex items-center justify-center py-20">
        <div className="max-w-[1600px] mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 max-w-xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: 'Kumbh Sans' }}>
              Nuestro Proceso
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-xl">
              Así es como trabajamos, punto por punto. Rápido y claro.
            </p>
          </motion.div>

          {/* Desktop Timeline View */}
          <div className="hidden lg:block relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/10 transform -translate-x-1/2">
              {/* Progress Line - follows scroll */}
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#DA6040] to-[#eb5633] rounded-full"
                style={{ 
                  height: useTransform(timelineProgress, [0, 100], ["0%", "100%"])
                }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
              />
            </div>

            {/* Timeline Steps */}
            <div className="space-y-32">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content Card - Made bigger */}
                  <div className="w-12">
                    <motion.div
                      onClick={() => handleStepClick(index)}
                      className={`cursor-pointer bg-white/5 backdrop-blur-sm border rounded-3xl p-10 min-h-[320px] transition-all duration-500 hover:bg-white/10 ${
                        activeStep >= index 
                          ? 'border-white/30 bg-white/10 scale-105' 
                          : 'border-white/10 hover:border-white/20'
                      }`}
                      whileHover={{ scale: activeStep >= index ? 1.05 : 1.02 }}
                    >
                      {/* Step Label */}
                      <div className="text-white/60 text-sm font-bold mb-4 tracking-wider">
                        {step.step}
                      </div>

                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center mb-6 transition-transform duration-300 ${
                        activeStep >= index ? 'scale-110' : ''
                      }`}>
                        <div className="text-white">
                          {step.icon}
                        </div>
                      </div>

                      {/* Title - Better spacing and wrapping */}
                      <h3 className="text-white text-xl md:text-2xl xl:text-3xl font-bold mb-6 leading-tight break-words">
                        {step.title}
                      </h3>

                      {/* Expand Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpanded(index);
                        }}
                        className="flex items-center gap-2 text-[#DA6040] hover:text-[#eb5633] transition-all duration-300 text-sm font-medium hover:gap-3"
                      >
                        {expandedStep === index ? 'Ver menos' : 'Ver más'}
                        <motion.div
                          animate={{ rotate: expandedStep === index ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>

                      {/* Expanded Description - Smoother animation */}
                      <AnimatePresence>
                        {expandedStep === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ 
                              opacity: 1, 
                              height: 'auto', 
                              marginTop: 16,
                              transition: {
                                height: { duration: 0.4, ease: "easeInOut" },
                                opacity: { duration: 0.3, delay: 0.1 },
                                marginTop: { duration: 0.4, ease: "easeInOut" }
                              }
                            }}
                            exit={{ 
                              opacity: 0, 
                              height: 0, 
                              marginTop: 0,
                              transition: {
                                opacity: { duration: 0.2 },
                                height: { duration: 0.3, delay: 0.1, ease: "easeInOut" },
                                marginTop: { duration: 0.3, delay: 0.1, ease: "easeInOut" }
                              }
                            }}
                            className="pt-4 border-t border-white/10 overflow-hidden"
                          >
                            <motion.p 
                              initial={{ y: 10 }}
                              animate={{ y: 0 }}
                              exit={{ y: -10 }}
                              transition={{ duration: 0.3 }}
                              className="text-white/80 leading-relaxed text-base"
                            >
                              {step.description}
                            </motion.p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      className={`w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                        activeStep >= index 
                          ? 'bg-[#DA6040] border-[#DA6040] scale-125' 
                          : 'bg-black border-white/30'
                      }`}
                      animate={{
                        scale: activeStep === index ? 1.5 : activeStep > index ? 1.25 : 1,
                        boxShadow: activeStep === index ? `0 0 20px ${step.color}` : 'none'
                      }}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet View */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Mobile Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#DA6040] to-[#eb5633] rounded-full"
                  style={{ 
                    height: useTransform(timelineProgress, [0, 100], ["0%", "100%"])
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 30 }}
                />
              </div>

              {/* Mobile Steps */}
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Timeline Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                          activeStep >= index 
                            ? 'bg-[#DA6040] border-[#DA6040]' 
                            : 'bg-black border-white/30'
                        }`}
                        animate={{
                          scale: activeStep === index ? 1.5 : 1,
                          boxShadow: activeStep === index ? `0 0 15px ${step.color}` : 'none'
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <motion.div
                        onClick={() => handleStepClick(index)}
                        className={`cursor-pointer bg-white/5 backdrop-blur-sm border rounded-2xl p-6 min-h-[200px] transition-all duration-500 hover:bg-white/10 ${
                          activeStep >= index 
                            ? 'border-white/30 bg-white/10' 
                            : 'border-white/10 hover:border-white/20'
                        }`}
                      >
                        {/* Step Label */}
                        <div className="text-white/60 text-xs font-bold mb-3 tracking-wider">
                          {step.step}
                        </div>

                        {/* Icon and Title */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center flex-shrink-0`}>
                            <div className="text-white text-sm">
                              {step.icon}
                            </div>
                          </div>
                          <h3 className="text-white text-lg md:text-xl font-bold flex-1 leading-tight break-words">
                            {step.title}
                          </h3>
                        </div>

                        {/* Expand Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpanded(index);
                          }}
                          className="flex items-center gap-2 text-[#DA6040] hover:text-[#eb5633] transition-all duration-300 text-sm font-medium hover:gap-3"
                        >
                          {expandedStep === index ? 'Ver menos' : 'Ver más'}
                          <motion.div
                            animate={{ rotate: expandedStep === index ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>

                        {/* Expanded Description - Smoother animation */}
                        <AnimatePresence>
                          {expandedStep === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ 
                                opacity: 1, 
                                height: 'auto', 
                                marginTop: 16,
                                transition: {
                                  height: { duration: 0.4, ease: "easeInOut" },
                                  opacity: { duration: 0.3, delay: 0.1 },
                                  marginTop: { duration: 0.4, ease: "easeInOut" }
                                }
                              }}
                              exit={{ 
                                opacity: 0, 
                                height: 0, 
                                marginTop: 0,
                                transition: {
                                  opacity: { duration: 0.2 },
                                  height: { duration: 0.3, delay: 0.1, ease: "easeInOut" },
                                  marginTop: { duration: 0.3, delay: 0.1, ease: "easeInOut" }
                                }
                              }}
                              className="pt-4 border-t border-white/10 overflow-hidden"
                            >
                              <motion.p 
                                initial={{ y: 10 }}
                                animate={{ y: 0 }}
                                exit={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="text-white/80 leading-relaxed text-sm"
                              >
                                {step.description}
                              </motion.p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};