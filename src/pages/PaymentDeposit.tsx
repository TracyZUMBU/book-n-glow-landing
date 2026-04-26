import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ExternalLink, ArrowRight, Mail, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PaymentDeposit = () => {
  const navigate = useNavigate();
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Données fictives
  const depositAmount = 30; // €
  const paypalMeLink = "https://paypal.me/bookngleow/30";

  const handlePaymentDone = () => {
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full border-2 border-border animate-fade-in">
          <CardContent className="pt-12 pb-8 text-center space-y-6">
            <div className="flex justify-center">
              <div className="rounded-full bg-primary/10 p-6">
                <CheckCircle className="w-16 h-16 text-primary" />
              </div>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-3xl font-serif font-bold text-foreground">
                Rendez-vous confirmé ! 🎉
              </h1>
              <p className="text-muted-foreground text-lg max-w-md mx-auto">
                Votre demande de rendez-vous est bien transmise. Le prestataire est notifié et peut annuler le rendez-vous si aucun paiement n'est effectué sous 15 minutes.
              </p>
            </div>

            <div className="bg-background-light border border-border rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm text-foreground">
                📧 Un email de confirmation vient d'être envoyé avec tous les détails de votre réservation.
              </p>
            </div>

            <div className="pt-4">
              <Button
                onClick={() => navigate("/mes-reservations")}
                size="lg"
                variant="hero"
                className="gap-2"
              >
                Voir mes réservations
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Stepper */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
              1
            </div>
            <span className="text-sm font-medium text-foreground hidden sm:inline">
              Réservation
            </span>
          </div>
          
          <div className="w-12 sm:w-20 h-0.5 bg-primary"></div>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
              2
            </div>
            <span className="text-sm font-medium text-foreground hidden sm:inline">
              Acompte
            </span>
          </div>
          
          <div className="w-12 sm:w-20 h-0.5 bg-border"></div>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-semibold">
              3
            </div>
            <span className="text-sm font-medium text-muted-foreground hidden sm:inline">
              Confirmation
            </span>
          </div>
        </div>

        {/* Success Message */}
        <Card className="border-2 border-border animate-fade-in">
          <CardContent className="pt-8 pb-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  Réservation enregistrée avec succès !
                </h2>
                <p className="text-muted-foreground">
                  Votre réservation a été enregistrée. Pour la confirmer définitivement, 
                  veuillez effectuer le paiement de l'acompte.
                </p>
              </div>
            </div>

            {/* Email notification */}
            <div className="flex items-start gap-3 bg-background-light border border-border rounded-lg p-4">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">
                  Email de pré-confirmation envoyé
                </p>
                <p className="text-xs text-muted-foreground">
                  Vous trouverez également le lien PayPal.me dans cet email.
                </p>
              </div>
            </div>

            {/* Timer warning */}
            <div className="flex items-start gap-3 bg-background-light border border-border rounded-lg p-4">
              <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Délai de 15 minutes
                </p>
                <p className="text-xs text-muted-foreground">
                  Vous avez 15 minutes pour effectuer le paiement sur la page PayPal.me du prestataire.
                  Passé ce délai, le prestataire pourra annuler le rendez-vous si le paiement n'a pas été effectué.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Section */}
        <Card className="border-2 border-border animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-xl font-serif">
              Paiement de l'acompte
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Amount */}
            <div className="bg-background-light border border-border rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Montant de l'acompte</p>
              <p className="text-4xl font-bold text-primary font-serif">
                {depositAmount}€
              </p>
            </div>

            {/* PayPal Button */}
            <div className="space-y-3">
              <Label className="text-base font-medium">Étape 1 : Effectuer le paiement</Label>
              <Button
                onClick={() => window.open(paypalMeLink, "_blank")}
                variant="hero"
                size="lg"
                className="w-full gap-2"
              >
                Payer sur PayPal.me
                <ExternalLink className="w-5 h-5" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Vous serez redirigé vers la page PayPal.me du prestataire avec le montant à payer
              </p>
            </div>

            {/* Confirm Button */}
            <Button
              onClick={handlePaymentDone}
              size="lg"
              className="w-full mt-4"
            >
              J'ai effectué le paiement
            </Button>
          </CardContent>
        </Card>

        {/* Info Note */}
        <div className="bg-background-light border border-border rounded-lg p-4 text-sm">
          <p className="text-foreground text-center mb-3">
            💡 Le prestataire validera votre rendez-vous une fois le paiement reçu.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Vous pouvez également retrouver le lien de paiement et effectuer cette action depuis votre onglet <span className="font-medium">Mes réservations</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentDeposit;
