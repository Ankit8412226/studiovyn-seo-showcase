'use client';

import OptimizedImage from '@/components/ui/OptimizedImage';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsShowcase() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart India',
      company: 'TechStart',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces',
      content: 'StudioVyn transformed our online presence completely. The website they built increased our leads by 300% in just 3 months. Their attention to detail and professionalism is unmatched.',
      rating: 5,
      result: '300% increase in leads',
    },
    {
      name: 'Priya Sharma',
      role: 'Founder, EcomHub',
      company: 'EcomHub',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces',
      content: 'Working with StudioVyn was a game-changer. They delivered our e-commerce platform ahead of schedule, and the quality exceeded our expectations. Highly recommend!',
      rating: 5,
      result: 'Launched 2 weeks early',
    },
    {
      name: 'Amit Patel',
      role: 'CTO, FinTech Solutions',
      company: 'FinTech',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces',
      content: 'The mobile app they developed for us has been downloaded over 50K times with a 4.8-star rating. Their technical expertise and user-centric approach made all the difference.',
      rating: 5,
      result: '50K+ downloads',
    },
    {
      name: 'Sneha Reddy',
      role: 'Marketing Director, GrowthCo',
      company: 'GrowthCo',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces',
      content: "StudioVyn's digital marketing services helped us achieve 250% ROI in the first quarter. Their data-driven approach and creative strategies are exceptional.",
      rating: 5,
      result: '250% ROI',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white text-[#0F172A] relative overflow-hidden border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Stats Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] text-[#2563EB] font-semibold text-xs mb-3.5 border border-[#DBEAFE]">
              <Quote className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Client Success Verification</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal font-secondary mb-3 leading-tight text-[#0F172A]">
              Real Results from <span className="font-bold text-[#2563EB]">Real Leaders</span>
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] font-primary leading-relaxed">
              Don't just take our word for it. Here's what business leaders across India have to say about partnering with StudioVyn.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE]">
              <div className="text-2xl sm:text-3xl font-bold text-[#2563EB] font-primary mb-0.5">
                4.9 / 5.0
              </div>
              <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                Average Client Rating
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-[#EFF6FF] border border-[#DBEAFE]">
              <div className="text-2xl sm:text-3xl font-bold text-[#2563EB] font-primary mb-0.5">
                150+
              </div>
              <div className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider">
                Delivered Deployments
              </div>
            </div>
          </div>
        </div>

        {/* Compact Side-by-Side Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#BFDBFE] hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Subtle Primary Blue Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#2563EB] fill-[#2563EB]" />
                  ))}
                  <span className="text-[11px] font-medium text-[#2563EB] ml-1.5 font-mono">5.0</span>
                </div>

                {/* Compact Quote Text */}
                <blockquote className="text-sm sm:text-[15px] text-[#0F172A] font-secondary font-normal italic leading-relaxed mb-6">
                  "{t.content}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/70">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[#DBEAFE]">
                  <OptimizedImage
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="overflow-hidden">
                  <div className="font-semibold font-secondary text-sm text-[#0F172A] truncate">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-[#2563EB] font-medium truncate">
                    {t.role}
                  </div>
                  <div className="text-[10px] text-[#64748B] truncate">
                    {t.result}
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
