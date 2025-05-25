import React, { createContext, useContext, useState } from 'react';

interface TransitionContextType {
  isTransitioning: boolean;
  startTransition: () => Promise<void>;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = async () => {
    setIsTransitioning(true);
    // Wait for the full animation sequence to complete
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsTransitioning(false);
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
};