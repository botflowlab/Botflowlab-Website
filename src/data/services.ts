import { DivideIcon as LucideIcon, Code, Palette, Workflow, LayoutTemplate, RefreshCcw, Cuboid as Cube, AppWindow, Briefcase } from 'lucide-react';

export interface Service {
  id: string;
  Icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'web',
    Icon: LayoutTemplate,
    title: 'DESARROLLO Y DISEÑO WEB',
    description: 'Desde diseños creativos a soluciones centradas en el usuario.'
  },
  {
    id: 'ia',
    Icon: Workflow,
    title: 'AUTOMATIZACIÓN CON IA',
    description: 'Chatbots inteligentes, flujos de mensajería, reservas, pagos y sistemas automáticos.'
  },
  {
    id: 'redesign',
    Icon: RefreshCcw,
    title: 'GOOGLE/IG/FB ADS',
    description: 'Aparece justo donde y cuando clientes locales buscan lo que ofreces'
  },
  {
    id: 'branding',
    Icon: Briefcase,
    title: 'CREACIÓN DE CONTENIDO',
    description: 'Pon tu negocio en el spotlight con contenido orgánico'
  }
];