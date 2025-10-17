import Link from 'next/link';
import Image from 'next/image';
import { projects } from './case-studies/data';

export default function Portfolio() {
  const top = projects.slice(0, 20);
  return (
    <section id="portfolio" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-secondary mb-3">Selected Work</h2>
          <p className="text-gray-600 font-primary">Case studies that show measurable business impact.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {top.map((p) => (
            <Link key={p.slug} href={`/case-studies/${p.slug}`} className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition bg-white">
              <div className="w-full h-40 relative rounded-xl mb-4 overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-contain bg-gray-100" />
              </div>
              <h3 className="text-xl font-semibold font-secondary mb-2">{p.title}</h3>
              <p className="text-green-600 font-primary mb-2">{p.result}</p>
              <p className="text-sm text-gray-600 font-primary">{p.stack}</p>
              <div className="mt-4 text-blue-600 font-semibold">Read case study →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


