'use client';

import Button from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
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
          ? 'bg-[#0b0d12]/90 backdrop-blur-md shadow-md border-b border-[#1f2937]'
          : 'bg-[#0b0d12]/70 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-24 lg:h-32">
          {/* Logo - Premium Integration */}
          <a
            href="/"
            className="flex items-center space-x-3 group"
            aria-label="StudioVyn - Website Development Company India Home"
          >
            <div className="relative flex items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-[#2dd4bf] rounded-xl opacity-0 group-hover:opacity-15 blur-sm transition-opacity duration-300"></div>
              <span className="relative text-xl sm:text-2xl lg:text-3xl font-secondary font-bold tracking-tight text-white">
                StudioVyn
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium font-primary text-sm transition-all duration-200 ${
                  link.isActive
                    ? 'text-[#e5e7eb] bg-[#121723] border border-[#1f2937]'
                    : 'text-[#cbd5f5] hover:text-white hover:bg-[#121723]'
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
              className="shadow-md hover:shadow-lg"
              aria-label="Get free website development consultation"
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#121723] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)]"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-white" aria-hidden="true" />
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
          <div className="flex flex-col space-y-2 pt-4 border-t border-[#1f2937]">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-3 rounded-xl font-medium font-primary text-base transition-colors ${
                  link.isActive
                    ? 'text-[#e5e7eb] bg-[#121723] border border-[#1f2937]'
                    : 'text-[#cbd5f5] hover:text-white hover:bg-[#121723]'
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
