import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function ContactMicro() {
  return (
    <section
      className="py-20 bg-blue-600 relative overflow-hidden"
      role="region"
      aria-labelledby="contact-micro-heading"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2
          id="contact-micro-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-secondary mb-6 text-white"
        >
          Have a project in mind? <br className="hidden sm:block" /> Let's build something <span className="text-blue-200">extraordinary.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mb-10 text-white/90 font-medium">
          <a href="tel:+918529747613" className="flex items-center gap-2 hover:text-white transition-colors group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
              <Phone className="w-5 h-5" />
            </div>
            <span>+91 8529747613</span>
          </a>
          <a href="mailto:tech@studiovyn.in" className="flex items-center gap-2 hover:text-white transition-colors group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
              <Mail className="w-5 h-5" />
            </div>
            <span>tech@studiovyn.in</span>
          </a>
        </div>

        <a
          href="/contact"
          className="group inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold font-secondary transition-all hover:bg-gray-100 shadow-2xl active:scale-95 text-lg"
          title="Request a project from StudioVyn"
        >
          <span>Request Project Proposal</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
