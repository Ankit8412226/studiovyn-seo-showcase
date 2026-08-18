import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import { projects } from './data';
import SeoProse from '@/components/seo/SeoProse';
import SeoFaq from '@/components/seo/SeoFaq';

export const metadata = {
  title: 'Case Studies | StudioVyn (Results-Driven Digital Engineering)',
  description:
    'Explore StudioVyn case studies: measurable results from high-performance web development, technical SEO, e-commerce platforms, and product engineering across India.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'StudioVyn Case Studies — Measured Business Outcomes',
    description:
      'Real client projects, real metrics: see how StudioVyn improves search traffic, conversions, page speed, and enterprise revenue.',
    url: 'https://studiovyn.in/case-studies',
    images: [{ url: 'https://studiovyn.in/og-image.svg', width: 1200, height: 630, alt: 'StudioVyn Case Studies' }],
  },
};

export default function CaseStudiesIndexPage() {
  const top = projects.slice(0, 12);
  const faqs = [
    {
      q: 'Do you share detailed performance metrics in every case study?',
      a: 'Yes. We document verifiable outcomes including Core Web Vitals speed scores, organic search traffic growth, conversion rates, and operational efficiency improvements.',
    },
    {
      q: 'Can StudioVyn engineer a similar solution for my business?',
      a: 'Absolutely. We start with a technical discovery audit, define measurable goals, and deliver with fixed milestone schedules.',
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#07090e] bg-grid-pattern relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[160px] pointer-events-none rounded-full" />

      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Proven Business Impact</span>
          </div>
          <h1 className="font-secondary text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            Studio <span className="text-gradient-emerald">Case Studies.</span>
          </h1>
          <p className="text-slate-300 text-lg font-primary leading-relaxed">
            Proof over promises. Explore measurable outcomes from the high-speed web applications, e-commerce storefronts, and SEO hubs we’ve engineered.
          </p>
        </div>

        {/* CASE STUDIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {top.map((p) => (
            <Link
              key={p.slug}
              href={`/case-studies/${p.slug}`}
              className="glass-card rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-300"
            >
              <div>
                {/* Visual preview */}
                <div className="relative aspect-[16/10] bg-[#0d121d] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-md text-[11px] font-mono text-[#34d399] border border-white/20">
                    {p.category || 'Digital Engineering'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/10 text-[#34d399] text-xs font-mono font-bold mb-3 border border-emerald-500/20">
                    {p.result}
                  </div>

                  <h2 className="font-secondary text-xl font-bold text-white group-hover:text-[#34d399] transition-colors leading-snug mb-3 line-clamp-2">
                    {p.title}
                  </h2>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-primary line-clamp-3 mb-4">
                    {p.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-white/10 mt-auto">
                <div className="pt-4 flex items-center justify-between text-xs font-bold text-[#34d399] group-hover:text-white transition-colors">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CONSULTATION BANNER */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/15 text-center max-w-4xl mx-auto mb-20">
          <h2 className="font-secondary text-2xl sm:text-4xl font-black text-white mb-4">
            Ready to achieve similar results for your product?
          </h2>
          <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Book a discovery call with our technical director to discuss your project requirements and scope.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-secondary font-bold text-black bg-[#34d399] hover:bg-[#10b981] shadow-xl shadow-emerald-500/25 transition-all"
          >
            <span>Get a Free Strategy Proposal</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <SeoProse>
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-white">
            Results-driven web development & SEO execution across India
          </h2>
          <p>
            These case studies document how StudioVyn combines modern frontend frameworks (React 19, Next.js 16), technical SEO architecture, and conversion optimization to drive measurable business outcomes for clients in Delhi NCR, Kolkata, Bihar, Mumbai, Bangalore, and nationwide.
          </p>
        </SeoProse>
      </section>

      <SeoFaq title="Case Study FAQs" faqs={faqs} pageUrl="https://studiovyn.in/case-studies" />
    </main>
  );
}
