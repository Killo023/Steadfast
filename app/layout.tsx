import type { Metadata } from "next";
import { Source_Serif_4, IBM_Plex_Sans } from "next/font/google";
import { FontAwesomeLoader } from "@/components/FontAwesomeLoader";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Steadfast Tactical",
  description:
    "SAPS & PFTC accredited firearm competency training centre in Lenasia, Johannesburg, Gauteng.",
  url: "https://steadfasttactical.co.za",
  telephone: "+27 60 769 6710",
  email: "info@steadfasttactical.co.za",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Turquoise Street",
    addressLocality: "Lenasia",
    addressRegion: "Gauteng",
    postalCode: "1821",
    addressCountry: "ZA",
  },
  areaServed: ["Johannesburg", "Gauteng"],
  sameAs: ["https://share.google/7LgpXSIhj5FKw48Iq"],
};

export const metadata: Metadata = {
  title: "Steadfast Tactical | Firearm Training Johannesburg & Gauteng",
  description:
    "Steadfast Tactical provides SAPS & PFTC accredited firearm competency training in Lenasia, Johannesburg, Gauteng. Handgun, shotgun and rifle training with transparent pricing and no hidden charges.",
  keywords: [
    "Firearm Competency Training",
    "Accredited Firearm Training South Africa",
    "SAPS Accredited Firearm Training",
    "SAPS & PFTC Accredited Firearm Training",
    "Tactical Shooting Courses",
    "Firearm training",
    "SAPS accredited firearm training",
    "SAPS & PFTC accredited firearm training",
    "Firearm training Johannesburg",
    "Firearm training Gauteng",
    "Firearm training near me",
    "Lenasia firearm training",
    "firearm competency Johannesburg",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Steadfast Tactical | Firearm Competency Training",
    description:
      "SAPS & PFTC Accredited firearm competency training. Professional, transparent pricing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steadfast Tactical | Firearm Competency Training",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD),
          }}
        />
        <FontAwesomeLoader />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-accent focus:px-4 focus:py-2 focus:text-navy focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
