import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

export default function CaseSpotlight() {
  const items = [
    {
      title: 'Retail E‑commerce Platform',
      metric: '250% revenue growth',
      category: 'E-Commerce / Next.js',
      slug: 'retail-ecommerce-platform',
      image: '/case_study_ecommerce.png',
    },
    {
      title: 'Local Services Directory',
      metric: '3x organic traffic',
      category: 'SEO Directory Platform',
      slug: 'services-directory',
      image: '/case_study_directory.png',
    },
    {
      title: 'B2B SaaS Dashboard',
      metric: '60% ops time reduced',
      category: 'SaaS / Cloud Application',
      slug: 'b2b-saas-dashboard',
      image: '/case_study_saas.png',
    },
  ];

  return (
    <section
      className="py-20 sm:py-28 bg-[#EFF6FF] border-b border-slate-200/80 relative overflow-hidden"
      aria-labelledby="case-spotlight-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] block mb-1.5">
              Proven Performance
            </span>
            <h2
              id="case-spotlight-heading"
              className="text-2xl sm:text-4xl font-normal font-secondary text-[#0F172A]"
            >
              Case Study <span className="font-bold text-[#2563EB]">Spotlight</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-[#2563EB] hover:text-[#1D4ED8] font-semibold text-sm transition-colors group"
            title="View all case studies at StudioVyn"
          >
            <span>View all case studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {items.map((it) => (
            <Link
              key={it.slug}
              href={`/case-studies/${it.slug}`}
              className="group flex flex-col rounded-2xl bg-white border border-[#DBEAFE] shadow-xs hover:shadow-lg hover:border-[#93C5FD] transition-all duration-300 overflow-hidden"
              title={`Read case study: ${it.title}`}
            >
              {/* Product UI Preview Image */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                <OptimizedImage
                  src={it.image}
                  alt={it.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[11px] font-semibold text-[#2563EB] shadow-xs border border-white">
                    {it.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="font-semibold font-secondary text-lg mb-2 text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-snug">
                  {it.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-[#2563EB] font-semibold font-primary mt-auto pt-2">
                  <TrendingUp className="w-4 h-4 text-[#2563EB]" />
                  <span>{it.metric}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
