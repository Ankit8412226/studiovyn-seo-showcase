export const metadata = {
  title: 'Privacy Policy | StudioVyn',
  description: 'Learn how StudioVyn collects, uses, and protects your data.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold font-secondary mb-6">Privacy Policy</h1>
        <p className="text-gray-700 font-primary mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold font-secondary mt-8 mb-3">Who we are</h2>
        <p className="text-gray-700 font-primary">StudioVyn ("we", "us") provides web development and digital services in India.</p>

        <h2 className="text-2xl font-semibold font-secondary mt-8 mb-3">What we collect</h2>
        <ul className="list-disc ml-5 space-y-2 text-gray-700 font-primary">
          <li>Contact details submitted via forms (name, email, phone, message)</li>
          <li>Basic analytics (pages viewed, device info) for improving our site</li>
        </ul>

        <h2 className="text-2xl font-semibold font-secondary mt-8 mb-3">How we use data</h2>
        <ul className="list-disc ml-5 space-y-2 text-gray-700 font-primary">
          <li>To respond to inquiries and provide services</li>
          <li>To improve site performance and user experience</li>
          <li>To communicate updates and offers (you can opt out)</li>
        </ul>

        <h2 className="text-2xl font-semibold font-secondary mt-8 mb-3">Data sharing</h2>
        <p className="text-gray-700 font-primary">We do not sell personal data. We may use trusted processors (e.g., hosting, analytics) under strict agreements.</p>

        <h2 className="text-2xl font-semibold font-secondary mt-8 mb-3">Your rights</h2>
        <ul className="list-disc ml-5 space-y-2 text-gray-700 font-primary">
          <li>Access, update, or delete your data</li>
          <li>Withdraw consent for marketing</li>
          <li>Contact us at <a className="text-blue-600 underline" href="mailto:tech@studiovyn.in">tech@studiovyn.in</a></li>
        </ul>

        <h2 className="text-2xl font-semibold font-secondary mt-8 mb-3">Contact</h2>
        <p className="text-gray-700 font-primary">Email: <a className="text-blue-600 underline" href="mailto:tech@studiovyn.in">tech@studiovyn.in</a> · Phone: <a className="text-blue-600 underline" href="tel:+918529747613">+91 8529747613</a></p>
      </section>
    </main>
  );
}


