'use client';

import { ArrowRight, Phone, Sparkles, X } from 'lucide-react';
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
      className="fixed bottom-6 right-6 z-40 max-w-sm w-[calc(100%-3rem)] p-4 rounded-2xl border border-slate-800 bg-slate-900/95 text-white shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom duration-300"
      aria-label="Quick Action Floating Bar"
    >
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute top-3 right-3 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        aria-label="Close widget"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
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
          className="flex-1 py-2 px-3 rounded-lg bg-blue-600 text-white font-secondary font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md hover:bg-blue-700 transition-all"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href="tel:+918529747613"
          className="py-2 px-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-all"
          aria-label="Call StudioVyn"
        >
          <Phone className="w-3.5 h-3.5 text-blue-400" />
          <span className="hidden sm:inline">Call</span>
        </a>
      </div>
    </aside>
  );
}
