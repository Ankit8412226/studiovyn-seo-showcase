'use client';

import Card from '@/components/ui/Card';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { ArrowRight, Code, Palette, Search, TrendingUp } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Define goals, audience, and success metrics. We dive deep into your business to understand your unique needs.',
      icon: Search,
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Wireframes, prototypes, and design system. We create beautiful, user-centric designs that convert.',
      icon: Palette,
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    },
    {
      number: '03',
      title: 'Build',
      description: 'Modern stack, testing, and CI/CD. We build with best practices, ensuring quality and performance.',
      icon: Code,
      gradient: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    },
    {
      number: '04',
      title: 'Grow',
      description: 'SEO, analytics, and iteration after launch. We help you grow with data-driven optimizations.',
      icon: TrendingUp,
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-secondary mb-4 sm:mb-6 text-gray-900">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-primary leading-relaxed px-4">
            A proven methodology that delivers results. From discovery to growth, we guide you every step of the way.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 0;

            return (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <Card variant="elevated" padding="none" className="overflow-hidden group rounded-3xl">
                    <div className="relative h-48 sm:h-64 lg:h-80">
                      <OptimizedImage
                        src={step.image}
                        alt={step.title}
                        fill
                        className="transition-transform duration-700 group-hover:scale-110"
                        objectFit="cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20`}></div>
                    </div>
                  </Card>
                </div>

                {/* Content */}
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <Icon className="w-10 h-10 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider font-primary mb-1">
                        Step {step.number}
                      </div>
                      <h3 className="text-3xl font-bold font-secondary text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 font-primary leading-relaxed mb-6">
                    {step.description}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="flex items-center text-blue-600 font-semibold font-primary">
                      <span>Next: {steps[i + 1].title}</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


