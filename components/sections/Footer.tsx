import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest text-primary-foreground pb-20 md:pb-0">
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
        <div className="container-narrow px-5 py-6 md:px-8">
          <div className="text-primary-foreground/60 flex flex-col items-center gap-4 text-center text-sm md:flex-row md:justify-between md:text-left">
            <p className="flex flex-wrap items-center justify-center gap-1 md:justify-start">
              <span>© {currentYear} Julien — Diététicien Nutritionniste.</span>
              <span className="flex items-center gap-1">
                Propulsé par
                <a
                  href="https://voidcorp.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground underline underline-offset-2 transition-colors"
                >
                  Voidcorp
                </a>
              </span>
            </p>

            {/* SEO Keywords - hidden on very small screens */}
            <p className="hidden text-xs sm:block md:text-right">
              Diététicien Nutritionniste centre Bretagne | Nutritionniste Morbihan
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
