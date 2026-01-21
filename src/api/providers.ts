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
  email: string;
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
    email: provider.email || null,
    subscriptionType,
    subscriptionStatus,
    isTrialing,
    trialEndDate,
    createdAt: provider.created_at,
    subscriptionStartDate,
    instagramHandle: provider.instagram_name || null,
    accountStatus,
    slug: provider.slug || null,
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
    requiresCustomerConfirmation:
      provider.requires_customer_confirmation ?? false,
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

export interface ProviderDailyTimeRange {
  id: number;
  startTime: string;
  endTime: string;
}

export interface ProviderDailyAvailability {
  id: number;
  date: string;
  isClosed: boolean;
  timeRanges: ProviderDailyTimeRange[];
}

export interface ProviderUnavailability {
  id: string;
  startDatetime: string;
  endDatetime: string;
  reason: string | null;
}

/**
 * Récupère les disponibilités quotidiennes d'un prestataire
 * avec leurs créneaux horaires
 */
export async function getProviderDailyAvailabilities(
  providerId: string,
  startDate?: string,
  endDate?: string
): Promise<ProviderDailyAvailability[]> {
  // Construire la requête de base
  let query = supabase
    .from("provider_daily_availabilities")
    .select("*")
    .eq("provider_id", providerId);

  // Ajouter les filtres de date si fournis
  if (startDate) {
    query = query.gte("date", startDate);
  }
  if (endDate) {
    query = query.lte("date", endDate);
  }

  const { data: availabilities, error: availabilitiesError } = await query
    .order("date", { ascending: true });

  if (availabilitiesError) {
    console.error("Error fetching daily availabilities:", availabilitiesError);
    throw new Error(
      `Failed to fetch daily availabilities: ${availabilitiesError.message}`
    );
  }

  if (!availabilities || availabilities.length === 0) {
    return [];
  }

  // Récupérer les créneaux horaires pour chaque disponibilité
  const availabilityIds = availabilities.map((a) => a.id);
  const { data: timeRanges, error: timeRangesError } = await supabase
    .from("provider_daily_time_ranges")
    .select("*")
    .in("daily_availability_id", availabilityIds)
    .order("start_time", { ascending: true });

  if (timeRangesError) {
    console.error("Error fetching time ranges:", timeRangesError);
    throw new Error(
      `Failed to fetch time ranges: ${timeRangesError.message}`
    );
  }

  // Grouper les créneaux par disponibilité
  const timeRangesMap = new Map<number, ProviderDailyTimeRange[]>();
  if (timeRanges) {
    timeRanges.forEach((tr) => {
      const existing = timeRangesMap.get(tr.daily_availability_id) || [];
      existing.push({
        id: tr.id,
        startTime: tr.start_time,
        endTime: tr.end_time,
      });
      timeRangesMap.set(tr.daily_availability_id, existing);
    });
  }

  // Combiner les données
  return availabilities.map((availability) => ({
    id: availability.id,
    date: availability.date,
    isClosed: availability.is_closed,
    timeRanges: timeRangesMap.get(availability.id) || [],
  }));
}

/**
 * Récupère les périodes d'indisponibilité d'un prestataire
 */
export async function getProviderUnavailabilities(
  providerId: string
): Promise<ProviderUnavailability[]> {
  const { data, error } = await supabase
    .from("provider_unavailabilities")
    .select("*")
    .eq("provider_id", providerId)
    .order("start_datetime", { ascending: true });

  if (error) {
    console.error("Error fetching unavailabilities:", error);
    throw new Error(`Failed to fetch unavailabilities: ${error.message}`);
  }

  if (!data || data.length === 0) {
    return [];
  }

  return data.map((unavailability) => ({
    id: unavailability.id,
    startDatetime: unavailability.start_datetime,
    endDatetime: unavailability.end_datetime,
    reason: unavailability.reason || null,
  }));
}

/**
 * Récupère un prestataire par son ID avec tous ses détails
 */
export async function getProviderById(providerId: string): Promise<Provider | null> {
  const { data: provider, error: providerError } = await supabase
    .from("providers")
    .select("*")
    .eq("id", providerId)
    .eq("is_demo", false)
    .single();

  if (providerError) {
    console.error("Error fetching provider:", providerError);
    throw new Error(`Failed to fetch provider: ${providerError.message}`);
  }

  if (!provider) {
    return null;
  }

  // Récupère l'abonnement
  const { data: subscription } = await supabase
    .from("stripe_subscriptions")
    .select("*")
    .eq("provider_id", providerId)
    .single();

  // Récupère les services
  const { data: services } = await supabase
    .from("services")
    .select("id, name, provider_id")
    .eq("provider_id", providerId);

  const servicesList: ProviderService[] =
    services?.map((s) => ({ id: String(s.id), name: s.name })) || [];

  return transformProvider(provider, subscription || null, servicesList);
}
