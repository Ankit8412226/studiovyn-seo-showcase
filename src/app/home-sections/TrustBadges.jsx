export default function TrustBadges() {
  const badges = ['Core Web Vitals', 'SEO Best Practices', 'Secure by Design', 'Vercel Edge'];
  return (
    <section className="py-10 sm:py-12 bg-[#0b0d12] relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-glow opacity-20" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 items-center">
          {badges.map((b) => (
            <span key={b} className="px-3 py-2 rounded-full bg-[#121723] border border-[#1f2937] text-sm font-medium text-[#cbd5f5]">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

