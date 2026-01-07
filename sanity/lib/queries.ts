import { groq } from "next-sanity"

export const siteConfigQuery = groq`*[_type == "siteConfig"][0]{
  // Diététicien
  name,
  jobTitle,
  phone,
  phoneLink,
  email,
  location {
    city,
    postalCode,
    region,
    country,
    coordinates {
      latitude,
      longitude
    },
    interventionRadius
  },

  // Tarifs
  pricingCards[] {
    id,
    title,
    subtitle,
    price,
    currency,
    priceLabel,
    featured,
    badge,
    features[] {
      icon,
      text
    },
    cta {
      text,
      href
    }
  },
  pricingNote {
    title,
    text,
    linkText,
    linkHref
  },

  // FAQ
  faq[] {
    icon,
    question,
    answer,
    highlight
  },

  // Témoignages
  testimonials[] {
    name,
    location,
    rating,
    text
  },

  // Horaires
  horairesSemaine {
    days,
    hours
  },
  horairesSamedi {
    days,
    hours
  },
  horairesDimanche {
    days,
    hours
  }
}`
