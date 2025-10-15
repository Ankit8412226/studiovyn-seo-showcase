import Header from "./Header";
import Hero from "./hero";
import Services from "./Services";

export const metadata = {
  title: 'StudioVyn - Professional Web Development & Digital Solutions',
  description: 'Transform your digital presence with StudioVyn. Expert web development, custom software solutions, and innovative design services to elevate your business online.',
  keywords: 'web development, software development, digital solutions, custom websites, mobile apps, UI/UX design, e-commerce development, business software, responsive design, frontend development, backend development',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      {/* Add other sections here: Services, About, Portfolio, Testimonials, Contact */}
    </main>
  );
}
