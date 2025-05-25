import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from '../../ui/ServiceCard';
import { services } from '../../../data/services';

interface ServicesGridProps {
  isVisible: boolean;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ isVisible }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 pt-64">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        >
          <ServiceCard
            Icon={service.Icon}
            title={service.title}
            description={service.description}
          />
        </motion.div>
      ))}
    </div>
  );
};