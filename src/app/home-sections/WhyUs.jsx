export default function WhyUs() {
  const points = [
    { h: 'Lightning fast', p: 'Core Web Vitals and SSR for speed and SEO.' },
    { h: 'SEO‑ready', p: 'Sitemaps, schema, internal linking, programmatic pages.' },
    { h: 'Secure & scalable', p: 'Modern stack, CI/CD, observability.' },
    { h: 'Conversion‑focused', p: 'Clear UX, proof, and performance to drive leads.' },
  ];
  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold font-secondary mb-6">Why choose StudioVyn</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((p, i) => (
            <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
              <div className="font-semibold font-secondary mb-1">{p.h}</div>
              <div className="text-sm text-gray-600 font-primary">{p.p}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


