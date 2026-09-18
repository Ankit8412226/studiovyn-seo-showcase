import OptimizedImage from '@/components/ui/OptimizedImage';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import { posts } from '../../app/blog/data';

export default function BlogHighlights() {
  const top = posts.slice(0, 3);

  return (
    <section
      id="blog"
      className="py-24 sm:py-32 bg-[#EFF6FF] border-b border-slate-200/80 scroll-mt-24"
      aria-labelledby="blog-highlights-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 sm:mb-16 gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] block mb-2">
              Engineering & Strategy Journal
            </span>
            <h2
              id="blog-highlights-heading"
              className="text-3xl sm:text-5xl font-normal font-secondary mb-3 text-[#0F172A]"
            >
              Latest <span className="font-bold text-[#2563EB]">Insights</span>
            </h2>
            <p className="text-[#64748B] font-primary text-base sm:text-lg">
              Expert guides on web development, SEO, and business growth in India.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1D4ED8] font-semibold font-primary group transition-colors text-sm"
            title="View all blog posts on StudioVyn"
          >
            <span>Explore All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {top.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col h-full rounded-2xl bg-white overflow-hidden border border-[#DBEAFE] shadow-xs hover:shadow-lg hover:border-[#93C5FD] transition-all duration-300"
              title={`Read "${p.title}" blog post`}
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <OptimizedImage
                  src={p.image || p.coverImage}
                  alt={p.title}
                  fill
                  className="group-hover:scale-105 transition-transform duration-500 object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-[#64748B] mb-3 font-primary">
                  <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{p.date}</span>
                  <span>•</span>
                  <span>{p.readTime}</span>
                </div>
                <h3 className="font-semibold font-secondary text-lg text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] font-primary line-clamp-2 mb-4 leading-relaxed">
                  {p.excerpt}
                </p>
                <div className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB]">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
