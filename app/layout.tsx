import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steadfast Tactical | Firearm Competency Training Lenasia",
  description:
    "Accredited firearm competency training in Lenasia, South Africa. Tactical shooting courses, handgun, shotgun and rifle. Transparent pricing, no hidden charges.",
  keywords: [
    "Firearm Competency Training Lenasia",
    "Accredited Firearm Training South Africa",
    "Tactical Shooting Courses",
    "Firearm training Lenasia",
    "SAPS accredited firearm training",
  ],
  openGraph: {
    title: "Steadfast Tactical | Firearm Competency Training Lenasia",
    description:
      "Accredited firearm competency training in Lenasia. Professional, transparent pricing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steadfast Tactical | Firearm Competency Training Lenasia",
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
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
      >
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
