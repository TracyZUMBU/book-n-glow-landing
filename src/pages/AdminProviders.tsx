import { useState, useMemo } from "react";
import { Search, Filter, Eye, Ban, ExternalLink, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";

// Types for future Supabase integration
interface Provider {
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
}

// Fake data - easily replaceable with Supabase query
const fakeProviders: Provider[] = [
  {
    id: "1",
    firstName: "Marie",
    lastName: "Dupont",
    subscriptionType: "premium",
    subscriptionStatus: "active",
    isTrialing: false,
    trialEndDate: null,
    createdAt: "2024-03-15",
    subscriptionStartDate: "2024-03-15",
    instagramHandle: "marie.beauty",
    accountStatus: "active",
  },
  {
    id: "2",
    firstName: "Sophie",
    lastName: "Martin",
    subscriptionType: "basic",
    subscriptionStatus: "trialing",
    isTrialing: true,
    trialEndDate: "2025-01-15",
    createdAt: "2024-12-01",
    subscriptionStartDate: null,
    instagramHandle: "sophie_nails",
    accountStatus: "active",
  },
  {
    id: "3",
    firstName: "Emma",
    lastName: "Bernard",
    subscriptionType: "premium",
    subscriptionStatus: "canceled",
    isTrialing: false,
    trialEndDate: null,
    createdAt: "2024-01-20",
    subscriptionStartDate: "2024-01-20",
    instagramHandle: "emma.hair.studio",
    accountStatus: "suspended",
  },
  {
    id: "4",
    firstName: "Léa",
    lastName: "Petit",
    subscriptionType: "basic",
    subscriptionStatus: "active",
    isTrialing: false,
    trialEndDate: null,
    createdAt: "2024-06-10",
    subscriptionStartDate: "2024-07-10",
    instagramHandle: null,
    accountStatus: "active",
  },
  {
    id: "5",
    firstName: "Camille",
    lastName: "Roux",
    subscriptionType: "premium",
    subscriptionStatus: "trialing",
    isTrialing: true,
    trialEndDate: "2025-01-20",
    createdAt: "2024-12-06",
    subscriptionStartDate: null,
    instagramHandle: "camille.lashes",
    accountStatus: "active",
  },
  {
    id: "6",
    firstName: "Julie",
    lastName: "Moreau",
    subscriptionType: "basic",
    subscriptionStatus: "active",
    isTrialing: false,
    trialEndDate: null,
    createdAt: "2024-09-05",
    subscriptionStartDate: "2024-09-19",
    instagramHandle: "julie_makeup",
    accountStatus: "active",
  },
  {
    id: "7",
    firstName: "Clara",
    lastName: "Simon",
    subscriptionType: "premium",
    subscriptionStatus: "active",
    isTrialing: false,
    trialEndDate: null,
    createdAt: "2024-04-22",
    subscriptionStartDate: "2024-05-06",
    instagramHandle: "clara.wellness",
    accountStatus: "active",
  },
  {
    id: "8",
    firstName: "Manon",
    lastName: "Laurent",
    subscriptionType: "basic",
    subscriptionStatus: "canceled",
    isTrialing: false,
    trialEndDate: null,
    createdAt: "2024-02-14",
    subscriptionStartDate: "2024-02-28",
    instagramHandle: "manon_beaute",
    accountStatus: "suspended",
  },
  {
    id: "9",
    firstName: "Chloé",
    lastName: "Michel",
    subscriptionType: "premium",
    subscriptionStatus: "trialing",
    isTrialing: true,
    trialEndDate: "2025-01-10",
    createdAt: "2024-11-26",
    subscriptionStartDate: null,
    instagramHandle: "chloe.spa",
    accountStatus: "active",
  },
  {
    id: "10",
    firstName: "Alice",
    lastName: "Garcia",
    subscriptionType: "basic",
    subscriptionStatus: "active",
    isTrialing: false,
    trialEndDate: null,
    createdAt: "2024-08-30",
    subscriptionStartDate: "2024-09-13",
    instagramHandle: null,
    accountStatus: "active",
  },
  {
    id: "11",
    firstName: "Inès",
    lastName: "Thomas",
    subscriptionType: "premium",
    subscriptionStatus: "active",
    isTrialing: false,
    trialEndDate: null,
    createdAt: "2024-05-18",
    subscriptionStartDate: "2024-06-01",
    instagramHandle: "ines.beauty.paris",
    accountStatus: "active",
  },
  {
    id: "12",
    firstName: "Zoé",
    lastName: "Robert",
    subscriptionType: "basic",
    subscriptionStatus: "trialing",
    isTrialing: true,
    trialEndDate: "2025-01-25",
    createdAt: "2024-12-11",
    subscriptionStartDate: null,
    instagramHandle: "zoe_nailart",
    accountStatus: "active",
  },
];

const AdminProviders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [subscriptionFilter, setSubscriptionFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [trialFilter, setTrialFilter] = useState<string>("all");

  // Filter logic - ready for Supabase integration
  const filteredProviders = useMemo(() => {
    return fakeProviders.filter((provider) => {
      const matchesSearch =
        searchQuery === "" ||
        provider.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (provider.instagramHandle &&
          provider.instagramHandle.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesSubscription =
        subscriptionFilter === "all" || provider.subscriptionType === subscriptionFilter;

      const matchesStatus =
        statusFilter === "all" || provider.accountStatus === statusFilter;

      const matchesTrial =
        trialFilter === "all" ||
        (trialFilter === "yes" && provider.isTrialing) ||
        (trialFilter === "no" && !provider.isTrialing);

      return matchesSearch && matchesSubscription && matchesStatus && matchesTrial;
    });
  }, [searchQuery, subscriptionFilter, statusFilter, trialFilter]);

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

  // Action handlers - ready for Supabase integration
  const handleView = (providerId: string) => {
    console.log("View provider:", providerId);
    // TODO: Navigate to provider detail page or open modal
  };

  const handleSuspend = (providerId: string) => {
    console.log("Suspend provider:", providerId);
    // TODO: Call Supabase to update account status
  };

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
              <Select value={subscriptionFilter} onValueChange={setSubscriptionFilter}>
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
          {filteredProviders.length} prestataire{filteredProviders.length > 1 ? "s" : ""} trouvé
          {filteredProviders.length > 1 ? "s" : ""}
        </div>

        {/* Table */}
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
                    <TableHead className="font-semibold text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProviders.map((provider) => (
                    <TableRow
                      key={provider.id}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <TableCell className="font-medium">
                        {provider.firstName} {provider.lastName}
                      </TableCell>
                      <TableCell>{getSubscriptionBadge(provider.subscriptionType)}</TableCell>
                      <TableCell>{getStatusBadge(provider.subscriptionStatus)}</TableCell>
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
                      <TableCell>{getAccountStatusBadge(provider.accountStatus)}</TableCell>
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
                  {filteredProviders.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                        Aucun prestataire trouvé avec ces critères.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default AdminProviders;
