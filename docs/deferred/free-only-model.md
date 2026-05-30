# Report — passage au modèle 100 % gratuit

> Branche : `feat/free-only-model`
> Date : mai 2026

Ce document liste ce qui est **reporté** (volontairement non supprimé) dans l'itération actuelle, et qui devra être nettoyé une fois l'**app mobile Book N' Glow** publiée.

## Contexte

Le site `app.book-n-glow.fr` bascule sur un modèle **100 % gratuit** :

- plus d'abonnement payant ;
- plus de paiement bancaire (Stripe) intégré, seulement **sur place** ou **PayPal.me** ;
- plus de programme de carte de fidélité ;
- l'inscription et la gestion du compte prestataire migrent vers une **application mobile** ;
- le site web ne servira à terme qu'à : landing publique, profil presta public, page de réservation, connexion client.

Toutes les briques liées aux features retirées (paiement Stripe, fidélité, abonnement) sont **conservées sur disque** pour pouvoir être réactivées plus tard, sans toucher à la base Supabase.

## Reports — code à supprimer après release de l'app mobile

### Routes encore actives en interne (à supprimer du `App.tsx`)

- `/prestataire/*` (dashboard prestataire complet)
- `/profil/:id` (profil public — à confirmer selon la stratégie mobile)
- Toute la zone `src/pages/Provider*.tsx`

### Composants et pages conservés sur disque mais plus utilisés (à supprimer)

- `src/components/landing/SubscriptionSelection.tsx`
- `src/components/onboarding/SubscriptionStep.tsx`
- `src/components/onboarding/PaymentStep.tsx`
- `src/components/onboarding/CompanyInfoStep.tsx` (à vérifier)
- `src/components/onboarding/PersonalInfoStep.tsx` (à vérifier)
- `src/components/onboarding/BookingSettingsStep.tsx` (à vérifier)
- `src/components/onboarding/OnboardingProgress.tsx` (à vérifier)
- `src/components/loyalty/LoyaltySettingsForm.tsx`
- `src/pages/ClientLoyalty.tsx`
- `src/pages/PaymentDeposit.tsx`
- `src/pages/PaymentSuccess.tsx`
- `src/pages/ProviderOnboarding.tsx`
- Toutes les pages admin (`src/pages/admin/*` + `src/pages/AdminProviders.tsx`)
- `src/components/dashboard/AdminSidebar.tsx`

### Sections de contenu commentées en JSX (à réactiver / supprimer selon décision)

- `src/pages/CGU.tsx` : section 20 (Paiements par carte bancaire via Stripe), section 21 (Programme de carte de fidélité), paragraphes inline mentionnant l'abonnement payant. **Numérotation** : « Contact » est passé temporairement de « 22 » à « 20 ». À restaurer en « 22 » lors de la réactivation des sections 20 et 21 (drapeau `SHOW_DEPRECATED_SECTIONS` à `true` dans `CGU.tsx`).
- `src/pages/FAQ.tsx` : items obsolètes commentés dans `faqData`.

### Base de données Supabase

Aucune modification dans cette itération. Tables conservées pour réactivation :

- `stripe_subscriptions`, `stripe_accounts`
- `booking_payments`, `booking_refunds`, `booking_transfers`
- `loyalty_card_accounts`, `loyalty_card_programs`, `loyalty_card_rewards`, `loyalty_card_transactions`, `loyalty_card_program_services`
- Colonnes côté `bookings` : `deposit_amount_due`, `stripe_payment_intent_id`, `loyalty_discount_amount`, `loyalty_eligible`
- Colonnes côté `providers` : `deposit_required`, `deposit_type`, `deposit_amount`

À évaluer lors d'une future migration une fois la stratégie produit stabilisée.

## À faire au moment de la release de l'app mobile

1. Remplacer le placeholder du CTA « Télécharger l'app » par le vrai lien (App Store / Play Store).
2. Supprimer définitivement les fichiers listés ci-dessus.
3. Supprimer les routes presta/admin du `App.tsx`.
4. Réviser CGU et FAQ : décider entre suppression définitive des sections commentées ou réactivation partielle.
5. Statuer sur les tables Supabase obsolètes (migration de suppression vs conservation).
