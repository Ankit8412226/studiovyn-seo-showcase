'use client';

import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative bg-[#090d16] border-t border-white/10 overflow-hidden"
      aria-label="Start Your Project"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center">
        
        <div className="max-w-4xl mx-auto glass-card p-10 sm:p-16 rounded-3xl border border-white/20 glow-border shadow-2xl relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Ready To Build Something Exceptional?</span>
          </div>

          <h2 className="font-secondary text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Have a product worth <span className="text-gradient-emerald">building right?</span>
          </h2>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-primary mb-10 max-w-2xl mx-auto">
            Let’s turn your vision into a fast, SEO-ready digital product engineered for real revenue growth. Talk with our senior engineers today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-secondary font-bold text-base text-black bg-[#34d399] hover:bg-[#10b981] shadow-xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Start Your Project Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="tel:+918529747613"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-secondary font-semibold text-base text-slate-200 bg-white/5 border border-white/15 hover:bg-white/10 hover:text-white transition-all"
            >
              <Phone className="w-4 h-4 text-[#34d399]" />
              <span>Call +91 8529747613</span>
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span>✓ 24-Hour Proposal Turnaround</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">✓ Direct Senior Engineer Consultation</span>
          </div>

        </div>

      </div>
    </section>
  );
}
