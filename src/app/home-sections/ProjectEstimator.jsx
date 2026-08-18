'use client';

import { ArrowRight, Calculator, Check, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectEstimator() {
  const [projectType, setProjectType] = useState('website');
  const [timeline, setTimeline] = useState('standard');
  const [selectedFeatures, setSelectedFeatures] = useState([
    'seo',
    'responsive',
  ]);

  const projectTypes = [
    { id: 'website', name: 'Web & Marketing Site', basePrice: 35000, baseWeeks: '2-3 Wks' },
    { id: 'ecommerce', name: 'E-Commerce Storefront', basePrice: 65000, baseWeeks: '3-4 Wks' },
    { id: 'saas', name: 'SaaS / Web Application', basePrice: 95000, baseWeeks: '4-6 Wks' },
    { id: 'mobile', name: 'iOS & Android App', basePrice: 85000, baseWeeks: '4-6 Wks' },
  ];

  const featureOptions = [
    { id: 'seo', name: 'Technical SEO & Multi-City Schema', price: 15000 },
    { id: 'payment', name: 'UPI & Razorpay Payment Integration', price: 12000 },
    { id: 'cms', name: 'Headless CMS / Admin Dashboard', price: 18000 },
    { id: 'analytics', name: 'Custom Analytics & Lead Tracking', price: 8000 },
    { id: 'auth', name: 'User Auth & Role Management', price: 14000 },
    { id: 'api', name: 'Third-Party API Integrations', price: 15000 },
  ];

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((item) => item !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const selectedTypeObj = projectTypes.find((t) => t.id === projectType);
  const featuresTotal = selectedFeatures.reduce((acc, fId) => {
    const f = featureOptions.find((item) => item.id === fId);
    return acc + (f ? f.price : 0);
  }, 0);

  const estimatedCost = (selectedTypeObj ? selectedTypeObj.basePrice : 0) + featuresTotal;

  return (
    <section
      id="estimator"
      className="py-24 sm:py-32 relative bg-[#07090e] border-t border-white/10 overflow-hidden"
      aria-label="Interactive Project Cost & Timeline Estimator"
    >
      {/* Radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-emerald-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#34d399] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Estimator</span>
          </div>
          <h2 className="font-secondary text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Calculate your project <span className="text-gradient-emerald">scope & estimate.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-primary leading-relaxed">
            Select your digital product requirements below for an instant estimated investment scope and delivery timeframe.
          </p>
        </div>

        {/* ESTIMATOR GRID WIDGET */}
        <div className="glass-card rounded-3xl border border-white/15 p-6 sm:p-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start shadow-2xl">
          
          {/* LEFT INPUTS — 7 COLS */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* STEP 1: PROJECT TYPE */}
            <div>
              <label className="block font-secondary text-sm font-bold text-white uppercase tracking-wider mb-3">
                1. Select Digital Product Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      projectType === type.id
                        ? 'bg-emerald-500/15 border-[#34d399] text-white shadow-lg shadow-emerald-500/10'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-secondary font-bold text-sm mb-1">{type.name}</div>
                    <div className="text-xs text-slate-400 font-mono">Est. Time: {type.baseWeeks}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2: ADD-ON FEATURES */}
            <div>
              <label className="block font-secondary text-sm font-bold text-white uppercase tracking-wider mb-3">
                2. Select Core Features & Modules
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-xl text-left border flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-emerald-500/10 border-[#34d399]/60 text-white'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-xs font-medium pr-2">{feat.name}</span>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                        isChecked ? 'bg-[#34d399] border-[#34d399] text-black' : 'border-white/20'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT RESULT SUMMARY CARD — 5 COLS */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl border border-white/20 bg-[#0d121d] flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#34d399] uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Estimated Investment Summary</span>
              </div>

              <div className="mb-6">
                <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block mb-1">
                  Estimated Investment Starting From
                </span>
                <div className="font-secondary text-4xl sm:text-5xl font-black text-white">
                  ₹{estimatedCost.toLocaleString('en-IN')}
                  <span className="text-xs text-slate-400 font-normal ml-2">+ GST</span>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10 mb-8 text-xs font-mono text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Product:</span>
                  <span className="font-bold text-white">{selectedTypeObj?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Estimated Timeline:</span>
                  <span className="font-bold text-[#34d399]">{selectedTypeObj?.baseWeeks}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Features:</span>
                  <span className="font-bold text-white">{selectedFeatures.length} Modules</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Included Standards:</span>
                  <span className="font-bold text-white">100% Core Web Vitals + Security</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                href={`/contact?type=${projectType}&est=${estimatedCost}`}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-secondary font-bold text-base text-black bg-[#34d399] hover:bg-[#10b981] shadow-xl shadow-emerald-500/25 transition-all"
              >
                <span>Request Detailed Itemized Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-[11px] text-center text-slate-400 mt-3 font-mono">
                ✓ No obligation • 24-hour response turnaround
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
