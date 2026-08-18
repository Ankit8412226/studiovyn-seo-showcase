import Link from 'next/link';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { services } from './data';

export const metadata = {
  title: 'Our Services | StudioVyn — Full-Stack Digital Product Studio',
  description:
    'StudioVyn digital engineering services: Custom web apps, Next.js development, e-commerce storefronts, mobile applications, backend APIs, and technical SEO across India.',
  keywords: 'web development services, mobile app development, UI/UX design, e-commerce development, digital marketing services, SEO services India, web design company',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Our Services | StudioVyn — Web Development & Digital Solutions',
    description: 'Professional web development and digital engineering services across India.',
    url: 'https://studiovyn.in/services',
    type: 'website',
    siteName: 'StudioVyn',
    images: [{ url: 'https://studiovyn.in/og-image.svg', width: 1200, height: 630, alt: 'StudioVyn Services' }],
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
    <main className="min-h-screen pt-32 pb-24 bg-[#07090e] bg-grid-pattern relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Engineering Capabilities</span>
          </div>
          <h1 className="font-secondary text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            Engineering services built to <span className="text-gradient-emerald">scale your business.</span>
          </h1>
          <p className="text-slate-300 text-lg font-primary leading-relaxed">
            From high-speed web apps and custom e-commerce stores to mobile applications and multi-city SEO hubs — we deliver production-grade software solutions.
          </p>
        </div>

        {/* SERVICES BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="glass-card rounded-2xl border border-white/10 p-8 flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#34d399] group-hover:bg-[#34d399] group-hover:text-black transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xl font-bold text-slate-600">0{idx + 1}</span>
                  </div>

                  <h2 className="font-secondary text-2xl font-bold text-white group-hover:text-[#34d399] transition-colors mb-3">
                    {s.title}
                  </h2>

                  <p className="text-slate-300 text-sm font-primary leading-relaxed mb-6">
                    {s.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-[#34d399] group-hover:text-white transition-colors">
                  <span>Explore Service Specifications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* BOTTOM PROSE BANNER */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/15">
          <h2 className="font-secondary text-2xl sm:text-3xl font-bold text-white mb-4">
            Why brands partner with StudioVyn
          </h2>
          <p className="text-slate-300 font-primary text-base leading-relaxed mb-8 max-w-3xl">
            StudioVyn is a senior digital engineering studio focused on performance, Core Web Vitals speed, search authority, and user conversion. We construct software tailored to your specific commercial goals.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-secondary font-bold text-white uppercase text-xs tracking-wider mb-3 text-[#34d399]">
                Popular Discipline Hubs
              </h3>
              <ul className="space-y-2 text-slate-300 font-primary">
                <li><Link className="hover:text-[#34d399] transition-colors flex items-center gap-2" href="/services/web-development"><span>→ Custom Web & SaaS Development</span></Link></li>
                <li><Link className="hover:text-[#34d399] transition-colors flex items-center gap-2" href="/services/e-commerce"><span>→ E-Commerce Storefronts & UPI</span></Link></li>
                <li><Link className="hover:text-[#34d399] transition-colors flex items-center gap-2" href="/services/ui-ux-design"><span>→ UI/UX & Product Design</span></Link></li>
                <li><Link className="hover:text-[#34d399] transition-colors flex items-center gap-2" href="/services/digital-marketing"><span>→ Technical & Multi-City SEO</span></Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-secondary font-bold text-white uppercase text-xs tracking-wider mb-3 text-[#34d399]">
                Recommended Engineering Reads
              </h3>
              <ul className="space-y-2 text-slate-300 font-primary">
                <li><Link className="hover:text-[#34d399] transition-colors flex items-center gap-2" href="/blog/ai-driven-web-development-trends-2026"><span>→ AI-Driven Web Development Trends 2026</span></Link></li>
                <li><Link className="hover:text-[#34d399] transition-colors flex items-center gap-2" href="/blog/nextjs-16-performance-optimization-guide"><span>→ Next.js 16 Performance Optimization Guide</span></Link></li>
                <li><Link className="hover:text-[#34d399] transition-colors flex items-center gap-2" href="/blog/content-strategy-topic-clusters"><span>→ Content Strategy with Topic Clusters</span></Link></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
