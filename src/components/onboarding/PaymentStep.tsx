import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Shield, Lock, Check } from "lucide-react";

interface PaymentStepProps {
  plan: "free" | "premium";
  onComplete: () => void;
}

const PaymentStep = ({ plan, onComplete }: PaymentStepProps) => {
  if (plan === "free") {
    return (
      <div className="space-y-6 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Vous avez choisi l'offre Gratuite
          </h2>
          <p className="text-muted-foreground">
            Aucun paiement requis. Votre compte sera créé avec les fonctionnalités de base.
          </p>
        </div>

        <Card className="max-w-md mx-auto">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Ce qui est inclus :</h3>
            <ul className="space-y-2 text-left">
              <li className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                Page de présentation personnalisée
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                Affichage de vos services
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                Informations de contact
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-primary" />
                Design professionnel
              </li>
            </ul>
          </CardContent>
        </Card>

        <p className="text-sm text-muted-foreground">
          Vous pourrez passer à Premium à tout moment depuis votre tableau de bord.
        </p>

        <Button size="lg" onClick={onComplete} className="mt-4">
          Finaliser mon inscription
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Finalisez votre abonnement Premium
        </h2>
        <p className="text-muted-foreground">
          Paiement sécurisé par Stripe. Annulez à tout moment.
        </p>
      </div>

      <Card className="max-w-lg mx-auto">
        <CardContent className="pt-6 space-y-6">
          {/* Order Summary */}
          <div className="p-4 bg-muted/50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Abonnement Premium</span>
              <span className="font-bold">19€/mois</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Offre de lancement : ce tarif est garanti à vie pour votre compte.
            </p>
          </div>

          {/* Fake Card Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Numéro de carte</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full h-10 px-3 pr-10 rounded-md border border-input bg-background text-sm"
                  disabled
                />
                <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Date d'expiration</label>
                <input
                  type="text"
                  placeholder="MM/AA"
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                  disabled
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">CVC</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                  disabled
                />
              </div>
            </div>
          </div>

          {/* Security badges */}
          <div className="flex items-center justify-center gap-6 pt-4 border-t">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>Paiement sécurisé</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>Données chiffrées</span>
            </div>
          </div>

          <Button size="lg" className="w-full" onClick={onComplete}>
            <CreditCard className="w-4 h-4 mr-2" />
            Payer 19€ et commencer
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            En cliquant sur ce bouton, vous acceptez nos conditions générales d'utilisation 
            et notre politique de confidentialité.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentStep;
