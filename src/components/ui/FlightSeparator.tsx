import React from 'react';
import '../../index.css';

interface FlightSeparatorProps {
  text?: string;
}

export const FlightSeparator: React.FC<FlightSeparatorProps> = ({
  text = 'O POR EL CONTRARIO',
}) => {
  return (
    <div className="flex items-center justify-center gap-4 my-12">
      {/* Línea izquierda */}
      <div className="w-1/5 h-[2px] flight-line rounded-full opacity-60" />

      {/* Texto */}
      <span className="text-white/60 tracking-widest font-mono text-sm md:text-base border border-white/30 px-4 py-1 rounded-full">
        {text}
      </span>

      {/* Línea derecha */}
      <div className="w-1/5 h-[2px] flight-line rounded-full opacity-60" />
    </div>
  );
};