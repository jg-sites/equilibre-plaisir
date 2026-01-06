"use client"

import { Calendar, Check, Clock, Heart, MessageCircle, Sparkles, Users } from "lucide-react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"

const includedFeatures = [
  { icon: Clock, text: "Consultation d'1 heure" },
  { icon: MessageCircle, text: "Bilan personnalisé complet" },
  { icon: Users, text: "Plan alimentaire sur mesure" },
  { icon: Heart, text: "Suivi entre les séances" },
]

const PricingSection = () => {
  return (
    <section id="tarifs" className="from-background via-beige/30 to-background relative overflow-hidden bg-linear-to-b">
      {/* Background decorations */}
      <div className="bg-sage/5 absolute top-0 left-1/4 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-terracotta/5 absolute right-1/4 bottom-0 h-96 w-96 rounded-full blur-3xl" />

      <div className="container-narrow section-padding relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="text-sage mb-4 inline-block text-sm font-medium tracking-widest uppercase">Tarifs</span>
          <h2 className="text-foreground mb-4 font-serif text-3xl md:text-4xl lg:text-5xl">
            Un investissement pour
            <span className="text-sage"> votre bien-être</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Un accompagnement transparent, sans surprise ni engagement.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-lg"
        >
          <div className="group relative">
            {/* Glow effect */}
            <div className="bg-sage/20 absolute -inset-1 rounded-[2rem] blur-xl transition-all duration-500 group-hover:blur-2xl" />

            {/* Main card */}
            <div className="border-sage/20 bg-background relative overflow-hidden rounded-3xl border p-8 shadow-lg md:p-10">
              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span className="bg-sage/10 text-sage inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
                  <Sparkles className="h-3 w-3" />
                  Prise en charge possible
                </span>
              </div>

              {/* Header */}
              <div className="mb-8">
                <h3 className="text-foreground mb-2 font-serif text-2xl">Consultation diététique</h3>
                <p className="text-muted-foreground text-sm">Première consultation ou suivi</p>
              </div>

              {/* Price */}
              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-sage font-serif text-6xl font-medium md:text-7xl">50</span>
                <div className="flex flex-col">
                  <span className="text-foreground text-2xl font-medium">€</span>
                  <span className="text-muted-foreground text-sm">/ séance</span>
                </div>
              </div>

              {/* Divider */}
              <div className="bg-border mb-8 h-px" />

              {/* Features */}
              <ul className="mb-8 space-y-4">
                {includedFeatures.map((feature, index) => (
                  <motion.li
                    key={feature.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-sage/10 flex h-8 w-8 items-center justify-center rounded-full">
                      <feature.icon className="text-sage h-4 w-4" />
                    </div>
                    <span className="text-foreground">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="hero" size="xl" className="group/btn w-full" asChild>
                <a href="#contact">
                  <Calendar className="mr-2 h-5 w-5 transition-transform group-hover/btn:scale-110" />
                  Réserver ma consultation
                </a>
              </Button>

              {/* Trust note */}
              <p className="text-muted-foreground mt-6 flex items-center justify-center gap-2 text-center text-sm">
                <Check className="text-sage h-4 w-4" />
                Sans engagement, annulation gratuite
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-beige/50 mx-auto inline-flex flex-col items-center gap-2 rounded-2xl px-6 py-4 sm:flex-row sm:gap-4">
            <span className="text-muted-foreground text-sm">
              <strong className="text-foreground">Bon à savoir :</strong> Certaines mutuelles remboursent les
              consultations diététiques.
            </span>
            <a
              href="#contact"
              className="text-sage hover:text-sage-dark text-sm font-medium underline-offset-4 hover:underline"
            >
              Me contacter pour en savoir plus
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
