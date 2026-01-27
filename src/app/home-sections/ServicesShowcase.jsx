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
    Sparkles
} from 'lucide-react';
import { useState } from 'react';

export default function ServicesShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      shortDescription: 'Custom websites and web applications built with modern technologies for optimal performance and scalability.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure & Scalable'],
      color: 'from-blue-500 to-cyan-500',
      image: '/web_development_premium_1769518207985.png',
      gradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      shortDescription: 'Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android devices.',
      features: ['Cross-Platform', 'Native Performance', 'Offline Support', 'Push Notifications'],
      color: 'from-purple-500 to-pink-500',
      image: '/mobile_app_development_premium_1769518249733.png',
      gradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      shortDescription: 'Beautiful, intuitive designs that prioritize user experience and drive engagement with your brand.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Brand Identity'],
      color: 'from-orange-500 to-red-500',
      image: '/ui_ux_design_premium_1769518278516.png',
      gradient: 'from-orange-500/10 to-red-500/10',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      shortDescription: 'Complete e-commerce platforms with payment integration, inventory management, and analytics to grow your online business.',
      features: ['Payment Gateway', 'Inventory System', 'Analytics', 'Multi-vendor'],
      color: 'from-green-500 to-emerald-500',
      image: '/ecommerce_solutions_premium_1769518314027.png',
      gradient: 'from-green-500/10 to-emerald-500/10',
    },
    {
      icon: Database,
      title: 'Backend Development',
      shortDescription: 'Robust backend systems and APIs that power your applications with security, reliability, and performance.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Integration', 'Authentication'],
      color: 'from-indigo-500 to-blue-500',
      image: '/backend_infrastructure_premium_1769518360170.png',
      gradient: 'from-indigo-500/10 to-blue-500/10',
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      shortDescription: 'Strategic digital marketing solutions including SEO, content marketing, and social media to expand your reach.',
      features: ['SEO Strategy', 'Content Marketing', 'Social Media', 'Analytics'],
      color: 'from-yellow-500 to-orange-500',
      image: '/digital_marketing_seo_premium_1769518403220.png',
      gradient: 'from-yellow-500/10 to-orange-500/10',
    },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden"
      aria-label="Our professional services"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full filter blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 mb-4 sm:mb-6">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" aria-hidden="true" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-secondary mb-4 sm:mb-6 text-gray-900">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 font-primary leading-relaxed">
            Comprehensive digital solutions tailored to your business needs. From concept to deployment, we deliver excellence at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <Card
                key={index}
                variant="elevated"
                hover
                padding="none"
                className="group relative overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Background */}
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`transition-transform duration-700 ${
                      isHovered ? 'scale-110' : 'scale-100'
                    }`}
                    objectFit="cover"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80`}></div>

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold font-secondary mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 font-primary mb-4 leading-relaxed text-sm">
                    {service.shortDescription}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700 font-primary">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}></div>
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
                    className="w-full group-hover:text-blue-600"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 font-primary mb-6">
            Don't see what you're looking for? We offer custom solutions too!
          </p>
          <Button
            href="/contact"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
            className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            aria-label="Contact us for custom solutions"
          >
            Get a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}

