import React from 'react';

export const MagmaGlow: React.FC = () => {
  return (
    <div className="magma-glow-wrapper">
      <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="magma-svg">
        <defs>
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff7b00" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ff00f5" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path
          d="M0,80 C150,200 350,0 500,80 L500,150 L0,150 Z"
          fill="url(#glowGradient)"
          className="magma-path"
        />
      </svg>
    </div>
  );
};