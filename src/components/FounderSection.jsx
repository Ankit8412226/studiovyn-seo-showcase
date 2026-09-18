import Button from '@/components/ui/Button';

export default function FounderSection() {
  const founders = [
    {
      name: 'Ankit Kumar',
      initials: 'AK',
      role: 'Founder & Lead Engineer, StudioVyn',
      bio: `Ankit Kumar leads StudioVyn’s engineering and growth strategy. He focuses on building fast, SEO-ready
      websites that deliver measurable business outcomes. His approach blends performance engineering, product
      strategy, and conversion UX to help brands rank higher and convert more visitors into customers.`,
      secondary: `If you want a hands-on founder who understands both code and business goals, you’ll work directly with
      Ankit during discovery, strategy, and launch.`,
      cta: 'Book a founder consult',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-[2.5rem] border border-slate-200 bg-white shadow-xl shadow-blue-500/5 overflow-hidden">
          <div className="p-8 sm:p-12">
            {founders.map((founder) => (
              <div key={founder.name} className="grid md:grid-cols-[180px_1fr] gap-8 items-start">
                <div className="flex items-center justify-center md:justify-start">
                  <div className="relative">
                    <div
                      className="absolute -inset-4 bg-blue-100/60 blur-xl rounded-full"
                      aria-hidden="true"
                    ></div>
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-xl">
                      <span className="text-3xl sm:text-4xl font-secondary font-bold tracking-tight">{founder.initials}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs uppercase tracking-widest font-semibold">
                    Leadership
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-secondary font-bold text-slate-900 mt-4">
                    {founder.name}
                  </h2>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mt-1">
                    {founder.role}
                  </p>
                  <p className="text-slate-600 font-primary mt-4 leading-relaxed text-sm">
                    {founder.bio}
                  </p>
                  {founder.secondary && (
                    <p className="text-slate-600 font-primary mt-3 leading-relaxed text-sm">
                      {founder.secondary}
                    </p>
                  )}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Button href="/contact" size="sm">
                      {founder.cta}
                    </Button>
                    <a className="btn-secondary text-sm py-2 px-4" href="/portfolio">See StudioVyn work</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
