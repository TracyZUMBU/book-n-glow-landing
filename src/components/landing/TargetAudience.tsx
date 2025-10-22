import { Calendar, Hand, Heart, Scissors, Sparkles } from "lucide-react";

const audiences = [
  { icon: Scissors, label: "Coiffeuses", iconName: "Scissors" },
  { icon: Sparkles, label: "Maquilleuses", iconName: "Sparkles" },
  { icon: Hand, label: "Nail Artists", iconName: "Hand" },
  { icon: Heart, label: "Esthéticiennes", iconName: "Heart" },
];

const TargetAudience = () => {
  const renderMobileIndicator = (type: string) => {
    switch (type) {
      case "Scissors":
        return <Scissors className="w-3 h-3 text-primary" />;
      case "Sparkles":
        return <Sparkles className="w-3 h-3 text-primary" />;
      case "Heart":
        return <Heart className="w-3 h-3 text-primary" />;
      case "Hand":
        return <Hand className="w-3 h-3 text-primary" />;
      default:
        return (
          <span className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
        );
    }
  };

  return (
    <section className="py-12 md:py-24 px-4 bg-gradient-to-br from-primary-light/10 via-background-light to-secondary-light/10">
      <div className="container-mobile max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Pour les prestataires beauté d'Instagram</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Book N' Glow s'adresse à{" "}
              <span className="text-gradient">tous les artistes</span> de la
              beauté
            </h2>

            <p className="text-lg text-muted-foreground">
              Que vous soyez coiffeuse, maquilleuse, nail artist ou
              esthéticienne, Book N' Glow vous permet de gérer vos rendez-vous
              comme une pro et d’offrir à vos clientes une expérience sans
              accroc.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {audiences.map((audience, index) => {
                const Icon = audience.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
                  >
                    {/* Desktop/Tablet: Show icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center hidden sm:flex">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    {/* Mobile: Show specific indicator */}
                    <div className="sm:hidden">
                      {renderMobileIndicator(audience.iconName)}
                    </div>
                    <span className="font-medium text-sm sm:text-base">
                      {audience.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="bg-card p-6 rounded-xl border-l-4 border-primary shadow-sm">
              <p className="text-muted-foreground italic">
                "Plus de DM, plus de stress. Juste votre talent qui rayonne✨"
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in-up">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card rounded-3xl p-8 shadow-xl border border-border">
                <div className="space-y-6">
                  <div className="aspect-video bg-gradient-to-br from-primary-light/20 to-secondary-light/20 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-muted rounded-full w-3/4" />
                    <div className="h-4 bg-muted rounded-full w-1/2" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="aspect-square bg-primary/10 rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
