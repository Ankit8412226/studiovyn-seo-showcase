import SeoFaq from '@/components/seo/SeoFaq';
import SeoProse from '@/components/seo/SeoProse';
import Button from '@/components/ui/Button';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe,
  Search,
  ShoppingCart,
  Smartphone,
  Trophy,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities } from '../data';

function findCityParam(param) {
  const slug = decodeURIComponent(param).toLowerCase();
  return cities.find((c) => c.toLowerCase().replace(/\s+/g, '-') === slug);
}

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.toLowerCase().replace(/\s+/g, '-') }));
}

export async function generateMetadata({ params }) {
  const { city: cityParam } = await params;
  const city = findCityParam(cityParam);
  if (!city) return {};

  const title = `Best Website Development Company in ${city} | Web Design & SEO`;
  const description = `Leading website development company in ${city}. Expert web design, e-commerce & SEO services for businesses in ${city}. 150+ projects delivered. Free consultation!`;

  return {
    title,
    description,
    keywords: `website development in ${city}, web design company ${city}, seo services ${city}, ecommerce development ${city}, mobile app developers ${city}`,
    alternates: { canonical: `/locations/${cityParam}` },
    openGraph: {
      title,
      description,
      url: `https://studiovyn.in/locations/${cityParam}`,
      type: 'website',
    }
  };
}

const services = [
  {
    title: 'Custom Web Development',
    desc: 'Bespoke React & Next.js solutions built for speed and scalability.',
    icon: Globe,
    color: 'text-blue-600'
  },
  {
    title: 'Local SEO Specialist',
    desc: 'Dominating search results in your city with technical SEO excellence.',
    icon: Search,
    color: 'text-blue-600'
  },
  {
    title: 'E-commerce Solutions',
    desc: 'Powerful online stores that convert browsers into buyers.',
    icon: ShoppingCart,
    color: 'text-blue-600'
  },
  {
    title: 'Mobile App Development',
    desc: 'High-performance iOS and Android apps for modern businesses.',
    icon: Smartphone,
    color: 'text-blue-600'
  }
];

const features = [
  { title: 'Core Web Vitals Ready', icon: CheckCircle2 },
  { title: 'Mobile-First Design', icon: CheckCircle2 },
  { title: '98% Client Satisfaction', icon: Trophy },
  { title: '24/7 Priority Support', icon: Clock },
];

export default async function CityPage({ params }) {
  const { city: cityParam } = await params;
  const city = findCityParam(cityParam);
  if (!city) return notFound();

  const faqs = [
    {
      q: `How long does website development take in ${city}?`,
      a: `Typically, a professional website takes 2-6 weeks depending on requirements. We provide clear timelines for all projects in ${city}.`
    },
    {
      q: `Do you provide SEO services for businesses in ${city}?`,
      a: `Yes, we specialize in both global and local SEO to ensure your business ranks at the top of search results in ${city} and beyond.`
    },
    {
      q: `What is the cost of web design in ${city}?`,
      a: `Our pricing is competitive and depends on the project scope. We offer high-quality, premium solutions tailored to the ${city} market.`
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-0 bg-white selection:bg-blue-200/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.03),transparent)] pointer-events-none" aria-hidden="true"></div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 animate-fade-in border border-blue-200/60">
              #1 Web Development in {city}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-secondary mb-6 leading-tight text-slate-900">
              Transform Your Business with Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Web Development in {city}</span>
            </h1>
            <p className="text-xl text-slate-600 font-primary mb-10 leading-relaxed max-w-2xl">
              From Patna to Delhi, and right here in {city}, we build high-performance websites that don't just look good—they dominate search engines and drive revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg" variant="primary">Start Your Project</Button>
              <Button href="/portfolio" variant="secondary" size="lg">View Our Work</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Badges */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 text-center sm:text-left">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-1 font-secondary">150+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-1 font-secondary">98%</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-1 font-secondary">5+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900 mb-1 font-secondary">24/7</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-secondary mb-4 text-center text-slate-900">Comprehensive Digital Services in {city}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-center">We provide end-to-end digital solutions tailored for the {city} market, ensuring your business stays ahead of the competition.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <s.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-secondary mb-3 text-center sm:text-left text-slate-900">{s.title}</h3>
                <p className="text-slate-600 font-primary text-sm leading-relaxed mb-4 text-center sm:text-left">{s.desc}</p>
                <Link href="/services" className="text-blue-600 text-sm font-semibold flex items-center justify-center sm:justify-start gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep SEO Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            <h2 className="text-3xl font-bold font-secondary mb-8 text-center sm:text-left text-slate-900">Leading Web Development & SEO Partners in {city}</h2>

            <SeoProse>
              <p className="text-slate-600">
                StudioVyn is your dedicated partner for <strong>Web Development in {city}</strong>. We understand that in today's competitive landscape, simply having a website is not enough. Your business in {city} needs a digital platform that is found, trusted, and efficient at converting visitors into loyal customers.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why Local SEO Matters for {city} Businesses</h3>
              <p className="text-slate-600">
                Search habits are changing. When customers in {city} look for services, they include their location. Our technical SEO team ensures your website is architected to win these local searches. We implement <strong>LocalBusiness Schema</strong>, optimize for <strong>Core Web Vitals</strong>, and ensure lightning-fast load times.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10 mb-10">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <f.icon className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="font-semibold text-slate-900">{f.title}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-600">
                Our approach to <strong>Web Design in {city}</strong> focuses on user experience (UX) and conversion rate optimization (CRO). Every pixel we place and every line of code we write is aimed at one goal: growing your business.
              </p>
            </SeoProse>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/20">
              <div className="shrink-0">
                <Users className="w-12 h-12 text-blue-200" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-xl font-bold mb-1">Ready to scale your business in {city}?</h4>
                <p className="opacity-90 text-blue-100">Join 150+ successful companies who trust us with their digital growth.</p>
              </div>
              <Button href="/contact" variant="secondary" className="bg-white text-blue-700 hover:bg-slate-100 border-none font-bold whitespace-nowrap shadow-md">
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <SeoFaq
        title={`FAQs about Web Services in ${city}`}
        faqs={faqs}
        pageUrl={`https://studiovyn.in/locations/${cityParam}`}
      />

    </main>
  );
}

