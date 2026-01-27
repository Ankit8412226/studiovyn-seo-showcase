export default function PromoBanners() {
  const banners = [
    { src: '/ecommerce_solutions_premium_1769518314027.png', alt: 'Premium E-commerce Solutions' },
    { src: '/mobile_app_development_premium_1769518249733.png', alt: 'Advanced Mobile Apps' },
    { src: '/digital_marketing_seo_premium_1769518403220.png', alt: 'SEO & Growth Marketing' },
  ];
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {banners.map((b, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src={b.src}
                alt={b.alt}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold font-secondary text-lg">{b.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
