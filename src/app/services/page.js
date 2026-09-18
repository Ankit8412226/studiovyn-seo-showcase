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
    <main className="min-h-screen pt-32 pb-20 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.04),transparent)] pointer-events-none" aria-hidden="true"></div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-secondary mb-4 text-slate-900">Our Services</h1>
          <p className="text-slate-600 font-primary">High-impact digital solutions tailored to your goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-slate-200/80 hover:border-blue-300 hover:-translate-y-1 duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center mb-5 shadow-md shadow-blue-500/10`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-xl font-semibold font-secondary mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">{s.title}</h2>
                <p className="text-slate-600 text-sm font-primary mb-4">{s.description}</p>
                <span className="text-blue-600 font-semibold font-primary inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">Learn more →</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        <div className="rounded-3xl border border-slate-200 bg-white shadow-md p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-slate-900 mb-3">
            Why brands choose StudioVyn
          </h2>
          <p className="text-slate-600 font-primary mb-6">
            StudioVyn is a web development agency in India focused on performance, SEO, and conversions. Our services are
            designed to strengthen brand visibility in search and AI assistants while driving real business outcomes.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold font-secondary text-slate-900 mb-2">Popular services</h3>
              <ul className="space-y-2 text-slate-600 font-primary">
              <li><Link className="text-blue-600 font-medium underline" href="/services/web-development">Web Development</Link></li>
              <li><Link className="text-blue-600 font-medium underline" href="/services/e-commerce">E-commerce Development</Link></li>
              <li><Link className="text-blue-600 font-medium underline" href="/services/ui-ux-design">UI/UX Design</Link></li>
              <li><Link className="text-blue-600 font-medium underline" href="/services/digital-marketing">Digital Marketing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold font-secondary text-slate-900 mb-2">Recommended reads</h3>
              <ul className="space-y-2 text-slate-600 font-primary">
              <li><Link className="text-blue-600 font-medium underline" href="/blog/ai-driven-web-development-trends-2026">AI-Driven Web Development Trends 2026</Link></li>
              <li><Link className="text-blue-600 font-medium underline" href="/blog/nextjs-16-performance-optimization-guide">Next.js 16 Performance Optimization</Link></li>
              <li><Link className="text-blue-600 font-medium underline" href="/blog/content-strategy-topic-clusters">Content Strategy with Topic Clusters</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

