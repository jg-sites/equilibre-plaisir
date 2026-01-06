import "./globals.css"

import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { AppProviders } from "@/app/providers"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Julien — Diététicien Nutritionniste en centre Bretagne | Rééquilibrage alimentaire Morbihan",
  description:
    "Diététicien nutritionniste diplômé en centre Bretagne. Accompagnement personnalisé pour perdre du poids sans frustration. Prise en charge possible.",
  authors: [{ name: "Julien Diététicien Nutritionniste" }],
  keywords: [
    "diététicien nutritionniste centre bretagne",
    "nutritionniste morbihan",
    "perte de poids bretagne",
    "rééquilibrage alimentaire",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Julien — Diététicien Nutritionniste en centre Bretagne",
    description: "Retrouvez le plaisir de manger. Accompagnement personnalisé sans frustration ni régime miracle.",
    type: "website",
    locale: "fr_FR",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julien — Diététicien Nutritionniste en centre Bretagne",
    description: "Retrouvez le plaisir de manger. Accompagnement personnalisé.",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
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
