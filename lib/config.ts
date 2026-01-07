import { client } from "@/sanity/lib/client"
import { siteConfigQuery } from "@/sanity/lib/queries"

// Types for the site configuration
export interface ContactInfo {
  name: string
  jobTitle: string
  phone: string
  phoneLink: string
  email: string
  location: {
    city: string
    postalCode: string
    region: string
    country: string
    coordinates: {
      latitude: number
      longitude: number
    }
    interventionRadius: string
  }
}

export interface PricingFeature {
  icon: "clock" | "message" | "users" | "heart"
  text: string
}

export interface PricingCard {
  id: string
  title: string
  subtitle: string
  price: number
  currency: string
  priceLabel: string
  featured: boolean
  badge?: string
  features: PricingFeature[]
  cta: {
    text: string
    href: string
  }
}

export interface PricingNote {
  title: string
  text: string
  linkText: string
  linkHref: string
}

export interface FAQItem {
  icon: "heart" | "graduation" | "shield" | "question"
  question: string
  answer: string
  highlight: string
}

export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
}

export interface OpeningHoursSlot {
  days: string
  hours: string
}

export interface SiteConfig {
  // Diététicien
  name: string
  jobTitle: string
  phone: string
  phoneLink: string
  email: string
  location: ContactInfo["location"]

  // Tarifs
  pricingCards: PricingCard[]
  pricingNote: PricingNote

  // FAQ
  faq: FAQItem[]

  // Témoignages
  testimonials: Testimonial[]

  // Horaires
  horairesSemaine: OpeningHoursSlot
  horairesSamedi: OpeningHoursSlot
  horairesDimanche: OpeningHoursSlot
}

// Fetch site configuration from Sanity
export async function getSiteConfig(): Promise<SiteConfig | null> {
  try {
    const data = await client.fetch<SiteConfig>(siteConfigQuery)
    return data
  } catch {
    return null
  }
}

// Helper to parse hours string like "17:00 - 20:00" into { opens, closes }
function parseHours(hoursStr: string | undefined): { opens: string; closes: string } | null {
  if (!hoursStr || hoursStr.toLowerCase() === "fermé") return null
  const match = hoursStr.match(/(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})/)
  if (!match) return null
  return { opens: match[1], closes: match[2] }
}

// Generate JSON-LD openingHoursSpecification from config
export function getOpeningHoursSpecification(config: SiteConfig) {
  const specs: Array<{
    "@type": "OpeningHoursSpecification"
    dayOfWeek: string | string[]
    opens: string
    closes: string
  }> = []

  const weekdaysHours = parseHours(config.horairesSemaine?.hours)
  if (weekdaysHours) {
    specs.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      ...weekdaysHours,
    })
  }

  const saturdayHours = parseHours(config.horairesSamedi?.hours)
  if (saturdayHours) {
    specs.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      ...saturdayHours,
    })
  }

  const sundayHours = parseHours(config.horairesDimanche?.hours)
  if (sundayHours) {
    specs.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      ...sundayHours,
    })
  }

  return specs
}

// Helper to get contact info in the old format for backward compatibility
export function getContactInfo(config: SiteConfig): ContactInfo {
  return {
    name: config.name,
    jobTitle: config.jobTitle,
    phone: config.phone,
    phoneLink: config.phoneLink,
    email: config.email,
    location: config.location,
  }
}

// Helper to get pricing config in the old format
export function getPricingConfig(config: SiteConfig) {
  return {
    cards: config.pricingCards || [],
    note: config.pricingNote,
  }
}

// Helper to get opening hours in the old format
export function getOpeningHours(config: SiteConfig) {
  return {
    weekdays: config.horairesSemaine,
    saturday: config.horairesSamedi,
    sunday: config.horairesDimanche,
  }
}
