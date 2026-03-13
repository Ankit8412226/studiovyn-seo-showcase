'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';
import { projects } from './case-studies/data';
import Card from '@/components/ui/Card';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Button from '@/components/ui/Button';

export default function Portfolio() {
  const top = projects.slice(0, 9);

  return (
    <section id="portfolio" className="py-24 sm:py-28 lg:py-32 bg-gradient-to-b from-[#0b0d12] via-[#0f1320] to-[#111827] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#84cc16]/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#121723] to-[#1a2235] mb-6">
            <TrendingUp className="w-8 h-8 text-emerald-200" aria-hidden="true" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-secondary mb-6 text-white">
            Selected <span className="bg-gradient-to-r from-[#10b981] to-[#2dd4bf] bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-[#94a3b8] font-primary leading-relaxed">
            Case studies that show measurable business impact and real results for our clients.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {top.map((project, index) => (
            <Link
              key={project.slug}
              href={`/case-studies/${project.slug}`}
              className="group"
            >
              <Card
                variant="elevated"
                hover
                padding="none"
                className="overflow-hidden h-full flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#0f1320] to-[#111827]">
                  <OptimizedImage
                    src={project.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'}
                    alt={project.title}
                    fill
                    className="transition-transform duration-700 group-hover:scale-110"
                    objectFit="cover"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Hover Badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-[#0f1320]/95 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-lg border border-[#1f2937]">
                      <span className="text-sm font-semibold text-white font-primary">View Case Study</span>
                      <ExternalLink className="w-4 h-4 text-[#94a3b8]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold font-secondary mb-3 text-white group-hover:text-emerald-200 transition-colors">
                    {project.title}
                  </h3>

                  {/* Result Badge */}
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#0f1320] border border-[#1f2937] mb-4">
                    <TrendingUp className="w-4 h-4 text-emerald-300 mr-2" />
                    <span className="text-sm font-semibold text-emerald-300 font-primary">
                      {project.result}
                    </span>
                  </div>

                  {/* Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack?.split(',').slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium text-[#94a3b8] bg-[#0f1320] rounded-md font-primary"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto flex items-center text-emerald-200 font-semibold font-primary group-hover:gap-2 transition-all">
                    <span>Read case study</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            href="/case-studies"
            variant="secondary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
            className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}

