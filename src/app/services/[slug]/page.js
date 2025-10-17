import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceBySlug } from '../data';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  const title = `${service.title} Services | StudioVyn`;
  const description = service.description;
  const url = `https://studiovyn.com/services/${service.slug}`;
  return {
    title,
    description,
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

  return (
    <main className="min-h-screen pt-28 pb-16 bg-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {service.image && (
            <div className="w-full h-56 relative rounded-2xl overflow-hidden mb-6">
              <Image src={service.image} alt={service.title} fill className="object-contain bg-gray-100" />
            </div>
          )}
          <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold font-secondary mb-4">{service.title}</h1>
          <p className="text-gray-700 font-primary mb-8">{service.description}</p>
          <Link href="/contact" className="btn-primary">Get a free proposal</Link>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-semibold font-secondary mb-3">What you get</h2>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 font-primary">
              <li>Discovery, roadmap, and clear milestones</li>
              <li>Quality engineering with best practices</li>
              <li>Performance, accessibility, and SEO baked in</li>
              <li>Transparent communication and on-time delivery</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-semibold font-secondary mb-3">Why StudioVyn</h2>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 font-primary">
              <li>5+ years experience across industries</li>
              <li>Modern stack: Next.js, React, Node, cloud</li>
              <li>Proven results and happy clients</li>
              <li>Scalable engagement models</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}


