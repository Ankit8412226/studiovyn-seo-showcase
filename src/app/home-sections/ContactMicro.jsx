import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function ContactMicro() {
  return (
    <section
      className="py-20 bg-slate-50/70 border-y border-slate-200/80 relative overflow-hidden"
      role="region"
      aria-labelledby="contact-micro-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2
          id="contact-micro-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold font-secondary mb-6 text-slate-900"
        >
          Have a project in mind? <br className="hidden sm:block" /> Let's build something <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">extraordinary.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mb-10 text-slate-700 font-medium">
          <a href="tel:+919771123401" className="flex items-center gap-2 hover:text-blue-600 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
              <Phone className="w-5 h-5" />
            </div>
            <span className="font-semibold text-slate-800 group-hover:text-blue-600">+91 9771123401</span>
          </a>
          <a href="mailto:tech@studiovyn.in" className="flex items-center gap-2 hover:text-blue-600 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-semibold text-slate-800 group-hover:text-blue-600">tech@studiovyn.in</span>
          </a>
        </div>

        <a
          href="/contact"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white px-10 py-4 rounded-2xl font-bold font-secondary transition-all shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/35 hover:scale-105 active:scale-95 text-lg"
          title="Request a project from StudioVyn"
        >
          <span>Request Project Proposal</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
