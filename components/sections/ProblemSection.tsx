"use client"

import { Check, X } from "lucide-react"
import { motion } from "motion/react"

const problems = [
  {
    problem: "Régimes frustrants",
    solution: "Plaisir retrouvé",
    description: "Fini les restrictions qui vous font craquer. On trouve ensemble ce qui vous fait du bien.",
  },
  {
    problem: "Promesses irréalistes",
    solution: "Objectifs atteignables",
    description: 'Pas de "perdez 10kg en 2 semaines". Des résultats durables, à votre rythme.',
  },
  {
    problem: "Solitude face à l'assiette",
    solution: "Accompagnement humain",
    description: "Vous n'êtes plus seul(e). Je suis là à chaque étape pour vous guider.",
  },
]

const ProblemSection = () => {
  return (
    <section id="approche" className="section-padding bg-beige">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="text-foreground mb-4 font-serif text-3xl md:text-4xl lg:text-5xl">
            Les régimes vous ont épuisé.
            <br />
            <span className="text-sage">Et si on changeait d'approche ?</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-lg">
            Vous méritez mieux qu'un énième régime qui vous laisse affamé(e) et découragé(e).
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-background shadow-soft hover:shadow-card h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 md:p-8">
                {/* Problem */}
                <div className="border-border mb-4 flex items-center gap-3 border-b pb-4">
                  <div className="bg-destructive/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <X className="text-destructive h-5 w-5" />
                  </div>
                  <span className="text-muted-foreground decoration-destructive/50 line-through">{item.problem}</span>
                </div>

                {/* Solution */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-sage/15 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <Check className="text-sage-dark h-5 w-5" />
                  </div>
                  <span className="text-foreground font-serif text-xl">{item.solution}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
