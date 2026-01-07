import { render, screen } from "@testing-library/react"
import { vi } from "vitest"

import HomePage from "./page"

// Mock the config module
vi.mock("@/lib/config", () => ({
  getSiteConfig: vi.fn().mockResolvedValue({
    name: "Julien",
    jobTitle: "Diététicien Nutritionniste",
    phone: "06 00 00 00 00",
    phoneLink: "0600000000",
    email: "contact@test.fr",
    location: {
      city: "Loudéac",
      postalCode: "22600",
      region: "Bretagne",
      country: "FR",
      coordinates: { latitude: 48.1833, longitude: -2.75 },
      interventionRadius: "30",
    },
    pricingCards: [
      {
        id: "consultation",
        title: "Consultation",
        subtitle: "Suivi personnalisé",
        price: 50,
        currency: "€",
        priceLabel: "/ séance",
        featured: true,
        features: [{ icon: "clock", text: "1h de consultation" }],
        cta: { text: "Réserver", href: "#rdv" },
      },
    ],
    pricingNote: {
      title: "Mutuelle",
      text: "Remboursement possible",
      linkText: "En savoir plus",
      linkHref: "#faq",
    },
    faq: [
      {
        icon: "heart",
        question: "Comment se passe une consultation ?",
        answer: "Je vous accompagne de manière bienveillante.",
        highlight: "Accompagnement",
      },
    ],
    testimonials: [
      {
        name: "Marie",
        location: "Loudéac",
        rating: 5,
        text: "Excellent accompagnement !",
      },
    ],
    horairesSemaine: { days: "Lundi - Vendredi", hours: "09:00 - 19:00" },
    horairesSamedi: { days: "Samedi", hours: "09:00 - 12:00" },
    horairesDimanche: { days: "Dimanche", hours: "Fermé" },
  }),
  getContactInfo: vi.fn().mockReturnValue({
    name: "Julien",
    jobTitle: "Diététicien Nutritionniste",
    phone: "06 00 00 00 00",
    phoneLink: "0600000000",
    email: "contact@test.fr",
    location: {
      city: "Loudéac",
      postalCode: "22600",
      region: "Bretagne",
      country: "FR",
      coordinates: { latitude: 48.1833, longitude: -2.75 },
      interventionRadius: "30",
    },
  }),
  getPricingConfig: vi.fn().mockReturnValue({
    cards: [
      {
        id: "consultation",
        title: "Consultation",
        subtitle: "Suivi personnalisé",
        price: 50,
        currency: "€",
        priceLabel: "/ séance",
        featured: true,
        features: [{ icon: "clock", text: "1h de consultation" }],
        cta: { text: "Réserver", href: "#rdv" },
      },
    ],
    note: {
      title: "Mutuelle",
      text: "Remboursement possible",
      linkText: "En savoir plus",
      linkHref: "#faq",
    },
  }),
  getOpeningHoursSpecification: vi.fn().mockReturnValue([]),
}))

// Mock env module
vi.mock("@/env.mjs", () => ({
  env: {
    NEXT_PUBLIC_BASE_URL: "https://test.com",
  },
}))

describe("HomePage", () => {
  it("affiche le contenu principal quand les données sont chargées", async () => {
    const HomePageResolved = await HomePage()
    render(HomePageResolved)

    // Vérifie que le nom apparaît quelque part
    const julienElements = screen.getAllByText(/Julien/i)
    expect(julienElements.length).toBeGreaterThan(0)
  })
})
