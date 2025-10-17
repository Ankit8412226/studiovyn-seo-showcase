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
import Services from "./Services";
import Testimonials from "./Testimonials";
import PromoCTABanners from "./home-sections/PromoCTABanners";

export const metadata = {
  title: 'StudioVyn - Professional Web Development & Digital Solutions',
  description: 'Transform your digital presence with StudioVyn. Expert web development, custom software solutions, and innovative design services to elevate your business online.',
  keywords: 'web development, software development, digital solutions, custom websites, mobile apps, UI/UX design, e-commerce development, business software, responsive design, frontend development, backend development',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="animate-fade-in-up"><Hero /></div>
      <div className="animate-fade-in-up"><ClientsLogos /></div>
      <div className="animate-fade-in-up"><Services /></div>
      <div className="animate-fade-in-up"><WhyUs /></div>
      <div className="animate-fade-in-up"><About /></div>
      <div className="animate-fade-in-up"><CaseSpotlight /></div>
      <div className="animate-fade-in-up"><Process /></div>
      <div className="animate-fade-in-up"><Industries /></div>
      <div className="animate-fade-in-up"><Banner /></div>
      <div className="animate-fade-in-up"><PromoCTABanners /></div>
      <div className="animate-fade-in-up"><PromoBanners /></div>
      <div className="animate-fade-in-up"><TechStack /></div>
      <div className="animate-fade-in-up"><CodeGallery /></div>
      <div className="animate-fade-in-up"><Pricing /></div>
      <div className="animate-fade-in-up"><BlogHighlights /></div>
      <div className="animate-fade-in-up"><TrustBadges /></div>
      <div className="animate-fade-in-up"><ContactMicro /></div>
      <div className="animate-fade-in-up"><Transform /></div>
      <div className="animate-fade-in-up"><Portfolio /></div>
      <div className="animate-fade-in-up"><Testimonials /></div>
      <div className="animate-fade-in-up"><FAQ /></div>
      <div className="animate-fade-in-up"><Contact /></div>
    </main>
  );
}
