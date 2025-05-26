import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TrackingButton } from '../ui/TrackingButton';
import { useState } from 'react';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show header at the top of the page
    if (latest < 50) {
      setHidden(false);
      return;
    }

    // Hide when scrolling down, show when scrolling up
    const direction = latest > lastScrollY ? "down" : "up";
    if (direction === "down" && !hidden) setHidden(true);
    if (direction === "up" && hidden) setHidden(false);
    
    setLastScrollY(latest);
  });

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
    <motion.header 
      className="fixed w-full top-0 z-50 bg-black/30 backdrop-blur-sm"
      initial={false}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <nav className="w-full px-5 py-6 flex items-center justify-between">
        {/* Logo zone */}
        <motion.div 
          className="flex items-center space-x-2 cursor-pointer transition-opacity duration-200"
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

        {/* Center zone - Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-white text-sm font-medium hover:tracking-wide transition-all mix-blend-difference"
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className="text-white text-sm font-medium hover:tracking-wide transition-all mix-blend-difference"
          >
            Proyectos
          </button>
        </div>

        {/* Right zone - CTA Button */}
        <div className="hidden md:flex">
          <TrackingButton />
        </div>
      </nav>
    </motion.header>
  );
};