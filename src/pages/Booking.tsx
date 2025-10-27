import { useState } from "react";
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
  CheckCircle2
} from "lucide-react";
import Navigation from "@/components/landing/Navigation";

const Booking = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("27");
  const [selectedTime, setSelectedTime] = useState<string>("10:00");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [step, setStep] = useState<"service" | "slot" | "info" | "summary" | "payment-info" | "payment" | "confirmation">("service");

  // Mock service data
  const service = {
    name: "Maquillage marié",
    duration: 90,
    price: 190,
    options: [
      { id: "1", name: "Retouche durant l'événement", price: 100 },
      { id: "2", name: "Essai maquillage préalable", price: 50 }
    ]
  };

  const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
  const weekDays = [
    { day: "Mer", date: "22" },
    { day: "Jeu", date: "23" },
    { day: "Ven", date: "24" },
    { day: "Sam", date: "25" },
    { day: "Dim", date: "26" },
    { day: "Lun", date: "27" },
    { day: "Mar", date: "28" }
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

  const handleContinue = () => {
    if (step === "service") setStep("slot");
    else if (step === "slot") setStep("info");
    else if (step === "info" && isAuthenticated) setStep("summary");
    else if (step === "summary") setStep("payment-info");
    else if (step === "payment-info") setStep("payment");
    else if (step === "payment") setStep("confirmation");
  };

  const renderServiceDetails = () => (
    <Card className="p-6 border-2 border-border bg-card">
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
      </div>
    </Card>
  );

  const renderTimeSlots = () => (
    <Card className="p-6 border-2 border-border bg-card">
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

        <Separator />

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
    </Card>
  );

  const renderClientInfo = () => {
    if (isAuthenticated) {
      return (
        <Card className="p-6 border-2 border-border bg-card">
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
      <Card className="p-6 border-2 border-border bg-card">
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

  const renderSummary = () => (
    <Card className="p-6 border-2 border-border bg-card">
      <h2 className="text-2xl font-display font-semibold mb-6 text-foreground">Récapitulatif</h2>
      
      <div className="space-y-4">
        <div className="p-4 bg-background-light rounded-lg">
          <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{service.duration} minutes</span>
            <span className="font-semibold text-foreground">{service.price}€</span>
          </div>
        </div>

        {selectedOptions.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Options sélectionnées</h4>
            {selectedOptions.map(optionId => {
              const option = service.options.find(o => o.id === optionId);
              return option ? (
                <div key={optionId} className="flex justify-between text-sm p-3 bg-background-light rounded-lg">
                  <span className="text-foreground">{option.name}</span>
                  <span className="font-semibold text-foreground">+{option.price}€</span>
                </div>
              ) : null;
            })}
          </div>
        )}

        <Separator />

        <div className="p-4 bg-background-light rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">Lundi 27 octobre</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-foreground">{selectedTime}</span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between items-center text-xl font-bold pt-4">
          <span className="text-foreground">Total</span>
          <span className="text-primary">{calculateTotal()}€</span>
        </div>
      </div>
    </Card>
  );

  const renderPaymentInfo = () => (
    <Card className="p-6 border-2 border-border bg-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <CreditCard className="w-6 h-6 text-primary-foreground" />
        </div>
        <h2 className="text-2xl font-display font-semibold text-foreground">Paiement</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Paiement sur place</h3>
          <p className="text-muted-foreground">
            Un montant de <span className="text-primary font-bold text-lg">{calculateTotal()}€</span> sera à régler le jour du rendez-vous{" "}
            <span className="font-semibold text-foreground">uniquement en espèces</span>.
          </p>
        </div>

        <div className="border-l-4 border-primary bg-primary/5 p-4 rounded-r-lg">
          <h4 className="text-lg font-semibold text-foreground mb-3">Politique d'annulation</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ce rendez-vous ne peut pas être annulé. Assurez-vous d'être en mesure de vous présenter le jour du rendez-vous. 
            Si vous ne vous présentez pas, vous risquez la suspension, voire la suppression définitive de votre compte.
          </p>
        </div>
      </div>
    </Card>
  );

  const renderPayment = () => (
    <Card className="p-6 border-2 border-border bg-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
          <CreditCard className="w-6 h-6 text-primary-foreground" />
        </div>
        <h2 className="text-2xl font-display font-semibold text-foreground">Paiement</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="card-number">Numéro de carte</Label>
          <Input id="card-number" placeholder="1234 5678 9012 3456" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiry">Date d'expiration</Label>
            <Input id="expiry" placeholder="MM/AA" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" placeholder="123" />
          </div>
        </div>
        <div className="p-4 bg-background-light rounded-lg flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground">Paiement sécurisé SSL</span>
        </div>
      </div>
    </Card>
  );

  const renderConfirmation = () => (
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
            <span className="font-semibold text-foreground">27 octobre</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Heure</span>
            <span className="font-semibold text-foreground">{selectedTime}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg">
            <span className="font-semibold text-foreground">Total payé</span>
            <span className="font-bold text-primary">{calculateTotal()}€</span>
          </div>
        </div>
      </div>
      <Button variant="hero" size="lg" onClick={() => navigate("/")}>
        Retour à l'accueil
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {step !== "confirmation" && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {step !== "service" && (
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      if (step === "slot") setStep("service");
                      else if (step === "info") setStep("slot");
                      else if (step === "summary") setStep("info");
                      else if (step === "payment-info") setStep("summary");
                      else if (step === "payment") setStep("payment-info");
                    }}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Retour
                  </Button>
                )}
              </div>
            </div>
          )}

          <div className="space-y-6">
            {step === "service" && renderServiceDetails()}
            {step === "slot" && renderTimeSlots()}
            {step === "info" && renderClientInfo()}
            {step === "summary" && renderSummary()}
            {step === "payment-info" && renderPaymentInfo()}
            {step === "payment" && renderPayment()}
            {step === "confirmation" && renderConfirmation()}

            {step !== "confirmation" && (
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handleContinue}
                disabled={step === "info" && !isAuthenticated}
              >
                {step === "payment-info" ? "Confirmer la réservation" : step === "payment" ? "Confirmer et payer" : "Continuer"}
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Booking;
