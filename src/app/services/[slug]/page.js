import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceBySlug } from '../data';
import SeoFaq from '@/components/seo/SeoFaq';
import SeoProse from '@/components/seo/SeoProse';
import Button from '@/components/ui/Button';

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
      a: 'Pricing depends on scope, timelines, and integrations. We provide a clear proposal with milestones after a free consultation and requirement review.',
    },
    {
      q: `How long does ${service.title.toLowerCase()} take?`,
      a: 'Most projects ship in 2–6 weeks for typical scopes. Complex builds may take 8–12 weeks. We align timelines with business priorities and deliver in milestones.',
    },
    {
      q: 'Do you build SEO into every project?',
      a: 'Yes. We ship with semantic structure, performance best practices, internal linking, and technical SEO foundations so your pages can rank and convert.',
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-16 bg-[#0b0d12] relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-glow opacity-20" aria-hidden="true"></div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {service.image && (
            <div className="w-full h-56 relative rounded-2xl overflow-hidden mb-6">
              <Image src={service.image} alt={service.title} fill className="object-contain bg-[#0f1320]" />
            </div>
          )}
          <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold font-secondary mb-4 text-white">{service.title}</h1>
          <p className="text-[#94a3b8] font-primary mb-8">{service.description}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/contact" size="md">Get a free proposal</Button>
            <Button href="/portfolio" variant="secondary" size="md">See recent work</Button>
          </div>

          <SeoProse>
            <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-white">
              {service.title} that ranks, loads fast, and converts
            </h2>
            <p className="text-[#94a3b8]">
              We don’t just “build pages”—we craft a performance-first foundation that helps you win organic traffic and
              turn visitors into leads. Expect crisp UX, clean information architecture, and measurable outcomes.
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li><strong className="text-white">SEO foundations:</strong> semantic HTML, internal linking, sitemaps, and schema where relevant.</li>
              <li><strong className="text-white">Performance:</strong> Core Web Vitals best practices to improve rankings and user experience.</li>
              <li><strong className="text-white">Conversion UX:</strong> strong CTAs, trust proof, and copy designed to reduce friction.</li>
            </ul>
            <p className="text-[#94a3b8]">
              Want a tailored plan? <Link className="text-emerald-200 underline" href="/contact">Book a free consultation</Link>.
            </p>
          </SeoProse>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-[#1f2937] shadow-sm bg-[#121723]">
            <h2 className="text-2xl font-semibold font-secondary mb-3 text-white">What you get</h2>
            <ul className="list-disc ml-5 space-y-2 text-[#94a3b8] font-primary">
              <li>Discovery, roadmap, and clear milestones</li>
              <li>Quality engineering with best practices</li>
              <li>Performance, accessibility, and SEO baked in</li>
              <li>Transparent communication and on-time delivery</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-[#1f2937] shadow-sm bg-[#121723]">
            <h2 className="text-2xl font-semibold font-secondary mb-3 text-white">Why StudioVyn</h2>
            <ul className="list-disc ml-5 space-y-2 text-[#94a3b8] font-primary">
              <li>150+ projects delivered with 98% client satisfaction</li>
              <li>Modern stack: Next.js, React, Node, cloud</li>
              <li>Proven results and happy clients</li>
              <li>Scalable engagement models</li>
            </ul>
          </div>
        </div>
      </section>

      <SeoFaq title={`${service.title} FAQs`} faqs={faqs} pageUrl={`https://studiovyn.in/services/${service.slug}`} />
    </main>
  );
}
