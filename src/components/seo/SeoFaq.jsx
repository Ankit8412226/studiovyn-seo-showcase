'use client';

import Script from 'next/script';
import Accordion from '@/components/ui/Accordion';

/**
 * SEO FAQ block
 * - Renders a visible FAQ section for users (improves engagement/scroll depth)
 * - Injects FAQPage JSON-LD for rich results eligibility
 */
export default function SeoFaq({ title = 'Frequently Asked Questions', faqs = [], pageUrl }) {
  const items = faqs.map((f) => ({ question: f.q, answer: f.a }));

  const jsonLd =
    pageUrl && faqs.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.a,
            },
          })),
        }
      : null;

  return (
    <section className="py-16 sm:py-20 border-t border-slate-200 bg-slate-50 relative overflow-hidden" aria-label="Frequently asked questions">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.04),transparent)] pointer-events-none" aria-hidden="true"></div>
      {jsonLd && (
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold font-secondary text-slate-900 mb-6">
          {title}
        </h2>
        <Accordion items={items} allowMultiple={false} />
      </div>
    </section>
  );
}

