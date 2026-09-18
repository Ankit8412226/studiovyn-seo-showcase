'use client';

import { Zap, Search, Shield, Target } from 'lucide-react';
import Card from '@/components/ui/Card';

export default function WhyUs() {
  const points = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Core Web Vitals and SSR for speed and SEO. Optimized performance that keeps users engaged.',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      icon: Search,
      title: 'SEO Ready',
      description: 'Sitemaps, schema, internal linking, programmatic pages. Built for search engine success.',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Shield,
      title: 'Secure & Scalable',
      description: 'Modern stack, CI/CD, observability. Enterprise-grade security and infrastructure.',
      gradient: 'from-indigo-600 to-blue-500',
    },
    {
      icon: Target,
      title: 'Conversion Focused',
      description: 'Clear UX, proof, and performance to drive leads. Every element optimized for conversions.',
      gradient: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-secondary mb-6 text-slate-900">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">StudioVyn</span>
          </h2>
          <p className="text-xl text-slate-600 font-primary leading-relaxed">
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
                className="group relative overflow-hidden bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${point.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 text-white`}>
                  <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-secondary mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {point.title}
                </h3>
                <p className="text-slate-600 font-primary leading-relaxed text-sm">
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
