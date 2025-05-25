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
        duration: 0.2,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
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
        {lines[0].split(" ").map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            className="relative inline-block mr-4 last:mr-0"
            variants={wordVariants}
          >
            <span className="text-white transition-all duration-300 hover:opacity-90">
              {word}
            </span>
          </motion.span>
        ))}
      </motion.h1>

      {lines[1] && (
        <motion.div 
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center"
          style={{ 
            fontFamily: 'Kumbh Sans, sans-serif',
            letterSpacing: '-0.02em'
          }}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <span className="text-[#da6040] transition-all duration-300 hover:opacity-90">
            {lines[1]}
          </span>
        </motion.div>
      )}
    </div>
  );
}