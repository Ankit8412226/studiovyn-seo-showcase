import Button from '@/components/ui/Button';

export default function FounderSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-[#1f2937] bg-[#121723] shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-10 p-8 sm:p-12">
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-[#1f2937] via-[#0f1320] to-[#1a2235] blur-2xl rounded-full" aria-hidden="true"></div>
                <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-[#10b981] via-[#2dd4bf] to-[#84cc16] flex items-center justify-center text-white shadow-2xl">
                  <span className="text-4xl sm:text-5xl font-secondary font-bold tracking-tight">AK</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f1320] text-emerald-200 border border-[#1f2937] text-xs uppercase tracking-widest font-semibold">
                Founder Spotlight
              </div>
              <h2 className="text-3xl sm:text-4xl font-secondary font-bold text-white mt-4">
                Ankit Kumar
              </h2>
              <p className="text-sm uppercase tracking-widest text-[#94a3b8] font-semibold mt-1">
                Founder & Lead Engineer, StudioVyn
              </p>
              <p className="text-[#cbd5f5] font-primary mt-5 leading-relaxed">
                Ankit Kumar leads StudioVyn’s engineering and growth strategy. He focuses on building fast, SEO-ready
                websites that deliver measurable business outcomes. His approach blends performance engineering, product
                strategy, and conversion UX to help brands rank higher and convert more visitors into customers.
              </p>
              <p className="text-[#cbd5f5] font-primary mt-4 leading-relaxed">
                If you want a hands-on founder who understands both code and business goals, you’ll work directly with
                Ankit during discovery, strategy, and launch.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href="/contact" size="md">
                  Book a founder consult
                </Button>
                <a className="btn-secondary" href="/portfolio">See StudioVyn work</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
