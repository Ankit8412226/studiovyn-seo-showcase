import { ArrowRight, BarChart3, Lock, Rocket, Target } from 'lucide-react';

export default function Transform() {
  const benefits = [
    { title: 'Faster Sites', desc: 'Core Web Vitals excellence for better rankings.', icon: Rocket },
    { title: 'SEO Content', desc: 'Topic clusters and local pages that convert.', icon: Target },
    { title: 'Secure & Scalable', desc: 'Modern stack, cloud, and testing culture.', icon: Lock },
    { title: 'Measurable Impact', desc: 'Analytics and experimentation to grow.', icon: BarChart3 },
  ];

  return (
    <section
      className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden"
      role="region"
      aria-labelledby="transform-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.04),transparent)] pointer-events-none" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 text-blue-700 font-bold text-sm mb-6 border border-blue-200/60">
               <Rocket className="w-4 h-4 text-blue-600" /> Growth Focused
            </div>
            <h2
              id="transform-heading"
              className="text-4xl sm:text-5xl font-bold font-secondary mb-6 leading-tight text-slate-900"
            >
              Scale Your Business with <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Product Engineering</span>
            </h2>
            <p className="text-xl text-slate-600 font-primary mb-10 leading-relaxed">
              We don't just build websites; we build performance engines. Our approach combines high-speed development with deep SEO strategy to ensure your brand stands out and scales in the Indian market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-bold font-secondary transition-all shadow-xl shadow-blue-500/25 active:scale-95"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold font-secondary transition-all hover:bg-slate-50 hover:text-blue-600 shadow-sm active:scale-95"
              >
                <span>View Case Studies</span>
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-200/80 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                   <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-secondary mb-2 text-slate-900">{b.title}</h3>
                  <p className="text-sm text-slate-600 font-primary leading-relaxed">{b.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

