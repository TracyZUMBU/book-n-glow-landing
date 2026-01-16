import type { Tables } from "@/lib/database.types";
import { supabase } from "@/lib/supabase";

type ProviderRow = Tables<"providers">;
type SubscriptionRow = Tables<"stripe_subscriptions">;

export interface ProviderService {
  id: string;
  name: string;
}

export interface Provider {
  id: string;
  firstName: string;
  lastName: string;
  subscriptionType: "basic" | "premium";
  subscriptionStatus: "trialing" | "active" | "canceled";
  isTrialing: boolean;
  trialEndDate: string | null;
  createdAt: string;
  subscriptionStartDate: string | null;
  instagramHandle: string | null;
  accountStatus: "active" | "suspended";
  slug: string | null;
  // Nouveaux champs pour les détails
  city: string | null;
  bio: string | null;
  companyName: string | null;
  allowCancellation: boolean;
  cancellationDeadlineHours: number | null;
  paymentMethod: string | null;
  depositAmount: number | null;
  depositRequired: boolean;
  depositType: string | null;
  paypalAccount: string | null;
  onboardingStatus: string | null;
  requiresCustomerConfirmation: boolean;
  services: ProviderService[];
}

/**
 * Transforme les données Supabase en format Provider
 */
function transformProvider(
  provider: ProviderRow,
  subscription: SubscriptionRow | null,
  services: ProviderService[] = []
): Provider {
  // Détermine le type d'abonnement depuis le plan
  const subscriptionType: "basic" | "premium" =
    subscription?.plan === "premium" ? "premium" : "basic";

  // Détermine le statut de l'abonnement
  let subscriptionStatus: "trialing" | "active" | "canceled" = "canceled";
  if (subscription) {
    if (subscription.status === "trialing") {
      subscriptionStatus = "trialing";
    } else if (subscription.status === "active") {
      subscriptionStatus = "active";
    } else if (subscription.status === "canceled" || subscription.canceled_at) {
      subscriptionStatus = "canceled";
    }
  }

  // Détermine si en période d'essai
  const isTrialing = subscriptionStatus === "trialing";
  const trialEndDate = subscription?.trial_end || null;

  // Date de début d'abonnement
  const subscriptionStartDate = subscription?.current_period_start || null;

  // Statut du compte (pour l'instant, on considère tous les comptes comme actifs)
  const accountStatus: "active" | "suspended" = "active";

  return {
    id: provider.id,
    firstName: provider.first_name,
    lastName: provider.last_name,
    subscriptionType,
    subscriptionStatus,
    isTrialing,
    trialEndDate,
    createdAt: provider.created_at,
    subscriptionStartDate,
    instagramHandle: provider.instagram_name || null,
    accountStatus,
    slug: provider.slug || null,
    // Nouveaux champs
    city: provider.city || null,
    bio: provider.bio || null,
    companyName: provider.company_name || null,
    allowCancellation: provider.allow_cancellation ?? false,
    cancellationDeadlineHours: provider.cancellation_deadline_hours || null,
    paymentMethod: provider.payment_method || null,
    depositAmount: provider.deposit_amount || null,
    depositRequired: provider.deposit_required ?? false,
    depositType: provider.deposit_type || null,
    paypalAccount: provider.paypal_account || null,
    onboardingStatus: provider.onboarding_status || null,
    requiresCustomerConfirmation: provider.requires_customer_confirmation ?? false,
    services,
  };
}

/**
 * Récupère tous les providers depuis Supabase avec leurs abonnements et services
 * Exclut les providers avec is_demo = true (comptes de test)
 */
export async function getProviders(): Promise<Provider[]> {
  // Récupère les providers (exclut les comptes de démo)
  const { data: providers, error: providersError } = await supabase
    .from("providers")
    .select("*")
    .eq("is_demo", false)
    .order("created_at", { ascending: false });

  if (providersError) {
    console.error("Error fetching providers:", providersError);
    throw new Error(`Failed to fetch providers: ${providersError.message}`);
  }

  if (!providers || providers.length === 0) {
    return [];
  }

  // Récupère les abonnements pour tous les providers
  const providerIds = providers.map((p) => p.id);
  const { data: subscriptions, error: subscriptionsError } = await supabase
    .from("stripe_subscriptions")
    .select("*")
    .in("provider_id", providerIds);

  if (subscriptionsError) {
    console.error("Error fetching subscriptions:", subscriptionsError);
  }

  // Récupère les services pour tous les providers
  const { data: allServices, error: servicesError } = await supabase
    .from("services")
    .select("id, name, provider_id")
    .in("provider_id", providerIds);

  if (servicesError) {
    console.error("Error fetching services:", servicesError);
  }

  // Crée un map pour accéder rapidement aux abonnements par provider_id
  const subscriptionMap = new Map<string, SubscriptionRow>();
  if (subscriptions) {
    subscriptions.forEach((sub) => {
      subscriptionMap.set(sub.provider_id, sub);
    });
  }

  // Crée un map pour accéder rapidement aux services par provider_id
  const servicesMap = new Map<string, ProviderService[]>();
  if (allServices) {
    allServices.forEach((service) => {
      const existing = servicesMap.get(service.provider_id) || [];
      existing.push({ id: String(service.id), name: service.name });
      servicesMap.set(service.provider_id, existing);
    });
  }

  // Transforme les données
  return providers.map((provider) => {
    const subscription = subscriptionMap.get(provider.id) || null;
    const services = servicesMap.get(provider.id) || [];
    return transformProvider(provider, subscription, services);
  });
}
