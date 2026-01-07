import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | Julien — Diététicien Nutritionniste",
  description: "Conditions générales de vente des prestations de diététique.",
}

export default function CGVPage() {
  return (
    <article>
      <h1 className="text-foreground mb-8 font-serif text-3xl md:text-4xl">Conditions Générales de Vente</h1>

      <div className="space-y-8">
        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">Article 1 - Objet</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre le
              prestataire et le client.
            </p>
            <div className="bg-beige/50 rounded-xl p-4">
              <p className="text-foreground mb-2 font-medium">Le prestataire :</p>
              <p>[NOM PRÉNOM À COMPLÉTER]</p>
              <p>Diététicien Nutritionniste diplômé d'État</p>
              <p>N° ADELI : [À COMPLÉTER]</p>
              <p>N° SIRET : [À COMPLÉTER]</p>
              <p>Email : julien.dieteticien@gmail.com</p>
            </div>
          </div>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">Article 2 - Prestations</h2>
          <p className="text-muted-foreground mb-4">Le prestataire propose les services suivants :</p>
          <ul className="text-muted-foreground list-inside list-disc space-y-2">
            <li>Consultation diététique initiale (bilan nutritionnel complet)</li>
            <li>Consultation de suivi</li>
            <li>Élaboration de plans alimentaires personnalisés</li>
            <li>Accompagnement en rééquilibrage alimentaire</li>
            <li>Prise en charge nutritionnelle de pathologies (diabète, maladies cardiovasculaires, etc.)</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            Les consultations se déroulent à domicile, dans la zone d'intervention du praticien (centre Bretagne,
            environ 30 km autour de Loudéac).
          </p>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">Article 3 - Tarifs</h2>
          <div className="bg-sage/10 mb-4 rounded-xl p-4">
            <p className="text-foreground font-medium">Consultation diététique (1 heure) : 50 €</p>
          </div>
          <div className="text-muted-foreground space-y-2">
            <p>Les tarifs sont exprimés en euros TTC (TVA non applicable, article 293 B du CGI).</p>
            <p>
              Les déplacements à domicile sont inclus dans le tarif pour les communes situées dans la zone
              d'intervention.
            </p>
            <p>
              Le prestataire se réserve le droit de modifier ses tarifs à tout moment. Les prestations seront facturées
              sur la base des tarifs en vigueur au moment de la prise de rendez-vous.
            </p>
          </div>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">Article 4 - Prise de rendez-vous</h2>
          <p className="text-muted-foreground mb-4">Les rendez-vous peuvent être pris :</p>
          <ul className="text-muted-foreground list-inside list-disc space-y-2">
            <li>En ligne via le système de réservation du site</li>
            <li>Par téléphone</li>
            <li>Par email</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            La prise de rendez-vous vaut acceptation des présentes conditions générales de vente.
          </p>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">Article 5 - Règlement</h2>
          <p className="text-muted-foreground mb-4">Le règlement s'effectue à la fin de chaque consultation par :</p>
          <ul className="text-muted-foreground list-inside list-disc space-y-2">
            <li>Espèces</li>
            <li>Chèque à l'ordre de [NOM À COMPLÉTER]</li>
            <li>Virement bancaire</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            Une facture est remise au client après chaque consultation pour permettre une éventuelle prise en charge par
            sa mutuelle.
          </p>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">Article 6 - Prise en charge</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Les consultations diététiques ne sont pas remboursées par la Sécurité sociale, sauf cas particuliers
              (certains programmes de soins, ALD).
            </p>
            <p>
              De nombreuses mutuelles proposent un forfait de remboursement pour les consultations de diététique
              (généralement dans les rubriques "médecines douces" ou "prévention santé"). Le client est invité à se
              renseigner auprès de sa mutuelle.
            </p>
          </div>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">Article 7 - Annulation et report</h2>
          <div className="text-muted-foreground space-y-4">
            <div>
              <p className="text-foreground mb-2 font-medium">Par le client :</p>
              <ul className="list-inside list-disc space-y-2">
                <li>Toute annulation doit être effectuée au moins 24 heures avant le rendez-vous.</li>
                <li>
                  En cas d'annulation tardive (moins de 24h) ou d'absence non justifiée, le prestataire se réserve le
                  droit de facturer la consultation.
                </li>
                <li>Le report d'un rendez-vous est possible sous réserve de disponibilité.</li>
              </ul>
            </div>
            <div>
              <p className="text-foreground mb-2 font-medium">Par le prestataire :</p>
              <p>
                En cas d'empêchement, le prestataire s'engage à prévenir le client dans les meilleurs délais et à
                proposer un nouveau rendez-vous.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">Article 8 - Déroulement des consultations</h2>
          <div className="text-muted-foreground space-y-4">
            <div>
              <p className="text-foreground mb-2 font-medium">Première consultation (environ 1 heure) :</p>
              <ul className="list-inside list-disc space-y-1">
                <li>Bilan nutritionnel complet</li>
                <li>Analyse des habitudes alimentaires</li>
                <li>Définition des objectifs</li>
                <li>Remise d'un plan alimentaire personnalisé</li>
              </ul>
            </div>
            <div>
              <p className="text-foreground mb-2 font-medium">Consultations de suivi (environ 1 heure) :</p>
              <ul className="list-inside list-disc space-y-1">
                <li>Évaluation des progrès</li>
                <li>Ajustement du plan alimentaire</li>
                <li>Accompagnement personnalisé</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">Article 9 - Obligations du client</h2>
          <p className="text-muted-foreground mb-4">Le client s'engage à :</p>
          <ul className="text-muted-foreground list-inside list-disc space-y-2">
            <li>Fournir des informations exactes sur son état de santé</li>
            <li>Signaler tout traitement médical en cours</li>
            <li>Suivre les recommandations médicales de son médecin traitant</li>
            <li>Informer le praticien de tout changement de son état de santé</li>
          </ul>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">Article 10 - Responsabilité</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Le praticien s'engage à mettre en œuvre tous les moyens nécessaires pour assurer un accompagnement de
              qualité. Il s'agit d'une obligation de moyens et non de résultat.
            </p>
            <p>
              Les conseils nutritionnels ne se substituent en aucun cas à un avis médical. Le client reste libre de
              suivre ou non les recommandations qui lui sont faites.
            </p>
          </div>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">Article 11 - Secret professionnel</h2>
          <p className="text-muted-foreground">
            Le praticien est soumis au secret professionnel conformément à l'article L.1110-4 du Code de la santé
            publique. Toutes les informations communiquées par le client sont strictement confidentielles.
          </p>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">Article 12 - Protection des données</h2>
          <p className="text-muted-foreground">
            Les données personnelles collectées sont traitées conformément à notre{" "}
            <Link href="/politique-confidentialite" className="text-sage hover:underline">
              politique de confidentialité
            </Link>
            .
          </p>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">Article 13 - Litiges</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut d'accord
              amiable, les tribunaux français seront seuls compétents.
            </p>
            <p>
              Conformément à l'article L.612-1 du Code de la consommation, le client peut recourir gratuitement à un
              médiateur de la consommation en vue de la résolution amiable du litige.
            </p>
          </div>
        </section>

        <section className="bg-background shadow-soft rounded-2xl p-6 md:p-8">
          <h2 className="text-foreground mb-4 font-serif text-xl">Article 14 - Modification des CGV</h2>
          <p className="text-muted-foreground">
            Le prestataire se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont
            celles en vigueur à la date de la prise de rendez-vous.
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
          <Link href="/politique-confidentialite" className="text-sage hover:underline">
            Politique de confidentialité
          </Link>
        </p>
      </div>
    </article>
  )
}
