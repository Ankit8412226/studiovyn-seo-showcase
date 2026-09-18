import Testimonials from '../Testimonials';

export const metadata = {
  title: 'StudioVyn Testimonials | Client Results',
  description: 'What clients across India say about StudioVyn web development and SEO results.',
  keywords: [
    'StudioVyn testimonials',
    'web development agency reviews',
    'client results',
    'SEO agency India',
    'web design company reviews'
  ],
  alternates: { canonical: '/testimonials' },
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen pt-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.04),transparent)] pointer-events-none" aria-hidden="true"></div>
      <Testimonials />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-slate-900 mb-3">
            Why businesses choose StudioVyn
          </h2>
          <p className="text-slate-600 font-primary mb-6">
            StudioVyn is a performance-first web development agency trusted by teams across India. We focus on SEO-ready
            builds, clear communication, and measurable outcomes.
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="btn-primary" href="/contact">Request a free consultation</a>
            <a className="btn-secondary" href="/services">View services</a>
            <a className="btn-secondary" href="/portfolio">See portfolio</a>
          </div>
        </div>
      </section>
    </main>
  );
}

