'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Check,
  Code2,
  Database,
  Globe,
  Palette,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import OptimizedImage from '@/components/ui/OptimizedImage';

export default function ServicesShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      shortDescription: 'Custom websites and web applications built with modern technologies for optimal performance and scalability.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure & Scalable'],
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      gradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      shortDescription: 'Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android devices.',
      features: ['Cross-Platform', 'Native Performance', 'Offline Support', 'Push Notifications'],
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      gradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      shortDescription: 'Beautiful, intuitive designs that prioritize user experience and drive engagement with your brand.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Brand Identity'],
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      gradient: 'from-orange-500/10 to-red-500/10',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      shortDescription: 'Complete e-commerce platforms with payment integration, inventory management, and analytics to grow your online business.',
      features: ['Payment Gateway', 'Inventory System', 'Analytics', 'Multi-vendor'],
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      gradient: 'from-green-500/10 to-emerald-500/10',
    },
    {
      icon: Database,
      title: 'Backend Development',
      shortDescription: 'Robust backend systems and APIs that power your applications with security, reliability, and performance.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Integration', 'Authentication'],
      color: 'from-indigo-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      gradient: 'from-indigo-500/10 to-blue-500/10',
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      shortDescription: 'Strategic digital marketing solutions including SEO, content marketing, and social media to expand your reach.',
      features: ['SEO Strategy', 'Content Marketing', 'Social Media', 'Analytics'],
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c92d?w=800&h=600&fit=crop',
      gradient: 'from-yellow-500/10 to-orange-500/10',
    },
  ];

  return (
    <section
      id="services"
      className="py-24 sm:py-28 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden"
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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 mb-6">
            <Sparkles className="w-8 h-8 text-blue-600" aria-hidden="true" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-secondary mb-6 text-gray-900">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>

          <p className="text-xl text-gray-600 font-primary leading-relaxed">
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

