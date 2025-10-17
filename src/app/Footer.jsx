export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-24" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src="/logo.svg" alt="StudioVyn" className="w-8 h-8 rounded" />
              <h3 className="text-white text-xl font-semibold font-secondary">StudioVyn</h3>
            </div>
            <p className="text-sm font-primary leading-relaxed text-gray-400">
              Professional web development and digital solutions to grow your business online.
            </p>
            <div className="mt-4 space-y-1 text-sm font-primary">
              <a className="hover:text-white transition-colors block" href="tel:+918529747613">+91 8529747613</a>
              <a className="hover:text-white transition-colors block" href="mailto:tech@studiovyn.in">tech@studiovyn.in</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 font-secondary">Services</h4>
            <ul className="space-y-2 text-sm font-primary">
              <li><a className="hover:text-white transition-colors" href="/services/web-development">Web Development</a></li>
              <li><a className="hover:text-white transition-colors" href="/services/mobile-app-development">Mobile App Development</a></li>
              <li><a className="hover:text-white transition-colors" href="/services/ui-ux-design">UI/UX Design</a></li>
              <li><a className="hover:text-white transition-colors" href="/services/e-commerce">E-Commerce</a></li>
              <li><a className="hover:text-white transition-colors" href="/services/backend-development">Backend Development</a></li>
              <li><a className="hover:text-white transition-colors" href="/services/digital-marketing">Digital Marketing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 font-secondary">Company</h4>
            <ul className="space-y-2 text-sm font-primary">
              <li><a className="hover:text-white transition-colors" href="/#about">About</a></li>
              <li><a className="hover:text-white transition-colors" href="/#portfolio">Portfolio</a></li>
              <li><a className="hover:text-white transition-colors" href="/#testimonials">Testimonials</a></li>
              <li><a className="hover:text-white transition-colors" href="/#contact">Contact</a></li>
              <li><a className="hover:text-white transition-colors" href="/privacy">Privacy Policy</a></li>
              <li><a className="hover:text-white transition-colors" href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 font-secondary">Get in touch</h4>
            <p className="text-sm text-gray-400 font-primary mb-3">Have a project in mind? We’d love to help.</p>
            <a href="/#contact" className="btn-primary inline-block">Start a Project</a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="font-primary">© {new Date().getFullYear()} StudioVyn. All rights reserved.</p>
          <div className="flex gap-4">

            <a href="/offers" className="hover:text-white transition-colors">Offers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


