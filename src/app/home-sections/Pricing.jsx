export default function Pricing() {
  const tiers = [
    {
      name: 'Web Starter',
      segment: 'Web Development',
      price: '₹29,000+',
      features: ['Up to 5 pages', 'Responsive design', 'Basic SEO setup', 'Contact form', 'Performance baseline'],
      highlight: false,
    },
    {
      name: 'App Starter',
      segment: 'Mobile/App',
      price: '₹89,000+',
      features: ['MVP scope', 'React Native/Flutter', 'Auth & API integration', 'Play Store readiness', 'Analytics'],
      highlight: true,
    },
    {
      name: 'E‑commerce Starter',
      segment: 'E‑commerce',
      price: '₹79,000+',
      features: ['Product catalog', 'Checkout (UPI/cards)', 'Order management basics', 'SEO product templates', 'Razorpay/Stripe integration'],
      highlight: false,
    },
    {
      name: 'Design Starter',
      segment: 'UI/UX Design',
      price: '₹19,000+',
      features: ['Landing page UI', 'Design system basics', 'Mobile-first layouts', 'Handoff files (Figma)', '2 revision rounds'],
      highlight: false,
    },
  ];
  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary">Startup‑friendly pricing</h2>
          <div className="text-sm text-gray-600 font-primary">Prices are exclusive of <strong>18% GST</strong>.</div>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`p-6 rounded-2xl border shadow-sm bg-white ${
                t.highlight ? 'border-blue-200 shadow-blue-100' : 'border-gray-100'
              }`}
            >
              {t.highlight && (
                <div className="mb-3 inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700">Most popular</div>
              )}
              <div className="text-sm text-gray-600 font-primary mb-1">{t.segment}</div>
              <div className="font-semibold font-secondary text-lg">{t.name}</div>
              <div className="text-2xl font-bold gradient-text mb-4">{t.price}</div>
              <ul className="text-sm text-gray-800 font-primary space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn-primary mt-5 inline-flex justify-center w-full">Request proposal</a>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 font-primary mt-4">Final quotes depend on scope. Flexible payment milestones available for startups.</p>
      </div>
    </section>
  );
}


