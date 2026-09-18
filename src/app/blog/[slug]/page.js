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
    <main className="min-h-screen pt-32 pb-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.03),transparent)] pointer-events-none" aria-hidden="true"></div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        <h1 className="text-4xl font-bold font-secondary mb-4 text-slate-900">{post.title}</h1>
        <div className="w-full h-56 relative rounded-2xl mb-6 overflow-hidden border border-slate-200 bg-slate-50 shadow-md">
          <Image src={post.image} alt={`${post.title} - StudioVyn blog`} fill className="object-contain" />
        </div>
        <article className="text-slate-700 font-primary leading-7 whitespace-pre-line text-lg">
          {post.body}
        </article>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-bold font-secondary text-slate-900 mb-3">Related services</h2>
          <ul className="space-y-2 text-slate-600 font-primary">
            <li><Link className="text-blue-600 font-medium underline" href="/services/web-development">Web Development</Link></li>
            <li><Link className="text-blue-600 font-medium underline" href="/services/digital-marketing">Digital Marketing</Link></li>
            <li><Link className="text-blue-600 font-medium underline" href="/services/e-commerce">E-commerce Development</Link></li>
          </ul>

          <h3 className="text-xl font-semibold font-secondary text-slate-900 mt-6 mb-2">Popular guides</h3>
          <ul className="space-y-2 text-slate-600 font-primary">
            {relatedPosts.map((p) => (
              <li key={p.slug}>
                <Link className="text-blue-600 font-medium underline" href={`/blog/${p.slug}`}>{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <SeoProse>
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-slate-900 mt-12">
            Want this implemented for you?
          </h2>
          <p className="text-slate-600">
            If you’re serious about ranking and conversions, the fastest path is execution. Explore{' '}
            <Link className="text-blue-600 font-medium underline" href="/services">our services</Link>, review{' '}
            <Link className="text-blue-600 font-medium underline" href="/portfolio">recent work</Link>, or{' '}
            <Link className="text-blue-600 font-medium underline" href="/contact">book a free consultation</Link>.
          </p>
        </SeoProse>
      </section>

      <SeoFaq title="FAQ" faqs={faqs} pageUrl={`https://studiovyn.in/blog/${params.slug}`} />
    </main>
  );
}

