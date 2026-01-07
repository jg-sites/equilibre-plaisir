import siteConfig from "@/content/site-config.json"

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

export interface PricingConfig {
  cards: PricingCard[]
  note: {
    title: string
    text: string
    linkText: string
    linkHref: string
  }
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

export interface OpeningHours {
  weekdays: { days: string; hours: string }
  saturday: { days: string; hours: string }
  sunday: { days: string; hours: string }
}

export interface SiteConfig {
  contact: ContactInfo
  pricing: PricingConfig
  faq: FAQItem[]
  testimonials: Testimonial[]
  openingHours: OpeningHours
}

// Export the typed configuration
export const config: SiteConfig = siteConfig as SiteConfig

// Helper exports for convenience
export const contact = config.contact
export const pricing = config.pricing
export const faq = config.faq
export const testimonials = config.testimonials
export const openingHours = config.openingHours

// Helper to parse hours string like "17:00 - 20:00" into { opens, closes }
function parseHours(hoursStr: string): { opens: string; closes: string } | null {
  if (hoursStr.toLowerCase() === "fermé") return null
  const match = hoursStr.match(/(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})/)
  if (!match) return null
  return { opens: match[1], closes: match[2] }
}

// Generate JSON-LD openingHoursSpecification from config
export function getOpeningHoursSpecification() {
  const specs: Array<{
    "@type": "OpeningHoursSpecification"
    dayOfWeek: string | string[]
    opens: string
    closes: string
  }> = []

  const weekdaysHours = parseHours(openingHours.weekdays.hours)
  if (weekdaysHours) {
    specs.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      ...weekdaysHours,
    })
  }

  const saturdayHours = parseHours(openingHours.saturday.hours)
  if (saturdayHours) {
    specs.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      ...saturdayHours,
    })
  }

  const sundayHours = parseHours(openingHours.sunday.hours)
  if (sundayHours) {
    specs.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      ...sundayHours,
    })
  }

  return specs
}
