export default function Testimonials() {
  const quotes = [
    {
      name: 'Rahul S., Patna',
      role: 'Founder, Local Retail Chain',
      text:
        'StudioVyn rebuilt our site and SEO. Footfall and online orders skyrocketed in Bihar within 3 months.',
    },
    {
      name: 'Ananya D., Kolkata',
      role: 'Marketing Head, EdTech',
      text:
        'From design to deployment, flawless execution. Their mobile-first approach boosted signups by 42%.',
    },
    {
      name: 'Vikram K., Delhi NCR',
      role: 'CTO, SaaS Startup',
      text:
        'High-quality engineering and great communication. Performance and Core Web Vitals improved dramatically.',
    },
    {
      name: 'Priya R., Gaya',
      role: 'Owner, Boutique Hotel',
      text:
        'Beautiful website with seamless booking. We now rank for key local terms and get direct reservations.',
    },
    {
      name: 'Sanjay P., Siliguri',
      role: 'Director, Logistics',
      text:
        'Their dashboard automation cut manual work by half. Clear roadmap and timely delivery.',
    },
    {
      name: 'Meera T., Noida',
      role: 'Product Lead, Fintech',
      text:
        'Security and compliance handled expertly. The app feels fast and reliable even at peak traffic.',
    },
  ];
  return (
    <section id="testimonials" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-secondary mb-3">Client Testimonials</h2>
          <p className="text-gray-600 font-primary">What partners across Bihar, West Bengal, and Delhi say about us.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <blockquote key={i} className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-gray-50">
              <p className="text-gray-800 font-primary mb-4">“{q.text}”</p>
              <div className="text-sm text-gray-600 font-primary">— {q.name}, {q.role}</div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}


