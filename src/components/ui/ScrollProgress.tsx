import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 1,
  });

  const angle = useTransform(smoothProgress, [0, 1], [0, 360]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.min(Math.max((scrollTop / scrollHeight) * 100, 0), 100);
      setScrollPercent(Math.round(percent));

      // Only show the scroll progress if the user has scrolled down a little
      if (scrollTop > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ x: 100, opacity: 0 }} // Start off-screen and invisible
      animate={{
        x: isVisible ? 0 : 100, // Slide in when visible, slide out when hidden
        opacity: isVisible ? 1 : 0, // Fade in when visible, fade out when hidden
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="relative w-24 h-24 rounded-full border border-white/10 bg-black/30 backdrop-blur-md flex items-center justify-center">
        {/* Dot that moves along the circle */}
        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{
            rotate: angle,
          }}
        >
          <div
            style={{
              translateX: '-50%',
              translateY: '-50%',
              transform: 'translate(-50%, -50%) translateY(-40px)', // Moves the dot along the vertical axis of the circle
            }}
          >
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
          </div>
        </motion.div>

        {/* Static, upright percentage */}
        <span className="text-white font-semibold text-lg z-10">{scrollPercent}%</span>
      </div>
    </motion.div>
  );
};

export default ScrollProgress;
