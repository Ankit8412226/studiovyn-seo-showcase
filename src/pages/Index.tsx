import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, CheckCircle2, Award, Users, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import webDevImage from "@/assets/web-dev.jpg";
import appDevImage from "@/assets/app-dev.jpg";
import cloudImage from "@/assets/cloud.jpg";
import seoImage from "@/assets/seo.jpg";

const Index = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom website development services with responsive design, modern frameworks, and optimized performance. From simple landing pages to complex web applications, we build scalable solutions tailored to your business needs.",
      image: webDevImage,
      keywords: "web development near me, website development India, custom web development"
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile app development for iOS and Android. We create intuitive, high-performance mobile applications that engage users and drive business growth.",
      image: appDevImage,
      keywords: "app development India, mobile app development, custom app solutions"
    },
    {
      title: "Cloud Services",
      description: "Cloud infrastructure setup, migration, and management services. We help businesses leverage cloud technologies for scalability, security, and cost optimization with AWS, Google Cloud, and Azure.",
      image: cloudImage,
      keywords: "cloud services India, cloud migration, cloud infrastructure"
    },
    {
      title: "SEO & Digital Marketing",
      description: "Search engine optimization services to improve your online visibility and rankings. We implement proven SEO strategies, technical optimization, content marketing, and Google My Business profile setup to help you reach customers across India.",
      image: seoImage,
      keywords: "SEO services India, digital marketing, Google profile optimization"
    }
  ];

  const stats = [
    { icon: Briefcase, value: "15+", label: "Projects Completed" },
    { icon: Users, value: "100%", label: "Client Satisfaction" },
    { icon: Award, value: "Rising Talent", label: "Upwork Badge" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Studio Vyn",
          "description": "Professional web development, app development, and SEO services across India",
          "url": "https://studiovyn.in",
          "email": "tech@studiovyn.in",
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "priceRange": "$$",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "15"
          },
          "sameAs": [
            "https://www.upwork.com/freelancers/studiovyn"
          ]
        })}
      </script>

      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Studio Vyn</h2>
            <a href="mailto:tech@studiovyn.in">
              <Button variant="outline" size="sm">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">Rising Talent on Upwork</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Professional Web Development Services Near You
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Studio Vyn delivers exceptional web development, app development, cloud services, and SEO solutions across India. With 15+ successful projects and a proven track record, we transform your digital vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:tech@studiovyn.in">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Your Project
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Services
                </Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Professional web development workspace showing modern coding environment and development tools used by Studio Vyn"
              className="rounded-lg shadow-2xl w-full h-auto"
              loading="eager"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-foreground" />
              <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive Web Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer end-to-end digital solutions to help businesses across India establish a strong online presence and achieve their goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={service.image} 
                  alt={`${service.title} - ${service.keywords}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.keywords.split(", ").map((keyword, idx) => (
                      <Badge key={idx} variant="secondary">{keyword}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Why Choose Studio Vyn for Web Development?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-foreground mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Successfully delivered 15+ projects across various industries including e-commerce, corporate websites, SaaS applications, and mobile apps. Our portfolio demonstrates consistent quality and client satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-foreground mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Upwork Rising Talent</h3>
                <p className="text-muted-foreground">
                  Recognized as Rising Talent on Upwork, showcasing our commitment to excellence, professionalism, and delivering outstanding results for clients worldwide.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Expert Web Development Team Serving All of India
            </h3>
            <p className="text-muted-foreground mb-4">
              Studio Vyn is a professional web development agency dedicated to helping businesses across India succeed online. Whether you're searching for "web development near me" or need a reliable development partner anywhere in India, we provide comprehensive solutions tailored to your specific needs.
            </p>
            <p className="text-muted-foreground mb-4">
              Our expertise spans modern web technologies including React, Node.js, Python, and cloud platforms like AWS and Google Cloud. We specialize in creating responsive, SEO-optimized websites that not only look great but also rank well in search engines and convert visitors into customers.
            </p>
            <p className="text-muted-foreground mb-4">
              From startups to established businesses, we've helped clients across major Indian cities including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, and many more. Our remote-first approach means we can serve clients anywhere in India with the same level of dedication and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Our Development Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap."
              },
              {
                step: "02",
                title: "Design & Development",
                description: "Our team creates stunning designs and develops robust, scalable solutions using cutting-edge technologies."
              },
              {
                step: "03",
                title: "Testing & Optimization",
                description: "Rigorous testing ensures your website or app is bug-free, fast, and optimized for search engines."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We handle deployment and provide ongoing support to ensure your digital presence continues to thrive."
              }
            ].map((phase, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-foreground mb-4 opacity-20">{phase.step}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 text-center">
          Technologies We Work With
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          We leverage modern, industry-standard technologies to build fast, secure, and scalable solutions for businesses across India.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            "React", "Node.js", "Python", "TypeScript", "Next.js", "Vue.js",
            "MongoDB", "PostgreSQL", "AWS", "Google Cloud", "Docker", "Kubernetes",
            "WordPress", "Shopify", "Firebase", "GraphQL", "REST API", "Redux"
          ].map((tech, index) => (
            <Card key={index}>
              <CardContent className="p-4 text-center">
                <p className="font-semibold text-foreground">{tech}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how Studio Vyn can help bring your digital vision to life. Get in touch today for a free consultation.
          </p>
          <a href="mailto:tech@studiovyn.in">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              tech@studiovyn.in
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Studio Vyn</h3>
              <p className="text-muted-foreground mb-4">
                Professional web development, app development, and SEO services serving clients across India.
              </p>
              <a href="mailto:tech@studiovyn.in" className="text-foreground hover:underline">
                tech@studiovyn.in
              </a>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Web Development</li>
                <li>App Development</li>
                <li>Cloud Services</li>
                <li>SEO Optimization</li>
                <li>Google Profile Setup</li>
                <li>Digital Marketing</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">Areas We Serve</h4>
              <p className="text-muted-foreground">
                Web development services available across India including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, and all major cities.
              </p>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Studio Vyn. All rights reserved.</p>
            <p className="mt-2">
              Professional Web Development Services | Rising Talent on Upwork | 15+ Projects Delivered
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
