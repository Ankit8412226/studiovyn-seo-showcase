export const metadata = {
  title: 'Terms & Conditions | StudioVyn',
  description: 'Terms and conditions for using StudioVyn services and website.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold font-secondary mb-6">Terms & Conditions</h1>
        <p className="text-gray-700 font-primary mb-4">By accessing or using this website, you agree to these terms. If you do not agree, please do not use the site.</p>
        <h2 className="text-2xl font-semibold font-secondary mt-6 mb-2">Services</h2>
        <p className="text-gray-700 font-primary">We provide web development and related services as agreed in written proposals or statements of work.</p>
        <h2 className="text-2xl font-semibold font-secondary mt-6 mb-2">Payment</h2>
        <p className="text-gray-700 font-primary">Invoices are due as per terms stated in the project agreement. Late payments may incur fees.</p>
        <h2 className="text-2xl font-semibold font-secondary mt-6 mb-2">Intellectual Property</h2>
        <p className="text-gray-700 font-primary">Upon full payment, deliverables are assigned to the client except for third‑party and open‑source components.</p>
        <h2 className="text-2xl font-semibold font-secondary mt-6 mb-2">Confidentiality</h2>
        <p className="text-gray-700 font-primary">Both parties agree to keep confidential information private and use it only for the project.</p>
        <h2 className="text-2xl font-semibold font-secondary mt-6 mb-2">Limitation of Liability</h2>
        <p className="text-gray-700 font-primary">To the maximum extent permitted by law, StudioVyn is not liable for indirect or consequential damages.</p>
        <h2 className="text-2xl font-semibold font-secondary mt-6 mb-2">Changes</h2>
        <p className="text-gray-700 font-primary">We may update these terms periodically. Continued use constitutes acceptance of changes.</p>
      </section>
    </main>
  );
}


