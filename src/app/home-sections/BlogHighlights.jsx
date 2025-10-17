import Link from 'next/link';
import { posts } from '../../app/blog/data';

export default function BlogHighlights() {
  const top = posts.slice(0, 3);
  return (
    <section className="py-14 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary">From the blog</h2>
          <Link href="/blog" className="text-blue-600 font-medium">View all</Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {top.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="font-semibold font-secondary mb-1">{p.title}</div>
              <div className="text-sm text-gray-600 font-primary line-clamp-2">{p.body.replace(/\n/g, ' ').slice(0, 160)}…</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


