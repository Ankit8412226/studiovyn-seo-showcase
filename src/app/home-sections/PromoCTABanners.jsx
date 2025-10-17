export default function PromoCTABanners() {
  const items = [
    { title: 'Build faster', desc: 'Ship modern web apps quickly with performance baked in.', cta: { label: 'Start a project', href: '/contact' } },
    { title: 'Rank higher', desc: 'SEO-first builds: clean architecture, schema, internal links.', cta: { label: 'Get an SEO plan', href: '/contact' } },
    { title: 'Convert more', desc: 'Conversion-focused UX with proof, speed, and clarity.', cta: { label: 'Improve conversions', href: '/contact' } },
    { title: 'Scale securely', desc: 'Cloud, monitoring, and best practices for growth.', cta: { label: 'Plan the architecture', href: '/contact' } },
  ];
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="text-xl font-bold font-secondary mb-2">{it.title}.</h3>
              <p className="text-sm text-gray-700 font-primary mb-4">{it.desc}</p>
              <a href={it.cta.href} className="btn-primary inline-flex justify-center w-full">{it.cta.label}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


