import Contact from '../Contact';

export const metadata = {
  title: 'Contact | StudioVyn',
  description: 'Request a project proposal or consultation with StudioVyn.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24">
      <Contact />
    </main>
  );
}


