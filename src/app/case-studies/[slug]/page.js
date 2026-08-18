import SeoFaq from '@/components/seo/SeoFaq';
import SeoProse from '@/components/seo/SeoProse';
import { ArrowLeft, ArrowRight, Award, CheckCircle, Clock, Code2, Sparkles } from 'lucide-react';
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
        url: 'https://studiovyn.in/studiovyn_logo.png',
      },
    },
  };

  const faqs = [
    {
      q: 'What was the core business outcome?',
      a: `${p.result}. We focus on verifiable engineering outcomes including Core Web Vitals speed, search traffic growth, and conversion rate improvements.`,
    },
    {
      q: 'Can StudioVyn engineer a similar solution for my company?',
      a: 'Yes. We start with a technical architecture audit, establish project milestones, and build using modern React 19 / Next.js 16 standards.',
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#07090e] bg-grid-pattern relative overflow-hidden">
      <Script
        id="case-study-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* BACK LINK */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#34d399] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Case Studies</span>
        </Link>

        {/* HERO CASE STUDY HEADER */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-12">
          
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>{p.category || 'Client Case Study'}</span>
            </div>

            <h1 className="font-secondary text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              {p.title}
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed font-primary mb-6">
              {p.summary}
            </p>
          </div>

          {/* KEY METRICS HIGHLIGHT BOX — 4 COLS */}
          <div className="lg:col-span-4 glass-card p-6 rounded-2xl border border-white/15 bg-[#0d121d] space-y-4">
            <div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">Key Result Outcome</span>
              <span className="font-secondary text-2xl font-black text-[#34d399] block">{p.result}</span>
            </div>

            {p.timeline && (
              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Delivery Timeframe: {p.timeline}</span>
              </div>
            )}

            {p.stack && (
              <div className="pt-4 border-t border-white/10 text-xs font-mono text-slate-300">
                <span className="text-slate-400 block mb-1">Tech Stack Used:</span>
                <span className="text-white font-semibold">{p.stack}</span>
              </div>
            )}
          </div>

        </div>

        {/* FEATURE IMAGE */}
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] bg-[#0d121d] border border-white/15 mb-16 shadow-2xl">
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* BODY ARTICLE CONTENT */}
        <div className="max-w-4xl mx-auto glass-card p-8 sm:p-12 rounded-3xl border border-white/15 mb-16">
          <article className="prose prose-invert prose-emerald max-w-none text-slate-200 font-primary leading-relaxed whitespace-pre-line">
            {p.body}
          </article>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-secondary font-bold text-black bg-[#34d399] hover:bg-[#10b981] shadow-lg shadow-emerald-500/25 transition-all"
            >
              <span>Start a Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-secondary font-semibold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all"
            >
              <span>Browse All Case Studies</span>
            </Link>
          </div>
        </div>

        <SeoProse>
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-white">
            Want similar business growth for your product?
          </h2>
          <p>
            Explore our <Link className="text-[#34d399] underline" href="/services">services</Link> or{' '}
            <Link className="text-[#34d399] underline" href="/contact">request a free consultation</Link>.
          </p>
        </SeoProse>

      </div>

      <SeoFaq title="Case Study FAQs" faqs={faqs} pageUrl={`https://studiovyn.in/case-studies/${p.slug}`} />
    </main>
  );
}
