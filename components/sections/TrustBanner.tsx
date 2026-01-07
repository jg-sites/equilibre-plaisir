"use client"

import Image, { StaticImageData } from "next/image"

import logoAfdn from "@/components/assets/partenaires-afdn.png"
import logoAnses from "@/components/assets/partenaires-anses.png"
import logoCerin from "@/components/assets/partenaires-cerin.png"
import logoMangerBouger from "@/components/assets/partenaires-mangerbouger.png"
import logoProduitsLaitiers from "@/components/assets/partenaires-produitslaitiers.png"
import logoSpf from "@/components/assets/partenaires-spf.png"
import { Marquee } from "@/components/ui/marquee"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const trustPartners = [
  {
    name: "Manger Bouger",
    description: "Programme National Nutrition Santé",
    url: "https://www.mangerbouger.fr/",
    logo: logoMangerBouger,
  },
  {
    name: "Les Produits Laitiers",
    description: "Informations nutritionnelles",
    url: "https://www.produits-laitiers.com/",
    logo: logoProduitsLaitiers,
  },
  {
    name: "AFDN",
    description: "Association Française des Diététiciens Nutritionnistes",
    url: "https://www.afdn.org/",
    logo: logoAfdn,
  },
  {
    name: "CERIN",
    description: "Centre de Recherche et d'Information Nutritionnelles",
    url: "https://www.cerin.org/",
    logo: logoCerin,
  },
  {
    name: "ANSES",
    description: "Agence nationale de sécurité sanitaire",
    url: "https://www.anses.fr/",
    logo: logoAnses,
  },
  {
    name: "Santé Publique France",
    description: "Prévention et promotion de la santé",
    url: "https://www.santepubliquefrance.fr/",
    logo: logoSpf,
  },
]

type TrustPartner = {
  name: string
  description: string
  url: string
  logo: StaticImageData
}

const TrustLogo = ({ name, description, url, logo }: TrustPartner) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-24 w-24 items-center justify-center transition-all duration-300 hover:-translate-y-1"
        >
          <Image
            src={logo}
            alt={name}
            className="h-full w-auto max-w-full object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
        </a>
      </TooltipTrigger>
      <TooltipContent sideOffset={8}>
        <p className="font-medium">{name}</p>
        <p className="text-muted-foreground text-xs">{description}</p>
      </TooltipContent>
    </Tooltip>
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
      <TooltipProvider delayDuration={100}>
        <Marquee pauseOnHover className="[--duration:40s] [--gap:8rem]">
          {trustPartners.map((partner) => (
            <TrustLogo key={partner.name} {...partner} />
          ))}
        </Marquee>
      </TooltipProvider>
    </section>
  )
}

export default TrustBanner
