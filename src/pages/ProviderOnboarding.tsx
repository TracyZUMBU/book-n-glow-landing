import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";

import OnboardingProgress from "@/components/onboarding/OnboardingProgress";
import PersonalInfoStep from "@/components/onboarding/PersonalInfoStep";
import CompanyInfoStep from "@/components/onboarding/CompanyInfoStep";
import { SubscriptionStep } from "@/components/onboarding/SubscriptionStep";
import BookingSettingsStep from "@/components/onboarding/BookingSettingsStep";
import PaymentStep from "@/components/onboarding/PaymentStep";

interface OnboardingData {
  // Personal Info
  firstName: string;
  lastName: string;
  email: string;
  // Company Info
  companyName: string;
  instagramHandle: string;
  description: string;
  city: string;
  streetNumber: string;
  street: string;
  postalCode: string;
  showFullAddress: boolean;
  profileImage: string | null;
  // Subscription
  subscription: "free" | "premium";
  // Booking Settings (Premium only)
  paymentMethod: "onsite" | "paypal" | "stripe";
  depositType: "fixed" | "percentage";
  depositAmount: number;
  stripePaymentType: "deposit" | "full";
  requireConfirmation: boolean;
  confirmationHour: string;
  minBookingHours: number;
  allowCancellation: boolean;
  cancellationHours: number;
  slotInterval: number;
  advanceBookingMonths: number;
  contactMethod: "instagram" | "phone";
  phoneNumber: string;
  paypalUsername: string;
}

const initialData: OnboardingData = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  instagramHandle: "",
  description: "",
  city: "",
  streetNumber: "",
  street: "",
  postalCode: "",
  showFullAddress: true,
  profileImage: null,
  subscription: "premium",
  paymentMethod: "onsite",
  depositType: "percentage",
  depositAmount: 30,
  stripePaymentType: "deposit",
  requireConfirmation: false,
  confirmationHour: "18:00",
  minBookingHours: 2,
  allowCancellation: true,
  cancellationHours: 24,
  slotInterval: 30,
  advanceBookingMonths: 2,
  contactMethod: "instagram",
  phoneNumber: "",
  paypalUsername: "",
};

const ProviderOnboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<OnboardingData>(initialData);

  // Dynamic steps based on subscription
  const getSteps = () => {
    const baseSteps = [
      { title: "Profil", description: "Informations personnelles" },
      { title: "Entreprise", description: "Votre activité" },
      { title: "Abonnement", description: "Choisissez votre offre" },
    ];

    if (data.subscription === "premium") {
      return [
        ...baseSteps,
        { title: "Réservations", description: "Paramètres" },
        { title: "Paiement", description: "Finalisation" },
      ];
    }

    return [
      ...baseSteps,
      { title: "Finalisation", description: "Confirmation" },
    ];
  };

  const steps = getSteps();
  const totalSteps = steps.length;

  const updateData = (newData: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (!data.firstName.trim() || !data.lastName.trim() || !data.email.trim()) {
          toast.error("Veuillez remplir tous les champs obligatoires");
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
          toast.error("Veuillez entrer une adresse email valide");
          return false;
        }
        return true;
      case 2:
        if (!data.companyName.trim() || !data.instagramHandle.trim()) {
          toast.error("Veuillez remplir le nom de l'entreprise et le compte Instagram");
          return false;
        }
        if (!data.city.trim() || !data.street.trim() || !data.postalCode.trim()) {
          toast.error("Veuillez remplir l'adresse complète");
          return false;
        }
        return true;
      case 3:
        return true; // Subscription always valid
      case 4:
        if (data.subscription === "premium") {
          if (data.paymentMethod === "paypal" && !data.paypalUsername.trim()) {
            toast.error("Veuillez entrer votre nom d'utilisateur PayPal.me");
            return false;
          }
          if (data.contactMethod === "phone" && !data.phoneNumber.trim()) {
            toast.error("Veuillez entrer votre numéro de téléphone");
            return false;
          }
        }
        return true;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (!validateStep(currentStep)) return;
    
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    toast.success("Inscription réussie ! Bienvenue sur Book N' Glow 🎉");
    navigate("/prestataire/dashboard");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            data={{
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
            }}
            onChange={updateData}
          />
        );
      case 2:
        return (
          <CompanyInfoStep
            data={{
              companyName: data.companyName,
              instagramHandle: data.instagramHandle,
              description: data.description,
              city: data.city,
              streetNumber: data.streetNumber,
              street: data.street,
              postalCode: data.postalCode,
              showFullAddress: data.showFullAddress,
              profileImage: data.profileImage,
            }}
            onChange={updateData}
          />
        );
      case 3:
        return (
          <SubscriptionStep
            selectedPlan={data.subscription}
            onPlanChange={(plan) => updateData({ subscription: plan })}
          />
        );
      case 4:
        if (data.subscription === "premium") {
          return (
            <BookingSettingsStep
              data={{
                paymentMethod: data.paymentMethod,
                depositType: data.depositType,
                depositAmount: data.depositAmount,
                stripePaymentType: data.stripePaymentType,
                requireConfirmation: data.requireConfirmation,
                confirmationHour: data.confirmationHour,
                minBookingHours: data.minBookingHours,
                allowCancellation: data.allowCancellation,
                cancellationHours: data.cancellationHours,
                slotInterval: data.slotInterval,
                advanceBookingMonths: data.advanceBookingMonths,
                contactMethod: data.contactMethod,
                phoneNumber: data.phoneNumber,
                paypalUsername: data.paypalUsername,
              }}
              onChange={updateData}
            />
          );
        }
        // Free plan - go to payment/confirmation
        return <PaymentStep plan={data.subscription} onComplete={handleComplete} />;
      case 5:
        return <PaymentStep plan={data.subscription} onComplete={handleComplete} />;
      default:
        return null;
    }
  };

  const isLastStep = currentStep === totalSteps;
  const showNavButtons = !(isLastStep && (currentStep === 4 && data.subscription === "free" || currentStep === 5));

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">Book N' Glow</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl py-8 px-4">
        <OnboardingProgress
          currentStep={currentStep}
          totalSteps={totalSteps}
          steps={steps}
        />

        <Card className="mt-6">
          <CardContent className="p-6 md:p-8">
            {renderStep()}

            {/* Navigation Buttons */}
            {showNavButtons && (
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Retour
                </Button>
                <Button onClick={handleNext}>
                  {currentStep === totalSteps - 1 && data.subscription === "premium"
                    ? "Continuer vers le paiement"
                    : "Continuer"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Help text */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Besoin d'aide ? Contactez-nous sur{" "}
          <a href="#" className="text-primary hover:underline">
            Instagram
          </a>
        </p>
      </main>
    </div>
  );
};

export default ProviderOnboarding;
