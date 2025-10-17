export const metadata = {
  title: 'Diwali Offers | StudioVyn',
  description: 'Limited-time Diwali offers: free Google Business Profile setup, free SEO audit, and discounted builds.',
  alternates: { canonical: '/offers' },
};

export default function OffersPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold font-secondary mb-4">Diwali Special Offers</h1>
        <p className="text-gray-700 font-primary mb-6">Celebrate Diwali with growth offers designed for startups and SMEs. Limited-time benefits on web, app, and e‑commerce packages.</p>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
            <h2 className="text-2xl font-semibold font-secondary mb-2">Free Google Business Profile Setup</h2>
            <p className="text-gray-700 font-primary mb-2">We’ll create or optimize your profile: categories, description, photos, and NAP consistency.</p>
            <ul className="list-disc ml-5 text-gray-700 font-primary space-y-1">
              <li>Category mapping and description</li>
              <li>Photo upload and cover</li>
              <li>Profile verification guidance</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
            <h2 className="text-2xl font-semibold font-secondary mb-2">Free SEO Starter (On‑page Basics)</h2>
            <p className="text-gray-700 font-primary mb-2">On new builds: meta tags, sitemaps, robots, schema (Organization/FAQ), and internal links.</p>
            <ul className="list-disc ml-5 text-gray-700 font-primary space-y-1">
              <li>Meta titles/descriptions</li>
              <li>XML sitemap and robots</li>
              <li>Organization/FAQ schema</li>
              <li>Basic internal linking</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
            <h2 className="text-2xl font-semibold font-secondary mb-2">E‑commerce Launch Offer</h2>
            <p className="text-gray-700 font-primary mb-2">Get started with a conversion‑ready storefront and SEO‑friendly product pages.</p>
            <ul className="list-disc ml-5 text-gray-700 font-primary space-y-1">
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


