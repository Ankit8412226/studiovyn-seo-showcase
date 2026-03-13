import SeoFaq from '@/components/seo/SeoFaq';
import SeoProse from '@/components/seo/SeoProse';
import Link from 'next/link';
import Script from 'next/script';
import Contact from '../Contact';

export const metadata = {
  title: 'Contact StudioVyn | Web Development Consultation',
  description:
    'Talk to StudioVyn about web development, SEO, e-commerce, and mobile apps. Get a clear proposal within 24 hours.',
  keywords: [
    'contact StudioVyn',
    'web development consultation',
    'SEO agency India',
    'e-commerce development',
    'mobile app development',
    'StudioVyn'
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact StudioVyn | Free Consultation',
    description:
      'Reach out to StudioVyn for web development, SEO, and digital solutions. Let’s build something that ranks and converts.',
    url: 'https://studiovyn.in/contact',
    type: 'website',
    siteName: 'StudioVyn',
    images: [
      {
        url: 'https://studiovyn.in/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Contact StudioVyn',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact StudioVyn | Free Consultation',
    description:
      'Let’s collaborate on your next website or growth plan. Contact StudioVyn today.',
    images: ['https://studiovyn.in/og-image.svg'],
  },
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact StudioVyn',
    url: 'https://studiovyn.in/contact',
    description:
      'Contact StudioVyn for professional website design, development, and SEO services in India.',
    publisher: {
      '@type': 'Organization',
      name: 'StudioVyn',
      url: 'https://studiovyn.in',
      logo: 'https://studiovyn.in/logo.jpeg',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8529747613',
        contactType: 'Customer Support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    },
  };

  const faqs = [
    {
      q: 'How quickly will you respond?',
      a: 'We typically respond within 24 hours with next steps, questions to clarify scope, and a timeline estimate.',
    },
    {
      q: 'What information should I share for an accurate quote?',
      a: 'Share your goals, examples you like, pages/features needed, target city/market, and any integrations (payments, CRM, analytics).',
    },
    {
      q: 'Do you offer ongoing support?',
      a: 'Yes. We offer maintenance retainers for updates, monitoring, SEO iterations, and performance optimization.',
    },
  ];

  return (
    <main className="min-h-screen pt-24 bg-[#0b0d12] text-[#e5e7eb] relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-glow opacity-20" aria-hidden="true"></div>
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold font-secondary mb-3 text-white">
            Get a Free Consultation
          </h1>
          <p className="text-slate-300 text-lg font-primary max-w-2xl mx-auto">
            Tell us what you’re building—website, e-commerce, app, or SEO growth. We’ll reply within 24 hours with a clear plan and timeline.
          </p>
        </header>

        <Contact />

        <SeoProse>
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-white">
            What happens after you submit?
          </h2>
          <ol className="list-decimal ml-5 space-y-2">
            <li>We review your goals and reply with clarifying questions (if needed).</li>
            <li>We share a recommended plan: scope, timeline, and milestones.</li>
            <li>If it’s a fit, we start with discovery and ship in milestones.</li>
          </ol>
          <p>
            Prefer exploring first? See <Link className="text-emerald-200 underline" href="/services">services</Link> or browse{' '}
            <Link className="text-emerald-200 underline" href="/portfolio">portfolio</Link>.
          </p>
        </SeoProse>
      </section>

      <SeoFaq title="Contact FAQs" faqs={faqs} pageUrl="https://studiovyn.in/contact" />
    </main>
  );
}
