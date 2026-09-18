import Link from 'next/link';

export default function CaseSpotlight() {
  const items = [
    {
      title: 'Retail E‑commerce Platform',
      metric: '250% revenue growth',
      slug: 'retail-ecommerce-platform',
    },
    {
      title: 'Local Services Directory',
      metric: '3x organic traffic',
      slug: 'services-directory',
    },
    {
      title: 'B2B SaaS Dashboard',
      metric: '60% ops time reduced',
      slug: 'b2b-saas-dashboard',
    },
  ];

  return (
    <section
      className="py-14 sm:py-16 bg-slate-50/80 border-y border-slate-200/80 relative overflow-hidden"
      aria-labelledby="case-spotlight-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2
            id="case-spotlight-heading"
            className="text-2xl sm:text-3xl font-bold font-secondary text-slate-900"
          >
            Case Study Spotlight
          </h2>
          <Link
            href="/case-studies"
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
            title="View all case studies at StudioVyn"
          >
            View all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {items.map((it) => (
            <Link
              key={it.slug}
              href={`/case-studies/${it.slug}`}
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition group"
              title={`Read case study: ${it.title}`}
            >
              <div className="font-semibold font-secondary mb-1 text-slate-900 group-hover:text-blue-600 transition-colors">{it.title}</div>
              <div className="text-sm text-blue-600 font-semibold font-primary">{it.metric}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
