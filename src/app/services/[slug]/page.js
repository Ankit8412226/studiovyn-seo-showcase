import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceBySlug } from '../data';
import SeoFaq from '@/components/seo/SeoFaq';
import SeoProse from '@/components/seo/SeoProse';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  const title = service.metaTitle || `${service.title} Services in India | StudioVyn`;
  const description =
    service.metaDescription ||
    `${service.description} Fast delivery, SEO-ready, and conversion-focused. Get a free consultation from StudioVyn.`;
  const url = `https://studiovyn.in/services/${service.slug}`;
  return {
    title,
    description,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title, description, url, type: 'article' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return notFound();
  const Icon = service.icon;

  const faqs = [
    {
      q: `How much do ${service.title.toLowerCase()} services cost in India?`,
      a: 'Pricing depends on project requirements, features, and integrations. We provide an itemized proposal after a free discovery call.',
    },
    {
      q: `How long does ${service.title.toLowerCase()} take to complete?`,
      a: 'Most standard service engagements ship within 2–6 weeks. Complex custom applications take 6–10 weeks with milestone updates every week.',
    },
    {
      q: 'Is technical SEO built into every service build?',
      a: 'Yes. We include structured schema markup, semantic HTML5, Core Web Vitals optimization, and XML sitemaps in every single project.',
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#07090e] bg-grid-pattern relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* BACK LINK */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#34d399] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Studio Services</span>
        </Link>

        {/* HERO SERVICE HEADER */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Icon className="w-4 h-4" />
              <span>Studio Discipline</span>
            </div>

            <h1 className="font-secondary text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              {service.title}
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl font-primary leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-secondary font-bold text-black bg-[#34d399] hover:bg-[#10b981] shadow-xl shadow-emerald-500/25 transition-all"
              >
                <span>Request Service Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-secondary font-semibold text-slate-200 glass-card border border-white/15 hover:bg-white/10 hover:text-white transition-all"
              >
                <span>See Portfolio Work</span>
              </Link>
            </div>
          </div>

          {/* VISUAL IMAGE — 4 COLS */}
          {service.image && (
            <div className="lg:col-span-4 glass-card p-3 rounded-2xl border border-white/15 overflow-hidden">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0d121d]">
                <Image src={service.image} alt={service.title} fill className="object-cover" priority />
              </div>
            </div>
          )}
        </div>

        {/* DETAILS SECTION */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8 rounded-2xl border border-white/15">
            <h2 className="font-secondary text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#34d399]" />
              <span>What You Receive</span>
            </h2>
            <ul className="space-y-3 text-slate-300 font-primary text-sm">
              <li className="flex items-start gap-2"><span className="text-[#34d399] font-bold">✓</span> Technical discovery roadmap & architecture plan</li>
              <li className="flex items-start gap-2"><span className="text-[#34d399] font-bold">✓</span> 100% production-grade React 19 / Next.js 16 codebase</li>
              <li className="flex items-start gap-2"><span className="text-[#34d399] font-bold">✓</span> Sub-second Core Web Vitals speed & SEO schema</li>
              <li className="flex items-start gap-2"><span className="text-[#34d399] font-bold">✓</span> Transparent milestone tracking & weekly staging builds</li>
            </ul>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/15">
            <h2 className="font-secondary text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#34d399]" />
              <span>The StudioVyn Advantage</span>
            </h2>
            <ul className="space-y-3 text-slate-300 font-primary text-sm">
              <li className="flex items-start gap-2"><span className="text-[#34d399] font-bold">✓</span> Direct communication with senior software engineers</li>
              <li className="flex items-start gap-2"><span className="text-[#34d399] font-bold">✓</span> Fixed pricing guarantee — zero hidden costs or retainers</li>
              <li className="flex items-start gap-2"><span className="text-[#34d399] font-bold">✓</span> 150+ successful projects delivered across India</li>
              <li className="flex items-start gap-2"><span className="text-[#34d399] font-bold">✓</span> Post-launch support & continuous monitoring</li>
            </ul>
          </div>
        </div>

        <SeoProse>
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-white">
            {service.title} that ranks, loads fast, and converts
          </h2>
          <p className="text-slate-300">
            We don’t just build pages — we craft a performance-first foundation that helps you win organic search traffic and turn visitors into qualified leads.
          </p>
        </SeoProse>

      </div>

      <SeoFaq title={`${service.title} FAQs`} faqs={faqs} pageUrl={`https://studiovyn.in/services/${service.slug}`} />
    </main>
  );
}
