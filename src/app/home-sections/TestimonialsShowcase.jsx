'use client';

import OptimizedImage from '@/components/ui/OptimizedImage';
import { Linkedin, Quote, Star } from 'lucide-react';

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
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.1),transparent)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(147,51,234,0.1),transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 font-bold text-sm mb-4 sm:mb-6">
               <Quote className="w-4 h-4" /> Client Success
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-secondary mb-4 sm:mb-6 leading-tight text-white">Real Results from <span className="text-blue-500">Real People</span></h2>
            <p className="text-lg sm:text-xl text-white font-primary mb-8 leading-relaxed px-2 sm:px-0">
               Don't just take our word for it. Here's what business leaders across India have to say about partnering with StudioVyn.
            </p>
            <div className="grid grid-cols-2 lg:flex lg:flex-col gap-4">
              <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                 <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-1">4.9 / 5.0</div>
                 <div className="text-[10px] sm:text-sm font-medium text-white uppercase tracking-wider">Avg Rating</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                 <div className="text-2xl sm:text-3xl font-bold text-purple-500 mb-1">150+</div>
                 <div className="text-[10px] sm:text-sm font-medium text-white uppercase tracking-wider">Success Stories</div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((t, i) => (
                  <div key={i} className="group p-6 sm:p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                     <div className="flex items-center gap-1 mb-4 sm:mb-6">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                     </div>
                     <p className="text-base sm:text-lg text-white font-primary italic mb-6 sm:mb-8 leading-relaxed">
                        "{t.content}"
                     </p>
                     <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white/20">
                           <OptimizedImage src={t.image} alt={t.name} fill className="object-cover" />
                        </div>
                        <div>
                           <div className="font-bold font-secondary text-white">{t.name}</div>
                           <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">{t.role}</div>
                        </div>
                        <div className="ml-auto w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                           <Linkedin className="w-4 h-4" />
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
