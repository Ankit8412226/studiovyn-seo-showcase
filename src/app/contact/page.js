import SeoFaq from '@/components/seo/SeoFaq';
import SeoProse from '@/components/seo/SeoProse';
import Link from 'next/link';
import Script from 'next/script';
import Contact from '../Contact';

export const metadata = {
  title: 'Contact StudioVyn | Free Web Development Consultation (India)',
  description:
    'Contact StudioVyn for website development, UI/UX, SEO, e-commerce, and mobile apps in India. Get a free consultation and a clear project proposal in 24 hours.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact StudioVyn | Free Consultation',
    description:
      'Reach out to StudioVyn for web development, SEO, and creative digital solutions. Let’s build something great together!',
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
      'Let’s collaborate to create your next website or brand identity. Contact StudioVyn today.',
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
    <main className="min-h-screen pt-24 bg-white text-gray-900">
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold font-secondary mb-3 text-gray-900">
            Get a Free Consultation
          </h1>
          <p className="text-gray-600 text-lg font-primary max-w-2xl mx-auto">
            Tell us what you’re building—website, e-commerce, app, or SEO growth. We’ll reply within 24 hours with a clear plan and timeline.
          </p>
        </header>

        <Contact />

        <SeoProse>
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-gray-900">
            What happens after you submit?
          </h2>
          <ol className="list-decimal ml-5 space-y-2">
            <li>We review your goals and reply with clarifying questions (if needed).</li>
            <li>We share a recommended plan: scope, timeline, and milestones.</li>
            <li>If it’s a fit, we start with discovery and ship in milestones.</li>
          </ol>
          <p>
            Prefer exploring first? See <Link className="text-blue-600 underline" href="/services">services</Link> or browse{' '}
            <Link className="text-blue-600 underline" href="/portfolio">portfolio</Link>.
          </p>
        </SeoProse>
      </section>

      <SeoFaq title="Contact FAQs" faqs={faqs} pageUrl="https://studiovyn.in/contact" />
    </main>
  );
}
