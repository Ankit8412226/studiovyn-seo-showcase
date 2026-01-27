import Link from 'next/link';
import { projects } from './data';
import Card from '@/components/ui/Card';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Button from '@/components/ui/Button';
import SeoProse from '@/components/seo/SeoProse';
import SeoFaq from '@/components/seo/SeoFaq';

export const metadata = {
  title: 'Case Studies | StudioVyn (Results-Driven Web Development)',
  description:
    'Explore StudioVyn case studies: measurable results from high-performance web development, SEO, e-commerce, and product engineering across India.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'StudioVyn Case Studies',
    description:
      'Real projects, real metrics: see how StudioVyn improves traffic, conversions, and performance.',
    url: 'https://studiovyn.in/case-studies',
    images: [{ url: 'https://studiovyn.in/og-image.svg', width: 1200, height: 630, alt: 'StudioVyn Case Studies' }],
  },
};

export default function CaseStudiesIndexPage() {
  const top = projects.slice(0, 24);
  const faqs = [
    {
      q: 'Do you share detailed metrics in every case study?',
      a: 'We include outcomes and measurable improvements where possible (performance, traffic, conversion, efficiency). Some client details may be anonymized for confidentiality.',
    },
    {
      q: 'Can you build something similar for our business?',
      a: 'Yes. Request a free consultation and we’ll recommend a plan based on your goals, market, and constraints.',
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 bg-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-secondary text-gray-900 mb-4">
            Case Studies
          </h1>
          <p className="text-gray-600 font-primary text-lg">
            Proof over promises. Explore real outcomes from websites and products we’ve shipped.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {top.map((p) => (
            <Link key={p.slug} href={`/case-studies/${p.slug}`} className="group">
              <Card variant="elevated" hover padding="none" className="overflow-hidden h-full">
                <div className="relative h-56 bg-gray-100">
                  <OptimizedImage
                    src={p.image}
                    alt={`${p.title} case study`}
                    fill
                    objectFit="cover"
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold font-secondary text-gray-900 group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-green-700 font-primary font-semibold mt-2">{p.result}</p>
                  <p className="text-sm text-gray-600 font-primary mt-2">{p.summary}</p>
                  <div className="mt-4 text-blue-600 font-semibold font-primary">Read case study →</div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/contact" size="lg">
            Get a free consultation
          </Button>
        </div>

        <SeoProse>
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-gray-900">
            Results-driven web development & SEO execution
          </h2>
          <p>
            These case studies show how we combine product thinking, performance engineering, and SEO fundamentals to
            drive outcomes—traffic growth, conversion rate improvements, and faster operations.
          </p>
          <p>
            Next step: explore <Link className="text-blue-600 underline" href="/services">services</Link> or{' '}
            <Link className="text-blue-600 underline" href="/contact">request a proposal</Link>.
          </p>
        </SeoProse>
      </section>

      <SeoFaq title="Case Study FAQs" faqs={faqs} pageUrl="https://studiovyn.in/case-studies" />
    </main>
  );
}


