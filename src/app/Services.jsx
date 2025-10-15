'use client';

import {
  ArrowRight,
  Check,
  Code2,
  Database,
  Globe,
  Palette,
  ShoppingCart,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  X,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      shortDescription: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js for optimal performance and scalability.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure & Scalable'],
      color: 'from-blue-500 to-cyan-500',
      seoContent: {
        heading: 'Professional Web Development Services',
        intro: 'Transform your digital presence with custom web development solutions that drive results. Our expert team specializes in creating high-performance, scalable websites and web applications using cutting-edge technologies.',
        benefits: [
          {
            title: 'Modern Technology Stack',
            description: 'We leverage React, Next.js, Node.js, and TypeScript to build fast, reliable, and maintainable web solutions that scale with your business growth.'
          },
          {
            title: 'Mobile-First Responsive Design',
            description: 'Every website we create is fully responsive and optimized for all devices, ensuring seamless user experience across desktop, tablet, and mobile platforms.'
          },
          {
            title: 'Search Engine Optimization',
            description: 'Built-in SEO best practices including semantic HTML, optimized meta tags, structured data, and performance optimization to improve your search rankings.'
          },
          {
            title: 'Performance Optimization',
            description: 'Lightning-fast load times through code splitting, lazy loading, image optimization, and CDN integration for superior user experience.'
          }
        ],
        process: [
          'Discovery & Strategy - Understanding your business goals and target audience',
          'Design & Prototyping - Creating wireframes and interactive prototypes',
          'Development & Testing - Building with best practices and rigorous QA',
          'Launch & Optimization - Deployment with ongoing performance monitoring'
        ],
        technologies: ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'PostgreSQL', 'MongoDB'],
        stats: [
          { value: '99.9%', label: 'Uptime Guarantee' },
          { value: '<2s', label: 'Average Load Time' },
          { value: '100%', label: 'Mobile Responsive' }
        ]
      }
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      shortDescription: 'Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android devices.',
      features: ['Cross-Platform', 'Native Performance', 'Offline Support', 'Push Notifications'],
      color: 'from-purple-500 to-pink-500',
      seoContent: {
        heading: 'Expert Mobile App Development Solutions',
        intro: 'Build powerful mobile applications that engage users and drive business growth. We create native and cross-platform apps that deliver exceptional performance and user experience on both iOS and Android.',
        benefits: [
          {
            title: 'Cross-Platform Development',
            description: 'Using React Native and Flutter, we build apps that work seamlessly on both iOS and Android, reducing development time and costs while maintaining native performance.'
          },
          {
            title: 'Native Performance',
            description: 'Our apps are optimized for speed and responsiveness, providing smooth animations, quick load times, and efficient resource usage for the best user experience.'
          },
          {
            title: 'Offline Functionality',
            description: 'Implement robust offline support with local data storage, sync capabilities, and graceful error handling to keep your app functional without internet connectivity.'
          },
          {
            title: 'Push Notifications & Real-time Updates',
            description: 'Engage users with targeted push notifications, real-time data synchronization, and instant updates to keep them connected with your app.'
          }
        ],
        process: [
          'Requirement Analysis - Define app goals, features, and target platforms',
          'UI/UX Design - Create intuitive interfaces with platform-specific guidelines',
          'Development & Integration - Build features with API and third-party integrations',
          'Testing & Deployment - Comprehensive testing and App Store/Play Store submission'
        ],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'REST APIs', 'SQLite'],
        stats: [
          { value: '5M+', label: 'Downloads Across Apps' },
          { value: '4.8/5', label: 'Average App Rating' },
          { value: '60%', label: 'Cost Reduction vs Native' }
        ]
      }
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      shortDescription: 'Beautiful, intuitive designs that prioritize user experience and drive engagement with your brand.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Brand Identity'],
      color: 'from-orange-500 to-red-500',
      seoContent: {
        heading: 'Professional UI/UX Design Services',
        intro: 'Create memorable digital experiences with user-centered design that converts visitors into customers. Our design team combines aesthetics with functionality to deliver interfaces that users love.',
        benefits: [
          {
            title: 'User-Centered Design Approach',
            description: 'We conduct thorough user research, create personas, and map user journeys to ensure every design decision is backed by data and user insights.'
          },
          {
            title: 'Conversion-Focused Interfaces',
            description: 'Design with clear calls-to-action, intuitive navigation, and persuasive visual hierarchy that guides users toward desired actions and improves conversion rates.'
          },
          {
            title: 'Brand Identity Development',
            description: 'Establish a strong visual identity with custom logos, color palettes, typography, and design systems that reflect your brand values and resonate with your audience.'
          },
          {
            title: 'Interactive Prototyping',
            description: 'Test and validate designs before development with high-fidelity, interactive prototypes that demonstrate functionality and user flows.'
          }
        ],
        process: [
          'Research & Discovery - User interviews, competitor analysis, and market research',
          'Information Architecture - Site maps, user flows, and content strategy',
          'Visual Design - Mockups, style guides, and design system creation',
          'Testing & Iteration - Usability testing and design refinement'
        ],
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Miro', 'Hotjar', 'UsabilityHub'],
        stats: [
          { value: '40%', label: 'Avg. Conversion Increase' },
          { value: '3x', label: 'Better User Engagement' },
          { value: '95%', label: 'Client Satisfaction' }
        ]
      }
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      shortDescription: 'Complete e-commerce platforms with payment integration, inventory management, and analytics to grow your online business.',
      features: ['Payment Gateway', 'Inventory System', 'Analytics', 'Multi-vendor'],
      color: 'from-green-500 to-emerald-500',
      seoContent: {
        heading: 'Comprehensive E-Commerce Development Services',
        intro: 'Launch and scale your online store with powerful e-commerce solutions built for growth. We create feature-rich platforms that provide seamless shopping experiences and drive sales.',
        benefits: [
          {
            title: 'Secure Payment Processing',
            description: 'Integrate multiple payment gateways including Stripe, PayPal, and regional options with PCI-compliant security, fraud detection, and support for various currencies.'
          },
          {
            title: 'Advanced Inventory Management',
            description: 'Real-time inventory tracking, automated stock alerts, multi-warehouse support, and product variant management to streamline your operations.'
          },
          {
            title: 'Analytics & Business Intelligence',
            description: 'Comprehensive dashboards with sales analytics, customer insights, product performance metrics, and conversion tracking to make data-driven decisions.'
          },
          {
            title: 'Multi-Vendor Marketplace',
            description: 'Build marketplaces with vendor management, commission systems, individual storefronts, and centralized order processing for scalable multi-seller platforms.'
          }
        ],
        process: [
          'Platform Selection - Choose the right tech stack (Shopify, WooCommerce, custom)',
          'Store Setup - Product catalog, categories, and payment gateway integration',
          'Customization - Custom features, themes, and third-party integrations',
          'Launch & Growth - SEO optimization, marketing tools, and ongoing support'
        ],
        technologies: ['Shopify', 'WooCommerce', 'Magento', 'Next.js Commerce', 'Stripe', 'PayPal', 'Mailchimp', 'Google Analytics'],
        stats: [
          { value: '250%', label: 'Avg. ROI in Year 1' },
          { value: '99.99%', label: 'Payment Success Rate' },
          { value: '24/7', label: 'Store Availability' }
        ]
      }
    },
    {
      icon: Database,
      title: 'Backend Development',
      shortDescription: 'Robust backend systems and APIs that power your applications with security, reliability, and performance.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Integration', 'Authentication'],
      color: 'from-indigo-500 to-blue-500',
      seoContent: {
        heading: 'Professional Backend Development Services',
        intro: 'Power your applications with robust, scalable backend infrastructure. We build secure APIs, design efficient databases, and implement cloud solutions that handle millions of requests reliably.',
        benefits: [
          {
            title: 'RESTful & GraphQL APIs',
            description: 'Design and develop well-documented APIs with proper versioning, rate limiting, caching strategies, and comprehensive error handling for seamless frontend integration.'
          },
          {
            title: 'Database Architecture',
            description: 'Optimize database design with proper indexing, query optimization, data modeling, and support for SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) databases.'
          },
          {
            title: 'Cloud Infrastructure',
            description: 'Deploy on AWS, Google Cloud, or Azure with auto-scaling, load balancing, CDN integration, and containerization using Docker and Kubernetes.'
          },
          {
            title: 'Security & Authentication',
            description: 'Implement OAuth 2.0, JWT tokens, role-based access control, data encryption, and security best practices to protect your application and user data.'
          }
        ],
        process: [
          'Architecture Planning - System design, tech stack selection, and scalability planning',
          'API Development - Endpoint creation, documentation, and testing',
          'Database Setup - Schema design, migration, and optimization',
          'Deployment & Monitoring - CI/CD pipelines, logging, and performance monitoring'
        ],
        technologies: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS/GCP/Azure'],
        stats: [
          { value: '10M+', label: 'API Requests/Day' },
          { value: '<100ms', label: 'Average Response Time' },
          { value: '99.95%', label: 'API Uptime' }
        ]
      }
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      shortDescription: 'Strategic digital marketing solutions including SEO, content marketing, and social media to expand your reach.',
      features: ['SEO Strategy', 'Content Marketing', 'Social Media', 'Analytics'],
      color: 'from-yellow-500 to-orange-500',
      seoContent: {
        heading: 'Results-Driven Digital Marketing Services',
        intro: 'Grow your online presence and drive qualified traffic with data-driven digital marketing strategies. We combine SEO, content marketing, and social media expertise to deliver measurable results.',
        benefits: [
          {
            title: 'Search Engine Optimization (SEO)',
            description: 'Comprehensive SEO services including keyword research, on-page optimization, technical SEO, link building, and local SEO to improve your search rankings and organic traffic.'
          },
          {
            title: 'Content Marketing Strategy',
            description: 'Create engaging, SEO-optimized content including blog posts, articles, infographics, and videos that attract your target audience and establish thought leadership.'
          },
          {
            title: 'Social Media Management',
            description: 'Build and engage your community across Facebook, Instagram, LinkedIn, and Twitter with strategic posting, community management, and paid social advertising.'
          },
          {
            title: 'Analytics & Reporting',
            description: 'Track and measure campaign performance with detailed analytics, conversion tracking, A/B testing, and monthly reports with actionable insights.'
          }
        ],
        process: [
          'Audit & Strategy - Current state analysis and goal-setting',
          'Implementation - On-page optimization, content creation, and campaign launch',
          'Optimization - Continuous testing, refinement, and performance improvement',
          'Reporting - Monthly analytics and strategy adjustments'
        ],
        technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Search Console', 'Hootsuite', 'HubSpot', 'Mailchimp', 'Google Ads'],
        stats: [
          { value: '300%', label: 'Avg. Traffic Growth' },
          { value: '4.5x', label: 'ROI on Ad Spend' },
          { value: '85%', label: 'Client Retention Rate' }
        ]
      }
    },
  ];

  return (
    <>
      <section
        id="services"
        className="py-20 sm:py-24 lg:py-32 bg-white relative overflow-hidden"
        aria-label="Our professional services"
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 font-medium text-sm">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>What We Offer</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-secondary mb-6 text-gray-900">
              Our <span className="gradient-text">Services</span>
            </h2>

            <p className="text-lg text-gray-600 font-primary leading-relaxed">
              Comprehensive digital solutions tailored to your business needs. From concept to deployment, we deliver excellence at every step.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-secondary mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-primary mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 font-primary">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* View More Button */}
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center space-x-2 text-blue-600 font-semibold font-primary group-hover:space-x-3 transition-all"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>View More</span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${hoveredIndex === index ? 'translate-x-1' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </article>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 sm:mt-20">
            <p className="text-lg text-gray-600 font-primary mb-6">
              Don't see what you're looking for? We offer custom solutions too!
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary inline-flex items-center space-x-2 text-base sm:text-lg group"
              aria-label="Contact us for custom solutions"
            >
              <span>Get a Custom Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedService.color} p-8 text-white relative`}>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                  <selectedService.icon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-secondary">{selectedService.seoContent.heading}</h2>
                </div>
              </div>

              <p className="text-lg opacity-95 font-primary">
                {selectedService.seoContent.intro}
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {selectedService.seoContent.stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${selectedService.color} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-primary">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="mb-10">
                <div className="flex items-center space-x-2 mb-6">
                  <TrendingUp className={`w-6 h-6 bg-gradient-to-r ${selectedService.color} bg-clip-text text-transparent`} />
                  <h3 className="text-2xl font-bold font-secondary text-gray-900">Key Benefits</h3>
                </div>
                <div className="space-y-6">
                  {selectedService.seoContent.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex space-x-4">
                      <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br ${selectedService.color} rounded-lg flex items-center justify-center mt-1`}>
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-2 font-secondary">{benefit.title}</h4>
                        <p className="text-gray-600 font-primary leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-10">
                <div className="flex items-center space-x-2 mb-6">
                  <Zap className={`w-6 h-6 bg-gradient-to-r ${selectedService.color} bg-clip-text text-transparent`} />
                  <h3 className="text-2xl font-bold font-secondary text-gray-900">Our Process</h3>
                </div>
                <div className="grid gap-4">
                  {selectedService.seoContent.process.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br ${selectedService.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                        {idx + 1}
                      </div>
                      <p className="text-gray-700 font-primary pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Users className={`w-6 h-6 bg-gradient-to-r ${selectedService.color} bg-clip-text text-transparent`} />
                  <h3 className="text-2xl font-bold font-secondary text-gray-900">Technologies We Use</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedService.seoContent.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 bg-gradient-to-r ${selectedService.color} text-white rounded-full text-sm font-semibold font-primary`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <h4 className="text-xl font-bold font-secondary text-gray-900 mb-3">
                  Ready to Get Started?
                </h4>
                <p className="text-gray-600 font-primary mb-4">
                  Let's discuss how our {selectedService.title.toLowerCase()} services can help your business grow.
                </p>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Contact Us Today</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
