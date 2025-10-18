import Head from 'next/head';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '../data';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};

  return {
    title: `${p.title} | Case Study | StudioVyn`,
    description: p.summary,
    alternates: { canonical: `/case-studies/${p.slug}` },
    openGraph: {
      title: `${p.title} | Case Study | StudioVyn`,
      description: p.summary,
      url: `https://studiovyn.in/case-studies/${p.slug}`,
      type: 'article',
      siteName: 'StudioVyn',
      images: [
        {
          url: p.image,
          width: 1200,
          height: 630,
          alt: p.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${p.title} | Case Study | StudioVyn`,
      description: p.summary,
      images: [p.image],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: p.title,
    headline: `${p.title} | Case Study`,
    description: p.summary,
    image: p.image,
    url: `https://studiovyn.in/case-studies/${p.slug}`,
    author: {
      '@type': 'Organization',
      name: 'StudioVyn',
      url: 'https://studiovyn.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'StudioVyn',
      logo: {
        '@type': 'ImageObject',
        url: 'https://studiovyn.in/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://studiovyn.in/case-studies/${p.slug}`,
    },
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      <Head>
        <link
          rel="canonical"
          href={`https://studiovyn.in/case-studies/${p.slug}`}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="StudioVyn" />
        <meta
          name="keywords"
          content={`${p.title}, ${p.stack}, web design, development, StudioVyn case study`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold font-secondary mb-4">{p.title}</h1>
        <div className="text-green-600 font-primary mb-2">{p.result}</div>
        <div className="text-sm text-gray-600 font-primary mb-4">{p.stack}</div>
        <div className="w-full h-64 relative rounded-2xl overflow-hidden mb-6">
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-contain bg-gray-100"
          />
        </div>
        <p className="text-gray-800 font-primary leading-7 whitespace-pre-line">
          {p.body}
        </p>
        <div className="mt-6 flex gap-3">
          <a href="/contact" className="btn-primary">
            Start your project
          </a>
          <a href="/portfolio" className="btn-secondary">
            Back to portfolio
          </a>
        </div>
      </section>
    </main>
  );
}
