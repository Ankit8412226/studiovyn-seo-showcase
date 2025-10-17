export default function ClientsLogos() {
  const logos = [
    { src: '/vercel.svg', alt: 'Vercel' },
    { src: '/next.svg', alt: 'Next.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
    { src: 'https://www.vectorlogo.zone/logos/algolia/algolia-icon.svg', alt: 'Algolia' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Stripe_Logo%2C_revised_2016.svg', alt: 'Stripe' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', alt: 'AWS' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', alt: 'PostgreSQL' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', alt: 'Redis' },
    { src: 'https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg', alt: 'Cloudflare' },
    { src: 'https://www.vectorlogo.zone/logos/digitalocean/digitalocean-icon.svg', alt: 'DigitalOcean' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'GitHub' },
  ];
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-secondary font-semibold text-gray-700 mb-6">Trusted by teams using modern web</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-6 items-center">
          {logos.map((l, i) => (
            <div key={i} className="flex items-center justify-center">
              <img
                src={l.src}
                alt={l.alt}
                className="h-8 sm:h-10 max-w-[120px] object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


