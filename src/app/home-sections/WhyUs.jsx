'use client';

import { Zap, Search, Shield, Target } from 'lucide-react';
import Card from '@/components/ui/Card';

export default function WhyUs() {
  const points = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Core Web Vitals and SSR for speed and SEO. Optimized performance that keeps users engaged.',
    },
    {
      icon: Search,
      title: 'SEO Ready',
      description: 'Sitemaps, schema, internal linking, programmatic pages. Built for search engine success.',
    },
    {
      icon: Shield,
      title: 'Secure & Scalable',
      description: 'Modern stack, CI/CD, observability. Enterprise-grade security and infrastructure.',
    },
    {
      icon: Target,
      title: 'Conversion Focused',
      description: 'Clear UX, proof, and performance to drive leads. Every element optimized for conversions.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#EFF6FF] border-b border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] block mb-2">
            Standards of Engineering
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal font-secondary mb-4 text-[#0F172A]">
            Why Choose <span className="font-bold text-[#2563EB]">StudioVyn</span>
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] font-primary leading-relaxed">
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
                className="group relative overflow-hidden bg-white border border-[#DBEAFE] shadow-xs hover:shadow-lg hover:border-[#93C5FD] transition-all duration-300 rounded-2xl"
              >
                {/* Flat Monochrome Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center mb-6 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold font-secondary mb-2 text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                  {point.title}
                </h3>
                <p className="text-[#64748B] font-primary leading-relaxed text-sm">
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
