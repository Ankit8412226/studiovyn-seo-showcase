'use client';

import { ArrowRight, BarChart3, Globe, LineChart, Search, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SEOGrowth() {
  const points = [
    {
      title: 'Technical & Schema Markup',
      desc: 'LocalBusiness, FAQPage, Article, & Organization structured data pre-configured for Google AI Overviews.',
    },
    {
      title: 'Core Web Vitals & INP Optimization',
      desc: 'Sub-second server response times, lightweight DOM trees, and fast interaction latency.',
    },
    {
      title: 'Multi-City Keyword Clustering',
      desc: 'Structured location pages targeting intent-heavy search queries across 23+ Indian tier-1 and tier-2 cities.',
    },
    {
      title: 'Conversion Funnel Integration',
      desc: 'Contextual lead capture, clear telephone/WhatsApp CTAs, and frictionless proposal submission flows.',
    },
  ];

  return (
    <section
      id="seo-growth"
      className="py-24 sm:py-32 relative bg-[#090d16] border-t border-white/10"
      aria-label="SEO & Growth Architecture"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT VISUAL MOCKUP — 5 COLS */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="glass-card rounded-2xl p-4 border border-white/15 overflow-hidden">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#0d121d]">
                <Image
                  src="/seo_growth_visual.png"
                  alt="Search Engine Growth Dashboard Analytics"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT — 7 COLS */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <LineChart className="w-3.5 h-3.5" />
              <span>Organic Traffic Engine</span>
            </div>

            <h2 className="font-secondary text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Built from day one to <span className="text-gradient-emerald">be discovered & rank.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-primary mb-8">
              A beautiful website is useless if no one finds it. At StudioVyn, technical SEO, structured schemas, fast Core Web Vitals, and search intent alignment are built directly into the codebase.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {points.map((p, idx) => (
                <div key={idx} className="glass-card p-5 rounded-xl border border-white/10">
                  <h3 className="font-secondary text-base font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#34d399]"></span>
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/services/digital-marketing"
              className="inline-flex items-center gap-2 text-sm font-secondary font-bold text-white bg-[#10b981] hover:bg-[#0d9e6e] px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all"
            >
              <span>Explore SEO & Growth Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
