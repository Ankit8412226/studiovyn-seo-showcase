import Image from 'next/image';
import { notFound } from 'next/navigation';
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
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return notFound();
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold font-secondary mb-4">{p.title}</h1>
        <div className="text-green-600 font-primary mb-2">{p.result}</div>
        <div className="text-sm text-gray-600 font-primary mb-4">{p.stack}</div>
        <div className="w-full h-64 relative rounded-2xl overflow-hidden mb-6">
          <Image src={p.image} alt={p.title} fill className="object-contain bg-gray-100" />
        </div>
        <p className="text-gray-800 font-primary leading-7 whitespace-pre-line">{p.body}</p>
        <div className="mt-6 flex gap-3">
          <a href="/contact" className="btn-primary">Start your project</a>
          <a href="/portfolio" className="btn-secondary">Back to portfolio</a>
        </div>
      </section>
    </main>
  );
}


