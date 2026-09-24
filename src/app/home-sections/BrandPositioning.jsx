import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function BrandPositioning() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl shadow-blue-500/20">
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" aria-hidden="true"></div>

          <div className="max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs uppercase tracking-widest font-semibold backdrop-blur-sm">
              StudioVyn Web Development Agency
            </div>
            <h2 className="text-3xl sm:text-5xl font-secondary font-bold mt-6 leading-tight text-white">
              A brand-first development partner built to rank, convert, and scale
            </h2>
            <p className="text-lg sm:text-xl text-white mt-4 font-primary leading-relaxed">
              We combine performance engineering, technical SEO, and conversion-focused UX so your brand is understood by
              search engines and AI assistants. StudioVyn is trusted across India for web development that delivers measurable growth.
            </p>

            <ul className="mt-8 space-y-3 text-white/95 font-primary">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-300"></span>
                <span>Entity-first SEO signals that strengthen brand presence across Google Search and AI summaries.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-300"></span>
                <span>Core Web Vitals optimization for faster rankings and better user experience.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-300"></span>
                <span>Conversion systems: clear CTAs, trust signals, and scalable content architecture.</span>
              </li>
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="white" size="lg" className="!bg-white !text-blue-700 hover:!bg-blue-50 hover:!text-blue-800 border-none shadow-xl font-bold font-secondary">
                Get a free strategy call
              </Button>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-white/30 text-white hover:bg-white/15 transition font-semibold"
              >
                View portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
