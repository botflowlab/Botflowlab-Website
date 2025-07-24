import React from 'react';

interface VimeoBackgroundVideoProps {
  videoId: string;
  className?: string;
  title?: string;
  subtitle?: string;
  year?: string;
}

export const VimeoBackgroundVideo: React.FC<VimeoBackgroundVideoProps> = ({ 
  videoId, 
  className = "",
  title,
  subtitle,
  year
}) => {
  const vimeoUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&controls=0`;

  return (
    <div className={className}>
      <div className="relative w-full h-[400px] overflow-hidden rounded-xl border-2 border-white shadow-2xl">
        <iframe
          src={vimeoUrl}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Success Case Video"
        />
      </div>
      
      {(title || subtitle || year) && (
        <div className="flex justify-between items-center mt-4">
          <div>
            {title && <h3 className="text-xl font-bold text-left">{title}</h3>}
            {subtitle && <p className="text-left text-gray-500 mt-2">{subtitle}</p>}
          </div>
          {year && <p className="text-right text-gray-500">{year}</p>}
        </div>
      )}
    </div>
  );
};