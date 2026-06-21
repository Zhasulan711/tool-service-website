import { siteConfig } from "@/lib/site.config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+${siteConfig.whatsapp}`,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/about-workshop.jpg`,
    priceRange: siteConfig.priceRange,
    currenciesAccepted: "KZT",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressCountry: "KZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.city,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: siteConfig.openingHours.days,
        opens: siteConfig.openingHours.opens,
        closes: siteConfig.openingHours.closes,
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${siteConfig.whatsapp}`,
      contactType: "customer service",
      availableLanguage: ["ru", "kk"],
    },
    knowsAbout: [
      "Ремонт электроинструмента",
      "Ремонт перфораторов",
      "Ремонт болгарок",
      "Ремонт сварочных аппаратов",
      "Ремонт компрессоров",
      "Ремонт садовой техники",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
