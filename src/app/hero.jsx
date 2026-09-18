'use client';

import Button from '@/components/ui/Button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { ArrowRight, Award, CheckCircle2, TrendingUp, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    { value: '150+', label: 'Projects Delivered', icon: TrendingUp },
    { value: '98%', label: 'Client Satisfaction', icon: Award },
    { value: '3+', label: 'Years Experience', icon: Users },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-white pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-slate-200/80"
      role="banner"
      aria-label="Hero section introducing StudioVyn web development services"
    >
      {/* Restrained Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#EFF6FF] rounded-full blur-3xl opacity-80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center space-y-6 lg:space-y-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Main Heading - Refined Serif & Restrained Font Weight */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-secondary leading-[1.15] tracking-tight text-[#0F172A]">
              Build a Website Brand That{' '}
              <span className="font-bold text-[#2563EB]">
                Ranks & Converts
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-[#64748B] max-w-2xl mx-auto font-primary leading-relaxed font-normal">
              StudioVyn builds high-performance websites and AI-ready experiences for brands across India.
              <span className="font-medium text-[#0F172A]"> Faster pages, stronger rankings, and measurable growth.</span>
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#EFF6FF] rounded-full border border-[#DBEAFE]">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                <span className="text-xs font-medium text-[#2563EB] font-primary">2-6 Week Delivery</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#EFF6FF] rounded-full border border-[#DBEAFE]">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                <span className="text-xs font-medium text-[#2563EB] font-primary">SEO + AI Search Ready</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center pt-3">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="px-7 py-3.5 text-base font-semibold"
                aria-label="Get free website development consultation"
              >
                Get Free Consultation
              </Button>
              <Button
                onClick={() => scrollToSection('portfolio')}
                variant="secondary"
                size="lg"
                className="px-7 py-3.5 text-base font-semibold"
                aria-label="View our website portfolio"
              >
                View Portfolio
              </Button>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 items-center justify-center gap-4 sm:gap-8 pt-8 border-t border-slate-200/80 max-w-xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <Icon className="w-4 h-4 text-[#3B82F6]" />
                      <div className="text-2xl sm:text-3xl font-bold text-[#2563EB] font-primary">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#64748B] font-medium font-primary uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup Preview */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto relative">
          <div className="rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-[#EFF6FF] border border-[#DBEAFE] shadow-xl">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900 border border-slate-800/80">
              <OptimizedImage
                src="/hero_workspace.png"
                alt="StudioVyn High-Performance Web Architecture Dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
