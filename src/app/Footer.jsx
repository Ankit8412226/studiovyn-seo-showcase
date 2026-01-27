'use client';

import Button from '@/components/ui/Button';
import { ArrowRight, Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Mobile App Development', href: '/services/mobile-app-development' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
    { label: 'E-Commerce', href: '/services/e-commerce' },
    { label: 'Backend Development', href: '/services/backend-development' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
  ];

  const company = [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Testimonials', href: '/testimonials' },
  ];

  const resources = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Offers', href: '/offers' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer
      className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white mt-24 relative overflow-hidden border-t border-blue-900/20"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none" aria-hidden="true"></div>

      {/* Accent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 via-transparent to-teal-900/5 pointer-events-none" aria-hidden="true"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Section */}
        <div className="py-16 lg:py-20 border-b border-blue-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-secondary mb-4" style={{ color: '#ffffff !important' }}>
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-blue-100 font-primary mb-8 max-w-2xl mx-auto">
              Let's transform your digital presence with a high-performance website that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Start Your Project
              </Button>
              <Button
                href="/portfolio"
                variant="secondary"
                size="lg"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column - Spans 4 columns */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/logo.jpeg"
                  alt="StudioVyn Logo"
                  className="w-12 h-12 rounded-xl"
                  width="48"
                  height="48"
                />
                <div>
                  <h3 className="text-xl font-bold font-secondary bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    StudioVyn
                  </h3>
                  <p className="text-xs font-primary font-medium" style={{ color: '#93c5fd' }}>Web Development Excellence</p>
                </div>
              </div>
              <p className="text-sm font-primary leading-relaxed text-blue-100 mb-8">
                India's leading web development agency. We build high-performance websites and digital solutions that drive real business results.
              </p>

              {/* Social Media */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-4 font-primary" style={{ color: '#93c5fd' }}>Connect With Us</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-lg bg-blue-900/30 border-2 border-blue-800/50 hover:bg-blue-800 hover:border-blue-700 flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                      >
                        <Icon className="w-4 h-4 text-blue-200 group-hover:text-white transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Services Column - Spans 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="font-bold mb-6 font-secondary text-sm uppercase tracking-wider" style={{ color: '#ffffff' }}>Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <a
                      href={service.href}
                      className="text-sm text-blue-100 hover:text-white transition-colors font-primary inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      <span>{service.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column - Spans 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="font-bold mb-6 font-secondary text-sm uppercase tracking-wider" style={{ color: '#ffffff' }}>Company</h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-blue-100 hover:text-white transition-colors font-primary inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column - Spans 4 columns */}
            <div className="lg:col-span-4">
              <h4 className="font-bold mb-6 font-secondary text-sm uppercase tracking-wider" style={{ color: '#ffffff' }}>Get In Touch</h4>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+918529747613"
                  className="flex items-center gap-3 text-sm text-blue-100 hover:text-white transition-colors font-primary group"
                  aria-label="Call StudioVyn at +91 8529747613"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-900/30 border-2 border-blue-800/50 flex items-center justify-center group-hover:bg-blue-800 group-hover:border-blue-700 transition-all duration-200">
                    <Phone className="w-4 h-4 text-blue-200 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-semibold text-white">+91 8529747613</span>
                </a>
                <a
                  href="mailto:tech@studiovyn.in"
                  className="flex items-center gap-3 text-sm text-blue-100 hover:text-white transition-colors font-primary group"
                  aria-label="Email StudioVyn at tech@studiovyn.in"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-900/30 border-2 border-blue-800/50 flex items-center justify-center group-hover:bg-blue-800 group-hover:border-blue-700 transition-all duration-200">
                    <Mail className="w-4 h-4 text-blue-200 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-semibold text-white">tech@studiovyn.in</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-blue-100 font-primary">
                  <div className="w-10 h-10 rounded-lg bg-blue-900/30 border-2 border-blue-800/50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-blue-200" />
                  </div>
                  <span className="font-medium text-white pt-2">Delhi NCR, India</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-900/20 border-2 border-blue-800/40 rounded-xl p-6">
                <p className="text-sm font-semibold font-primary mb-2" style={{ color: '#ffffff' }}>Newsletter</p>
                <p className="text-xs font-primary mb-4" style={{ color: '#bfdbfe' }}>
                  Get web development tips delivered to your inbox.
                </p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2.5 bg-blue-950/50 border-2 border-blue-800/50 rounded-lg text-sm text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-200 font-primary"
                    aria-label="Email address for newsletter"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-blue-800 border-2 border-blue-800 text-white rounded-lg hover:bg-blue-900 hover:border-blue-900 transition-all duration-200 flex items-center justify-center"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800/30 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-sm text-blue-200 font-primary">
                © {currentYear} StudioVyn. All rights reserved.
              </p>
              <div className="flex items-center gap-4 md:gap-6">
                {resources.map((item, index) => (
                  <span key={item.href} className="flex items-center gap-4">
                    <a
                      href={item.href}
                      className="text-xs text-blue-300 hover:text-white transition-colors font-primary"
                    >
                      {item.label}
                    </a>
                    {index < resources.length - 1 && (
                      <span className="text-blue-800" aria-hidden="true">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true"></div>
              <p className="text-xs text-blue-200 font-primary">
                Made with <span className="text-red-400">❤️</span> in India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

