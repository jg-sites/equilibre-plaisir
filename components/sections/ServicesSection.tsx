"use client"

import { Apple, Calendar, ClipboardList, Dumbbell } from "lucide-react"
import { motion } from "motion/react"

import { Badge } from "@/components/ui/badge"

const services = [
  {
    icon: ClipboardList,
    title: "Bilan nutritionnel",
    duration: "1h • Cabinet ou visio",
    description:
      "Un premier échange pour comprendre vos habitudes, vos envies et définir ensemble des objectifs réalistes.",
    highlight: false,
  },
  {
    icon: Calendar,
    title: "Suivi personnalisé",
    duration: "Hebdo ou mensuel",
    description: "Un accompagnement régulier pour ajuster, encourager et célébrer chaque progrès — même les petits.",
    highlight: false,
  },
  {
    icon: Apple,
    title: "Rééquilibrage alimentaire",
    duration: "Programme sur mesure",
    description: "Pas de privation, pas de calcul obsessionnel. Juste retrouver le plaisir de manger sainement.",
    highlight: true,
  },
  {
    icon: Dumbbell,
    title: "Coaching sport & bien-être",
    duration: "Prochainement",
    description: "Allier nutrition et activité physique pour un équilibre complet. Patience, ça arrive bientôt !",
    highlight: false,
    badge: "Bientôt",
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="text-sage mb-4 block text-sm font-medium tracking-widest uppercase">Prestations</span>
          <h2 className="text-foreground mb-4 font-serif text-3xl md:text-4xl lg:text-5xl">
            Un accompagnement adapté
            <br />
            <span className="text-terracotta">à vos besoins</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={`relative h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 md:p-8 ${
                  service.highlight
                    ? "bg-sage text-primary-foreground shadow-elevated"
                    : "bg-card shadow-soft hover:shadow-card"
                } ${service.badge ? "opacity-75" : ""}`}
              >
                {/* Badge */}
                {service.badge && (
                  <Badge
                    variant="secondary"
                    className="bg-terracotta text-primary-foreground absolute top-4 right-4 border-0"
                  >
                    {service.badge}
                  </Badge>
                )}

                {/* Icon */}
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                    service.highlight ? "bg-primary-foreground/20" : "bg-sage/10"
                  }`}
                >
                  <service.icon className={`h-7 w-7 ${service.highlight ? "text-primary-foreground" : "text-sage"}`} />
                </div>

                {/* Content */}
                <h3
                  className={`mb-2 font-serif text-xl ${
                    service.highlight ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {service.title}
                </h3>
                <p className={`mb-4 text-sm ${service.highlight ? "text-primary-foreground/80" : "text-sage"}`}>
                  {service.duration}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    service.highlight ? "text-primary-foreground/90" : "text-muted-foreground"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
