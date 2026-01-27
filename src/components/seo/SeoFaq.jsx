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
    <section className="py-16 sm:py-20 border-t border-gray-200 bg-white" aria-label="Frequently asked questions">
      {jsonLd && (
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold font-secondary text-gray-900 mb-6">
          {title}
        </h2>
        <Accordion items={items} allowMultiple={false} />
      </div>
    </section>
  );
}


