import {
  Code2,
  Database,
  Globe,
  Palette,
  ShoppingCart,
  Smartphone,
} from 'lucide-react';

export const services = [
  {
    slug: 'web-development',
    icon: Code2,
    title: 'Web Development',
    color: 'from-blue-500 to-cyan-500',
    description:
      'Custom websites and web applications built with React, Next.js, and Node.js for performance and scalability.',
    image: '/web_development_premium_1769518207985.png',
  },
  {
    slug: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    color: 'from-purple-500 to-pink-500',
    description:
      'Native and cross-platform apps that deliver seamless experiences on iOS and Android.',
    image: '/mobile_app_development_premium_1769518249733.png',
  },
  {
    slug: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design',
    color: 'from-orange-500 to-red-500',
    description:
      'Beautiful, intuitive designs that convert and delight across web and mobile.',
    image: '/ui_ux_design_premium_1769518278516.png',
  },
  {
    slug: 'e-commerce',
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    color: 'from-green-500 to-emerald-500',
    description:
      'Feature-rich e-commerce platforms with payments, inventory, and analytics.',
    image: '/ecommerce_solutions_premium_1769518314027.png',
  },
  {
    slug: 'backend-development',
    icon: Database,
    title: 'Backend Development',
    color: 'from-indigo-500 to-blue-500',
    description:
      'Secure, scalable APIs and infrastructure to power your applications.',
    image: '/backend_infrastructure_premium_1769518360170.png',
  },
  {
    slug: 'digital-marketing',
    icon: Globe,
    title: 'Digital Marketing',
    color: 'from-yellow-500 to-orange-500',
    description:
      'SEO, content, and social strategies that grow your audience and revenue.',
    image: '/digital_marketing_seo_premium_1769518403220.png',
  },
];

export function serviceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}


