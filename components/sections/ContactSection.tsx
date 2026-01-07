"use client"

import { useEffect, useState } from "react"
import { Calendar, Home, Mail, MapPin, Phone, Share2 } from "lucide-react"
import { motion } from "motion/react"
import { toast } from "sonner"

import ContactForm from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import type { ContactInfo } from "@/lib/config"

const interventionCities = ["Pontivy", "Loudéac", "Locminé", "Baud", "Guémené-sur-Scorff", "Rohan"]

interface ContactSectionProps {
  contact: ContactInfo
}

const ContactSection = ({ contact }: ContactSectionProps) => {
  const [showShareModal, setShowShareModal] = useState(false)

  // Shake detection for mobile easter egg
  useEffect(() => {
    let lastX = 0,
      lastY = 0,
      lastZ = 0
    let shakeCount = 0
    const threshold = 15

    const handleMotion = (event: DeviceMotionEvent) => {
      const acceleration = event.accelerationIncludingGravity
      if (!acceleration) return

      const x = acceleration.x || 0
      const y = acceleration.y || 0
      const z = acceleration.z || 0

      const deltaX = Math.abs(x - lastX)
      const deltaY = Math.abs(y - lastY)
      const deltaZ = Math.abs(z - lastZ)

      if (deltaX > threshold || deltaY > threshold || deltaZ > threshold) {
        shakeCount++
        if (shakeCount > 3) {
          setShowShareModal(true)
          shakeCount = 0
        }
      }

      lastX = x
      lastY = y
      lastZ = z
    }

    if (typeof window !== "undefined" && "DeviceMotionEvent" in window) {
      window.addEventListener("devicemotion", handleMotion)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("devicemotion", handleMotion)
      }
    }
  }, [])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Julien - Diététicien Nutritionniste en centre Bretagne",
          text: "Découvrez Julien, diététicien nutritionniste en centre Bretagne. Accompagnement personnalisé pour retrouver le plaisir de manger.",
          url: window.location.href,
        })
      } catch {
        toast.error("Partage impossible")
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
    setShowShareModal(false)
  }

  return (
    <section id="contact" className="section-padding bg-beige">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sage mb-4 block text-sm font-medium tracking-widest uppercase">Contact</span>
          <h2 className="text-foreground mb-4 font-serif text-3xl md:text-4xl lg:text-5xl">
            Je me déplace
            <br />
            <span className="text-sage">chez vous</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Home visits */}
            <div className="bg-background shadow-soft rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="bg-sage/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                  <Home className="text-sage h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-foreground mb-1 font-serif text-lg">Consultations à domicile</h3>
                  <p className="text-muted-foreground">
                    Je me déplace directement chez vous pour un accompagnement dans votre environnement.
                  </p>
                </div>
              </div>
              <div className="border-border mt-4 border-t pt-4">
                <div className="mb-2 flex items-center gap-2">
                  <MapPin className="text-sage h-4 w-4" />
                  <span className="text-foreground text-sm font-medium">Zone d'intervention</span>
                </div>
                <p className="text-muted-foreground mb-3 text-xs">Rayon de 30km autour de Pontivy</p>
                <div className="flex flex-wrap gap-2">
                  {interventionCities.map((city) => (
                    <span key={city} className="bg-sage/10 text-sage rounded-full px-3 py-1 text-xs font-medium">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone */}
            <a
              href={`tel:${contact.phoneLink}`}
              className="bg-background shadow-soft hover:shadow-card group flex items-start gap-4 rounded-2xl p-5 transition-all duration-300"
            >
              <div className="bg-sage/10 group-hover:bg-sage/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors">
                <Phone className="text-sage h-6 w-6" />
              </div>
              <div>
                <h3 className="text-foreground mb-1 font-serif text-lg">Téléphone</h3>
                <p className="text-muted-foreground">{contact.phone}</p>
                <p className="text-sage mt-2 text-sm">Appeler maintenant</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="bg-background shadow-soft hover:shadow-card group flex items-start gap-4 rounded-2xl p-5 transition-all duration-300"
            >
              <div className="bg-sage/10 group-hover:bg-sage/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors">
                <Mail className="text-sage h-6 w-6" />
              </div>
              <div>
                <h3 className="text-foreground mb-1 font-serif text-lg">Email</h3>
                <p className="text-muted-foreground">{contact.email}</p>
                <p className="text-sage mt-2 text-sm">Réponse sous 24h</p>
              </div>
            </a>

            {/* Booking */}
            <a
              href="#rdv"
              className="bg-background shadow-soft hover:shadow-card group flex items-start gap-4 rounded-2xl p-5 transition-all duration-300"
            >
              <div className="bg-sage/10 group-hover:bg-sage/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors">
                <Calendar className="text-sage h-6 w-6" />
              </div>
              <div>
                <h3 className="text-foreground mb-1 font-serif text-lg">Prendre rendez-vous</h3>
                <p className="text-muted-foreground">Réservez un créneau qui vous convient directement en ligne.</p>
                <p className="text-sage mt-2 text-sm">Premier échange gratuit de 15 min</p>
              </div>
            </a>

            {/* Share Button */}
            <div className="pt-4">
              <Button variant="outline" className="w-full" onClick={() => setShowShareModal(true)}>
                <Share2 className="mr-2 h-4 w-4" />
                Partager ce site
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-background shadow-card relative flex flex-col overflow-hidden rounded-3xl"
          >
            {/* Decorative elements */}
            <div className="bg-sage/5 absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl" />
            <div className="bg-terracotta/5 absolute -bottom-20 -left-20 h-40 w-40 rounded-full blur-3xl" />

            <div className="relative flex flex-1 flex-col p-6 md:p-8">
              {/* Title */}
              <div className="mb-6 text-center">
                <h3 className="text-foreground font-serif text-xl">Envoyez-moi un message</h3>
                <p className="text-muted-foreground mt-1 text-sm">Je vous réponds sous 24h</p>
              </div>

              {/* Contact Form */}
              <div className="flex-1">
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-foreground/50 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setShowShareModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-background shadow-elevated w-full max-w-sm rounded-3xl p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-sage/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl">
              <Share2 className="text-sage h-8 w-8" />
            </div>
            <h3 className="text-foreground mb-2 font-serif text-2xl">Partagez ce site</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Recommandez Julien à vos proches qui cherchent un accompagnement bienveillant.
            </p>

            {/* QR Code placeholder */}
            <div className="bg-beige mb-6 rounded-2xl p-6">
              <div className="bg-foreground/5 mx-auto flex h-32 w-32 items-center justify-center rounded-xl">
                <span className="text-muted-foreground text-xs">QR Code</span>
              </div>
            </div>

            <Button variant="hero" className="w-full" onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              Partager
            </Button>
            <button
              className="text-muted-foreground hover:text-foreground mt-4 text-sm transition-colors"
              onClick={() => setShowShareModal(false)}
            >
              Fermer
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default ContactSection
