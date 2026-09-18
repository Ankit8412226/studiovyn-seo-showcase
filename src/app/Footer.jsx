'use client';

import Logo from '@/components/ui/Logo';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

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

  return (
    <footer
      className="bg-[#0B1E3D] text-[#E2E8F0] relative overflow-hidden border-t border-[#1E3A8A]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column - Spans 4 columns */}
            <div className="lg:col-span-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <Logo variant="light" size="lg" />
              </div>
              <p className="text-sm font-primary leading-relaxed text-[#94A3B8] mb-8 max-w-sm mx-auto md:mx-0">
                India's leading web development agency. We build high-performance websites and digital solutions that drive real business results.
              </p>
            </div>

            {/* Services Column - Spans 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold mb-6 font-secondary text-xs uppercase tracking-wider text-white">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <a
                      href={service.href}
                      className="text-sm text-[#94A3B8] hover:text-white transition-colors font-primary inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#60A5FA] transition-all duration-200" />
                      <span>{service.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column - Spans 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold mb-6 font-secondary text-xs uppercase tracking-wider text-white">Company</h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-[#94A3B8] hover:text-white transition-colors font-primary inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#60A5FA] transition-all duration-200" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column - Spans 4 columns */}
            <div className="lg:col-span-4">
              <h4 className="font-semibold mb-6 font-secondary text-xs uppercase tracking-wider text-white">Get In Touch</h4>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+919771123401"
                  className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-white transition-colors font-primary group"
                  aria-label="Call StudioVyn at +91 9771123401"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0F284E] border border-[#1E3A8A] flex items-center justify-center group-hover:bg-[#2563EB] transition-all duration-200">
                    <Phone className="w-4 h-4 text-[#60A5FA] group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-semibold text-white">+91 9771123401</span>
                </a>
                <a
                  href="mailto:tech@studiovyn.in"
                  className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-white transition-colors font-primary group"
                  aria-label="Email StudioVyn at tech@studiovyn.in"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0F284E] border border-[#1E3A8A] flex items-center justify-center group-hover:bg-[#2563EB] transition-all duration-200">
                    <Mail className="w-4 h-4 text-[#60A5FA] group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-semibold text-white">tech@studiovyn.in</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-[#94A3B8] font-primary">
                  <div className="w-10 h-10 rounded-lg bg-[#0F284E] border border-[#1E3A8A] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#60A5FA]" />
                  </div>
                  <span className="font-medium text-white pt-2">Delhi NCR, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1E3A8A] py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-xs text-[#94A3B8] font-primary">
                © {currentYear} StudioVyn. All rights reserved.
              </p>
              <div className="flex items-center gap-4 md:gap-6">
                {resources.map((item, index) => (
                  <span key={item.href} className="flex items-center gap-4">
                    <a
                      href={item.href}
                      className="text-xs text-[#94A3B8] hover:text-white transition-colors font-primary"
                    >
                      {item.label}
                    </a>
                    {index < resources.length - 1 && (
                      <span className="text-[#1E3A8A]" aria-hidden="true">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#60A5FA] animate-pulse" aria-hidden="true"></div>
              <p className="text-xs text-[#94A3B8] font-primary">
                Engineered in India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
