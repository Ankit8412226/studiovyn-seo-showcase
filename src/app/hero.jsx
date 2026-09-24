'use client';

import OptimizedImage from '@/components/ui/OptimizedImage';
import {
  ArrowRight,
  Award,
  BarChart3,
  Box,
  Play,
  Rocket,
  TrendingUp,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      value: '150+',
      label: 'Projects Delivered',
      icon: Box,
    },
    {
      value: '50+',
      label: 'Happy Clients',
      icon: Users,
    },
    {
      value: '4.9/5',
      label: 'Client Satisfaction',
      icon: Award,
    },
    {
      value: '3x',
      label: 'Average Business Growth',
      icon: Rocket,
    },
  ];

  const brandLogos = [
    {
      id: 'amazon',
      name: 'amazon',
      render: (
        <div className="flex items-center gap-1.5 group cursor-default">
          <span className="text-xl font-extrabold text-slate-900 tracking-tight font-sans">
            amazon
          </span>
          <svg className="w-5 h-2.5 text-amber-500 fill-current -mt-1" viewBox="0 0 40 16">
            <path d="M2.5 7.5C12.5 14 27.5 14 37.5 2.5c.5-.6 1.5-.1 1.1.7-11.2 13-28.5 13-37.2 5.5-.4-.4 0-1.1 1.1-1.2z" />
            <path d="M38.5 2.5c-.8.8-3.5 1.8-5 1.7-.5 0-.7-.6-.2-.9 2-1.3 4.8-.8 5.2-.8z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'flipkart',
      name: 'Flipkart',
      render: (
        <div className="flex items-center gap-2 group cursor-default">
          <div className="w-7 h-7 rounded-lg bg-[#2874F0] flex items-center justify-center text-white shadow-xs p-1">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current text-[#FFE500]">
              <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm4 10h-3v3h-2v-3H8v-2h3V8h2v3h3v2z" />
            </svg>
          </div>
          <span className="text-xl font-black italic text-[#2874F0] tracking-tight font-sans">
            Flipkart
          </span>
        </div>
      ),
    },
    {
      id: 'meesho',
      name: 'meesho',
      render: (
        <div className="flex items-center gap-2 group cursor-default">
          <div className="w-7 h-7 rounded-full bg-[#E0006C] flex items-center justify-center text-white font-bold text-sm shadow-xs">
            m
          </div>
          <span className="text-xl font-black text-[#E0006C] tracking-tight font-sans">
            meesho
          </span>
        </div>
      ),
    },
    {
      id: 'shopify',
      name: 'shopify',
      render: (
        <div className="flex items-center gap-2 group cursor-default">
          <div className="w-7 h-7 flex items-center justify-center text-[#96BF48]">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#96BF48]">
              <path d="M15.33 3.93c-.1-.08-.24-.09-.34-.03l-1.39.81c-.42-1.3-1.46-2.07-2.85-2.07-1.74 0-3.05 1.33-3.64 3.01l-2.79.86c-.46.14-.52.69-.1.88l1.35.61 2.37 13.3c.06.33.34.57.67.57h6.78c.34 0 .63-.25.68-.59l1.9-12.72c.49-.24.81-.74.81-1.3 0-.58-.33-1.07-.84-1.33zM10.82 4.64c.78 0 1.48.51 1.83 1.28l-2.88.88c.28-.97.97-2.16 1.05-2.16z" />
            </svg>
          </div>
          <span className="text-xl font-black text-[#008060] tracking-tight font-sans">
            shopify
          </span>
        </div>
      ),
    },
    {
      id: 'google-ads',
      name: 'Google Ads',
      render: (
        <div className="flex items-center gap-2 group cursor-default">
          <div className="flex items-center gap-0.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[#4285F4]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#FBBC05] -ml-1.5 ring-2 ring-white" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#34A853] -ml-1.5 ring-2 ring-white" />
          </div>
          <span className="text-lg font-bold text-slate-800 tracking-tight font-sans">
            Google Ads
          </span>
        </div>
      ),
    },
    {
      id: 'meta',
      name: 'Meta',
      render: (
        <div className="flex items-center gap-2 group cursor-default">
          <svg className="w-7 h-5 text-[#0081FB] fill-current" viewBox="0 0 24 16">
            <path d="M16.5 0C13.8 0 12.3 1.8 12 2.2 11.7 1.8 10.2 0 7.5 0 3.3 0 0 3.6 0 8s3.3 8 7.5 8c2.7 0 4.2-1.8 4.5-2.2.3.4 1.8 2.2 4.5 2.2 4.2 0 7.5-3.6 7.5-8s-3.3-8-7.5-8zm-9 13.5C4.7 13.5 2.5 11 2.5 8s2.2-5.5 5-5.5c2.3 0 3.9 1.7 4.4 3.3-.9 1.5-2.1 3.2-3.4 4.8-.4.5-.7.9-1 1.4zm9 0c-.3-.5-.6-.9-1-1.4-1.3-1.6-2.5-3.3-3.4-4.8.5-1.6 2.1-3.3 4.4-3.3 2.8 0 5 2.5 5 5.5s-2.2 5.5-5 5.5z" />
          </svg>
          <span className="text-xl font-black text-[#0064E0] tracking-tight font-sans">
            Meta
          </span>
        </div>
      ),
    },
    {
      id: 'instagram',
      name: 'Instagram',
      render: (
        <div className="flex items-center gap-2 group cursor-default">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center p-1 shadow-xs text-white">
            <svg className="w-full h-full stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-[#DD2A7B] to-[#8134AF] bg-clip-text text-transparent tracking-tight font-sans">
            Instagram
          </span>
        </div>
      ),
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      render: (
        <div className="flex items-center gap-2 group cursor-default">
          <div className="w-7 h-7 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white shadow-xs p-1">
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.66-.74 1.66-1.66a1.66 1.66 0 0 0-1.66-1.66 1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
            </svg>
          </div>
          <span className="text-xl font-black text-[#0A66C2] tracking-tight font-sans">
            LinkedIn
          </span>
        </div>
      ),
    },
  ];

  // Duplicate list to create seamless infinite loop
  const tickerItems = [...brandLogos, ...brandLogos, ...brandLogos];

  const clientAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
  ];

  return (
    <section
      id="home"
      className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-white border-b border-slate-200/80"
      role="banner"
      aria-label="Hero section introducing StudioVyn digital solutions"
    >
      {/* Background Soft Glows & Wave Gradient */}
      <div
        className="absolute top-0 right-0 w-[600px] lg:w-[900px] h-[600px] bg-gradient-to-bl from-blue-100/60 via-indigo-50/40 to-transparent rounded-bl-full pointer-events-none blur-3xl opacity-70"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-purple-100/40 via-blue-50/30 to-transparent rounded-full pointer-events-none blur-3xl opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.35] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 lg:mb-20">
          {/* Left Column: Typography & CTAs */}
          <div
            className={`lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 text-blue-700 text-xs font-bold tracking-widest uppercase shadow-xs">
              <span>BUILD</span>
              <span className="text-blue-400">•</span>
              <span>GROW</span>
              <span className="text-blue-400">•</span>
              <span>SCALE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-normal font-secondary leading-[1.12] tracking-tight text-[#0F172A]">
              Digital Solutions{' '}
              <span className="font-semibold block sm:inline bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                That Drive Real Growth
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#64748B] font-primary leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              We design, develop, and market websites and applications that help businesses grow, get more customers, and stay ahead in the digital world.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold text-sm sm:text-base font-primary shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 hover:-translate-y-0.5 group"
                aria-label="Let's build your project"
              >
                <span>Let's Build Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              <Link
                href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 text-[#0F172A] font-semibold text-sm sm:text-base font-primary shadow-xs hover:border-blue-300 transition-all duration-300 group"
                aria-label="View our portfolio of work"
              >
                <span>View Our Work</span>
                <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" aria-hidden="true" />
                </div>
              </Link>
            </div>

            {/* Social Proof Avatars & Rating */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-100">
              <div className="flex -space-x-2.5 overflow-hidden">
                {clientAvatars.map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt={`Client testimonial ${idx + 1}`}
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-xs"
                    loading="lazy"
                  />
                ))}
              </div>

              <div className="text-center sm:text-left">
                <div className="text-xs font-semibold text-slate-800 font-primary">
                  Trusted by 150+ businesses
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-xs text-amber-500 font-medium">
                  <div className="flex text-amber-400">
                    {'★★★★★'}
                  </div>
                  <span className="text-slate-700 font-bold ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Visual with Floating Glass Cards */}
          <div
            className={`lg:col-span-6 xl:col-span-6 relative transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Subtle Gradient Backplate */}
            <div className="relative mx-auto max-w-[560px] lg:max-w-none">
              {/* Main Laptop Showcase Canvas */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-950/15 border border-slate-200/80 bg-white p-2 sm:p-3">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 border border-slate-800/80">
                  <OptimizedImage
                    src="/hero_laptop_showcase.jpg"
                    alt="Modern Websites and Digital Solutions for Growing Businesses"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
                </div>
              </div>

              {/* Floating Glassmorphism Badge 1 (Top Left): Higher Conversions */}
              <div className="absolute -top-4 -left-2 sm:-left-6 sm:top-2 bg-white/90 backdrop-blur-md border border-white/80 p-3 sm:p-4 rounded-2xl shadow-xl shadow-indigo-950/10 flex flex-col gap-1 min-w-[120px] sm:min-w-[140px] z-20 hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-0.5">
                  <BarChart3 className="w-4 h-4" aria-hidden="true" />
                </div>
                <span className="text-[11px] sm:text-xs font-medium text-slate-500 font-primary">
                  Higher Conversions
                </span>
                <span className="text-base sm:text-lg font-bold text-blue-600 font-primary">
                  +120%
                </span>
              </div>

              {/* Floating Glassmorphism Badge 2 (Bottom Left): More Customers */}
              <div className="absolute bottom-6 -left-3 sm:-left-8 bg-white/90 backdrop-blur-md border border-white/80 p-3 sm:p-4 rounded-2xl shadow-xl shadow-indigo-950/10 flex flex-col gap-1 min-w-[110px] sm:min-w-[130px] z-20 hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-0.5">
                  <Users className="w-4 h-4" aria-hidden="true" />
                </div>
                <span className="text-[11px] sm:text-xs font-medium text-slate-500 font-primary">
                  More Customers
                </span>
                <span className="text-base sm:text-lg font-bold text-indigo-600 font-primary">
                  +3X
                </span>
              </div>

              {/* Floating Glassmorphism Badge 3 (Top Right): Business Growth */}
              <div className="absolute -top-3 -right-2 sm:-right-6 sm:top-2 bg-white/90 backdrop-blur-md border border-white/80 p-3 sm:p-4 rounded-2xl shadow-xl shadow-indigo-950/10 flex flex-col gap-1 min-w-[120px] sm:min-w-[140px] z-20 hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-0.5">
                  <TrendingUp className="w-4 h-4" aria-hidden="true" />
                </div>
                <span className="text-[11px] sm:text-xs font-medium text-slate-500 font-primary">
                  Business Growth
                </span>
                <span className="text-base sm:text-lg font-bold text-purple-600 font-primary">
                  +200%
                </span>
              </div>

              {/* Handwritten Script Annotation */}
              <div className="hidden sm:flex absolute -bottom-6 right-8 items-center gap-2 z-20 pointer-events-none">
                <span className="font-serif italic text-sm font-semibold text-slate-600 tracking-wide transform -rotate-6">
                  From Idea to Impact
                </span>
                <svg
                  className="w-7 h-7 text-indigo-500 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* Animated Brand Logo Ticker (Moving Right to Left)            */}
        {/* ───────────────────────────────────────────────────────────── */}
        <div className="py-7 border-y border-slate-200/80 mb-12 relative overflow-hidden">
          {/* Header Label / Tagline Above Ticker on Mobile / Integrated */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Ecosystem & Platforms We Scale On
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 flex items-center gap-1.5 shrink-0">
              <span>Helping businesses grow across platforms</span>
              <span className="text-blue-600">✈</span>
            </div>
          </div>

          {/* Marquee Track with gradient fade mask */}
          <div className="marquee-mask overflow-hidden w-full py-2">
            <div className="animate-marquee flex items-center gap-12 sm:gap-16">
              {tickerItems.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex items-center shrink-0 px-2 opacity-80 hover:opacity-100 transition-opacity"
                >
                  {item.render}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* Bottom 4-Item Floating Stats Card Container                  */}
        {/* ───────────────────────────────────────────────────────────── */}
        <div className="rounded-3xl bg-[#F8FAFC] border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-2 sm:p-3 rounded-2xl hover:bg-white transition-colors duration-200"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100/80 flex items-center justify-center text-blue-600 shrink-0 shadow-xs">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-primary tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-[#64748B] font-medium font-primary">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
