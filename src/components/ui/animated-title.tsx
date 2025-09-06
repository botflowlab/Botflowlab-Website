import { motion } from "framer-motion";

interface AnimatedTitleProps {
  title: string;
  className?: string;
}

export function AnimatedTitle({ title, className = "" }: AnimatedTitleProps) {
  const lines = title.split(" | ");

  const titleVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-16 ${className}`}>
      <motion.h1 
        className="text-6xl sm:text-7xl md:text-[7.5rem] font-extrabold tracking-tight text-center leading-none"
        style={{ 
          fontFamily: 'Kumbh Sans, sans-serif',
          letterSpacing: '-0.04em'
        }}
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="relative inline-block text-white transition-all duration-300 hover:opacity-90"
          variants={lineVariants}
        >
          {lines[0]}
        </motion.span>
      </motion.h1>

      {lines[1] && (
        <motion.div 
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center"
          style={{ 
            fontFamily: 'Kumbh Sans, sans-serif',
            letterSpacing: '-0.02em'
          }}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="text-[#da6040] transition-all duration-300 hover:opacity-90">
            {lines[1]}
          </span>
        </motion.div>
      )}
    </div>
  );
}