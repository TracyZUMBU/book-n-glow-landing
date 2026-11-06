/**
 * Toutes les questions de la FAQ.
 *
 * Pour ajouter une question : ajoute un objet à la liste, dans la catégorie voulue.
 * - `audience` : à qui s'adresse la question (filtre de la page /faq).
 * - `onHome` : la question s'affiche aussi dans la FAQ de l'accueil (6 maximum, conseillé).
 *
 * Ton : tutoiement partout. Chaque réponse doit refléter l'app telle qu'elle est.
 */

export type FaqAudience = "prestataire" | "cliente";

export type FaqCategory = "Tarifs et paiement" | "Réservations" | "L'app";

export interface FaqItem {
  question: string;
  answer: string;
  category: FaqCategory;
  audience: FaqAudience[];
  onHome?: boolean;
}

/** Ordre d'affichage des catégories sur la page /faq. */
export const FAQ_CATEGORIES: FaqCategory[] = ["Tarifs et paiement", "Réservations", "L'app"];

export const FAQ: FaqItem[] = [
  // Tarifs et paiement
  {
    question: "C'est vraiment gratuit ?",
    answer:
      "Oui. Pas d'abonnement et pas de commission. Sur un paiement par carte, seuls les frais Stripe sont déduits.",
    category: "Tarifs et paiement",
    audience: ["prestataire"],
    onHome: true,
  },
  {
    question: "Comment je reçois l'argent ?",
    answer:
      "Pour un paiement par carte, l'argent t'est reversé 48 h après le rendez-vous. Pour un acompte PayPal.Me, il arrive directement sur ton compte PayPal. Sur place, tu encaisses toi-même.",
    category: "Tarifs et paiement",
    audience: ["prestataire"],
    onHome: true,
  },
  {
    question: "Quels sont les moyens de paiement ?",
    answer:
      "Selon ce que la prestataire propose : paiement sur place, acompte PayPal.Me, ou paiement par carte en ligne (20 % ou la totalité). Le paiement par carte est disponible en France uniquement.",
    category: "Tarifs et paiement",
    audience: ["prestataire", "cliente"],
  },
  {
    question: "L'acompte est-il remboursable ?",
    answer:
      "Oui, si tu annules avant la date limite indiquée dans ton e-mail de confirmation : l'acompte déjà payé t'est alors remboursé. Cette date limite est fixée par la prestataire.",
    category: "Tarifs et paiement",
    audience: ["cliente"],
  },

  // Réservations
  {
    question: "Et si la cliente annule ?",
    answer:
      "Tu fixes toi-même ton délai d'annulation dans l'app. La cliente reçoit un e-mail d'annulation, et un reçu si elle est remboursée.",
    category: "Réservations",
    audience: ["prestataire"],
    onHome: true,
  },
  {
    question: "Mes clientes doivent-elles télécharger une app ?",
    answer:
      "Non. Elles réservent depuis ton lien, dans leur navigateur, et reçoivent leurs rappels par e-mail.",
    category: "Réservations",
    audience: ["prestataire"],
    onHome: true,
  },
  {
    question: "Comment voir les rendez-vous pris par mes clientes ?",
    answer:
      "Dans l'onglet Réservations de l'app, en liste ou en agenda. Ton prochain rendez-vous s'affiche aussi sur l'accueil.",
    category: "Réservations",
    audience: ["prestataire"],
  },
  {
    question: "Mes clientes reçoivent-elles des rappels ?",
    answer:
      "Oui, par e-mail : la confirmation de la réservation, puis un rappel avec l'adresse 24 h avant le rendez-vous.",
    category: "Réservations",
    audience: ["prestataire"],
  },
  {
    question: "Quand mon adresse est-elle communiquée à mes clientes ?",
    answer:
      "Ça dépend de tes réglages. Si ton adresse est publique, elle s'affiche dès la réservation. Sinon, ta cliente la reçoit par e-mail 24 h avant le rendez-vous.",
    category: "Réservations",
    audience: ["prestataire"],
  },
  {
    question: "Comment prendre rendez-vous ?",
    answer:
      "Clique sur le lien de réservation de ta prestataire (souvent dans sa bio Instagram), choisis ta prestation et ton créneau, puis valide. Selon la prestataire, un acompte peut être demandé.",
    category: "Réservations",
    audience: ["cliente"],
  },
  {
    question: "À quel moment je reçois l'adresse exacte ?",
    answer:
      "Selon la prestataire : dès la réservation si son adresse est publique, sinon par e-mail 24 h avant le rendez-vous. Elle apparaît aussi dans « Mes rendez-vous ».",
    category: "Réservations",
    audience: ["cliente"],
  },

  // L'app
  {
    question: "Ça marche sur Android ?",
    answer: "Oui. Book N' Glow est disponible sur l'App Store et sur Google Play.",
    category: "L'app",
    audience: ["prestataire"],
    onHome: true,
  },
  {
    question: "Dans quels pays je peux l'utiliser ?",
    answer:
      "En France, en Belgique, en Suisse, au Luxembourg et à Monaco. Le paiement par carte en ligne est disponible en France uniquement.",
    category: "L'app",
    audience: ["prestataire", "cliente"],
    onHome: true,
  },
  {
    question: "Comment gérer mes disponibilités ?",
    answer:
      "Dans l'onglet Disponibilités de l'app : tu définis tes horaires d'ouverture et tu bloques tes indisponibilités.",
    category: "L'app",
    audience: ["prestataire"],
  },
  {
    question: "Comment fonctionne la messagerie ?",
    answer:
      "La cliente peut écrire à la prestataire depuis sa page, même sans réservation. Elles échangent ensuite depuis l'onglet Messages. À chaque nouveau message, la cliente est prévenue par e-mail et la prestataire par notification push.",
    category: "L'app",
    audience: ["prestataire", "cliente"],
  },
];
