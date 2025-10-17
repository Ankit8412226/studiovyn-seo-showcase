'use client';

import { Code, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navigationLinks = [
    { id: 'home', label: 'Home', ariaLabel: 'Navigate to home section', href: '/' },
    { id: 'services', label: 'Services', ariaLabel: 'Navigate to services section', href: '/services' },
    { id: 'about', label: 'About', ariaLabel: 'Navigate to about page', href: '/about' },
    { id: 'portfolio', label: 'Portfolio', ariaLabel: 'Navigate to portfolio page', href: '/portfolio' },
    { id: 'blog', label: 'Blog', ariaLabel: 'Navigate to blog index', href: '/blog' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-md"
              aria-hidden="true"
            >
              <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold font-secondary gradient-text">
              StudioVyn
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => {
              if (link.href?.startsWith('/')) {
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium font-primary text-base"
                    aria-label={link.ariaLabel}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium font-primary text-base"
                  aria-label={link.ariaLabel}
                >
                  {link.label}
                </button>
              );
            })}
            <a
              href="/contact"
              className="btn-primary"
              aria-label="Navigate to contact page"
            >
              Request Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden mt-4 pb-4 animate-fade-in-up"
          >
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => {
                if (link.href?.startsWith('/')) {
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left py-2 px-4 rounded-lg hover:bg-gray-50 font-primary"
                      aria-label={link.ariaLabel}
                    >
                      {link.label}
                    </a>
                  );
                }
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left py-2 px-4 rounded-lg hover:bg-gray-50 font-primary"
                    aria-label={link.ariaLabel}
                  >
                    {link.label}
                  </button>
                );
              })}
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-center"
                aria-label="Navigate to contact section"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
