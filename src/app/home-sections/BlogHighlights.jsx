import OptimizedImage from '@/components/ui/OptimizedImage';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import { posts } from '../../app/blog/data';

export default function BlogHighlights() {
  const top = posts.slice(0, 3);

  return (
    <section
      id="blog"
      className="py-16 sm:py-24 lg:py-32 mt-20 sm:mt-24 lg:mt-32 bg-[#0b0d12] scroll-mt-32"
      aria-labelledby="blog-highlights-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 sm:mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2
              id="blog-highlights-heading"
              className="text-3xl sm:text-5xl font-bold font-secondary mb-3"
            >
              Latest <span className="text-emerald-200">Insights</span>
            </h2>
            <p className="text-[#94a3b8] font-primary text-base sm:text-lg">Expert guides on web development, SEO, and business growth in India.</p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-emerald-200 font-bold font-secondary group"
            title="View all blog posts on StudioVyn"
          >
            Explore All Articles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {top.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col h-full rounded-3xl bg-[#121723] overflow-hidden border border-[#1f2937] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              title={`Read "${p.title}" blog post`}
            >
              <div className="relative h-56 overflow-hidden">
                 <OptimizedImage
                   src={p.image}
                   alt={p.title}
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#0f1320]/90 backdrop-blur-sm text-emerald-200 text-xs font-bold uppercase tracking-wider shadow-sm">
                       SEO & Tech
                    </span>
                 </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[#94a3b8] text-[10px] sm:text-xs font-medium mb-3 sm:mb-4">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Jan 27, 2026</span>
                </div>
                <h3 className="text-xl font-bold font-secondary mb-4 text-white group-hover:text-emerald-200 transition-colors line-clamp-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[#94a3b8] font-primary line-clamp-3 mb-6 flex-1">
                  {p.body.replace(/\n+/g, ' ').slice(0, 150)}...
                </p>
                <div className="flex items-center gap-2 text-emerald-200 font-bold text-sm">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
