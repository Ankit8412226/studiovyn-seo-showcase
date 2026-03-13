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
    <section className="py-16 sm:py-20 border-t border-[#1f2937] bg-[#0b0d12] relative overflow-hidden" aria-label="Frequently asked questions">
      <div className="absolute inset-0 bg-accent-glow opacity-20" aria-hidden="true"></div>
      {jsonLd && (
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold font-secondary text-white mb-6">
          {title}
        </h2>
        <Accordion items={items} allowMultiple={false} />
      </div>
    </section>
  );
}

