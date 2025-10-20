import { Check, Sparkles, Crown, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/landing/Footer";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Page de réservation personnalisée",
    description: "Créez une page à votre image avec vos couleurs, votre logo et votre style.",
    included: ["Starter", "Pro", "Premium"]
  },
  {
    title: "Gestion des rendez-vous",
    description: "Calendrier intégré pour gérer tous vos rendez-vous en un coup d'œil.",
    included: ["Starter", "Pro", "Premium"]
  },
  {
    title: "Notifications automatiques",
    description: "Recevez des notifications par email et SMS pour chaque nouvelle réservation.",
    included: ["Starter", "Pro", "Premium"]
  },
  {
    title: "Rappels clients",
    description: "Envoi automatique de rappels à vos clients avant leur rendez-vous.",
    included: ["Pro", "Premium"]
  },
  {
    title: "Gestion des services et tarifs",
    description: "Ajoutez vos prestations avec durées et prix personnalisés.",
    included: ["Starter", "Pro", "Premium"]
  },
  {
    title: "Paiement en ligne",
    description: "Acceptez les paiements en ligne et les arrhes directement sur votre page.",
    included: ["Pro", "Premium"]
  },
  {
    title: "Statistiques avancées",
    description: "Analysez vos performances avec des statistiques détaillées.",
    included: ["Premium"]
  },
  {
    title: "Support prioritaire",
    description: "Assistance prioritaire par email et chat en direct.",
    included: ["Premium"]
  }
];

const plans = [
  {
    name: "Starter",
    icon: Sparkles,
    price: "9.90€",
    period: "/mois",
    description: "Parfait pour débuter et automatiser vos réservations",
    features: [
      "Page de réservation personnalisée",
      "Jusqu'à 50 réservations/mois",
      "Gestion des rendez-vous",
      "Notifications email",
      "3 services maximum",
      "Lien bio Instagram"
    ],
    cta: "Commencer",
    popular: false
  },
  {
    name: "Pro",
    icon: Zap,
    price: "19.90€",
    period: "/mois",
    description: "Pour les prestataires qui veulent aller plus loin",
    features: [
      "Tout du plan Starter",
      "Réservations illimitées",
      "Services illimités",
      "Rappels SMS automatiques",
      "Paiement en ligne & arrhes",
      "Personnalisation avancée",
      "Calendrier Google sync"
    ],
    cta: "Choisir Pro",
    popular: true
  },
  {
    name: "Premium",
    icon: Crown,
    price: "34.90€",
    period: "/mois",
    description: "La solution complète pour professionnels exigeants",
    features: [
      "Tout du plan Pro",
      "Statistiques avancées",
      "Support prioritaire 24/7",
      "Gestion multi-emplacements",
      "API & intégrations",
      "Formation personnalisée",
      "Nom de domaine personnalisé"
    ],
    cta: "Choisir Premium",
    popular: false
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="py-6 px-4 border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto max-w-7xl flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-bold text-gradient">
            Book N' Glow
          </Link>
          <Link to="/">
            <Button variant="ghost">Retour à l'accueil</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Fonctionnalités & <span className="text-gradient">Tarifs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choisissez le plan qui correspond à vos ambitions. Tous nos plans incluent 14 jours d'essai gratuit.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-background-light">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Toutes les fonctionnalités dont vous avez besoin
            </h2>
            <p className="text-lg text-muted-foreground">
              Une plateforme complète pour gérer votre activité beauté
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-3">{feature.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {feature.included.map((plan) => (
                    <span
                      key={plan}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {plan}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Choisissez votre plan
            </h2>
            <p className="text-lg text-muted-foreground">
              Sans engagement • Annulation à tout moment • 14 jours d'essai gratuit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                    variant={plan.popular ? "hero" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Vous avez des besoins spécifiques ? Nous avons une offre sur mesure.
            </p>
            <Button variant="ghost" size="lg">
              Contactez-nous pour une offre personnalisée
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-background-light">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-2">
                Puis-je changer de plan à tout moment ?
              </h3>
              <p className="text-muted-foreground">
                Oui, vous pouvez passer à un plan supérieur ou inférieur à tout moment. Les changements prennent effet immédiatement.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-2">
                L'essai gratuit nécessite-t-il une carte bancaire ?
              </h3>
              <p className="text-muted-foreground">
                Non, aucune carte bancaire n'est requise pour commencer votre essai de 14 jours.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-2">
                Que se passe-t-il si je dépasse ma limite de réservations ?
              </h3>
              <p className="text-muted-foreground">
                Nous vous notifierons avant d'atteindre votre limite. Vous pourrez alors passer à un plan supérieur ou attendre le mois suivant.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-2">
                Y a-t-il des frais cachés ?
              </h3>
              <p className="text-muted-foreground">
                Non, tous les tarifs sont transparents. Les seuls frais supplémentaires concernent les paiements en ligne (frais bancaires standards).
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
