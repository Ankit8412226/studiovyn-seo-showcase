'use client';

import Button from '@/components/ui/Button';
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

  const features = [
    'React & Next.js Development',
    'Mobile-First Design',
    'SEO Optimized',
    'Fast Performance',
  ];

  const stats = [
    { value: '150+', label: 'Projects Delivered', icon: TrendingUp },
    { value: '98%', label: 'Client Satisfaction', icon: Award },
    { value: '3+', label: 'Years Experience', icon: Users },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-50/40 to-white pt-32 pb-16 lg:pt-40 lg:pb-24"
      role="banner"
      aria-label="Hero section introducing StudioVyn web development services"
    >
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e140_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e140_1px,transparent_1px)] bg-[size:28px_28px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center space-y-6 lg:space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Main Heading - Professional Typography */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-secondary leading-[1.08] tracking-tight text-slate-900">
              Build a Website Brand That{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Ranks & Converts
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/20 via-sky-500/20 to-cyan-500/20 opacity-70 blur-xl"></span>
              </span>
            </h1>

            {/* Subheading - Strong Value Proposition */}
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-primary leading-relaxed font-medium">
              StudioVyn builds high-performance websites and AI-ready experiences for brands across India.
              <span className="font-bold text-slate-900"> Faster pages, stronger rankings, and measurable growth.</span>
            </p>

            {/* Key Benefits - Mobile Optimized */}
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-blue-200/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span className="text-xs lg:text-sm font-semibold text-blue-700 font-primary">2-6 Week Delivery</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-blue-200/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span className="text-xs lg:text-sm font-semibold text-blue-700 font-primary">SEO + AI Search Ready</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                className="group shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/35 hover:scale-[1.02] transition-all duration-300 px-8 py-4 text-lg"
                aria-label="Get free website development consultation"
              >
                Get Free Consultation
              </Button>
              <Button
                onClick={() => scrollToSection('portfolio')}
                variant="secondary"
                size="lg"
                className="shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 px-8 py-4 text-lg"
                aria-label="View our website portfolio"
              >
                View Portfolio
              </Button>
            </div>

            {/* Trust Stats - Better Mobile Layout */}
            <div className="grid grid-cols-3 items-center justify-center gap-4 sm:gap-8 pt-8 border-t border-slate-200/80 max-w-2xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      <div className="text-xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent font-secondary">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-500 font-bold font-primary uppercase tracking-widest leading-none">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
