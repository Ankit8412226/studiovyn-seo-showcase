'use client';

import Button from '@/components/ui/Button';
import { ArrowRight, Mail, MapPin, Phone, Send } from 'lucide-react';

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
      className="bg-gradient-to-br from-[#0b0d12] via-[#0f1320] to-[#111827] text-[#e5e7eb] mt-24 relative overflow-hidden border-t border-[#1f2937]"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98126_1px,transparent_1px),linear-gradient(to_bottom,#10b98126_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none" aria-hidden="true"></div>

      {/* Accent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10b981]/12 via-transparent to-[#2dd4bf]/12 pointer-events-none" aria-hidden="true"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Section */}
        <div className="py-12 sm:py-16 lg:py-20 border-b border-[#1f2937]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-secondary mb-4 leading-tight sm:leading-tight px-2" style={{ color: '#ffffff !important' }}>
              Ready to Build Something Amazing?
            </h2>
            <p className="text-base sm:text-lg text-[#94a3b8] font-primary mb-8 max-w-2xl mx-auto px-4">
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
            <div className="lg:col-span-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <span className="text-2xl sm:text-3xl font-secondary font-bold tracking-tight text-white">
                  StudioVyn
                </span>
              </div>
              <p className="text-sm font-primary leading-relaxed text-[#94a3b8] mb-8 max-w-sm mx-auto md:mx-0">
                India's leading web development agency. We build high-performance websites and digital solutions that drive real business results.
              </p>


            </div>

            {/* Services Column - Spans 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="font-bold mb-6 font-secondary text-sm uppercase tracking-wider" style={{ color: '#ffffff' }}>Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <a
                      href={service.href}
                      className="text-sm text-[#94a3b8] hover:text-white transition-colors font-primary inline-flex items-center gap-2 group"
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
                      className="text-sm text-[#94a3b8] hover:text-white transition-colors font-primary inline-flex items-center gap-2 group"
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
                  className="flex items-center gap-3 text-sm text-[#94a3b8] hover:text-white transition-colors font-primary group"
                  aria-label="Call StudioVyn at +91 8529747613"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#121723] border-2 border-[#1f2937] flex items-center justify-center group-hover:bg-[#1a2235] group-hover:border-[#263045] transition-all duration-200">
                    <Phone className="w-4 h-4 text-[#cbd5f5] group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-semibold text-white">+91 8529747613</span>
                </a>
                <a
                  href="mailto:tech@studiovyn.in"
                  className="flex items-center gap-3 text-sm text-[#94a3b8] hover:text-white transition-colors font-primary group"
                  aria-label="Email StudioVyn at tech@studiovyn.in"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#121723] border-2 border-[#1f2937] flex items-center justify-center group-hover:bg-[#1a2235] group-hover:border-[#263045] transition-all duration-200">
                    <Mail className="w-4 h-4 text-[#cbd5f5] group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-semibold text-white">tech@studiovyn.in</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-[#94a3b8] font-primary">
                  <div className="w-10 h-10 rounded-lg bg-[#121723] border-2 border-[#1f2937] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#cbd5f5]" />
                  </div>
                  <span className="font-medium text-white pt-2">Delhi NCR, India</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-[#121723] border-2 border-[#1f2937] rounded-xl p-6">
                <p className="text-sm font-semibold font-primary mb-2" style={{ color: '#ffffff' }}>Newsletter</p>
                <p className="text-xs font-primary mb-4" style={{ color: '#94a3b8' }}>
                  Get web development tips delivered to your inbox.
                </p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2.5 bg-[#0f1320] border-2 border-[#1f2937] rounded-lg text-sm text-white placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-[var(--brand-secondary)] transition-all duration-200 font-primary"
                    aria-label="Email address for newsletter"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-gradient-to-r from-[#10b981] via-[#2dd4bf] to-[#84cc16] border-2 border-[#10b981] text-white rounded-lg hover:opacity-90 transition-all duration-200 flex items-center justify-center"
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
        <div className="border-t border-[#1f2937] py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-sm text-[#94a3b8] font-primary">
                © {currentYear} StudioVyn. All rights reserved.
              </p>
              <div className="flex items-center gap-4 md:gap-6">
                {resources.map((item, index) => (
                  <span key={item.href} className="flex items-center gap-4">
                    <a
                      href={item.href}
                      className="text-xs text-[#94a3b8] hover:text-white transition-colors font-primary"
                    >
                      {item.label}
                    </a>
                    {index < resources.length - 1 && (
                      <span className="text-[#334155]" aria-hidden="true">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true"></div>
              <p className="text-xs text-[#94a3b8] font-primary">
                Made with <span className="text-red-400">❤️</span> in India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
