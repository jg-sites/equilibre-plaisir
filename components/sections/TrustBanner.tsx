"use client"

import { ExternalLink } from "lucide-react"

import { Marquee } from "@/components/ui/marquee"

const trustPartners = [
  {
    name: "Manger Bouger",
    description: "Programme National Nutrition Santé",
    url: "https://www.mangerbouger.fr/",
    initials: "MB",
    bgColor: "bg-[#95C11F]/15",
    textColor: "text-[#95C11F]",
  },
  {
    name: "Les Produits Laitiers",
    description: "Informations nutritionnelles",
    url: "https://www.produits-laitiers.com/",
    initials: "PL",
    bgColor: "bg-[#0072BC]/15",
    textColor: "text-[#0072BC]",
  },
  {
    name: "AFDN",
    description: "Assoc. Française des Diététiciens",
    url: "https://www.afdn.org/",
    initials: "AF",
    bgColor: "bg-[#E30613]/15",
    textColor: "text-[#E30613]",
  },
  {
    name: "CERIN",
    description: "Recherche & Information Nutrition",
    url: "https://www.cerin.org/",
    initials: "CE",
    bgColor: "bg-[#00A19A]/15",
    textColor: "text-[#00A19A]",
  },
  {
    name: "ANSES",
    description: "Agence de sécurité sanitaire",
    url: "https://www.anses.fr/",
    initials: "AN",
    bgColor: "bg-[#003D7C]/15",
    textColor: "text-[#003D7C]",
  },
  {
    name: "Santé Publique France",
    description: "Prévention & promotion santé",
    url: "https://www.santepubliquefrance.fr/",
    initials: "SPF",
    bgColor: "bg-[#E94E1B]/15",
    textColor: "text-[#E94E1B]",
  },
]

type TrustPartner = (typeof trustPartners)[0]

const TrustCard = ({ name, description, url, initials, bgColor, textColor }: TrustPartner) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-sage/10 bg-background/80 hover:border-sage/25 hover:bg-background relative flex h-[72px] w-[280px] items-center gap-4 rounded-2xl border px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
    >
      {/* Logo badge */}
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${bgColor} transition-transform duration-300 group-hover:scale-105`}
      >
        <span className={`text-xs font-bold tracking-tight ${textColor}`}>{initials}</span>
      </div>

      {/* Text content */}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-foreground/90 group-hover:text-foreground truncate text-sm font-semibold transition-colors duration-300">
          {name}
        </span>
        <span className="text-muted-foreground/80 truncate text-xs">{description}</span>
      </div>

      {/* External link icon */}
      <ExternalLink className="text-muted-foreground/40 group-hover:text-sage h-3.5 w-3.5 shrink-0 transition-all duration-300" />
    </a>
  )
}

const TrustBanner = () => {
  return (
    <section className="from-beige/30 via-beige/50 to-beige/30 relative overflow-hidden bg-linear-to-b py-10">
      {/* Gradient overlays for smooth fade effect */}
      <div className="from-beige/80 pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r to-transparent" />
      <div className="from-beige/80 pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l to-transparent" />

      {/* Header */}
      <div className="mb-8 text-center">
        <p className="text-sage text-xs font-medium tracking-widest uppercase">Références</p>
        <p className="text-muted-foreground mt-1 text-sm">Sources et partenaires de confiance</p>
      </div>

      {/* Marquee */}
      <Marquee pauseOnHover className="[--duration:45s] [--gap:1.25rem]">
        {trustPartners.map((partner) => (
          <TrustCard key={partner.name} {...partner} />
        ))}
      </Marquee>
    </section>
  )
}

export default TrustBanner
