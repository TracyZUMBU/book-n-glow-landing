import {
  getProviderById,
  getProviderDailyAvailabilities,
  getProviderUnavailabilities,
} from "@/api/providers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import {
  ArrowLeft,
  Ban,
  Building2,
  Calendar,
  Check,
  Clock,
  CreditCard,
  Loader2,
  Mail,
  MapPin,
  Scissors,
  Settings,
  UserCheck,
  X
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const WEEKDAYS = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

export default function AdminProviderDetail() {
  const { providerId } = useParams<{ providerId: string }>();
  const navigate = useNavigate();

  // Récupération du prestataire
  const {
    data: provider,
    isLoading: isLoadingProvider,
    error: providerError,
  } = useQuery({
    queryKey: ["provider", providerId],
    queryFn: () => getProviderById(providerId!),
    enabled: !!providerId,
  });

  // Récupération des disponibilités (30 derniers jours)
  const startDate = format(new Date(), "yyyy-MM-dd");
  const endDate = format(
    new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    "yyyy-MM-dd"
  );

  const {
    data: availabilities = [],
    isLoading: isLoadingAvailabilities,
  } = useQuery({
    queryKey: ["provider-availabilities", providerId, startDate, endDate],
    queryFn: () =>
      getProviderDailyAvailabilities(providerId!, startDate, endDate),
    enabled: !!providerId,
  });

  // Récupération des indisponibilités
  const {
    data: unavailabilities = [],
    isLoading: isLoadingUnavailabilities,
  } = useQuery({
    queryKey: ["provider-unavailabilities", providerId],
    queryFn: () => getProviderUnavailabilities(providerId!),
    enabled: !!providerId,
  });

  if (isLoadingProvider) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center py-20">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">
              Chargement des informations du prestataire...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (providerError || !provider) {
    return (
      <div className="p-6">
        <Button variant="outline" onClick={() => navigate("/admin/prestataires")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour
        </Button>
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Prestataire non trouvé ou erreur lors du chargement
          </p>
        </div>
      </div>
    );
  }

  const getPaymentMethodLabel = (method: string | null) => {
    switch (method) {
      case "stripe":
        return "Stripe";
      case "paypal_me":
        return "PayPal.me";
      case "on_site":
        return "Sur place";
      case "free":
        return "Gratuit";
      default:
        return method || "Non défini";
    }
  };

  const getOnboardingStatusBadge = (status: string | null) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
            Terminé
          </Badge>
        );
      case "in_progress":
        return (
          <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
            En cours
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-orange-500/10 text-orange-600 border-orange-500/20">
            En attente
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status || "Non défini"}</Badge>;
    }
  };

  const getSubscriptionBadge = (type: "basic" | "premium") => {
    return type === "premium" ? (
      <Badge className="bg-primary/10 text-primary border-primary/20">
        Premium
      </Badge>
    ) : (
      <Badge variant="secondary">Basic</Badge>
    );
  };

  const getStatusBadge = (status: "trialing" | "active" | "canceled") => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
            Actif
          </Badge>
        );
      case "trialing":
        return (
          <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">
            Essai
          </Badge>
        );
      case "canceled":
        return (
          <Badge className="bg-red-500/10 text-red-600 border-red-500/20">
            Annulé
          </Badge>
        );
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const DetailRow = ({
    icon: Icon,
    label,
    value,
    valueElement,
  }: {
    icon: React.ElementType;
    label: string;
    value?: string | null;
    valueElement?: React.ReactNode;
  }) => (
    <div className="flex items-start gap-3 py-2">
      <Icon className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-muted-foreground">{label}</p>
        {valueElement || (
          <p className="text-sm font-medium truncate">{value || "—"}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/prestataires")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
          <div>
            <h1 className="text-2xl font-serif font-bold">
              {provider.firstName} {provider.lastName}
            </h1>
            <p className="text-muted-foreground font-mono text-sm">
              {provider.id}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {getSubscriptionBadge(provider.subscriptionType)}
          {getStatusBadge(provider.subscriptionStatus)}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Colonne gauche - Informations générales */}
        <div className="space-y-6">
          {/* Informations générales */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-primary" />
                Informations générales
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <DetailRow icon={MapPin} label="Ville" value={provider.city} />
              <DetailRow
                icon={Mail}
                label="Adresse email"
                value={provider.email}
              />
              <DetailRow
                icon={Building2}
                label="Nom de l'entreprise"
                value={provider.companyName}
              />
              {provider.bio && (
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground mb-1">Bio</p>
                  <p className="text-sm bg-muted/50 p-3 rounded-lg">
                    {provider.bio}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <DetailRow
                icon={Settings}
                label="Status onboarding"
                valueElement={getOnboardingStatusBadge(
                  provider.onboardingStatus
                )}
              />
              <DetailRow
                icon={UserCheck}
                label="Confirmation client requise"
                valueElement={
                  provider.requiresCustomerConfirmation ? (
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                      <Check className="h-3 w-3 mr-1" />
                      Oui
                    </Badge>
                  ) : (
                    <Badge variant="secondary">
                      <X className="h-3 w-3 mr-1" />
                      Non
                    </Badge>
                  )
                }
              />
            </CardContent>
          </Card>

          {/* Politique d'annulation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ban className="h-5 w-5 text-primary" />
                Politique d'annulation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <DetailRow
                icon={Ban}
                label="Annulations autorisées"
                valueElement={
                  provider.allowCancellation ? (
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                      <Check className="h-3 w-3 mr-1" />
                      Oui
                    </Badge>
                  ) : (
                    <Badge className="bg-red-500/10 text-red-600 border-red-500/20">
                      <X className="h-3 w-3 mr-1" />
                      Non
                    </Badge>
                  )
                }
              />
              {provider.allowCancellation && (
                <DetailRow
                  icon={Clock}
                  label="Délai d'annulation"
                  value={
                    provider.cancellationDeadlineHours
                      ? `${provider.cancellationDeadlineHours}h avant le RDV`
                      : null
                  }
                />
              )}
            </CardContent>
          </Card>

          {/* Paiement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Paiement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <DetailRow
                icon={CreditCard}
                label="Méthode de paiement"
                value={getPaymentMethodLabel(provider.paymentMethod)}
              />
              {provider.depositRequired && (
                <DetailRow
                  icon={CreditCard}
                  label="Acompte requis"
                  value={
                    provider.depositType === "percentage"
                      ? `${provider.depositAmount}%`
                      : provider.depositAmount
                      ? `${provider.depositAmount}€`
                      : "Oui"
                  }
                />
              )}
              {provider.paymentMethod === "paypal_me" && (
                <DetailRow
                  icon={CreditCard}
                  label="Lien PayPal.me"
                  value={provider.paypalAccount}
                />
              )}
            </CardContent>
          </Card>

          {/* Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scissors className="h-5 w-5 text-primary" />
                Services ({provider.services.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {provider.services.length > 0 ? (
                <div className="space-y-2">
                  {provider.services.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Scissors className="h-4 w-4 text-muted-foreground" />
                      <span>{service.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-4">
                  Aucun service configuré
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Colonne droite - Disponibilités */}
        <div className="space-y-6">
          {/* Disponibilités quotidiennes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Horaires de disponibilité
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoadingAvailabilities ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                </div>
              ) : availabilities.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  Aucune disponibilité configurée pour les 30 prochains jours
                </p>
              ) : (
                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                  {availabilities.map((availability) => {
                    const date = parseISO(availability.date);
                    const weekday = date.getDay();
                    const weekdayName = WEEKDAYS[weekday];

                    return (
                      <div
                        key={availability.id}
                        className="border rounded-lg p-4 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">
                              {format(date, "EEEE d MMMM yyyy", { locale: fr })}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {weekdayName}
                            </p>
                          </div>
                          {availability.isClosed && (
                            <Badge
                              variant="destructive"
                              className="text-xs"
                            >
                              Fermé
                            </Badge>
                          )}
                        </div>
                        {!availability.isClosed &&
                          availability.timeRanges.length > 0 && (
                            <div className="space-y-1">
                              {availability.timeRanges.map((range) => (
                                <div
                                  key={range.id}
                                  className="flex items-center gap-2 text-sm bg-muted/50 px-3 py-1.5 rounded"
                                >
                                  <Clock className="h-3 w-3 text-muted-foreground" />
                                  <span>
                                    {range.startTime} - {range.endTime}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        {!availability.isClosed &&
                          availability.timeRanges.length === 0 && (
                            <p className="text-sm text-muted-foreground italic">
                              Aucun créneau horaire défini
                            </p>
                          )}
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Périodes d'indisponibilité */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ban className="h-5 w-5 text-primary" />
                Périodes d'indisponibilité
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoadingUnavailabilities ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                </div>
              ) : unavailabilities.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  Aucune période d'indisponibilité configurée
                </p>
              ) : (
                <div className="space-y-3 max-h-[400px] overflow-y-auto">
                  {unavailabilities.map((unavailability) => {
                    const startDate = parseISO(unavailability.startDatetime);
                    const endDate = parseISO(unavailability.endDatetime);

                    return (
                      <div
                        key={unavailability.id}
                        className="border rounded-lg p-4 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">
                              {format(startDate, "d MMM yyyy", { locale: fr })}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {format(startDate, "HH:mm", { locale: fr })} -{" "}
                              {format(endDate, "HH:mm d MMM yyyy", {
                                locale: fr,
                              })}
                            </p>
                          </div>
                        </div>
                        {unavailability.reason && (
                          <p className="text-sm text-muted-foreground italic">
                            {unavailability.reason}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
