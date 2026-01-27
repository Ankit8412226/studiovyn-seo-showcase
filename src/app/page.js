import About from "./About";
import Contact from "./Contact";
import Hero from "./hero";
import Banner from "./home-sections/Banner";
import BlogHighlights from "./home-sections/BlogHighlights";
import CaseSpotlight from "./home-sections/CaseSpotlight";
import ClientsLogos from "./home-sections/ClientsLogos";
import CodeGallery from "./home-sections/CodeGallery";
import ContactMicro from "./home-sections/ContactMicro";
import FAQ from "./home-sections/FAQ";
import Industries from "./home-sections/Industries";
import Pricing from "./home-sections/Pricing";
import Process from "./home-sections/Process";
import PromoBanners from "./home-sections/PromoBanners";
import TechStack from "./home-sections/TechStack";
import Transform from "./home-sections/Transform";
import TrustBadges from "./home-sections/TrustBadges";
import WhyUs from "./home-sections/WhyUs";
import Portfolio from "./Portfolio";
import ServicesShowcase from "./home-sections/ServicesShowcase";
import TestimonialsShowcase from "./home-sections/TestimonialsShowcase";
import PromoCTABanners from "./home-sections/PromoCTABanners";

export const metadata = {
  title: 'Best Website Development Company in India | Custom Web Design & Digital Solutions',
  description: 'Top website development company in India offering custom web design, e-commerce development, mobile apps & digital marketing. Serving Delhi, Kolkata, Bihar & PAN India. 150+ projects | 98% satisfaction | Free consultation. Get expert web developers today!',
  keywords: 'website development company India, best web development company India, website design company, web development services India, custom website development, e-commerce development, mobile app development India, professional web developers, UI/UX design India, digital marketing services, SEO services India, website company Delhi, web development Kolkata, website development Bihar, affordable website design, responsive web design India',
  openGraph: {
    title: 'Best Website Development Company in India - StudioVyn',
    description: 'Leading website development services across India. Custom web design, e-commerce solutions & mobile apps. 150+ projects delivered with 98% client satisfaction.',
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
      <CodeGallery />
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
