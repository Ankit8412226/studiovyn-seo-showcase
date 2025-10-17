export default function Process() {
  const steps = [
    { title: 'Discovery', text: 'Define goals, audience, and success metrics.' },
    { title: 'Design', text: 'Wireframes, prototypes, and design system.' },
    { title: 'Build', text: 'Modern stack, testing, and CI/CD.' },
    { title: 'Grow', text: 'SEO, analytics, and iteration after launch.' },
  ];
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold font-secondary mb-8">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
              <div className="text-sm text-gray-500 font-primary mb-2">Step {i + 1}</div>
              <div className="text-xl font-semibold font-secondary mb-1">{s.title}</div>
              <p className="text-gray-700 font-primary">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


