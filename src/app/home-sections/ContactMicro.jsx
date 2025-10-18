export default function ContactMicro() {
  return (
    <section
      className="py-10 sm:py-12 bg-gray-50"
      role="region"
      aria-labelledby="contact-micro-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="contact-micro-heading"
          className="text-2xl sm:text-3xl font-bold font-secondary mb-3"
        >
          Have a project in mind?
        </h2>
        <p className="text-gray-700 font-primary mb-5">
          Call{' '}
          <a
            className="text-blue-600 underline"
            href="tel:+918529747613"
            title="Call StudioVyn"
          >
            +91 8529747613
          </a>{' '}
          or email{' '}
          <a
            className="text-blue-600 underline"
            href="mailto:tech@studiovyn.in"
            title="Email StudioVyn"
          >
            tech@studiovyn.in
          </a>
        </p>
        <a
          href="/contact"
          className="btn-primary inline-flex justify-center"
          title="Request a project from StudioVyn"
        >
          Request project
        </a>
      </div>
    </section>
  );
}
