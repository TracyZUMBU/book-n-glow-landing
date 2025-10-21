import {
  BarChart,
  BellRing,
  Calendar,
  Clock,
  CreditCard,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Créez votre page en quelques minutes",
    description:
      "Configuration simple et rapide. Personnalisez votre page à votre image en quelques clics.",
  },
  {
    icon: Clock,
    title: "Automatisez vos prises de rendez-vous",
    description:
      "Plus besoin de gérer les DM. Vos clients réservent directement en ligne, 24/7.",
  },

  {
    icon: Calendar,
    title: "Visibilité en temps réel",
    description:
      "Ta page montre les créneaux disponibles en temps réel — finis le stories manuelles.",
  },
  {
    icon: BellRing,
    title: "Notifications automatiques",
    description:
      "Recevoir des notifications pour chaque prise et annulation de RDV.",
  },
  {
    icon: BarChart,
    title: "Dashboard complet",
    description:
      "Gère tes prix, prestations et règles d'annulation depuis un seul endroit — tout est intuitif.",
  },
  {
    icon: CreditCard,
    title: "Vérification des acomptes PayPalMe",
    description:
      "Notre système vérifie automatiquement les paiements d'acompte via PayPalMe.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-background-light">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Pourquoi <span className="text-gradient">Book N' Glow</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Si tu gères tes rendez-vous sur Instagram, tu sais que ça peut vite
            devenir un casse-tête : stories à mettre à jour, DM qui
            s'accumulent, annulations de dernière minute.{" "}
          </p>

          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            <span className="text-gradient">Book N' Glow</span> centralise tout
            : page de réservation personnalisée, gestion des prestations et
            tarifs, règles d'annulation et notifications automatisées — visibles
            en temps réel par tes clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
