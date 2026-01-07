"use client"

import Image from "next/image"
import { ArrowDown, Calendar } from "lucide-react"
import { motion } from "motion/react"

import heroFood from "@/components/assets/hero-food.jpg"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section id="hero" className="gradient-hero relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroFood}
          alt="Alimentation saine et équilibrée"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="from-background/60 via-background/80 to-background absolute inset-0 bg-linear-to-b" />
      </div>

      {/* Decorative Elements */}
      <div className="bg-sage/10 absolute top-20 left-10 h-32 w-32 rounded-full blur-3xl" />
      <div className="bg-terracotta/10 absolute right-20 bottom-40 h-48 w-48 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container-narrow section-padding relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="bg-sage/10 text-sage-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              <span className="bg-sage h-2 w-2 animate-pulse rounded-full" />
              Diététicien nutritionniste en centre Bretagne
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-foreground font-serif text-4xl leading-tight text-balance md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Retrouvez le plaisir de manger.
            <br />
            <span className="text-sage">Sans frustration,</span>
            <br />
            <span className="text-terracotta">sans régime miracle.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-muted-foreground mx-auto max-w-2xl text-lg text-balance md:text-xl"
          >
            Julien, diététicien nutritionniste diplômé en centre Bretagne, vous accompagne vers un équilibre durable —
            <span className="text-foreground font-medium"> à votre rythme</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row"
          >
            <Button variant="hero" size="xl" asChild className="group">
              <a href="#rdv">
                <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Prendre RDV
              </a>
            </Button>
            <Button variant="heroSecondary" size="lg" asChild>
              <a href="#approche">Découvrir mon approche</a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-muted-foreground flex flex-wrap justify-center gap-6 pt-8 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="bg-sage h-1.5 w-1.5 rounded-full" />
              Diplôme d'État
            </span>
            <span className="flex items-center gap-2">
              <span className="bg-sage h-1.5 w-1.5 rounded-full" />À domicile
            </span>
            <span className="flex items-center gap-2">
              <span className="bg-sage h-1.5 w-1.5 rounded-full" />
              Remboursement mutuelle possible
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#approche"
            className="text-muted-foreground hover:text-foreground flex flex-col items-center gap-2 transition-colors"
            aria-label="Défiler vers le bas"
          >
            <span className="text-xs tracking-widest uppercase">Découvrir</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
