import Hero from "./hero";
import ServicesShowcase from "./home-sections/ServicesShowcase";
import WhyUs from "./home-sections/WhyUs";
import Process from "./home-sections/Process";
import ComparisonSection from "./home-sections/ComparisonSection";
import TestimonialsShowcase from "./home-sections/TestimonialsShowcase";
import FAQ from "./home-sections/FAQ";

export const metadata = {
  title: 'StudioVyn | Top Website Development Company in India',
  description: 'StudioVyn builds high-performance websites, e-commerce, and apps that rank and convert. 150+ projects, 98% satisfaction. Get a free proposal.',
  keywords: 'website development company India, best web development company India, website design company, web development services India, custom website development, e-commerce development, mobile app development India, professional web developers, UI/UX design India, digital marketing services, SEO services India, website company Delhi, web development Kolkata, website development Bihar, affordable website design, responsive web design India',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'StudioVyn | Top Website Development Company in India',
    description: 'Leading website development services across India. Custom web design, e-commerce solutions & mobile apps that scale your business.',
    url: 'https://studiovyn.in',
    type: 'website',
    siteName: 'StudioVyn',
    images: [{
      url: 'https://studiovyn.in/og-image.svg',
      width: 1200,
      height: 630,
      alt: 'StudioVyn - Professional Website Development Company in India'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StudioVyn | Top Website Development Company in India',
    description: 'High-performance websites, e-commerce, and mobile apps built by StudioVyn.',
    images: ['https://studiovyn.in/og-image.svg']
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 01 — Hero Spotlight */}
      <Hero />

      {/* 02 — Full-Stack Bento Services Showcase */}
      <ServicesShowcase />

      {/* 04 — Why StudioVyn Standards */}
      <WhyUs />

      {/* 05 — StudioVyn vs Traditional Agency Matrix */}
      <ComparisonSection />

      {/* 06 — Agile Execution Pipeline */}
      <Process />

      {/* 07 — Verified Client Testimonials */}
      <TestimonialsShowcase />

      {/* 08 — FAQ Accordion */}
      <FAQ />
    </main>
  );
}
