import StoreButtons from "@/components/StoreButtons";
import { Button } from "@/components/ui/button";
import { Check, Smartphone } from "lucide-react";

const benefits = [
  "Page de réservation personnalisée",
  "Gestion des rendez-vous en temps réel",
  "Rappels automatiques aux clientes",
  "Paiement sur place ou via PayPal.me",
];

const AppDownloadCTA = () => {
  return (
    <section
      id="telecharger-app"
      className="py-12 md:py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
    >
      <div className="container-mobile max-w-5xl">
        <div className="bg-card rounded-3xl border-2 border-primary/20 shadow-xl p-8 md:p-12 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Smartphone className="w-4 h-4" />
                <span>L'app prestataire</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                <span className="text-gradient">100 % gratuit.</span>
                <br />
                Toujours.
              </h2>

              <p className="text-lg text-muted-foreground">
                Inscrivez-vous gratuitement via l'application mobile Book N'
                Glow. Aucune commission, aucun abonnement&nbsp;: vous gardez
                100&nbsp;% de vos revenus.
              </p>

              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>

              <StoreButtons size="lg" variant="default" className="pt-2" />

              <p className="text-xs text-muted-foreground">
                Disponible bientôt sur iOS et Android.
              </p>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full" />
              <div className="relative aspect-[9/16] max-w-xs mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl border border-border shadow-2xl flex items-center justify-center">
                <Smartphone className="w-24 h-24 text-primary/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadCTA;
