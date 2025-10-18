import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from './data';

export const metadata = {
  title: 'Blog | StudioVyn',
  description:
    'Guides on web development, SEO, performance, and conversion optimization in India. Learn from StudioVyn’s insights to grow your business online.',
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
        url: 'https://studiovyn.in/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'StudioVyn Blog - Insights & Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StudioVyn Blog | Web Design & SEO Insights',
    description:
      'Latest web development and digital marketing guides by StudioVyn.',
    images: ['https://studiovyn.in/og-blog.jpg'],
  },
};

export default function BlogIndex() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'StudioVyn Blog',
    description:
      'StudioVyn Blog features articles about web design, SEO, and digital growth strategies for businesses in India.',
    url: 'https://studiovyn.in/blog',
    publisher: {
      '@type': 'Organization',
      name: 'StudioVyn',
      url: 'https://studiovyn.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://studiovyn.in/logo.png',
      },
    },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      image: p.image,
      url: `https://studiovyn.in/blog/${p.slug}`,
      description: (p.body || '').slice(0, 140),
      author: {
        '@type': 'Organization',
        name: 'StudioVyn',
      },
      datePublished: p.date || '2025-01-01',
    })),
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      <Head>
        <link rel="canonical" href="https://studiovyn.in/blog" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="StudioVyn" />
        <meta
          name="keywords"
          content="StudioVyn blog, web development India, SEO guides, website performance, digital marketing, StudioVyn Noida"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-4xl font-bold font-secondary mb-3">
            Insights & Guides
          </h1>
          <p className="text-gray-600 font-primary">
            Actionable articles to grow your business online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="w-full h-40 relative rounded-xl mb-4 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-contain bg-gray-100"
                />
              </div>
              <h2 className="text-xl font-semibold font-secondary mb-2">
                {p.title}
              </h2>
              <p className="text-gray-600 font-primary text-sm">
                {(p.body || '').slice(0, 140)}...
              </p>
              <div className="mt-4 text-blue-600 font-semibold">Read more →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
