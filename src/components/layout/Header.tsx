import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TrackingButton } from '../ui/TrackingButton';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

   const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className="fixed w-full top-0 z-50 bg-transparent pointer-events-none">
      <nav className="w-full px-5 py-6 flex items-center justify-between pointer-events-auto">
        {/* Zona izquierda - Logo */}
        <motion.div 
          className="flex items-center space-x-2 cursor-pointer transition-opacity duration-200 pointer-events-auto"
          onClick={handleLogoClick}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          <img 
            src="https://i.postimg.cc/hG8hWRsX/botflowlab-LOGO.png" 
            alt="botflowlab" 
            className="h-10 w-auto"
          />
          <span className="text-xl font-sans font-medium logo-font text-white mix-blend-difference transition-all duration-300 group-hover:tracking-widest">
            BOTFLOWLAB
          </span>
        </motion.div>

        {/* Zona centro - Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <button onClick={() => scrollToSection('services')} className="text-white text-sm font-medium hover:tracking-wide transition-all mix-blend-difference">
            Servicios
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="text-white text-sm font-medium hover:tracking-wide transition-all mix-blend-difference">
            Proyectos
          </button>
        </div>
         <div className="pointer-events-auto hidden md:flex">
            <TrackingButton />
          </div>
      </nav>
    </header>
  );
};