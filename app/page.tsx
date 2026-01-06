import type { Metadata } from "next"

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

export const metadata: Metadata = {
  title: "Julien — Diététicien Nutritionniste en centre Bretagne | Rééquilibrage alimentaire Morbihan",
  description:
    "Diététicien nutritionniste diplômé en centre Bretagne. Accompagnement personnalisé pour perdre du poids sans frustration. Prise en charge possible.",
  keywords: [
    "diététicien nutritionniste centre bretagne",
    "nutritionniste morbihan",
    "perte de poids bretagne",
    "rééquilibrage alimentaire",
    "diététicien diplômé",
  ],
  alternates: {
    canonical: "https://julien-dieteticien.fr",
  },
  openGraph: {
    title: "Julien — Diététicien Nutritionniste en centre Bretagne",
    description: "Retrouvez le plaisir de manger. Accompagnement personnalisé sans frustration.",
    type: "website",
    locale: "fr_FR",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  name: "Julien - Diététicien Nutritionniste",
  description:
    "Diététicien nutritionniste diplômé en centre Bretagne. Accompagnement personnalisé pour perdre du poids sans frustration.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 rue de la Santé",
    addressLocality: "Centre Bretagne",
    postalCode: "56300",
    addressRegion: "Bretagne",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.0686,
    longitude: -2.9646,
  },
  telephone: "+33600000000",
  email: "contact@julien-dieteticien.fr",
  openingHours: ["Mo-Fr 09:00-19:00", "Sa by appointment"],
  priceRange: "€€",
  medicalSpecialty: "Dietetics",
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
