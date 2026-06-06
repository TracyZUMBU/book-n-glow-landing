import Footer from "@/components/landing/Footer";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Check,
  Sparkles,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";

const includedFeatures = [
  "Page de réservation personnalisée",
  "Affichage de vos services et tarifs",
  "Gestion des rendez-vous en temps réel",
  "Rappels email automatiques aux clientes",
  "Notifications de nouvelles réservations",
  "Lien bio Instagram dédié",
  "Suivi de vos clientes",
  "Aucune commission sur vos prestations",
];

const paymentMethods = [
  {
    icon: Wallet,
    title: "Sur place",
    description:
      "Vos clientes règlent directement le jour du rendez-vous, en espèces ou par tout autre moyen que vous acceptez.",
  },
  {
    icon: Sparkles,
    title: "PayPal.me",
    description:
      "Renseignez votre lien PayPal.me dans votre profil. Vos clientes sont redirigées au moment de la réservation pour vous régler en quelques clics.",
  },
];

const Pricing = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-10 pb-8 md:pt-20 md:pb-16 px-4 text-center">
        <div className="container-mobile max-w-4xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Sans commission · Sans engagement</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            <span className="text-gradient">100 % gratuit.</span>
            <br />
            Vraiment.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Toutes les fonctionnalités essentielles pour gérer votre activité,
            offertes. Pas d'abonnement, pas de commission, pas de carte
            bancaire requise.
          </p>
        </div>
      </section>

      {/* Single plan card */}
      <section className="pb-10 md:pb-20 px-4">
        <div className="container-mobile max-w-3xl">
          <div className="relative bg-card rounded-3xl p-8 md:p-12 border-2 border-primary shadow-xl animate-fade-in-up">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
              Le plan Book N' Glow ✨
            </div>

            <div className="text-center mb-8 pt-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-6xl md:text-7xl font-bold text-gradient">
                  0€
                </span>
                <span className="text-muted-foreground mb-3 text-lg">
                  /toujours
                </span>
              </div>
              <p className="text-muted-foreground">
                Aucun frais caché. Vous gardez 100 % de vos revenus.
              </p>
            </div>

            <ul className="space-y-3 mb-10 max-w-xl mx-auto">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="text-center space-y-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 rounded-xl"
              >
                <Link to="/telecharger" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Télécharger l'app
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground">
                Inscription via l'application mobile. Disponible bientôt sur
                iOS et Android.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment methods */}
      <section className="py-10 md:py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container-mobile max-w-5xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Vos clientes paient comme elles veulent
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deux options simples, sans intermédiaire bancaire ni commission
              prélevée par la plateforme.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.title}
                  className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-14 h-14 mb-5 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                  <p className="text-muted-foreground">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-10 md:py-16 px-4">
        <div className="container-mobile max-w-3xl text-center space-y-4">
          <p className="text-muted-foreground">
            Une question ? Notre équipe est là pour vous aider.
          </p>
          <Button variant="ghost" size="lg" asChild>
            <Link to="/contact">Contactez notre support</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Pricing;
