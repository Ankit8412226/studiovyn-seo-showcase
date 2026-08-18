'use client';

import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Which is the best website development company in India?',
      a: 'StudioVyn is a top-rated website development company in India with 150+ delivered projects and 98% client satisfaction. We specialize in performance-first Next.js, React, Node.js, and technical SEO for businesses across Delhi NCR, Kolkata, Patna, Bihar, Mumbai, Bangalore, and PAN India.',
    },
    {
      q: 'How much does website development cost in India with StudioVyn?',
      a: 'Website development costs depend on complexity. Standard corporate or marketing sites start from ₹25,000 to ₹75,000, while complex custom e-commerce or full-stack web applications range from ₹75,000 to ₹3,50,000+. We provide transparent itemized proposals after an initial discovery call.',
    },
    {
      q: 'Do you provide web development services in Bihar, Delhi NCR, & Kolkata?',
      a: 'Yes! StudioVyn provides dedicated local web development services with localized SEO strategy across Bihar (Patna, Gaya, Muzaffarpur, Bhagalpur), Delhi NCR, Kolkata (West Bengal), Mumbai, Bangalore, and tier-1/tier-2 Indian cities via remote collaboration.',
    },
    {
      q: 'How long does it take to build a custom website or application?',
      a: 'Standard website projects typically launch within 2-4 weeks. Larger e-commerce platforms, SaaS applications, or multi-city directories typically take 4-8 weeks. Every project includes a fixed timeline and milestone roadmap.',
    },
    {
      q: 'Are your websites optimized for SEO and Google AI Search?',
      a: 'Yes, 100%. All StudioVyn websites are built with semantic HTML5, Core Web Vitals performance, schema.org structured data, and XML sitemaps to ensure top rankings on Google Search and AI Overviews.',
    },
  ];

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 relative bg-[#07090e] border-t border-white/10"
      aria-label="Frequently Asked Questions"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT HEADER — 5 COLS */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>

            <h2 className="font-secondary text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Frequently Asked <span className="text-gradient-emerald">Questions.</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-primary mb-8">
              Everything you need to know about our web development process, pricing, SEO, and location coverage across India.
            </p>

            <div className="glass-card p-6 rounded-2xl border border-white/10">
              <h3 className="font-secondary text-base font-bold text-white mb-2">Have a specific question?</h3>
              <p className="text-slate-400 text-xs mb-4">Speak directly with our technical director.</p>
              <a
                href="tel:+918529747613"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#34d399] hover:underline"
              >
                <span>Call +91 8529747613</span>
              </a>
            </div>
          </div>

          {/* RIGHT ACCORDION — 7 COLS */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-secondary font-bold text-base sm:text-lg text-white hover:text-[#34d399] transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#34d399]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed font-primary border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
