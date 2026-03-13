'use client';

import Button from '@/components/ui/Button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { ArrowRight, Award, CheckCircle2, Sparkles, TrendingUp, Users } from 'lucide-react';
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
      className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,#1a2235,transparent_55%),radial-gradient(circle_at_bottom_right,#0f172a,transparent_55%)] pt-36 pb-16 lg:pt-48 lg:pb-20"
      role="banner"
      aria-label="Hero section introducing StudioVyn web development services"
    >
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 right-0 w-96 h-96 bg-[#1f3b8a]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#2dd4bf]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b26_1px,transparent_1px),linear-gradient(to_bottom,#1e293b26_1px,transparent_1px)] bg-[size:28px_28px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div
              className={`text-center lg:text-left space-y-6 lg:space-y-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Professional Badge */}
              <div className="inline-flex items-center space-x-2 bg-[#121723] text-[#e5e7eb] px-4 py-2 lg:px-6 lg:py-3 rounded-full font-semibold text-xs lg:text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-[#1f2937]">
                <Sparkles className="w-3 h-3 lg:w-4 h-4" aria-hidden="true" />
                <span>StudioVyn — Performance-First Web Development Agency</span>
              </div>

              {/* Main Heading - Professional Typography */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-secondary leading-[1.05] tracking-tight text-white">
                Build a Website Brand That{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#10b981] via-[#2dd4bf] to-[#84cc16] bg-clip-text text-transparent">
                    Ranks & Converts
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#10b981]/30 via-[#2dd4bf]/30 to-[#84cc16]/30 opacity-70 blur-xl"></span>
                </span>
              </h1>

              {/* Subheading - Strong Value Proposition */}
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#cbd5f5] max-w-2xl mx-auto lg:mx-0 font-primary leading-relaxed font-medium">
                StudioVyn builds high-performance websites and AI-ready experiences for brands across India.
                <span className="font-bold text-white"> Faster pages, stronger rankings, and measurable growth.</span>
              </p>

              {/* Key Benefits - Mobile Optimized */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-4 pt-2">
                <div className="flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-[#121723] rounded-full border border-[#1f2937] shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs lg:text-sm font-semibold text-emerald-300 font-primary">2-6 Week Delivery</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-[#121723] rounded-full border border-[#1f2937] shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span className="text-xs lg:text-sm font-semibold text-emerald-200 font-primary">SEO + AI Search Ready</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                  className="group shadow-2xl hover:shadow-[#10b981]/30 hover:scale-[1.02] transition-all duration-300 px-8 py-4 text-lg"
                  aria-label="Get free website development consultation"
                >
                  Get Free Consultation
                </Button>
                <Button
                  onClick={() => scrollToSection('portfolio')}
                  variant="secondary"
                  size="lg"
                  className="shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 px-8 py-4 text-lg"
                  aria-label="View our website portfolio"
                >
                  View Portfolio
                </Button>
              </div>

              {/* Trust Stats - Better Mobile Layout */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-10 pt-8 border-t border-[#1f2937]">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center lg:text-left group min-w-[100px] sm:min-w-[120px]">
                      <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#cbd5f5]" />
                        <div className="text-xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#10b981] via-[#2dd4bf] to-[#84cc16] bg-clip-text text-transparent font-secondary">
                          {stat.value}
                        </div>
                      </div>
                      <div className="text-[9px] lg:text-xs text-[#94a3b8] font-bold font-primary uppercase tracking-widest leading-none">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Premium Visual Showcase (Simplified for Mobile) */}
            <div className="relative mt-12 lg:mt-0">
               {/* Mobile Showcase Backdrop */}
               <div className="absolute inset-x-0 -top-10 bottom-0 bg-[#1f2937] rounded-3xl blur-3xl lg:hidden"></div>

               <div className="relative max-w-[500px] lg:max-w-none mx-auto lg:mx-0">
                  {/* Floating Elements - Adjusted for Responsiveness */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 lg:border-8 border-[#1f2937] bg-[#121723]">
                    <OptimizedImage
                      src="/web_development_premium_1769518207985.png"
                      alt="Modern web development dashboard and code"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      priority
                    />

                    {/* Floating Rating Badge */}
                    <div className="absolute top-4 right-4 bg-[#0f1320]/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-[#1f2937]">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-sm font-extrabold text-emerald-200 font-secondary text-center">4.9/5.0</div>
                    </div>
                  </div>

                  {/* Floating Service Cards - Now responsive and won't overflow */}

               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
