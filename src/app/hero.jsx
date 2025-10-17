'use client';

import { ArrowRight, Code2, Palette, Smartphone, Zap } from 'lucide-react';
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
    {
      icon: Code2,
      title: 'Custom Development',
      description: 'Tailored web solutions built with cutting-edge technologies',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Stunning UI/UX designs that captivate and convert',
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Responsive designs that work flawlessly on all devices',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimized solutions for lightning-fast load times',
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 sm:pt-20 pb-12 sm:pb-16 mt-8"
      role="banner"
      aria-label="Hero section introducing StudioVyn web development services"
    >
      {/* Minimal subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 font-medium text-sm">
              <Zap className="w-4 h-4" aria-hidden="true" />
              <span>Professional Web Development Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-secondary mb-6 leading-tight">
              Transform Your{' '}
              <span className="gradient-text">Digital Presence</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-primary leading-relaxed">
              Elevate your business with custom web development, innovative design, and powerful digital solutions. We bring your vision to life with expert craftsmanship and cutting-edge technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary inline-flex items-center justify-center space-x-2 text-base sm:text-lg group w-full sm:w-auto"
                aria-label="Get started with StudioVyn services"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="btn-secondary inline-flex items-center justify-center text-base sm:text-lg w-full sm:w-auto"
                aria-label="View StudioVyn portfolio"
              >
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold gradient-text font-secondary">150+</div>
                <div className="text-sm sm:text-base text-gray-600 font-primary">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold gradient-text font-secondary">98%</div>
                <div className="text-sm sm:text-base text-gray-600 font-primary">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-bold gradient-text font-secondary">3+</div>
              <div className="text-sm sm:text-base text-gray-600 font-primary">Years in Market</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards only */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6`}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold font-secondary mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-primary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subtle single-site animation: fade-in on load applied via body */}
      </div>
    </section>
  );
};

export default Hero;
