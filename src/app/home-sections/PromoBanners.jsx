export default function PromoBanners() {
  const banners = [
    { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80&auto=format&fit=crop', alt: 'Modern development' },
    { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80&auto=format&fit=crop', alt: 'Team collaboration' },
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80&auto=format&fit=crop', alt: 'Product planning' },
  ];
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-4">
          {banners.map((b, i) => (
            <img key={i} src={b.src} alt={b.alt} className="rounded-2xl shadow-sm object-cover w-full h-44 sm:h-56 lg:h-64" />
          ))}
        </div>
      </div>
    </section>
  );
}


