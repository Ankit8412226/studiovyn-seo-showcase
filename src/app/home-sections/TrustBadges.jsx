export default function TrustBadges() {
  const badges = ['Core Web Vitals', 'SEO Best Practices', 'Secure by Design', 'Vercel Edge'];
  return (
    <section className="py-10 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 items-center">
          {badges.map((b) => (
            <span key={b} className="px-3 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}


