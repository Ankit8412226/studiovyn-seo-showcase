import Portfolio from '../Portfolio';

export const metadata = {
  title: 'StudioVyn Portfolio | Web Development Case Studies',
  description: 'Case studies and selected work from StudioVyn across industries. See how we deliver performance and growth.',
  keywords: [
    'StudioVyn portfolio',
    'web development case studies',
    'SEO results',
    'e-commerce builds',
    'conversion optimization'
  ],
  alternates: { canonical: '/portfolio' },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#0b0d12] relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-glow opacity-20" aria-hidden="true"></div>
      <Portfolio />
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10">
        <div className="rounded-3xl border border-[#1f2937] bg-[#0f172a] p-8 sm:p-10 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold font-secondary text-white mb-3">
            StudioVyn projects built to rank and convert
          </h2>
          <p className="text-slate-300 font-primary mb-6">
            We design and build websites with measurable outcomes: faster performance, higher conversions, and stronger brand visibility in search.
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="btn-primary" href="/contact">Start your project</a>
            <a className="btn-secondary" href="/services">Explore services</a>
            <a className="btn-secondary" href="/case-studies">View case studies</a>
          </div>
        </div>
      </section>
    </main>
  );
}
