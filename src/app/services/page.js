import Link from 'next/link';
import { services } from './data';

export const metadata = {
  title: 'Services | StudioVyn',
  description:
    'Explore StudioVyn services: web development, mobile apps, UI/UX, e-commerce, backend, and digital marketing.',
  alternates: { canonical: '/services' },
};

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-white">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-secondary mb-4">Our Services</h1>
          <p className="text-gray-600 font-primary">High-impact digital solutions tailored to your goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-blue-200"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-xl font-semibold font-secondary mb-2 group-hover:text-blue-600">{s.title}</h2>
                <p className="text-gray-600 text-sm font-primary mb-4">{s.description}</p>
                <span className="text-blue-600 font-semibold font-primary">Learn more →</span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}


