'use client';

import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, Users, Award, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import OptimizedImage from '@/components/ui/OptimizedImage';

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
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 pt-32 pb-20"
      role="banner"
      aria-label="Hero section introducing StudioVyn web development services"
    >
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Gradient Mesh */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-purple-100/20"></div>

        {/* Animated Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '4s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div
              className={`text-center lg:text-left space-y-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Premium Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>India's Leading Website Development Company</span>
              </div>

              {/* Main Heading - Premium Typography */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-secondary leading-[1.05] tracking-tight text-gray-900">
                Build Websites That{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Convert & Scale
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 opacity-30 blur-xl"></span>
                </span>
              </h1>

              {/* Subheading - Strong Value Proposition */}
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 max-w-2xl mx-auto lg:mx-0 font-primary leading-relaxed font-medium">
                We're India's leading web development agency. We build{' '}
                <span className="font-bold text-gray-900">high-performance websites</span> that{' '}
                <span className="font-bold text-gray-900">drive real business results</span> — 150+ successful projects, 98% client satisfaction.
              </p>

              {/* Key Benefits */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold text-green-700 font-primary">2-6 Week Delivery</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-700 font-primary">SEO Optimized</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full border border-purple-200">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-700 font-primary">24/7 Support</span>
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-700 group hover:bg-white/50 p-3 rounded-lg transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold font-primary">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                  className="group shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
                  aria-label="Get free website development consultation"
                >
                  Get Free Consultation
                </Button>
                <Button
                  onClick={() => scrollToSection('portfolio')}
                  variant="secondary"
                  size="lg"
                  className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  aria-label="View our website portfolio"
                >
                  View Portfolio
                </Button>
              </div>

              {/* Trust Stats - Premium Design */}
              <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-gray-200/50">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center lg:text-left group">
                      <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-secondary">
                          {stat.value}
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-semibold font-primary uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Premium Visual Showcase */}
            <div className="relative hidden lg:block">
              {/* Main Hero Image Container */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl transform rotate-6"></div>

                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
                    alt="Modern web development dashboard and code"
                    width={600}
                    height={700}
                    className="w-full h-auto"
                    priority
                    objectFit="cover"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/50">
                    <div className="flex items-center gap-2 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-xl font-extrabold text-blue-600 font-secondary">4.9/5.0</div>
                    <div className="text-xs text-gray-600 font-medium font-primary">Client Rating</div>
                  </div>
                </div>

                {/* Floating Service Cards */}
                <div className="absolute -bottom-8 -left-8 grid grid-cols-2 gap-4 w-64">
                  {[
                    { title: 'Web Dev', gradient: 'from-blue-500 to-cyan-500' },
                    { title: 'Mobile', gradient: 'from-purple-500 to-pink-500' },
                  ].map((service, index) => (
                    <Card
                      key={index}
                      variant="elevated"
                      padding="sm"
                      className="group relative overflow-hidden backdrop-blur-sm bg-white/95 border border-white/50 shadow-xl hover:scale-105 transition-transform duration-300"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />
                      <div className="relative">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-2 shadow-md`}
                        >
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-sm font-bold font-secondary text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
