export default function FAQ() {
  const qa = [
    { q: 'What is your typical timeline?', a: 'Most websites ship within 2–6 weeks depending on scope.' },
    { q: 'Do you provide SEO?', a: 'Yes. We build with performance, schema, and content strategy.' },
    { q: 'Which cities do you serve?', a: 'Across India with focus on Bihar, West Bengal, and Delhi NCR.' },
    { q: 'Do you handle maintenance?', a: 'Yes, we offer retainers for updates, monitoring, and growth.' },
    { q: 'What tech stack do you use?', a: 'Next.js, React, Node.js, and modern cloud services tailored to goals.' },
  ];
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold font-secondary mb-8">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {qa.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
              <div className="font-semibold font-secondary mb-2">{item.q}</div>
              <p className="text-gray-700 font-primary">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


