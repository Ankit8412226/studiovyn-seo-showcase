'use client';

import Card from '@/components/ui/Card';
import { ArrowRight, Code, Palette, Search, TrendingUp } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Architecture',
      description: 'Define goals, audience, and success metrics. We dive deep into your business to understand your unique needs and map technical blueprints.',
      icon: Search,
      graphic: (
        <div className="w-full h-full bg-[#0B1E3D] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between border-b border-[#1E3A8A] pb-3 text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60 inline-block"></span>
              <span className="text-[#60A5FA] ml-2 text-[11px]">discovery.config.ts</span>
            </div>
            <span className="text-[#64748B]">SCOPE 100%</span>
          </div>
          <div className="space-y-2 py-4">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0F284E] border border-[#1E3A8A] text-[#E2E8F0]">
              <span className="text-[#60A5FA]">01. Search Intent Matrix</span>
              <span className="text-[#3B82F6] font-semibold">Analyzed</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0F284E] border border-[#1E3A8A] text-[#E2E8F0]">
              <span className="text-[#60A5FA]">02. Tech Stack Architecture</span>
              <span className="text-[#3B82F6] font-semibold">Next.js 16</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0F284E] border border-[#1E3A8A] text-[#E2E8F0]">
              <span className="text-[#60A5FA]">03. Schema & SEO Targets</span>
              <span className="text-[#3B82F6] font-semibold">PAN India</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#94A3B8] border-t border-[#1E3A8A] pt-3">
            <span>Milestone: Discovery Blueprint</span>
            <span className="text-[#60A5FA]">✓ Verified</span>
          </div>
        </div>
      ),
    },
    {
      number: '02',
      title: 'Design System & UX',
      description: 'Wireframes, interactive prototypes, and modular design tokens. We craft beautiful, high-converting experiences tailored for precision.',
      icon: Palette,
      graphic: (
        <div className="w-full h-full bg-[#0B1E3D] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#1E3A8A] pb-3 text-[#94A3B8] text-xs font-mono">
            <span className="text-[#60A5FA]">DesignTokens.css</span>
            <span className="text-[#3B82F6]">Figma → Production</span>
          </div>
          <div className="grid grid-cols-2 gap-3 py-4">
            <div className="p-3 rounded-xl bg-[#0F284E] border border-[#1E3A8A] flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-lg bg-[#2563EB]"></div>
                <span className="text-xs text-[#E2E8F0] font-mono">#2563EB</span>
              </div>
              <span className="text-[11px] text-[#94A3B8]">Primary Accent</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0F284E] border border-[#1E3A8A] flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE]"></div>
                <span className="text-xs text-[#E2E8F0] font-mono">#EFF6FF</span>
              </div>
              <span className="text-[11px] text-[#94A3B8]">Pale Blue Tint</span>
            </div>
            <div className="col-span-2 p-3 rounded-xl bg-[#0F284E] border border-[#1E3A8A]">
              <div className="text-xs text-[#E2E8F0] font-serif mb-1">Playfair Serif + Plus Jakarta Sans</div>
              <div className="text-[10px] text-[#64748B] font-mono">Modular Responsive Type Scale</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#94A3B8] border-t border-[#1E3A8A] pt-3 font-mono">
            <span>Milestone: UI Prototype</span>
            <span className="text-[#60A5FA]">✓ Approved</span>
          </div>
        </div>
      ),
    },
    {
      number: '03',
      title: 'Full-Stack Production Build',
      description: 'Modern stack engineering, comprehensive test suites, SSR streaming, and CI/CD pipelines. Built with production-grade engineering standards.',
      icon: Code,
      graphic: (
        <div className="w-full h-full bg-[#0B1E3D] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between border-b border-[#1E3A8A] pb-3 text-[#94A3B8]">
            <span className="text-[#60A5FA]">Terminal: release-v1.0.0</span>
            <span className="text-[#10B981]">BUILD PASS</span>
          </div>
          <div className="space-y-2 py-4">
            <div className="p-2.5 rounded-lg bg-[#0F284E] border border-[#1E3A8A] text-[#E2E8F0]">
              <span className="text-[#60A5FA]">$ </span>next build --turbo
              <div className="text-[11px] text-[#94A3B8] mt-1">✓ Server Components Compiled (240ms)</div>
            </div>
            <div className="p-2.5 rounded-lg bg-[#0F284E] border border-[#1E3A8A] text-[#E2E8F0]">
              <span className="text-[#60A5FA]">$ </span>lighthouse --perf
              <div className="text-[11px] text-[#60A5FA] font-bold mt-1">✓ 100/100 Core Web Vitals Guaranteed</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#94A3B8] border-t border-[#1E3A8A] pt-3">
            <span>Milestone: Production Ready</span>
            <span className="text-[#60A5FA]">✓ Shipped</span>
          </div>
        </div>
      ),
    },
    {
      number: '04',
      title: 'Organic Growth & Iteration',
      description: 'Programmatic SEO indexing, analytics instrumentation, and conversion iteration after launch. We engineer continuous measurable growth.',
      icon: TrendingUp,
      graphic: (
        <div className="w-full h-full bg-[#0B1E3D] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between border-b border-[#1E3A8A] pb-3 text-[#94A3B8]">
            <span className="text-[#60A5FA]">Analytics & Search Engine</span>
            <span className="text-[#60A5FA] font-bold">+300% ROI</span>
          </div>
          <div className="py-4 space-y-2">
            <div className="p-3 rounded-xl bg-[#0F284E] border border-[#1E3A8A]">
              <div className="flex justify-between items-center mb-1 text-[#E2E8F0]">
                <span>Organic Search Traffic</span>
                <span className="text-[#60A5FA] font-bold">3.2x</span>
              </div>
              <div className="w-full h-2 bg-[#0B1E3D] rounded-full overflow-hidden">
                <div className="w-4/5 h-full bg-[#2563EB] rounded-full"></div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-[#0F284E] border border-[#1E3A8A]">
              <div className="flex justify-between items-center mb-1 text-[#E2E8F0]">
                <span>Inbound Lead Conversion</span>
                <span className="text-[#60A5FA] font-bold">9.8%</span>
              </div>
              <div className="w-full h-2 bg-[#0B1E3D] rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-[#3B82F6] rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#94A3B8] border-t border-[#1E3A8A] pt-3">
            <span>Milestone: Scale & Optimize</span>
            <span className="text-[#60A5FA]">✓ Continuous</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#EFF6FF] border-b border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] block mb-2">
            Agile Engineering Lifecycle
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal font-secondary mb-4 text-[#0F172A]">
            Our <span className="font-bold text-[#2563EB]">Process</span>
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] font-primary leading-relaxed px-4">
            A proven methodology that delivers results. From discovery to growth, we guide you every step of the way.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 max-w-5xl mx-auto">
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
                {/* Custom Abstract Architectural Graphic instead of Stock Photo */}
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <Card variant="elevated" padding="none" className="overflow-hidden rounded-3xl border border-[#DBEAFE] shadow-sm hover:shadow-md transition-all">
                    <div className="relative h-64 sm:h-72">
                      {step.graphic}
                    </div>
                  </Card>
                </div>

                {/* Content */}
                <div className={`${!isEven ? 'lg:order-1' : ''} p-2`}>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 bg-white border border-[#DBEAFE] rounded-xl flex items-center justify-center shadow-xs text-[#2563EB]">
                      <Icon className="w-6 h-6 text-[#2563EB]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs text-[#2563EB] font-bold uppercase tracking-wider font-primary">
                        Step {step.number}
                      </div>
                      <h3 className="text-2xl font-semibold font-secondary text-[#0F172A]">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-base text-[#64748B] font-primary leading-relaxed mb-6">
                    {step.description}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="flex items-center text-[#2563EB] text-sm font-semibold font-primary">
                      <span>Next: {steps[i + 1].title}</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
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
