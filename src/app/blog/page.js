import Image from 'next/image';
import Link from 'next/link';
import { posts } from './data';
import SeoProse from '@/components/seo/SeoProse';
import SeoFaq from '@/components/seo/SeoFaq';

export const metadata = {
  title: 'StudioVyn Blog | Web Development & SEO Insights',
  description:
    'Guides on web development, SEO, performance, and conversion optimization in India from StudioVyn.',
  keywords: [
    'StudioVyn blog',
    'web development insights',
    'SEO guides India',
    'Core Web Vitals',
    'conversion optimization'
  ],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | StudioVyn',
    description:
      'Read expert insights on website design, SEO, performance, and digital marketing from StudioVyn.',
    url: 'https://studiovyn.in/blog',
    type: 'website',
    siteName: 'StudioVyn',
    images: [
      {
        url: 'https://studiovyn.in/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'StudioVyn Blog - Web Development & SEO Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StudioVyn Blog | Web Design & SEO Insights',
    description:
      'Latest web development and digital marketing guides by StudioVyn.',
    images: ['https://studiovyn.in/og-image.svg'],
  },
};

export default function BlogIndex() {
  const faqs = [
    {
      q: 'What does StudioVyn write about?',
      a: 'We publish practical guides on website development, technical SEO, Core Web Vitals, conversion optimization, and digital growth for businesses in India.',
    },
    {
      q: 'Do these guides apply to small businesses and startups?',
      a: 'Yes. We focus on actionable frameworks, checklists, and examples that work for startups, SMEs, and growing teams.',
    },
    {
      q: 'Can StudioVyn implement these recommendations for us?',
      a: 'Absolutely. If you want a done-for-you build or SEO growth plan, book a free consultation and we’ll recommend the fastest path to ROI.',
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-16 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.04),transparent)] pointer-events-none" aria-hidden="true"></div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-4xl font-bold font-secondary mb-3 text-slate-900">
            Insights & Guides
          </h1>
          <p className="text-slate-600 font-primary">
            Actionable articles to grow your business online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group p-6 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:border-blue-300 hover:-translate-y-1"
            >
              <div className="w-full h-40 relative rounded-xl mb-4 overflow-hidden bg-slate-100 border border-slate-100">
                <Image
                  src={p.image}
                  alt={`${p.title} - StudioVyn blog`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h2 className="text-xl font-semibold font-secondary mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                {p.title}
              </h2>
              <p className="text-slate-600 font-primary text-sm">
                {(p.body || '').slice(0, 140)}...
              </p>
              <div className="mt-4 text-blue-600 font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">Read more →</div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-white shadow-md p-8">
          <h2 className="text-2xl font-bold font-secondary text-slate-900 mb-3">
            Explore StudioVyn services
          </h2>
          <p className="text-slate-600 font-primary mb-4">
            Looking for implementation? StudioVyn delivers web development, SEO, and e-commerce builds that rank and convert.
          </p>
          <ul className="space-y-2 text-slate-600 font-primary">
            <li><Link className="text-blue-600 font-medium underline" href="/services/web-development">Web Development</Link></li>
            <li><Link className="text-blue-600 font-medium underline" href="/services/ui-ux-design">UI/UX Design</Link></li>
            <li><Link className="text-blue-600 font-medium underline" href="/services/e-commerce">E-commerce Development</Link></li>
            <li><Link className="text-blue-600 font-medium underline" href="/services/digital-marketing">Digital Marketing</Link></li>
          </ul>
        </div>

        <SeoProse>
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-slate-900 mt-12">
            SEO + Web Development Guides for Businesses in India
          </h2>
          <p className="text-slate-600">
            If you’re searching for <strong>website development tips</strong>, <strong>technical SEO</strong>, or a
            <strong> Core Web Vitals</strong> playbook that actually moves rankings, you’re in the right place.
            We share proven strategies we use across real projects—so you can rank higher, load faster, and convert more.
          </p>
          <p className="text-slate-600">
            Looking for implementation help? Explore our{' '}
            <Link className="text-blue-600 font-medium underline" href="/services">services</Link>, browse{' '}
            <Link className="text-blue-600 font-medium underline" href="/portfolio">portfolio</Link>, or{' '}
            <Link className="text-blue-600 font-medium underline" href="/contact">request a free consultation</Link>.
          </p>
        </SeoProse>
      </section>

      <SeoFaq title="Blog FAQs" faqs={faqs} pageUrl="https://studiovyn.in/blog" />
    </main>
  );
}

