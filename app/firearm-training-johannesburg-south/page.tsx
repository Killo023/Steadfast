import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { NAP, SITE_URL } from "@/lib/local-business-schema";

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
};

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
        className="bg-[#0a0a0a] px-4 pb-20 pt-[180px] text-gray-300"
      >
        <article className="mx-auto max-w-3xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
            Local firearm competency training
          </p>
          <h1 className="mb-6 font-sans text-3xl font-bold text-white md:text-4xl">
            Firearm training for Johannesburg South
          </h1>
          <p className="mb-4 leading-relaxed">
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
          <p className="mb-4 leading-relaxed">
            Our physical training facility is in Lenasia; distance from suburbs in
            Johannesburg South is typically short, making same-day theory and range
            sessions practical for residents across the south of Johannesburg.
          </p>
          <p className="mb-8 leading-relaxed">
            Whether you need personal-purpose training, business-purpose courses, or
            guidance on motivation and legal requirements, we keep pricing transparent
            and include range fees, ammunition for qualification shoots, and training
            firearms where applicable.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/#pricing"
              className="inline-flex items-center justify-center rounded border border-accent bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:opacity-90"
            >
              View pricing
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10"
            >
              Contact &amp; map
            </Link>
            <Link
              href="/firearm-training-johannesburg-north"
              className="inline-flex items-center justify-center text-sm text-accent underline hover:no-underline"
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
