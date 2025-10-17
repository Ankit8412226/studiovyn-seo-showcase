import Link from 'next/link';
import { cities } from './data';

export const metadata = {
  title: 'Locations | StudioVyn',
  description: 'City-specific web development services across India: Bihar, West Bengal, Delhi NCR, and more.',
  alternates: { canonical: '/locations' },
};

export default function LocationsIndex() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-secondary mb-6">We serve these locations</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((c) => (
            <Link key={c} href={`/locations/${encodeURIComponent(c.toLowerCase().replace(/\s+/g,'-'))}`} className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition">
              <div className="font-semibold font-secondary">{c}</div>
              <div className="text-sm text-gray-600 font-primary">Web development & SEO services</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}


