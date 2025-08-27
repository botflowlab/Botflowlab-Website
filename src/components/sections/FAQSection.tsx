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
      answer: "Ofrecemos garantía de satisfacción de 30 días. Si no estás completamente satisfecho con los resultados, te devolvemos tu dinero. Además, nuestros clientes típicamente recuperan su inversión en los primeros 2-3 meses a través del incremento en leads y ventas."
    },
    {
      question: "¿Cuánto de mi tiempo va a requerir esto?",
      answer: "Mínimo. Solo necesitamos 2-3 horas de tu tiempo total: una sesión inicial de 1 hora para entender tu negocio, 30 minutos para revisar el diseño, y 30 minutos para la capacitación final. Nosotros nos encargamos de todo el trabajo técnico mientras tú te enfocas en tu negocio."
    },
    {
      question: "¿Necesito aprender algo técnico?",
      answer: "Para nada. Diseñamos todo para que sea súper fácil de usar. Te damos una capacitación de 30 minutos sobre cómo actualizar contenido básico, pero el sistema es tan intuitivo que cualquiera puede usarlo. Para todo lo técnico, nosotros nos encargamos completamente."
    },
    {
      question: "¿Qué pasa si esto no funciona para mi tipo de negocio?",
      answer: "Hemos trabajado exitosamente con más de 50 tipos de negocios diferentes. Antes de empezar, hacemos un análisis completo de tu industria y competencia para asegurar que nuestra estrategia funcione específicamente para tu sector. Si por alguna razón no vemos resultados, aplicamos nuestra garantía de devolución."
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