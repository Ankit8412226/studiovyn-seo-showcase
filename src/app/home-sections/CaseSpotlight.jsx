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
      className="py-14 sm:py-16 bg-[#0b0d12] relative overflow-hidden"
      aria-labelledby="case-spotlight-heading"
    >
      <div className="absolute inset-0 bg-accent-glow opacity-40" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2
            id="case-spotlight-heading"
            className="text-2xl sm:text-3xl font-bold font-secondary text-white"
          >
            Case Study Spotlight
          </h2>
          <Link
            href="/case-studies"
            className="text-emerald-200 font-medium"
            title="View all case studies at StudioVyn"
          >
            View all
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {items.map((it) => (
            <Link
              key={it.slug}
              href={`/case-studies/${it.slug}`}
              className="p-5 rounded-xl bg-[#121723] border border-[#1f2937] shadow-sm hover:shadow-md transition"
              title={`Read case study: ${it.title}`}
            >
              <div className="font-semibold font-secondary mb-1 text-white">{it.title}</div>
              <div className="text-sm text-[#94a3b8] font-primary">{it.metric}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
