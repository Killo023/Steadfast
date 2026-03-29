/**
 * Shared LocalBusiness JSON-LD for GMB / website alignment (NAP + service areas).
 * Business name stays "Steadfast Tactical" — no keyword stuffing in the legal name.
 */
export const SITE_URL = "https://steadfasttactical.co.za";

export const NAP = {
  name: "Steadfast Tactical",
  street: "Turquoise Street",
  locality: "Lenasia",
  region: "Gauteng",
  postalCode: "1821",
  country: "ZA",
  phone: "+27 60 769 6710",
  email: "info@steadfasttactical.co.za",
} as const;

/** Suburbs / areas aligned with GMB service-area strategy (not in the business name). */
export const SERVICE_AREAS = [
  "Lenasia",
  "Ennerdale",
  "Soweto",
  "Ormonde",
  "Johannesburg South",
  "Sandton",
  "Randburg",
  "Johannesburg North",
  "Johannesburg",
  "Gauteng",
] as const;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: NAP.name,
  description:
    "SAPS & PFTC accredited firearm competency training in Lenasia. Professional firearm training for handgun, shotgun, and rifle across Johannesburg South and North. Civilian competency, legal motivations, and practical skills. Transparent pricing; no hidden charges.",
  url: SITE_URL,
  telephone: NAP.phone,
  email: NAP.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: NAP.street,
    addressLocality: NAP.locality,
    addressRegion: NAP.region,
    postalCode: NAP.postalCode,
    addressCountry: NAP.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.3167,
    longitude: 27.85,
  },
  areaServed: SERVICE_AREAS.map((name) => ({
    "@type": "Place",
    name,
  })),
  sameAs: ["https://share.google/7LgpXSIhj5FKw48Iq"],
} as const;
