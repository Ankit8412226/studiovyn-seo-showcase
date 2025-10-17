import Portfolio from '../Portfolio';

export const metadata = {
  title: 'Portfolio | StudioVyn',
  description: 'Case studies and selected work from StudioVyn across industries.',
  alternates: { canonical: '/portfolio' },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-24">
      <Portfolio />
    </main>
  );
}


