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
    title: 'REDISEÑO ESTRATÉGICO',
    description: 'Actualizamos tu sitio para que alcance su potencial en diseño, velocidad y conversión.'
  },
  {
    id: 'branding',
    Icon: Briefcase,
    title: 'POSICIONAMIENTO / SEO',
    description: 'Destaca en tu industria con estrategias enfocadas en resultados concretos: tráfico, leads y ventas.'
  }
];