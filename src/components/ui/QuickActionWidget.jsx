'use client';

import { ArrowRight, MessageSquare, Phone, Sparkles, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function QuickActionWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <aside
      className="fixed bottom-6 right-6 z-40 max-w-sm w-[calc(100%-3rem)] glass-card p-4 rounded-2xl border border-white/20 shadow-2xl animate-in slide-in-from-bottom duration-300 bg-[#0d121d]/95 backdrop-blur-xl"
      aria-label="Quick Action Floating Bar"
    >
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute top-3 right-3 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Close widget"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-[#34d399] flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <div className="font-secondary text-xs font-bold text-white">Have a project in mind?</div>
          <div className="text-[10px] text-slate-400">Get a free proposal & estimate today</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Link
          href="/contact"
          className="flex-1 py-2 px-3 rounded-lg bg-[#34d399] text-black font-secondary font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-[#10b981] transition-all"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href="tel:+918529747613"
          className="py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-all"
          aria-label="Call StudioVyn"
        >
          <Phone className="w-3.5 h-3.5 text-[#34d399]" />
          <span className="hidden sm:inline">Call</span>
        </a>
      </div>
    </aside>
  );
}
