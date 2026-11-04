# Brief — refonte de la landing book-n-glow.fr

> Statut : brouillon à valider (2026-11-04)
> Usage : cadrage avant maquette (Claude Design), puis implémentation dans ce repo.

## 1. Contexte

L'app prestataire **Book N' Glow Pro** est sortie sur l'App Store et le Google Play Store. Le paiement par carte (Stripe) est ouvert en France depuis le 4 novembre 2026. L'inscription prestataire ne se fait plus sur le site, uniquement dans l'app.

La landing actuelle vient d'un template (shadcn/Lovable). Elle décrit encore l'ancien produit : PayPal.Me mis en avant, pas de paiement carte, CTA « Voir les tarifs », tutoiement et vouvoiement mélangés.

## 2. Objectif

**Une seule action : faire télécharger l'app aux prestataires.**

- Indicateur principal : clics sur les boutons App Store / Google Play (déjà suivis via Google Analytics).
- Indicateur secondaire : inscriptions terminées dans l'app (funnel onboarding existant côté backend).

## 3. Cibles

**Principale : prestataires beauté indépendantes**

- Métiers : coiffure, ongles, maquillage, esthétique, cils et sourcils.
- Pays : France, Belgique, Suisse, Luxembourg, Monaco (carte en ligne : France uniquement).
- Elles travaillent seules, à domicile, chez la cliente ou dans un petit local.
- Elles trouvent leurs clientes sur Instagram (et TikTok) et prennent les rendez-vous par DM.
- Elles arrivent sur la landing surtout **depuis un téléphone**, via un lien Instagram ou une recherche.

**Secondaire : clientes égarées**

- Une cliente qui arrive sur book-n-glow.fr cherche à se connecter ou à retrouver un rendez-vous. Il lui faut un lien discret « Espace cliente » dans le header.

## 4. Problèmes à adresser (ce qu'elles vivent aujourd'hui)

1. Répondre aux mêmes DM toute la journée (« t'as une dispo samedi ? », « c'est combien ? »).
2. Mettre à jour ses disponibilités en story.
3. Les lapins : la cliente ne vient pas, et rien ne la retient.
4. Courir après les acomptes.
5. Confirmer chaque rendez-vous la veille, à la main.

## 5. Messages clés (dans cet ordre)

1. **Ta page de réservation, dans ta bio Insta.** Tes clientes voient tes dispos et réservent seules, 24 h/24.
2. **Fini les lapins.** Acompte par carte (20 % ou totalité) ou PayPal.Me, confirmation de présence obligatoire la veille, délai d'annulation que tu fixes, absence signalée en un tap.
3. **Gratuit. Vraiment.** Pas d'abonnement, pas de commission. Sur un paiement carte, seuls les frais Stripe sont déduits.
4. **Tout ton salon dans ton téléphone.** Agenda, fichier clientes, messagerie, avis vérifiés, chiffre d'affaires.

## 6. Structure proposée

| # | Section | Contenu | CTA |
|---|---------|---------|-----|
| 0 | Header | Logo, ancres (Fonctionnalités, FAQ), lien discret « Espace cliente », bouton « Télécharger » | Stores |
| 1 | Hero | Promesse (message 1), sous-titre (gratuit, sans commission), badges App Store + Google Play, capture de l'app dans un téléphone | Stores |
| 2 | Le problème | Les 4 ou 5 galères (section 4), en version courte et reconnaissable | — |
| 3 | Comment ça marche | 3 étapes : télécharge et crée ta page → colle ton lien en bio → reçois tes réservations | — |
| 4 | Fini les lapins | Section dédiée au message 2 : acompte carte, confirmation de présence, délai d'annulation, signalement d'absence | — |
| 5 | Tout dans ton téléphone | Captures de l'app, une par fonctionnalité : agenda, clientes, messagerie, avis, chiffre d'affaires | — |
| 6 | Côté cliente | Ce que voit la cliente : page de réservation, paiement, rappels e-mail | — |
| 7 | Gratuit | Bloc simple : 0 € d'abonnement, 0 % de commission, seuls les frais Stripe sur la carte. Remplace la page Tarifs | Stores |
| 8 | Avis | Note App Store et 2 ou 3 vrais avis des stores, cités tels quels avec pseudo, store et date (voir section 9 bis) | Stores |
| 9 | FAQ | 5 ou 6 questions : c'est vraiment gratuit ? comment je reçois l'argent ? et si la cliente annule ? mes clientes doivent télécharger une app ? (non) ; Android ? ; pays couverts | — |
| 10 | CTA final | Rappel de la promesse + badges stores + QR code (visible sur ordinateur) | Stores |
| 11 | Footer | Liens légaux, contact, Instagram | — |

## 7. Fonctionnalités réelles (source : app pro et backend)

- Page de réservation publique, lien dédié pour la bio Instagram
- Prestations avec options, photos, tarifs et promotions
- Disponibilités, planning, indisponibilités
- Agenda des réservations (liste et vue agenda), création manuelle d'un rendez-vous
- Paiement : sur place, acompte PayPal.Me, carte en ligne (totalité ou 20 %, France), reversement 48 h après le rendez-vous
- Délai d'annulation personnalisable, confirmation de présence obligatoire
- Signalement d'absence (no-show), acompte conservé
- Fichier clientes et historique
- Messagerie avec les clientes
- Avis clients vérifiés, envoyés automatiquement après le rendez-vous
- Notifications push (nouvelle réservation, annulation, message)
- E-mails automatiques aux clientes : confirmation, adresse 24 h avant, annulation, reçu de remboursement
- Tableau de bord du chiffre d'affaires

## 8. Ton et style

- **Tutoiement partout.** C'est le ton d'Instagram et de la cible.
- Phrases courtes, concrètes, sans jargon (« acompte », pas « deposit » ; « lapin », pas « no-show » dans les titres).
- Chaleureux et complice, pas « startup tech ».

**Nom** : toujours « Book N' Glow ».

**Identité de l'app (référence, vue dans le simulateur)** :

- Icône : « BN'G » en gris très foncé, police sans empattement grasse, chevron rose `#ff4081` à la place de l'apostrophe.
- Interface : fond blanc, titres avec empattement (type Playfair Display), texte sans empattement, rose `#ff4081` pour les boutons et les éléments actifs, carte d'accueil en dégradé rose → violet, cartes à bords arrondis avec un liseré rose pâle, pastilles de statut (vert « Confirmé », rouge « Litige en cours »).

**Identité actuelle de la landing** : rose `#ff4081`, violet `#9c27b0`, bleu `#03a9f4`, or `#ffc107`. Polices : Playfair Display (titres), Poppins (texte).

→ **Proposition** : reprendre l'identité de l'app. Rose `#ff4081` dominant, dégradé rose → violet réservé aux temps forts (hero, CTA final), titres en Playfair Display, texte en Poppins, beaucoup de blanc. On abandonne le bleu et l'or.

## 8 bis. Inspiration : iara (iarabeauty.com/fr/business)

Iara est aussi un **concurrent direct** : on s'en inspire, on ne le copie pas.

Ce qui marche chez eux :

- **Hero plein écran** avec une vraie photo de prestataire, un titre très gros et court, un seul mot en couleur, les badges des stores juste en dessous.
- **Preuve sociale immédiate** sous les badges : petits avatars et pseudos Instagram de prestataires.
- **Navigation en pilule** flottante et translucide.
- **Grille de fonctionnalités** : cartes blanches sur fond gris très clair, une petite icône, un titre de 3 mots, une phrase.
- **Avis** présentés avec pseudo et métier (« Nail Tech », « Brow Artist »).
- Tutoiement, phrases très courtes, FAQ en fin de page.

Notre angle pour se démarquer :

- Iara a un forfait gratuit, mais propose des offres payantes à 19,99 € et 39,99 € par mois. **Chez Book N' Glow, tout est gratuit, y compris le paiement par carte et les acomptes.** À vérifier sur leur tableau comparatif avant de l'écrire, et à formuler sans les nommer.
- Les lapins : la confirmation de présence obligatoire et le signalement d'absence en un tap.

## 9. Contraintes

- **Mobile d'abord** : la majorité du trafic vient d'Instagram.
- Badges officiels App Store et Google Play, liens existants dans `src/lib/constants.ts`.
- **Vraies captures de l'app** (pas de maquettes inventées).
- **Pas de faux témoignages ni de faux chiffres.** Les 3 témoignages actuels (Sophie M., Léa D., Camille R.) et les mentions « +200 prestataires » et « 4.9/5 » disparaissent. On n'affiche pas de nombre de prestataires. Inventer des avis ou des chiffres est une pratique commerciale trompeuse (Code de la consommation, L121-2 et L121-4), et nos propres CGU interdisent les faux avis.
- Performance : page légère, images optimisées.
- Accessibilité : contrastes suffisants (attention au rose sur blanc pour le texte), textes alternatifs.
- Google Analytics déjà en place : garder le suivi des clics sur les stores.

## 9 bis. Avis à afficher

Source : App Store, relevé du 2026-11-04. Note **5,0 sur 4 évaluations**. Aucun avis inférieur à 5 étoiles.

| Pseudo | Date | Titre | Extrait utilisable |
|--------|------|-------|--------------------|
| Kays_94 | 9 juin 2026 | Un vrai gain de temps au quotidien | « Avant j'utilisais les DM WhatsApp […] c'était le chaos. […] Les clients réservent eux-mêmes, je reçois une notif et c'est tout. » |
| AlexRR098 | 17 juin 2026 | Un outil complet | « L'outil est complet, je suis toute mon activité avec. » |

Règles d'affichage :

- Citer les avis **tels quels** : couper avec « […] » si besoin, ne jamais réécrire.
- Afficher le pseudo, le store et la date, et renvoyer vers la fiche du store.
- Ne pas afficher la note seule tant qu'il y a moins d'environ 10 évaluations. Écrire plutôt « Noté 5/5 sur l'App Store ».
- **Écarter tout avis écrit par un proche ou une personne liée à Book N' Glow** (par exemple l'avis « Tab' Garcia » du 12 septembre 2026, si c'est le cas). Le présenter comme un avis client serait trompeur.
- Avis Google Play : à ajouter (Tracy les copie depuis la Play Console).

## 10. Périmètre

**Dans la refonte** :

- la page d'accueil, plus le header et le footer communs ;
- la suppression des pages **Fonctionnalités** et **Tarifs**, dont le contenu passe sur l'accueil, avec des redirections `/fonctionnalites` → `/#fonctionnalites` et `/tarifs` → `/#gratuit` ;
- la FAQ : un extrait sur l'accueil, et la page complète `/faq` gardée et réhabillée ;
- les pages Télécharger, Contact, Avis et légales : gardées, réhabillées avec la nouvelle charte.

**Hors périmètre** : une partie pour les clientes (« trouve une prestataire »). Elle viendra plus tard. La structure doit pouvoir l'accueillir : par exemple, un header qui pourra basculer entre « Pros » et « Clientes ».

## 11. À rassembler avant Claude Design

- [ ] Logo source (SVG, Figma ou Canva). À défaut : l'icône 1024 px de l'app (`book-n-glow-pro/assets/book-n-glow-icons/icon-prod-ios-1024.png`)
- [x] Captures de l'app pro et du site client, sur le compte de démo « Inès Nail Studio » (staging, données fictives) : voir `captures/` ci-dessous
- [x] Photos de couverture et de prestations pour le compte de démo
- [x] Avis réels (App Store, section 9 bis)
- [ ] Avis Google Play
- [x] Inspiration : iara (section 8 bis)
- [ ] Une photo de prestataire pour le hero (banque d'images libre de droits, ou une vraie prestataire avec son accord écrit)

### Captures (dossier `captures/`)

Compte de démo créé par `book-n-glow-backend/scripts/seed-demo-provider.sh` (staging). Toutes les données sont fictives.

| Fichier | Écran | Section de la landing |
|---------|-------|-----------------------|
| `app-01-accueil.png` | Accueil (« Tu as 4 RDV aujourd'hui », prochain RDV dans 46 min) | Hero |
| `app-02-chiffres.png` | Mes chiffres (CA du mois, RDV, avis) | Tout dans ton téléphone |
| `app-03-agenda.png` | Agenda sur 3 jours | Tout dans ton téléphone |
| `app-03b-agenda-jour.png` | Agenda du jour rempli | Tout dans ton téléphone |
| `app-11-detail-prestation.png` | Détail d'une prestation avec photos et options | Tout dans ton téléphone |
| `site-00-page-publique.jpg` | Page publique, mobile (couverture, nom, Instagram) | Côté cliente / Hero |
| `site-00-page-publique-desktop.jpg` | Page publique, ordinateur | Côté cliente |
| `site-01b-prestation-photos.jpg` | Prestation dépliée avec ses photos | Côté cliente |
| `app-04-reservations-liste.png` | Liste des rendez-vous à venir | Comment ça marche |
| `app-05-detail-rdv.png` | Détail d'un rendez-vous | Tout dans ton téléphone |
| `app-06-messagerie.png` | Conversation avec une cliente | Tout dans ton téléphone |
| `app-07-services.png` | Prestations, promo -20 % | Tout dans ton téléphone |
| `app-08-politique-annulation.png` | Délai d'annulation | Fini les lapins |
| `app-09-confirmation-presence.png` | Confirmation la veille à 20 h | Fini les lapins |
| `app-10-avis.png` | Avis clients (4,9/5) | Avis |
| `site-01-prestations.jpg` | Page publique : prestations | Côté cliente |
| `site-02-creneaux.jpg` | Choix d'un créneau | Côté cliente |
| `site-03-avis.jpg` | Avis publics | Côté cliente |

Le script place les rendez-vous du jour après l'heure de lancement : on peut le relancer à tout moment avant de refaire des captures, sans perdre la session de l'app.

**Attention aux marques visibles** : certaines photos de démo montrent des flacons de marques (O.R.Y.A, Avon, Pearl). Pour la landing finale, préférer des photos sans logo de marque tiers.

### Défauts relevés pendant les captures

- App pro : des emojis se sont affichés une fois comme des carrés dans la messagerie (simulateur, 4 novembre). Le défaut n'a pas pu être reproduit ensuite ; mis de côté.
- **Site client : image cassée** quand la prestataire n'a pas de photo de couverture (il faudrait un visuel par défaut).
- **App pro : tutoiement et vouvoiement mélangés** (« Tu as 4 RDV » sur l'accueil, « Configurez vos options » dans la politique de réservation).

## 12. Prompt de départ pour Claude Design

> Je refais la landing page de Book N' Glow, une app mobile gratuite de prise de rendez-vous pour les prestataires beauté indépendantes (coiffure, ongles, maquillage, esthétique) qui trouvent leurs clientes sur Instagram. Objectif unique : faire télécharger l'app (App Store / Google Play).
>
> Voici le brief complet : [coller les sections 3 à 9].
>
> Propose-moi 3 directions visuelles différentes pour le hero et la section « Fini les lapins », en mobile (375 px) puis en desktop. Pars de l'identité de mon app (logo joint) : noir doux, blanc, rose #ff4081 comme seul accent, titres dans une police sans empattement grasse. Inspiration : iarabeauty.com/fr/business (hero avec photo plein écran, badges des stores tout de suite visibles, cartes de fonctionnalités épurées), sans la copier. Utilise mes captures d'écran jointes dans un mockup de téléphone. Ton : tutoiement, chaleureux, phrases courtes. N'invente ni avis ni chiffres.

## Décisions (2026-11-04)

1. Preuve sociale : uniquement les vrais avis des stores (section 9 bis).
2. Pas de nombre de prestataires affiché (trop faible pour l'instant).
3. Pages Tarifs et Fonctionnalités supprimées, leur contenu passe sur l'accueil.
4. Partie clientes : hors périmètre, à prévoir plus tard.
5. Nom : « Book N' Glow » partout.
