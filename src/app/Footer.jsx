'use client';

import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'Web & SaaS Development', href: '/services/web-development' },
    { label: 'E-Commerce Solutions', href: '/services/e-commerce' },
    { label: 'Mobile App Development', href: '/services/mobile-app-development' },
    { label: 'UI/UX Design Systems', href: '/services/ui-ux-design' },
    { label: 'Backend Architecture & APIs', href: '/services/backend-development' },
    { label: 'Technical SEO & Digital Marketing', href: '/services/digital-marketing' },
  ];

  const topLocations = [
    { label: 'Web Development in Patna', href: '/locations/patna' },
    { label: 'Web Development in Delhi NCR', href: '/locations/delhi-ncr' },
    { label: 'Web Development in Kolkata', href: '/locations/kolkata' },
    { label: 'Web Development in Bangalore', href: '/locations/bangalore' },
    { label: 'Web Development in Mumbai', href: '/locations/mumbai' },
    { label: 'All 23+ City SEO Locations →', href: '/locations' },
  ];

  const company = [
    { label: 'About StudioVyn', href: '/about' },
    { label: 'Portfolio & Client Work', href: '/portfolio' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Journal & Insights', href: '/blog' },
    { label: 'Client Testimonials', href: '/testimonials' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer
      className="bg-[#05070a] text-slate-300 border-t border-white/10 pt-20 pb-12"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-white/10">
          
          {/* BRAND COLUMN — 4 COLS */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10b981] to-[#06b6d4] p-[1px]">
                <div className="w-full h-full bg-[#0d121d] rounded-[11px] flex items-center justify-center font-secondary font-black text-lg text-white">
                  SV
                </div>
              </div>
              <span className="font-secondary text-2xl font-black text-white tracking-tight">
                Studio<span className="text-[#34d399]">Vyn</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-primary max-w-sm">
              India's premier performance digital product studio. We build high-speed websites, mobile apps, e-commerce stores, and technical SEO platforms engineered for real revenue growth.
            </p>

            <div className="flex flex-col gap-3 text-xs text-slate-300 font-mono">
              <a href="tel:+918529747613" className="flex items-center gap-2 hover:text-[#34d399] transition-colors">
                <Phone className="w-4 h-4 text-[#34d399]" />
                <span>+91 8529747613</span>
              </a>
              <a href="mailto:tech@studiovyn.in" className="flex items-center gap-2 hover:text-[#34d399] transition-colors">
                <Mail className="w-4 h-4 text-[#34d399]" />
                <span>tech@studiovyn.in</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Delhi NCR, Bihar, Kolkata & PAN India</span>
              </div>
            </div>
          </div>

          {/* SERVICES — 3 COLS */}
          <div className="lg:col-span-3">
            <h4 className="font-secondary text-xs font-bold text-white uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-xs">
              {services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-slate-400 hover:text-[#34d399] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LOCATIONS — 3 COLS */}
          <div className="lg:col-span-3">
            <h4 className="font-secondary text-xs font-bold text-white uppercase tracking-wider mb-5">
              Popular Locations
            </h4>
            <ul className="space-y-3 text-xs">
              {topLocations.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-slate-400 hover:text-[#34d399] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY — 2 COLS */}
          <div className="lg:col-span-2">
            <h4 className="font-secondary text-xs font-bold text-white uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-xs">
              {company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-slate-400 hover:text-[#34d399] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {currentYear} StudioVyn Digital Agency. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">
              Sitemap XML
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
