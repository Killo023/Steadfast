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

export const metadata: Metadata = {
  title: "Steadfast Tactical | Firearm Competency Training",
  description:
    "SAPS & PFTC Accredited firearm competency training in South Africa. Tactical shooting courses, handgun, shotgun and rifle. Transparent pricing, no hidden charges.",
  keywords: [
    "Firearm Competency Training",
    "Accredited Firearm Training South Africa",
    "SAPS Accredited Firearm Training",
    "SAPS & PFTC Accredited Firearm Training",
    "Tactical Shooting Courses",
    "Firearm training",
    "SAPS accredited firearm training",
    "SAPS & PFTC accredited firearm training",
  ],
  icons: {
    icon: "/images/logo emblem.png",
    shortcut: "/images/logo emblem.png",
    apple: "/images/logo emblem.png",
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
