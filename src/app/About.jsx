export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-secondary mb-4">About StudioVyn</h2>
            <p className="text-gray-700 font-primary mb-4">
              We are a results-driven web and software studio serving businesses across India—
              with a strong focus on Bihar, West Bengal, and Delhi NCR. Our team builds
              modern websites, apps, and digital experiences that are fast, secure,
              and optimized to rank.
            </p>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 font-primary">
              <li>Local SEO strategies tailored for Bihar, Kolkata, Patna, and Delhi</li>
              <li>Performance-first engineering with accessibility best practices</li>
              <li>Transparent process, clear communication, on-time delivery</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="/#portfolio" className="btn-secondary">See our work</a>
              <a href="/#contact" className="btn-primary">Get a proposal</a>
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold font-secondary mb-3">Why we win in search</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold gradient-text font-secondary mb-1">Core Web Vitals</div>
                <p className="text-sm text-gray-600">Optimized LCP, CLS, and INP for better rankings.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold gradient-text font-secondary mb-1">Local Signals</div>
                <p className="text-sm text-gray-600">Schema, NAP consistency, and geo-targeted content.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold gradient-text font-secondary mb-1">Content</div>
                <p className="text-sm text-gray-600">Topic clusters and intent-matched landing pages.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold gradient-text font-secondary mb-1">Tech SEO</div>
                <p className="text-sm text-gray-600">Clean architecture, sitemaps, and structured data.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
            <h3 className="text-2xl font-semibold font-secondary mb-3">Our Mission</h3>
            <p className="text-gray-700 font-primary">
              Empower businesses in India with modern, high-performance digital products that drive measurable
              growth. We believe great engineering, thoughtful design, and local market understanding can help
              small and mid-sized companies compete at a national level.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
            <h3 className="text-2xl font-semibold font-secondary mb-3">Our Vision</h3>
            <p className="text-gray-700 font-primary">
              To become the most trusted technology partner for SMEs across Bihar, West Bengal, and Delhi NCR—
              delivering scalable platforms, seamless user experiences, and sustainable SEO-led growth.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
            <h3 className="text-2xl font-semibold font-secondary mb-3">Our Values</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 font-primary">
              <li>Quality over shortcuts</li>
              <li>Transparency and accountability</li>
              <li>Performance, accessibility, and security by default</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
          <h3 className="text-2xl font-semibold font-secondary mb-4">How We Work</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="font-semibold font-secondary mb-1">1. Discovery</div>
              <p className="text-sm text-gray-600">Goals, audience, competitive analysis, and success metrics.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="font-semibold font-secondary mb-1">2. Design</div>
              <p className="text-sm text-gray-600">Wireframes, prototypes, and design systems for consistency.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="font-semibold font-secondary mb-1">3. Build</div>
              <p className="text-sm text-gray-600">Modern stack, test coverage, and CI/CD for reliability.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <div className="font-semibold font-secondary mb-1">4. Grow</div>
              <p className="text-sm text-gray-600">Analytics, SEO, and continuous optimization after launch.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


