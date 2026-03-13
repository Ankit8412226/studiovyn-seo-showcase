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
    <main className="min-h-screen pt-32 pb-16 bg-[#0b0d12] relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-glow opacity-20" aria-hidden="true"></div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-4xl font-bold font-secondary mb-3 text-white">
            Insights & Guides
          </h1>
          <p className="text-slate-300 font-primary">
            Actionable articles to grow your business online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="p-6 rounded-2xl border border-[#1f2937] shadow-sm hover:shadow-md transition bg-[#121723]"
            >
              <div className="w-full h-40 relative rounded-xl mb-4 overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.title} - StudioVyn blog`}
                  fill
                  className="object-contain bg-[#0f172a]"
                />
              </div>
              <h2 className="text-xl font-semibold font-secondary mb-2 text-white">
                {p.title}
              </h2>
              <p className="text-[#94a3b8] font-primary text-sm">
                {(p.body || '').slice(0, 140)}...
              </p>
              <div className="mt-4 text-emerald-200 font-semibold">Read more →</div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#1f2937] bg-[#121723] p-6">
          <h2 className="text-2xl font-bold font-secondary text-white mb-3">
            Explore StudioVyn services
          </h2>
          <p className="text-[#94a3b8] font-primary mb-4">
            Looking for implementation? StudioVyn delivers web development, SEO, and e-commerce builds that rank and convert.
          </p>
          <ul className="space-y-2 text-slate-300 font-primary">
            <li><Link className="text-emerald-200 underline" href="/services/web-development">Web Development</Link></li>
            <li><Link className="text-emerald-200 underline" href="/services/ui-ux-design">UI/UX Design</Link></li>
            <li><Link className="text-emerald-200 underline" href="/services/e-commerce">E-commerce Development</Link></li>
            <li><Link className="text-emerald-200 underline" href="/services/digital-marketing">Digital Marketing</Link></li>
          </ul>
        </div>

        <SeoProse>
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-white">
            SEO + Web Development Guides for Businesses in India
          </h2>
          <p>
            If you’re searching for <strong>website development tips</strong>, <strong>technical SEO</strong>, or a
            <strong> Core Web Vitals</strong> playbook that actually moves rankings, you’re in the right place.
            We share proven strategies we use across real projects—so you can rank higher, load faster, and convert more.
          </p>
          <p>
            Looking for implementation help? Explore our{' '}
            <Link className="text-emerald-200 underline" href="/services">services</Link>, browse{' '}
            <Link className="text-emerald-200 underline" href="/portfolio">portfolio</Link>, or{' '}
            <Link className="text-emerald-200 underline" href="/contact">request a free consultation</Link>.
          </p>
        </SeoProse>
      </section>

      <SeoFaq title="Blog FAQs" faqs={faqs} pageUrl="https://studiovyn.in/blog" />
    </main>
  );
}
