import "./globals.css"

import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { AppProviders } from "@/app/providers"
import { env } from "@/env.mjs"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: "Julien — Diététicien Nutritionniste en centre Bretagne | Rééquilibrage alimentaire Morbihan",
    template: "%s | Julien — Diététicien Nutritionniste",
  },
  description:
    "Diététicien nutritionniste diplômé en centre Bretagne. Accompagnement personnalisé pour perdre du poids sans frustration. Consultations à domicile autour de Loudéac (30km). Prise en charge mutuelle possible.",
  authors: [{ name: "Julien Diététicien Nutritionniste" }],
  creator: "Julien Diététicien Nutritionniste",
  publisher: "Julien Diététicien Nutritionniste",
  keywords: [
    "diététicien nutritionniste centre bretagne",
    "nutritionniste morbihan",
    "perte de poids bretagne",
    "rééquilibrage alimentaire",
    "diététicien loudéac",
    "nutritionniste côtes d'armor",
    "consultation diététique à domicile",
    "bilan nutritionnel bretagne",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Julien — Diététicien Nutritionniste en centre Bretagne",
    description:
      "Retrouvez le plaisir de manger. Accompagnement personnalisé sans frustration ni régime miracle. Consultations à domicile.",
    type: "website",
    locale: "fr_FR",
    siteName: "Julien Diététicien Nutritionniste",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Julien - Diététicien Nutritionniste en centre Bretagne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julien — Diététicien Nutritionniste en centre Bretagne",
    description: "Retrouvez le plaisir de manger. Accompagnement personnalisé sans frustration.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "health",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#87A878",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
