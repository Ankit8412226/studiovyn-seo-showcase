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
      className="py-24 sm:py-32 relative bg-white border-b border-slate-200/80 overflow-hidden"
      aria-label="StudioVyn vs Traditional Agencies Comparison"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
            <span>Why StudioVyn Wins</span>
          </div>
          <h2 className="font-secondary text-3xl sm:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-4">
            The difference is in the <span className="font-bold text-[#2563EB]">engineering quality.</span>
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg font-primary leading-relaxed">
            See how StudioVyn compares to traditional web design agencies and solo freelancers.
          </p>
        </div>

        {/* COMPARISON TABLE CARD */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-slate-200 bg-[#F8FAFC]">
                  <th className="p-6 sm:p-7 font-secondary font-medium text-xs sm:text-sm text-[#64748B] uppercase tracking-wider w-1/3">
                    Feature & Standard
                  </th>
                  <th className="p-6 sm:p-7 font-secondary font-bold text-sm sm:text-base text-[#2563EB] bg-[#EFF6FF] border-x border-[#DBEAFE] w-1/3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#2563EB] inline-block" />
                      <span>StudioVyn Studio</span>
                    </div>
                  </th>
                  <th className="p-6 sm:p-7 font-secondary font-medium text-xs sm:text-sm text-[#64748B] uppercase tracking-wider w-1/3">
                    Traditional Agencies / Freelancers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-primary">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 sm:p-7 font-medium text-[#0F172A] font-secondary">
                      {row.feature}
                    </td>
                    <td className="p-6 sm:p-7 font-medium text-[#0F172A] bg-[#EFF6FF]/60 border-x border-[#DBEAFE]">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                        <span className="text-[#0F172A] leading-relaxed">{row.studiovyn}</span>
                      </div>
                    </td>
                    <td className="p-6 sm:p-7 text-[#64748B] bg-white">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#F1F5F9] text-[#64748B] flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="leading-relaxed">{row.agencies}</span>
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
