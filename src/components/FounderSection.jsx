import Button from '@/components/ui/Button';

export default function FounderSection() {
  const founders = [
    {
      name: 'Ayush Anand',
      initials: 'AA',
      role: 'CEO, StudioVyn',
      bio: `Ayush Anand shapes StudioVyn’s vision, client partnerships, and delivery strategy. He focuses on aligning
      business goals with high-impact digital execution so every project has a clear path to growth.`,
      cta: 'Book a founder consult',
    },
    {
      name: 'Ankit Kumar',
      initials: 'AK',
      role: 'Co-Founder & Lead Engineer, StudioVyn',
      bio: `Ankit Kumar leads StudioVyn’s engineering and growth strategy. He focuses on building fast, SEO-ready
      websites that deliver measurable business outcomes. His approach blends performance engineering, product
      strategy, and conversion UX to help brands rank higher and convert more visitors into customers.`,
      secondary: `If you want a hands-on founder who understands both code and business goals, you’ll work directly with
      Ankit during discovery, strategy, and launch.`,
      cta: 'Book a founder consult',
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-[#1f2937] bg-[#121723] shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-10 p-8 sm:p-12">
            {founders.map((founder) => (
              <div key={founder.name} className="grid md:grid-cols-[200px_1fr] gap-6 items-start">
                <div className="flex items-center justify-center md:justify-start">
                  <div className="relative">
                    <div
                      className="absolute -inset-6 bg-gradient-to-br from-[#1f2937] via-[#0f1320] to-[#1a2235] blur-2xl rounded-full"
                      aria-hidden="true"
                    ></div>
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#10b981] via-[#2dd4bf] to-[#84cc16] flex items-center justify-center text-white shadow-2xl">
                      <span className="text-3xl sm:text-4xl font-secondary font-bold tracking-tight">{founder.initials}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f1320] text-emerald-200 border border-[#1f2937] text-xs uppercase tracking-widest font-semibold">
                    Leadership
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-secondary font-bold text-white mt-4">
                    {founder.name}
                  </h2>
                  <p className="text-sm uppercase tracking-widest text-[#94a3b8] font-semibold mt-1">
                    {founder.role}
                  </p>
                  <p className="text-[#cbd5f5] font-primary mt-5 leading-relaxed">
                    {founder.bio}
                  </p>
                  {founder.secondary && (
                    <p className="text-[#cbd5f5] font-primary mt-4 leading-relaxed">
                      {founder.secondary}
                    </p>
                  )}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Button href="/contact" size="md">
                      {founder.cta}
                    </Button>
                    <a className="btn-secondary" href="/portfolio">See StudioVyn work</a>
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
