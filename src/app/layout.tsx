import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://garyjoyal.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f2a4a",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gary Joyal | CEO of Joyal Capital Management",
    template: "%s | Gary Joyal",
  },
  description:
    "Gary Joyal is the Founder and CEO of Joyal Capital Management, LLC - a leading financial services firm specializing in asset protection, estate planning, and family-owned ventures with over two decades of experience.",
  keywords: [
    "Gary Joyal",
    "Joyal Capital Management",
    "JCM",
    "financial advisor",
    "asset protection",
    "estate planning",
    "family-owned ventures",
    "mergers and acquisitions",
    "New England",
    "Plymouth Massachusetts",
  ],
  authors: [{ name: "Gary Joyal" }],
  creator: "Gary Joyal",
  publisher: "Joyal Capital Management, LLC",
  category: "Finance",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Gary Joyal",
    title: "Gary Joyal | CEO of Joyal Capital Management",
    description:
      "Founder and CEO of Joyal Capital Management - specializing in asset protection, estate planning, and family-owned ventures. Over 500 clients across 30 states.",
    images: [
      {
        url: `${siteUrl}/photos/Gary-Joyal-2.jpg`,
        width: 1200,
        height: 630,
        alt: "Gary Joyal - CEO of Joyal Capital Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gary Joyal | CEO of Joyal Capital Management",
    description:
      "Founder and CEO of Joyal Capital Management - specializing in asset protection, estate planning, and family-owned ventures.",
    images: [`${siteUrl}/photos/Gary-Joyal-2.jpg`],
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
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Joyal Capital Management, LLC",
      url: siteUrl,
      description:
        "A leading financial services firm specializing in asset protection, estate planning, mergers and acquisitions, and family-owned ventures.",
      founder: {
        "@type": "Person",
        name: "Gary Joyal",
      },
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: 20,
      },
      areaServed: "United States",
      serviceType: [
        "Asset Protection",
        "Estate Planning",
        "Mergers and Acquisitions",
        "Franchise Development",
        "Trust Services",
        "Credit Lending",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Gary Joyal",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Gary Joyal",
      jobTitle: "Chief Executive Officer and Managing Director",
      url: siteUrl,
      worksFor: { "@id": `${siteUrl}/#organization` },
      knowsAbout: [
        "Asset Protection",
        "Estate Planning",
        "Estate Taxation",
        "High-Net-Worth Individuals",
        "Closely-Held Corporations",
        "Mergers and Acquisitions",
        "Franchise Development",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
