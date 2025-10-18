import Head from 'next/head';
import About from '../About';

export const metadata = {
  title: 'About Us | StudioVyn - Web Development & Digital Agency in India',
  description:
    'Learn more about StudioVyn — a creative web design, development, and digital marketing agency in India. We build websites, apps, and SEO-driven digital experiences for businesses.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About StudioVyn | Web Development & Digital Agency',
    description:
      'StudioVyn specializes in website development, app creation, and SEO-focused digital solutions to help businesses grow online.',
    url: 'https://studiovyn.in/about',
    type: 'website',
    siteName: 'StudioVyn',
    images: [
      {
        url: 'https://studiovyn.in/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About StudioVyn - Web Design & Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About StudioVyn | Web Development & Digital Agency in India',
    description:
      'Discover StudioVyn’s story, mission, and team — we craft high-performance websites and apps that drive business growth.',
    images: ['https://studiovyn.in/og-about.jpg'],
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About StudioVyn',
    url: 'https://studiovyn.in/about',
    description:
      'StudioVyn is a full-service digital agency offering website design, app development, and SEO services for businesses in India.',
    publisher: {
      '@type': 'Organization',
      name: 'StudioVyn',
      url: 'https://studiovyn.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://studiovyn.in/logo.png',
      },
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
    <main className="min-h-screen pt-24">
      <Head>
        <link rel="canonical" href="https://studiovyn.in/about" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="StudioVyn" />
        <meta
          name="keywords"
          content="About StudioVyn, web development India, web design agency, app development, SEO services, StudioVyn Noida"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <About />
    </main>
  );
}
