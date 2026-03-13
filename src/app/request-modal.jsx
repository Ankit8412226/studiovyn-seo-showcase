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
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md bg-[#121723] border border-[#1f2937] rounded-2xl shadow-2xl p-6 relative animate-fade-in-up">
        <button aria-label="Close" onClick={handleClose} className="absolute right-3 top-3 p-2 rounded-lg hover:bg-[#0f1320]">
          <X className="w-5 h-5 text-[#94a3b8]" />
        </button>
        <h3 className="text-2xl font-bold font-secondary mb-2 text-white">Start Your Project</h3>
        <p className="text-slate-300 font-primary mb-4">Tell us a bit about your goals. We’ll respond within 24 hours.</p>
        <div className="space-y-3">
          <a href="/contact" className="btn-primary w-full inline-flex items-center justify-center">Request a Proposal</a>
          <div className="text-sm text-slate-300 font-primary text-center">
            Or call <a className="text-emerald-200 underline" href="tel:+918529747613">+91 8529747613</a> or email <a className="text-emerald-200 underline" href="mailto:tech@studiovyn.in">tech@studiovyn.in</a>
          </div>
        </div>
      </div>
    </div>
  );
}
