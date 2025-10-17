import Contact from "./Contact";
import Hero from "./hero";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Process from "./home-sections/Process";
import Industries from "./home-sections/Industries";
import FAQ from "./home-sections/FAQ";
import Transform from "./home-sections/Transform";

export const metadata = {
  title: 'StudioVyn - Professional Web Development & Digital Solutions',
  description: 'Transform your digital presence with StudioVyn. Expert web development, custom software solutions, and innovative design services to elevate your business online.',
  keywords: 'web development, software development, digital solutions, custom websites, mobile apps, UI/UX design, e-commerce development, business software, responsive design, frontend development, backend development',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Process />
      <Industries />
      <Transform />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
