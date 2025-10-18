import Head from 'next/head';
import Contact from '../Contact';

export const metadata = {
  title: 'Contact Us | StudioVyn - Web Design & Development Agency',
  description:
    'Get in touch with StudioVyn for website design, development, SEO, and digital branding. Request a free consultation or project proposal today!',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact StudioVyn | Web Design & Development Agency',
    description:
      'Reach out to StudioVyn for web development, SEO, and creative digital solutions. Let’s build something great together!',
    url: 'https://studiovyn.in/contact',
    type: 'website',
    siteName: 'StudioVyn',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact StudioVyn | Web Design & Development Agency',
    description:
      'Let’s collaborate to create your next website or brand identity. Contact StudioVyn today.',
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
      logo: 'https://studiovyn.in/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8529747613',
        contactType: 'Customer Support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    },
  };

  return (
    <main className="min-h-screen pt-24 bg-white text-gray-900">
      <Head>
        <link rel="canonical" href="https://studiovyn.in/contact" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="contact studiovyn, web design company India, website development, SEO services, StudioVyn Noida"
        />
        <meta property="og:image" content="https://studiovyn.in/og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta name="author" content="StudioVyn" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-700 mb-3">
            Get in Touch with StudioVyn
          </h1>
          <p className="text-gray-600 text-lg">
            Have a project in mind? Fill out the form below and our team will
            get back to you within 24 hours.
          </p>
        </header>

        <Contact />

        <footer className="mt-16 text-center text-sm text-gray-500">
          <p>
            StudioVyn | Building Digital Experiences That Inspire |{' '}
            <a
              href="https://studiovyn.in"
              className="text-green-600 hover:underline"
            >
              studiovyn.in
            </a>
          </p>
        </footer>
      </section>
    </main>
  );
}
