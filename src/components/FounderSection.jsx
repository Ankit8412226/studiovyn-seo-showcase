'use client';

import { ArrowRight, Code2, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function FounderSection() {
  const founder = {
    name: 'Ankit Kumar',
    initials: 'AK',
    role: 'Founder & CTO, StudioVyn',
    bio: `Ankit Kumar leads StudioVyn’s engineering vision, technical strategy, and digital product architecture. He focuses on building sub-second high-speed, SEO-ready web applications, e-commerce storefronts, and mobile platforms that deliver verifiable client revenue. His hands-on approach blends performance engineering, schema.org search architecture, and conversion UX.`,
    secondary: `When you partner with StudioVyn, you collaborate directly with Ankit from initial discovery and technical roadmap design through production deployment and growth iteration.`,
    cta: 'Book a Founder Discovery Call',
  };

  return (
    <section className="py-20 sm:py-28 relative bg-[#07090e] border-t border-white/10" aria-label="Studio Leadership">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        <div className="max-w-4xl mx-auto glass-card p-8 sm:p-12 rounded-3xl border border-white/15 shadow-2xl">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* AVATAR — 4 COLS */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-[#10b981] to-[#06b6d4] p-[2px] shadow-2xl shadow-emerald-500/20">
                  <div className="w-full h-full rounded-full bg-[#0d121d] flex flex-col items-center justify-center text-white">
                    <span className="text-4xl font-secondary font-black text-[#34d399] tracking-tight">{founder.initials}</span>
                    <span className="text-[10px] font-mono text-slate-400 mt-1 uppercase">Founder & CTO</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BIO & CONTENT — 8 COLS */}
            <div className="md:col-span-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Studio Leadership</span>
              </div>

              <h2 className="font-secondary text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-1">
                {founder.name}
              </h2>
              <p className="text-xs font-mono text-[#34d399] uppercase tracking-wider mb-4 font-bold">
                {founder.role}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-primary mb-4">
                {founder.bio}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-primary mb-8">
                {founder.secondary}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-secondary font-bold text-sm text-black bg-[#34d399] hover:bg-[#10b981] shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <span>{founder.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-secondary font-semibold text-sm text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all"
                >
                  <span>See Studio Portfolio</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
