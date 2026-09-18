import SeoFaq from '@/components/seo/SeoFaq';
import SeoProse from '@/components/seo/SeoProse';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Script from 'next/script';
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
        url: 'https://studiovyn.in/logo.jpeg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://studiovyn.in/case-studies/${p.slug}`,
    },
  };

  const faqs = [
    {
      q: 'What was the measurable result?',
      a: `${p.result}. We focus on outcomes like performance, organic traffic growth, conversion improvements, and operational efficiency.`,
    },
    {
      q: 'Can StudioVyn replicate this for my business?',
      a: 'Yes. We start with discovery, define success metrics, then ship in milestones. Book a free consultation to get a tailored plan.',
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.03),transparent)] pointer-events-none" aria-hidden="true"></div>
      <Script
        id="case-study-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        <h1 className="text-4xl font-bold font-secondary mb-4 text-slate-900">{p.title}</h1>
        <div className="text-blue-600 font-primary font-bold text-lg mb-2">{p.result}</div>
        <div className="text-sm text-slate-500 font-primary mb-6">{p.stack}</div>
        <div className="w-full h-64 relative rounded-2xl overflow-hidden mb-6 border border-slate-200 shadow-md">
          <Image
            src={p.image}
            alt={`${p.title} - StudioVyn case study`}
            fill
            className="object-cover"
          />
        </div>
        <article className="text-slate-700 font-primary leading-7 whitespace-pre-line text-lg">
          {p.body}
        </article>
        <div className="mt-8 flex gap-3">
          <Button href="/contact" variant="primary">Start your project</Button>
          <Button href="/case-studies" variant="secondary">More case studies</Button>
        </div>

        <SeoProse>
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-slate-900 mt-12">
            Want similar results?
          </h2>
          <p className="text-slate-600">
            Explore our <Link className="text-blue-600 font-medium underline" href="/services">services</Link> or{' '}
            <Link className="text-blue-600 font-medium underline" href="/contact">book a free consultation</Link>.
          </p>
        </SeoProse>
      </section>

      <SeoFaq title="Case Study FAQs" faqs={faqs} pageUrl={`https://studiovyn.in/case-studies/${p.slug}`} />
    </main>
  );
}

