'use client';

import { ArrowRight, Award, CheckCircle2, ChevronRight, ShieldCheck, Sparkles, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const proofMetrics = [
    { value: '150+', label: 'Products Shipped', sub: 'Web, Apps & E-Commerce' },
    { value: '98%', label: 'Client Satisfaction', sub: 'Verified 5-Star Reviews' },
    { value: '95+', label: 'Lighthouse Speed', sub: 'Sub-Second Page Loads' },
    { value: '23+', label: 'Indian Cities', sub: 'Multi-City SEO Authority' },
  ];

  const marqueeItems = [
    'Next.js 16 Production Architecture',
    'React 19 Server Components',
    'Technical & Schema.org SEO',
    'Razorpay & UPI Payment Gateways',
    'Tailwind CSS v4 Engineering',
    'Cloudflare Edge & AWS Deployment',
    'Google AI Overviews Search Ready',
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 lg:pt-44 lg:pb-28 bg-[#07090e] bg-grid-pattern flex flex-col justify-between overflow-hidden"
      role="banner"
    >
      {/* Subtle top radial lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-radial-gradient pointer-events-none opacity-80" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[350px] bg-emerald-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 my-auto">
        
        {/* EYEBROW BADGE */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border border-white/15 shadow-xl mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] animate-pulse"></span>
          <span className="text-xs sm:text-sm font-mono font-semibold tracking-wider text-slate-200 uppercase">
            StudioVyn · Senior Digital Engineering Studio
          </span>
          <span className="hidden md:inline-block w-px h-3 bg-white/20"></span>
          <span className="hidden md:inline-block text-xs font-mono text-[#34d399]">
            Available for Q3/Q4 Projects
          </span>
        </div>

        {/* MAIN EDITORIAL HEADLINE */}
        <div className="max-w-5xl">
          <h1 className="font-secondary text-4xl sm:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.05] mb-8">
            We architect digital products{' '}
            <span className="text-gradient-emerald">that perform.</span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-300 font-primary leading-relaxed mb-12 max-w-3xl font-normal">
            A high-end engineering studio building fast websites, scalable web applications, e-commerce storefronts, and multi-city SEO hubs. Engineered for Google search dominance and maximum client conversion.
          </p>

          {/* DUAL CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-9 py-4.5 rounded-xl font-secondary font-bold text-base text-black bg-[#34d399] hover:bg-[#10b981] shadow-2xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-xl font-secondary font-semibold text-base text-slate-200 glass-card border border-white/15 hover:bg-white/10 hover:text-white transition-all"
            >
              <span>Explore Selected Work</span>
              <ChevronRight className="w-4 h-4 opacity-60" />
            </Link>
          </div>
        </div>

        {/* METRICS ROW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10">
          {proofMetrics.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all">
              <div className="font-secondary text-3xl sm:text-4xl font-black text-white mb-1">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-[#34d399] mb-0.5">
                {item.label}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* BOTTOM MARQUEE TICKER */}
      <div className="w-full border-t border-b border-white/10 bg-[#0d121d]/60 py-3 mt-12 overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll gap-8">
          {[...marqueeItems, ...marqueeItems].map((text, i) => (
            <span key={i} className="inline-flex items-center gap-3 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]"></span>
              {text}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
