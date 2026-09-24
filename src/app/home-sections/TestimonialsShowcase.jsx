'use client';

import OptimizedImage from '@/components/ui/OptimizedImage';
import { CheckCircle2, MessageSquareQuote, Star } from 'lucide-react';

export default function TestimonialsShowcase() {
  const testimonials = [
    {
      name: 'Aman Singhania',
      role: 'Co-Founder',
      company: 'UrbanKart D2C',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces',
      project: 'Next.js E-Commerce Store',
      content:
        'We were struggling with 4s+ load times on WooCommerce during festive sales. StudioVyn rebuilt our entire storefront on Next.js. Our checkout is instant now, and bounce rate on mobile dropped by nearly 35% in month one.',
      rating: 5,
      metric: '⚡ 0.9s Mobile Load Time',
      timeframe: 'Delivered in 4 weeks',
    },
    {
      name: 'Dr. Neha Mukherjee',
      role: 'Operations Director',
      company: 'CurePoint Clinics',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces',
      project: 'Custom Booking Portal',
      content:
        'What stood out most was their communication. No complicated jargon or empty promises. We had clear weekly sprint updates, and they delivered our doctor appointment booking portal ahead of time. Patients love the clean flow.',
      rating: 5,
      metric: '⏱️ Shipped 2 weeks early',
      timeframe: 'Custom Web Portal',
    },
    {
      name: 'Karan Verma',
      role: 'Head of Engineering',
      company: 'FinFlow Labs',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces',
      project: 'B2B SaaS Dashboard',
      content:
        'Finding an engineering team that writes clean TypeScript and truly understands scalable frontend architecture is tough. StudioVyn plugged right into our API endpoints and shipped a rock-solid dashboard without needing rework.',
      rating: 5,
      metric: '🚀 Zero launch bugs',
      timeframe: '6-week sprint',
    },
    {
      name: 'Ritika Sengupta',
      role: 'Principal Architect',
      company: 'Studio Arc Designs',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces',
      project: 'Portfolio & SEO Strategy',
      content:
        'As an architecture firm, aesthetics and typography were non-negotiable. StudioVyn took our Figma designs and built a buttery smooth website. Within two months, we started receiving direct high-ticket project inquiries from organic search.',
      rating: 5,
      metric: '📈 +180% Inbound Inquiries',
      timeframe: 'Brand & SEO Build',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50 text-[#0F172A] relative overflow-hidden border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Stats Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs mb-3.5 border border-blue-200/70">
              <MessageSquareQuote className="w-3.5 h-3.5 text-blue-600" />
              <span>Real Client Stories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-secondary mb-3 leading-tight text-slate-900">
              What Founders & Teams <span className="text-blue-600">Say About Us</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-primary leading-relaxed">
              Honest feedback from founders, engineering leads, and business owners we have built with.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-1.5 mb-1">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-primary">4.9</span>
                <span className="text-xs text-slate-500 font-medium">/ 5.0</span>
              </div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                100% Verified Reviews
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 font-primary mb-0.5">
                98%
              </div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                On-Time Milestones
              </div>
            </div>
          </div>
        </div>

        {/* Compact Side-by-Side Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Natural Human Quote Text */}
                <p className="text-sm text-slate-700 font-primary leading-relaxed mb-5">
                  &ldquo;{t.content}&rdquo;
                </p>

                {/* Metric Chip */}
                <div className="mb-6 inline-flex items-center text-xs font-semibold text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded-lg border border-blue-200/50">
                  {t.metric}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-slate-200 shadow-xs">
                  <OptimizedImage
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="overflow-hidden">
                  <div className="font-semibold font-secondary text-sm text-slate-900 truncate">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-600 truncate">
                    {t.role}, <span className="font-medium text-slate-800">{t.company}</span>
                  </div>
                  <div className="text-[11px] text-blue-600 font-medium truncate">
                    {t.timeframe}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
