import Link from 'next/link';
import { posts } from './data';
import Image from 'next/image';

export const metadata = {
  title: 'Blog | StudioVyn',
  description: 'Guides on web development, SEO, performance, and conversions in India.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-4xl font-bold font-secondary mb-3">Insights & Guides</h1>
          <p className="text-gray-600 font-primary">Actionable articles to grow your business online.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition bg-white">
              <div className="w-full h-40 relative rounded-xl mb-4 overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-contain bg-gray-100" />
              </div>
              <h2 className="text-xl font-semibold font-secondary mb-2">{p.title}</h2>
              <p className="text-gray-600 font-primary text-sm">{(p.body || '').slice(0, 140)}...</p>
              <div className="mt-4 text-blue-600 font-semibold">Read more →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}


