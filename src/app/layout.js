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
  title: "StudioVyn - Professional Web Development & Digital Solutions",
  description: "Transform your digital presence with StudioVyn. Expert web development, custom software solutions, and innovative design services to elevate your business online.",
  keywords: "web development, software development, digital solutions, custom websites, mobile apps, UI/UX design, e-commerce development, business software",
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
    title: "StudioVyn - Professional Web Development & Digital Solutions",
    description: "Transform your digital presence with StudioVyn. Expert web development, custom software solutions, and innovative design services.",
    url: "https://studiovyn.com",
    siteName: "StudioVyn",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StudioVyn - Professional Web Development & Digital Solutions",
    description: "Transform your digital presence with StudioVyn. Expert web development and digital solutions.",
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
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="CE8FiNrAxto-aZ7qmzq5tVQciSZD2mR-GEpraM_K57w"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'StudioVyn',
              url: 'https://studiovyn.in',
              logo: 'https://studiovyn.in/favicon.svg',
              contactPoint: [{ '@type': 'ContactPoint', telephone: '+91-8529747613', contactType: 'sales', email: 'tech@studiovyn.in' }],
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'StudioVyn',
              url: 'https://studiovyn.in',
              areaServed: [
                { '@type': 'State', name: 'Bihar' },
                { '@type': 'State', name: 'West Bengal' },
                { '@type': 'State', name: 'Delhi' },
                { '@type': 'Country', name: 'India' }
              ],
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN'
              },
              sameAs: [],
              priceRange: '$$'
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
                  name: 'Do you provide services in Bihar and West Bengal?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. We serve clients across India with strong focus on Bihar, West Bengal (Kolkata), and Delhi NCR.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How fast can you deliver a website?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Typical timeline is 2–6 weeks depending on scope and content readiness.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Do you handle SEO and performance?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. We build with performance, Core Web Vitals, and technical SEO best practices from day one.'
                  }
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
