import About from '../About';
import Script from 'next/script';
import SeoProse from '@/components/seo/SeoProse';
import SeoFaq from '@/components/seo/SeoFaq';
import Link from 'next/link';

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
        url: 'https://studiovyn.in/og-image.svg',
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
    images: ['https://studiovyn.in/og-image.svg'],
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

  const faqs = [
    {
      q: 'What does StudioVyn specialize in?',
      a: 'We specialize in high-performance websites, web apps, e-commerce, UI/UX, and SEO foundations that help businesses rank on Google and convert visitors into leads.',
    },
    {
      q: 'Do you work with startups and enterprises?',
      a: 'Yes. We work with startups, SMEs, and enterprise teams. We adapt process, timelines, and deliverables to match your goals and internal workflows.',
    },
    {
      q: 'Where does StudioVyn operate?',
      a: 'We serve clients across India with a strong focus on Delhi NCR, Bihar, and West Bengal, and we work remotely PAN-India.',
    },
  ];

  return (
    <main className="min-h-screen pt-24">
      <Script
        id="about-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <About />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pb-16">
        <SeoProse>
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-gray-900">
            Our approach: performance + SEO + conversion UX
          </h2>
          <p>
            We build premium digital experiences that are engineered to rank and convert. That means clean information
            architecture, fast load times, accessibility, and content structures that match search intent.
          </p>
          <p>
            Explore <Link className="text-blue-600 underline" href="/services">our services</Link>, review{' '}
            <Link className="text-blue-600 underline" href="/portfolio">portfolio</Link>, or contact us for a{' '}
            <Link className="text-blue-600 underline" href="/contact">free consultation</Link>.
          </p>
        </SeoProse>
      </section>

      <SeoFaq title="About StudioVyn FAQs" faqs={faqs} pageUrl="https://studiovyn.in/about" />
    </main>
  );
}
