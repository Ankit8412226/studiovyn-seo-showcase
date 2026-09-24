'use client';

import OptimizedImage from '@/components/ui/OptimizedImage';
import {
  ArrowRight,
  Bell,
  Code2,
  Compass,
  Cpu,
  Database,
  Globe,
  Layers,
  Palette,
  PenTool,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesShowcase() {
  const secondaryServices = [
    {
      title: 'E-Commerce Solutions',
      desc: 'High-converting online stores, payment gateways & inventory systems.',
      icon: ShoppingCart,
      tag: 'Shopify · Next.js Commerce',
    },
    {
      title: 'Backend & Cloud APIs',
      desc: 'Scalable cloud infrastructure, REST/GraphQL APIs & secure databases.',
      icon: Database,
      tag: 'Node.js · PostgreSQL · AWS',
    },
    {
      title: 'Digital Marketing & SEO',
      desc: 'Technical SEO, growth strategy & organic search ranking dominance.',
      icon: Globe,
      tag: 'Core Web Vitals · Technical SEO',
    },
  ];

  return (
    <section
      id="services"
      className="py-24 sm:py-32 scroll-mt-24 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden"
      aria-label="Our engineering services and capabilities"
    >
      {/* Subtle Background Radial Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.04),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2563EB] block mb-3">
            ENGINEERING CAPABILITIES
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-secondary mb-5 text-[#0F172A] tracking-tight">
            Our <span className="font-semibold text-[#2563EB]">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] font-primary leading-relaxed max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. From concept to deployment, we deliver excellence at every step.
          </p>
        </div>

        {/* 3 Large Flagship Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {/* ───────────────────────────────────────────────────────────── */}
          {/* Card 01: Web Development (Light Aesthetic)                   */}
          {/* ───────────────────────────────────────────────────────────── */}
          <article className="group relative flex flex-col justify-between rounded-[28px] bg-white border border-slate-200/90 hover:border-blue-300/80 p-6 sm:p-8 shadow-xs hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
            {/* Background Ambient Glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-transparent rounded-full blur-2xl pointer-events-none -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-500"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.02] pointer-events-none"
              aria-hidden="true"
            />

            <div>
              {/* Header: Number & Line + Icon */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold tracking-widest text-blue-600">01</span>
                  <div className="h-px w-10 bg-blue-200 group-hover:w-14 transition-all duration-300" />
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">Architecture</span>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                  <Code2 className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>

              {/* Visual Integration Area */}
              <div className="relative h-48 sm:h-52 mb-6 rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner group/img">
                <OptimizedImage
                  src="/web_development_premium_1769518207985.png"
                  alt="Modern Web Development with Next.js and React"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Micro Badges */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-900/80 text-blue-200 border border-blue-400/20 backdrop-blur-md">
                    Next.js · React · TypeScript
                  </span>
                  <span className="text-[11px] font-medium text-slate-300/90 bg-slate-950/60 px-2 py-0.5 rounded border border-white/10 backdrop-blur-xs">
                    99.9% Uptime
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-[26px] font-semibold font-secondary text-[#0F172A] mb-3 group-hover:text-blue-600 transition-colors">
                Web Development
              </h3>
              <p className="text-sm text-[#64748B] font-primary leading-relaxed mb-6">
                Custom websites and web applications built with modern technologies like React, Next.js, and Node.js for optimal performance and scalability.
              </p>

              {/* Feature List with minimal line icons */}
              <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-primary">
                  <div className="w-5 h-5 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-primary">
                  <div className="w-5 h-5 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Search className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>SEO Optimized</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-primary">
                  <div className="w-5 h-5 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Zap className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>Fast Loading</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-primary">
                  <div className="w-5 h-5 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>Secure & Scalable</span>
                </li>
              </ul>
            </div>

            {/* Refined CTA */}
            <Link
              href="/services"
              className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-blue-600 group/cta hover:text-blue-700 transition-colors"
              aria-label="Learn more about Web Development"
            >
              <span className="font-primary tracking-wide">Learn More</span>
              <div className="flex items-center gap-2">
                <div className="h-px w-10 sm:w-16 bg-blue-200 group-hover:w-14 sm:group-hover:w-20 transition-all duration-300" />
                <div className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </article>

          {/* ───────────────────────────────────────────────────────────── */}
          {/* Card 02: Mobile App Development (Dark Flagship Focal Center)   */}
          {/* ───────────────────────────────────────────────────────────── */}
          <article className="group relative flex flex-col justify-between rounded-[28px] bg-[#090E1A] border border-indigo-500/30 hover:border-indigo-400/60 p-6 sm:p-8 shadow-xl shadow-indigo-950/40 hover:shadow-2xl hover:shadow-indigo-900/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden text-white lg:-my-2 lg:py-10">
            {/* Ambient Purple/Indigo Radial Glows */}
            <div
              className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-indigo-500/25 via-purple-500/20 to-transparent rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-500"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 w-60 h-60 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07] pointer-events-none"
              aria-hidden="true"
            />

            <div>
              {/* Header: Number & Line + Icon */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold tracking-widest text-indigo-400">02</span>
                  <div className="h-px w-10 bg-indigo-500/40 group-hover:w-14 transition-all duration-300" />
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-indigo-950/90 border border-indigo-500/40 text-indigo-300">
                    Flagship
                  </span>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center text-indigo-300 shadow-inner group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-300">
                  <Smartphone className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>

              {/* Visual Integration Area */}
              <div className="relative h-48 sm:h-52 mb-6 rounded-2xl overflow-hidden bg-slate-950 border border-indigo-500/30 shadow-2xl group/img">
                <OptimizedImage
                  src="/mobile_app_development_premium_1769518249733.png"
                  alt="Native and Cross-Platform Mobile Applications"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090E1A] via-[#090E1A]/20 to-transparent pointer-events-none" />

                {/* Micro Badges */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-indigo-950/90 text-indigo-200 border border-indigo-500/40 backdrop-blur-md">
                    iOS · Android · Flutter
                  </span>
                  <span className="text-[11px] font-medium text-indigo-300/90 bg-indigo-950/70 px-2 py-0.5 rounded border border-indigo-500/30 backdrop-blur-xs">
                    60 FPS Native
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-[26px] font-semibold font-secondary text-white mb-3 group-hover:text-indigo-300 transition-colors">
                Mobile App Development
              </h3>
              <p className="text-sm text-slate-300 font-primary leading-relaxed mb-6">
                Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android devices.
              </p>

              {/* Feature List with minimal line icons */}
              <ul className="space-y-2.5 pt-4 border-t border-slate-800/80">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-primary">
                  <div className="w-5 h-5 rounded-lg bg-indigo-950/90 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>Cross-Platform</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-primary">
                  <div className="w-5 h-5 rounded-lg bg-indigo-950/90 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>Native Performance</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-primary">
                  <div className="w-5 h-5 rounded-lg bg-indigo-950/90 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Database className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>Offline Support</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-primary">
                  <div className="w-5 h-5 rounded-lg bg-indigo-950/90 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Bell className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>Push Notifications</span>
                </li>
              </ul>
            </div>

            {/* Refined CTA */}
            <Link
              href="/services"
              className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-sm font-semibold text-indigo-300 group/cta hover:text-white transition-colors"
              aria-label="Learn more about Mobile App Development"
            >
              <span className="font-primary tracking-wide">Learn More</span>
              <div className="flex items-center gap-2">
                <div className="h-px w-10 sm:w-16 bg-indigo-500/40 group-hover:w-14 sm:group-hover:w-20 transition-all duration-300" />
                <div className="w-8 h-8 rounded-full bg-indigo-900/70 border border-indigo-500/40 group-hover:bg-indigo-600 text-indigo-300 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </article>

          {/* ───────────────────────────────────────────────────────────── */}
          {/* Card 03: UI/UX Design (Soft Lavender / Light Aesthetic)       */}
          {/* ───────────────────────────────────────────────────────────── */}
          <article className="group relative flex flex-col justify-between rounded-[28px] bg-white border border-slate-200/90 hover:border-purple-300/80 p-6 sm:p-8 shadow-xs hover:shadow-xl hover:shadow-purple-600/5 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
            {/* Background Ambient Glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-transparent rounded-full blur-2xl pointer-events-none -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-500"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.02] pointer-events-none"
              aria-hidden="true"
            />

            <div>
              {/* Header: Number & Line + Icon */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold tracking-widest text-purple-600">03</span>
                  <div className="h-px w-10 bg-purple-200 group-hover:w-14 transition-all duration-300" />
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">Design System</span>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-xs group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-300">
                  <Palette className="w-5 h-5" aria-hidden="true" />
                </div>
              </div>

              {/* Visual Integration Area */}
              <div className="relative h-48 sm:h-52 mb-6 rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-inner group/img">
                <OptimizedImage
                  src="/ui_ux_design_premium_1769518278516.png"
                  alt="Modern Figma UI/UX Design System and Interfaces"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Micro Badges */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-900/80 text-purple-200 border border-purple-400/20 backdrop-blur-md">
                    Figma · Design Systems
                  </span>
                  <span className="text-[11px] font-medium text-slate-300/90 bg-slate-950/60 px-2 py-0.5 rounded border border-white/10 backdrop-blur-xs">
                    Conversion-Led
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-[26px] font-semibold font-secondary text-[#0F172A] mb-3 group-hover:text-purple-600 transition-colors">
                UI/UX Design
              </h3>
              <p className="text-sm text-[#64748B] font-primary leading-relaxed mb-6">
                Beautiful, intuitive designs that prioritize user experience and drive engagement with your brand.
              </p>

              {/* Feature List with minimal line icons */}
              <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-primary">
                  <div className="w-5 h-5 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                    <Users className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>User Research</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-primary">
                  <div className="w-5 h-5 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                    <PenTool className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>Wireframing</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-primary">
                  <div className="w-5 h-5 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                    <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>Prototyping</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-primary">
                  <div className="w-5 h-5 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>Brand Identity</span>
                </li>
              </ul>
            </div>

            {/* Refined CTA */}
            <Link
              href="/services"
              className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-purple-600 group/cta hover:text-purple-700 transition-colors"
              aria-label="Learn more about UI/UX Design"
            >
              <span className="font-primary tracking-wide">Learn More</span>
              <div className="flex items-center gap-2">
                <div className="h-px w-10 sm:w-16 bg-purple-200 group-hover:w-14 sm:group-hover:w-20 transition-all duration-300" />
                <div className="w-8 h-8 rounded-full bg-purple-50 group-hover:bg-purple-600 text-purple-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" aria-hidden="true" />
                </div>
              </div>
            </Link>
          </article>
        </div>

        {/* ───────────────────────────────────────────────────────────── */}
        {/* Additional Capabilities & Custom Quote Banner               */}
        {/* ───────────────────────────────────────────────────────────── */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 block mb-2">
                Looking for specialized engineering?
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold font-secondary text-[#0F172A] mb-3">
                Also offering E-Commerce, Backend APIs & Digital Growth
              </h3>
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start mt-4">
                {secondaryServices.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700"
                    >
                      <ItemIcon className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
                      <span>{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto justify-center">
              <Link
                href="/services"
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 font-semibold text-sm font-primary transition-all text-center"
              >
                View All Services
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm font-primary shadow-sm hover:shadow-md transition-all group"
              >
                <span>Get a Custom Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
