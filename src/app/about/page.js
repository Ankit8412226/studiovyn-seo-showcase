import SeoFaq from '@/components/seo/SeoFaq';
import SeoProse from '@/components/seo/SeoProse';
import Link from 'next/link';
import Script from 'next/script';
import About from '../About';
import FounderSection from '@/components/FounderSection';

export const metadata = {
  title: 'About StudioVyn | Digital Product Studio & Web Development in India',
  description:
    'Learn about StudioVyn — a senior web design, app development, and technical SEO studio in India founded by Ankit Kumar. We build fast, scalable web apps and SEO solutions.',
  keywords: [
    'About StudioVyn',
    'Ankit Kumar StudioVyn',
    'web development agency India',
    'digital marketing agency India',
    'web design company',
    'StudioVyn'
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About StudioVyn | Digital Product Studio',
    description:
      'StudioVyn specializes in high-speed website development, mobile app creation, and SEO-focused digital solutions founded by Ankit Kumar.',
    url: 'https://studiovyn.in/about',
    type: 'website',
    siteName: 'StudioVyn',
    images: [
      {
        url: 'https://studiovyn.in/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'About StudioVyn - Digital Product Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About StudioVyn | Digital Product Studio in India',
    description:
      'Discover StudioVyn’s story, engineering mission, and leadership by Ankit Kumar — crafting high-performance websites and apps that drive business growth.',
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
      'StudioVyn is a digital product studio offering website engineering, app development, and technical SEO services for businesses in India.',
    publisher: {
      '@type': 'Organization',
      name: 'StudioVyn',
      url: 'https://studiovyn.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://studiovyn.in/studiovyn_logo.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8529747613',
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
          jobTitle: 'Founder & CTO',
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
      q: 'Who leads StudioVyn?',
      a: 'StudioVyn is founded and led by Ankit Kumar (Founder & CTO), who manages the engineering architecture, technical SEO, and digital product strategy for all client engagements.',
    },
    {
      q: 'What does StudioVyn specialize in?',
      a: 'We specialize in high-performance websites, web apps, e-commerce storefronts, UI/UX, and technical SEO foundations that help businesses rank on Google and convert visitors into leads.',
    },
    {
      q: 'Where does StudioVyn operate?',
      a: 'We serve clients across India with a strong focus on Delhi NCR, Bihar (Patna), West Bengal (Kolkata), Mumbai, and Bangalore, working remotely PAN-India.',
    },
  ];

  return (
    <main className="min-h-screen pt-24 bg-[#07090e] bg-grid-pattern relative overflow-hidden">
      <Script
        id="about-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative z-10">
        <About />
        <FounderSection />

        <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-20">
          <SeoProse>
            <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-white">
              Our approach: performance + technical SEO + conversion UX
            </h2>
            <p>
              We build premium digital experiences that are engineered to rank and convert. That means clean information architecture, sub-second load times, accessibility compliance, and content structures that match search intent.
            </p>
            <p>
              Explore <Link className="text-[#34d399] underline" href="/services">our services</Link>, review our{' '}
              <Link className="text-[#34d399] underline" href="/portfolio">portfolio</Link>, or contact us for a{' '}
              <Link className="text-[#34d399] underline" href="/contact">free strategy consultation</Link>.
            </p>
          </SeoProse>
        </section>

        <SeoFaq title="About StudioVyn FAQs" faqs={faqs} pageUrl="https://studiovyn.in/about" />
      </div>
    </main>
  );
}
