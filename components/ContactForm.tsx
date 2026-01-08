"use client"

import { FormEvent, useState } from "react"
import { Loader2, Send } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as never).toString(),
      })

      if (response.ok) {
        setIsSuccess(true)
        toast.success("Message envoyé avec succès !")
        form.reset()
      } else {
        throw new Error("Erreur lors de l'envoi")
      }
    } catch {
      toast.error("Une erreur est survenue. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="py-8 text-center">
        <div className="bg-sage/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
          <Send className="text-sage h-8 w-8" />
        </div>
        <h4 className="text-foreground mb-2 font-serif text-xl">Message envoyé !</h4>
        <p className="text-muted-foreground text-sm">Je vous répondrai dans les plus brefs délais.</p>
        <Button variant="outline" className="mt-4" onClick={() => setIsSuccess(false)}>
          Envoyer un autre message
        </Button>
      </div>
    )
  }

  const inputClasses =
    "border-border bg-background focus:border-sage focus:ring-sage/20 w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:ring-2 focus:outline-none"

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="flex h-full flex-col"
    >
      {/* Netlify hidden fields */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Ne pas remplir si vous êtes humain: <input name="bot-field" />
        </label>
      </p>

      <div className="flex-1 space-y-4">
        <div>
          <label htmlFor="name" className="text-foreground mb-1.5 block text-sm font-medium">
            Nom complet *
          </label>
          <input type="text" id="name" name="name" required className={inputClasses} placeholder="Votre nom" />
        </div>

        <div>
          <label htmlFor="contact-email" className="text-foreground mb-1.5 block text-sm font-medium">
            Email *
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            className={inputClasses}
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-foreground mb-1.5 block text-sm font-medium">
            Téléphone
          </label>
          <input type="tel" id="phone" name="phone" className={inputClasses} placeholder="06 12 34 56 78" />
        </div>

        <div>
          <label htmlFor="message" className="text-foreground mb-1.5 block text-sm font-medium">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={10}
            className={`${inputClasses} resize-none`}
            placeholder="Décrivez brièvement votre situation et vos attentes..."
          />
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit" variant="hero" size="xl" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Envoyer le message
            </>
          )}
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
