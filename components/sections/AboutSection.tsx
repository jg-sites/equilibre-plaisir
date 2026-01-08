"use client"

import Image from "next/image"
import { Award, ExternalLink, ShieldCheck } from "lucide-react"
import { motion, type Variants } from "motion/react"

import julienPortrait from "@/components/assets/julien-portrait.jpg"

const badges = [
  {
    icon: Award,
    label: "Diplômé d'État",
  },
  {
    icon: ShieldCheck,
    label: "Profil officiel",
    href: "https://annuaire.esante.gouv.fr/pp/detail/10111573720?exeProId=6533917",
    external: true,
  },
]

const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
}

const fadeInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
}

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
}

const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
}

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-beige overflow-hidden">
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="whileInView"
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
              variants={scaleIn}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              role="complementary"
              aria-label="Certification"
              className="bg-background shadow-card absolute -right-4 -bottom-4 rounded-2xl p-4 md:-right-8 md:bottom-8"
            >
              <p className="text-muted-foreground text-sm">Professionnel de santé</p>
              <p className="text-foreground font-serif text-lg">Diététicien diplômé</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="whileInView"
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
                <span className="text-foreground font-medium">
                  Adhérent <abbr title="Association Française des Diététiciens Nutritionnistes">AFDN</abbr>
                </span>{" "}
                (Association Française des Diététiciens Nutritionnistes)
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  {badge.href ? (
                    <a
                      href={badge.href}
                      target={badge.external ? "_blank" : undefined}
                      rel={badge.external ? "noopener noreferrer" : undefined}
                      aria-label={`${badge.label} (ouvre dans un nouvel onglet)`}
                      className="bg-background shadow-soft hover:shadow-card flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <badge.icon className="text-sage h-4 w-4" />
                      <span className="text-foreground text-sm">{badge.label}</span>
                      <ExternalLink className="text-muted-foreground h-3 w-3" />
                    </a>
                  ) : (
                    <div className="bg-background shadow-soft flex items-center gap-2 rounded-full px-4 py-2">
                      <badge.icon className="text-sage h-4 w-4" />
                      <span className="text-foreground text-sm">{badge.label}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
