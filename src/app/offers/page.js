export const metadata = {
  title: 'StudioVyn Offers | Web, SEO & E-commerce',
  description: 'Limited-time StudioVyn offers for web development, SEO setup, and e-commerce launches. Claim your growth package.',
  keywords: [
    'StudioVyn offers',
    'web development offer',
    'SEO audit India',
    'e-commerce launch',
    'growth package'
  ],
  alternates: { canonical: '/offers' },
};

export default function OffersPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[#0b0d12] relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-glow opacity-20" aria-hidden="true"></div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <h1 className="text-4xl font-bold font-secondary mb-4 text-white">Diwali Special Offers</h1>
        <p className="text-[#94a3b8] font-primary mb-6">Celebrate Diwali with growth offers designed for startups and SMEs. Limited-time benefits on web, app, and e‑commerce packages.</p>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-[#1f2937] bg-[#121723] shadow-sm">
            <h2 className="text-2xl font-semibold font-secondary mb-2 text-white">Free Google Business Profile Setup</h2>
            <p className="text-[#94a3b8] font-primary mb-2">We’ll create or optimize your profile: categories, description, photos, and NAP consistency.</p>
            <ul className="list-disc ml-5 text-[#94a3b8] font-primary space-y-1">
              <li>Category mapping and description</li>
              <li>Photo upload and cover</li>
              <li>Profile verification guidance</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-[#1f2937] bg-[#121723] shadow-sm">
            <h2 className="text-2xl font-semibold font-secondary mb-2 text-white">Free SEO Starter (On‑page Basics)</h2>
            <p className="text-[#94a3b8] font-primary mb-2">On new builds: meta tags, sitemaps, robots, schema (Organization/FAQ), and internal links.</p>
            <ul className="list-disc ml-5 text-[#94a3b8] font-primary space-y-1">
              <li>Meta titles/descriptions</li>
              <li>XML sitemap and robots</li>
              <li>Organization/FAQ schema</li>
              <li>Basic internal linking</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-[#1f2937] bg-[#121723] shadow-sm">
            <h2 className="text-2xl font-semibold font-secondary mb-2 text-white">E‑commerce Launch Offer</h2>
            <p className="text-[#94a3b8] font-primary mb-2">Get started with a conversion‑ready storefront and SEO‑friendly product pages.</p>
            <ul className="list-disc ml-5 text-[#94a3b8] font-primary space-y-1">
              <li>Product catalog and categories</li>
              <li>Checkout integration (UPI/cards)</li>
              <li>Order management basics</li>
              <li>Schema for products and breadcrumbs</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <a href="/contact" className="btn-primary inline-flex justify-center">Claim offer</a>
        </div>
      </section>
    </main>
  );
}
