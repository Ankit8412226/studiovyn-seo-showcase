import { Inter, Poppins } from "next/font/google";
import Footer from "./Footer";
import "./globals.css";
import Header from "./Header";
import RequestProjectModal from "./request-modal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Best Website Development Company in India | Web Design Services - StudioVyn",
  description: "Leading website development company in India. Expert web development services in Delhi NCR, Kolkata, Bihar & across India. Custom websites, e-commerce, mobile apps & digital solutions. Get 150+ projects, 98% satisfaction. Free consultation!",
  keywords: "website development company in India, web development services India, website design company Delhi, web development Kolkata, website development Bihar, best web development company India, custom website development, e-commerce development India, mobile app development India, professional web developers, affordable website design India, UI/UX design services, digital marketing India, SEO services India",
  authors: [{ name: "StudioVyn" }],
  creator: "StudioVyn",
  publisher: "StudioVyn",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://studiovyn.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Website Development Company in India | Web Design & Digital Solutions",
    description: "Top-rated website development company in India serving Delhi, Kolkata, Bihar & PAN India. 150+ successful projects. Expert web design, e-commerce & app development services.",
    url: "https://studiovyn.in",
    siteName: "StudioVyn - Website Development India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://studiovyn.in/og-image.svg",
        width: 1200,
        height: 630,
        alt: "StudioVyn - Professional Website Development Company in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Website Development Company in India - StudioVyn",
    description: "Leading web development services across India. Custom websites, e-commerce solutions & mobile apps. 150+ projects delivered with 98% client satisfaction.",
    images: ["https://studiovyn.in/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "CE8FiNrAxto-aZ7qmzq5tVQciSZD2mR-GEpraM_K57w",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://studiovyn.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'StudioVyn - Website Development Company India',
              alternateName: 'StudioVyn Web Solutions',
              url: 'https://studiovyn.in',
              logo: {
                '@type': 'ImageObject',
                url: 'https://studiovyn.in/logo.svg',
                width: 250,
                height: 60
              },
              image: 'https://studiovyn.in/og-image.svg',
              description: 'Leading website development company in India providing professional web design, e-commerce solutions, mobile app development and digital marketing services across Delhi, Kolkata, Bihar and all of India.',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+91-8529747613',
                  contactType: 'sales',
                  email: 'tech@studiovyn.in',
                  areaServed: 'IN',
                  availableLanguage: ['English', 'Hindi']
                }
              ],
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
                addressRegion: 'Delhi NCR'
              },
              sameAs: [],
              foundingDate: '2021',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '150',
                bestRating: '5',
                worstRating: '1'
              },
              award: 'Top Website Development Company in India 2024'
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://studiovyn.in/#business',
              name: 'StudioVyn - Website Development Company',
              image: 'https://studiovyn.in/og-image.svg',
              url: 'https://studiovyn.in',
              telephone: '+91-8529747613',
              email: 'tech@studiovyn.in',
              priceRange: '₹₹',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
                addressRegion: 'Delhi NCR'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 28.6139,
                longitude: 77.2090
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '18:00'
              },
              areaServed: [
                { '@type': 'State', name: 'Delhi' },
                { '@type': 'State', name: 'Bihar' },
                { '@type': 'State', name: 'West Bengal' },
                { '@type': 'State', name: 'Uttar Pradesh' },
                { '@type': 'State', name: 'Maharashtra' },
                { '@type': 'State', name: 'Karnataka' },
                { '@type': 'Country', name: 'India' }
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Website Development Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Custom Website Development',
                      description: 'Professional custom website development services using React, Next.js and modern technologies'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'E-commerce Website Development',
                      description: 'Full-featured e-commerce solutions with payment gateway integration'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Mobile App Development',
                      description: 'Native and cross-platform mobile application development'
                    }
                  }
                ]
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'StudioVyn Website Development Services',
              url: 'https://studiovyn.in',
              description: 'Professional website development, web design, and digital solutions provider serving businesses across India',
              priceRange: '₹₹',
              areaServed: {
                '@type': 'Country',
                name: 'India'
              },
              serviceType: ['Website Development', 'Web Design', 'E-commerce Development', 'Mobile App Development', 'UI/UX Design', 'Digital Marketing', 'SEO Services']
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Which is the best website development company in India?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'StudioVyn is a leading website development company in India with 150+ successful projects, 98% client satisfaction, and expertise in modern web technologies like React, Next.js, and Node.js. We serve clients across Delhi NCR, Kolkata, Bihar, and all of India.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How much does website development cost in India?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Website development costs in India vary based on complexity. A basic business website starts from ₹25,000, while e-commerce and custom web applications range from ₹75,000 to ₹5,00,000+. Contact us for a free consultation and accurate quote.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Do you provide website development services in Bihar, Delhi, and Kolkata?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, StudioVyn provides professional website development services across India with special focus on Bihar (Patna, Gaya, Muzaffarpur), Delhi NCR, Kolkata (West Bengal), and other major cities. We serve clients PAN India with remote collaboration.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How long does it take to develop a website in India?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Website development timeline typically ranges from 2-6 weeks for standard websites. Complex e-commerce platforms or custom web applications may take 8-12 weeks. Timeline depends on project scope, features, and content readiness.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Do you provide SEO and digital marketing services with website development?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, all our websites are built with SEO best practices, Core Web Vitals optimization, and technical SEO from day one. We also offer comprehensive digital marketing services including SEO, content marketing, and social media management.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'What technologies do you use for website development?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We use cutting-edge technologies including React.js, Next.js, Node.js, TypeScript, Tailwind CSS, MongoDB, PostgreSQL, and modern cloud platforms (AWS, Google Cloud). All our solutions are mobile-responsive, fast, and secure.'
                  }
                }
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://studiovyn.in'
                }
              ]
            }),
          }}
        />
      </head>
      <body className="antialiased font-primary bg-white text-gray-900 text-center sm:text-left">
        <Header />
        {children}
        <RequestProjectModal />
        <Footer />
      </body>
    </html>
  );
}
