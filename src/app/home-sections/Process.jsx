'use client';

import { CheckCircle, Code, Eye, FileText, Layers, Rocket, Search } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Architecture',
      duration: 'Week 1',
      icon: Search,
      description: 'We audit your requirements, analyze target user personas, and design the technical stack and SEO keyword strategy.',
    },
    {
      step: '02',
      title: 'UI/UX Design Systems',
      duration: 'Week 2',
      icon: Layers,
      description: 'We craft high-fidelity responsive wireframes and interactive prototypes in Figma with clear conversion pathways.',
    },
    {
      step: '03',
      title: 'Agile Engineering',
      duration: 'Weeks 3-4',
      icon: Code,
      description: 'Our engineers build your solution using Next.js/React, implementing clean APIs, fast rendering, and type safety.',
    },
    {
      step: '04',
      title: 'SEO & Quality Assurance',
      duration: 'Week 5',
      icon: CheckCircle,
      description: 'Rigorous cross-browser testing, Core Web Vitals optimization, schema validation, and accessibility compliance.',
    },
    {
      step: '05',
      title: 'Production Deployment',
      duration: 'Week 6',
      icon: Rocket,
      description: 'Smooth launch on enterprise cloud (AWS/Vercel) with SSL, domain DNS configuration, and Google Search Console indexing.',
    },
  ];

  return (
    <section
      className="py-24 sm:py-32 relative bg-[#090d16] border-t border-white/10"
      aria-label="Our Development Process"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Rocket className="w-3.5 h-3.5" />
            <span>Structured Execution</span>
          </div>
          <h2 className="font-secondary text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            From initial concept to <span className="text-gradient">high-performance launch.</span>
          </h2>
          <p className="text-slate-400 text-lg font-primary leading-relaxed">
            Our transparent 5-step methodology delivers enterprise-quality results with zero guesswork and predictable delivery dates.
          </p>
        </div>

        {/* PROCESS TIMELINE PIPELINE */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.step}
                className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between relative group hover:border-emerald-500/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xl font-bold text-[#34d399]">
                      {item.step}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-[10px] font-mono text-slate-400 border border-white/10">
                      {item.duration}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 mb-4 group-hover:bg-[#34d399] group-hover:text-black transition-all">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="font-secondary text-lg font-bold text-white mb-2 group-hover:text-[#34d399] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed font-primary">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
