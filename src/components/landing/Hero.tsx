import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  EyeClosed,
  Heart,
  Scissors,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light/10 via-background to-secondary-light/10 pt-10 pb-16 md:pt-20 md:pb-32 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(340,100%,64%,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(291,64%,42%,0.08),transparent_50%)]" />

      <div className="container-mobile max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Rejoignez les prestataires beauté qui brillent</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Votre page de réservation,{" "}
              <span className="text-gradient">aussi belle</span> que votre feed
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Tes clientes voient tes disponibilités en temps réel, réservent en
              ligne et reçoivent des rappels automatiques. Fini les DM, les
              stories à mettre à jour et les confirmations la veille — tout
              s'automatise. ✨
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToWaitlist}
                className="group w-full sm:w-auto"
              >
                Rejoindre la liste d'attente
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/tarifs" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Voir les tarifs
                </Button>
              </Link>
            </div>

            {/* <div className="flex items-center gap-8 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background"
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">+200 prestataires</span>
              </div>
              <div className="text-muted-foreground">
                ⭐ 4.9/5 sur les réseaux
              </div>
            </div> */}
          </div>

          <div className="relative animate-fade-in-up">
            {/* Background glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />

            {/* Geometric composition */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Main geometric shapes */}

              {/* Large central circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-sm animate-pulse" />

              {/* Floating geometric elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl rotate-12 animate-float">
                <div className="w-full h-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
              </div>

              <div
                className="absolute top-16 right-12 w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl -rotate-12 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <EyeClosed className="w-6 h-6 text-white" />
                </div>
              </div>

              <div
                className="absolute bottom-20 left-12 w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
              </div>

              <div
                className="absolute bottom-8 right-8 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg rotate-45 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Decorative lines and curves */}
              <div className="absolute top-1/4 left-1/4 w-32 h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full rotate-45" />
              <div className="absolute bottom-1/4 right-1/4 w-24 h-1 bg-gradient-to-r from-secondary/50 to-transparent rounded-full -rotate-45" />

              {/* Small floating dots */}
              <div
                className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/60 rounded-full animate-pulse"
                style={{ animationDelay: "0.3s" }}
              />
              <div
                className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-secondary/60 rounded-full animate-pulse"
                style={{ animationDelay: "0.8s" }}
              />
              <div
                className="absolute top-2/3 left-1/2 w-2.5 h-2.5 bg-accent/60 rounded-full animate-pulse"
                style={{ animationDelay: "1.2s" }}
              />

              {/* Central glow effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse" />
            </div>

            {/* Additional floating elements around the composition */}
            <div className="absolute top-4 -right-8 animate-float">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
            </div>

            <div
              className="absolute bottom-8 -left-6 animate-float"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-secondary" />
              </div>
            </div>

            <div
              className="absolute top-1/2 -right-12 animate-float"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
