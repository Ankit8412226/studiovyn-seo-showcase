import About from '../About';

export const metadata = {
  title: 'About | StudioVyn',
  description: 'About StudioVyn: web development, apps, and digital solutions across India.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      <About />
    </main>
  );
}


