'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function RequestProjectModal({ delayMs = 8000 }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Show on homepage and services pages primarily
      if (pathname === '/' || pathname?.startsWith('/services')) {
        setOpen(true);
      }
    }, delayMs);
    return () => clearTimeout(timer);
  }, [delayMs, pathname]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 relative animate-fade-in-up">
        <button aria-label="Close" onClick={() => setOpen(false)} className="absolute right-3 top-3 p-2 rounded-lg hover:bg-gray-100">
          <X className="w-5 h-5 text-gray-600" />
        </button>
        <h3 className="text-2xl font-bold font-secondary mb-2">Start Your Project</h3>
        <p className="text-gray-600 font-primary mb-4">Tell us a bit about your goals. We’ll respond within 24 hours.</p>
        <div className="space-y-3">
          <a href="/contact" className="btn-primary w-full inline-flex items-center justify-center">Request a Proposal</a>
          <div className="text-sm text-gray-600 font-primary text-center">
            Or call <a className="text-blue-600 underline" href="tel:+918529747613">+91 8529747613</a> or email <a className="text-blue-600 underline" href="mailto:tech@studiovyn.in">tech@studiovyn.in</a>
          </div>
        </div>
      </div>
    </div>
  );
}


