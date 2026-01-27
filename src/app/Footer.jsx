'use client';

import Button from '@/components/ui/Button';
import { ArrowRight, Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

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
      className="bg-gray-950 text-gray-100 mt-24 border-t border-gray-800 relative overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" aria-hidden="true"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Brand Column - Enhanced */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
                  <img
                    src="/logo.svg"
                    alt="StudioVyn Logo"
                    className="relative w-14 h-14 rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                    width="56"
                    height="56"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-secondary bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    StudioVyn
                  </h3>
                  <p className="text-xs text-gray-300 font-primary mt-1 font-medium">Premium Web Development</p>
                </div>
              </div>
              <p className="text-sm font-primary leading-relaxed text-gray-200 mb-8 max-w-md">
                India's leading web development agency. We build high-performance websites and digital solutions that drive real business results. Serving clients across India with excellence.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+918529747613"
                  className="flex items-center gap-3 text-sm text-gray-200 hover:text-white transition-colors font-primary group"
                  aria-label="Call StudioVyn at +91 8529747613"
                >
                  <div className="w-11 h-11 rounded-xl bg-gray-800/80 border border-gray-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-200">
                    <Phone className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-semibold text-gray-100">+91 8529747613</span>
                </a>
                <a
                  href="mailto:tech@studiovyn.in"
                  className="flex items-center gap-3 text-sm text-gray-200 hover:text-white transition-colors font-primary group"
                  aria-label="Email StudioVyn at tech@studiovyn.in"
                >
                  <div className="w-11 h-11 rounded-xl bg-gray-800/80 border border-gray-700 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-500 transition-all duration-200">
                    <Mail className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-semibold text-gray-100">tech@studiovyn.in</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-gray-200 font-primary">
                  <div className="w-11 h-11 rounded-xl bg-gray-800/80 border border-gray-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-gray-300" />
                  </div>
                  <span className="font-medium text-gray-100 pt-2">Delhi NCR, India</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-xs text-gray-300 font-semibold uppercase tracking-wider mb-4 font-primary">Follow Us</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-11 h-11 rounded-xl bg-gray-800/80 border border-gray-700 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:border-transparent flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg group"
                      >
                        <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-white font-bold mb-6 font-secondary text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <a
                      href={service.href}
                      className="text-sm text-gray-200 hover:text-white transition-colors font-primary inline-flex items-center gap-2 group"
                    >
                      <span>{service.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white font-bold mb-6 font-secondary text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-200 hover:text-white transition-colors font-primary inline-flex items-center gap-2 group"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Column */}
            <div>
              <h4 className="text-white font-bold mb-6 font-secondary text-sm uppercase tracking-wider">Get Started</h4>
              <p className="text-sm text-gray-200 font-primary mb-6 leading-relaxed">
                Ready to transform your digital presence? Let's build something amazing together.
              </p>
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="w-full mb-8 shadow-xl hover:shadow-2xl"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Start a Project
              </Button>

              {/* Newsletter Signup */}
              <div className="pt-6 border-t border-gray-800">
                <p className="text-xs text-gray-300 font-semibold uppercase tracking-wider mb-2 font-primary">Newsletter</p>
                <p className="text-xs text-gray-200 font-primary mb-4 leading-relaxed">
                  Get web development tips and insights delivered to your inbox.
                </p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 bg-gray-800/80 border border-gray-700 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 font-primary"
                    aria-label="Email address for newsletter"
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    size="sm"
                    className="w-full"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Premium Design */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-sm text-gray-200 font-primary">
                © {currentYear} StudioVyn. All rights reserved.
              </p>
              <div className="flex items-center gap-4 md:gap-6">
                {resources.map((item, index) => (
                  <span key={item.href} className="flex items-center gap-4">
                    <a
                      href={item.href}
                      className="text-xs text-gray-300 hover:text-white transition-colors font-primary"
                    >
                      {item.label}
                    </a>
                    {index < resources.length - 1 && (
                      <span className="text-gray-700" aria-hidden="true">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></div>
              <p className="text-xs text-gray-200 font-primary">
                Made with <span className="text-red-400">❤️</span> in India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


