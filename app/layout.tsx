import type { Metadata } from "next";
import { IBM_Plex_Sans, Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import { FontAwesomeLoader } from "@/components/FontAwesomeLoader";
import { localBusinessJsonLd, websiteJsonLd, organizationJsonLd, servicesJsonLd, courseJsonLd } from "@/lib/local-business-schema";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://steadfasttactical.co.za"),
  title: {
    default:
      "Steadfast Tactical | SAPS & PFTC Accredited Firearm Training Johannesburg",
    template: "%s | Steadfast Tactical",
  },
  description:
    "SAPS & PFTC accredited firearm competency training in Lenasia, Johannesburg, Gauteng. Handgun, shotgun & rifle competency courses for personal and business use. Transparent pricing, no hidden charges.",
  keywords: [
    "Firearm Competency Training",
    "Accredited Firearm Training South Africa",
    "SAPS Accredited Firearm Training",
    "SAPS & PFTC Accredited Firearm Training",
    "Tactical Shooting Courses",
    "Firearm training",
    "SAPS accredited firearm training",
    "Firearm training Johannesburg",
    "Firearm training Gauteng",
    "Firearm training near me",
    "Lenasia firearm training",
    "firearm competency Johannesburg",
    "firearm training Johannesburg South",
    "firearm training Johannesburg North",
    "firearm competency Lenasia",
    "handgun competency training",
    "shotgun competency training",
    "self loading rifle training",
    "Regulation 21 training security",
    "firearm competency near me",
  ],
  authors: [{ name: "Steadfast Tactical" }],
  creator: "Steadfast Tactical",
  category: "firearm-training",
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    siteName: "Steadfast Tactical",
    title: "Steadfast Tactical | SAPS & PFTC Accredited Firearm Training",
    description:
      "Accredited firearm competency training in Johannesburg, Gauteng. Handgun, shotgun & rifle courses with transparent pricing.",
    url: "https://steadfasttactical.co.za",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steadfast Tactical | Firearm Competency Training",
    description:
      "SAPS & PFTC accredited firearm competency training in Johannesburg, Gauteng.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body
        className={`${plexSans.variable} ${barlowCondensed.variable} ${plexMono.variable} antialiased bg-[#000000]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
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