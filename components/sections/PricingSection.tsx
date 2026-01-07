"use client"

import {
  Banknote,
  Calendar,
  Clock,
  CreditCard,
  FileText,
  Heart,
  MessageCircle,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"
import type { PricingCard, PricingNote } from "@/lib/config"

const iconMap = {
  clock: Clock,
  message: MessageCircle,
  users: Users,
  heart: Heart,
}

interface PricingSectionProps {
  pricing: {
    cards: PricingCard[]
    note: PricingNote
  }
}

const PricingSection = ({ pricing }: PricingSectionProps) => {
  const cards = pricing?.cards || []
  const note = pricing?.note

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

        {/* Pricing Cards */}
        {cards.length > 0 && (
          <div
            className={`mx-auto ${
              cards.length === 1
                ? "max-w-lg"
                : cards.length === 2
                  ? "grid max-w-4xl gap-8 md:grid-cols-2"
                  : "grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {cards.map((card, cardIndex) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + cardIndex * 0.1 }}
              >
                <div className="group relative">
                  {/* Glow effect */}
                  {card.featured && (
                    <div className="bg-sage/20 absolute -inset-1 rounded-4xl blur-xl transition-all duration-500 group-hover:blur-2xl" />
                  )}

                  {/* Main card */}
                  <div
                    className={`relative h-full overflow-hidden rounded-3xl border p-6 shadow-lg md:p-8 ${
                      card.featured ? "border-sage/20 bg-background" : "border-border bg-card"
                    }`}
                  >
                    {/* Badge */}
                    {card.badge && (
                      <div className="absolute top-3 right-6">
                        <span className="bg-sage/10 text-sage inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium">
                          <Sparkles className="h-3 w-3" />
                          {card.badge}
                        </span>
                      </div>
                    )}

                    {/* Header */}
                    <div className="mb-8">
                      <h3 className="text-foreground mb-2 font-serif text-2xl">{card.title}</h3>
                      <p className="text-muted-foreground text-sm">{card.subtitle}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-6 flex items-baseline gap-2">
                      <span className="text-sage font-serif text-5xl font-medium md:text-6xl">{card.price}</span>
                      <div className="flex flex-col">
                        <span className="text-foreground text-2xl font-medium">{card.currency}</span>
                        <span className="text-muted-foreground text-sm">{card.priceLabel}</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="bg-border mb-6 h-px" />

                    {/* Features */}
                    <ul className="mb-6 space-y-3">
                      {(card.features || []).map((feature, index) => {
                        const IconComponent = iconMap[feature.icon]
                        return (
                          <motion.li
                            key={feature.text}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className="bg-sage/10 flex h-8 w-8 items-center justify-center rounded-full">
                              <IconComponent className="text-sage h-4 w-4" />
                            </div>
                            <span className="text-foreground">{feature.text}</span>
                          </motion.li>
                        )
                      })}
                    </ul>

                    {/* CTA */}
                    {card.cta?.text && (
                      <Button variant="hero" size="xl" className="group/btn w-full" asChild>
                        <a href={card.cta?.href || "#contact"}>
                          <Calendar className="mr-2 h-5 w-5 transition-transform group-hover/btn:scale-110" />
                          {card.cta.text}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Payment methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-muted-foreground mb-3 text-sm">Moyens de paiement acceptés</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="text-muted-foreground flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span className="text-sm">Carte bancaire</span>
            </div>
            <div className="text-muted-foreground flex items-center gap-2">
              <Banknote className="h-4 w-4" />
              <span className="text-sm">Espèces</span>
            </div>
            <div className="text-muted-foreground flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              <span className="text-sm">Virement</span>
            </div>
            <div className="text-muted-foreground flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="text-sm">Chèque</span>
            </div>
          </div>
        </motion.div>

        {/* Additional info */}
        {note && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <div className="bg-beige/50 mx-auto inline-flex flex-col items-center gap-2 rounded-2xl px-6 py-4 sm:flex-row sm:gap-4">
              <span className="text-muted-foreground text-sm">
                <strong className="text-foreground">{note.title}</strong> {note.text}
              </span>
              <a
                href={note.linkHref}
                className="text-sage hover:text-sage-dark text-sm font-medium underline-offset-4 hover:underline"
              >
                {note.linkText}
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default PricingSection
