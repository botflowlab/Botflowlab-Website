import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-3xl border border-white/100 bg-black/100 p-8 backdrop-blur-sm
        hover:bg-white/10 transition-all duration-300 z-[50]"
    >
      <div className="flex flex-col gap-6">
        {/* Icon */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 w-fit">
          <Icon className="h-6 w-6 text-[#DA6040]" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold tracking-tight text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/70 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};