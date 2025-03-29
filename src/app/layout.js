import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://example.com"), // Replace with actual domain
  title: "GGMV Services - Railway Wagon & Labor Contractor",
  description:
    "GGMV Services offers premium railway wagon and labor contracting solutions across India.",
  keywords:
    "railway wagon, labor contractor, logistics, transportation, freight services, railway logistics",
  robots: "index, follow",
  canonical: "https://example.com",
  openGraph: {
    title: "GGMV Services - Railway & Logistics Experts",
    description:
      "We specialize in railway wagon and labor contracting services across India.",
    url: "https://example.com",
    siteName: "GGMV Services",
    images: [
      {
        url: "https://example.com/logo/GGMV-logo.png",
        width: 1200,
        height: 630,
        alt: "GGMV Services Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GGMV Services",
    description:
      "Providing premium railway wagon and labor contracting services in India.",
    images: ["https://example.com/logo/GGMV-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              name: "GGMV Services",
              url: "https://example.com",
              logo: "https://example.com/logo/GGMV-logo.png",
              description:
                "GGMV Services specializes in railway wagon and labor contracting solutions across India.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 9876543210",
                contactType: "Customer Support",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "24/2, Girish Mukherjee Road",
                addressLocality: "Kolkata",
                addressRegion: "West Bengal",
                postalCode: "700025",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
        <Header />
        <div className="w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
