import React from 'react';
import { motion } from 'framer-motion';
import { SuccessCasesHeader } from './success-cases/SuccessCasesHeader';
import { SuccessCasesGrid } from './success-cases/SuccessCasesGrid';
import { VimeoBackgroundVideo } from '../ui/VimeoBackgroundVideo';
import { VIMEO_VIDEOS } from '../../config/videos';

export const SuccessCasesSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div id="portfolio" className="relative bg-black overflow-hidden py-32">
      {/* Background Video */}
      <VimeoBackgroundVideo 
        videoId={VIMEO_VIDEOS.successCases.id}
        className="z-0"
      />
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-20">
        <SuccessCasesHeader isVisible={isVisible} />
        <SuccessCasesGrid isVisible={isVisible} />
      </div>
    </div>
  );
};