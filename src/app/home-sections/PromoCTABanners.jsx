import { ArrowRight, MousePointerClick, ShieldCheck, TrendingUp, Zap } from 'lucide-react';

export default function PromoCTABanners() {
  const items = [
    {
      title: 'Build faster',
      desc: 'Ship modern web apps quickly with performance baked in.',
      icon: Zap,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      cta: { label: 'Start a project', href: '/contact' }
    },
    {
      title: 'Rank higher',
      desc: 'SEO-first builds: clean architecture, schema, internal links.',
      icon: TrendingUp,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      cta: { label: 'Get an SEO plan', href: '/contact' }
    },
    {
      title: 'Convert more',
      desc: 'Conversion-focused UX with proof, speed, and clarity.',
      icon: MousePointerClick,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      cta: { label: 'Improve conversions', href: '/contact' }
    },
    {
      title: 'Scale securely',
      desc: 'Cloud, monitoring, and best practices for growth.',
      icon: ShieldCheck,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      cta: { label: 'Plan the architecture', href: '/contact' }
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="p-8 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className={`w-12 h-12 rounded-xl ${it.bg} ${it.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold font-secondary text-gray-900 mb-3">
                  {it.title}
                </h3>

                <p className="text-gray-600 font-primary text-sm mb-6 flex-1 italic">
                  "{it.desc}"
                </p>

                <a
                  href={it.cta.href}
                  className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-blue-600 group transition-colors"
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
