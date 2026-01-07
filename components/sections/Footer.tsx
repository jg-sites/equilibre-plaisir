import Link from "next/link"
import { Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest text-primary-foreground">
      {/* Main Footer */}
      <div className="container-narrow section-padding py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl">Julien</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Diététicien nutritionniste diplômé en centre Bretagne. Accompagnement personnalisé pour retrouver le
              plaisir de manger, sans frustration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-primary-foreground/50 text-sm font-medium tracking-widest uppercase">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#approche"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Mon approche
              </a>
              <a
                href="#services"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                À propos
              </a>
              <a
                href="#tarifs"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Tarifs
              </a>
              <a
                href="#faq"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                FAQ
              </a>
              <a
                href="#temoignages"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Témoignages
              </a>
              <a
                href="#rdv"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Prendre RDV
              </a>
              <a
                href="#contact"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Legal & SEO */}
          <div className="space-y-4">
            <h4 className="text-primary-foreground/50 text-sm font-medium tracking-widest uppercase">Informations</h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/mentions-legales"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="/cgv"
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
              >
                CGV
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-primary-foreground/10 border-t">
        <div className="container-narrow text-primary-foreground/60 flex flex-col items-center justify-between gap-4 py-6 text-sm md:flex-row">
          <p className="flex items-center gap-1">
            © {currentYear} Julien — Diététicien Nutritionniste. Fait avec
            <Heart className="fill-terracotta text-terracotta h-3 w-3" />
            en Bretagne.
          </p>

          {/* SEO Keywords */}
          <p className="text-center text-xs md:text-right">
            Diététicien Nutritionniste centre Bretagne | Nutritionniste Morbihan | Perte de poids Bretagne
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
