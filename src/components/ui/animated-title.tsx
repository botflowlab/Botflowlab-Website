import { motion } from "framer-motion";

interface AnimatedTitleProps {
  title: string;
  className?: string;
}

export function AnimatedTitle({ title, className = "" }: AnimatedTitleProps) {
  // Split title into words for individual animation
  const words = title.split(" ");

  const titleVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-center leading-tight max-w-5xl"
        style={{ 
          fontFamily: 'Kumbh Sans, sans-serif',
          letterSpacing: '-0.02em'
        }}
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block text-white mr-4"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}