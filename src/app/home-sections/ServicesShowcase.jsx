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
      color: 'from-[#10b981] to-[#2dd4bf]',
      image: '/web_development_premium_1769518207985.png',
      gradient: 'from-[#10b981]/15 to-[#2dd4bf]/15',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      shortDescription: 'Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android devices.',
      features: ['Cross-Platform', 'Native Performance', 'Offline Support', 'Push Notifications'],
      color: 'from-[#2dd4bf] to-[#84cc16]',
      image: '/mobile_app_development_premium_1769518249733.png',
      gradient: 'from-[#2dd4bf]/15 to-[#84cc16]/15',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      shortDescription: 'Beautiful, intuitive designs that prioritize user experience and drive engagement with your brand.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Brand Identity'],
      color: 'from-[#84cc16] to-[#10b981]',
      image: '/ui_ux_design_premium_1769518278516.png',
      gradient: 'from-[#84cc16]/15 to-[#10b981]/15',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      shortDescription: 'Complete e-commerce platforms with payment integration, inventory management, and analytics to grow your online business.',
      features: ['Payment Gateway', 'Inventory System', 'Analytics', 'Multi-vendor'],
      color: 'from-[#10b981] to-[#2dd4bf]',
      image: '/ecommerce_solutions_premium_1769518314027.png',
      gradient: 'from-[#10b981]/15 to-[#2dd4bf]/15',
    },
    {
      icon: Database,
      title: 'Backend Development',
      shortDescription: 'Robust backend systems and APIs that power your applications with security, reliability, and performance.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Integration', 'Authentication'],
      color: 'from-[#0ea5e9] to-[#6366f1]',
      image: '/backend_infrastructure_premium_1769518360170.png',
      gradient: 'from-[#0ea5e9]/15 to-[#6366f1]/15',
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      shortDescription: 'Strategic digital marketing solutions including SEO, content marketing, and social media to expand your reach.',
      features: ['SEO Strategy', 'Content Marketing', 'Social Media', 'Analytics'],
      color: 'from-[#2dd4bf] to-[#10b981]',
      image: '/digital_marketing_seo_premium_1769518403220.png',
      gradient: 'from-[#2dd4bf]/15 to-[#10b981]/15',
    },
  ];

  return (
    <section
      id="services"
      className="py-16 sm:py-24 lg:py-32 scroll-mt-32 bg-gradient-to-b from-[#0b0d12] via-[#0f1320] to-[#111827] relative overflow-hidden"
      aria-label="Our professional services"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1f3b8a]/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2dd4bf]/20 rounded-full filter blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b26_1px,transparent_1px),linear-gradient(to_bottom,#1e293b26_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#121723] to-[#1a2235] mb-4 sm:mb-6">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-200" aria-hidden="true" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-secondary mb-4 sm:mb-6 text-white">
            Our <span className="bg-gradient-to-r from-[#10b981] to-[#2dd4bf] bg-clip-text text-transparent">Services</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#94a3b8] font-primary leading-relaxed">
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
                  <h3 className="text-xl sm:text-2xl font-bold font-secondary mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-[#10b981] group-hover:to-[#2dd4bf] transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-[#94a3b8] font-primary mb-4 leading-relaxed text-sm">
                    {service.shortDescription}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-[#cbd5f5] font-primary">
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
                    className="w-full group-hover:text-emerald-200"
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
          <p className="text-lg text-slate-300 font-primary mb-6">
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
