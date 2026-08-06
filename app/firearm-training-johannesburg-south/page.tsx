import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { NAP, SITE_URL } from "@/lib/local-business-schema";
import { Shield, MapPin, CheckCircle2 } from "lucide-react";

const PAGE_PATH = "/firearm-training-johannesburg-south";

const PAGE_DESCRIPTION =
  "SAPS & PFTC accredited firearm competency training for Johannesburg South, Lenasia, Soweto, Ennerdale & Ormonde. Handgun, shotgun & rifle courses at our Lenasia range.";

export const metadata: Metadata = {
  title: "Firearm Training Johannesburg South | Steadfast Tactical",
  description: PAGE_DESCRIPTION,
  keywords: [
    "firearm training Johannesburg South",
    "firearm competency Lenasia",
    "SAPS PFTC training Soweto",
    "handgun training Gauteng",
  ],
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: "Firearm Training Johannesburg South | Steadfast Tactical",
    description:
      "Accredited firearm competency training serving Johannesburg South and surrounding areas from our Lenasia training centre.",
    url: `${SITE_URL}${PAGE_PATH}`,
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Firearm training Johannesburg South",
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
        name: "Firearm Training Johannesburg South",
        item: `${SITE_URL}${PAGE_PATH}`,
      },
    ],
  },
};

const areas = ["Johannesburg South", "Lenasia", "Ennerdale", "Soweto", "Ormonde"];

export default function FirearmTrainingJohannesburgSouthPage() {
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
            Local firearm competency training · Johannesburg South
          </p>

          <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.05] text-white md:text-6xl">
            Firearm training for <span className="text-gradient">Johannesburg South</span>
          </h1>

          <div className="mt-5 flex items-center gap-2" aria-hidden>
            <span className="h-1 w-16 bg-gradient-to-r from-accent to-indigo-400" />
            <span className="h-1 w-2 bg-accent/50" />
            <span className="h-1 w-2 bg-accent/25" />
          </div>

          <div className="mt-8 space-y-5 border-l-2 border-accent/30 pl-6 text-slate-300">
            <p className="leading-relaxed">
              <strong className="text-white">{NAP.name}</strong> provides SAPS &amp; PFTC
              accredited firearm competency training from our centre on{" "}
              <strong className="text-white">
                {NAP.street}, {NAP.locality}, {NAP.postalCode}
              </strong>
              . We regularly welcome clients from{" "}
              <strong className="text-white">
                Johannesburg South, Lenasia, Ennerdale, Soweto, and Ormonde
              </strong>{" "}
              for handgun, shotgun, and self-loading rifle competency courses.
            </p>
            <p className="leading-relaxed">
              Our physical training facility is in Lenasia; distance from suburbs in
              Johannesburg South is typically short, making same-day theory and range
              sessions practical for residents across the south of Johannesburg.
            </p>
            <p className="leading-relaxed">
              Whether you need personal-purpose training, business-purpose courses, or
              guidance on motivation and legal requirements, we keep pricing transparent
              and include range fees, ammunition for qualification shoots, and training
              firearms where applicable.
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
              href="/firearm-training-johannesburg-north"
              className="inline-flex items-center justify-center gap-1 text-sm text-accent underline-offset-4 hover:underline"
            >
              Firearm training Johannesburg North →
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
