"use client"

import Image from "next/image"
import { Award, Euro, HeartHandshake, User } from "lucide-react"
import { motion } from "motion/react"

import julienPortrait from "@/components/assets/julien-portrait.jpg"

const badges = [
  {
    icon: Award,
    label: "Diplôme reconnu par l'État",
  },
  { icon: Euro, label: "Prise en charge possible", href: "#faq" },
  {
    icon: User,
    label: "Inscrit répertoire des professionnels de santé",
    href: "https://annuaire.esante.gouv.fr/pp/detail/10111573720?exeProId=6533917",
    external: true,
  },
  { icon: HeartHandshake, label: "Approche bienveillante" },
]

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-beige overflow-hidden">
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="bg-sage/10 absolute -inset-4 -rotate-3 rounded-4xl" />
              <div className="bg-terracotta/10 absolute -inset-4 rotate-2 rounded-4xl" />

              {/* Main image */}
              <div className="shadow-elevated relative aspect-4/5 overflow-hidden rounded-3xl">
                <Image
                  src={julienPortrait}
                  alt="Julien, diététicien nutritionniste en centre Bretagne"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="from-forest/20 absolute inset-0 bg-linear-to-t to-transparent" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background shadow-card absolute -right-4 -bottom-4 rounded-2xl p-4 md:-right-8 md:bottom-8"
            >
              <p className="text-muted-foreground text-sm">Diplômé d'État</p>
              <p className="text-foreground font-serif text-lg">BTS Diététique</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-sage text-sm font-medium tracking-widest uppercase">À propos</span>

            <h2 className="text-foreground font-serif text-3xl md:text-4xl">
              Enchanté, moi c'est
              <span className="text-sage"> Julien</span>
            </h2>

            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Diététicien nutritionniste diplômé, je crois qu'on ne change pas durablement dans la contrainte. Les
                régimes qui vous affament ? Très peu pour moi. Les promesses miracles ? Encore moins.
              </p>
              <p>
                <span className="text-foreground font-medium">Mon approche : </span>
                comprendre vos habitudes, trouver ce qui fonctionne pour VOUS, avancer ensemble. Pas de jugement, pas de
                pression — juste un accompagnement humain.
              </p>
              <p>
                Je propose également un accompagnement en{" "}
                <span className="text-foreground font-medium">alimentation thérapeutique</span> : diabète, maladies
                cardiovasculaires, pathologies digestives, allergies alimentaires...
              </p>
              <p>
                <span className="text-foreground font-medium">Adhérent AFDN</span> (Association Française des
                Diététiciens Nutritionnistes)
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {badges.map((badge, index) => {
                const BadgeContent = (
                  <>
                    <badge.icon className="text-sage h-4 w-4" />
                    <span className="text-foreground text-sm">{badge.label}</span>
                  </>
                )

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    {badge.href ? (
                      <a
                        href={badge.href}
                        target={badge.external ? "_blank" : undefined}
                        rel={badge.external ? "noopener noreferrer" : undefined}
                        className="bg-background shadow-soft hover:shadow-card flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        {BadgeContent}
                      </a>
                    ) : (
                      <div className="bg-background shadow-soft flex items-center gap-2 rounded-full px-4 py-2">
                        {BadgeContent}
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
