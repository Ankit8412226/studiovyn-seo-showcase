'use client';

import { Check, ShieldCheck, X } from 'lucide-react';

export default function ComparisonSection() {
  const comparisonRows = [
    {
      feature: 'Development Architecture',
      studiovyn: 'Custom React 19 / Next.js 16 Production Stack',
      agencies: 'Generic WordPress / Elementor Themes',
      freelancers: 'Variable / Non-Standardized Code',
    },
    {
      feature: 'Page Speed & Core Web Vitals',
      studiovyn: 'Guaranteed 95+ Lighthouse Score & Sub-Second Loading',
      agencies: 'Heavy Plugins & Slow Loading Times (40-60 Score)',
      freelancers: 'Unpredictable Speed Optimization',
    },
    {
      feature: 'Built-in Technical SEO & Schema',
      studiovyn: 'Structured LocalBusiness & FAQ Schema Built-in',
      agencies: 'Basic Yoast Plugin Setup (Extra Charge)',
      freelancers: 'Rarely Implemented',
    },
    {
      feature: 'Execution & Team Structure',
      studiovyn: 'Direct Access to Senior Software Engineers',
      agencies: 'Account Managers & Junior Intern Outsourcing',
      freelancers: 'Single Point of Failure / Limited Availability',
    },
    {
      feature: 'Delivery & Pricing Transparency',
      studiovyn: 'Fixed Milestone Timeline & Fixed Price Guarantee',
      agencies: 'Scope Creep & Hidden Additional Retainers',
      freelancers: 'Delays & Inconsistent Communication',
    },
  ];

  return (
    <section
      id="comparison"
      className="py-24 sm:py-32 relative bg-[#090d16] border-t border-white/10"
      aria-label="StudioVyn vs Traditional Agencies Comparison"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why StudioVyn Wins</span>
          </div>
          <h2 className="font-secondary text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            The difference is in the <span className="text-gradient-emerald">engineering quality.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-primary leading-relaxed">
            See how StudioVyn compares to traditional web design agencies and solo freelancers.
          </p>
        </div>

        {/* COMPARISON TABLE WIDGET */}
        <div className="glass-card rounded-3xl border border-white/15 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 bg-[#0d121d]">
                  <th className="p-6 font-secondary font-bold text-sm text-slate-400 uppercase tracking-wider w-1/3">
                    Feature & Standard
                  </th>
                  <th className="p-6 font-secondary font-black text-base text-[#34d399] bg-emerald-500/10 border-x border-emerald-500/20 w-1/3">
                    StudioVyn Studio
                  </th>
                  <th className="p-6 font-secondary font-bold text-sm text-slate-400 uppercase tracking-wider w-1/3">
                    Traditional Agencies / Freelancers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm font-primary">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 font-semibold text-white font-secondary">
                      {row.feature}
                    </td>
                    <td className="p-6 font-medium text-slate-200 bg-emerald-500/5 border-x border-emerald-500/10">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-[#34d399] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{row.studiovyn}</span>
                      </div>
                    </td>
                    <td className="p-6 text-slate-400">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{row.agencies}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
