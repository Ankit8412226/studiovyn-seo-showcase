'use client';

import { Award, Quote, Star } from 'lucide-react';

export default function TestimonialsShowcase() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO',
      company: 'TechStart India',
      initials: 'RK',
      content: 'StudioVyn transformed our web infrastructure completely. The platform they built increased our qualified lead volume by 300% in just 3 months. Their technical attention to detail is unmatched.',
      result: '+300% Lead Growth',
      location: 'Delhi NCR',
    },
    {
      name: 'Priya Sharma',
      role: 'Founder',
      company: 'EcomHub Store',
      initials: 'PS',
      content: 'Working with StudioVyn was a game-changer. They delivered our full-stack e-commerce platform ahead of schedule, with seamless UPI payment integration. Highly recommended for ambitious brands.',
      result: 'Delivered 2 Wks Early',
      location: 'Bangalore',
    },
    {
      name: 'Amit Patel',
      role: 'CTO',
      company: 'FinTech Solutions',
      initials: 'AP',
      content: 'The custom app & dashboard they developed has scaled seamlessly across 50,000+ active users. Their technical authority, security standards, and UX speed made all the difference.',
      result: '50K+ Active Users',
      location: 'Mumbai',
    },
    {
      name: 'Sneha Reddy',
      role: 'Marketing Director',
      company: 'GrowthCo Enterprise',
      initials: 'SR',
      content: 'StudioVyn’s technical SEO and location-based strategy delivered 250% ROI in our first quarter. Their engineering team understands real business metrics, not just aesthetics.',
      result: '250% First Quarter ROI',
      location: 'Hyderabad',
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 relative bg-[#07090e] border-t border-white/10"
      aria-label="Client Testimonials & Feedback"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Client Impact</span>
            </div>
            <h2 className="font-secondary text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Trusted by business leaders <span className="text-gradient-emerald">across India.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 glass-card px-4 py-2 rounded-xl border border-white/10">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-bold text-white">4.9 / 5.0 Rating</span>
            <span className="text-xs text-slate-400">(150+ Delivered Projects)</span>
          </div>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-emerald-500/30 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-[#34d399] text-xs font-mono font-bold border border-emerald-500/20">
                    {item.result}
                  </span>
                </div>

                <p className="text-slate-200 text-base leading-relaxed font-primary italic mb-8">
                  "{item.content}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-secondary font-bold text-sm text-[#34d399]">
                    {item.initials}
                  </div>
                  <div>
                    <div className="font-secondary font-bold text-white text-sm">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {item.role}, {item.company}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-500">{item.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
