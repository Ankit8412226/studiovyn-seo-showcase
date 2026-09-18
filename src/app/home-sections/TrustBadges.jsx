export default function TrustBadges() {
  const badges = ['Core Web Vitals Optimized', '100% Technical SEO Ready', 'Modern Next.js & React', 'Secure Cloud Architecture'];
  return (
    <section className="py-8 bg-slate-50/70 border-y border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 items-center justify-center">
          {badges.map((b) => (
            <span key={b} className="px-4 py-2 rounded-full bg-white border border-blue-100 text-xs sm:text-sm font-semibold text-blue-800 shadow-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

