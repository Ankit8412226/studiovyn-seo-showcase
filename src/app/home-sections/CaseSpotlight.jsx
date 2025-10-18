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
      className="py-14 sm:py-16 bg-gray-50"
      aria-labelledby="case-spotlight-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2
            id="case-spotlight-heading"
            className="text-2xl sm:text-3xl font-bold font-secondary"
          >
            Case Study Spotlight
          </h2>
          <Link
            href="/case-studies"
            className="text-blue-600 font-medium"
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
              className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition"
              title={`Read case study: ${it.title}`}
            >
              <div className="font-semibold font-secondary mb-1">{it.title}</div>
              <div className="text-sm text-gray-600 font-primary">{it.metric}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
