import Link from 'next/link';
import { services } from './data';

export const metadata = {
  title: 'Our Services | StudioVyn - Professional Web Development & Digital Solutions',
  description:
    'StudioVyn. Professional web development and digital marketing services. Web development, mobile apps, UI/UX design, e-commerce solutions, SEO & digital marketing. 150+ projects, 98% satisfaction.',
  keywords: 'web development services, mobile app development, UI/UX design, e-commerce development, digital marketing services, SEO services India, web design company',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Our Services | StudioVyn - Web Development & Digital Solutions',
    description: 'Professional web development and digital marketing services. Custom websites, mobile apps, e-commerce & SEO.',
    url: 'https://studiovyn.in/services',
    type: 'website',
    siteName: 'StudioVyn',
    images: [
      {
        url: 'https://studiovyn.in/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'StudioVyn Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | StudioVyn',
    description: 'Professional web development and digital marketing services across India.',
    images: ['https://studiovyn.in/og-image.svg'],
  },
};

export default function ServicesIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'StudioVyn Services',
    url: 'https://studiovyn.in/services',
    description: 'Professional web development and digital marketing services.',
    publisher: {
      '@type': 'Organization',
      name: 'StudioVyn',
      url: 'https://studiovyn.in',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: services.map((s, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: s.title,
        description: s.description,
        url: `https://studiovyn.in/services/${s.slug}`,
      })),
    },
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-secondary mb-4">Our Services</h1>
          <p className="text-gray-600 font-primary">High-impact digital solutions tailored to your goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-xl font-semibold font-secondary mb-2 group-hover:text-blue-600">{s.title}</h2>
                <p className="text-gray-600 text-sm font-primary mb-4">{s.description}</p>
                <span className="text-blue-600 font-semibold font-primary">Learn more →</span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}


