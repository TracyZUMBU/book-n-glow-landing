import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Crown, Sparkles } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    id: "free",
    name: "Basic",
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
    free: true,
  },
  {
    id: "premium",
    name: "Premium",
    icon: Crown,
    price: "19€",
    period: "/mois",
    description: "Solution complète pour gérer votre activité",
    features: [
      "Réservations illimitées",
      "Rappels email automatiques",
      "Dashboard",
      "Support prioritaire",
      "Gestion des rendez-vous",
      "Notifications de réservations",
      "Paiement et acomptes (dont PayPal.Me)",
      "Avis clients",
      "Programme de fidélité",
      "Publications de photos",
      "Suivi clients",
      "Analyses et statistiques",
    ],
    popular: true,
    free: false,
  },
];

const SubscriptionSelection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("premium");

  const handleSubscribe = () => {
    const baseUrl = "https://app.book-n-glow.fr/inscription-prestataire";
    const planParam = selectedPlan === "free" ? "?plan=free" : "?plan=premium";
    window.location.href = `${baseUrl}${planParam}`;
  };

  return (
    <section
      id="subscription"
      className="py-12 md:py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
    >
      <div className="container-mobile max-w-6xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Choisissez votre <span className="text-gradient">abonnement</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sans engagement • Annulation à tout moment • Offre de lancement :
            19€/mois à vie, <span className="line-through">(29,99€/mois)</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isSelected = selectedPlan === plan.id;

            return (
              <div
                key={plan.id}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                aria-label={`Select ${plan.name} plan`}
                className={`relative bg-card rounded-3xl p-8 border-2 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up ${
                  isSelected
                    ? "border-primary shadow-xl scale-105"
                    : plan.popular
                    ? "border-primary/50 shadow-lg"
                    : "border-border"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedPlan(plan.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedPlan(plan.id);
                  }
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Le plus populaire{" "}
                    <span className="hidden sm:inline">✨</span>
                  </div>
                )}

                {isSelected && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-5xl font-bold text-gradient">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground mb-2">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Badge offre de lancement pour le plan Premium */}
                {plan.id === "premium" && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                    <div className="text-center">
                      <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                        🚀 Offre de lancement
                      </p>
                      <p className="text-sm text-foreground mb-1">
                        19€/mois à vie
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <span className="line-through">
                          (prix futur : 29,99€/mois)
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center animate-fade-in">
          <Button
            variant="hero"
            size="lg"
            className="w-full sm:w-auto min-w-[280px] group"
            onClick={handleSubscribe}
          >
            Commencer maintenant
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-xs text-center text-muted-foreground mt-4">
            En continuant, vous serez redirigé vers la page d'inscription avec
            votre plan sélectionné.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSelection;
