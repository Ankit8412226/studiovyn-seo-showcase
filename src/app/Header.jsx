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
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-sm'
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-teal-700 rounded-xl opacity-0 group-hover:opacity-10 blur-sm transition-opacity duration-300"></div>
              <img
                src="/logo.jpeg"
                alt="StudioVyn - IT Service Provider"
                className="relative w-auto h-16 lg:h-24 rounded-lg transition-all duration-300 group-hover:scale-105"
              />
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
                    ? 'text-blue-800 bg-blue-50 border border-blue-200'
                    : 'text-gray-700 hover:text-blue-800 hover:bg-gray-50'
                }`}
                aria-label={`Navigate to ${link.label}`}
                aria-current={link.isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium font-primary text-sm transition-colors"
            >
              Contact
            </a>
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
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" aria-hidden="true" />
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
          <div className="flex flex-col space-y-1 pt-4 border-t border-gray-200">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-3 rounded-lg font-medium font-primary text-base transition-colors ${
                  link.isActive
                    ? 'text-blue-800 bg-blue-50 border border-blue-200'
                    : 'text-gray-700 hover:text-blue-800 hover:bg-gray-50'
                }`}
                aria-label={`Navigate to ${link.label}`}
                aria-current={link.isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <a
                href="/contact"
                className="block px-4 py-3 text-center text-gray-700 hover:text-blue-600 font-medium font-primary text-base transition-colors"
              >
                Contact
              </a>
              <Button
                href="/contact"
                fullWidth
                size="md"
                className="mx-4"
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

