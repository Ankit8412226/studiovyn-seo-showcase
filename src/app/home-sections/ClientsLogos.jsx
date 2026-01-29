export default function ClientsLogos() {
  const logos = [
    { src: '/vercel.svg', alt: 'Vercel' },
    { src: '/next.svg', alt: 'Next.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
    { src: 'https://www.vectorlogo.zone/logos/algolia/algolia-icon.svg', alt: 'Algolia' },
    { src: 'https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg', alt: 'Stripe' },
    { src: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg', alt: 'AWS' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', alt: 'PostgreSQL' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', alt: 'Redis' },
    { src: 'https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg', alt: 'Cloudflare' },
    { src: 'https://www.vectorlogo.zone/logos/digitalocean/digitalocean-icon.svg', alt: 'DigitalOcean' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', alt: 'Figma' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'GitHub' },
  ];
  return (
    <section className="py-12 bg-white overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-center text-sm font-bold font-primary uppercase tracking-[0.2em] text-gray-500">
          Trusted by Industry Leaders
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden group pause-on-hover">
        <div className="animate-scroll flex whitespace-nowrap min-w-full items-center">
          {[...logos, ...logos].map((l, i) => (
            <div key={i} className="flex items-center justify-center px-8 lg:px-12 shrink-0">
              <img
                src={l.src}
                alt={l.alt}
                className="h-7 sm:h-9 lg:h-10 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


