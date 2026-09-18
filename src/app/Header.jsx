'use client';

import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navigationLinks = [
    { id: 'home', label: 'Home', href: '/', isActive: pathname === '/' },
    {
      id: 'services',
      label: 'Services',
      href: '/services',
      isActive: pathname?.startsWith('/services'),
    },
    {
      id: 'about',
      label: 'About',
      href: '/about',
      isActive: pathname === '/about',
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      href: '/portfolio',
      isActive: pathname === '/portfolio',
    },
    {
      id: 'blog',
      label: 'Blog',
      href: '/blog',
      isActive: pathname?.startsWith('/blog'),
    },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed w-full top-0 z-[1030] transition-all duration-300 ${
        isScrolled
          ? 'glass-nav-scrolled'
          : 'glass-nav'
      }`}
      role="banner"
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            aria-label="StudioVyn - Website Development Company India Home"
          >
            <Logo variant="dark" size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium font-primary text-sm transition-all duration-200 ${
                  link.isActive
                    ? 'text-[#2563EB] bg-[#EFF6FF] border border-[#DBEAFE]'
                    : 'text-[#64748B] hover:text-[#2563EB] hover:bg-[#EFF6FF]/60'
                }`}
                aria-label={`Navigate to ${link.label}`}
                aria-current={link.isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA - Consolidated to single primary action */}
          <div className="hidden lg:flex items-center">
            <Button
              href="/contact"
              size="md"
              className="shadow-md hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="Get free website development consultation"
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[600px] opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200/60 mt-2 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/60">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-3 rounded-xl font-medium font-primary text-base transition-colors ${
                  link.isActive
                    ? 'text-blue-600 bg-blue-50 border border-blue-200'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
                }`}
                aria-label={`Navigate to ${link.label}`}
                aria-current={link.isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 px-2">
              <Button
                href="/contact"
                fullWidth
                size="lg"
                className="shadow-md"
                aria-label="Get free website development consultation"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
