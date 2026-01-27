import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Banner() {
  return (
    <section
      className="py-20 sm:py-24 bg-[#0a1128] overflow-hidden relative"
      role="banner"
      aria-label="StudioVyn Promotional Banner"
    >
      {/* Deep Glow Elements */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          <div className="max-w-3xl">
            {/* Using !text-white to override any global heading colors */}
            <h2 className="!text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold font-secondary mb-6 leading-[1.1] tracking-tight">
              Ready to Scale Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Digital Presence?
              </span>
            </h2>
            <p className="text-gray-300 font-primary text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              We engineer high-performance digital solutions that combine stunning design with elite SEO strategies. Let's transform your vision into a market-leading reality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 shrink-0">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-5 rounded-2xl font-bold font-secondary transition-all shadow-2xl shadow-blue-500/25 active:scale-95 text-lg"
              title="Request a project proposal from StudioVyn"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/918529747613"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-5 rounded-2xl font-bold font-secondary transition-all backdrop-blur-md text-lg"
            >
              <MessageSquare className="w-5 h-5 text-blue-400" />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
