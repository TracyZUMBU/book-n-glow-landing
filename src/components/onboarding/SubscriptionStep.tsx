import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Check, Crown, Sparkles } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    id: "free",
    name: "Gratuit",
    icon: Sparkles,
    price: "0€",
    period: "/mois",
    description: "Site vitrine pour présenter vos services",
    features: [
      "Page de présentation personnalisée",
      "Affichage de vos services",
      "Informations de contact",
      "Design professionnel",
      "Lien bio Instagram",
    ],
    popular: false,
  },
  {
    id: "complete",
    name: "Premium",
    icon: Crown,
    price: "19€",
    period: "/mois",
    description: "Solution complète pour gérer votre activité",
    features: [
      "Tout du plan gratuit",
      "Réservations illimitées",
      "Rappels email automatiques",
      "Dashboard - statistiques & analyses",
      "Support prioritaire",
      "Gestion des rendez-vous",
      "Notifications de réservations",
      "Vérification des acomptes PayPal.Me",
      "Avis clients",
      "Programme de fidélité",
      "Publications de photo",
    ],
    popular: true,
  },
];

export const SubscriptionStep = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("complete");

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Choisissez votre <span className="text-gradient">abonnement</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Sans engagement • Annulation à tout moment • 19€/mois à vie pour les
          premiers abonnés ( prix futur : 29,99€/mois)
        </p>
      </div>

      <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isSelected = selectedPlan === plan.id;

            return (
              <div key={plan.id} className="relative">
                <Label
                  htmlFor={plan.id}
                  className={cn(
                    "cursor-pointer block",
                    isSelected && "scale-[1.02]"
                  )}
                >
                  <Card
                    className={cn(
                      "relative p-6 transition-all duration-300 hover:shadow-xl",
                      isSelected
                        ? "border-2 border-primary shadow-lg ring-2 ring-primary/20"
                        : "border-2 border-border hover:border-primary/50"
                    )}
                  >
                    {/* Radio button positioned at top right */}
                    <div className="absolute top-4 right-4">
                      <RadioGroupItem
                        value={plan.id}
                        id={plan.id}
                        className="h-5 w-5"
                      />
                    </div>

                    {/* Popular badge */}
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold shadow-md">
                        Le plus populaire
                      </div>
                    )}

                    {/* Plan header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{plan.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {plan.description}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-foreground">
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-0.5">
                            <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          </div>
                          <span className="text-sm text-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Badge offre de lancement pour le plan Premium */}
                    {plan.id === "complete" && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                        <div className="text-center">
                          <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                            🚀 Offre de lancement
                          </p>
                          <p className="text-sm text-foreground mb-1">
                            19€/mois à vie
                          </p>
                          <p className="text-xs text-muted-foreground">
                            <span className="line-through">
                              (Prix futur : 29,99€/mois)
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                  </Card>
                </Label>
              </div>
            );
          })}
        </div>
      </RadioGroup>

      {/* Info message */}
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">
          Offre de lancement : <strong>19€/mois à vie</strong> pour le plan
          Premium.{" "}
          <span className="line-through">(Prix futur : 29,99€/mois)</span>
        </p>
      </div>
    </div>
  );
};
