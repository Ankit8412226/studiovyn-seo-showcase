'use client';

import { Cpu, Database, Globe, Layers, ShieldCheck, Terminal } from 'lucide-react';
import { useState } from 'react';

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend Architecture', icon: Layers },
    { id: 'backend', label: 'Backend & APIs', icon: Terminal },
    { id: 'database', label: 'Databases & Storage', icon: Database },
    { id: 'seo', label: 'SEO & Search AI', icon: Globe },
    { id: 'cloud', label: 'Cloud & Infrastructure', icon: ShieldCheck },
  ];

  const stackDetails = {
    frontend: [
      { name: 'Next.js 16 (App Router)', desc: 'Partial Prerendering (PPR), Server Components, and sub-second HTML streaming.' },
      { name: 'React 19', desc: 'Latest concurrent rendering and client-side state optimization.' },
      { name: 'TypeScript', desc: 'Strict end-to-end type safety for zero runtime unexpected type errors.' },
      { name: 'Tailwind CSS v4', desc: 'Zero runtime CSS overhead for lightweight DOM styling.' },
    ],
    backend: [
      { name: 'Node.js & Express', desc: 'Event-driven, asynchronous RESTful microservices architecture.' },
      { name: 'Next.js Server Actions 2.0', desc: 'Secure, server-side data mutations with zero API boilerplate.' },
      { name: 'GraphQL & REST APIs', desc: 'Type-safe data fetching layers for web and mobile clients.' },
      { name: 'Payment Integrations', desc: 'Razorpay, PayU, PhonePe, and Cashfree UPI payment gateways.' },
    ],
    database: [
      { name: 'PostgreSQL', desc: 'ACID-compliant relational database for structured enterprise data.' },
      { name: 'MongoDB', desc: 'High-throughput document storage for content and product catalogs.' },
      { name: 'Redis', desc: 'In-memory caching layer for instant session management and API response speed.' },
      { name: 'Prisma / Drizzle ORM', desc: 'Type-safe database query building and schema migrations.' },
    ],
    seo: [
      { name: 'Schema.org Structured Data', desc: 'Pre-configured JSON-LD for LocalBusiness, FAQ, Product, and Articles.' },
      { name: 'Core Web Vitals Monitoring', desc: 'Strict LCP (<1.2s), INP (<100ms), and CLS (<0.01) threshold enforcement.' },
      { name: 'Programmatic SEO Hubs', desc: 'Dynamic city and category route generators for 23+ Indian markets.' },
      { name: 'Google AI Overviews Ready', desc: 'Entity-first semantic HTML markup tailored for LLM crawlers.' },
    ],
    cloud: [
      { name: 'AWS & Vercel Enterprise', desc: 'Global edge network delivery with multi-region failover.' },
      { name: 'Cloudflare Edge CDN', desc: 'DDoS mitigation, web application firewall (WAF), and edge SSL.' },
      { name: 'Docker & CI/CD', desc: 'Automated build, test, and deployment pipelines.' },
      { name: 'Nodemailer / SES', desc: 'Transactional email infrastructure for instant lead and order notifications.' },
    ],
  };

  return (
    <section
      id="tech-stack"
      className="py-24 sm:py-32 relative bg-[#07090e] border-t border-white/10"
      aria-label="StudioVyn Tech Stack Matrix"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Modern Technology Matrix</span>
          </div>
          <h2 className="font-secondary text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Powered by world-class <span className="text-gradient-emerald">engineering stacks.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-primary leading-relaxed">
            We select tools based on performance, security, and long-term scalability.
          </p>
        </div>

        {/* TABS SELECTOR */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const IconC = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-3 rounded-full text-xs font-mono font-bold flex items-center gap-2 shrink-0 border transition-all ${
                  isActive
                    ? 'bg-[#34d399] text-black border-[#34d399] shadow-lg shadow-emerald-500/20'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <IconC className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE STACK CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stackDetails[activeTab]?.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-[#34d399] flex items-center justify-center shrink-0 font-mono text-xs font-bold mt-1">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-secondary text-lg font-bold text-white mb-2">
                  {item.name}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-primary">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
