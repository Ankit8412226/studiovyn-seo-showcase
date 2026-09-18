'use client';

import { ArrowRight, MapPin } from 'lucide-react';
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
      className="py-24 sm:py-32 relative bg-[#0B1E3D] text-white border-t border-[#1E3A8A]/50 overflow-hidden"
      aria-label="Location Pages PAN India"
    >
      {/* Deep Navy Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[#1E3A8A]/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT — 7 COLS */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F284E] border border-[#1E3A8A] text-[#60A5FA] text-xs font-semibold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Multi-City Local Search Reach</span>
            </div>
            
            <h2 className="font-secondary text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight mb-6">
              Serving businesses across <span className="font-bold text-[#60A5FA]">23+ major Indian cities.</span>
            </h2>

            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed font-primary mb-8">
              We deliver local SEO-optimized, fast website development for businesses in Delhi NCR, Kolkata, Patna, Bihar, Mumbai, Bangalore, and across India. Get custom web solutions tailored for your local target market.
            </p>

            {/* CITY TAGS GRID */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {topCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="px-3.5 py-2 rounded-xl bg-[#0F284E] border border-[#1E3A8A] text-xs font-medium text-[#E2E8F0] hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span>{city.name}</span>
                </Link>
              ))}
              <Link
                href="/locations"
                className="px-4 py-2 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/40 text-[#60A5FA] text-xs font-bold hover:bg-[#2563EB] hover:text-white transition-all flex items-center"
              >
                + View All 23+ City Pages →
              </Link>
            </div>

            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-sm font-secondary font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore All Indian City SEO Pages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* RIGHT VISUAL — 5 COLS */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#071326] rounded-3xl p-3 sm:p-4 border border-[#1E3A8A] shadow-2xl overflow-hidden relative group">
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#050D1A]">
                <Image
                  src="/location_india_map.png"
                  alt="StudioVyn Location Map Across India"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3.5 flex items-center justify-between px-2 text-xs text-[#94A3B8] font-primary">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#60A5FA] animate-pulse inline-block" />
                  Active Client Hubs
                </span>
                <span className="text-[#64748B] font-mono">PAN India Presence</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
