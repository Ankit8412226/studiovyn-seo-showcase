export default function TransformPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-5xl font-bold font-secondary mb-6">Transform Your Business</h1>
            <p className="text-xl text-gray-700 font-primary mb-8">We combine product strategy, design, and engineering to build platforms that grow with you. From fast websites to scalable apps and SEO content engines, we deliver outcomes—not just code.</p>
            <a href="/contact" className="btn-primary inline-block">Start your transformation</a>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              alt="Business transformation dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Core Pillars */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-secondary mb-10 text-center">Our Transformation Framework</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl border border-gray-100 shadow-sm bg-white hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="font-semibold font-secondary text-lg mb-3">Growth Strategy</div>
              <p className="text-gray-700 font-primary mb-4">ICP definition, messaging, and conversion journeys mapped to outcomes.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Market positioning & competitive analysis</li>
                <li>• Customer journey mapping</li>
                <li>• Value proposition refinement</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-gray-100 shadow-sm bg-white hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="font-semibold font-secondary text-lg mb-3">High‑Performance Web</div>
              <p className="text-gray-700 font-primary mb-4">Core Web Vitals, accessibility, and SEO by default for sustainable traffic.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Sub-second load times</li>
                <li>• Mobile-first responsive design</li>
                <li>• Technical SEO optimization</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-gray-100 shadow-sm bg-white hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="font-semibold font-secondary text-lg mb-3">Data & Iteration</div>
              <p className="text-gray-700 font-primary mb-4">Analytics, A/B testing, and roadmaps that evolve with your market.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Real-time performance dashboards</li>
                <li>• Conversion rate optimization</li>
                <li>• Continuous deployment pipeline</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12">
          <h2 className="text-3xl font-bold font-secondary mb-12 text-center">How We Work</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold font-secondary mb-2">Discovery</h3>
              <p className="text-sm text-gray-600">Deep dive into your business goals, audience, and competitive landscape</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold font-secondary mb-2">Strategy</h3>
              <p className="text-sm text-gray-600">Craft a roadmap with clear milestones, KPIs, and success metrics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="font-semibold font-secondary mb-2">Build</h3>
              <p className="text-sm text-gray-600">Design and develop with weekly sprints and continuous feedback loops</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="font-semibold font-secondary mb-2">Optimize</h3>
              <p className="text-sm text-gray-600">Launch, measure, iterate based on real user data and market signals</p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-secondary mb-10 text-center">Real Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Analytics dashboard showing growth"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="text-3xl font-bold mb-1">287%</div>
                  <div className="text-sm">Average organic traffic increase in 6 months</div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Team celebrating success"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="text-3xl font-bold mb-1">4.2x</div>
                  <div className="text-sm">Average conversion rate improvement with optimized UX</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-secondary mb-10 text-center">Built with Modern Tech</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">⚛️</div>
              <div className="font-semibold text-sm">React & Next.js</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🎨</div>
              <div className="font-semibold text-sm">Tailwind CSS</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">📱</div>
              <div className="font-semibold text-sm">React Native</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">☁️</div>
              <div className="font-semibold text-sm">Cloud Infrastructure</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold font-secondary mb-4">Ready to Transform?</h2>
          <p className="text-xl mb-8 opacity-90">Let's build something extraordinary together</p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-shadow">
            Schedule a consultation
          </a>
        </div>
      </section>
    </main>
  );
}
