import Footer from "@/components/landing/Footer";
import Navigation from "@/components/landing/Navigation";
import StoreButtons from "@/components/StoreButtons";
import { Check, Heart, Smartphone, Sparkles } from "lucide-react";

const highlights = [
  "Inscription 100 % gratuite, sans engagement",
  "Aucune commission sur vos rendez-vous",
  "Gestion des réservations en temps réel",
  "Rappels automatiques pour vos clientes",
  "Paiement sur place ou via PayPal.me",
];

const Download = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
          </div>

          <div className="container-mobile max-w-5xl relative">
            <div className="text-center space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Smartphone className="w-4 h-4" />
                <span>L'app Book N' Glow</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                Téléchargez l'app{" "}
                <span className="text-gradient">Book N' Glow</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Gérez vos réservations, vos clientes et vos revenus depuis votre
                téléphone. Disponible sur iOS et Android.
              </p>

              <div className="pt-4 flex justify-center">
                <StoreButtons size="lg" variant="dark" />
              </div>

              <p className="text-xs text-muted-foreground">
                Disponible sur l'App Store et Google Play.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-20 px-4">
          <div className="container-mobile max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Phone mockup */}
              <div className="relative order-2 md:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full" />
                <div className="relative aspect-[9/16] max-w-xs mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[2.5rem] border-8 border-foreground/90 shadow-2xl flex items-center justify-center">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/90 rounded-full" />
                  <div className="flex flex-col items-center gap-3 text-center px-6">
                    <Sparkles className="w-16 h-16 text-primary" />
                    <p className="font-serif text-xl text-gradient font-bold">
                      Book N' Glow
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Votre activité beauté, simplifiée.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold">
                  Tout ce dont vous avez besoin,{" "}
                  <span className="text-gradient">dans votre poche</span>
                </h2>
                <p className="text-muted-foreground">
                  Une app pensée pour les prestataires beauté indépendantes :
                  simple, élégante et 100 % gratuite.
                </p>

                <ul className="space-y-3">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <StoreButtons size="lg" variant="default" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reassurance */}
        <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container-mobile max-w-3xl text-center space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary">
              <Heart className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold">
              Pensée par et pour les pros de la beauté
            </h2>
            <p className="text-muted-foreground">
              Rejoignez la communauté de prestataires qui ont choisi Book N'
              Glow pour gagner du temps et fidéliser leurs clientes.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Download;
