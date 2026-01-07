"use client"

import { useState } from "react"
import { Quote, Star } from "lucide-react"
import { motion } from "motion/react"

import type { Testimonial } from "@/lib/config"

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section id="temoignages" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sage mb-4 block text-sm font-medium tracking-widest uppercase">Témoignages</span>
          <h2 className="text-foreground font-serif text-3xl md:text-4xl lg:text-5xl">
            Ils ont retrouvé
            <br />
            <span className="text-terracotta">le plaisir de manger</span>
          </h2>
        </motion.div>

        {/* Desktop: Grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-beige shadow-soft hover:shadow-card relative h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 md:p-8">
                {/* Quote icon */}
                <Quote className="text-sage/20 absolute top-6 right-6 h-8 w-8" />

                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="fill-terracotta text-terracotta h-4 w-4" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="bg-sage/20 flex h-10 w-10 items-center justify-center rounded-full">
                    <span className="text-sage-dark font-serif">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-beige shadow-soft relative rounded-3xl p-6"
          >
            <Quote className="text-sage/20 absolute top-6 right-6 h-8 w-8" />

            <div className="mb-4 flex gap-1">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="fill-terracotta text-terracotta h-4 w-4" />
              ))}
            </div>

            <p className="text-foreground mb-6 leading-relaxed">"{testimonials[activeIndex].text}"</p>

            <div className="flex items-center gap-3">
              <div className="bg-sage/20 flex h-10 w-10 items-center justify-center rounded-full">
                <span className="text-sage-dark font-serif">{testimonials[activeIndex].name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-foreground font-medium">{testimonials[activeIndex].name}</p>
                <p className="text-muted-foreground text-sm">{testimonials[activeIndex].location}</p>
              </div>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-sage w-6" : "bg-sage/30 hover:bg-sage/50"
                }`}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
