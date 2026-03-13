import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function BrandPositioning() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-[#0b0d12] via-[#0f1320] to-[#111827] text-[#e5e7eb] relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#10b981]/20 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2dd4bf]/20 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-widest font-semibold">
            StudioVyn Web Development Agency
          </div>
          <h2 className="text-3xl sm:text-5xl font-secondary font-bold mt-5 leading-tight">
            A brand-first development partner built to rank, convert, and scale
          </h2>
          <p className="text-lg sm:text-xl text-[#cbd5f5] mt-4 font-primary">
            We combine performance engineering, technical SEO, and conversion-focused UX so your brand is understood by
            search engines and AI assistants. StudioVyn is trusted across India for web development that delivers measurable growth.
          </p>

          <ul className="mt-8 space-y-3 text-[#cbd5f5] font-primary">
            <li>Entity-first SEO signals that strengthen brand presence across Google Search and AI summaries.</li>
            <li>Core Web Vitals optimization for faster rankings and better user experience.</li>
            <li>Conversion systems: clear CTAs, trust signals, and scalable content architecture.</li>
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" size="lg" className="bg-gradient-to-r from-[#10b981] via-[#2dd4bf] to-[#84cc16] text-white">
              Get a free strategy call
            </Button>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-[#e5e7eb] hover:bg-white/10 transition"
            >
              View case studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
