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
  return {
    title: `${post.title} | StudioVyn`,
    description: post.body.slice(0, 150),
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title: `${post.title} | StudioVyn`,
      description: post.body.slice(0, 160),
      url: `https://studiovyn.in/blog/${params.slug}`,
      type: 'article',
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = map[slug];
  if (!post) return null;
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
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold font-secondary mb-4">{post.title}</h1>
        <div className="w-full h-56 relative rounded-2xl mb-6 overflow-hidden">
          <Image src={post.image} alt={`${post.title} - StudioVyn blog`} fill className="object-cover bg-gray-100" />
        </div>
        <article className="text-gray-800 font-primary leading-7 whitespace-pre-line">
          {post.body}
        </article>

        <SeoProse>
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-gray-900">
            Want this implemented for you?
          </h2>
          <p>
            If you’re serious about ranking and conversions, the fastest path is execution. Explore{' '}
            <Link className="text-blue-600 underline" href="/services">our services</Link>, review{' '}
            <Link className="text-blue-600 underline" href="/portfolio">recent work</Link>, or{' '}
            <Link className="text-blue-600 underline" href="/contact">book a free consultation</Link>.
          </p>
        </SeoProse>
      </section>

      <SeoFaq title="FAQ" faqs={faqs} pageUrl={`https://studiovyn.in/blog/${params.slug}`} />
    </main>
  );
}


