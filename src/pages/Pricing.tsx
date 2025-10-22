import Footer from "@/components/landing/Footer";
import Waitlist from "@/components/landing/Waitlist";
import { Button } from "@/components/ui/button";
import { Check, Crown, Sparkles } from "lucide-react";

const plans = [
  {
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
      "Pas de réservation en ligne",
      "Lien bio Instagram",
    ],
    cta: "Rejoindre la liste d'attente",
    popular: false,
    free: true,
  },
  {
    name: "Complet",
    icon: Crown,
    price: "29.99€",
    period: "/mois",
    description: "Solution complète pour gérer votre activité",
    features: [
      "Tout du plan Gratuit",
      "Réservations illimitées",
      "Rappels email automatiques",
      "Calendrier multi-vues",
      "Support prioritaire",
      "Gestion des rendez-vous",
      "Notifications clients",
    ],
    cta: "Rejoindre la liste d'attente",
    popular: true,
    free: false,
  },
];

const Pricing = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20  px-4 text-center">
        <div className="container-mobile max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            <span className="text-gradient">Tarifs</span>
          </h1>
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>
              En raison d’un grand engouement, les inscriptions sont fermées
              pour le moment. <br /> Restez à l’affût, la réouverture arrive
              bientôt
            </span>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rejoignez notre liste d'attente pour être parmi les premières à
            accéder à Book N' Glow dès sa réouverture.
            {/* Commencez gratuitement ou optez pour la solution complète. Le plan
            payant inclut 14 jours d'essai gratuit. */}
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="container-mobile max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Choisissez votre plan
            </h2>
            <p className="text-lg text-muted-foreground">
              Sans engagement • Annulation à tout moment • 14 jours d'essai
              gratuit sur le plan payant
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
                      Le plus populaire ✨
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
                    onClick={scrollToWaitlist}
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
              Contactez notre support
            </Button>
          </div>
        </div>
      </section>

      <Waitlist />
      <Footer />
    </>
  );
};

export default Pricing;
