import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, BarChart as ChartBar, Clock, Briefcase } from 'lucide-react';
import { UserCheck, Award } from 'lucide-react';
import { IntroSeparatorSection } from './IntroSeparatorSection';

interface WhyWebsiteCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyWebsiteCard: React.FC<WhyWebsiteCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative bg-black backdrop-blur-sm border border-white/100 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
      <div className="relative z-10 flex flex-col gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#DA6040]/10 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-2xl font-extrabold">{title}</h3>
        <p className="font-medium text-white/100 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export const WhyWebsiteSection: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const reasons = [
    {
      icon: <Globe className="w-6 h-6 text-[#DA6040]" />,
      title: "Aparece donde te buscan",
      description: "Un negocio con sitio web aparece en búsquedas locales de Google, que representan el 46% de todas las búsquedas (Google). Y el 81% de los consumidores investiga online antes de hacer una compra (Retailing Today)."
    },
    {
      icon: <ChartBar className="w-6 h-6 text-[#DA6040]" />,
      title: "Doble de ingresos",
      description: "Las empresas con sitio web generan en promedio más del doble de ingresos que las que no tienen presencia online (Clutch). Y las pequeñas empresas con una web optimizada para ventas pueden incrementar sus conversiones hasta en un 30%."
    },
    {
      icon: <Users className="w-6 h-6 text-[#DA6040]" />,
      title: "40% más de oportunidades",
      description: "Una web permite generar leads y ventas incluso fuera del horario comercial. Esto puede representar hasta un 40% más de oportunidades respecto a negocios que solo dependen de redes sociales o contacto directo (HubSpot)."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#DA6040]" />,
      title: "Imagen profesional y creíble",
      description: "El 84% de los consumidores cree que una empresa con sitio web es más creíble que una sin web (Verisign). Y un sitio web bien diseñado puede aumentar la percepción de profesionalismo en hasta un 75% (Stanford University)."
    }
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <IntroSeparatorSection isVisible={isVisible} />
      
      <div className="relative z-10 flex items-center justify-center py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Kumbh Sans' }}>
              ¿Por qué tener una página web?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Solo mira estos datos...
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <WhyWebsiteCard {...reason} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};