import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions légales | Julien — Diététicien Nutritionniste",
  description: "Mentions légales du site de Julien, diététicien nutritionniste en centre Bretagne.",
}

export default function MentionsLegalesPage() {
  return (
    <article>
      <h1 className="text-foreground mb-8 font-serif text-3xl md:text-4xl">Mentions légales</h1>

      <div className="space-y-8">
        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">1. Éditeur du site</h2>
          <div className="text-muted-foreground space-y-2">
            <p>
              <strong className="text-foreground">Nom :</strong> [NOM PRÉNOM À COMPLÉTER]
            </p>
            <p>
              <strong className="text-foreground">Profession :</strong> Diététicien Nutritionniste diplômé d'État
            </p>
            <p>
              <strong className="text-foreground">N° ADELI :</strong> [NUMÉRO ADELI À COMPLÉTER]
            </p>
            <p>
              <strong className="text-foreground">N° SIRET :</strong> [NUMÉRO SIRET À COMPLÉTER]
            </p>
            <p>
              <strong className="text-foreground">Adresse :</strong> [ADRESSE À COMPLÉTER]
            </p>
            <p>
              <strong className="text-foreground">Téléphone :</strong> [TÉLÉPHONE À COMPLÉTER]
            </p>
            <p>
              <strong className="text-foreground">Email :</strong> julien.dieteticien@gmail.com
            </p>
          </div>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">2. Hébergeur</h2>
          <div className="text-muted-foreground space-y-2">
            <p>
              <strong className="text-foreground">Nom :</strong> Vercel Inc.
            </p>
            <p>
              <strong className="text-foreground">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA
            </p>
            <p>
              <strong className="text-foreground">Site web :</strong>{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage hover:underline"
              >
                https://vercel.com
              </a>
            </p>
          </div>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">3. Propriété intellectuelle</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la
              propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents
              téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement
              interdite sauf autorisation expresse de l'éditeur.
            </p>
          </div>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">4. Responsabilité</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement mis
              à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
            </p>
            <p>
              Les informations et conseils diffusés sur ce site ne se substituent en aucun cas à une consultation
              médicale. Elles ne peuvent en aucun cas se substituer aux conseils et au suivi d'un professionnel de
              santé.
            </p>
          </div>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">5. Liens hypertextes</h2>
          <p className="text-muted-foreground">
            Le site peut contenir des liens hypertextes vers d'autres sites. L'éditeur n'exerce aucun contrôle sur ces
            sites et décline toute responsabilité quant à leur contenu.
          </p>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">6. Droit applicable</h2>
          <p className="text-muted-foreground">
            Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls
            compétents.
          </p>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">7. Contact</h2>
          <p className="text-muted-foreground">
            Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse email :{" "}
            <a href="mailto:julien.dieteticien@gmail.com" className="text-sage hover:underline">
              julien.dieteticien@gmail.com
            </a>
          </p>
        </section>
      </div>

      <p className="text-muted-foreground mt-12 text-center text-sm">Dernière mise à jour : Janvier 2025</p>
    </article>
  )
}
