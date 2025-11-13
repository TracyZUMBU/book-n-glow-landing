import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  // Mock data - en production, ces données viendraient des query params ou du state
  const subscriptionDetails = {
    plan: "Premium",
    price: "29,99€",
    subscriptionDate: "13/11/2025",
    nextPayment: "13/12/2025",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl animate-fade-in">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
            <CheckCircle2 className="w-20 h-20 text-primary relative" strokeWidth={2} />
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Paiement réussi !
          </h1>
          <p className="text-lg text-muted-foreground">
            Votre abonnement {subscriptionDetails.plan} a été activé avec succès.
          </p>
        </div>

        {/* Subscription Details Card */}
        <Card className="mb-8 shadow-card">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="text-muted-foreground font-medium">Plan</span>
                <span className="text-xl font-semibold text-gradient">
                  {subscriptionDetails.plan}
                </span>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="text-muted-foreground font-medium">Prix</span>
                <span className="text-xl font-bold text-foreground">
                  {subscriptionDetails.price} <span className="text-base font-normal text-muted-foreground">/ mois</span>
                </span>
              </div>
              
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="text-muted-foreground font-medium">Date d'abonnement</span>
                <span className="text-lg font-semibold text-foreground">
                  {subscriptionDetails.subscriptionDate}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Prochain paiement</span>
                <span className="text-lg font-semibold text-foreground">
                  {subscriptionDetails.nextPayment}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps Section */}
        <Card className="mb-8 bg-gradient-soft border-primary/20">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-primary mb-3">
              Que se passe-t-il maintenant ?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Toutes les fonctionnalités Premium sont maintenant débloquées sur votre compte. 
              Vous pouvez commencer à profiter des avantages de votre abonnement immédiatement.
            </p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            variant="hero"
            className="flex-1 group"
            onClick={() => navigate("/dashboard")}
          >
            Accéder à mon tableau de bord
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="flex-1"
            onClick={() => navigate("/profil/settings?tab=subscription")}
          >
            Gérer mon abonnement
          </Button>
        </div>

        {/* Support Link */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Des questions ? {" "}
            <a 
              href="/contact" 
              className="text-primary hover:underline font-medium transition-colors"
            >
              Contactez notre support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
