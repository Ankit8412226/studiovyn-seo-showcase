export const metadata = {
  title: 'Privacy Policy | StudioVyn',
  description: 'Learn how StudioVyn collects, uses, and protects your data.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.03),transparent)] pointer-events-none" aria-hidden="true"></div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        <h1 className="text-4xl font-bold font-secondary mb-6 text-slate-900">Privacy Policy</h1>
        <p className="text-slate-500 font-primary mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold font-secondary mt-8 mb-3 text-slate-900">Who we are</h2>
        <p className="text-slate-600 font-primary">StudioVyn ("we", "us") provides web development and digital services in India.</p>

        <h2 className="text-2xl font-semibold font-secondary mt-8 mb-3 text-slate-900">What we collect</h2>
        <ul className="list-disc ml-5 space-y-2 text-slate-600 font-primary">
          <li>Contact details submitted via forms (name, email, phone, message)</li>
          <li>Basic analytics (pages viewed, device info) for improving our site</li>
        </ul>

        <h2 className="text-2xl font-semibold font-secondary mt-8 mb-3 text-slate-900">How we use data</h2>
        <ul className="list-disc ml-5 space-y-2 text-slate-600 font-primary">
          <li>To respond to inquiries and provide services</li>
          <li>To improve site performance and user experience</li>
          <li>To communicate updates and offers (you can opt out)</li>
        </ul>

        <h2 className="text-2xl font-semibold font-secondary mt-8 mb-3 text-slate-900">Data sharing</h2>
        <p className="text-slate-600 font-primary">We do not sell personal data. We may use trusted processors (e.g., hosting, analytics) under strict agreements.</p>

        <h2 className="text-2xl font-semibold font-secondary mt-8 mb-3 text-slate-900">Your rights</h2>
        <ul className="list-disc ml-5 space-y-2 text-slate-600 font-primary">
          <li>Access, update, or delete your data</li>
          <li>Withdraw consent for marketing</li>
          <li>Contact us at <a className="text-blue-600 underline font-medium" href="mailto:tech@studiovyn.in">tech@studiovyn.in</a></li>
        </ul>

        <h2 className="text-2xl font-semibold font-secondary mt-8 mb-3 text-slate-900">Contact</h2>
        <p className="text-slate-600 font-primary">Email: <a className="text-blue-600 underline font-medium" href="mailto:tech@studiovyn.in">tech@studiovyn.in</a> · Phone: <a className="text-blue-600 underline font-medium" href="tel:+919771123401">+91 9771123401</a></p>
      </section>
    </main>
  );
}

