import React from 'react';
import { motion } from 'framer-motion';
import { Card3D } from '../../ui/Card3D';
import { VimeoBackgroundVideo } from '../../ui/VimeoBackgroundVideo';
import { VIMEO_VIDEOS } from '../../../config/videos';

interface SuccessCasesGridProps {
  isVisible: boolean;
}

const successCases = [
  {
    id: 1,
    image: 'https://i.postimg.cc/05S8kKh4/Disen-o-sin-ti-tulo-6.png',
    overlay: 'https://i.postimg.cc/fLrhzDvD/carrusel55-1-Photoroom.png',
    title: 'ALEX Y REBE',
    subtitle: 'Desarrollo y Diseño web / CRM',
    year: '2024',
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/fTycPQBm/Mariano-Trejo-Fondo.png',
    overlay: 'https://i.postimg.cc/65PrJbmS/Mariano01.webp',
    title: 'MARIANO TREJO',
    subtitle: 'Edición de video - YouTube',
    year: '2024-2025',
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/8ztQDY7x/Xnip2025-06-23-21-22-08.jpg',
    overlay: '',
    title: 'ANDRÉS CASTRO ARQUITECTURA',
    subtitle: 'Desarrollo y Diseño web / Base de datos',
    year: '2025',
  },
  {
    id: 4,
    type: 'video',
    videoId: VIMEO_VIDEOS.successCases.id,
    title: 'PRISMA GALLERY',
    subtitle: 'Landing Page / Poryecto de muestra',
    year: '2025',
  },
  
];

export const SuccessCasesGrid: React.FC<SuccessCasesGridProps> = ({ isVisible }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 mt-16">
      {successCases.map((successCase, index) => (
        <motion.div
          key={successCase.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        >
          {successCase.type === 'video' ? (
            <VimeoBackgroundVideo
              videoId={successCase.videoId}
              title={successCase.title}
              subtitle={successCase.subtitle}
              year={successCase.year}
            />
          ) : (
            <>
              <Card3D
                imgSrc={successCase.image}
                overlayImageUrl={successCase.overlay}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-xl font-bold text-left">{successCase.title}</h3>
                  <p className="text-left text-gray-500 mt-2">{successCase.subtitle}</p>
                </div>
                <p className="text-right text-gray-500">{successCase.year}</p>
              </div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
};