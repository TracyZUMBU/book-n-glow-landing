import Footer from "@/components/landing/Footer";
import Navigation from "@/components/landing/Navigation";

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navigation />
      {/* Hero Section */}
      <section className="pt-10 pb-8 md:pt-20 md:pb-16 px-4 text-center">
        <div className="container-mobile max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Politique de <span className="text-gradient">Confidentialité</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pt-10 pb-20 md:pt-20 md:pb-32 px-4 bg-background-light">
        <div className="container-mobile max-w-4xl">
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                1. Introduction
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Book n Glow, auto-entrepreneur ("nous", "notre", "nos"), s'engage
                  à protéger et respecter votre vie privée. Cette politique de
                  confidentialité explique comment nous collectons, utilisons et
                  protégeons vos données personnelles lorsque vous utilisez notre
                  site web.
                </p>
                <p>
                  En utilisant notre site, vous acceptez les pratiques décrites dans
                  cette politique de confidentialité. Si vous n'acceptez pas cette
                  politique, veuillez ne pas utiliser notre site.
                </p>
              </div>
            </div>

            {/* Collecte des données */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                2. Données collectées
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nous collectons uniquement les données personnelles suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Nom :</strong> collecté via
                    les formulaires de contact ou d'inscription à la liste
                    d'attente
                  </li>
                  <li>
                    <strong className="text-foreground">Adresse email :</strong>{" "}
                    collectée via les formulaires de contact ou d'inscription à la
                    liste d'attente
                  </li>
                </ul>
                <p>
                  Ces données sont collectées directement auprès de vous lorsque vous
                  choisissez de nous les fournir volontairement.
                </p>
              </div>
            </div>

            {/* Finalité de la collecte */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                3. Finalité de la collecte
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Les données personnelles collectées sont utilisées aux fins
                  suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Répondre à vos demandes de contact et d'information</li>
                  <li>
                    Vous informer de l'ouverture du service Book n Glow (pour les
                    inscrits à la liste d'attente)
                  </li>
                  <li>Améliorer nos services et notre site web</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                </ul>
              </div>
            </div>

            {/* Base légale */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                4. Base légale du traitement
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le traitement de vos données personnelles est basé sur :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Votre consentement :</strong>{" "}
                    lorsque vous nous fournissez volontairement vos données via nos
                    formulaires
                  </li>
                  <li>
                    <strong className="text-foreground">
                      L'exécution de mesures précontractuelles :
                    </strong>{" "}
                    pour répondre à vos demandes d'information
                  </li>
                </ul>
              </div>
            </div>

            {/* Conservation des données */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                5. Durée de conservation
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Vos données personnelles sont conservées pendant les durées
                  suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">
                      Données de contact :
                    </strong>{" "}
                    3 ans à compter du dernier contact
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Liste d'attente :
                    </strong>{" "}
                    jusqu'à votre désinscription ou 2 ans après l'ouverture du
                    service
                  </li>
                </ul>
                <p>
                  Au-delà de ces durées, vos données seront supprimées ou
                  anonymisées, sauf obligation légale de conservation.
                </p>
              </div>
            </div>

            {/* Partage des données */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                6. Partage et transfert des données
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nous ne vendons, ne louons ni ne partageons vos données
                  personnelles avec des tiers, sauf dans les cas suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Avec votre consentement explicite
                  </li>
                  <li>
                    Si la loi nous y oblige ou pour protéger nos droits légitimes
                  </li>
                  <li>
                    Avec nos prestataires techniques (hébergeur, service d'email)
                    qui agissent en notre nom et selon nos instructions
                  </li>
                </ul>
                <p>
                  Nos données sont hébergées dans l'Union Européenne ou dans des
                  pays offrant un niveau de protection adéquat selon la Commission
                  Européenne.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                7. Cookies
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">
                    Actuellement, nous n'utilisons aucun cookie sur notre site web.
                  </strong>
                </p>
                <p>
                  Si nous devions utiliser des cookies à l'avenir, cette politique
                  sera mise à jour et vous en serez informé. Vous pourrez alors
                  gérer vos préférences concernant les cookies via les paramètres de
                  votre navigateur.
                </p>
              </div>
            </div>

            {/* Droits des utilisateurs */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                8. Vos droits
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Conformément au Règlement Général sur la Protection des Données
                  (RGPD) et à la loi Informatique et Libertés, vous disposez des
                  droits suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Droit d'accès :</strong>{" "}
                    vous pouvez obtenir une copie de vos données personnelles
                  </li>
                  <li>
                    <strong className="text-foreground">Droit de rectification :</strong>{" "}
                    vous pouvez corriger vos données inexactes ou incomplètes
                  </li>
                  <li>
                    <strong className="text-foreground">Droit à l'effacement :</strong>{" "}
                    vous pouvez demander la suppression de vos données
                  </li>
                  <li>
                    <strong className="text-foreground">Droit d'opposition :</strong>{" "}
                    vous pouvez vous opposer au traitement de vos données
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Droit à la limitation :
                    </strong>{" "}
                    vous pouvez demander la limitation du traitement
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Droit à la portabilité :
                    </strong>{" "}
                    vous pouvez récupérer vos données dans un format structuré
                  </li>
                  <li>
                    <strong className="text-foreground">Droit de retirer votre consentement :</strong>{" "}
                    à tout moment, si le traitement est basé sur le consentement
                  </li>
                </ul>
                <p className="pt-4">
                  Pour exercer ces droits, contactez-nous à l'adresse suivante :{" "}
                  <a
                    href="mailto:contact@book-n-glow"
                    className="text-primary hover:underline"
                  >
                    contact@book-n-glow
                  </a>
                </p>
                <p>
                  Vous avez également le droit d'introduire une réclamation auprès de
                  la Commission Nationale de l'Informatique et des Libertés (CNIL)
                  si vous estimez que vos droits ne sont pas respectés :{" "}
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.cnil.fr
                  </a>
                </p>
              </div>
            </div>

            {/* Sécurité */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                9. Sécurité des données
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles
                  appropriées pour protéger vos données personnelles contre tout
                  accès non autorisé, perte, destruction ou altération. Cependant,
                  aucune méthode de transmission sur Internet ou de stockage
                  électronique n'est totalement sécurisée.
                </p>
              </div>
            </div>

            {/* Modifications */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                10. Modifications de cette politique
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nous nous réservons le droit de modifier cette politique de
                  confidentialité à tout moment. Les modifications prendront effet dès
                  leur publication sur cette page. Nous vous encourageons à consulter
                  régulièrement cette page pour prendre connaissance de la version la
                  plus récente.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                11. Contact
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Pour toute question concernant cette politique de confidentialité ou
                  pour exercer vos droits, vous pouvez nous contacter :
                </p>
                <p>
                  <strong className="text-foreground">Email :</strong>{" "}
                  <a
                    href="mailto:contact@book-n-glow"
                    className="text-primary hover:underline"
                  >
                    contact@book-n-glow
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
