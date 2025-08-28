import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  isVisible: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ isVisible }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "¿Pueden mostrarme ejemplos de otros negocios como el mío que hayan ayudado?",
      answer: "Por supuesto. Puedes verlos arriba de esta sección en los casos de éxito"
    },
    {
      question: "¿Qué exactamente van a hacer por mi negocio?",
      answer: "Te haremos un sitio web que convierte, atraeremos visitantes y nos aseguraremos de que quien te escriba tenga la intención de comprar"
    },
    {
      question: "¿Cuánto tiempo toma empezar a ver resultados?",
      answer: "La prueba de pago está hecha para darte resultados suficientes para que tomes una decisión informada entre si quieres continuar después de los primeros 30 días"
    },
    {
      question: "¿Cómo sé que recuperaré mi inversión si no funciona?",
      answer: "No estamos muy interesados en meternos en problemas legales y ser bloqueados por el banco. Así que si quieres tu dinero de vuelta, solo mándanos un mensaje"
    },
    {
      question: "¿Cuánto de mi tiempo va a requerir esto?",
      answer: "Casi nada. Solo tienes que hacer lo que haces mejor: vender tu producto o servicio"
    },
    {
      question: "¿Necesito aprender algo técnico?",
      answer: "No, no tienes que hacer absolutamente NADA técnico."
    },
    {
      question: "¿Qué pasa si esto no funciona para mi tipo de negocio?",
      answer: "Antes de comenzar nos aseguramos de saber que podemos ayudarte. Tenemos 0 interés en hacer reembolsos y darnos una mala imagen"
    },
    {
      question: "¿Qué pasa si quiero cancelar?",
      answer: "Antes de comenzar nos aseguramos de saber que podemos ayudarte. Tenemos 0 interés en hacer reembolsos y darnos una mala imagen"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-black overflow-hidden py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Small label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg mb-6 font-light tracking-wide"
          >
            FAQ
          </motion.p>

          {/* Main title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight"
            style={{ fontFamily: 'Kumbh Sans' }}
          >
            <span className="text-white block mb-2">Preguntas</span>
            <span className="text-white block mb-2">Frecuentes</span>
          </motion.h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/5 transition-colors duration-300 rounded-2xl"
              >
                <h3 className="text-lg md:text-xl text-white font-medium pr-4 leading-relaxed">
                  {faq.question}
                </h3>
                
                {/* Toggle Icon */}
                <div className="flex-shrink-0 w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform duration-300">
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Plus className="w-5 h-5 text-black" />
                  </motion.div>
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: 'auto',
                      transition: {
                        height: { duration: 0.4, ease: "easeInOut" },
                        opacity: { duration: 0.3, delay: 0.1 }
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0,
                      transition: {
                        opacity: { duration: 0.2 },
                        height: { duration: 0.3, delay: 0.1, ease: "easeInOut" }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <div className="border-t border-white/10 pt-6">
                        <p className="text-white/80 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};