import { defineField, defineType } from "sanity"

export const siteConfig = defineType({
  name: "siteConfig",
  title: "Configuration du site",
  type: "document",
  groups: [
    { name: "dieteticien", title: "Diététicien", default: true },
    { name: "tarifs", title: "Tarifs" },
    { name: "faq", title: "FAQ" },
    { name: "temoignages", title: "Témoignages" },
    { name: "horaires", title: "Horaires" },
  ],
  fields: [
    // ==========================================
    // GROUPE: Diététicien
    // ==========================================
    defineField({
      name: "name",
      title: "Prénom",
      type: "string",
      group: "dieteticien",
    }),
    defineField({
      name: "jobTitle",
      title: "Métier",
      type: "string",
      group: "dieteticien",
    }),
    defineField({
      name: "phone",
      title: "Téléphone (affiché)",
      type: "string",
      description: "Ex: 06 12 34 56 78",
      group: "dieteticien",
    }),
    defineField({
      name: "phoneLink",
      title: "Téléphone (lien)",
      type: "string",
      description: "Ex: +33612345678",
      group: "dieteticien",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "dieteticien",
    }),
    defineField({
      name: "location",
      title: "Localisation",
      type: "object",
      group: "dieteticien",
      fields: [
        { name: "city", title: "Ville", type: "string" },
        { name: "postalCode", title: "Code postal", type: "string" },
        { name: "region", title: "Région", type: "string", initialValue: "Bretagne" },
        { name: "country", title: "Pays", type: "string", initialValue: "FR" },
        {
          name: "coordinates",
          title: "Coordonnées GPS",
          type: "object",
          fields: [
            { name: "latitude", title: "Latitude", type: "number" },
            { name: "longitude", title: "Longitude", type: "number" },
          ],
        },
        { name: "interventionRadius", title: "Rayon d'intervention (km)", type: "string", initialValue: "30" },
      ],
    }),

    // ==========================================
    // GROUPE: Tarifs
    // ==========================================
    defineField({
      name: "pricingCards",
      title: "Cartes de tarifs",
      type: "array",
      group: "tarifs",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "ID (unique)", type: "string" },
            { name: "title", title: "Titre", type: "string" },
            { name: "subtitle", title: "Sous-titre", type: "string" },
            { name: "price", title: "Prix", type: "number" },
            { name: "currency", title: "Devise", type: "string", initialValue: "€" },
            { name: "priceLabel", title: "Label prix", type: "string", initialValue: "/ séance" },
            { name: "featured", title: "Mise en avant", type: "boolean", initialValue: true },
            { name: "badge", title: "Badge", type: "string" },
            {
              name: "features",
              title: "Caractéristiques",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "icon",
                      title: "Icône",
                      type: "string",
                      options: {
                        list: [
                          { title: "Horloge", value: "clock" },
                          { title: "Message", value: "message" },
                          { title: "Utilisateurs", value: "users" },
                          { title: "Coeur", value: "heart" },
                        ],
                      },
                    },
                    { name: "text", title: "Texte", type: "string" },
                  ],
                  preview: {
                    select: { title: "text", icon: "icon" },
                    prepare({ title }) {
                      return { title }
                    },
                  },
                },
              ],
            },
            {
              name: "cta",
              title: "Bouton d'action",
              type: "object",
              fields: [
                { name: "text", title: "Texte", type: "string" },
                { name: "href", title: "Lien", type: "string", initialValue: "#contact" },
              ],
            },
          ],
          preview: {
            select: { title: "title", subtitle: "subtitle", price: "price" },
            prepare({ title, subtitle, price }) {
              return {
                title: title || "Carte sans titre",
                subtitle: `${price ? `${price}€` : ""} ${subtitle ? `- ${subtitle}` : ""}`.trim(),
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: "pricingNote",
      title: "Note sur les tarifs",
      type: "object",
      group: "tarifs",
      fields: [
        { name: "title", title: "Titre", type: "string" },
        { name: "text", title: "Texte", type: "string" },
        { name: "linkText", title: "Texte du lien", type: "string" },
        { name: "linkHref", title: "URL du lien", type: "string" },
      ],
    }),

    // ==========================================
    // GROUPE: FAQ
    // ==========================================
    defineField({
      name: "faq",
      title: "Questions fréquentes",
      type: "array",
      group: "faq",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icône",
              type: "string",
              options: {
                list: [
                  { title: "Coeur", value: "heart" },
                  { title: "Diplôme", value: "graduation" },
                  { title: "Bouclier", value: "shield" },
                  { title: "Question", value: "question" },
                ],
              },
            },
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Réponse", type: "text" },
            { name: "highlight", title: "Texte à mettre en évidence", type: "string" },
          ],
          preview: {
            select: { title: "question" },
            prepare({ title }) {
              return { title: title || "Question sans titre" }
            },
          },
        },
      ],
    }),

    // ==========================================
    // GROUPE: Témoignages
    // ==========================================
    defineField({
      name: "testimonials",
      title: "Témoignages clients",
      type: "array",
      group: "temoignages",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Prénom", type: "string" },
            { name: "location", title: "Ville", type: "string" },
            {
              name: "rating",
              title: "Note (1-5)",
              type: "number",
              validation: (Rule) => Rule.min(1).max(5),
            },
            { name: "text", title: "Témoignage", type: "text" },
          ],
          preview: {
            select: { title: "name", subtitle: "location", rating: "rating" },
            prepare({ title, subtitle, rating }) {
              const stars = rating ? "⭐".repeat(rating) : ""
              return {
                title: title || "Témoignage anonyme",
                subtitle: `${subtitle || ""} ${stars}`.trim(),
              }
            },
          },
        },
      ],
    }),

    // ==========================================
    // GROUPE: Horaires
    // ==========================================
    defineField({
      name: "horairesSemaine",
      title: "Lundi - Vendredi",
      type: "object",
      group: "horaires",
      fields: [
        { name: "days", title: "Jours", type: "string", initialValue: "Lundi - Vendredi" },
        { name: "hours", title: "Horaires", type: "string", description: "Ex: 17:00 - 20:00 ou Fermé" },
      ],
    }),
    defineField({
      name: "horairesSamedi",
      title: "Samedi",
      type: "object",
      group: "horaires",
      fields: [
        { name: "days", title: "Jour", type: "string", initialValue: "Samedi" },
        { name: "hours", title: "Horaires", type: "string" },
      ],
    }),
    defineField({
      name: "horairesDimanche",
      title: "Dimanche",
      type: "object",
      group: "horaires",
      fields: [
        { name: "days", title: "Jour", type: "string", initialValue: "Dimanche" },
        { name: "hours", title: "Horaires", type: "string" },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Configuration du site" }
    },
  },
})
