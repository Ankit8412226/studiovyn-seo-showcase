export default function Transform() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-secondary mb-4">Transform Your Business</h2>
            <p className="text-gray-700 font-primary mb-4">We deliver outcomes: more traffic, more leads, more revenue. Our approach blends product thinking, high‑performance web, and SEO content engines tailored for Indian markets.</p>
            <div className="flex gap-3">
              <a href="/transform" className="btn-secondary">Learn how</a>
              <a href="/contact" className="btn-primary">Request proposal</a>
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="font-semibold font-secondary">Faster Sites</div>
                <p className="text-sm text-gray-600">Core Web Vitals excellence for better rankings.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="font-semibold font-secondary">SEO Content</div>
                <p className="text-sm text-gray-600">Topic clusters and local pages that convert.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="font-semibold font-secondary">Secure & Scalable</div>
                <p className="text-sm text-gray-600">Modern stack, cloud, and testing culture.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="font-semibold font-secondary">Measurable Impact</div>
                <p className="text-sm text-gray-600">Analytics and experimentation to grow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


