'use client';

import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RequestProjectModal({ delayMs = 5000 }) {
  const [open, setOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isDismissed) return;

    const timer = setTimeout(() => {
      setOpen(true);
    }, delayMs);

    const handleExitIntent = (e) => {
      if (e.clientY <= 0) {
        setOpen(true);
      }
    };

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 25) {
        setOpen(true);
      }
    };

    if (pathname === '/' || pathname?.startsWith('/services')) {
      document.addEventListener('mouseleave', handleExitIntent);
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleExitIntent);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, delayMs, isDismissed]);

  const handleClose = () => {
    setOpen(false);
    setIsDismissed(true);
  };

  if (!open || isDismissed) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 relative animate-fade-in-up">
        <button aria-label="Close" onClick={handleClose} className="absolute right-3 top-3 p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <X className="w-5 h-5 text-slate-500 hover:text-slate-700" />
        </button>
        <h3 className="text-2xl font-bold font-secondary mb-2 text-slate-900">Start Your Project</h3>
        <p className="text-slate-600 font-primary mb-4">Tell us a bit about your goals. We’ll respond within 24 hours.</p>
        <div className="space-y-3">
          <a href="/contact" className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md shadow-blue-500/20">Request a Proposal</a>
          <div className="text-sm text-slate-500 font-primary text-center">
            Or call <a className="text-blue-600 font-semibold underline" href="tel:+919771123401">+91 9771123401</a> or email <a className="text-blue-600 font-semibold underline" href="mailto:tech@studiovyn.in">tech@studiovyn.in</a>
          </div>
        </div>
      </div>
    </div>
  );
}

