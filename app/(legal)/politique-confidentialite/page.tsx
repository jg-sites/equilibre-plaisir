import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles du cabinet de diététique.",
  alternates: {
    canonical: "/politique-confidentialite",
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <article>
      <h1 className="text-foreground mb-8 font-serif text-3xl md:text-4xl">Politique de confidentialité</h1>

      <div className="space-y-8">
        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">1. Introduction</h2>
          <p className="text-muted-foreground">
            La présente politique de confidentialité a pour but d'informer les utilisateurs du site des modalités de
            collecte, de traitement et d'utilisation de leurs données personnelles, conformément au Règlement Général
            sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
          </p>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">2. Responsable du traitement</h2>
          <div className="text-muted-foreground space-y-2">
            <p>
              <strong className="text-foreground">Nom :</strong> Julien Geantot
            </p>
            <p>
              <strong className="text-foreground">Profession :</strong> Diététicien Nutritionniste diplômé d'État
            </p>
            <p>
              <strong className="text-foreground">Adresse :</strong> 56300 Pontivy, Bretagne
            </p>
            <p>
              <strong className="text-foreground">Téléphone :</strong>{" "}
              <a href="tel:+33625033955" className="text-sage hover:underline">
                06 25 03 39 55
              </a>
            </p>
            <p>
              <strong className="text-foreground">Email :</strong>{" "}
              <a href="mailto:julien.dieteticien@gmail.com" className="text-sage hover:underline">
                julien.dieteticien@gmail.com
              </a>
            </p>
          </div>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">3. Données collectées</h2>
          <p className="text-muted-foreground mb-4">Dans le cadre de notre activité, nous pouvons collecter :</p>
          <ul className="text-muted-foreground list-inside list-disc space-y-2">
            <li>
              <strong className="text-foreground">Données d'identification :</strong> nom, prénom, adresse email, numéro
              de téléphone
            </li>
            <li>
              <strong className="text-foreground">Données de santé :</strong> informations relatives à votre état de
              santé, antécédents médicaux, habitudes alimentaires (uniquement dans le cadre d'une consultation)
            </li>
            <li>
              <strong className="text-foreground">Données de navigation :</strong> adresse IP, type de navigateur, pages
              visitées (via des cookies techniques)
            </li>
          </ul>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">4. Finalités du traitement</h2>
          <p className="text-muted-foreground mb-4">Vos données sont collectées pour :</p>
          <ul className="text-muted-foreground list-inside list-disc space-y-2">
            <li>La prise de rendez-vous et la gestion des consultations</li>
            <li>Le suivi diététique personnalisé</li>
            <li>L'établissement de factures et la gestion administrative</li>
            <li>La réponse à vos demandes de contact</li>
            <li>L'amélioration de nos services et de notre site</li>
          </ul>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">5. Base légale du traitement</h2>
          <p className="text-muted-foreground mb-4">Le traitement de vos données repose sur :</p>
          <ul className="text-muted-foreground list-inside list-disc space-y-2">
            <li>
              <strong className="text-foreground">Votre consentement</strong> pour les données de santé
            </li>
            <li>
              <strong className="text-foreground">L'exécution du contrat</strong> pour la prestation de services
              diététiques
            </li>
            <li>
              <strong className="text-foreground">L'obligation légale</strong> pour la conservation des factures
            </li>
            <li>
              <strong className="text-foreground">L'intérêt légitime</strong> pour l'amélioration de nos services
            </li>
          </ul>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">6. Destinataires des données</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Vos données personnelles sont strictement confidentielles et ne sont accessibles qu'au praticien. Elles ne
              sont jamais vendues ni cédées à des tiers.
            </p>
            <p>
              Les données de santé sont soumises au secret professionnel conformément à l'article L.1110-4 du Code de la
              santé publique.
            </p>
            <p>Nos sous-traitants techniques peuvent avoir accès aux données :</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Cal.com (prise de rendez-vous en ligne)</li>
              <li>Vercel (hébergement du site)</li>
              <li>Sanity (gestion du contenu du site)</li>
            </ul>
          </div>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">7. Durée de conservation</h2>
          <p className="text-muted-foreground mb-4">Vos données sont conservées pendant :</p>
          <ul className="text-muted-foreground list-inside list-disc space-y-2">
            <li>
              <strong className="text-foreground">Dossiers patients :</strong> 20 ans à compter de la dernière
              consultation (obligation légale pour les professionnels de santé)
            </li>
            <li>
              <strong className="text-foreground">Données de facturation :</strong> 10 ans (obligation comptable)
            </li>
            <li>
              <strong className="text-foreground">Données de contact :</strong> 3 ans après le dernier contact
            </li>
            <li>
              <strong className="text-foreground">Cookies :</strong> 13 mois maximum
            </li>
          </ul>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">8. Vos droits</h2>
          <p className="text-muted-foreground mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="text-muted-foreground list-inside list-disc space-y-2">
            <li>
              <strong className="text-foreground">Droit d'accès :</strong> obtenir une copie de vos données
            </li>
            <li>
              <strong className="text-foreground">Droit de rectification :</strong> corriger vos données inexactes
            </li>
            <li>
              <strong className="text-foreground">Droit à l'effacement :</strong> demander la suppression de vos données
              (sauf obligation légale de conservation)
            </li>
            <li>
              <strong className="text-foreground">Droit à la limitation :</strong> restreindre le traitement
            </li>
            <li>
              <strong className="text-foreground">Droit à la portabilité :</strong> recevoir vos données dans un format
              structuré
            </li>
            <li>
              <strong className="text-foreground">Droit d'opposition :</strong> vous opposer au traitement
            </li>
          </ul>
          <div className="text-muted-foreground mt-4 space-y-2">
            <p>
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:julien.dieteticien@gmail.com" className="text-sage hover:underline">
                julien.dieteticien@gmail.com
              </a>
            </p>
            <p>
              Vous pouvez également introduire une réclamation auprès de la CNIL (
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage hover:underline"
              >
                www.cnil.fr
              </a>
              ).
            </p>
          </div>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">9. Cookies</h2>
          <p className="text-muted-foreground">
            Ce site utilise uniquement des cookies techniques essentiels au fonctionnement du site et à la prise de
            rendez-vous. Aucun cookie publicitaire ou de tracking n'est utilisé.
          </p>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">10. Sécurité</h2>
          <p className="text-muted-foreground">
            Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour assurer la
            sécurité et la confidentialité de vos données : connexion sécurisée (HTTPS), accès restreint aux données,
            hébergement sécurisé.
          </p>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">11. Modification de la politique</h2>
          <p className="text-muted-foreground">
            Cette politique de confidentialité peut être modifiée à tout moment. La date de dernière mise à jour est
            indiquée en bas de page.
          </p>
        </section>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground text-sm">Dernière mise à jour : Janvier 2025</p>
        <p className="text-muted-foreground mt-2 text-sm">
          Voir aussi :{" "}
          <Link href="/mentions-legales" className="text-sage hover:underline">
            Mentions légales
          </Link>{" "}
          ·{" "}
          <Link href="/cgv" className="text-sage hover:underline">
            CGV
          </Link>
        </p>
      </div>
    </article>
  )
}
