'use client';

import { ArrowRight, Code2, Database, Globe, Layers, Palette, ShoppingCart, Smartphone, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ServicesShowcase() {
  const services = [
    {
      id: '01',
      slug: 'web-development',
      icon: Code2,
      title: 'Web & SaaS Development',
      subtitle: 'Custom Websites, Next.js Apps, & Enterprise Portals',
      description: 'We build ultra-fast, responsive web applications using React 19, Next.js 16, and modern server architecture. Engineered for high conversion and 100% Google Lighthouse speed scores.',
      tags: ['Next.js 16', 'React.js', 'TypeScript', 'Tailwind CSS', 'PPR & SSR'],
      accent: 'from-emerald-500 to-teal-400',
      featured: true,
    },
    {
      id: '02',
      slug: 'e-commerce',
      icon: ShoppingCart,
      title: 'E-Commerce Platforms',
      subtitle: 'High-Converting Stores with Local Payment Gateways',
      description: 'Custom e-commerce platforms with Razorpay, PayU, and UPI payment integrations. Built for fast product browsing, smooth checkout, and seamless inventory management.',
      tags: ['Shopify', 'Custom Next.js Storefront', 'UPI Gateways', 'Inventory Sync'],
      accent: 'from-teal-400 to-cyan-500',
      featured: false,
    },
    {
      id: '03',
      slug: 'mobile-app-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      subtitle: 'Native & Cross-Platform iOS & Android Apps',
      description: 'High-performance mobile applications delivering native UX across mobile devices. Offline support, push notifications, and real-time backend synchronization.',
      tags: ['React Native', 'iOS & Android', 'Push Alerts', 'Offline Sync'],
      accent: 'from-cyan-500 to-indigo-500',
      featured: false,
    },
    {
      id: '04',
      slug: 'ui-ux-design',
      icon: Palette,
      title: 'UI/UX & Product Design',
      subtitle: 'User-Centric Design Systems & Wireframing',
      description: 'Conversion-oriented UI/UX design that turns traffic into paying clients. Complete design systems, interactive prototypes, and modern aesthetic hierarchy.',
      tags: ['Figma Design', 'Wireframing', 'User Research', 'Design Systems'],
      accent: 'from-indigo-500 to-purple-500',
      featured: false,
    },
    {
      id: '05',
      slug: 'backend-development',
      icon: Database,
      title: 'Backend & Cloud APIs',
      subtitle: 'Scalable Microservices, Node.js & Cloud DBs',
      description: 'Robust server architecture, RESTful/GraphQL APIs, database design (PostgreSQL/MongoDB), and cloud deployment on AWS or Cloudflare Edge.',
      tags: ['Node.js', 'PostgreSQL', 'MongoDB', 'AWS & Cloudflare', 'REST/GraphQL'],
      accent: 'from-emerald-400 to-cyan-400',
      featured: false,
    },
    {
      id: '06',
      slug: 'digital-marketing',
      icon: Globe,
      title: 'Technical SEO & Digital Marketing',
      subtitle: 'Search Authority, Schema, & Multi-City Reach',
      description: 'Technical SEO, structured data schema, local search optimization across 23+ Indian cities, and growth marketing to dominate Google SERP rankings.',
      tags: ['Technical SEO', 'Schema Markup', 'Local SEO', 'Core Web Vitals'],
      accent: 'from-cyan-400 to-emerald-500',
      featured: true,
    },
  ];

  return (
    <section
      id="services"
      className="py-24 sm:py-32 relative bg-[#07090e] border-t border-white/10"
      aria-label="Our Digital Engineering Services"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 className="font-secondary text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Services built for <span className="text-gradient-emerald">real business growth.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-base max-w-lg font-primary leading-relaxed">
            We don't sell bloated templates. We architect custom digital products tailored to your technical and commercial goals.
          </p>
        </div>

        {/* 21ST.DEV BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group glass-card p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300"
              >
                {/* Accent top line on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div>
                  {/* Top bar: Icon & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#34d399] group-hover:scale-110 group-hover:bg-[#10b981] group-hover:text-black transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-slate-400 transition-colors">
                      {item.id}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-secondary text-xl font-bold text-white mb-2 group-hover:text-[#34d399] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-4">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-primary">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-white/10">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link CTA */}
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#34d399] hover:text-white transition-colors group/link"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CALLOUT */}
        <div className="mt-12 p-8 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[#34d399] shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-secondary text-lg font-bold text-white">Need a custom architecture or solution?</h4>
              <p className="text-slate-400 text-sm">We provide tailored enterprise software, APIs, and headless CMS integrations.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#34d399] text-black font-secondary font-bold text-sm hover:bg-[#10b981] shadow-lg shadow-emerald-500/20 transition-all"
          >
            Request Custom Proposal
          </Link>
        </div>

      </div>
    </section>
  );
}
