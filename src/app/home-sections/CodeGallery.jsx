export default function CodeGallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop',
      alt: 'Developer workspace',
    },
    {
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop',
      alt: 'Code on screen',
    },
    {
      src: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=1200&q=80&auto=format&fit=crop',
      alt: 'Programming setup',
    },
    {
      src: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=1200&q=80&auto=format&fit=crop',
      alt: 'Laptop and notes',
    },
  ];

  return (
    <section
      className="py-14 sm:py-16 bg-white"
      aria-labelledby="code-gallery-heading"
      role="region"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="code-gallery-heading"
          className="text-2xl sm:text-3xl font-bold font-secondary mb-6"
        >
          Built by engineers, for growth
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className="rounded-2xl shadow-sm object-cover h-48 w-full"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
