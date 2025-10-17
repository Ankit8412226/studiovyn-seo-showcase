import {
  Code2,
  Smartphone,
  Palette,
  ShoppingCart,
  Database,
  Globe,
} from 'lucide-react';

export const services = [
  {
    slug: 'web-development',
    icon: Code2,
    title: 'Web Development',
    color: 'from-blue-500 to-cyan-500',
    description:
      'Custom websites and web applications built with React, Next.js, and Node.js for performance and scalability.',
    image: '/window.svg',
  },
  {
    slug: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    color: 'from-purple-500 to-pink-500',
    description:
      'Native and cross-platform apps that deliver seamless experiences on iOS and Android.',
    image: '/globe.svg',
  },
  {
    slug: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design',
    color: 'from-orange-500 to-red-500',
    description:
      'Beautiful, intuitive designs that convert and delight across web and mobile.',
    image: '/next.svg',
  },
  {
    slug: 'e-commerce',
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    color: 'from-green-500 to-emerald-500',
    description:
      'Feature-rich e-commerce platforms with payments, inventory, and analytics.',
    image: '/vercel.svg',
  },
  {
    slug: 'backend-development',
    icon: Database,
    title: 'Backend Development',
    color: 'from-indigo-500 to-blue-500',
    description:
      'Secure, scalable APIs and infrastructure to power your applications.',
    image: '/file.svg',
  },
  {
    slug: 'digital-marketing',
    icon: Globe,
    title: 'Digital Marketing',
    color: 'from-yellow-500 to-orange-500',
    description:
      'SEO, content, and social strategies that grow your audience and revenue.',
    image: '/window.svg',
  },
];

export function serviceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}


