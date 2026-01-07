"use client"

import { useEffect, useState } from "react"
import { Calendar, Home, Mail, Phone, Share2 } from "lucide-react"
import { motion } from "motion/react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import type { ContactInfo } from "@/lib/config"

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
            <div className="bg-background shadow-soft flex items-start gap-4 rounded-2xl p-5">
              <div className="bg-sage/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                <Home className="text-sage h-6 w-6" />
              </div>
              <div>
                <h3 className="text-foreground mb-1 font-serif text-lg">Consultations à domicile</h3>
                <p className="text-muted-foreground">
                  Je me déplace directement chez vous pour un accompagnement dans votre environnement.
                </p>
                <p className="text-sage mt-2 text-sm">Zone d'intervention : centre Bretagne et alentours</p>
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

          {/* Premium Map of Brittany */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-background shadow-card relative min-h-[480px] overflow-hidden rounded-3xl"
          >
            {/* Decorative elements */}
            <div className="bg-sage/5 absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl" />
            <div className="bg-terracotta/5 absolute -bottom-20 -left-20 h-40 w-40 rounded-full blur-3xl" />

            <div className="relative flex h-full min-h-[480px] w-full flex-col items-center justify-center p-6 md:p-10">
              {/* Title */}
              <div className="mb-6 text-center">
                <h3 className="text-foreground font-serif text-xl">Zone d'intervention</h3>
                <p className="text-muted-foreground mt-1 text-sm">Centre Bretagne & environs</p>
              </div>

              {/* Stylized map of Brittany */}
              <svg
                viewBox="0 0 500 380"
                className="h-auto w-full max-w-sm"
                aria-label="Carte de la zone d'intervention en Bretagne"
              >
                <defs>
                  {/* Sea gradient */}
                  <linearGradient id="seaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e8f4f8" />
                    <stop offset="50%" stopColor="#dceef5" />
                    <stop offset="100%" stopColor="#d0e8f0" />
                  </linearGradient>

                  {/* Land gradient */}
                  <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#faf8f5" />
                    <stop offset="100%" stopColor="#f0ece5" />
                  </linearGradient>

                  {/* Zone gradient */}
                  <radialGradient id="zoneGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#8fa87a" stopOpacity="0.35" />
                    <stop offset="70%" stopColor="#8fa87a" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#8fa87a" stopOpacity="0.05" />
                  </radialGradient>

                  {/* Shadow filter */}
                  <filter id="landShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#8fa87a" floodOpacity="0.15" />
                  </filter>

                  {/* Glow filter for zone */}
                  <filter id="zoneGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Sea background */}
                <rect width="500" height="380" fill="url(#seaGradient)" rx="16" />

                {/* Subtle wave pattern */}
                <g opacity="0.3">
                  <path d="M 0 320 Q 125 310 250 320 T 500 320" fill="none" stroke="#b8d4e3" strokeWidth="1" />
                  <path d="M 0 340 Q 125 330 250 340 T 500 340" fill="none" stroke="#b8d4e3" strokeWidth="1" />
                  <path d="M 0 360 Q 125 350 250 360 T 500 360" fill="none" stroke="#b8d4e3" strokeWidth="1" />
                </g>

                {/* Brittany shape - more detailed */}
                <path
                  d="M 60 150
                     Q 75 130, 100 120
                     Q 130 105, 160 95
                     L 180 85
                     Q 200 75, 220 70
                     Q 245 60, 270 55
                     L 290 50
                     Q 320 48, 350 55
                     Q 380 65, 410 85
                     Q 435 105, 445 130
                     Q 450 155, 445 180
                     Q 438 210, 420 235
                     Q 395 265, 360 285
                     Q 320 305, 275 310
                     Q 230 315, 190 305
                     Q 150 295, 120 275
                     Q 90 255, 70 225
                     Q 50 195, 45 165
                     Q 42 145, 60 150 Z"
                  fill="url(#landGradient)"
                  stroke="#d5cfc5"
                  strokeWidth="2.5"
                  filter="url(#landShadow)"
                />

                {/* Coastline detail */}
                <path
                  d="M 60 150 Q 75 130, 100 120"
                  fill="none"
                  stroke="#c5bfb5"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  opacity="0.5"
                />

                {/* Zone d'intervention */}
                <ellipse
                  cx="280"
                  cy="185"
                  rx="70"
                  ry="65"
                  fill="url(#zoneGradient)"
                  stroke="#8fa87a"
                  strokeWidth="2.5"
                  strokeDasharray="8,4"
                  filter="url(#zoneGlow)"
                />

                {/* Center marker with pulse effect */}
                <circle cx="280" cy="185" r="20" fill="#8fa87a" opacity="0.1">
                  <animate attributeName="r" values="15;25;15" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="280" cy="185" r="10" fill="#8fa87a" />
                <circle cx="280" cy="185" r="4" fill="#ffffff" />

                {/* Major cities */}
                <g>
                  {/* Brest */}
                  <circle cx="110" cy="155" r="5" fill="#8a9680" />
                  <text x="110" y="145" textAnchor="middle" fontSize="11" fill="#5a6a4e" fontWeight="500">
                    Brest
                  </text>

                  {/* St-Malo */}
                  <circle cx="380" cy="85" r="5" fill="#8a9680" />
                  <text x="380" y="75" textAnchor="middle" fontSize="11" fill="#5a6a4e" fontWeight="500">
                    St-Malo
                  </text>

                  {/* Rennes */}
                  <circle cx="390" cy="190" r="6" fill="#6b7a5e" />
                  <text x="390" y="210" textAnchor="middle" fontSize="12" fill="#4a5a3e" fontWeight="600">
                    Rennes
                  </text>

                  {/* Quimper */}
                  <circle cx="130" cy="240" r="5" fill="#8a9680" />
                  <text x="130" y="258" textAnchor="middle" fontSize="11" fill="#5a6a4e" fontWeight="500">
                    Quimper
                  </text>

                  {/* Vannes */}
                  <circle cx="240" cy="275" r="5" fill="#8a9680" />
                  <text x="240" y="293" textAnchor="middle" fontSize="11" fill="#5a6a4e" fontWeight="500">
                    Vannes
                  </text>

                  {/* Lorient */}
                  <circle cx="170" cy="260" r="4" fill="#9aa690" />
                  <text x="170" y="278" textAnchor="middle" fontSize="10" fill="#6b7a5e" fontWeight="400">
                    Lorient
                  </text>
                </g>

                {/* Towns in intervention zone */}
                <g>
                  <circle cx="255" cy="175" r="3" fill="#8fa87a" />
                  <text x="255" y="165" textAnchor="middle" fontSize="9" fill="#6b8a5e" fontWeight="500">
                    Loudéac
                  </text>

                  <circle cx="260" cy="210" r="3" fill="#8fa87a" />
                  <text x="260" y="225" textAnchor="middle" fontSize="9" fill="#6b8a5e" fontWeight="500">
                    Pontivy
                  </text>

                  <circle cx="295" cy="230" r="3" fill="#8fa87a" />
                  <text x="295" y="245" textAnchor="middle" fontSize="9" fill="#6b8a5e" fontWeight="500">
                    Locminé
                  </text>

                  <circle cx="310" cy="200" r="3" fill="#8fa87a" />
                  <text x="325" y="200" textAnchor="start" fontSize="9" fill="#6b8a5e" fontWeight="500">
                    Josselin
                  </text>
                </g>

                {/* Centre Bretagne label */}
                <text x="280" y="185" textAnchor="middle" fontSize="10" fill="#3d5a32" fontWeight="600" opacity="0">
                  Centre Bretagne
                </text>
              </svg>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="border-sage bg-sage/20 h-3 w-3 rounded-full border-2 border-dashed" />
                  <span className="text-muted-foreground text-xs">Zone d'intervention</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-sage h-2.5 w-2.5 rounded-full" />
                  <span className="text-muted-foreground text-xs">Villes desservies</span>
                </div>
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
