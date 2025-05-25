import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Building2, Send, Calendar } from 'lucide-react';
import { ContactFormInput } from './contact/ContactFormInput';
import { ContactFormStatus } from './contact/ContactFormStatus';
import { useContactForm } from '../hooks/useContactForm';
import { FlightSeparator } from './ui/FlightSeparator';
import { Footer } from './Footer';

export const ContactForm: React.FC = () => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    errorMessage,
    handleSubmit,
    handleChange
  } = useContactForm();

  return (
    <div className="bg-black">
      {/* Contact Form Section */}
      <div className="min-h-screen pt-24 flex items-center justify-center px-4 bg-black">
        <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="bg-black backdrop-blur-lg rounded-3xl p-8 border border-white/15">
              {/* Call Scheduling Section */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">AGENDA UNA LLAMADA</h2>
                <p className="text-white/70 mb-6">Conversemos sobre tu proyecto en una videollamada de 30 minutos</p>
                <a 
                  href="https://calendly.com/botflowlab/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#DA6040] text-white py-4 px-8 rounded-lg font-semibold hover:bg-[#DA6040]/90 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Agendar Llamada
                </a>
              </div>

              <FlightSeparator text="O POR EL CONTRARIO" />

              {/* Contact Form */}
              <div>
                <h2 className="text-4xl font-bold mb-2 text-center">FORMULARIO DE CONTACTO</h2>
                <p className="text-white/70 mb-8 text-center">Rellena el formulario y nos contactaremos en breve.</p>
                
                <ContactFormStatus status={submitStatus} errorMessage={errorMessage} />

                <form onSubmit={handleSubmit} className="space-y-6">
                  <ContactFormInput
                    type="text"
                    name="name"
                    placeholder="Tu Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    Icon={User}
                    required
                    disabled={isSubmitting}
                  />

                  <ContactFormInput
                    type="email"
                    name="email"
                    placeholder="Tu Mejor E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    Icon={Mail}
                    required
                    disabled={isSubmitting}
                  />

                  <ContactFormInput
                    type="tel"
                    name="phone"
                    placeholder="Teléfono (opcional)"
                    value={formData.phone}
                    onChange={handleChange}
                    Icon={Phone}
                    disabled={isSubmitting}
                  />

                  <ContactFormInput
                    type="text"
                    name="company"
                    placeholder="Nombre del Negocio"
                    value={formData.company}
                    onChange={handleChange}
                    Icon={Building2}
                    required
                    disabled={isSubmitting}
                  />

                  <textarea
                    name="description"
                    placeholder="Corta descripción de tu proyecto (opcional)"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-black border border-white/30 rounded-lg py-3 px-4 text-white placeholder:text-white/40
                      focus:outline-none focus:border-[#DA6040] transition-colors"
                    disabled={isSubmitting}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#DA6040] text-white py-4 rounded-lg font-semibold hover:bg-[#DA6040]/90
                      transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex justify-center items-center"
          >
            <motion.img
              src="https://i.postimg.cc/hG8hWRsX/botflowlab-LOGO.png"
              alt="Botflowlab Logo"
              className="w-96 h-auto"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Footer with spacing */}
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};
