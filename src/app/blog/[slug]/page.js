import SeoFaq from '@/components/seo/SeoFaq';
import SeoProse from '@/components/seo/SeoProse';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '../../blog/data';
const map = Object.fromEntries(posts.map((p) => [p.slug, p]));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = map[slug];
  if (!post) return {};
  const title = post.metaTitle || `${post.title} | StudioVyn`;
  const description = post.metaDescription || post.body.slice(0, 155);
  return {
    title,
    description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title,
      description,
      url: `https://studiovyn.in/blog/${params.slug}`,
      type: 'article',
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.image],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = map[slug];
  if (!post) return null;
  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);
  const faqs = [
    {
      q: `How does ${post.title} apply to my business?`,
      a: 'Use this guide as a checklist: implement the technical fixes first (performance + SEO foundations), then improve content structure and internal links, and finally optimize conversions with clear CTAs and trust proof.',
    },
    {
      q: 'Can StudioVyn help implement this?',
      a: 'Yes. If you want us to execute the work, request a free consultation and we’ll recommend the highest-ROI plan for your goals.',
    },
  ];
  return (
    <main className="min-h-screen pt-32 pb-16 bg-[#0b0d12] relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-glow opacity-20" aria-hidden="true"></div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold font-secondary mb-4 text-white">{post.title}</h1>
        <div className="w-full h-56 relative rounded-2xl mb-6 overflow-hidden">
          <Image src={post.image} alt={`${post.title} - StudioVyn blog`} fill className="object-cover bg-[#0f172a]" />
        </div>
        <article className="text-[#cbd5f5] font-primary leading-7 whitespace-pre-line">
          {post.body}
        </article>

        <div className="mt-10 rounded-2xl border border-[#1f2937] bg-[#121723] p-6">
          <h2 className="text-2xl font-bold font-secondary text-white mb-3">Related services</h2>
          <ul className="space-y-2 text-slate-300 font-primary">
            <li><Link className="text-emerald-200 underline" href="/services/web-development">Web Development</Link></li>
            <li><Link className="text-emerald-200 underline" href="/services/digital-marketing">Digital Marketing</Link></li>
            <li><Link className="text-emerald-200 underline" href="/services/e-commerce">E-commerce Development</Link></li>
          </ul>

          <h3 className="text-xl font-semibold font-secondary text-white mt-6 mb-2">Popular guides</h3>
          <ul className="space-y-2 text-[#94a3b8] font-primary">
            {relatedPosts.map((p) => (
              <li key={p.slug}>
                <Link className="text-emerald-200 underline" href={`/blog/${p.slug}`}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <SeoProse>
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-white">
            Want this implemented for you?
          </h2>
          <p>
            If you’re serious about ranking and conversions, the fastest path is execution. Explore{' '}
            <Link className="text-emerald-200 underline" href="/services">our services</Link>, review{' '}
            <Link className="text-emerald-200 underline" href="/portfolio">recent work</Link>, or{' '}
            <Link className="text-emerald-200 underline" href="/contact">book a free consultation</Link>.
          </p>
        </SeoProse>
      </section>

      <SeoFaq title="FAQ" faqs={faqs} pageUrl={`https://studiovyn.in/blog/${params.slug}`} />
    </main>
  );
}
