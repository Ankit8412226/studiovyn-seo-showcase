'use client';

import { CheckCircle2, Star } from 'lucide-react';

export default function Testimonials() {
  const quotes = [
    {
      name: 'Aman Singhania',
      role: 'Co-Founder, UrbanKart D2C',
      text:
        'We were struggling with 4s+ load times on WooCommerce during sales. StudioVyn rebuilt our storefront on Next.js. The checkout is instant now, and bounce rate on mobile dropped by 35%.',
      metric: '⚡ 0.9s Next.js Load Speed',
      time: 'March 2026',
    },
    {
      name: 'Dr. Neha Mukherjee',
      role: 'Director, CurePoint Clinics',
      text:
        'What stood out most was their communication. We had clear weekly sprint updates, and they delivered our doctor appointment booking portal ahead of time. Patients love how intuitive it is.',
      metric: '⏱️ Shipped 2 weeks early',
      time: 'February 2026',
    },
    {
      name: 'Karan Verma',
      role: 'Head of Engineering, FinFlow',
      text:
        'Finding a team that writes clean TypeScript and truly understands scalable frontend architecture is rare. StudioVyn plugged right into our API endpoints and shipped a rock-solid dashboard.',
      metric: '🚀 Zero launch bugs',
      time: 'January 2026',
    },
    {
      name: 'Ritika Sengupta',
      role: 'Principal, Studio Arc Designs',
      text:
        'As an architecture firm, aesthetics and typography were non-negotiable. StudioVyn took our Figma designs and built a buttery smooth website that generates high-ticket project leads.',
      metric: '📈 +180% Inbound Inquiries',
      time: 'December 2025',
    },
    {
      name: 'Vikram Khurana',
      role: 'Founder, CloudScale Analytics',
      text:
        'High-performance Next.js engineering with great responsiveness on Slack. Our Core Web Vitals score jumped to 98 on mobile and organic traffic has steadily climbed.',
      metric: '🏆 98 Mobile Core Web Vitals',
      time: 'November 2025',
    },
    {
      name: 'Sanjay Pandey',
      role: 'Operations Head, Apex Logistics',
      text:
        'Their shipment tracking portal automated what used to take our dispatch team hours every day. Clear milestones, clean code, and solid post-launch support.',
      metric: '⚙️ 50% Reduction in Dispatch Time',
      time: 'October 2025',
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.03),transparent)] pointer-events-none" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-600 font-semibold text-xs mb-3.5 border border-blue-200/70">
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-secondary mb-3 text-slate-900">Client Testimonials</h2>
          <p className="text-slate-600 font-primary">Real stories from founders and teams we have partnered with.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star key={starIdx} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Verified</span>
                  </div>
                </div>
                <p className="text-slate-700 font-primary mb-5 leading-relaxed text-sm">&ldquo;{q.text}&rdquo;</p>
                <div className="mb-6 inline-flex items-center text-xs font-semibold text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded-lg border border-blue-200/50">
                  {q.metric}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm text-slate-900 font-secondary">{q.name}</div>
                  <div className="text-xs text-slate-500 font-primary">{q.role}</div>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">{q.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


