import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTransition } from '../context/TransitionContext';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { startTransition } = useTransition();

  const handleNavigation = async (path: string) => {
    await startTransition();
    navigate(path);
    
    // If navigating to a section on the home page, scroll to it after a brief delay
    if (path === '/') {
      setTimeout(() => {
        const element = document.querySelector(path.replace('/', '#'));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="bg-black text-white px-8 md:px-24 py-16 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Address */}
          <div className="text-white/70">
            <h5 className="text-lg font-semibold mb-3 text-white"></h5>
            <p><br /><br /></p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 text-white/70">
            <div>
              <h6 className="font-semibold mb-2 text-white">Explorar</h6>
              <ul className="space-y-1">
                <li>
                  <button 
                    onClick={() => scrollToSection('hero')} 
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('process')} 
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Proceso
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Servicios
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('portfolio')} 
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Portafolio
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-2 text-white">Links</h6>
              <ul className="space-y-1">
                <li>
                  <button 
                    onClick={() => handleNavigation('/contactform')} 
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 text-sm text-white/70 text-center border-t border-white/10 pt-6">
          © {new Date().getFullYear()} Botflowlab. Todos los derechos reservados.
        </div>
      </motion.footer>

      {/* Footer Image */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none -z-5">
        <img 
          src="https://i.postimg.cc/LXVT9D7b/rock-podium-brown-stone-stand-display-product-sho-2025-02-27-03-31-45-utc-Photoroom.png" 
          alt="Footer decoration" 
          className="w-full h-auto object-cover opacity-25"
        />
      </div>
    </div>
  );
};