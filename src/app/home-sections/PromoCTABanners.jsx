import { ArrowRight, MousePointerClick, ShieldCheck, TrendingUp, Zap } from 'lucide-react';

export default function PromoCTABanners() {
  const items = [
    {
      title: 'Build faster',
      desc: 'Ship modern web apps quickly with performance baked in.',
      icon: Zap,
      color: 'text-emerald-300',
      bg: 'bg-[#0f1320]',
      cta: { label: 'Start a project', href: '/contact' }
    },
    {
      title: 'Rank higher',
      desc: 'SEO-first builds: clean architecture, schema, internal links.',
      icon: TrendingUp,
      color: 'text-teal-300',
      bg: 'bg-[#0f1320]',
      cta: { label: 'Get an SEO plan', href: '/contact' }
    },
    {
      title: 'Convert more',
      desc: 'Conversion-focused UX with proof, speed, and clarity.',
      icon: MousePointerClick,
      color: 'text-lime-300',
      bg: 'bg-[#0f1320]',
      cta: { label: 'Improve conversions', href: '/contact' }
    },
    {
      title: 'Scale securely',
      desc: 'Cloud, monitoring, and best practices for growth.',
      icon: ShieldCheck,
      color: 'text-emerald-200',
      bg: 'bg-[#0f1320]',
      cta: { label: 'Plan the architecture', href: '/contact' }
    },
  ];

  return (
    <section className="py-20 bg-[#0b0d12] relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-glow opacity-25" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="p-8 rounded-2xl border border-[#1f2937] bg-[#121723] hover:border-emerald-400/40 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className={`w-12 h-12 rounded-xl ${it.bg} ${it.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold font-secondary text-white mb-3">
                  {it.title}
                </h3>

                <p className="text-[#94a3b8] font-primary text-sm mb-6 flex-1 italic">
                  "{it.desc}"
                </p>

                <a
                  href={it.cta.href}
                  className="inline-flex items-center text-sm font-bold text-white hover:text-emerald-200 group transition-colors"
                >
                  <span>{it.cta.label}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
