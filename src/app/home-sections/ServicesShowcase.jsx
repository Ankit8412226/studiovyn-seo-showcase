'use client';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import OptimizedImage from '@/components/ui/OptimizedImage';
import {
  ArrowRight,
  Code2,
  Database,
  Globe,
  Palette,
  ShoppingCart,
  Smartphone,
} from 'lucide-react';
import { useState } from 'react';

export default function ServicesShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      shortDescription:
        'Custom websites and web applications built with modern technologies for optimal performance and scalability.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure & Scalable'],
      image: '/web_development_premium_1769518207985.png',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      shortDescription:
        'Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android devices.',
      features: ['Cross-Platform', 'Native Performance', 'Offline Support', 'Push Notifications'],
      image: '/mobile_app_development_premium_1769518249733.png',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      shortDescription:
        'Beautiful, intuitive designs that prioritize user experience and drive engagement with your brand.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Brand Identity'],
      image: '/ui_ux_design_premium_1769518278516.png',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      shortDescription:
        'Complete e-commerce platforms with payment integration, inventory management, and analytics to grow your online business.',
      features: ['Payment Gateway', 'Inventory System', 'Analytics', 'Multi-vendor'],
      image: '/ecommerce_solutions_premium_1769518314027.png',
    },
    {
      icon: Database,
      title: 'Backend Development',
      shortDescription:
        'Robust backend systems and APIs that power your applications with security, reliability, and performance.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Integration', 'Authentication'],
      image: '/backend_infrastructure_premium_1769518360170.png',
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      shortDescription:
        'Strategic digital marketing solutions including SEO, content marketing, and social media to expand your reach.',
      features: ['SEO Strategy', 'Content Marketing', 'Social Media', 'Analytics'],
      image: '/digital_marketing_seo_premium_1769518403220.png',
    },
  ];

  return (
    <section
      id="services"
      className="py-24 sm:py-32 scroll-mt-24 bg-white border-b border-slate-200/80 relative overflow-hidden"
      aria-label="Our professional services"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] block mb-2">
            Engineering Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal font-secondary mb-4 text-[#0F172A]">
            Our <span className="font-bold text-[#2563EB]">Services</span>
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] font-primary leading-relaxed">
            Comprehensive digital solutions tailored to your business needs. From concept to deployment, we deliver excellence at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <Card
                key={index}
                variant="elevated"
                hover
                padding="none"
                className="group relative overflow-hidden bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-lg hover:border-[#BFDBFE] transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Header with subtle tint */}
                <div className="relative h-48 overflow-hidden bg-[#EFF6FF]">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`transition-transform duration-500 ${
                      isHovered ? 'scale-105' : 'scale-100'
                    }`}
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-[#0B1E3D]/10"></div>

                  {/* Flat Monochrome Icon Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/95 backdrop-blur-md rounded-xl border border-[#DBEAFE] flex items-center justify-center shadow-sm text-[#2563EB]">
                      <Icon className="w-6 h-6 text-[#2563EB]" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-semibold font-secondary mb-2.5 text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[#64748B] font-primary mb-5 leading-relaxed text-sm">
                    {service.shortDescription}
                  </p>

                  {/* Features with Single Blue Tint Bullets */}
                  <ul className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-[#334155] font-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mr-2.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    href="/services"
                    variant="ghost"
                    size="sm"
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                    className="w-full text-xs font-semibold text-[#2563EB] bg-[#EFF6FF] border-[#DBEAFE] hover:bg-[#2563EB] hover:text-white transition-all"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE] max-w-2xl mx-auto">
          <p className="text-base text-[#334155] font-primary mb-4 font-medium">
            Don't see what you're looking for? We offer custom solutions too!
          </p>
          <Button
            href="/contact"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            className="px-6 py-3 text-sm font-semibold"
            aria-label="Contact us for custom solutions"
          >
            Get a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
