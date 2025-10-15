import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://studiovyn.com"),
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="CE8FiNrAxto-aZ7qmzq5tVQciSZD2mR-GEpraM_K57w"
        />
      </head>
      <body className="antialiased font-primary bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
