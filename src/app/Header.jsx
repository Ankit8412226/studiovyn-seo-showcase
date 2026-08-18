'use client';

import { ArrowRight, ChevronRight, Menu, Phone, Sparkles, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'Work', href: '/portfolio', active: pathname === '/portfolio' },
    { label: 'Services', href: '/services', active: pathname?.startsWith('/services') },
    { label: 'Case Studies', href: '/case-studies', active: pathname?.startsWith('/case-studies') },
    { label: 'Locations', href: '/locations', active: pathname?.startsWith('/locations') },
    { label: 'Insights', href: '/blog', active: pathname?.startsWith('/blog') },
    { label: 'About', href: '/about', active: pathname === '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#07090e]/90 to-transparent py-5'
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        
        {/* LOGO - High Contrast & 100% Visible */}
        <Link href="/" className="flex items-center gap-3 group relative z-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10b981] to-[#06b6d4] p-[1px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all">
            <div className="w-full h-full bg-[#0d121d] rounded-[11px] flex items-center justify-center font-secondary font-black text-lg text-white group-hover:bg-transparent transition-colors">
              SV
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-secondary text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center gap-1">
              Studio<span className="text-[#34d399]">Vyn</span>
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase hidden sm:block">
              Digital Product Studio
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0d121d]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                item.active
                  ? 'bg-[#10b981] text-black font-semibold shadow-md shadow-emerald-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+918529747613"
            className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors border border-white/10 px-3 py-2 rounded-full bg-white/5"
          >
            <Phone className="w-3.5 h-3.5 text-[#34d399]" />
            <span>+91 8529747613</span>
          </a>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-secondary text-sm font-bold text-black bg-[#34d399] hover:bg-[#10b981] shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-[#0d121d] border border-white/10 text-slate-200 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-[#07090e]/95 backdrop-blur-2xl border-b border-white/10 p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                  item.active
                    ? 'bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/30'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+918529747613"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-slate-200"
            >
              <Phone className="w-4 h-4 text-[#34d399]" />
              <span>Call: +91 8529747613</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#34d399] text-black font-secondary font-bold text-base shadow-lg shadow-emerald-500/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start a Project Now</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
