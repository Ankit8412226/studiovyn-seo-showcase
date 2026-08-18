import Hero from "./hero";
import CaseSpotlight from "./home-sections/CaseSpotlight";
import ServicesShowcase from "./home-sections/ServicesShowcase";
import WhyUs from "./home-sections/WhyUs";
import Process from "./home-sections/Process";
import SEOGrowth from "./home-sections/SEOGrowth";
import LocationsSection from "./home-sections/LocationsSection";
import ProjectEstimator from "./home-sections/ProjectEstimator";
import ComparisonSection from "./home-sections/ComparisonSection";
import TechStackSection from "./home-sections/TechStackSection";
import TestimonialsShowcase from "./home-sections/TestimonialsShowcase";
import BlogHighlights from "./home-sections/BlogHighlights";
import FAQ from "./home-sections/FAQ";
import FinalCTA from "./home-sections/FinalCTA";
import QuickActionWidget from "@/components/ui/QuickActionWidget";

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

      {/* 02 — Selected Client Work */}
      <CaseSpotlight />

      {/* 03 — Full-Stack Bento Services Showcase */}
      <ServicesShowcase />

      {/* 04 — Why StudioVyn Standards */}
      <WhyUs />

      {/* 05 — Interactive Project Scope & Cost Estimator */}
      <ProjectEstimator />

      {/* 06 — StudioVyn vs Traditional Agency Matrix */}
      <ComparisonSection />

      {/* 07 — Interactive Technology & Architecture Matrix */}
      <TechStackSection />

      {/* 08 — Agile Execution Pipeline */}
      <Process />

      {/* 09 — Technical SEO & Growth Engine */}
      <SEOGrowth />

      {/* 10 — Multi-City Local Search Reach */}
      <LocationsSection />

      {/* 11 — Verified Client Testimonials */}
      <TestimonialsShowcase />

      {/* 12 — Engineering & SEO Insights Journal */}
      <BlogHighlights />

      {/* 13 — FAQ Accordion */}
      <FAQ />

      {/* 14 — Final Action CTA */}
      <FinalCTA />

      {/* Floating Quick Action Connect Widget */}
      <QuickActionWidget />
    </main>
  );
}
