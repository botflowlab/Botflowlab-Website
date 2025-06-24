import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Monitor, Database, LineChart, Rocket } from 'lucide-react';
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
  const [activeStep, setActiveStep] = useState<number | null>(null);
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

 const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(() => {});
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div id='process' className="min-h-screen relative overflow-hidden" ref={sectionRef}>
      <IntroSeparatorSection isVisible={isVisible} />
      <div className="absolute inset-0 bg-black" />
      <div className="relative flex items-center justify-center py-20">
        <div className="max-w-[1600px] mx-auto px-6">
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

          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/10 transform -translate-x-1/2">
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#DA6040] to-[#eb5633] rounded-full"
                style={{ height: useTransform(timelineProgress, [0, 100], ["0%", "100%"]), }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
              />
            </div>
            <div className="space-y-32">
              {steps.map((step, index) => {
                const isOpen = activeStep === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className={`relative flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="w-[45%] px-4">
                      <motion.div
                        onClick={() => setActiveStep(index)}
                        className={`w-full cursor-pointer bg-white/5 backdrop-blur-sm border rounded-3xl p-12 transition-all duration-500 hover:bg-white/10 ${
                          activeStep >= index ? 'border-white/30 bg-white/10 scale-105' : 'border-white/10 hover:border-white/20'
                        }`}
                        whileHover={{ scale: activeStep >= index ? 1.05 : 1.02 }}
                      >
                        <div className="text-white/60 text-sm font-bold mb-4 tracking-wider">
                          {step.step}
                        </div>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} flex items-center justify-center mb-6 transition-transform duration-300 ${activeStep >= index ? 'scale-110' : ''}`}>
                          <div className="text-white">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-white text-2xl xl:text-3xl font-bold mb-2 leading-tight whitespace-nowrap">
                          {step.title}
                        </h3>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveStep(isOpen ? null : index);
                          }}
                          className="text-sm text-white/60 hover:text-white transition mb-4 underline"
                        >
                          {isOpen ? 'Ver menos' : 'Ver más'}
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden border-t border-white/10 pt-4"
                        >
                          <p className="text-white/80 leading-relaxed text-base">
                            {step.description}
                          </p>
                        </motion.div>
                      </motion.div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10 top-16">
                      <motion.div
                        className={`w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                          activeStep >= index ? 'bg-[#DA6040] border-[#DA6040] scale-125' : 'bg-black border-white/30'
                        }`}
                        animate={{
                          scale: activeStep === index ? 1.5 : activeStep > index ? 1.25 : 1,
                          boxShadow: activeStep === index ? `0 0 20px ${step.color}` : 'none'
                        }}
                      />
                    </div>
                    <div className="w-[45%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
