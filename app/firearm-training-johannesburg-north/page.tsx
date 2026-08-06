import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { NAP, SITE_URL } from "@/lib/local-business-schema";
import { Shield, MapPin, CheckCircle2 } from "lucide-react";

const PAGE_PATH = "/firearm-training-johannesburg-north";

const PAGE_DESCRIPTION =
  "SAPS & PFTC accredited firearm competency training for Johannesburg North, Sandton & Randburg. Training at our Lenasia range; serving the wider Johannesburg metro.";

export const metadata: Metadata = {
  title: "Firearm Training Johannesburg North | Steadfast Tactical",
  description: PAGE_DESCRIPTION,
  keywords: [
    "firearm training Johannesburg North",
    "firearm training Sandton",
    "firearm competency Randburg",
    "SAPS PFTC training Gauteng",
  ],
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Firearm Training Johannesburg North | Steadfast Tactical",
    description:
      "Accredited firearm competency training serving Johannesburg North, Sandton and Randburg from our Lenasia training centre.",
    url: `${SITE_URL}${PAGE_PATH}`,
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Firearm training Johannesburg North",
  description: PAGE_DESCRIPTION,
  url: `${SITE_URL}${PAGE_PATH}`,
  isPartOf: { "@type": "WebSite", name: "Steadfast Tactical", url: SITE_URL },
  about: { "@id": `${SITE_URL}/#localbusiness` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Firearm Training Johannesburg North",
        item: `${SITE_URL}${PAGE_PATH}`,
      },
    ],
  },
};

const areas = ["Johannesburg North", "Sandton", "Randburg", "Fourways", "Rosebank"];

export default function FirearmTrainingJohannesburgNorthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <ScrollProgress />
      <Header />
      <main
        id="main-content"
        className="relative overflow-hidden bg-[#050505] px-4 pb-24 pt-40 md:pt-48"
      >
        <div className="tactical-grid absolute inset-0 opacity-15" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)]" aria-hidden />

        <article className="relative z-10 mx-auto max-w-4xl">
          {/* Eyebrow + breadcrumb */}
          <p className="readout mb-4 flex items-center gap-3 text-accent">
            <span className="h-px w-8 bg-accent/60" aria-hidden />
            Local firearm competency training · Johannesburg North
          </p>

          <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.05] text-white md:text-6xl">
            Firearm training for <span className="text-gradient">Johannesburg North</span>
          </h1>

          <div className="mt-5 flex items-center gap-2" aria-hidden>
            <span className="h-1 w-16 bg-gradient-to-r from-accent to-indigo-400" />
            <span className="h-1 w-2 bg-accent/50" />
            <span className="h-1 w-2 bg-accent/25" />
          </div>

          <div className="mt-8 space-y-5 border-l-2 border-accent/30 pl-6 text-slate-300">
            <p className="leading-relaxed">
              <strong className="text-white">{NAP.name}</strong> is SAPS &amp; PFTC
              accredited. Our training facility is on{" "}
              <strong className="text-white">
                {NAP.street}, {NAP.locality}, {NAP.postalCode}
              </strong>
              . Residents from{" "}
              <strong className="text-white">
                Johannesburg North, Sandton, Randburg, Fourways, and Rosebank
              </strong>{" "}
              regularly book handgun, shotgun, and self-loading rifle competency
              training with us—we serve the full Johannesburg metro while keeping our
              range and instruction in Lenasia.
            </p>
            <p className="leading-relaxed">
              If you are searching for firearm competency or tactical training in
              Gauteng, we offer structured courses, clear pricing, and support for
              personal and business purposes, including motivation and legal
              requirements where applicable.
            </p>
            <p className="leading-relaxed">
              Contact us via WhatsApp or email to confirm dates, combination packages,
              or group and corporate training. Training firearms, range fees, and
              ammunition for qualification shoots are included where applicable.
            </p>
          </div>

          {/* Areas chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            {areas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 border border-accent/25 bg-accent/5 px-3 py-1.5 text-sm text-white"
              >
                <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden />
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="flex items-center gap-2 text-sm text-slate-300">
              <Shield className="h-4 w-4 text-amber-400" aria-hidden />
              SAPS &amp; PFTC Accredited
            </span>
            <span className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="h-4 w-4 text-amber-400" aria-hidden />
              No Hidden Charges
            </span>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/#pricing" className="btn-primary text-sm">
              View Courses &amp; Pricing
            </Link>
            <Link href="/#contact" className="btn-ghost text-sm">
              Contact &amp; Map
            </Link>
            <Link
              href="/firearm-training-johannesburg-south"
              className="inline-flex items-center justify-center gap-1 text-sm text-accent underline-offset-4 hover:underline"
            >
              ← Firearm training Johannesburg South
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
