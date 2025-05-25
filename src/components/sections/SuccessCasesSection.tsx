import React from 'react';
import { motion } from 'framer-motion';
import { SuccessCasesHeader } from './success-cases/SuccessCasesHeader';
import { SuccessCasesGrid } from './success-cases/SuccessCasesGrid';

export const SuccessCasesSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div id="portfolio" className="relative min-h-screen bg-black overflow-hidden py-32">
      <div className="max-w-[1400px] mx-auto px-6 relative">
        <SuccessCasesHeader isVisible={isVisible} />
        <SuccessCasesGrid isVisible={isVisible} />
      </div>
    </div>
  );
};