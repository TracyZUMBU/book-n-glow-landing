import { UserPlus, Settings, Share2, Calendar } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Créez votre compte",
    description:
      "Inscription simple et rapide. Commencez en moins de 2 minutes.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Configurez vos services",
    description:
      "Ajoutez vos prestations, tarifs et disponibilités en quelques clics.",
  },
  {
    icon: Share2,
    number: "03",
    title: "Partagez votre lien",
    description: "Ajoutez votre lien Book N' Glow dans votre bio Instagram.",
  },
  {
    icon: Calendar,
    number: "04",
    title: "Recevez vos réservations",
    description:
      "Vos clients réservent en ligne. Vous recevez les confirmations automatiquement.",
  },
];

const HowItWorks = () => {
  return (
    <section className="pt-10 pb-16 md:pt-20 md:pb-32 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Comment <span className="text-gradient">ça marche</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gagnez du temps, rayonnez davantage. En 4 étapes simples.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border relative z-10">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mt-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
