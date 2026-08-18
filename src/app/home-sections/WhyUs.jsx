'use client';

import { Cpu, Rocket, Search, ShieldCheck, Target, Zap } from 'lucide-react';

export default function WhyUs() {
  const pillars = [
    {
      icon: Cpu,
      title: 'Engineering-First Architecture',
      subtitle: 'Production-Grade Codebase',
      description: 'We don’t rely on fragile page-builder plugins or bloated templates. Every application is built with modern component architectures, type safety, and clean code principles.',
    },
    {
      icon: Zap,
      title: 'Sub-Second Speed & Core Web Vitals',
      subtitle: 'Targeting 95+ Lighthouse Ratings',
      description: 'Site speed directly impacts conversion and Google search rankings. We optimize LCP, INP, and CLS metrics out of the box using server streaming and edge caching.',
    },
    {
      icon: Search,
      title: 'Built-In Technical & Local SEO',
      subtitle: 'Discovered By Intent & AI Search',
      description: 'Structured Data schema.org markup, semantic HTML5, XML sitemaps, and location-targeted keyword hubs ensure your site dominates both Google Search and AI Overviews.',
    },
    {
      icon: Target,
      title: 'Conversion Rate Optimization',
      subtitle: 'Designed to Turn Visitors into Clients',
      description: 'Clear value propositions, intuitive UX navigation, prominent trust indicators, and frictionless call-to-action flows convert organic traffic into revenue.',
    },
  ];

  return (
    <section
      className="py-24 sm:py-32 relative bg-[#07090e] border-t border-white/10"
      aria-label="Why Partner With StudioVyn"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Studio Vyn Standard</span>
          </div>
          <h2 className="font-secondary text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Engineering excellence, <span className="text-gradient-emerald">delivered with precision.</span>
          </h2>
          <p className="text-slate-400 text-lg font-primary leading-relaxed">
            We operate as your dedicated senior engineering partner. Here is why ambitious businesses choose StudioVyn over generic web agencies.
          </p>
        </div>

        {/* 4 PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, i) => {
            const IconComp = item.icon;
            return (
              <div
                key={i}
                className="glass-card p-8 sm:p-10 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#34d399] group-hover:bg-[#34d399] group-hover:text-black transition-all">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-secondary text-xl font-bold text-white group-hover:text-[#34d399] transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-400">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed font-primary">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
