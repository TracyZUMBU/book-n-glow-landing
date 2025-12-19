import { getProviders, type Provider } from "@/api/providers";
import Footer from "@/components/landing/Footer";
import Navigation from "@/components/landing/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";
import { useQuery } from "@tanstack/react-query";
import {
  Ban,
  Calendar,
  Copy,
  ExternalLink,
  Eye,
  Filter,
  Loader2,
  Search,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

// Composant pour afficher les providers (Desktop ou Mobile)
interface ProvidersDisplayProps {
  providers: Provider[];
  formatDate: (dateString: string | null) => string;
  getSubscriptionBadge: (type: Provider["subscriptionType"]) => JSX.Element;
  getStatusBadge: (status: Provider["subscriptionStatus"]) => JSX.Element;
  getAccountStatusBadge: (status: Provider["accountStatus"]) => JSX.Element;
  handleView: (providerId: string) => void;
  handleSuspend: (providerId: string) => void;
}

// Fonction pour copier l'ID dans le presse-papiers
const copyProviderId = async (providerId: string) => {
  try {
    await navigator.clipboard.writeText(providerId);
    toast.success("ID copié dans le presse-papiers", {
      description: providerId,
    });
  } catch (error) {
    toast.error("Erreur lors de la copie");
  }
};

const ProvidersDisplay = ({
  providers,
  formatDate,
  getSubscriptionBadge,
  getStatusBadge,
  getAccountStatusBadge,
  handleView,
  handleSuspend,
}: ProvidersDisplayProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <ProvidersListMobile
        providers={providers}
        formatDate={formatDate}
        getSubscriptionBadge={getSubscriptionBadge}
        getStatusBadge={getStatusBadge}
        getAccountStatusBadge={getAccountStatusBadge}
        handleView={handleView}
        handleSuspend={handleSuspend}
      />
    );
  }

  return (
    <ProvidersTableDesktop
      providers={providers}
      formatDate={formatDate}
      getSubscriptionBadge={getSubscriptionBadge}
      getStatusBadge={getStatusBadge}
      getAccountStatusBadge={getAccountStatusBadge}
      handleView={handleView}
      handleSuspend={handleSuspend}
    />
  );
};

// Composant Table Desktop
const ProvidersTableDesktop = ({
  providers,
  formatDate,
  getSubscriptionBadge,
  getStatusBadge,
  getAccountStatusBadge,
  handleView,
  handleSuspend,
}: ProvidersDisplayProps) => {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Prénom & Nom</TableHead>
                <TableHead className="font-semibold">Abonnement</TableHead>
                <TableHead className="font-semibold">Statut abo.</TableHead>
                <TableHead className="font-semibold">Période d'essai</TableHead>
                <TableHead className="font-semibold">Création</TableHead>
                <TableHead className="font-semibold">Début abo.</TableHead>
                <TableHead className="font-semibold">Instagram</TableHead>
                <TableHead className="font-semibold">Compte</TableHead>
                <TableHead className="font-semibold text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {providers.map((provider) => (
                <TableRow
                  key={provider.id}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <span>
                        {provider.firstName} {provider.lastName}
                      </span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              onClick={() => copyProviderId(provider.id)}
                              className="p-1 rounded hover:bg-muted transition-colors"
                              aria-label="Copier l'ID du provider"
                            >
                              <Copy className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="font-mono text-xs">{provider.id}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getSubscriptionBadge(provider.subscriptionType)}
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(provider.subscriptionStatus)}
                  </TableCell>
                  <TableCell>
                    {provider.isTrialing ? (
                      <div className="space-y-1">
                        <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                          Oui
                        </Badge>
                        <p className="text-xs text-muted-foreground">
                          Fin : {formatDate(provider.trialEndDate)}
                        </p>
                      </div>
                    ) : (
                      <span className="text-muted-foreground">Non</span>
                    )}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDate(provider.createdAt)}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDate(provider.subscriptionStartDate)}
                  </TableCell>
                  <TableCell>
                    {provider.instagramHandle ? (
                      <a
                        href={`https://instagram.com/${provider.instagramHandle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:text-primary/80 hover:underline transition-colors"
                      >
                        @{provider.instagramHandle}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {getAccountStatusBadge(provider.accountStatus)}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleView(provider.id)}
                        className="h-8"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Voir
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSuspend(provider.id)}
                        className="h-8 text-orange-600 hover:text-orange-700 hover:bg-orange-50 border-orange-200"
                      >
                        <Ban className="h-4 w-4 mr-1" />
                        Suspendre
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

// Composant Liste Mobile avec Cartes
const ProvidersListMobile = ({
  providers,
  formatDate,
  getSubscriptionBadge,
  getStatusBadge,
  getAccountStatusBadge,
  handleView,
  handleSuspend,
}: ProvidersDisplayProps) => {
  return (
    <div className="space-y-4">
      {providers.map((provider) => (
        <Card key={provider.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            {/* Header avec nom */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-semibold text-lg">
                  {provider.firstName} {provider.lastName}
                </h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => copyProviderId(provider.id)}
                        className="p-1.5 rounded hover:bg-muted transition-colors"
                        aria-label="Copier l'ID du provider"
                      >
                        <Copy className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-mono text-xs">{provider.id}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              {/* Badges avec labels */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground min-w-[100px]">
                    Abonnement:
                  </span>
                  {getSubscriptionBadge(provider.subscriptionType)}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground min-w-[100px]">
                    Statut abo.:
                  </span>
                  {getStatusBadge(provider.subscriptionStatus)}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground min-w-[100px]">
                    Compte:
                  </span>
                  {getAccountStatusBadge(provider.accountStatus)}
                </div>
              </div>
            </div>

            {/* Informations principales */}
            <div className="space-y-3 mb-4">
              {/* Instagram */}
              {provider.instagramHandle && (
                <div className="flex items-center gap-2 text-sm">
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`https://instagram.com/${provider.instagramHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @{provider.instagramHandle}
                  </a>
                </div>
              )}

              {/* Période d'essai */}
              {provider.isTrialing && (
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Essai jusqu'au {formatDate(provider.trialEndDate)}
                  </span>
                </div>
              )}

              {/* Dates */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs mb-1">Création</p>
                  <p className="font-medium">
                    {formatDate(provider.createdAt)}
                  </p>
                </div>
                {provider.subscriptionStartDate && (
                  <div>
                    <p className="text-muted-foreground text-xs mb-1">
                      Début abonnement
                    </p>
                    <p className="font-medium">
                      {formatDate(provider.subscriptionStartDate)}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-3 border-t">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleView(provider.id)}
                className="flex-1"
              >
                <Eye className="h-4 w-4 mr-2" />
                Voir
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSuspend(provider.id)}
                className="flex-1 text-orange-600 hover:text-orange-700 hover:bg-orange-50 border-orange-200"
              >
                <Ban className="h-4 w-4 mr-2" />
                Suspendre
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const AdminProviders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [subscriptionFilter, setSubscriptionFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [trialFilter, setTrialFilter] = useState<string>("all");

  // Récupération des providers depuis Supabase
  const {
    data: providers = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["providers"],
    queryFn: getProviders,
  });

  // Filter logic
  const filteredProviders = useMemo(() => {
    return providers.filter((provider) => {
      const matchesSearch =
        searchQuery === "" ||
        provider.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (provider.instagramHandle &&
          provider.instagramHandle
            .toLowerCase()
            .includes(searchQuery.toLowerCase()));

      const matchesSubscription =
        subscriptionFilter === "all" ||
        provider.subscriptionType === subscriptionFilter;

      const matchesStatus =
        statusFilter === "all" || provider.accountStatus === statusFilter;

      const matchesTrial =
        trialFilter === "all" ||
        (trialFilter === "yes" && provider.isTrialing) ||
        (trialFilter === "no" && !provider.isTrialing);

      return (
        matchesSearch && matchesSubscription && matchesStatus && matchesTrial
      );
    });
  }, [providers, searchQuery, subscriptionFilter, statusFilter, trialFilter]);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getSubscriptionBadge = (type: Provider["subscriptionType"]) => {
    return type === "premium" ? (
      <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
        Premium
      </Badge>
    ) : (
      <Badge variant="secondary">Basic</Badge>
    );
  };

  const getStatusBadge = (status: Provider["subscriptionStatus"]) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20">
            Actif
          </Badge>
        );
      case "trialing":
        return (
          <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20 hover:bg-blue-500/20">
            Essai
          </Badge>
        );
      case "canceled":
        return (
          <Badge className="bg-red-500/10 text-red-600 border-red-500/20 hover:bg-red-500/20">
            Annulé
          </Badge>
        );
    }
  };

  const getAccountStatusBadge = (status: Provider["accountStatus"]) => {
    return status === "active" ? (
      <Badge className="bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20">
        Actif
      </Badge>
    ) : (
      <Badge className="bg-orange-500/10 text-orange-600 border-orange-500/20 hover:bg-orange-500/20">
        Suspendu
      </Badge>
    );
  };

  // Action handlers
  const handleView = (providerId: string) => {
    console.log("View provider:", providerId);
    // TODO: Navigate to provider detail page or open modal
  };

  const handleSuspend = (providerId: string) => {
    console.log("Suspend provider:", providerId);
    // TODO: Call Supabase to update account status (à implémenter plus tard)
  };

  // État de chargement
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container-mobile py-8 md:py-12">
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-muted-foreground">
                Chargement des prestataires...
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // État d'erreur
  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container-mobile py-8 md:py-12">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <p className="text-red-600 mb-2">
                  Erreur lors du chargement des prestataires
                </p>
                <p className="text-sm text-muted-foreground">
                  {error instanceof Error
                    ? error.message
                    : "Une erreur inconnue s'est produite"}
                </p>
                <p className="text-xs text-muted-foreground mt-4">
                  Veuillez vérifier votre connexion Supabase et réessayer.
                </p>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container-mobile py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Prestataires
            </h1>
          </div>
          <p className="text-muted-foreground">
            Monitoring et gestion des comptes prestataires
          </p>
        </div>

        {/* Filters Card */}
        <Card className="mb-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtres
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher (nom, prénom, Instagram)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Subscription Type Filter */}
              <Select
                value={subscriptionFilter}
                onValueChange={setSubscriptionFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Type d'abonnement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les abonnements</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>

              {/* Account Status Filter */}
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Statut du compte" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  <SelectItem value="active">Actif</SelectItem>
                  <SelectItem value="suspended">Suspendu</SelectItem>
                </SelectContent>
              </Select>

              {/* Trial Filter */}
              <Select value={trialFilter} onValueChange={setTrialFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Période d'essai" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les périodes</SelectItem>
                  <SelectItem value="yes">En période d'essai</SelectItem>
                  <SelectItem value="no">Hors période d'essai</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results count */}
        <div className="mb-4 text-sm text-muted-foreground">
          {filteredProviders.length} prestataire
          {filteredProviders.length > 1 ? "s" : ""} trouvé
          {filteredProviders.length > 1 ? "s" : ""}
        </div>

        {/* Desktop Table / Mobile Cards */}
        {filteredProviders.length === 0 ? (
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8 text-muted-foreground">
                Aucun prestataire trouvé avec ces critères.
              </div>
            </CardContent>
          </Card>
        ) : (
          <ProvidersDisplay
            providers={filteredProviders}
            formatDate={formatDate}
            getSubscriptionBadge={getSubscriptionBadge}
            getStatusBadge={getStatusBadge}
            getAccountStatusBadge={getAccountStatusBadge}
            handleView={handleView}
            handleSuspend={handleSuspend}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AdminProviders;
