'use client';

import { Zap, Search, Shield, Target } from 'lucide-react';
import Card from '@/components/ui/Card';

export default function WhyUs() {
  const points = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Core Web Vitals and SSR for speed and SEO. Optimized performance that keeps users engaged.',
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
    },
    {
      icon: Search,
      title: 'SEO Ready',
      description: 'Sitemaps, schema, internal linking, programmatic pages. Built for search engine success.',
      gradient: 'from-blue-400 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Shield,
      title: 'Secure & Scalable',
      description: 'Modern stack, CI/CD, observability. Enterprise-grade security and infrastructure.',
      gradient: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      icon: Target,
      title: 'Conversion Focused',
      description: 'Clear UX, proof, and performance to drive leads. Every element optimized for conversions.',
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-secondary mb-6 text-gray-900">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">StudioVyn</span>
          </h2>
          <p className="text-xl text-gray-600 font-primary leading-relaxed">
            We combine cutting-edge technology with proven strategies to deliver exceptional results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <Card
                key={i}
                variant="elevated"
                hover
                padding="lg"
                className={`group relative overflow-hidden bg-gradient-to-br ${point.bgGradient} border-0`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${point.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-secondary mb-3 text-gray-900">
                  {point.title}
                </h3>
                <p className="text-gray-700 font-primary leading-relaxed text-sm">
                  {point.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}


