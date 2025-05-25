import React from 'react';
import '../../index.css';

interface Card3DProps {
  imgSrc?: string;
  width?: number;
  height?: number;
  overlayImageUrl?: string;
}

const Card3D: React.FC<Card3DProps> = ({ imgSrc, width = 800, height = 400, overlayImageUrl }) => {
  return (
    <div className="perspective-1000 flex justify-center items-center group">
      {/* Card container with the outer white border using box-shadow */}
      <div
        className="card3d bg-black/5 backdrop-blur-sm relative overflow-hidden rounded-xl z-0"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          boxShadow: '0 0 0 2px white', // This creates the white border on the outside
        }}
      >
        {/* Main image */}
        {imgSrc && (
          <img
            src={imgSrc}
            alt="Case study"
            className="w-full h-full object-cover rounded-xl"
          />
        )}
      </div>

      {/* Always visible overlay image with hover animation (upwards) */}
      {overlayImageUrl && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="w-full h-full opacity-100 translate-y-0 group-hover:-translate-y-6 group-hover:opacity-100 transition-all duration-300">
            <img
              src={overlayImageUrl}
              alt="Overlay"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card3D;
export { Card3D };