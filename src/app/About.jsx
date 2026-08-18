import Image from 'next/image';
import { Award, CheckCircle2, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#07090e] relative overflow-hidden border-t border-white/10">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* GRID LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* IMAGE SIDE — 6 COLS */}
          <div className="lg:col-span-6 relative">
            <div className="glass-card p-3 rounded-2xl border border-white/15 overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0d121d]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                  alt="StudioVyn Senior Software Team Collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* METRICS STRIP */}
            <div className="glass-card mt-4 p-4 rounded-xl border border-white/15 bg-[#0d121d] flex items-center justify-around text-center">
              <div>
                <div className="font-secondary text-2xl font-black text-white">150+</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Products Shipped</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="font-secondary text-2xl font-black text-[#34d399]">98%</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Client Satisfaction</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="font-secondary text-2xl font-black text-white">23+</div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">City SEO Reach</div>
              </div>
            </div>
          </div>

          {/* CONTENT SIDE — 6 COLS */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>About StudioVyn</span>
            </div>

            <h2 className="font-secondary text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Empowering businesses with <span className="text-gradient-emerald">engineering rigour.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-primary mb-8">
              StudioVyn is a senior digital engineering studio serving clients across India. Operating from engineering hubs serving Delhi NCR, Kolkata, Patna, and PAN India, we craft modern web applications, e-commerce storefronts, and SEO hubs built for long-term scalability.
            </p>

            <div className="space-y-3 mb-10 text-sm font-primary text-slate-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#34d399] shrink-0 mt-0.5" />
                <span>Multi-city local search strategies tailored for Indian consumer intent.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#34d399] shrink-0 mt-0.5" />
                <span>Production-grade web architecture built with React 19, Next.js 16, and Node.js.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#34d399] shrink-0 mt-0.5" />
                <span>Transparent communication, fixed milestone timelines, and on-time delivery.</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio" className="px-6 py-3.5 rounded-xl bg-[#34d399] text-black font-secondary font-bold text-sm hover:bg-[#10b981] transition-all">
                View Selected Work
              </Link>
              <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-secondary font-semibold text-sm hover:bg-white/10 transition-all">
                Get a Strategy Call
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
