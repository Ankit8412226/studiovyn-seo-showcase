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
    color: 'from-emerald-500 to-teal-400',
    description:
      'Custom websites and web applications built with React, Next.js, and Node.js for performance and scalability.',
    metaTitle: 'Web Development Company India | StudioVyn',
    metaDescription: 'Custom websites and web apps built for performance, SEO, and conversions. Web development by StudioVyn.',
    keywords: [
      'web development company India',
      'web development agency',
      'custom website development',
      'Next.js development',
      'StudioVyn'
    ],
    image: '/web_development_premium_1769518207985.png',
  },
  {
    slug: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    color: 'from-emerald-500 to-lime-400',
    description:
      'Native and cross-platform apps that deliver seamless experiences on iOS and Android.',
    metaTitle: 'Mobile App Development India | StudioVyn',
    metaDescription: 'Build high-performance iOS and Android apps with StudioVyn. Product strategy, UX, and scalable development for India.',
    keywords: [
      'mobile app development India',
      'iOS app development',
      'Android app development',
      'React Native development',
      'StudioVyn'
    ],
    image: '/mobile_app_development_premium_1769518249733.png',
  },
  {
    slug: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design',
    color: 'from-teal-500 to-emerald-400',
    description:
      'Beautiful, intuitive designs that convert and delight across web and mobile.',
    metaTitle: 'UI/UX Design Services India | StudioVyn',
    metaDescription: 'User-centric UI/UX design that improves conversions and retention. UI/UX services by StudioVyn.',
    keywords: [
      'UI/UX design services',
      'UX design agency',
      'product design',
      'conversion-focused design',
      'StudioVyn'
    ],
    image: '/ui_ux_design_premium_1769518278516.png',
  },
  {
    slug: 'e-commerce',
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    color: 'from-emerald-500 to-teal-400',
    description:
      'Feature-rich e-commerce platforms with payments, inventory, and analytics.',
    metaTitle: 'E-commerce Development India | StudioVyn',
    metaDescription: 'High-converting e-commerce development with UPI payments and SEO-ready product pages. Built by StudioVyn.',
    keywords: [
      'e-commerce development India',
      'Shopify development',
      'WooCommerce development',
      'e-commerce website agency',
      'StudioVyn'
    ],
    image: '/ecommerce_solutions_premium_1769518314027.png',
  },
  {
    slug: 'backend-development',
    icon: Database,
    title: 'Backend Development',
    color: 'from-teal-500 to-emerald-500',
    description:
      'Secure, scalable APIs and infrastructure to power your applications.',
    metaTitle: 'Backend Development Services India | StudioVyn',
    metaDescription: 'Scalable APIs, secure infrastructure, and reliable integrations. Backend development services by StudioVyn.',
    keywords: [
      'backend development services',
      'API development',
      'scalable infrastructure',
      'cloud backend',
      'StudioVyn'
    ],
    image: '/backend_infrastructure_premium_1769518360170.png',
  },
  {
    slug: 'digital-marketing',
    icon: Globe,
    title: 'Digital Marketing',
    color: 'from-lime-500 to-emerald-400',
    description:
      'SEO, content, and social strategies that grow your audience and revenue.',
    metaTitle: 'Digital Marketing & SEO Services India | StudioVyn',
    metaDescription: 'SEO, content, and social strategies that grow visibility and leads. Digital marketing services by StudioVyn.',
    keywords: [
      'digital marketing services India',
      'SEO services India',
      'content marketing',
      'social media marketing',
      'StudioVyn'
    ],
    image: '/digital_marketing_seo_premium_1769518403220.png',
  },
];

export function serviceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
