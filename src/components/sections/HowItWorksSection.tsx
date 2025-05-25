import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Database, LineChart, Rocket } from 'lucide-react';
import { AnimatedServiceButton } from '../ui/AnimatedServiceButton';
import { IntroSeparatorSection } from './IntroSeparatorSection';

export const HowItWorksSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const steps = [
    {
      step: "PASO 1",
      title: "Desarrollo del sitio web",
      description: "Creamos tu página con estructura clara, rápida y pensada para convertir. El sitio está diseñado con tus clientes en mente, dándoles una experiencia intuitiva y sin esfuerzo.",
      icon: <Monitor className="w-12 h-12 text-[#DA6040]" />
    },
    {
      step: "PASO 2",
      title: "Automatizaciones + CRM",
      description: "Conectamos un CRM para que no pierdas ningún lead. Tendrás automatizaciones listas para dar seguimiento, enviar correos, recibir pagos y agendar citas online.",
      icon: <Database className="w-12 h-12 text-[#DA6040]" />
    },
    {
      step: "PASO 3",
      title: "Captura y seguimiento de leads",
      description: "El sistema integrado no solo recopila datos, también los activa. Cada lead que entra desde formularios o suscripciones se guarda automáticamente y comienza una secuencia de seguimiento automatizado. No se trata solo de capturar, sino de mantener el contacto, aportar valor y avanzar la conversación.",
      icon: <LineChart className="w-12 h-12 text-[#DA6040]" />
    },
    {
      step: "PASO 4",
      title: "Lanzamiento y mejora continua",
      description: "No paramos en la publicación del sitio. Una vez publicado, seguimos monitoreando cómo navegan tus usuarios para detectar qué funciona y qué se puede optimizar. Usamos datos reales para mantener el rendimiento en su punto más alto.",
      icon: <Rocket className="w-12 h-12 text-[#DA6040]" />
    }
  ];

  return (
    <div id='process' className="min-h-screen relative overflow-hidden">
      <IntroSeparatorSection isVisible={isVisible} />
      {/* Background with gradient transition */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-[1]" />

      <div className="relative flex items-center justify-center py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 max-w-xl mx-auto"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Kumbh Sans' }}>
              Nuestro Proceso
            </h2>
            <p className="text-xl text-white/70 max-w-xl">
              Así es como trabajamos, punto por punto. Rápido y claro.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="relative z-50 grid md:grid-cols-2 gap-6 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-[32px] p-8 min-h-[500px] flex flex-col overflow-auto"
              >
                {/* Step Label */}
                <div className="text-[#0c0c0c] text-sm font-bold mb-4">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="mb-6 flex-shrink-0">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-[#0c0c0c] text-2xl md:text-3xl font-bold mb-6 flex-shrink-0">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#0E0A1F]/70 text-lg md:text-2xl leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};