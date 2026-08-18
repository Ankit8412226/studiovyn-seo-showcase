'use client';

import { ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CaseSpotlight() {
  const caseStudies = [
    {
      title: 'Retail E-Commerce Platform',
      client: 'Fashion & Apparel Retailer',
      slug: 'retail-ecommerce-platform',
      image: '/case_study_ecommerce.png',
      metric: '+250% Revenue Growth',
      metricSub: 'Achieved within 6 months post-launch',
      summary: 'Re-architected a legacy online shop into a high-speed Next.js storefront integrated with Razorpay, instant UPI checkout, and programmatic SEO catalog pages.',
      tags: ['Next.js 16', 'Razorpay UPI', 'PostgreSQL', 'Tailwind CSS'],
    },
    {
      title: 'B2B SaaS Analytics & Operations Dashboard',
      client: 'Enterprise Software Solutions',
      slug: 'b2b-saas-dashboard',
      image: '/case_study_saas.png',
      metric: '60% Ops Time Reduced',
      metricSub: 'Streamlined multi-tenant workflows',
      summary: 'Engineered a modern SaaS management dashboard with real-time KPI data visualizations, team permission layers, and automated reporting pipelines.',
      tags: ['React 19', 'TypeScript', 'Recharts', 'Supabase Cloud'],
    },
    {
      title: 'Local Services Programmatic Directory',
      client: 'Pan-India Service Provider',
      slug: 'services-directory',
      image: '/case_study_directory.png',
      metric: '3x Organic Traffic Growth',
      metricSub: 'Ranked top 3 for 40+ local keywords',
      summary: 'Built a programmatic local services marketplace targeting 23+ major Indian cities with schema.org markup, localized landing pages, and instant lead routing.',
      tags: ['Technical SEO', 'Schema.org', 'MongoDB', 'Programmatic SEO'],
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 sm:py-32 relative bg-[#090d16] border-t border-white/10"
      aria-label="Selected Client Work & Case Studies"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Proven Business Results</span>
            </div>
            <h2 className="font-secondary text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Selected Work & <span className="text-gradient">Case Studies</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-[#34d399] transition-colors group"
          >
            <span>View All Client Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* CASE STUDY CARDS STACK */}
        <div className="space-y-10">
          {caseStudies.map((study, idx) => (
            <article
              key={study.slug}
              className="glass-card rounded-2xl border border-white/10 p-6 sm:p-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center group transition-all duration-300 hover:border-emerald-500/30"
            >
              {/* IMAGE SHOWCASE — 6 COLS */}
              <div className={`lg:col-span-6 relative rounded-xl overflow-hidden aspect-[16/10] bg-[#0d121d] border border-white/10 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 glass-card px-3 py-1.5 rounded-lg border border-white/20 text-xs font-semibold text-white">
                  {study.client}
                </div>
              </div>

              {/* DETAILS CONTENT — 6 COLS */}
              <div className={`lg:col-span-6 flex flex-col justify-between ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  {/* METRIC CALLOUT */}
                  <div className="inline-flex items-baseline gap-2 mb-4 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <span className="font-secondary text-xl font-black text-[#34d399]">
                      {study.metric}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      — {study.metricSub}
                    </span>
                  </div>

                  <h3 className="font-secondary text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#34d399] transition-colors leading-tight">
                    {study.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed mb-6 font-primary">
                    {study.summary}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-secondary font-bold text-white bg-white/10 hover:bg-[#34d399] hover:text-black px-6 py-3 rounded-xl border border-white/15 transition-all shadow-md"
                  >
                    <span>Read Full Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
