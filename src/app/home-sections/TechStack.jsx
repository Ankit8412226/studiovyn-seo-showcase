export default function TechStack() {
  const tools = [
    { name: 'Next.js', logo: '/next.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Vercel', logo: '/vercel.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'Prisma', logo: 'https://raw.githubusercontent.com/prisma/presskit/main/Assets/Logos/prisma-logo.svg' },
    { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Stripe_Logo%2C_revised_2016.svg' },
    { name: 'Playwright', logo: 'https://playwright.dev/img/playwright-logo.svg' },
    { name: 'Algolia', logo: 'https://www.vectorlogo.zone/logos/algolia/algolia-icon.svg' },
  ];
  return (
    <section className="py-14 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold font-secondary mb-6">Tech stack we love</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {tools.map((t) => (
            <div key={t.name} className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col items-center justify-center gap-3">
              <img src={t.logo} alt={t.name} className="h-10 sm:h-12 object-contain" />
              <div className="text-sm font-medium text-gray-800 font-primary text-center">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


