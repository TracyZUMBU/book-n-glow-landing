import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  User,
  Mail,
  Phone,
  CreditCard,
  CheckCircle2,
  ExternalLink,
  Pencil,
} from "lucide-react";
import Navigation from "@/components/landing/Navigation";

type BookingStep = "service" | "slot" | "info" | "payment-info" | "confirmation";
type PaymentMethod = "paypal" | "onsite";

const Booking = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);

  // Track which steps are completed and which is active
  const [completedSteps, setCompletedSteps] = useState<BookingStep[]>([]);
  const [activeStep, setActiveStep] = useState<BookingStep>("service");

  // Mock service data — lien PayPal.me du prestataire renseigné depuis son profil.
  // En réalité, il sera lu via `providers.paypal_account` côté Supabase.
  const service = {
    name: "Maquillage marié",
    duration: 90,
    price: 190,
    options: [
      { id: "1", name: "Retouche durant l'événement", price: 100 },
      { id: "2", name: "Essai maquillage préalable", price: 50 }
    ]
  };

  const provider = {
    name: "Sophie Maquilleuse",
    paypalAccount: "sophiemaquilleuse",
  };

  const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
  const weekDays = [
    { day: "Mer", date: "22", fullDate: "Mercredi 22 octobre" },
    { day: "Jeu", date: "23", fullDate: "Jeudi 23 octobre" },
    { day: "Ven", date: "24", fullDate: "Vendredi 24 octobre" },
    { day: "Sam", date: "25", fullDate: "Samedi 25 octobre" },
    { day: "Dim", date: "26", fullDate: "Dimanche 26 octobre" },
    { day: "Lun", date: "27", fullDate: "Lundi 27 octobre" },
    { day: "Mar", date: "28", fullDate: "Mardi 28 octobre" }
  ];

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions(prev =>
      prev.includes(optionId)
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const calculateTotal = () => {
    let total = service.price;
    selectedOptions.forEach(optionId => {
      const option = service.options.find(o => o.id === optionId);
      if (option) total += option.price;
    });
    return total;
  };

  const paypalMeUrl = provider.paypalAccount
    ? `https://paypal.me/${provider.paypalAccount}/${calculateTotal()}`
    : null;

  // Handle step completion and progression
  const completeStep = (step: BookingStep, nextStep: BookingStep) => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps(prev => [...prev, step]);
    }
    setActiveStep(nextStep);
  };

  // Handle edit button click
  const handleEdit = (step: BookingStep) => {
    setActiveStep(step);
  };

  // Auto-advance when selections are made
  useEffect(() => {
    // Service step is always "completed" by default (user can always proceed)
  }, []);

  // When date AND time are selected, auto-advance to info
  useEffect(() => {
    if (selectedDate && selectedTime && activeStep === "slot") {
      const timer = setTimeout(() => {
        completeStep("slot", "info");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [selectedDate, selectedTime, activeStep]);

  // When authenticated, auto-advance to payment-info
  useEffect(() => {
    if (isAuthenticated && activeStep === "info") {
      const timer = setTimeout(() => {
        completeStep("info", "payment-info");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, activeStep]);

  // Note : avec les 2 modes restants (PayPal.me / sur place), on reste sur
  // l'étape payment-info jusqu'à ce que l'utilisateur confirme manuellement.
  // L'étape intermédiaire « payment » (saisie carte bancaire) a été retirée
  // dans le cadre du passage au modèle 100 % gratuit.

  const getSelectedDateFull = () => {
    const day = weekDays.find(d => d.date === selectedDate);
    return day?.fullDate || "";
  };

  // Minimized card component
  const MinimizedStep = ({ 
    title, 
    icon: Icon, 
    summary, 
    onEdit,
    step
  }: { 
    title: string; 
    icon: React.ElementType; 
    summary: React.ReactNode;
    onEdit: () => void;
    step: BookingStep;
  }) => (
    <Card className="p-4 border border-border bg-card/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <div className="font-medium text-foreground">{summary}</div>
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={onEdit} className="text-primary hover:text-primary/80">
          <Pencil className="w-4 h-4 mr-1" />
          Modifier
        </Button>
      </div>
    </Card>
  );

  // Service step
  const renderServiceStep = () => {
    const isActive = activeStep === "service";
    const isCompleted = completedSteps.includes("service");

    if (!isActive && isCompleted) {
      const optionCount = selectedOptions.length;
      return (
        <MinimizedStep
          title="Service sélectionné"
          icon={User}
          summary={
            <span>
              {service.name}
              {optionCount > 0 && (
                <span className="text-muted-foreground ml-2">
                  (+{optionCount} option{optionCount > 1 ? "s" : ""})
                </span>
              )}
            </span>
          }
          onEdit={() => handleEdit("service")}
          step="service"
        />
      );
    }

    if (!isActive) return null;

    return (
      <Card className="p-6 border-2 border-primary bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <User className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-display font-semibold text-foreground">Détails du service</h2>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">{service.name}</h3>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{service.duration} min</span>
            </div>
            <span className="text-2xl font-bold text-primary">{service.price}€</span>
          </div>

          {service.options.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Options</h4>
              <div className="space-y-3">
                {service.options.map((option) => (
                  <div
                    key={option.id}
                    className="flex items-center justify-between p-4 border-2 border-border rounded-lg hover:border-primary transition-colors cursor-pointer"
                    onClick={() => handleOptionToggle(option.id)}
                  >
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{option.name}</p>
                      <p className="text-sm text-primary font-semibold">+{option.price}€</p>
                    </div>
                    <Checkbox
                      checked={selectedOptions.includes(option.id)}
                      onCheckedChange={() => handleOptionToggle(option.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <Button 
            variant="hero" 
            className="w-full mt-6"
            onClick={() => completeStep("service", "slot")}
          >
            Choisir un créneau
          </Button>
        </div>
      </Card>
    );
  };

  // Slot step
  const renderSlotStep = () => {
    const isActive = activeStep === "slot";
    const isCompleted = completedSteps.includes("slot");

    if (!isActive && isCompleted) {
      return (
        <MinimizedStep
          title="Créneau sélectionné"
          icon={Calendar}
          summary={`${getSelectedDateFull()} à ${selectedTime}`}
          onEdit={() => handleEdit("slot")}
          step="slot"
        />
      );
    }

    if (!isActive && !isCompleted) return null;

    return (
      <Card className="p-6 border-2 border-primary bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Calendar className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-display font-semibold text-foreground">Choisir un créneau</h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <span className="font-semibold text-foreground">22 oct. - 28 oct.</span>
            <Button variant="ghost" size="icon">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((day) => (
              <button
                key={day.date}
                onClick={() => setSelectedDate(day.date)}
                className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                  selectedDate === day.date
                    ? "bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-glow"
                    : "bg-background-light hover:bg-background-dark text-foreground"
                }`}
              >
                <span className="text-xs mb-1">{day.day}</span>
                <span className="text-lg font-bold">{day.date}</span>
              </button>
            ))}
          </div>

          {selectedDate && (
            <>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-3">Horaires disponibles</p>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-4 rounded-lg font-medium transition-all ${
                        selectedTime === time
                          ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-glow"
                          : "border-2 border-border hover:border-primary text-foreground"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </Card>
    );
  };

  // Info step
  const renderInfoStep = () => {
    const isActive = activeStep === "info";
    const isCompleted = completedSteps.includes("info");

    if (!isActive && isCompleted) {
      return (
        <MinimizedStep
          title="Vos informations"
          icon={User}
          summary="Connecté en tant que sophie.martin@email.com"
          onEdit={() => handleEdit("info")}
          step="info"
        />
      );
    }

    if (!isActive && !isCompleted) return null;

    if (isAuthenticated) {
      return (
        <Card className="p-6 border-2 border-primary bg-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <User className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-display font-semibold text-foreground">Vos informations</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-background-light rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-foreground">Connecté en tant que sophie.martin@email.com</span>
            </div>
          </div>
        </Card>
      );
    }

    return (
      <Card className="p-6 border-2 border-primary bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <User className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-display font-semibold text-foreground">Informations client</h2>
        </div>

        <Tabs value={authMode} onValueChange={(v) => setAuthMode(v as "login" | "signup")}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Connexion</TabsTrigger>
            <TabsTrigger value="signup">Inscription</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input id="email" type="email" placeholder="votre@email.com" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button 
              onClick={() => setIsAuthenticated(true)} 
              className="w-full"
              variant="hero"
            >
              Se connecter
            </Button>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input id="name" placeholder="Sophie Martin" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input id="signup-email" type="email" placeholder="votre@email.com" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input id="phone" type="tel" placeholder="+33 6 12 34 56 78" className="pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password">Mot de passe</Label>
              <Input id="signup-password" type="password" placeholder="••••••••" />
            </div>
            <Button 
              onClick={() => setIsAuthenticated(true)} 
              className="w-full"
              variant="hero"
            >
              Créer mon compte
            </Button>
          </TabsContent>
        </Tabs>
      </Card>
    );
  };

  // Payment info step
  const renderPaymentInfoStep = () => {
    const isActive = activeStep === "payment-info";
    const isCompleted = completedSteps.includes("payment-info");

    if (!isActive && isCompleted) {
      return (
        <MinimizedStep
          title="Mode de paiement"
          icon={CreditCard}
          summary={
            paymentMethod === "paypal"
              ? "Paiement via PayPal.me"
              : "Paiement sur place"
          }
          onEdit={() => handleEdit("payment-info")}
          step="payment-info"
        />
      );
    }

    if (!isActive && !isCompleted) return null;

    return (
      <Card className="p-6 border-2 border-primary bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-display font-semibold text-foreground">Mode de paiement</h2>
        </div>

        <div className="space-y-4">
          {/* PayPal.me Payment Option — affichée seulement si le presta a renseigné son lien */}
          {paypalMeUrl && (
            <div
              onClick={() => setPaymentMethod("paypal")}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                paymentMethod === "paypal"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    paymentMethod === "paypal"
                      ? "bg-gradient-to-br from-primary to-secondary"
                      : "bg-muted"
                  }`}
                >
                  <CreditCard
                    className={`w-6 h-6 ${
                      paymentMethod === "paypal"
                        ? "text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">
                    Paiement via PayPal.me
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Vous serez redirigé vers le lien PayPal.me du prestataire.
                  </p>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === "paypal"
                      ? "border-primary"
                      : "border-muted-foreground"
                  }`}
                >
                  {paymentMethod === "paypal" && (
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  )}
                </div>
              </div>
            </div>
          )}

          {/* On-site Payment Option */}
          <div
            onClick={() => setPaymentMethod("onsite")}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
              paymentMethod === "onsite"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                paymentMethod === "onsite"
                  ? "bg-gradient-to-br from-primary to-secondary"
                  : "bg-muted"
              }`}>
                <svg
                  className={`w-6 h-6 ${paymentMethod === "onsite" ? "text-primary-foreground" : "text-muted-foreground"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Paiement sur place</h3>
                <p className="text-sm text-muted-foreground">Le jour du rendez-vous</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                paymentMethod === "onsite" ? "border-primary" : "border-muted-foreground"
              }`}>
                {paymentMethod === "onsite" && (
                  <div className="w-3 h-3 rounded-full bg-primary" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Summary when payment method selected */}
        {paymentMethod && (
          <div className="mt-6 p-4 bg-background-light rounded-lg">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Service</span>
                <span className="font-medium text-foreground">{service.name}</span>
              </div>
              {selectedOptions.length > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Options</span>
                  <span className="font-medium text-foreground">{selectedOptions.length} sélectionnée(s)</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Date</span>
                <span className="font-medium text-foreground">{getSelectedDateFull()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Heure</span>
                <span className="font-medium text-foreground">{selectedTime}</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-foreground">Total</span>
                <span className="text-primary">{calculateTotal()}€</span>
              </div>
            </div>
          </div>
        )}

        {/* Cancellation Policy */}
        <div className="mt-6 border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
          <h4 className="text-lg font-semibold text-foreground mb-3">Politique d'annulation</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ce rendez-vous ne peut pas être annulé. Assurez-vous d'être en mesure de vous présenter le jour du rendez-vous. 
            Si vous ne vous présentez pas, vous risquez la suspension, voire la suppression définitive de votre compte.
          </p>
        </div>

        {paymentMethod && (
          <Button
            variant="hero"
            className="w-full mt-6"
            onClick={() => {
              completeStep("payment-info", "confirmation");
            }}
          >
            Confirmer la réservation
          </Button>
        )}
      </Card>
    );
  };

  // Confirmation step
  const renderConfirmation = () => {
    if (activeStep !== "confirmation") return null;

    return (
      <div className="text-center space-y-6 py-12">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
        </div>
        <h2 className="text-3xl font-display font-bold text-foreground">Réservation confirmée !</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Votre rendez-vous a été confirmé. Vous recevrez un email de confirmation avec tous les détails.
        </p>
        <div className="p-6 bg-background-light rounded-lg max-w-md mx-auto">
          <div className="space-y-3 text-left">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service</span>
              <span className="font-semibold text-foreground">{service.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date</span>
              <span className="font-semibold text-foreground">{getSelectedDateFull()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Heure</span>
              <span className="font-semibold text-foreground">{selectedTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Paiement</span>
              <span className="font-semibold text-foreground">
                {paymentMethod === "paypal"
                  ? "PayPal.me"
                  : "Sur place"}
              </span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg">
              <span className="font-semibold text-foreground">Total</span>
              <span className="font-bold text-primary">{calculateTotal()}€</span>
            </div>
          </div>
        </div>

        {paymentMethod === "paypal" && paypalMeUrl && (
          <div className="max-w-md mx-auto space-y-3">
            <Button variant="hero" size="lg" asChild className="w-full">
              <a
                href={paypalMeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Payer {calculateTotal()}€ via PayPal.me
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              Vous serez redirigé vers la page PayPal du prestataire dans un
              nouvel onglet.
            </p>
          </div>
        )}

        <Button
          variant={paymentMethod === "paypal" ? "outline" : "hero"}
          size="lg"
          onClick={() => navigate("/")}
        >
          Retour à l'accueil
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {activeStep !== "confirmation" && (
            <div className="mb-6">
              <h1 className="text-3xl font-display font-bold text-foreground mb-2">Réservation</h1>
              <p className="text-muted-foreground">Complétez les étapes ci-dessous pour finaliser votre rendez-vous</p>
            </div>
          )}

          <div className="space-y-4">
            {renderServiceStep()}
            {renderSlotStep()}
            {renderInfoStep()}
            {renderPaymentInfoStep()}
            {renderConfirmation()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Booking;
