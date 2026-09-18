import { Globe, MapPin, Trophy, Users } from 'lucide-react';
import Link from 'next/link';
import { cities } from './data';

export const metadata = {
  title: 'Service Locations | Best Web Development Company in India | StudioVyn',
  description: 'StudioVyn provides premium web development and SEO services across 300+ cities in India. Explore our services in Bihar, West Bengal, Delhi NCR, and more.',
  alternates: { canonical: '/locations' },
};

export default function LocationsIndex() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.04),transparent)] pointer-events-none" aria-hidden="true"></div>
      {/* Hero Section */}
      <section className="py-20 bg-white border-b border-slate-200 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-200/60">
            <MapPin className="w-4 h-4 text-blue-600" /> PAN-India Coverage
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-secondary mb-6 text-center text-slate-900">Our Service <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Locations</span></h1>
          <p className="text-xl text-slate-600 font-primary max-w-3xl mx-auto mb-10 text-center">
            We are proud to serve businesses across the length and breadth of India. From metro hubs to growing tier-2 cities, we bring premium web excellence to your doorstep.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
              <Globe className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="font-bold text-slate-900 font-secondary text-center">300+ Cities</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
              <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="font-bold text-slate-900 font-secondary text-center">PAN India</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
              <Trophy className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="font-bold text-slate-900 font-secondary text-center">Top Rated</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
              <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="font-bold text-slate-900 font-secondary text-center">Local SEO</div>
            </div>
          </div>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <h2 className="text-3xl font-bold font-secondary text-center sm:text-left text-slate-900">Explore Our Local Services</h2>
          <div className="text-slate-600 font-primary text-center sm:text-right">Showing {cities.length} locations across India</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((c) => (
            <Link
              key={c}
              href={`/locations/${encodeURIComponent(c.toLowerCase().replace(/\s+/g, '-'))}`}
              className="group p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold font-secondary text-slate-900 group-hover:text-blue-600 transition-colors text-left">{c}</div>
                  <div className="text-xs text-slate-500 font-primary mt-1 text-left">Web Dev & SEO</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MapPin className="w-4 h-4 shrink-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

