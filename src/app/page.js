import About from "./About";
import Contact from "./Contact";
import Hero from "./hero";
import Banner from "./home-sections/Banner";
import BlogHighlights from "./home-sections/BlogHighlights";
import CaseSpotlight from "./home-sections/CaseSpotlight";
import ClientsLogos from "./home-sections/ClientsLogos";
import ContactMicro from "./home-sections/ContactMicro";
import FAQ from "./home-sections/FAQ";
import Industries from "./home-sections/Industries";
import Pricing from "./home-sections/Pricing";
import Process from "./home-sections/Process";
import PromoBanners from "./home-sections/PromoBanners";
import PromoCTABanners from "./home-sections/PromoCTABanners";
import ServicesShowcase from "./home-sections/ServicesShowcase";
import TechStack from "./home-sections/TechStack";
import TestimonialsShowcase from "./home-sections/TestimonialsShowcase";
import Transform from "./home-sections/Transform";
import TrustBadges from "./home-sections/TrustBadges";
import WhyUs from "./home-sections/WhyUs";
import Portfolio from "./Portfolio";

export const metadata = {
  title: 'Top Website Development Company in India | Custom Web & SEO Solutions',
  description: 'Boost your business with the best website development company in India. We deliver high-performance web design, e-commerce, and mobile apps that rank and convert. 150+ projects, 98% satisfaction. Get a free proposal!',
  keywords: 'website development company India, best web development company India, website design company, web development services India, custom website development, e-commerce development, mobile app development India, professional web developers, UI/UX design India, digital marketing services, SEO services India, website company Delhi, web development Kolkata, website development Bihar, affordable website design, responsive web design India',
  openGraph: {
    title: 'Top Website Development Company in India - StudioVyn',
    description: 'Leading website development services across India. Custom web design, e-commerce solutions & mobile apps that scale your business.',
    images: [{
      url: 'https://studiovyn.in/og-image.svg',
      width: 1200,
      height: 630,
      alt: 'StudioVyn - Professional Website Development Company in India'
    }]
  }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ClientsLogos />
      <ServicesShowcase />
      <WhyUs />
      <About />
      <CaseSpotlight />
      <Process />
      <Industries />
      <Banner />
      <PromoCTABanners />
      <PromoBanners />
      <TechStack />
      <Pricing />
      <BlogHighlights />
      <TrustBadges />
      <ContactMicro />
      <Transform />
      <Portfolio />
      <TestimonialsShowcase />
      <FAQ />
      <Contact />
    </main>
  );
}
