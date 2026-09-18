import SeoFaq from '@/components/seo/SeoFaq';
import SeoProse from '@/components/seo/SeoProse';
import Link from 'next/link';
import Script from 'next/script';
import About from '../About';
import FounderSection from '@/components/FounderSection';

export const metadata = {
  title: 'About StudioVyn | Web Development & Digital Agency in India',
  description:
    'Learn more about StudioVyn — a web design, development, and digital marketing agency in India. We build websites, apps, and SEO-driven digital experiences.',
  keywords: [
    'About StudioVyn',
    'web development agency India',
    'digital marketing agency India',
    'web design company',
    'StudioVyn'
  ],
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
        url: 'https://studiovyn.in/logo.jpeg',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9771123401',
        contactType: 'Customer Support',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    },
    mainEntity: {
      '@type': 'Organization',
      name: 'StudioVyn',
      url: 'https://studiovyn.in',
      founder: [
        {
          '@type': 'Person',
          name: 'Ankit Kumar',
          jobTitle: 'Founder & Lead Engineer',
          worksFor: {
            '@type': 'Organization',
            name: 'StudioVyn',
            url: 'https://studiovyn.in',
          },
          nationality: 'Indian',
        },
      ],
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
    <main className="min-h-screen pt-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.03),transparent)] pointer-events-none" aria-hidden="true"></div>
      <Script
        id="about-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative z-10">
        <About />
        <FounderSection />

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pb-16">
          <SeoProse>
            <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-slate-900">
              Our approach: performance + SEO + conversion UX
            </h2>
            <p className="text-slate-600">
              We build premium digital experiences that are engineered to rank and convert. That means clean information
              architecture, fast load times, accessibility, and content structures that match search intent.
            </p>
            <p className="text-slate-600">
              Explore <Link className="text-blue-600 font-medium underline" href="/services">our services</Link>, review{' '}
              <Link className="text-blue-600 font-medium underline" href="/portfolio">portfolio</Link>, or contact us for a{' '}
              <Link className="text-blue-600 font-medium underline" href="/contact">free consultation</Link>.
            </p>
          </SeoProse>
        </section>

        <SeoFaq title="About StudioVyn FAQs" faqs={faqs} pageUrl="https://studiovyn.in/about" />
      </div>
    </main>
  );
}
