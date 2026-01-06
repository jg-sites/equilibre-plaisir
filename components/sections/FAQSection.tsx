"use client"

import { useState } from "react"
import { ChevronDown, GraduationCap, Heart, Shield } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

const faqs = [
  {
    icon: Heart,
    question: "Pourquoi 50€ pour une consultation ?",
    answer:
      "Ce tarif reflète un accompagnement de qualité : une consultation d'une heure complète, un plan alimentaire 100% personnalisé, des déplacements à domicile inclus dans la zone d'intervention, et un suivi entre les séances. Contrairement aux consultations express de 15 minutes, je prends le temps de comprendre votre quotidien, vos contraintes et vos objectifs pour construire ensemble une solution durable.",
    highlight: "Qualité & sur-mesure",
  },
  {
    icon: GraduationCap,
    question: "Êtes-vous remboursé par la Sécurité sociale ?",
    answer:
      'En tant que diététicien nutritionniste titulaire d\'un Diplôme d\'État (BTS Diététique), ma profession est reconnue par l\'État et réglementée par le Code de la Santé Publique. Bien que la Sécurité sociale ne rembourse pas encore systématiquement les consultations diététiques, de nombreuses mutuelles proposent des forfaits "médecines douces" ou "prévention santé" qui couvrent tout ou partie des séances.',
    highlight: "Diplôme d'État",
  },
  {
    icon: Shield,
    question: "Comment savoir si ma mutuelle rembourse ?",
    answer:
      'Je vous recommande de contacter votre mutuelle et de demander si vous bénéficiez d\'un forfait "diététique", "prévention" ou "médecines douces". La plupart des mutuelles remboursent entre 1 et 6 séances par an, généralement entre 25€ et 50€ par consultation. Je vous fournis une facture conforme pour votre demande de remboursement.',
    highlight: "Prise en charge",
  },
]

const FAQItem = ({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[0]
  isOpen: boolean
  onToggle: () => void
  index: number
}) => {
  const Icon = faq.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group rounded-2xl border transition-all duration-300",
        isOpen ? "border-sage/30 bg-sage/5 shadow-md" : "border-sage/10 bg-background hover:border-sage/20"
      )}
    >
      <button onClick={onToggle} className="flex w-full items-start gap-4 p-6 text-left" aria-expanded={isOpen}>
        {/* Icon */}
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
            isOpen ? "bg-sage text-white" : "bg-sage/10 text-sage"
          )}
        >
          <Icon className="h-5 w-5" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-sage text-xs font-medium">{faq.highlight}</span>
          </div>
          <h3 className="text-foreground pr-8 font-serif text-lg md:text-xl">{faq.question}</h3>
        </div>

        {/* Chevron */}
        <div
          className={cn(
            "mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
            isOpen ? "bg-sage/20 rotate-180" : "bg-sage/10"
          )}
        >
          <ChevronDown className="text-sage h-4 w-4" />
        </div>
      </button>

      {/* Answer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="text-muted-foreground px-6 pb-6 pl-20 leading-relaxed">{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="from-beige/30 to-background relative overflow-hidden bg-linear-to-b">
      {/* Background decoration */}
      <div className="bg-sage/5 absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />

      <div className="container-narrow section-padding relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="text-sage mb-4 inline-block text-sm font-medium tracking-widest uppercase">
            Questions fréquentes
          </span>
          <h2 className="text-foreground mb-4 font-serif text-3xl md:text-4xl lg:text-5xl">
            Tout ce que vous devez
            <span className="text-sage"> savoir</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Des réponses claires sur mes tarifs et les possibilités de prise en charge.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Vous avez d'autres questions ?{" "}
            <a
              href="#contact"
              className="text-sage hover:text-sage-dark font-medium underline-offset-4 hover:underline"
            >
              Contactez-moi directement
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
