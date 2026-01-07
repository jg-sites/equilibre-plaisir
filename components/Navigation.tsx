"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Calendar, Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import Logo from "@/components/assets/logo.svg"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#approche", label: "Approche" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "À propos" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#contact", label: "Contact" },
]

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop & Mobile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 shadow-soft py-3 backdrop-blur-md" : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="container-narrow flex items-center justify-between px-5 md:px-8">
          {/* Logo */}
          <a href="#hero" className="transition-opacity hover:opacity-80">
            <Image src={Logo} alt="Équilibre & Plaisir" height={56} className="md:h-[56px]" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground group relative text-sm transition-colors"
              >
                {link.label}
                <span className="bg-sage absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="default" size="sm" asChild>
              <a href="#rdv">
                <Calendar className="mr-2 h-4 w-4" />
                Prendre RDV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-foreground flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="bg-foreground/20 absolute inset-0 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-background shadow-elevated absolute top-16 right-4 left-4 rounded-2xl p-6"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="text-foreground hover:text-sage border-border border-b py-2 transition-colors last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <Button variant="hero" className="mt-2" asChild>
                  <a href="#rdv" onClick={() => setIsMobileMenuOpen(false)}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Prendre RDV
                  </a>
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="bg-background/95 border-border shadow-elevated fixed right-0 bottom-0 left-0 z-40 border-t p-4 backdrop-blur-md md:hidden"
      >
        <Button variant="cta" className="w-full" asChild>
          <a href="#rdv">
            <Calendar className="mr-2 h-5 w-5" />
            Prendre RDV gratuitement
          </a>
        </Button>
      </motion.div>
    </>
  )
}

export default Navigation
