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
  const city = findCityParam(params.city);
  if (!city) return {};
  const title = `Web Development in ${city} | StudioVyn`;
  const description = `Fast, SEO-optimized web development services in ${city}. Modern sites and apps that rank and convert.`;
  return {
    title,
    description,
    alternates: { canonical: `/locations/${params.city}` },
  };
}

export default function CityPage({ params }) {
  const city = findCityParam(params.city);
  if (!city) return notFound();
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold font-secondary mb-4">Web Development in {city}</h1>
        <p className="text-gray-700 font-primary mb-6">
          We build high-performance websites and apps for businesses in {city}. Our approach combines modern engineering with local SEO—helping you appear for searches in your city and convert visitors into customers.
        </p>
        <ul className="list-disc ml-5 space-y-2 text-gray-700 font-primary mb-8">
          <li>Lightning-fast pages (Core Web Vitals)</li>
          <li>LocalBusiness schema and Google Business Profile guidance</li>
          <li>Content strategy tailored for {city}</li>
        </ul>
        <div className="flex gap-3">
          <a href="/contact" className="btn-primary">Request a proposal</a>
          <a href="/portfolio" className="btn-secondary">See our work</a>
        </div>
      </section>
    </main>
  );
}


