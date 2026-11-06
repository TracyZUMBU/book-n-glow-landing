import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import SiteFooter from "@/components/home/SiteFooter";
import SiteHeader from "@/components/home/SiteHeader";

// Date de la version en vigueur. À changer à chaque modification du texte
// (et prévenir les Prestataires 15 jours avant, cf. section 22).
const LAST_UPDATED = "4 novembre 2026";

const CONTACT_EMAIL = "contact@book-n-glow.fr";

// Médiateur de la consommation (art. L612-1 et L616-1 du Code de la
// consommation). À renseigner dès l'adhésion à un médiateur.
const CONSUMER_MEDIATOR: { name: string; url: string; address: string } | null =
  null;

// Table des matières
const tableOfContents = [
  { id: "objet", title: "1. Objet et champ d'application" },
  { id: "definitions", title: "2. Définitions" },
  { id: "acceptation", title: "3. Acceptation et documents applicables" },
  { id: "services", title: "4. Description des Services" },
  { id: "role", title: "5. Rôle de Book N' Glow" },
  { id: "comptes", title: "6. Création et sécurité des comptes" },
  { id: "reservation", title: "7. Réservation" },
  { id: "paiement", title: "8. Paiement des prestations" },
  { id: "annulation", title: "9. Annulation, absence et remboursement" },
  { id: "retractation", title: "10. Droit de rétractation" },
  { id: "messagerie", title: "11. Messagerie" },
  { id: "avis", title: "12. Avis clients" },
  { id: "prestataires", title: "13. Engagements des Prestataires" },
  { id: "clients", title: "14. Engagements des Clients" },
  { id: "interdits", title: "15. Comportements interdits" },
  { id: "signalement", title: "16. Signalement de contenus illicites" },
  { id: "suspension", title: "17. Suspension et suppression de compte" },
  { id: "propriete", title: "18. Propriété intellectuelle" },
  { id: "donnees", title: "19. Données personnelles" },
  { id: "disponibilite", title: "20. Disponibilité et évolution" },
  { id: "responsabilite", title: "21. Responsabilité" },
  { id: "modification", title: "22. Modification des CGU" },
  { id: "litiges", title: "23. Réclamations, médiation et droit applicable" },
  { id: "contact", title: "24. Contact" },
];

function TableOfContents() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map((item) => {
        const element = document.getElementById(item.id);
        return { id: item.id, element, top: element?.getBoundingClientRect().top ?? 0 };
      });

      // Trouver la section active
      const currentSection = sections.find((section, index) => {
        const nextSection = sections[index + 1];
        const isInView = section.top <= 150;
        const isBeforeNext = !nextSection || (nextSection.top > 150);
        return isInView && isBeforeNext;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }

      // Afficher la table des matières après le scroll du hero
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Appel initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset pour la navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileOpen(false); // Fermer sur mobile après clic
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop - Table des matières fixe */}
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <div className="bg-card border border-border rounded-xl p-4 shadow-lg max-h-[80vh] overflow-y-auto w-[240px]">
          <h3 className="text-sm font-semibold text-foreground mb-3 sticky top-0 bg-card pb-2 border-b border-border">
            Table des matières
          </h3>
          <ul className="space-y-1 text-sm mt-3">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left w-full px-3 py-2 rounded-md transition-all text-xs ${
                    activeSection === item.id
                      ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile - Bouton flottant */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Ouvrir la table des matières"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menu mobile */}
        {isMobileOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileOpen(false)}
            />
            <nav className="fixed right-0 top-0 h-full w-[280px] bg-card border-l border-border shadow-xl z-50 overflow-y-auto">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h3 className="text-base font-semibold text-foreground">Table des matières</h3>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label="Fermer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="p-4 space-y-1">
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left w-full px-3 py-2.5 rounded-md transition-all text-sm ${
                        activeSection === item.id
                          ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>
    </>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      className="bg-card p-6 md:p-8 rounded-2xl border border-border scroll-mt-24"
    >
      <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
        {title}
      </h2>
      <div className="space-y-6 text-muted-foreground">{children}</div>
    </div>
  );
}

function Subsection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-serif font-semibold text-foreground">
        {title}
      </h3>
      {children}
    </div>
  );
}

function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6 space-y-2">{children}</ul>;
}

function Strong({ children }: { children: ReactNode }) {
  return <strong className="text-foreground">{children}</strong>;
}

function Mail() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
      {CONTACT_EMAIL}
    </a>
  );
}

export default function CGU() {
  return (
    <>
      <SiteHeader />
      <TableOfContents />
      {/* Hero Section */}
      <section className="pt-10 pb-8 md:pt-20 md:pb-16 px-4 text-center">
        <div className="container-mobile max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Conditions Générales d'
            <span className="text-gradient">Utilisation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Version en vigueur au {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pt-10 pb-20 md:pt-20 md:pb-32 px-4 bg-background-light">
        <div className="container-mobile max-w-4xl lg:max-w-[min(56rem,calc(100vw-300px))] lg:ml-[280px] lg:mr-4">
          <div className="space-y-8">
            <Section id="objet" title="1. Objet et champ d'application">
              <p>
                Les présentes Conditions Générales d'Utilisation (ci-après les
                « CGU ») définissent les conditions dans lesquelles toute
                personne utilise la plateforme <Strong>Book N' Glow</Strong>,
                composée :
              </p>
              <List>
                <li>du site vitrine accessible à l'adresse www.book-n-glow.fr ;</li>
                <li>
                  du site de réservation accessible à l'adresse
                  app.book-n-glow.fr, utilisé par les Clients ;
                </li>
                <li>
                  de l'application mobile « Book N' Glow Pro », disponible sur
                  l'App Store et le Google Play Store, utilisée par les
                  Prestataires ;
                </li>
              </List>
              <p>(ensemble, la « Plateforme »).</p>
              <p>
                La Plateforme est éditée par Tracy Z. Garcia, entrepreneure
                individuelle (EI) exerçant sous le nom commercial Book N' Glow,
                immatriculée sous le numéro SIRET 833 077 266 00025, dont le
                siège est situé 1 allée du Furet, 77186 Noisiel, France
                (ci-après « Book N' Glow »). Les autres informations légales
                figurent dans les{" "}
                <Link to="/mentions-legales" className="text-primary hover:underline">
                  mentions légales
                </Link>
                .
              </p>
            </Section>

            <Section id="definitions" title="2. Définitions">
              <List>
                <li>
                  <Strong>« Utilisateur »</Strong> : toute personne qui utilise
                  la Plateforme, qu'elle soit Client, Prestataire ou simple
                  visiteur.
                </li>
                <li>
                  <Strong>« Prestataire »</Strong> : professionnel de la beauté
                  et du bien-être (coiffure, esthétique, onglerie, maquillage,
                  etc.) qui utilise la Plateforme pour proposer ses prestations
                  et gérer ses rendez-vous.
                </li>
                <li>
                  <Strong>« Client »</Strong> : personne physique qui réserve
                  une Prestation auprès d'un Prestataire via la Plateforme, à
                  des fins personnelles.
                </li>
                <li>
                  <Strong>« Prestation »</Strong> : service proposé par un
                  Prestataire et réservable via la Plateforme.
                </li>
                <li>
                  <Strong>« Réservation »</Strong> ou{" "}
                  <Strong>« Rendez-vous »</Strong> : créneau réservé pour une
                  Prestation, par le Client ou par le Prestataire.
                </li>
                <li>
                  <Strong>« Compte »</Strong> : espace personnel créé par un
                  Utilisateur, accessible avec ses identifiants.
                </li>
                <li>
                  <Strong>« Page de réservation »</Strong> : page publique du
                  Prestataire présentant ses Prestations, ses tarifs et ses
                  disponibilités.
                </li>
                <li>
                  <Strong>« Conditions du Prestataire »</Strong> : conditions
                  propres à chaque Prestataire (délai d'annulation, acompte,
                  mode de paiement, informations pratiques), affichées avant la
                  validation de la Réservation.
                </li>
                <li>
                  <Strong>« Contenu »</Strong> : tout texte, photo, avis,
                  message ou autre élément publié ou transmis via la Plateforme.
                </li>
              </List>
            </Section>

            <Section id="acceptation" title="3. Acceptation et documents applicables">
              <p>
                L'utilisation de la Plateforme suppose l'acceptation des
                présentes CGU. Le Client les accepte en cochant la case prévue
                à cet effet avant de valider une Réservation ou lors de la
                création de son Compte. Le Prestataire les accepte lors de son
                inscription dans l'application. La simple consultation du site
                vitrine est soumise aux seules stipulations qui la concernent.
              </p>
              <p>Les documents suivants s'appliquent également :</p>
              <List>
                <li>
                  la{" "}
                  <Link
                    to="/politique-de-confidentialite"
                    className="text-primary hover:underline"
                  >
                    politique de confidentialité
                  </Link>
                  , qui décrit le traitement des données personnelles ;
                </li>
                <li>
                  les Conditions du Prestataire, qui régissent la relation entre
                  le Client et le Prestataire ;
                </li>
                <li>
                  pour les Prestataires qui activent le paiement par carte,
                  l'accord de compte connecté de Stripe (Stripe Connected
                  Account Agreement) et les conditions de Stripe.
                </li>
              </List>
              <p>
                En cas de contradiction, les présentes CGU prévalent sur les
                Conditions du Prestataire pour tout ce qui concerne
                l'utilisation de la Plateforme. La version des CGU applicable
                est celle en vigueur à la date de la Réservation ou de
                l'utilisation concernée. Les CGU sont accessibles à tout
                moment depuis le pied de page du site et peuvent être
                enregistrées ou imprimées.
              </p>
            </Section>

            <Section id="services" title="4. Description des Services">
              <Subsection title="4.1 Services proposés aux Prestataires">
                <p>Via l'application Book N' Glow Pro, le Prestataire peut notamment :</p>
                <List>
                  <li>
                    créer sa Page de réservation et un lien dédié (par exemple
                    pour sa bio Instagram) ;
                  </li>
                  <li>
                    présenter ses Prestations, options, photos, tarifs et
                    promotions ;
                  </li>
                  <li>définir ses disponibilités et gérer son agenda ;</li>
                  <li>
                    recevoir des Réservations en ligne et créer lui-même des
                    Rendez-vous pour ses clients ;
                  </li>
                  <li>
                    choisir le mode de paiement proposé à ses Clients (sur
                    place, PayPal.me ou carte bancaire en ligne) et, le cas
                    échéant, exiger un acompte ;
                  </li>
                  <li>
                    suivre ses clients, ses Rendez-vous, ses absences et son
                    chiffre d'affaires ;
                  </li>
                  <li>
                    échanger avec ses Clients via la messagerie et consulter
                    les avis laissés par ses Clients ;
                  </li>
                  <li>recevoir des notifications.</li>
                </List>
              </Subsection>
              <Subsection title="4.2 Services proposés aux Clients">
                <p>Via le site de réservation, le Client peut notamment :</p>
                <List>
                  <li>
                    consulter la Page de réservation d'un Prestataire et ses
                    disponibilités ;
                  </li>
                  <li>
                    réserver une Prestation et, si le Prestataire le propose,
                    la payer en ligne ;
                  </li>
                  <li>
                    retrouver, confirmer ou annuler ses Rendez-vous depuis son
                    Compte ;
                  </li>
                  <li>
                    recevoir des confirmations et rappels par e-mail ou SMS ;
                  </li>
                  <li>contacter le Prestataire via la messagerie ;</li>
                  <li>laisser un avis après sa Prestation.</li>
                </List>
              </Subsection>
              <Subsection title="4.3 Gratuité">
                <p>
                  L'utilisation de la Plateforme est gratuite pour les Clients
                  et pour les Prestataires. Book N' Glow ne facture ni
                  abonnement ni commission sur les Prestations. Seuls les frais
                  de traitement du prestataire de paiement Stripe sont déduits
                  des sommes payées par carte et reversées au Prestataire (voir
                  section 8.4). Si Book N' Glow introduit à l'avenir des
                  services payants, ils feront l'objet de conditions
                  spécifiques acceptées au préalable, et les fonctionnalités
                  gratuites existantes ne deviendront pas payantes sans
                  information préalable.
                </p>
              </Subsection>
              <p>
                La Plateforme est ouverte aux Prestataires établis en France,
                en Belgique, en Suisse, au Luxembourg et à Monaco. Le paiement
                par carte en ligne n'est disponible, à ce jour, que pour les
                Prestataires établis en France.
              </p>
            </Section>

            <Section id="role" title="5. Rôle de Book N' Glow">
              <p>
                Book N' Glow est un opérateur de plateforme en ligne au sens de
                l'article L111-7 du Code de la consommation. Elle fournit aux
                Prestataires un outil de prise de rendez-vous et met les
                Clients en relation avec eux.
              </p>
              <p>
                <Strong>Book N' Glow n'est pas partie au contrat de
                Prestation.</Strong>{" "}
                Ce contrat est conclu directement entre le Client et le
                Prestataire, qui fixe librement ses Prestations, ses prix et
                ses Conditions. Le Prestataire est seul responsable de la
                réalisation de la Prestation, de sa qualité et de sa
                conformité à la réglementation.
              </p>
              <p>
                Les Prestataires utilisant la Plateforme agissent en qualité de
                professionnels. Le Client bénéficie donc, dans sa relation avec
                eux, des droits que le Code de la consommation reconnaît aux
                consommateurs.
              </p>
              <p>
                Chaque Page de réservation est accessible via le lien propre au
                Prestataire. À la date des présentes, la Plateforme ne propose
                ni annuaire, ni classement des Prestataires, ni référencement
                payant. Si un tel service était mis en place, ses critères de
                classement seraient décrits dans les CGU.
              </p>
              <p>
                Book N' Glow intervient dans l'encaissement des paiements par
                carte uniquement en qualité de mandataire du Prestataire, dans
                les conditions décrites à la section 8.4.
              </p>
            </Section>

            <Section id="comptes" title="6. Création et sécurité des comptes">
              <Subsection title="6.1 Compte Client">
                <p>
                  Le Client doit être âgé d'au moins 15 ans pour créer un
                  Compte. Un Client mineur ne peut réserver ou payer une
                  Prestation qu'avec l'accord de son représentant légal. Le
                  Client renseigne notamment ses nom, prénom, adresse e-mail et
                  numéro de téléphone, ce qui permet au Prestataire et à Book
                  N' Glow de le contacter au sujet de ses Rendez-vous.
                </p>
              </Subsection>
              <Subsection title="6.2 Compte Prestataire">
                <p>
                  Le Prestataire doit être majeur, juridiquement capable, et
                  exercer une activité professionnelle régulièrement déclarée
                  (numéro SIREN/SIRET ou équivalent dans son pays). Il crée son
                  Compte dans l'application après vérification de son numéro de
                  téléphone par un code envoyé par SMS. Il s'inscrit en son nom
                  et pour son activité professionnelle, et n'utilise pas son
                  Compte pour le compte d'un tiers.
                </p>
                <p>
                  Book N' Glow peut demander tout justificatif utile pour
                  vérifier l'identité ou l'activité du Prestataire, notamment
                  pour prévenir la fraude ou respecter ses obligations légales
                  (voir section 13.4).
                </p>
              </Subsection>
              <Subsection title="6.3 Sécurité">
                <p>
                  L'Utilisateur fournit des informations exactes et les tient à
                  jour. Ses identifiants sont personnels et confidentiels. Toute
                  action réalisée depuis son Compte est présumée faite par lui.
                  En cas de perte, de vol ou d'utilisation non autorisée de ses
                  identifiants, il prévient Book N' Glow sans délai à l'adresse{" "}
                  <Mail />.
                </p>
              </Subsection>
            </Section>

            <Section id="reservation" title="7. Réservation">
              <Subsection title="7.1 Informations affichées avant la Réservation">
                <p>
                  Avant de valider, le Client voit la Prestation choisie, ses
                  options, sa durée, son prix toutes taxes comprises fixé par le
                  Prestataire, la date et l'heure du créneau, le mode de
                  paiement, le montant éventuel de l'acompte et les Conditions
                  du Prestataire, notamment son délai d'annulation.
                </p>
              </Subsection>
              <Subsection title="7.2 Conclusion de la Réservation">
                <p>
                  La Réservation est conclue lorsque le Client la valide (et, en
                  cas de paiement par carte, lorsque le paiement est accepté).
                  Le Client reçoit alors une confirmation par e-mail
                  récapitulant le Rendez-vous. Le Prestataire est prévenu par
                  notification.
                </p>
                <p>
                  Lorsque le Prestataire l'exige pour les Réservations payées
                  sur place, le Client doit confirmer sa présence avant
                  l'échéance indiquée dans l'e-mail de confirmation. À défaut,
                  la Réservation est automatiquement annulée et le créneau est
                  libéré.
                </p>
                <p>
                  Lorsque l'adresse du Prestataire n'est pas publique, elle est
                  communiquée au Client par e-mail 24 heures avant le
                  Rendez-vous, ou dès la confirmation si le Rendez-vous a lieu
                  moins de 24 heures plus tard.
                </p>
              </Subsection>
              <Subsection title="7.3 Rendez-vous créés par le Prestataire">
                <p>
                  Le Prestataire peut créer un Rendez-vous pour un client,
                  notamment à la suite d'une prise de contact par téléphone ou
                  sur les réseaux sociaux. Il s'engage à n'enregistrer que des
                  clients qui le lui ont demandé et à les informer de
                  l'utilisation de Book N' Glow. Le client reçoit une
                  confirmation par e-mail. Ces Rendez-vous ne sont jamais payés
                  par carte via la Plateforme.
                </p>
              </Subsection>
            </Section>

            <Section id="paiement" title="8. Paiement des prestations">
              <p>
                Le prix des Prestations est fixé par le Prestataire et payé par
                le Client au Prestataire. Selon le choix du Prestataire, le
                paiement se fait selon l'un des modes suivants.
              </p>
              <Subsection title="8.1 Paiement sur place">
                <p>
                  Le Client règle la Prestation directement au Prestataire, le
                  jour du Rendez-vous, selon les moyens acceptés par ce
                  dernier. Book N' Glow n'intervient pas dans ce paiement.
                </p>
              </Subsection>
              <Subsection title="8.2 Acompte via PayPal.me">
                <p>
                  Le Client est redirigé vers la page PayPal.me du Prestataire
                  pour verser l'acompte demandé. Il dispose de quinze (15)
                  minutes pour effectuer ce paiement. À défaut, le Prestataire
                  peut annuler le Rendez-vous. Ce paiement est effectué
                  directement entre le Client et le Prestataire, hors
                  Plateforme, et est soumis aux conditions de PayPal. Book N'
                  Glow n'encaisse pas ces sommes et ne peut pas les
                  rembourser. Le Prestataire peut signaler dans l'application
                  un acompte qu'il n'a pas reçu.
                </p>
              </Subsection>
              <Subsection title="8.3 Paiement par carte en ligne">
                <p>
                  Lorsque le Prestataire l'a activé, le Client paie en ligne
                  par carte bancaire, au moment de réserver, la totalité de la
                  Prestation ou un acompte de 20 %, selon le choix du
                  Prestataire. Le solde éventuel est réglé sur place.
                </p>
                <List>
                  <li>
                    Le créneau est réservé pendant cinq (5) minutes pendant le
                    paiement. Si le paiement n'aboutit pas dans ce délai, la
                    Réservation n'est pas créée et le créneau est libéré.
                  </li>
                  <li>
                    La Réservation n'est confirmée qu'une fois le paiement
                    accepté.
                  </li>
                  <li>
                    Si le montant à payer en ligne est inférieur à 0,50 €, la
                    Réservation est confirmée sans paiement en ligne et la
                    totalité est réglée sur place.
                  </li>
                </List>
                <p>
                  Le paiement est traité par Stripe Payments Europe Ltd,
                  établissement agréé. Les données de carte sont saisies
                  directement auprès de Stripe : Book N' Glow n'y a jamais
                  accès et ne les conserve pas. Seuls la marque de la carte et
                  ses quatre derniers chiffres sont conservés, pour les reçus.
                </p>
              </Subsection>
              <Subsection title="8.4 Mandat d'encaissement et reversement au Prestataire">
                <p>
                  En activant le paiement par carte, le Prestataire donne
                  mandat à Book N' Glow d'encaisser, en son nom et pour son
                  compte, les sommes payées par carte par ses Clients, puis de
                  les lui reverser. Le paiement effectué par le Client via la
                  Plateforme vaut paiement au Prestataire à hauteur du montant
                  payé : le Client est libéré de son obligation de paiement à
                  hauteur de ce montant.
                </p>
                <p>Le Prestataire :</p>
                <List>
                  <li>
                    crée un compte Stripe Express et accepte l'accord de compte
                    connecté de Stripe ; Stripe peut lui demander des
                    informations pour vérifier son identité et son activité ;
                  </li>
                  <li>
                    ne peut proposer le paiement par carte que si son compte
                    Stripe est en mesure de recevoir des fonds ;
                  </li>
                  <li>
                    peut demander le reversement des sommes encaissées pour un
                    Rendez-vous à partir de quarante-huit (48) heures après la
                    fin de celui-ci, délai qui permet de traiter les
                    réclamations des Clients ;
                  </li>
                  <li>
                    reçoit le montant payé par le Client, diminué des seuls
                    frais de traitement facturés par Stripe ; Book N' Glow ne
                    prélève aucune commission.
                  </li>
                </List>
                <p>
                  En cas de contestation d'un paiement par le Client auprès de
                  sa banque (litige ou « chargeback »), le reversement de la
                  somme concernée est suspendu jusqu'à l'issue du litige. Si le
                  litige est perdu alors que la somme a déjà été reversée, Book
                  N' Glow peut récupérer auprès du Prestataire le montant
                  correspondant et les frais facturés par Stripe, y compris par
                  compensation avec des reversements à venir. Le Prestataire
                  fournit les éléments utiles pour répondre au litige.
                </p>
                <p>
                  Les sommes payées par carte sont, jusqu'à leur reversement,
                  détenues par Stripe sur le compte de la Plateforme. Book N'
                  Glow ne les utilise pas pour son propre compte.
                </p>
              </Subsection>
            </Section>

            <Section id="annulation" title="9. Annulation, absence et remboursement">
              <Subsection title="9.1 Annulation par le Client">
                <p>
                  Le Client peut annuler son Rendez-vous depuis son Compte
                  jusqu'à l'expiration du délai d'annulation fixé par le
                  Prestataire et affiché avant la Réservation.
                </p>
                <List>
                  <li>
                    <Strong>Annulation dans le délai :</Strong> le montant payé
                    par carte est remboursé automatiquement. L'acompte versé
                    via PayPal.me est remboursé par le Prestataire,
                    directement, hors Plateforme.
                  </li>
                  <li>
                    <Strong>Après l'expiration du délai :</Strong> le
                    Rendez-vous ne peut plus être annulé en ligne et l'acompte
                    ou le montant payé en ligne reste acquis au Prestataire,
                    sauf geste commercial de sa part.
                  </li>
                </List>
              </Subsection>
              <Subsection title="9.2 Annulation par le Prestataire">
                <p>
                  Le Prestataire peut annuler un Rendez-vous à tout moment. Le
                  Client en est informé par e-mail. Le montant payé par carte
                  lui est alors intégralement remboursé, quel que soit le
                  délai. Un acompte versé via PayPal.me doit lui être remboursé
                  intégralement par le Prestataire. Le Prestataire s'engage à
                  n'annuler qu'en cas de nécessité et à prévenir le Client le
                  plus tôt possible.
                </p>
              </Subsection>
              <Subsection title="9.3 Absence du Client">
                <p>
                  Si le Client ne se présente pas, le Prestataire peut le
                  signaler dans l'application dans les 24 heures qui suivent la
                  fin du Rendez-vous. Le Client en est informé par e-mail.
                  L'acompte ou le montant payé en ligne reste alors acquis au
                  Prestataire. Le Prestataire s'engage à ne signaler une
                  absence que si elle est réelle. Le Client qui conteste ce
                  signalement peut contacter Book N' Glow (section 9.5).
                </p>
              </Subsection>
              <Subsection title="9.4 Délais de remboursement">
                <p>
                  Les remboursements par carte sont déclenchés automatiquement
                  après l'annulation. Le Client reçoit un e-mail lorsque Stripe
                  a effectué le remboursement. Le délai d'apparition sur son
                  compte bancaire dépend de sa banque, généralement de 5 à 10
                  jours ouvrés.
                </p>
              </Subsection>
              <Subsection title="9.5 Réclamations du Client">
                <p>
                  Toute réclamation relative à une Prestation (qualité,
                  absence, déroulement) est adressée en priorité au
                  Prestataire, par exemple via la messagerie. Si la Prestation
                  a été payée par carte, le Client peut aussi écrire à Book N'
                  Glow à l'adresse <Mail />, de préférence dans les 24 heures
                  qui suivent la fin du Rendez-vous afin que sa réclamation
                  puisse être examinée avant le reversement au Prestataire. Ce
                  délai ne prive pas le Client des recours que la loi lui
                  reconnaît ensuite.
                </p>
              </Subsection>
            </Section>

            <Section id="retractation" title="10. Droit de rétractation">
              <p>
                Les services de Book N' Glow étant fournis gratuitement, aucun
                droit de rétractation ne s'applique à l'utilisation de la
                Plateforme.
              </p>
              <p>
                Le contrat de Prestation est conclu à distance entre le Client
                et le Prestataire, professionnel. En choisissant un créneau, le
                Client demande expressément que la Prestation soit exécutée à
                la date choisie, le cas échéant avant l'expiration du délai de
                rétractation de quatorze (14) jours prévu par l'article L221-18
                du Code de la consommation. Conformément aux articles L221-25
                et L221-28 1° du même code, le droit de rétractation ne peut
                plus être exercé une fois la Prestation pleinement exécutée.
              </p>
              <p>
                Le Client peut exercer son droit de rétractation, avant
                l'exécution de la Prestation, en annulant le Rendez-vous
                depuis son Compte ou en adressant une déclaration dénuée
                d'ambiguïté au Prestataire ou à Book N' Glow (<Mail />).
              </p>
            </Section>

            <Section id="messagerie" title="11. Messagerie">
              <p>
                La messagerie permet au Client de contacter un Prestataire et à
                celui-ci de lui répondre. Seul le Client peut ouvrir une
                conversation. Le Client est prévenu par e-mail des réponses du
                Prestataire, et le Prestataire par notification.
              </p>
              <p>
                La messagerie est réservée aux échanges liés aux Prestations et
                aux Rendez-vous. Il est interdit d'y envoyer des contenus
                illicites, injurieux, harcelants, discriminatoires, à caractère
                sexuel, des messages publicitaires non sollicités, ou de
                demander des données de carte bancaire.
              </p>
              <p>
                Le Prestataire peut signaler un message. Le message signalé est
                masqué et examiné par Book N' Glow, qui accède alors à son
                contenu pour les seuls besoins de la modération. Book N' Glow
                peut également envoyer des messages d'information aux
                Prestataires dans un fil « Book N' Glow » non modifiable.
              </p>
            </Section>

            <Section id="avis" title="12. Avis clients">
              <p>
                Conformément aux articles L111-7-2 et D111-16 et suivants du
                Code de la consommation, Book N' Glow informe les Utilisateurs
                des règles suivantes.
              </p>
              <List>
                <li>
                  <Strong>Qui peut publier :</Strong> seul un Client ayant
                  effectivement réservé une Prestation via la Plateforme peut
                  laisser un avis. Une invitation personnelle et unique lui est
                  envoyée par e-mail environ 25 heures après la fin du
                  Rendez-vous. Aucune invitation n'est envoyée si le Client a
                  été signalé absent ou si le Rendez-vous a été annulé.
                </li>
                <li>
                  <Strong>Contrôle :</Strong> les avis sont donc vérifiés, au
                  sens où ils proviennent d'un Client ayant eu un Rendez-vous
                  avec le Prestataire. Book N' Glow ne vérifie pas
                  l'exactitude des appréciations portées.
                </li>
                <li>
                  <Strong>Contrepartie :</Strong> aucun avis n'est sollicité ou
                  publié en échange d'une contrepartie. Il est interdit au
                  Prestataire d'offrir un avantage en échange d'un avis, ou de
                  publier ou faire publier de faux avis.
                </li>
                <li>
                  <Strong>Contenu :</Strong> un avis comprend une note globale,
                  des notes par critère et un commentaire facultatif. Il est
                  daté de sa publication.
                </li>
                <li>
                  <Strong>Affichage :</Strong> les avis sont affichés par ordre
                  chronologique, du plus récent au plus ancien, sans être
                  classés selon leur note. Le Prestataire ne peut ni les
                  modifier ni les supprimer.
                </li>
                <li>
                  <Strong>Refus ou retrait :</Strong> Book N' Glow peut refuser
                  ou retirer un avis manifestement illicite, injurieux, sans
                  rapport avec la Prestation, contenant des données
                  personnelles, ou émanant d'une personne en conflit
                  d'intérêts. L'auteur est informé du motif de ce retrait.
                </li>
                <li>
                  <Strong>Signalement :</Strong> tout Utilisateur peut signaler
                  un avis à l'adresse <Mail />. L'auteur d'un avis peut en
                  demander la modification ou la suppression à la même
                  adresse.
                </li>
              </List>
            </Section>

            <Section id="prestataires" title="13. Engagements des Prestataires">
              <Subsection title="13.1 Exercice de l'activité">
                <p>Le Prestataire s'engage à :</p>
                <List>
                  <li>
                    disposer des qualifications, diplômes, déclarations et
                    autorisations exigés pour son activité, et respecter la
                    réglementation applicable, notamment en matière d'hygiène et
                    de sécurité ;
                  </li>
                  <li>
                    disposer d'une assurance de responsabilité civile
                    professionnelle couvrant son activité ;
                  </li>
                  <li>
                    publier des informations exactes et loyales sur ses
                    Prestations, ses photos, ses prix toutes taxes comprises,
                    ses disponibilités et ses Conditions, et les tenir à jour ;
                  </li>
                  <li>
                    honorer les Rendez-vous confirmés et respecter les
                    Conditions qu'il affiche ;
                  </li>
                  <li>
                    remettre au Client, lorsque la loi l'exige, une note ou une
                    facture.
                  </li>
                </List>
              </Subsection>
              <Subsection title="13.2 Données de ses clients">
                <p>
                  Le Prestataire accède aux coordonnées et à l'historique de
                  ses clients. Il ne les utilise que pour la gestion de ses
                  Rendez-vous et de sa relation avec eux, dans le respect du
                  RGPD. Il est responsable des informations qu'il saisit
                  lui-même (notes, clients ajoutés manuellement) et s'abstient
                  d'y enregistrer des données sensibles, notamment de santé,
                  sauf si elles sont strictement nécessaires à la Prestation et
                  que le client y a consenti. Il ne les exporte pas à des fins
                  de prospection sans le consentement de ses clients.
                </p>
              </Subsection>
              <Subsection title="13.3 Contenus publiés">
                <p>
                  Le Prestataire garantit détenir les droits sur les photos et
                  textes qu'il publie et que ceux-ci ne portent atteinte à
                  aucun droit de tiers (droit à l'image des personnes
                  photographiées notamment). Il concède à Book N' Glow, pour la
                  durée de son inscription et pour le monde entier, une licence
                  gratuite et non exclusive pour reproduire et afficher ces
                  contenus sur la Plateforme, dans la seule mesure nécessaire à
                  son fonctionnement.
                </p>
              </Subsection>
              <Subsection title="13.4 Obligations fiscales et sociales">
                <p>
                  Le Prestataire est seul responsable de ses obligations
                  fiscales et sociales (déclaration de ses revenus, TVA le cas
                  échéant, cotisations sociales). Conformément à l'article 242
                  bis du Code général des impôts, Book N' Glow l'informe que
                  les revenus perçus via la Plateforme sont imposables et
                  soumis à cotisations sociales dans les conditions de droit
                  commun. Des informations sont disponibles sur les sites
                  impots.gouv.fr et urssaf.fr.
                </p>
                <p>
                  En application de l'article 1649 ter A du Code général des
                  impôts (directive européenne « DAC7 »), Book N' Glow peut être
                  tenue de collecter certaines informations sur le Prestataire
                  (identité, adresse, numéro d'identification fiscale,
                  coordonnées bancaires, montants perçus) et de les transmettre
                  à l'administration fiscale. Le Prestataire s'engage à fournir
                  ces informations sur demande. À défaut, Book N' Glow peut
                  suspendre son Compte après deux relances, comme la loi le
                  prévoit.
                </p>
              </Subsection>
            </Section>

            <Section id="clients" title="14. Engagements des Clients">
              <p>Le Client s'engage à :</p>
              <List>
                <li>fournir des coordonnées exactes et joignables ;</li>
                <li>
                  n'utiliser la Plateforme que pour réserver des Prestations
                  pour lui-même ou, avec leur accord, pour ses proches, à des
                  fins personnelles ;
                </li>
                <li>
                  se présenter à l'heure à ses Rendez-vous, confirmer sa
                  présence lorsque cela lui est demandé, et annuler dans les
                  délais s'il ne peut pas venir ;
                </li>
                <li>
                  informer le Prestataire de toute information utile à la
                  bonne réalisation de la Prestation (allergie, contre-indication,
                  etc.) ;
                </li>
                <li>
                  se comporter avec respect envers le Prestataire, dans ses
                  messages comme lors du Rendez-vous ;
                </li>
                <li>ne laisser que des avis sincères et fondés sur une expérience réelle.</li>
              </List>
            </Section>

            <Section id="interdits" title="15. Comportements interdits">
              <p>Il est interdit à tout Utilisateur :</p>
              <List>
                <li>
                  d'utiliser la Plateforme à des fins illicites, frauduleuses ou
                  contraires aux présentes CGU ;
                </li>
                <li>
                  de publier ou transmettre des contenus illicites,
                  diffamatoires, injurieux, haineux, discriminatoires, violents,
                  pornographiques ou portant atteinte à la vie privée ou aux
                  droits de tiers ;
                </li>
                <li>
                  d'usurper l'identité d'un tiers ou de créer de faux Comptes,
                  de fausses Réservations ou de faux avis ;
                </li>
                <li>
                  d'envoyer de la publicité ou de la prospection non sollicitée
                  aux autres Utilisateurs ;
                </li>
                <li>
                  de contourner la Plateforme pour obtenir le paiement d'une
                  Réservation payée par carte, ou de demander à un Client de
                  payer une seconde fois ;
                </li>
                <li>
                  d'accéder ou de tenter d'accéder sans autorisation aux
                  systèmes de la Plateforme, d'en perturber le fonctionnement,
                  ou d'en extraire les données de façon automatisée (robots,
                  scraping) ;
                </li>
                <li>
                  de copier, décompiler ou exploiter commercialement tout ou
                  partie de la Plateforme sans autorisation écrite.
                </li>
              </List>
            </Section>

            <Section id="signalement" title="16. Signalement de contenus illicites">
              <p>
                Conformément au règlement (UE) 2022/2065 sur les services
                numériques (DSA), tout Utilisateur ou tiers peut signaler un
                contenu qu'il estime illicite (avis, message, photo, Page de
                réservation, etc.) :
              </p>
              <List>
                <li>par e-mail à l'adresse <Mail /> ;</li>
                <li>
                  pour les Prestataires, directement depuis la messagerie de
                  l'application.
                </li>
              </List>
              <p>
                Le signalement indique, dans la mesure du possible, le contenu
                concerné et son emplacement, les raisons pour lesquelles il est
                jugé illicite, ainsi que le nom et l'adresse e-mail de son
                auteur. Book N' Glow accuse réception du signalement, l'examine
                avec diligence et objectivité, et informe son auteur de la
                décision prise.
              </p>
              <p>
                Lorsque Book N' Glow retire un contenu ou restreint un Compte,
                elle en informe l'Utilisateur concerné en indiquant les motifs
                de sa décision, sauf obligation légale contraire. L'Utilisateur
                peut la contester en écrivant à <Mail />. Book N' Glow
                n'utilise pas de système automatisé pour prendre ces décisions.
              </p>
              <p>
                L'adresse <Mail /> constitue le point de contact unique des
                Utilisateurs et des autorités au sens des articles 11 et 12 du
                DSA. Les échanges peuvent avoir lieu en français.
              </p>
            </Section>

            <Section id="suspension" title="17. Suspension et suppression de compte">
              <Subsection title="17.1 Suppression à l'initiative de l'Utilisateur">
                <p>
                  L'Utilisateur peut supprimer son Compte à tout moment : le
                  Prestataire depuis son profil dans l'application, le Client
                  depuis son espace client, ou l'un et l'autre en écrivant à{" "}
                  <Mail />. Le Client doit au préalable annuler ses
                  Rendez-vous à venir. Lorsque le Prestataire supprime son
                  Compte, ses Rendez-vous à venir sont annulés et les Clients
                  concernés sont prévenus et, le cas échéant, remboursés.
                </p>
                <p>
                  La suppression est définitive. Les données personnelles sont
                  supprimées ou anonymisées, à l'exception de celles que Book
                  N' Glow doit conserver pour respecter ses obligations légales
                  (comptables, fiscales) ou pour la gestion d'un litige en
                  cours, dans les conditions prévues par la politique de
                  confidentialité. L'historique des Rendez-vous passés est
                  conservé sous forme anonymisée.
                </p>
              </Subsection>
              <Subsection title="17.2 Mesures prises par Book N' Glow">
                <p>
                  En cas de manquement aux présentes CGU, d'informations
                  fausses, de comportement frauduleux ou portant atteinte aux
                  autres Utilisateurs, ou d'absences répétées d'un Client,
                  Book N' Glow peut, de manière proportionnée : adresser un
                  avertissement, retirer un contenu, restreindre certaines
                  fonctionnalités (réservation, messagerie, paiement par
                  carte), suspendre ou supprimer le Compte.
                </p>
                <p>
                  Book N' Glow motive sa décision et la notifie à l'Utilisateur
                  au plus tard au moment où elle prend effet. Pour un
                  Prestataire, la résiliation définitive de son Compte est
                  notifiée avec un préavis de trente (30) jours, sauf
                  manquement grave ou répété, obligation légale, ou atteinte à
                  la sécurité des Clients, auxquels cas elle peut être
                  immédiate. L'Utilisateur peut contester la mesure en
                  écrivant à <Mail />.
                </p>
              </Subsection>
              <Subsection title="17.3 Arrêt du service">
                <p>
                  Book N' Glow peut cesser d'exploiter la Plateforme ou la
                  céder à un tiers. Elle en informe alors les Utilisateurs au
                  moins trente (30) jours à l'avance et leur permet de
                  récupérer leurs données.
                </p>
              </Subsection>
            </Section>

            <Section id="propriete" title="18. Propriété intellectuelle">
              <p>
                La Plateforme, ses logiciels, sa structure, ses textes, ses
                visuels, ses bases de données, le nom et le logo « Book N'
                Glow » sont la propriété de Book N' Glow ou de ses partenaires
                et sont protégés par le droit de la propriété intellectuelle.
                Book N' Glow concède à l'Utilisateur un droit personnel, non
                exclusif et non transférable d'utiliser la Plateforme
                conformément aux présentes CGU, pendant la durée de son
                inscription. Toute autre utilisation est interdite sans
                autorisation écrite préalable.
              </p>
              <p>
                Les Contenus publiés par les Utilisateurs restent leur
                propriété, sous réserve de la licence prévue à la section 13.3.
              </p>
            </Section>

            <Section id="donnees" title="19. Données personnelles">
              <p>
                Book N' Glow traite les données personnelles des Utilisateurs
                conformément au règlement (UE) 2016/679 (RGPD) et à la loi
                Informatique et Libertés, comme décrit dans sa{" "}
                <Link
                  to="/politique-de-confidentialite"
                  className="text-primary hover:underline"
                >
                  politique de confidentialité
                </Link>
                .
              </p>
              <p>
                Pour fonctionner, la Plateforme envoie des e-mails, des SMS et
                des notifications liés aux Rendez-vous (confirmation, rappel,
                annulation, messages, demande d'avis). Ces envois font partie
                du service et ne constituent pas de la prospection
                commerciale. Le Prestataire peut gérer les notifications de
                l'application dans les réglages de son téléphone.
              </p>
              <p>
                Chaque Prestataire est responsable des traitements qu'il
                réalise lui-même avec les données de ses clients, dans les
                conditions de la section 13.2.
              </p>
            </Section>

            <Section id="disponibilite" title="20. Disponibilité et évolution">
              <p>
                Book N' Glow s'efforce de rendre la Plateforme accessible 24
                heures sur 24 et 7 jours sur 7, mais ne peut garantir une
                disponibilité sans interruption. L'accès peut être suspendu
                pour maintenance, mise à jour, ou en cas de panne d'un
                prestataire technique. Book N' Glow s'efforce de prévenir les
                Prestataires des interruptions programmées.
              </p>
              <p>
                Book N' Glow peut faire évoluer les fonctionnalités de la
                Plateforme. Certaines mises à jour de l'application peuvent
                être nécessaires pour continuer à l'utiliser. Book N' Glow
                informe les Prestataires de toute évolution qui modifie de
                manière importante l'usage du service.
              </p>
              <p>
                Apple et Google, qui distribuent l'application, ne sont pas
                parties aux présentes CGU et n'assument aucune obligation de
                maintenance ou d'assistance à son égard.
              </p>
            </Section>

            <Section id="responsabilite" title="21. Responsabilité">
              <p>
                Book N' Glow est tenue d'une obligation de moyens dans la
                fourniture de la Plateforme. Elle répond des dommages causés
                par ses propres manquements, dans les conditions du droit
                commun.
              </p>
              <p>
                N'étant pas partie au contrat de Prestation, Book N' Glow
                n'est pas responsable de la réalisation, de la qualité ou de la
                sécurité des Prestations, ni du comportement des Prestataires
                et des Clients entre eux, ni des paiements effectués hors
                Plateforme (sur place ou via PayPal.me). Chaque Utilisateur est
                responsable des Contenus qu'il publie.
              </p>
              <p>
                Book N' Glow n'est pas responsable des dommages résultant d'une
                utilisation de la Plateforme non conforme aux CGU, d'un cas de
                force majeure au sens de l'article 1218 du Code civil, ou du
                fait d'un tiers.
              </p>
              <p>
                À l'égard des Prestataires, qui utilisent la Plateforme à titre
                professionnel et gratuitement, la responsabilité de Book N'
                Glow est limitée aux dommages directs et prouvés, et exclut les
                pertes de chiffre d'affaires ou de clientèle. Aucune stipulation
                des présentes ne limite la responsabilité de Book N' Glow en cas
                de faute lourde ou intentionnelle, ni les droits que la loi
                reconnaît aux consommateurs.
              </p>
              <p>
                Le Prestataire garantit Book N' Glow contre toute réclamation
                d'un tiers résultant de ses Prestations, de ses Contenus ou
                d'un manquement à ses obligations légales ou aux présentes CGU.
              </p>
            </Section>

            <Section id="modification" title="22. Modification des CGU">
              <p>
                Book N' Glow peut modifier les présentes CGU, notamment pour
                tenir compte d'une évolution de la Plateforme ou de la loi. La
                date de la version en vigueur figure en haut de cette page.
              </p>
              <p>
                Les Prestataires sont informés par e-mail ou dans
                l'application au moins quinze (15) jours avant l'entrée en
                vigueur des modifications, sauf obligation légale ou
                réglementaire imposant un délai plus court. Ils peuvent
                supprimer leur Compte avant cette date s'ils refusent les
                modifications. Les Clients disposant d'un Compte sont informés
                de toute modification importante.
              </p>
              <p>
                Les Réservations déjà conclues restent soumises à la version
                des CGU en vigueur au moment de leur conclusion.
              </p>
            </Section>

            <Section id="litiges" title="23. Réclamations, médiation et droit applicable">
              <p>
                Toute réclamation relative à la Plateforme peut être adressée à
                Book N' Glow à l'adresse <Mail />. Book N' Glow s'efforce d'y
                répondre dans un délai de quinze (15) jours.
              </p>
              <p>
                Conformément aux articles L612-1 et suivants du Code de la
                consommation, le Client consommateur peut recourir
                gratuitement à un médiateur de la consommation en vue de la
                résolution amiable d'un litige avec Book N' Glow, après avoir
                tenté de le résoudre directement par une réclamation écrite.
                {CONSUMER_MEDIATOR ? (
                  <>
                    {" "}
                    Le médiateur compétent est {CONSUMER_MEDIATOR.name},{" "}
                    {CONSUMER_MEDIATOR.address} (
                    <a
                      href={CONSUMER_MEDIATOR.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {CONSUMER_MEDIATOR.url}
                    </a>
                    ).
                  </>
                ) : (
                  <>
                    {" "}
                    Les coordonnées du médiateur compétent sont communiquées
                    sur simple demande à l'adresse <Mail />.
                  </>
                )}{" "}
                Pour un litige portant sur une Prestation, le Client s'adresse
                au médiateur du Prestataire concerné.
              </p>
              <p>
                Les présentes CGU sont soumises au droit français. Le Client
                consommateur bénéficie en outre des dispositions impératives de
                la loi de son pays de résidence. À défaut d'accord amiable, les
                litiges avec un consommateur sont portés devant la juridiction
                compétente selon les règles de droit commun. Les litiges avec
                un Prestataire relèvent de la compétence des tribunaux du
                ressort du siège de Book N' Glow.
              </p>
            </Section>

            <Section id="contact" title="24. Contact">
              <p>
                Pour toute question concernant les présentes CGU, vous pouvez
                écrire à : <Mail />.
              </p>
              <p>
                Book N' Glow — Tracy Z. Garcia EI, 1 allée du Furet, 77186
                Noisiel, France.
              </p>
            </Section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
