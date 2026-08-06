/**
 * Shared structured data (JSON-LD) for Steadfast Tactical.
 * Entity-rich markup helps both Google ranking and AI search engines
 * (chat / answer engines) understand who we are, where we operate, what we
 * teach, and why the business is credible.
 *
 * NAP (Name / Address / Phone) stays consistent across every entity.
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
  latitude: -26.3167,
  longitude: 27.85,
} as const;

/** Suburbs / areas aligned with GMB service-area strategy. */
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

export const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: NAP.street,
  addressLocality: NAP.locality,
  addressRegion: NAP.region,
  postalCode: "1821",
  addressCountry: NAP.country,
};

export const GEO = {
  "@type": "GeoCoordinates",
  latitude: NAP.latitude,
  longitude: NAP.longitude,
};

/** Core identity block shared by Organization + LocalBusiness entities. */
const businessCore = {
  "@id": `${SITE_URL}/#org`,
  name: NAP.name,
  url: SITE_URL,
  telephone: NAP.phone,
  email: NAP.email,
  address: ADDRESS,
  geo: GEO,
  areaServed: SERVICE_AREAS.map((name) => ({ "@type": "Place", name })),
  sameAs: ["https://share.google/7LgpXSIhj5FKw48Iq"],
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  ...businessCore,
  logo: `${SITE_URL}/images/logo%20side.png`,
  image: `${SITE_URL}/images/logo%20side.png`,
  slogan: "Chosen by Many. Trusted by More.",
  knowsAbout: [
    "Firearm competency training",
    "Firearms Control Act 2000",
    "Handgun training",
    "Shotgun training",
    "Rifle training",
    "Firearm safety",
    "Regulation 21 compliance training",
  ],
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: NAP.name,
  description:
    "SAPS & PFTC accredited firearm competency training in Lenasia, Johannesburg, Gauteng. Handgun, shotgun and rifle competency courses for personal and business purposes. Transparent pricing, no hidden charges.",
  url: SITE_URL,
  telephone: NAP.phone,
  email: NAP.email,
  address: ADDRESS,
  geo: GEO,
  areaServed: SERVICE_AREAS.map((name) => ({ "@type": "Place", name })),
  priceRange: "R1 200 - R2 700",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Firearm Competency Training Courses",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Handgun Competency Training",
          description: "Personal or business purpose handgun competency training.",
          provider: { "@id": `${SITE_URL}/#org` },
        },
        price: "1200",
        priceCurrency: "ZAR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Handgun & Shotgun Competency Training",
          provider: { "@id": `${SITE_URL}/#org` },
        },
        price: "1700",
        priceCurrency: "ZAR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Handgun, Shotgun & Self-Loading Rifle Competency Training",
          provider: { "@id": `${SITE_URL}/#org` },
        },
        price: "2100",
        priceCurrency: "ZAR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Complete Firearm Competency Package (All Categories)",
          provider: { "@id": `${SITE_URL}/#org` },
        },
        price: "2700",
        priceCurrency: "ZAR",
      },
    ],
  },
  sameAs: ["https://share.google/7LgpXSIhj5FKw48Iq"],
};

/** Website entity — helps AI/Google understand site + language. */
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Steadfast Tactical",
  description:
    "SAPS & PFTC accredited firearm competency training in Johannesburg, Gauteng.",
  inLanguage: "en-ZA",
  publisher: { "@id": `${SITE_URL}/#org` },
};

/** Service entities describing what we do for humans + AI answer engines. */
export const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  serviceType: "Firearm Competency Training",
  name: "Firearm Competency Training",
  description:
    "Accredited firearm competency training covering theory, the Firearms Control Act, 2000, safe handling, and practical live-fire exercises for handgun, shotgun, self-loading rifle and manually operated rifle.",
  provider: { "@id": `${SITE_URL}/#org` },
  areaServed: SERVICE_AREAS.map((name) => ({ "@type": "Place", name })),
  availableChannel: {
    "@type": "ServiceChannel",
    servicePhone: { "@type": "ContactPoint", telephone: NAP.phone },
    availableLanguage: "en",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    itemListElement: [
      { "@type": "Offer", category: "Personal Purpose Firearm Training", provider: { "@id": `${SITE_URL}/#org` } },
      { "@type": "Offer", category: "Business Purpose Firearm Training", provider: { "@id": `${SITE_URL}/#org` } },
      { "@type": "Offer", category: "Regulation 21 Compliance Training", provider: { "@id": `${SITE_URL}/#org` } },
    ],
  },
};

/** Educational courses — strong for AI/LLM answer extraction. */
export const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Course", "EducationalOccupationalProgram"],
  "@id": `${SITE_URL}/#courses`,
  name: "Firearm Competency Training Program",
  description:
    "SAPS & PFTC accredited firearm competency training covering the Firearms Control Act, 2000, and safe handling of handguns, shotguns and rifles. Includes theory, practical live-fire, assessments and certification.",
  provider: { "@id": `${SITE_URL}/#org` },
  educationalLevel: "Accredited Competency Training",
  courseMode: "Onsite",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "1200",
    highPrice: "2700",
    priceCurrency: "ZAR",
    offerCount: 4,
  },
};