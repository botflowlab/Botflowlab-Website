import React from 'react';

interface VimeoBackgroundVideoProps {
  videoId: string;
  className?: string;
}

export const VimeoBackgroundVideo: React.FC<VimeoBackgroundVideoProps> = ({ 
  videoId, 
  className = "" 
}) => {
  const vimeoUrl = `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&controls=0`;

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      <iframe
        src={vimeoUrl}
        className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 scale-100"
        style={{
          width: '100vw',
          height: '56.25vw', // 16:9 aspect ratio
          minHeight: '100vh',
          minWidth: '177.78vh', // 16:9 aspect ratio
        }}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Background Video"
      />
    </div>
  );
};