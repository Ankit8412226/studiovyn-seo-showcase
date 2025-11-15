'use client';

import { ArrowRight, Code2, Palette, Smartphone, Zap, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible] = useState(true);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    'React & Next.js Development',
    'Mobile-First Design',
    'SEO Optimized',
    'Fast Performance',
  ];

  const services = [
    {
      icon: Code2,
      title: 'Custom Development',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Performance',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 sm:pt-32 pb-16 sm:pb-20"
      role="banner"
      aria-label="Hero section introducing StudioVyn web development services"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`text-center lg:text-left space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg">
              <Zap className="w-4 h-4" aria-hidden="true" />
              <span>India's Leading Website Development Company</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-secondary leading-tight tracking-tight">
              Best Website Development Company in{' '}
              <span className="gradient-text font-extrabold">India</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-primary leading-relaxed">
              Transform your business with <span className="font-semibold text-gray-900">professional website development</span> services across India. Serving <span className="font-semibold text-gray-900">Delhi NCR, Kolkata, Bihar</span> & all of India.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary inline-flex items-center justify-center space-x-2 text-base sm:text-lg group px-8 py-4 shadow-lg hover:shadow-2xl"
                aria-label="Get free website development consultation"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="btn-secondary inline-flex items-center justify-center text-base sm:text-lg px-8 py-4 shadow-md hover:shadow-xl"
                aria-label="View our website portfolio"
              >
                View Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center lg:text-left">
                <div className="text-4xl sm:text-5xl font-extrabold gradient-text font-secondary">150+</div>
                <div className="text-sm text-gray-600 font-medium">Projects</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center lg:text-left">
                <div className="text-4xl sm:text-5xl font-extrabold gradient-text font-secondary">98%</div>
                <div className="text-sm text-gray-600 font-medium">Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center lg:text-left">
                <div className="text-4xl sm:text-5xl font-extrabold gradient-text font-secondary">3+</div>
                <div className="text-sm text-gray-600 font-medium">Years</div>
              </div>
            </div>
          </div>

          {/* Right Content - Services Grid */}
          <div className="relative">
            {/* Main Service Grid */}
            <div className="grid grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

                    <div className="relative">
                      {/* Icon */}
                      <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold font-secondary text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})` }}>
                        {service.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Floating Trust Badges */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl px-6 py-4 shadow-2xl border-2 border-blue-200 transform rotate-3 hidden lg:block">
              <div className="flex items-center gap-2 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <div className="text-2xl font-extrabold text-blue-600">4.9/5.0</div>
              <div className="text-xs text-gray-600 font-medium">Client Rating</div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-6 py-4 shadow-2xl border-2 border-purple-200 transform -rotate-3 hidden lg:block">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-6 h-6 text-purple-600 fill-current" />
              </div>
              <div className="text-2xl font-extrabold text-purple-600">2-6 Weeks</div>
              <div className="text-xs text-gray-600 font-medium">Fast Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
