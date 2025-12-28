import { getProviders, type Provider } from "@/api/providers";
import Footer from "@/components/landing/Footer";
import Navigation from "@/components/landing/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  Calendar,
  Copy,
  ExternalLink,
  Filter,
  Loader2,
  Lock,
  Search,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

// Composant pour afficher les providers (Desktop ou Mobile)
interface ProvidersDisplayProps {
  providers: Provider[];
  formatDate: (dateString: string | null) => string;
  getSubscriptionBadge: (type: Provider["subscriptionType"]) => JSX.Element;
  getStatusBadge: (status: Provider["subscriptionStatus"]) => JSX.Element;
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
}: ProvidersDisplayProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <ProvidersListMobile
        providers={providers}
        formatDate={formatDate}
        getSubscriptionBadge={getSubscriptionBadge}
        getStatusBadge={getStatusBadge}
      />
    );
  }

  return (
    <ProvidersTableDesktop
      providers={providers}
      formatDate={formatDate}
      getSubscriptionBadge={getSubscriptionBadge}
      getStatusBadge={getStatusBadge}
    />
  );
};

// Composant Table Desktop
const ProvidersTableDesktop = ({
  providers,
  formatDate,
  getSubscriptionBadge,
  getStatusBadge,
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
                <TableHead className="font-semibold">
                  Lien de réservation
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
                    {provider.slug ? (
                      <a
                        href={`https://app.book-n-glow.fr/prestataire-page/${provider.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:text-primary/80 hover:underline transition-colors"
                      >
                        Voir la page
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
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

              {/* Lien de réservation */}
              {provider.slug && (
                <div className="flex items-center gap-2 text-sm">
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  <a
                    href={`https://app.book-n-glow.fr/${provider.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Voir la page de réservation
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
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const AdminProviders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [subscriptionFilter, setSubscriptionFilter] = useState<string>("all");
  const [trialFilter, setTrialFilter] = useState<string>("all");

  // Protection d'accès
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Vérifie si l'utilisateur est déjà authentifié (stocké dans sessionStorage)
    return sessionStorage.getItem("admin_providers_authenticated") === "true";
  });
  const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(!isAuthenticated);

  // Vérifie l'authentification au montage du composant
  useEffect(() => {
    if (!isAuthenticated) {
      setIsDialogOpen(true);
    }
  }, [isAuthenticated]);

  // Fonction pour vérifier le code d'accès
  const handleAccessCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const correctCode = import.meta.env.VITE_ADMIN_PROVIDERS_PAGE_ACCESS;

    if (!correctCode) {
      setError(
        "Code d'accès non configuré. Veuillez contacter l'administrateur."
      );
      return;
    }

    if (accessCode.trim() === correctCode) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_providers_authenticated", "true");
      setIsDialogOpen(false);
      toast.success("Accès autorisé");
    } else {
      setError("Code d'accès incorrect");
      setAccessCode("");
    }
  };

  // Récupération des providers depuis Supabase
  const {
    data: providers = [],
    isLoading,
    error: providersError,
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

      const matchesTrial =
        trialFilter === "all" ||
        (trialFilter === "yes" && provider.isTrialing) ||
        (trialFilter === "no" && !provider.isTrialing);

      return matchesSearch && matchesSubscription && matchesTrial;
    });
  }, [providers, searchQuery, subscriptionFilter, trialFilter]);

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

  // Si non authentifié, afficher uniquement la modal
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <DialogTitle>Accès restreint</DialogTitle>
              </div>
              <DialogDescription>
                Veuillez saisir le code d'accès pour accéder à cette page.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAccessCodeSubmit}>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="access-code">Code d'accès</Label>
                  <Input
                    id="access-code"
                    type="password"
                    value={accessCode}
                    onChange={(e) => {
                      setAccessCode(e.target.value);
                      setError("");
                    }}
                    placeholder="Entrez le code d'accès"
                    className={error ? "border-red-500" : ""}
                    autoFocus
                  />
                  {error && <p className="text-sm text-red-600">{error}</p>}
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Valider</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        <Footer />
      </div>
    );
  }

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
  if (providersError) {
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
                  {providersError instanceof Error
                    ? providersError.message
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AdminProviders;
