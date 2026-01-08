"use client"

import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { motion } from "motion/react"

const BookingSection = () => {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: "15min" })
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#8fa87a",
            "cal-brand-emphasis": "#6b8a5e",
            "cal-brand-text": "#ffffff",
            "cal-bg": "#fcfbf9",
            "cal-bg-emphasis": "#f5f2ed",
            "cal-bg-subtle": "#f9f7f4",
            "cal-bg-muted": "#f5f2ed",
            "cal-text": "#3d4a32",
            "cal-text-emphasis": "#2d3825",
            "cal-text-subtle": "#6b7a5e",
            "cal-text-muted": "#8a9680",
            "cal-border": "#e5e0d8",
            "cal-border-emphasis": "#d5cfc5",
            "cal-border-subtle": "#ebe8e2",
            "cal-border-booker": "#e5e0d8",
          },
          dark: {
            "cal-brand": "#8fa87a",
            "cal-brand-emphasis": "#a3bb8f",
            "cal-brand-text": "#ffffff",
            "cal-bg": "#1a2014",
            "cal-bg-emphasis": "#252d1e",
            "cal-bg-subtle": "#1f2718",
            "cal-bg-muted": "#252d1e",
            "cal-text": "#e8ebe4",
            "cal-text-emphasis": "#f5f7f3",
            "cal-text-subtle": "#b8c4ab",
            "cal-text-muted": "#8a9680",
            "cal-border": "#3d4a32",
            "cal-border-emphasis": "#4d5a42",
            "cal-border-subtle": "#2d3825",
            "cal-border-booker": "#3d4a32",
          },
        },
        hideEventTypeDetails: true,
        layout: "column_view",
      })
    })()
  }, [])

  return (
    <section id="rdv" className="section-padding bg-sage/5">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sage mb-4 block text-sm font-medium tracking-widest uppercase">Rendez-vous</span>
          <h2 className="text-foreground mb-4 font-serif text-3xl md:text-4xl lg:text-5xl">
            Réservez votre premier rendez-vous
            <br />
            <span className="text-sage">— c'est simple et sans engagement</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-lg">
            15 min gratuites par téléphone pour faire connaissance et voir si on peut travailler ensemble.
          </p>
        </motion.div>

        {/* Cal.com Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-background shadow-card mx-auto max-w-4xl overflow-hidden rounded-3xl"
        >
          <Cal
            namespace="15min"
            calOrigin="https://app.cal.com"
            calLink="julien-g/15min"
            style={{ width: "100%", height: "100%", overflow: "hidden", minHeight: "500px" }}
            config={{
              layout: "column_view",
              theme: "light",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default BookingSection
