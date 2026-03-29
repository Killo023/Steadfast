import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { NAP, SITE_URL } from "@/lib/local-business-schema";

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
    description: PAGE_DESCRIPTION,
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
};

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
        className="bg-[#0a0a0a] px-4 pb-20 pt-[180px] text-gray-300"
      >
        <article className="mx-auto max-w-3xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">
            Local firearm competency training
          </p>
          <h1 className="mb-6 font-sans text-3xl font-bold text-white md:text-4xl">
            Firearm training for Johannesburg North
          </h1>
          <p className="mb-4 leading-relaxed">
            <strong className="text-white">{NAP.name}</strong> is SAPS &amp; PFTC
            accredited. Our training facility is on{" "}
            <strong className="text-white">
              {NAP.street}, {NAP.locality}, {NAP.postalCode}
            </strong>
            . Residents from{" "}
            <strong className="text-white">
              Johannesburg North, Sandton, Randburg
            </strong>
            , and across the northern suburbs regularly book handgun, shotgun, and
            self-loading rifle competency training with us—we serve the full
            Johannesburg metro while keeping our range and instruction in Lenasia.
          </p>
          <p className="mb-4 leading-relaxed">
            If you are searching for firearm competency or tactical training near you
            in Gauteng, we offer structured courses, clear pricing, and support for
            personal and business purposes, including motivation and legal
            requirements where applicable.
          </p>
          <p className="mb-8 leading-relaxed">
            Contact us via WhatsApp or email to confirm dates, combination packages,
            or group and corporate training.
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
              href="/firearm-training-johannesburg-south"
              className="inline-flex items-center justify-center text-sm text-accent underline hover:no-underline"
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
