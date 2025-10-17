import Testimonials from '../Testimonials';

export const metadata = {
  title: 'Testimonials | StudioVyn',
  description: 'What our clients from Bihar, West Bengal, and Delhi say about us.',
  alternates: { canonical: '/testimonials' },
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen pt-24">
      <Testimonials />
    </main>
  );
}


