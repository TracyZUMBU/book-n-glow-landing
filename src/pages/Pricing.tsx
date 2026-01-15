import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Check, Crown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
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
    cta: "Commencer gratuitement",
    popular: false,
    free: true,
  },
  {
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
    cta: "Choisir Premium",
    popular: true,
    free: false,
  },
];

const Pricing = () => {
  const handlePlanSelection = (plan: "Basic" | "Premium") => {
    const baseUrl = "https://app.book-n-glow.fr/inscription-prestataire";
    const planParam = plan === "Basic" ? "?plan=free" : "?plan=premium";
    window.location.href = `${baseUrl}${planParam}`;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-10 pb-8 md:pt-20 md:pb-16 px-4 text-center">
        <div className="container-mobile max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            <span className="text-gradient">Tarifs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Commencez gratuitement ou optez pour la solution complète. Offre de
            lancement : 19€/mois à vie,{" "}
            <span className="line-through">(29,99€/mois)</span>.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-10 md:py-20 px-4">
        <div className="container-mobile max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Choisissez votre plan
            </h2>
            <p className="text-lg text-muted-foreground">
              Sans engagement • Annulation à tout moment • 19€/mois à vie pour
              les premiers abonnés
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-card rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up ${
                    plan.popular
                      ? "border-primary shadow-xl scale-105"
                      : "border-border"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Le plus populaire{" "}
                      <span className="hidden sm:inline">✨</span>
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
                  {plan.name === "Premium" && (
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
                            (Prix futur : 29,99€/mois)
                          </span>
                        </p>
                      </div>
                    </div>
                  )}

                  <Button
                    variant={
                      plan.popular
                        ? "hero"
                        : plan.free
                        ? "secondary"
                        : "outline"
                    }
                    size="lg"
                    className="w-full"
                    onClick={() =>
                      handlePlanSelection(plan.name as "Basic" | "Premium")
                    }
                  >
                    {plan.cta}
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Des questions sur nos tarifs ? Notre équipe est là pour vous
              aider.
            </p>
            <Button variant="ghost" size="lg">
              <Link to="/contact">Contactez notre support</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Pricing;
