import Footer from "@/components/landing/Footer";
import { useMemo, useState } from "react";

type Destinataire = "tous" | "client" | "prestataire" | "general";
type Categorie = "Abonnement" | "Paiement" | "Données" | "Fonctionnement";

const CATEGORY_LABELS: Record<Categorie, string> = {
  Abonnement: "Abonnement",
  Paiement: "Paiement",
  Données: "Données",
  Fonctionnement: "Fonctionnement",
};

interface FAQItem {
  id: string;
  question: string;
  reponse: string;
  categorie: string | string[];
  destinataire:
    | "client"
    | "prestataire"
    | "general"
    | ("client" | "prestataire" | "general")[];
}

const faqData: FAQItem[] = [
  // Questions masquées dans le cadre du passage au modèle 100 % gratuit.
  // Code conservé pour réactivation future.
  // Voir docs/deferred/free-only-model.md.
  // {
  //   id: "1",
  //   question: "Puis-je changer de plan à tout moment ?",
  //   reponse:
  //     "Oui, vous pouvez passer à un plan supérieur ou inférieur à tout moment. Les changements prennent effet à la fin de votre abonnement actuel.",
  //   categorie: CATEGORY_LABELS["Abonnement"],
  //   destinataire: "prestataire",
  // },
  // {
  //   id: "2",
  //   question: "Book N Glow prend-il une commission sur les prestations ?",
  //   reponse:
  //     "Non, Book N Glow ne prend aucune commission sur les prestations. Les prestataires reçoivent 100% du montant de leurs prestations. Book N Glow est une plateforme de mise en relation qui fonctionne uniquement grâce aux abonnements des prestataires.",
  //   categorie: CATEGORY_LABELS["Paiement"],
  //   destinataire: "prestataire",
  // },
  {
    id: "3",
    question: "Quels sont les moyens de paiement disponibles ?",
    reponse:
      "Deux moyens de paiement sont disponibles : paiement sur place directement chez le prestataire, et PayPal.me (le client est redirigé vers la page PayPal du prestataire avec le montant à payer pendant la réservation).",
    categorie: CATEGORY_LABELS["Paiement"],
    destinataire: ["client", "prestataire", "general"],
  },
  {
    id: "4",
    question:
      "Est-ce que mes réservations sont enregistrées indéfiniment sur Book N Glow ?",
    reponse:
      "Non, par défaut, les données de vos réservations sont supprimées automatiquement une fois le service effectué. Si vous souhaitez garder un historique (par exemple, pour vos propres besoins), vous pouvez activer cette option dans vos paramètres – et dans ce cas, les réservations seront conservées plus longtemps, mais toujours dans le cadre légal.",
    categorie: CATEGORY_LABELS["Données"],
    destinataire: "prestataire",
  },
  {
    id: "5",
    question: "Comment accéder au rendez-vous pris par mes clients ?",
    reponse:
      "Vous pouvez accéder aux rendez-vous pris par vos clients depuis l'onglet rendez-vous ou depuis le dashboard.",
    categorie: "Fonctionnement",
    destinataire: "prestataire",
  },
  {
    id: "6",
    question: "Mes clients reçoivent-ils des rappels des rendez-vous ?",
    reponse: "Oui, par e-mail.",
    categorie: "Fonctionnement",
    destinataire: "prestataire",
  },
  {
    id: "7",
    question: "Comment gérer mes disponibilités en tant que professionnel ?",
    reponse:
      "Dans l'onglet horaires. Et là, il sera possible de définir ses horaires d'ouverture. Et les périodes de disponibilité.",
    categorie: "Fonctionnement",
    destinataire: "prestataire",
  },
  {
    id: "8",
    question: "L'acompte est-il remboursable ?",
    reponse:
      "Les conditions de remboursement dépendent du prestataire. En cas de paiement via PayPal.me, le client dispose de 15 minutes pour payer, puis le prestataire peut annuler le rendez-vous si le paiement n'est pas effectué.",
    categorie: CATEGORY_LABELS["Paiement"],
    destinataire: "client",
  },
  {
    id: "9",
    question: "Comment prendre rendez-vous ?",
    reponse:
      "C'est super simple : il suffit d'accéder au profil d'un(e) prestataire, via son lien de réservation ou en la/le recherchant, puis de cliquer sur le bouton « Réserver ». Il est possible que la/le professionnel(le) requiert un acompte lors de la réservation.",
    categorie: "Fonctionnement",
    destinataire: "client",
  },
  {
    id: "10",
    question: "À quel moment l'adresse exacte m'est-elle transmise ?",
    reponse:
      "En fonction du prestataire, l'adresse exacte sera affichée soit au moment de la réservation, soit dans l'onglet « Mes rendez-vous » et par e-mail 24h avant le rendez-vous. Vous recevrez également un e-mail de rappel avec tous les détails nécessaires.",
    categorie: "Fonctionnement",
    destinataire: "client",
  },
  {
    id: "11",
    question: "À quel moment mon adresse est-elle communiquée aux client(e)s ?",
    reponse:
      "Selon ce que vous aurez défini dans les paramètres. Si vous avez coché adresse publique, directement au moment de la réservation. Si elle n'est pas publique, 24h avant le rendez-vous dans un e-mail et dans l'onglet « Mes rendez-vous ».",
    categorie: "Fonctionnement",
    destinataire: "prestataire",
  },
  {
    id: "12",
    question: "Comment fonctionne la messagerie in-app ?",
    reponse:
      "La cliente initie la conversation depuis votre profil (aucune réservation préalable n'est requise). Une fois la conversation créée, vous pouvez tous les deux échanger à tout moment depuis l'onglet Messages. Les messages sont uniquement textuels, et chaque nouveau message déclenche une notification par e-mail pour le client et une notification push pour le prestataire.",
    categorie: "Fonctionnement",
    destinataire: ["client", "prestataire"],
  },
];

export default function FAQ() {
  const [selectedDestinataire, setSelectedDestinataire] =
    useState<Destinataire>("tous");

  // Normaliser les destinataires (convertir string en array si nécessaire)
  const normalizeDestinataires = (
    dest: FAQItem["destinataire"],
  ): ("client" | "prestataire" | "general")[] => {
    return Array.isArray(dest) ? dest : [dest];
  };

  // Normaliser les catégories (convertir string en array si nécessaire)
  const normalizeCategories = (cat: FAQItem["categorie"]): string[] => {
    return Array.isArray(cat) ? cat : [cat];
  };

  // Filtrer les questions selon le destinataire sélectionné (sans doublons)
  const filteredFAQs = useMemo(() => {
    if (selectedDestinataire === "tous") {
      // Pour "tous", on retourne toutes les questions sans doublons (basé sur l'ID)
      const uniqueFAQs = new Map<string, FAQItem>();
      faqData.forEach((item) => {
        uniqueFAQs.set(item.id, item);
      });
      return Array.from(uniqueFAQs.values());
    }

    // Filtrer selon le destinataire sélectionné
    const filtered = faqData.filter((item) => {
      const destinataires = normalizeDestinataires(item.destinataire);
      return destinataires.includes(selectedDestinataire);
    });

    // Éliminer les doublons basés sur l'ID
    const uniqueFAQs = new Map<string, FAQItem>();
    filtered.forEach((item) => {
      uniqueFAQs.set(item.id, item);
    });
    return Array.from(uniqueFAQs.values());
  }, [selectedDestinataire]);

  // Grouper par catégorie (une question peut apparaître dans plusieurs catégories)
  const groupedByCategory = useMemo(() => {
    const grouped: Record<string, FAQItem[]> = {};

    filteredFAQs.forEach((item) => {
      const categories = normalizeCategories(item.categorie);
      categories.forEach((cat) => {
        if (!grouped[cat]) {
          grouped[cat] = [];
        }
        // Vérifier si l'item n'est pas déjà dans cette catégorie (éviter doublons)
        if (!grouped[cat].some((existingItem) => existingItem.id === item.id)) {
          grouped[cat].push(item);
        }
      });
    });

    return grouped;
  }, [filteredFAQs]);

  const categories = Object.keys(groupedByCategory).sort();

  const getDestinataireLabel = (dest: string) => {
    switch (dest) {
      case "client":
        return "Clients";
      case "prestataire":
        return "Prestataires";
      case "general":
        return "Général";
      default:
        return dest;
    }
  };

  const getDestinataireColor = (dest: string) => {
    switch (dest) {
      case "client":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "prestataire":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "general":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-10 pb-8 md:pt-20 md:pb-16 px-4 text-center">
        <div className="container-mobile max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Questions <span className="text-gradient">Fréquentes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur Book &
            Glow
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pt-10 pb-8 md:pt-20 md:pb-16 px-4 bg-background-light">
        <div className="container-mobile max-w-3xl">
          {/* Filtres par destinataire */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {(
                ["tous", "client", "prestataire", "general"] as Destinataire[]
              ).map((dest) => (
                <button
                  key={dest}
                  onClick={() => setSelectedDestinataire(dest)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedDestinataire === dest
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:bg-muted border border-border"
                  }`}
                >
                  {dest === "tous" ? "Tous" : getDestinataireLabel(dest)}
                </button>
              ))}
            </div>
          </div>

          {/* Questions groupées par catégorie */}
          {categories.length > 0 ? (
            <div className="space-y-8">
              {categories.map((categorie) => (
                <div key={categorie}>
                  <h2 className="text-2xl font-serif font-bold mb-4 text-foreground">
                    {categorie}
                  </h2>
                  <div className="space-y-4">
                    {groupedByCategory[categorie].map((item) => (
                      <div
                        key={item.id}
                        className="bg-card p-6 rounded-2xl border border-border"
                      >
                        <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                          <h3 className="text-xl font-semibold flex-1 min-w-[200px]">
                            {item.question}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {normalizeDestinataires(item.destinataire).map(
                              (dest) => (
                                <span
                                  key={dest}
                                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getDestinataireColor(
                                    dest,
                                  )}`}
                                >
                                  {getDestinataireLabel(dest)}
                                </span>
                              ),
                            )}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{item.reponse}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Aucune question trouvée pour ce filtre.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
