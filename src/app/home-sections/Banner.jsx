import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Banner() {
  return (
    <section
      className="py-16 sm:py-20 bg-white overflow-hidden relative"
      role="banner"
      aria-label="StudioVyn Promotional Banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-900 p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl shadow-blue-500/20">
          {/* Deep Glow Elements */}
          <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-cyan-400/20 to-transparent"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px]"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left relative z-10">
            <div className="max-w-3xl">
              <h2 className="!text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold font-secondary mb-6 leading-[1.1] tracking-tight">
                Ready to Scale Your <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
                  Digital Presence?
                </span>
              </h2>
              <p className="text-white font-primary text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                We engineer high-performance digital solutions that combine stunning design with elite SEO strategies. Let's transform your vision into a market-leading reality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 !bg-white hover:!bg-blue-50 !text-blue-700 px-8 py-4 rounded-2xl font-bold font-secondary transition-all shadow-xl shadow-blue-900/30 active:scale-95 text-lg"
                title="Request a project proposal from StudioVyn"
              >
                <span className="!text-blue-700">Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform !text-blue-600" />
              </a>
              <a
                href="https://wa.me/919771123401"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-8 py-4 rounded-2xl font-bold font-secondary transition-all backdrop-blur-md text-lg"
              >
                <MessageSquare className="w-5 h-5 text-cyan-300" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
