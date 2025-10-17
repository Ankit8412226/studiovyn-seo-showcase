export default function ClientsLogos() {
  const logos = [
    { src: '/vercel.svg', alt: 'Vercel' },
    { src: '/next.svg', alt: 'Next.js' },
    { src: '/globe.svg', alt: 'Global' },
    { src: '/window.svg', alt: 'Web' },
  ];
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-secondary font-semibold text-gray-700 mb-6">Trusted by teams using modern web</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          {logos.map((l, i) => (
            <div key={i} className="flex items-center justify-center opacity-80 hover:opacity-100 transition">
              <img src={l.src} alt={l.alt} className="h-10 sm:h-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


