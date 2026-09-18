export const metadata = {
  title: 'Terms & Conditions | StudioVyn',
  description: 'Terms and conditions for using StudioVyn services and website.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.03),transparent)] pointer-events-none" aria-hidden="true"></div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        <h1 className="text-4xl font-bold font-secondary mb-6 text-slate-900">Terms & Conditions</h1>
        <p className="text-slate-600 font-primary mb-4">By accessing or using this website, you agree to these terms. If you do not agree, please do not use the site.</p>
        <h2 className="text-2xl font-semibold font-secondary mt-6 mb-2 text-slate-900">Services</h2>
        <p className="text-slate-600 font-primary">We provide web development and related services as agreed in written proposals or statements of work.</p>
        <h2 className="text-2xl font-semibold font-secondary mt-6 mb-2 text-slate-900">Payment</h2>
        <p className="text-slate-600 font-primary">Invoices are due as per terms stated in the project agreement. Late payments may incur fees.</p>
        <h2 className="text-2xl font-semibold font-secondary mt-6 mb-2 text-slate-900">Intellectual Property</h2>
        <p className="text-slate-600 font-primary">Upon full payment, deliverables are assigned to the client except for third‑party and open‑source components.</p>
        <h2 className="text-2xl font-semibold font-secondary mt-6 mb-2 text-slate-900">Confidentiality</h2>
        <p className="text-slate-600 font-primary">Both parties agree to keep confidential information private and use it only for the project.</p>
        <h2 className="text-2xl font-semibold font-secondary mt-6 mb-2 text-slate-900">Limitation of Liability</h2>
        <p className="text-slate-600 font-primary">To the maximum extent permitted by law, StudioVyn is not liable for indirect or consequential damages.</p>
        <h2 className="text-2xl font-semibold font-secondary mt-6 mb-2 text-slate-900">Changes</h2>
        <p className="text-slate-600 font-primary">We may update these terms periodically. Continued use constitutes acceptance of changes.</p>
      </section>
    </main>
  );
}

