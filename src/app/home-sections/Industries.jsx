export default function Industries() {
  const sectors = [
    'E‑commerce', 'Education', 'Healthcare', 'Hospitality', 'Real Estate', 'Logistics', 'Fintech', 'Non‑profit'
  ];
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold font-secondary mb-8">Industries We Serve</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {sectors.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">{s}</div>
          ))}
        </div>
      </div>
    </section>
  );
}


