import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Gift,
  Stamp,
  Trophy,
  Clock,
  CheckCircle2,
  XCircle,
  Calendar,
  Sparkles,
  ChevronRight,
  Info,
  PartyPopper,
  History,
} from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import {
  ClientLoyaltyData,
  ClientLoyaltyCard,
  LoyaltyReward,
  fakeClientLoyaltyData,
  emptyClientLoyaltyData,
  getRewardDescription,
  getRewardShortDescription,
  getStatusLabel,
} from "@/data/fakeLoyaltyData";
import Navigation from "@/components/landing/Navigation";

const ClientLoyalty = () => {
  const { providerId } = useParams();
  const [showEmptyState, setShowEmptyState] = useState(false);
  const loyaltyData: ClientLoyaltyData = showEmptyState 
    ? emptyClientLoyaltyData 
    : fakeClientLoyaltyData;

  const { loyaltyCards, rewards } = loyaltyData;

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

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'd MMMM yyyy', { locale: fr });
  };

  const availableRewards = rewards.filter(r => r.status === 'available');
  const usedRewards = rewards.filter(r => r.status === 'used');
  const expiredRewards = rewards.filter(r => r.status === 'expired');

  // Stamp Card Component
  const StampCard = ({ card }: { card: ClientLoyaltyCard }) => {
    const stampsRemaining = card.stampsRequired - card.currentStamps;
    const [showHistory, setShowHistory] = useState(false);

    return (
      <Card className="overflow-hidden border-2 border-border hover:border-primary/20 transition-colors">
        {/* Header with provider info */}
        <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border">
          <div className="flex items-center gap-3">
            <img
              src={card.providerImage}
              alt={card.providerName}
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{card.providerName}</h3>
              <p className="text-sm text-muted-foreground">
                Récompense : {getRewardShortDescription(card)}
              </p>
            </div>
            {card.hasRewardAvailable && (
              <Badge className="bg-green-500 text-white animate-pulse">
                <Gift className="w-3 h-3 mr-1" />
                Disponible !
              </Badge>
            )}
          </div>
        </div>

        {/* Stamp Grid */}
        <div className="p-4 space-y-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {Array.from({ length: card.stampsRequired }).map((_, index) => (
              <div
                key={index}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  index < card.currentStamps
                    ? 'bg-gradient-to-br from-primary to-secondary border-primary text-white shadow-md scale-100'
                    : 'border-dashed border-muted-foreground/30 bg-muted/20 scale-95'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {index < card.currentStamps ? (
                  <Stamp className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <span className="text-xs text-muted-foreground">{index + 1}</span>
                )}
              </div>
            ))}
          </div>

          {/* Progress Message */}
          <div className="text-center">
            {card.hasRewardAvailable ? (
              <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
                <PartyPopper className="w-5 h-5" />
                <span>Carte complète ! Utilisez votre récompense 🎉</span>
              </div>
            ) : (
              <p className="text-muted-foreground">
                Encore <strong className="text-foreground">{stampsRemaining} prestation{stampsRemaining > 1 ? 's' : ''}</strong> avant votre récompense 🎉
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {card.hasRewardAvailable ? (
              <Button className="flex-1 gap-2">
                <Gift className="w-4 h-4" />
                Utiliser ma récompense
              </Button>
            ) : (
              <Button variant="outline" className="flex-1 gap-2">
                <Calendar className="w-4 h-4" />
                Prendre RDV
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowHistory(!showHistory)}
              className="shrink-0"
            >
              <History className="w-4 h-4" />
            </Button>
          </div>

          {/* History */}
          {showHistory && card.stampHistory.length > 0 && (
            <div className="pt-3 border-t border-border animate-in slide-in-from-top-2 duration-200">
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Historique des tampons</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {card.stampHistory.slice(0, 5).map((stamp) => (
                  <div key={stamp.id} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">{stamp.serviceName}</span>
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {formatDate(stamp.date)}
                    </span>
                  </div>
                ))}
                {card.stampHistory.length > 5 && (
                  <p className="text-xs text-muted-foreground text-center pt-1">
                    + {card.stampHistory.length - 5} autres prestations
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container-mobile py-8 pt-24">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Stamp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                  Mes cartes de fidélité
                </h1>
                <p className="text-muted-foreground">
                  {loyaltyCards.length} carte{loyaltyCards.length > 1 ? 's' : ''} active{loyaltyCards.length > 1 ? 's' : ''}
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
          {showEmptyState && loyaltyCards.length === 0 && (
            <Card className="p-8 border-2 border-dashed border-border">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    Pas encore de carte de fidélité
                  </h2>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    Réservez chez un prestataire proposant un programme de fidélité 
                    pour commencer à accumuler des tampons !
                  </p>
                </div>
                <div className="pt-4">
                  <Button className="gap-2">
                    <Calendar className="w-4 h-4" />
                    Découvrir les prestataires
                  </Button>
                </div>
                
                {/* How it works */}
                <div className="pt-6 border-t border-border mt-6">
                  <h3 className="font-medium text-foreground mb-4">Comment ça marche ?</h3>
                  <div className="grid gap-4 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-primary">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Réservez une prestation</p>
                        <p className="text-sm text-muted-foreground">
                          Chaque visite = 1 tampon sur votre carte
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-primary">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Complétez votre carte</p>
                        <p className="text-sm text-muted-foreground">
                          Accumulez le nombre de tampons requis
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-primary">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Récupérez votre récompense</p>
                        <p className="text-sm text-muted-foreground">
                          Réduction ou prestation gratuite offerte !
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
            <Tabs defaultValue="cards" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-background-light">
                <TabsTrigger value="cards" className="flex items-center gap-2 py-3">
                  <Stamp className="w-4 h-4" />
                  <span>Mes cartes</span>
                  <Badge variant="secondary" className="ml-1 text-xs px-1.5">
                    {loyaltyCards.length}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger value="rewards" className="flex items-center gap-2 py-3">
                  <Trophy className="w-4 h-4" />
                  <span>Récompenses</span>
                  {availableRewards.length > 0 && (
                    <Badge className="ml-1 bg-green-100 text-green-700 text-xs px-1.5">
                      {availableRewards.length}
                    </Badge>
                  )}
                </TabsTrigger>
              </TabsList>

              {/* Cards Tab */}
              <TabsContent value="cards" className="space-y-4">
                {loyaltyCards.map((card) => (
                  <StampCard key={card.providerId} card={card} />
                ))}
              </TabsContent>

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
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                              <Gift className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">
                                {getRewardDescription(reward)}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {reward.providerName}
                              </p>
                            </div>
                          </div>
                          {getStatusBadge(reward.status)}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Valable jusqu'au {formatDate(reward.validUntil)}
                        </p>
                        <Button className="w-full gap-2">
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
                                {reward.providerName} • Utilisée le {reward.usedAt && formatDate(reward.usedAt)}
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
                                {reward.providerName} • Expirée le {formatDate(reward.validUntil)}
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
                        <h3 className="font-semibold text-foreground mb-1">
                          Pas encore de récompense
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Complétez vos cartes de fidélité pour débloquer des récompenses !
                        </p>
                      </div>
                    </div>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          )}
        </div>
      </main>
    </div>
  );
};

export default ClientLoyalty;
