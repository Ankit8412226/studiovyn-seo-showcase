'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';
import { projects } from './portfolio/data';
import Card from '@/components/ui/Card';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Button from '@/components/ui/Button';

export default function Portfolio() {
  const top = projects.slice(0, 9);

  return (
    <section id="portfolio" className="py-24 sm:py-28 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-200/40 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-secondary mb-6 text-slate-900">
            Selected <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-slate-600 font-primary leading-relaxed">
            Real projects that show measurable business impact and performance for our clients.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {top.map((project, idx) => (
            <div key={idx} className="group">
              <Card
                variant="elevated"
                hover
                padding="none"
                className="overflow-hidden h-full flex flex-col bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <OptimizedImage
                    src={project.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'}
                    alt={project.title}
                    fill
                    className="transition-transform duration-700 group-hover:scale-110"
                    objectFit="cover"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col bg-white">
                  <h3 className="text-xl font-bold font-secondary mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Result Badge */}
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 mb-4 w-fit">
                    <TrendingUp className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-blue-700 font-primary">
                      {project.result}
                    </span>
                  </div>

                  {/* Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack?.split(',').slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-md font-primary"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Summary/Metric */}
                  <p className="text-sm text-slate-600 font-primary mt-auto">
                    {project.summary}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
            className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}


