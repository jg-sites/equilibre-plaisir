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

const baseUrl = env.NEXT_PUBLIC_BASE_URL

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness", "HealthAndBeautyBusiness"],
  "@id": `${baseUrl}/#business`,
  name: "Julien - Diététicien Nutritionniste",
  description:
    "Diététicien nutritionniste diplômé en centre Bretagne. Accompagnement personnalisé pour perdre du poids sans frustration. Consultations à domicile.",
  url: baseUrl,
  image: `${baseUrl}/og-image.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Loudéac",
    postalCode: "22600",
    addressRegion: "Bretagne",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.1783,
    longitude: -2.7536,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 48.1783,
      longitude: -2.7536,
    },
    geoRadius: "30000",
  },
  email: "julien.dieteticien@gmail.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "12:00",
    },
  ],
  priceRange: "€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Check, Bank Transfer",
  medicalSpecialty: "Dietetics",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de diététique",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Consultation diététique",
          description: "Bilan nutritionnel complet et accompagnement personnalisé à domicile",
        },
        price: "50",
        priceCurrency: "EUR",
      },
    ],
  },
}

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${baseUrl}/#person`,
  name: "Julien",
  jobTitle: "Diététicien Nutritionniste",
  description: "Diététicien nutritionniste diplômé d'État exerçant en centre Bretagne",
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
  mainEntity: [
    {
      "@type": "Question",
      name: "Comment se déroule une consultation diététique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La première consultation dure environ 1 heure et comprend un bilan nutritionnel complet, l'analyse de vos habitudes alimentaires, la définition de vos objectifs et la remise d'un plan alimentaire personnalisé.",
      },
    },
    {
      "@type": "Question",
      name: "Les consultations sont-elles remboursées ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les consultations diététiques ne sont pas remboursées par la Sécurité sociale sauf cas particuliers. Cependant, de nombreuses mutuelles proposent un forfait de remboursement.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la zone d'intervention ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les consultations à domicile sont proposées dans un rayon de 30 km autour de Loudéac, en centre Bretagne (Morbihan, Côtes d'Armor).",
      },
    },
  ],
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

export default function Home() {
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
          <PricingSection />
          <FAQSection />
          <TestimonialsSection />
          <BookingSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
