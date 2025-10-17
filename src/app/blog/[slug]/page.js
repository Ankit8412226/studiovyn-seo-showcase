import Image from 'next/image';
import { posts } from '../../blog/data';
const map = Object.fromEntries(posts.map((p) => [p.slug, p]));

export async function generateMetadata({ params }) {
  const post = map[params.slug];
  if (!post) return {};
  return {
    title: `${post.title} | StudioVyn`,
    description: post.body.slice(0, 150),
    alternates: { canonical: `/blog/${params.slug}` },
  };
}

export default function BlogPost({ params }) {
  const post = map[params.slug];
  if (!post) return null;
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold font-secondary mb-4">{post.title}</h1>
        <div className="w-full h-56 relative rounded-2xl mb-6 overflow-hidden">
          <Image src={post.image} alt={post.title} fill className="object-contain bg-gray-100" />
        </div>
        <p className="text-gray-800 font-primary leading-7 whitespace-pre-line">{post.body}</p>
      </section>
    </main>
  );
}


