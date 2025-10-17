export default function Pricing() {
  const tiers = [
    { name: 'Starter', price: '₹39,000+', features: ['5 pages', 'Responsive', 'Basic SEO'] },
    { name: 'Growth', price: '₹99,000+', features: ['10-20 pages', 'Blog', 'Advanced SEO'] },
    { name: 'Scale', price: '₹199,000+', features: ['Custom app', 'Integrations', 'Performance'] },
  ];
  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold font-secondary mb-6">Transparent pricing</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
              <div className="font-semibold font-secondary text-lg mb-1">{t.name}</div>
              <div className="text-2xl font-bold gradient-text mb-3">{t.price}</div>
              <ul className="text-sm text-gray-700 font-primary space-y-2">
                {t.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <a href="/contact" className="btn-primary mt-5 inline-flex justify-center w-full">Request proposal</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


