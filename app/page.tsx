import Navigation from "@/components/Navigation"
import AboutSection from "@/components/sections/AboutSection"
import BookingSection from "@/components/sections/BookingSection"
import ContactSection from "@/components/sections/ContactSection"
import FAQSection from "@/components/sections/FAQSection"
import Footer from "@/components/sections/Footer"
import HeroSection from "@/components/sections/HeroSection"
import PricingSection from "@/components/sections/PricingSection"
import ProblemSection from "@/components/sections/ProblemSection"
import ServicesSection from "@/components/sections/ServicesSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import TrustBanner from "@/components/sections/TrustBanner"
import { env } from "@/env.mjs"
import { getContactInfo, getOpeningHoursSpecification, getPricingConfig, getSiteConfig } from "@/lib/config"

const baseUrl = env.NEXT_PUBLIC_BASE_URL

export default async function Home() {
  const siteConfig = await getSiteConfig()

  // Fallback if Sanity data is not available
  if (!siteConfig) {
    return (
      <div className="bg-background flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Chargement...</p>
      </div>
    )
  }

  const contact = getContactInfo(siteConfig)
  const pricing = getPricingConfig(siteConfig)

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness", "HealthAndBeautyBusiness"],
    "@id": `${baseUrl}/#business`,
    name: `${contact.name} - ${contact.jobTitle}`,
    description:
      "Diététicien nutritionniste diplômé en centre Bretagne. Accompagnement personnalisé pour perdre du poids sans frustration. Consultations à domicile.",
    url: baseUrl,
    image: `${baseUrl}/og-image.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: contact.location?.city,
      postalCode: contact.location?.postalCode,
      addressRegion: contact.location?.region,
      addressCountry: contact.location?.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.location?.coordinates?.latitude,
      longitude: contact.location?.coordinates?.longitude,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: contact.location?.coordinates?.latitude,
        longitude: contact.location?.coordinates?.longitude,
      },
      geoRadius: `${Number(contact.location?.interventionRadius || 30) * 1000}`,
    },
    email: contact.email,
    openingHoursSpecification: getOpeningHoursSpecification(siteConfig),
    priceRange: "€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Check, Bank Transfer",
    medicalSpecialty: "Dietetics",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de diététique",
      itemListElement: (pricing.cards || []).map((card) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: card.title,
          description: card.subtitle,
        },
        price: String(card.price),
        priceCurrency: "EUR",
      })),
    },
  }

  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: contact.name,
    jobTitle: contact.jobTitle,
    description: `${contact.jobTitle} diplômé d'État exerçant en centre Bretagne`,
    knowsAbout: [
      "Nutrition",
      "Diététique",
      "Rééquilibrage alimentaire",
      "Perte de poids",
      "Troubles du comportement alimentaire",
    ],
    worksFor: {
      "@id": `${baseUrl}/#business`,
    },
  }

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (siteConfig.faq || []).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: baseUrl,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <div className="bg-background min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <TrustBanner />
          <ProblemSection />
          <ServicesSection />
          <AboutSection />
          <PricingSection pricing={pricing} />
          <FAQSection faq={siteConfig.faq || []} />
          <TestimonialsSection testimonials={siteConfig.testimonials || []} />
          <BookingSection />
          <ContactSection contact={contact} />
        </main>
        <Footer />
      </div>
    </>
  )
}
