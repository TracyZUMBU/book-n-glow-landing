import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Gift,
  Coins,
  Trophy,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Calendar,
  Sparkles,
  ChevronRight,
  Info,
  PartyPopper,
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  ClientLoyaltyData,
  LoyaltyReward,
  LoyaltyPointHistory,
  fakeClientLoyaltyData,
  emptyClientLoyaltyData,
  getRewardDescription,
  getStatusLabel,
} from "@/data/fakeLoyaltyData";
import Navigation from "@/components/landing/Navigation";

const ClientLoyalty = () => {
  // Toggle between fake data and empty state for demo
  const [showEmptyState, setShowEmptyState] = useState(false);
  const loyaltyData: ClientLoyaltyData = showEmptyState 
    ? emptyClientLoyaltyData 
    : fakeClientLoyaltyData;

  const { currentPoints, providerSettings, rewards, history, pointsExpirationDate } = loyaltyData;
  const pointsForReward = providerSettings.pointsForReward;
  const progressPercentage = Math.min((currentPoints / pointsForReward) * 100, 100);
  const pointsRemaining = Math.max(pointsForReward - currentPoints, 0);
  const hasRewardAvailable = currentPoints >= pointsForReward;

  const getStatusBadge = (status: LoyaltyReward['status']) => {
    switch (status) {
      case 'available':
        return (
          <Badge className="bg-green-100 text-green-700 border-green-200">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            {getStatusLabel(status)}
          </Badge>
        );
      case 'used':
        return (
          <Badge variant="secondary" className="bg-muted text-muted-foreground">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            {getStatusLabel(status)}
          </Badge>
        );
      case 'expired':
        return (
          <Badge variant="destructive" className="bg-red-100 text-red-700 border-red-200">
            <XCircle className="w-3 h-3 mr-1" />
            {getStatusLabel(status)}
          </Badge>
        );
    }
  };

  const getHistoryIcon = (type: LoyaltyPointHistory['type']) => {
    switch (type) {
      case 'earned':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'used':
        return <Gift className="w-4 h-4 text-purple-500" />;
      case 'expired':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
    }
  };

  const getHistoryPointsColor = (type: LoyaltyPointHistory['type']) => {
    switch (type) {
      case 'earned':
        return 'text-green-600';
      case 'used':
        return 'text-purple-600';
      case 'expired':
        return 'text-red-600';
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'd MMMM yyyy', { locale: fr });
  };

  const availableRewards = rewards.filter(r => r.status === 'available');
  const usedRewards = rewards.filter(r => r.status === 'used');
  const expiredRewards = rewards.filter(r => r.status === 'expired');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container-mobile py-8 pt-24">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                  Ma fidélité
                </h1>
                <p className="text-muted-foreground">
                  Chez Beauty Salon Paris
                </p>
              </div>
            </div>
            
            {/* Demo Toggle */}
            <div className="mt-4 flex items-center gap-2">
              <Button 
                variant={!showEmptyState ? "default" : "outline"}
                size="sm"
                onClick={() => setShowEmptyState(false)}
              >
                Avec données
              </Button>
              <Button 
                variant={showEmptyState ? "default" : "outline"}
                size="sm"
                onClick={() => setShowEmptyState(true)}
              >
                État vide
              </Button>
            </div>
          </div>

          {/* Empty State */}
          {showEmptyState && history.length === 0 && (
            <Card className="p-8 border-2 border-dashed border-border">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 mx-auto flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-amber-500" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    Bienvenue dans le programme fidélité !
                  </h2>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    Réservez votre première prestation pour commencer à accumuler des points 
                    et débloquer des récompenses exclusives.
                  </p>
                </div>
                <div className="pt-4">
                  <Button className="gap-2">
                    <Calendar className="w-4 h-4" />
                    Prendre rendez-vous
                  </Button>
                </div>
                
                {/* How it works */}
                <div className="pt-6 border-t border-border mt-6">
                  <h3 className="font-medium text-foreground mb-4">Comment ça marche ?</h3>
                  <div className="grid gap-4 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-amber-600">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Réservez vos prestations</p>
                        <p className="text-sm text-muted-foreground">
                          Gagnez {providerSettings.pointsPerEuro} point par euro dépensé
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-purple-600">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Accumulez vos points</p>
                        <p className="text-sm text-muted-foreground">
                          Atteignez {providerSettings.pointsForReward} points pour une récompense
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-green-600">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Profitez de vos avantages</p>
                        <p className="text-sm text-muted-foreground">
                          Utilisez vos récompenses lors de vos prochaines visites
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Main Content */}
          {!showEmptyState && (
            <div className="space-y-6">
              {/* Points Card */}
              <Card className="overflow-hidden border-2 border-border">
                {/* Gradient Header */}
                <div className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-amber-100 text-sm font-medium">Solde actuel</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">{currentPoints}</span>
                        <span className="text-amber-100">points</span>
                      </div>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <Coins className="w-8 h-8" />
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-amber-100">Progression</span>
                      <span className="font-medium">{currentPoints} / {pointsForReward}</span>
                    </div>
                    <div className="h-3 bg-white/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white rounded-full transition-all duration-500"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                    
                    {hasRewardAvailable ? (
                      <div className="flex items-center gap-2 mt-3 bg-white/20 backdrop-blur rounded-lg p-3">
                        <PartyPopper className="w-5 h-5" />
                        <span className="font-medium">
                          Félicitations ! Vous avez une récompense disponible 🎉
                        </span>
                      </div>
                    ) : (
                      <p className="text-amber-100 text-sm mt-2">
                        Encore <strong>{pointsRemaining} points</strong> avant votre prochaine récompense 🎉
                      </p>
                    )}
                  </div>
                </div>
                
                {/* Expiration Info */}
                {pointsExpirationDate && (
                  <div className="p-4 bg-amber-50 border-t border-amber-100 flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <div className="flex-1">
                      <p className="text-sm text-amber-800">
                        <span className="font-medium">Vos points expirent le {formatDate(pointsExpirationDate)}</span>
                      </p>
                      <p className="text-xs text-amber-600">
                        Pensez à réserver pour prolonger leur validité
                      </p>
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="w-4 h-4 text-amber-500 cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          Chaque nouvelle réservation prolonge la validité de tous vos points 
                          de {providerSettings.pointsValidityMonths} mois.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                )}
              </Card>

              {/* Tabs */}
              <Tabs defaultValue="rewards" className="space-y-4">
                <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-background-light">
                  <TabsTrigger value="rewards" className="flex items-center gap-2 py-3">
                    <Trophy className="w-4 h-4" />
                    <span>Récompenses</span>
                    {availableRewards.length > 0 && (
                      <Badge className="ml-1 bg-green-100 text-green-700 text-xs px-1.5">
                        {availableRewards.length}
                      </Badge>
                    )}
                  </TabsTrigger>
                  <TabsTrigger value="history" className="flex items-center gap-2 py-3">
                    <Clock className="w-4 h-4" />
                    <span>Historique</span>
                  </TabsTrigger>
                </TabsList>

                {/* Rewards Tab */}
                <TabsContent value="rewards" className="space-y-4">
                  {/* Available Rewards */}
                  {availableRewards.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        <Gift className="w-4 h-4 text-green-500" />
                        Récompenses disponibles
                      </h3>
                      {availableRewards.map((reward) => (
                        <Card 
                          key={reward.id} 
                          className="p-4 border-2 border-green-200 bg-green-50/50"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                                <Gift className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <p className="font-medium text-foreground">
                                  {getRewardDescription(reward)}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Valable jusqu'au {formatDate(reward.validUntil)}
                                </p>
                              </div>
                            </div>
                            {getStatusBadge(reward.status)}
                          </div>
                          <Button className="w-full mt-4 gap-2">
                            Utiliser ma récompense
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </Card>
                      ))}
                    </div>
                  )}

                  {/* Used Rewards */}
                  {usedRewards.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                        Récompenses utilisées
                      </h3>
                      {usedRewards.map((reward) => (
                        <Card key={reward.id} className="p-4 border border-border bg-muted/20">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                <Gift className="w-5 h-5 text-muted-foreground" />
                              </div>
                              <div>
                                <p className="font-medium text-muted-foreground">
                                  {getRewardDescription(reward)}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Utilisée le {reward.usedAt && formatDate(reward.usedAt)}
                                </p>
                              </div>
                            </div>
                            {getStatusBadge(reward.status)}
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}

                  {/* Expired Rewards */}
                  {expiredRewards.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-400" />
                        Récompenses expirées
                      </h3>
                      {expiredRewards.map((reward) => (
                        <Card key={reward.id} className="p-4 border border-border bg-red-50/30">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                                <Gift className="w-5 h-5 text-red-400" />
                              </div>
                              <div>
                                <p className="font-medium text-muted-foreground line-through">
                                  {getRewardDescription(reward)}
                                </p>
                                <p className="text-sm text-red-500">
                                  Expirée le {formatDate(reward.validUntil)}
                                </p>
                              </div>
                            </div>
                            {getStatusBadge(reward.status)}
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}

                  {/* No Rewards */}
                  {rewards.length === 0 && (
                    <Card className="p-8 border-2 border-dashed border-border">
                      <div className="text-center space-y-3">
                        <div className="w-16 h-16 rounded-full bg-muted mx-auto flex items-center justify-center">
                          <Trophy className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            Pas encore de récompense
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Continuez à accumuler des points pour débloquer votre première récompense !
                          </p>
                        </div>
                      </div>
                    </Card>
                  )}
                </TabsContent>

                {/* History Tab */}
                <TabsContent value="history" className="space-y-3">
                  {history.length > 0 ? (
                    <div className="space-y-2">
                      {history.map((item) => (
                        <Card key={item.id} className="p-4 border border-border">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              {getHistoryIcon(item.type)}
                              <div>
                                <p className="font-medium text-foreground">
                                  {item.description}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {formatDate(item.date)}
                                </p>
                              </div>
                            </div>
                            <span className={`font-semibold ${getHistoryPointsColor(item.type)}`}>
                              {item.points > 0 ? '+' : ''}{item.points} pts
                            </span>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="p-8 border-2 border-dashed border-border">
                      <div className="text-center space-y-3">
                        <div className="w-16 h-16 rounded-full bg-muted mx-auto flex items-center justify-center">
                          <Clock className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            Aucun historique
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Votre historique de points apparaîtra ici après votre première réservation.
                          </p>
                        </div>
                      </div>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ClientLoyalty;
