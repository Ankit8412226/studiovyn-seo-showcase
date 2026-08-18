'use client';

import { ArrowRight, BookOpen, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '../blog/data';

export default function BlogHighlights() {
  const featuredPosts = posts.slice(0, 3);

  return (
    <section
      id="blog"
      className="py-24 sm:py-32 relative bg-[#090d16] border-t border-white/10"
      aria-label="Studio Insights & Technical Guides"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Engineering & SEO Insights</span>
            </div>
            <h2 className="font-secondary text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Latest from the <span className="text-gradient">Studio Journal.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-[#34d399] transition-colors group"
          >
            <span>Explore All 9+ Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-card rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-emerald-500/30 transition-all"
            >
              <div>
                <div className="relative aspect-[16/9] bg-[#0d121d] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                    <Calendar className="w-3.5 h-3.5 text-[#34d399]" />
                    <span>2026 Guide</span>
                  </div>

                  <h3 className="font-secondary text-lg font-bold text-white mb-3 group-hover:text-[#34d399] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed font-primary line-clamp-3 mb-4">
                    {post.metaDescription}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#34d399] group-hover:text-white transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
