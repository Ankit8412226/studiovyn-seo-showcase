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
    <section className="py-12 sm:py-16 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-3xl font-bold font-secondary mb-8 text-center sm:text-left">Tech Stack We Love</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {tools.map((t) => (
            <div key={t.name} className="p-3 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-blue-200 hover:shadow-md transition-all duration-300">
              <img src={t.logo} alt={t.name} className="h-8 sm:h-12 object-contain" />
              <div className="text-[10px] sm:text-sm font-semibold text-gray-700 font-primary text-center leading-tight">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


