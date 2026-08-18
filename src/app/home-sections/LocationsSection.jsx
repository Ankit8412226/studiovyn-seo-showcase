'use client';

import { ArrowRight, MapPin, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LocationsSection() {
  const topCities = [
    { name: 'Patna', state: 'Bihar', slug: 'patna' },
    { name: 'Delhi NCR', state: 'Delhi', slug: 'delhi-ncr' },
    { name: 'Kolkata', state: 'West Bengal', slug: 'kolkata' },
    { name: 'Bangalore', state: 'Karnataka', slug: 'bangalore' },
    { name: 'Mumbai', state: 'Maharashtra', slug: 'mumbai' },
    { name: 'Hyderabad', state: 'Telangana', slug: 'hyderabad' },
    { name: 'Pune', state: 'Maharashtra', slug: 'pune' },
    { name: 'Gaya', state: 'Bihar', slug: 'gaya' },
    { name: 'Bhagalpur', state: 'Bihar', slug: 'bhagalpur' },
    { name: 'Muzaffarpur', state: 'Bihar', slug: 'muzaffarpur' },
    { name: 'Lucknow', state: 'Uttar Pradesh', slug: 'lucknow' },
    { name: 'Jaipur', state: 'Rajasthan', slug: 'jaipur' },
    { name: 'Chandigarh', state: 'Punjab', slug: 'chandigarh' },
    { name: 'Ahmedabad', state: 'Gujarat', slug: 'ahmedabad' },
  ];

  return (
    <section
      id="locations"
      className="py-24 sm:py-32 relative bg-[#07090e] border-t border-white/10"
      aria-label="Location Pages PAN India"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT — 7 COLS */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Multi-City Local Search Reach</span>
            </div>
            
            <h2 className="font-secondary text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Serving businesses across <span className="text-gradient-emerald">23+ major Indian cities.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-primary mb-8">
              We deliver local SEO-optimized, fast website development for businesses in Delhi NCR, Kolkata, Patna, Bihar, Mumbai, Bangalore, and across India. Get custom web solutions tailored for your local target market.
            </p>

            {/* CITY TAGS GRID */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {topCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="px-3.5 py-2 rounded-xl glass-card text-xs font-medium text-slate-200 hover:text-white hover:border-emerald-500/40 transition-all flex items-center gap-1.5"
                >
                  <MapPin className="w-3 h-3 text-[#34d399]" />
                  <span>{city.name}</span>
                </Link>
              ))}
              <Link
                href="/locations"
                className="px-4 py-2 rounded-xl bg-[#34d399]/20 border border-[#34d399]/30 text-[#34d399] text-xs font-bold hover:bg-[#34d399] hover:text-black transition-all"
              >
                + View All 23+ City Pages →
              </Link>
            </div>

            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-sm font-secondary font-bold text-white bg-white/10 hover:bg-[#34d399] hover:text-black px-6 py-3.5 rounded-xl border border-white/15 transition-all shadow-md"
            >
              <span>Explore All Indian City SEO Pages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* RIGHT VISUAL — 5 COLS */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-2xl p-4 border border-white/15 overflow-hidden">
              <div className="relative rounded-xl overflow-hidden aspect-square bg-[#0d121d]">
                <Image
                  src="/location_india_map.png"
                  alt="StudioVyn Location Map Across India"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
