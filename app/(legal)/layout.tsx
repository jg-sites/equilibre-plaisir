import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import Logo from "@/components/assets/logo.svg"
import Footer from "@/components/sections/Footer"

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="border-sage/10 bg-beige/50 border-b">
        <div className="container-narrow flex items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image src={Logo} alt="Équilibre & Plaisir" height={56} className="md:h-[56px]" />
          </Link>
          <Link
            href="/"
            className="text-sage hover:text-sage-dark inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="from-beige/30 to-background bg-gradient-to-b">
        <div className="container-narrow section-padding">{children}</div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
