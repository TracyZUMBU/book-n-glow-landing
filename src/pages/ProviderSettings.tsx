import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Settings,
  CreditCard,
  Clock,
  Ban,
  CheckCircle2,
  ExternalLink,
  Banknote,
  Wallet,
  AlertCircle,
  Info,
  Gift,
} from "lucide-react";
import LoyaltySettingsForm from "@/components/loyalty/LoyaltySettingsForm";
import { defaultLoyaltySettings } from "@/data/fakeLoyaltyData";

const ProviderSettings = () => {
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [stripeConnected, setStripeConnected] = useState(true);
  const [cancellationPolicy, setCancellationPolicy] = useState("flexible");
  const [depositPercentage, setDepositPercentage] = useState("30");
  const [paypalUsername, setPaypalUsername] = useState("");

  const [timeSlots, setTimeSlots] = useState([
    { id: 1, day: "Lundi", enabled: true, start: "09:00", end: "18:00" },
    { id: 2, day: "Mardi", enabled: true, start: "09:00", end: "18:00" },
    { id: 3, day: "Mercredi", enabled: true, start: "09:00", end: "18:00" },
    { id: 4, day: "Jeudi", enabled: true, start: "09:00", end: "18:00" },
    { id: 5, day: "Vendredi", enabled: true, start: "09:00", end: "18:00" },
    { id: 6, day: "Samedi", enabled: false, start: "10:00", end: "16:00" },
    { id: 7, day: "Dimanche", enabled: false, start: "10:00", end: "14:00" },
  ]);

  const toggleDayEnabled = (id: number) => {
    setTimeSlots((prev) =>
      prev.map((slot) =>
        slot.id === id ? { ...slot, enabled: !slot.enabled } : slot,
      ),
    );
  };

  const updateSlotTime = (
    id: number,
    field: "start" | "end",
    value: string,
  ) => {
    setTimeSlots((prev) =>
      prev.map((slot) => (slot.id === id ? { ...slot, [field]: value } : slot)),
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container-mobile py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Settings className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                  Paramètres de réservation
                </h1>
                <p className="text-muted-foreground">
                  Configurez les options de votre système de réservation
                </p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="payment" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 h-auto p-1 bg-background-light">
              <TabsTrigger
                value="payment"
                className="flex items-center gap-2 py-3"
              >
                <CreditCard className="w-4 h-4" />
                <span className="hidden sm:inline">Paiement</span>
              </TabsTrigger>
              <TabsTrigger
                value="schedule"
                className="flex items-center gap-2 py-3"
              >
                <Clock className="w-4 h-4" />
                <span className="hidden sm:inline">Créneaux</span>
              </TabsTrigger>
              <TabsTrigger
                value="cancellation"
                className="flex items-center gap-2 py-3"
              >
                <Ban className="w-4 h-4" />
                <span className="hidden sm:inline">Annulation</span>
              </TabsTrigger>
              <TabsTrigger
                value="loyalty"
                className="flex items-center gap-2 py-3"
              >
                <Gift className="w-4 h-4" />
                <span className="hidden sm:inline">Fidélité</span>
              </TabsTrigger>
            </TabsList>

            {/* Payment Tab */}
            <TabsContent value="payment" className="space-y-6">
              <Card className="p-6 border-2 border-border bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-semibold text-foreground">
                      Mode de paiement
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Choisissez comment vos clients vous paieront
                    </p>
                  </div>
                </div>

                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  {/* Cash Payment Option */}
                  <div
                    className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      paymentMethod === "cash"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setPaymentMethod("cash")}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-highlight/20 to-highlight/10 flex items-center justify-center flex-shrink-0">
                        <Banknote className="w-6 h-6 text-highlight" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="cash" id="cash" />
                          <Label
                            htmlFor="cash"
                            className="text-lg font-semibold cursor-pointer"
                          >
                            Paiement sur place (espèces)
                          </Label>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2 ml-7">
                          Les clients paieront directement la totalité de la
                          prestation sur place lors de la prestation. Aucun
                          acompte ne sera demandé.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* PayPal Option */}
                  <div
                    className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      paymentMethod === "paypal"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setPaymentMethod("paypal")}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                        <Wallet className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label
                            htmlFor="paypal"
                            className="text-lg font-semibold cursor-pointer"
                          >
                            PayPal.Me (avec acompte)
                          </Label>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2 ml-7">
                          Le client est redirige vers votre page PayPal.Me avec
                          le montant a payer lors de la reservation. Le client
                          dispose de 15 minutes pour payer, puis vous pouvez
                          annuler le rendez-vous si le paiement n'a pas ete
                          effectue.
                        </p>

                        {paymentMethod === "paypal" && (
                          <div className="mt-4 ml-7 space-y-4 animate-in slide-in-from-top-2 duration-200">
                            <div className="space-y-2">
                              <Label htmlFor="paypal-username">
                                Votre identifiant PayPal.Me
                              </Label>
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">
                                  paypal.me/
                                </span>
                                <Input
                                  id="paypal-username"
                                  placeholder="votre-identifiant"
                                  value={paypalUsername}
                                  onChange={(e) =>
                                    setPaypalUsername(e.target.value)
                                  }
                                  className="flex-1"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="deposit-paypal">
                                Pourcentage d'acompte
                              </Label>
                              <div className="flex items-center gap-2">
                                <Input
                                  id="deposit-paypal"
                                  type="number"
                                  min="10"
                                  max="100"
                                  value={depositPercentage}
                                  onChange={(e) =>
                                    setDepositPercentage(e.target.value)
                                  }
                                  className="w-24"
                                />
                                <span className="text-muted-foreground">%</span>
                              </div>
                            </div>

                            {/* Warning Alert */}
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 border border-amber-200">
                              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                              <p className="text-sm text-amber-700">
                                <span className="font-semibold">
                                  Attention :
                                </span>{" "}
                                Si vous requérez un acompte et autorisez les
                                annulations, vous devrez rembourser l'acompte au
                                client si celui-ci annule son rendez-vous dans
                                les délais impartis. Si vous ne souhaitez pas
                                rembourser l'acompte, il est préférable de ne
                                pas autoriser les annulations.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Stripe Option */}
                  <div
                    className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      paymentMethod === "stripe"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setPaymentMethod("stripe")}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center flex-shrink-0">
                        <CreditCard className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="stripe" id="stripe" />
                          <Label
                            htmlFor="stripe"
                            className="text-lg font-semibold cursor-pointer"
                          >
                            Paiement par carte bancaire (Stripe)
                          </Label>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2 ml-7">
                          Les clients pourront payer par carte bancaire lors de
                          la réservation. Vous devez connecter votre compte
                          Stripe pour activer cette option.
                        </p>

                        {paymentMethod === "stripe" && (
                          <div className="mt-4 ml-7 animate-in slide-in-from-top-2 duration-200">
                            {/* Stripe Connection Card */}
                            <div className="rounded-xl border-2 border-border overflow-hidden bg-card">
                              {/* Header */}
                              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-4 border-b border-border">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                                      <CreditCard className="w-5 h-5 text-primary-foreground" />
                                    </div>
                                    <div>
                                      <h3 className="font-semibold text-foreground">
                                        Compte Stripe
                                      </h3>
                                      {stripeConnected ? (
                                        <div className="flex items-center gap-1.5 text-sm">
                                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                                          <span className="text-green-600 font-medium">
                                            Connecté
                                          </span>
                                        </div>
                                      ) : (
                                        <div className="flex items-center gap-1.5 text-sm">
                                          <AlertCircle className="w-4 h-4 text-amber-500" />
                                          <span className="text-amber-600 font-medium">
                                            Non connecté
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Content */}
                              <div className="p-4 space-y-4">
                                {stripeConnected ? (
                                  <>
                                    <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-100">
                                      <Info className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                      <p className="text-sm text-green-700">
                                        Les clients peuvent payer par carte
                                        bancaire. Les fonds seront transférés
                                        sur votre compte bancaire selon les
                                        délais de Stripe (généralement 2-7
                                        jours).
                                      </p>
                                    </div>

                                    <div className="space-y-2">
                                      <Label htmlFor="deposit-stripe">
                                        Pourcentage d'acompte
                                      </Label>
                                      <div className="flex items-center gap-2">
                                        <Input
                                          id="deposit-stripe"
                                          type="number"
                                          min="10"
                                          max="100"
                                          value={depositPercentage}
                                          onChange={(e) =>
                                            setDepositPercentage(e.target.value)
                                          }
                                          className="w-24"
                                        />
                                        <span className="text-muted-foreground">
                                          %
                                        </span>
                                      </div>
                                      <p className="text-xs text-muted-foreground">
                                        Le client paiera ce pourcentage lors de
                                        la réservation
                                      </p>
                                    </div>

                                    <Separator />

                                    <div className="flex flex-wrap gap-3">
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        className="gap-2"
                                      >
                                        <Settings className="w-4 h-4" />
                                        Paramètres Stripe
                                      </Button>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        className="gap-2"
                                      >
                                        <ExternalLink className="w-4 h-4" />
                                        Dashboard Stripe
                                      </Button>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 border border-amber-100">
                                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                      <p className="text-sm text-amber-700">
                                        Connectez votre compte Stripe pour
                                        accepter les paiements par carte
                                        bancaire de vos clients.
                                      </p>
                                    </div>

                                    <Button
                                      variant="hero"
                                      className="w-full gap-2"
                                    >
                                      <CreditCard className="w-4 h-4" />
                                      Connecter mon compte Stripe
                                    </Button>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </Card>
            </TabsContent>

            {/* Schedule Tab */}
            <TabsContent value="schedule" className="space-y-6">
              <Card className="p-6 border-2 border-border bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-semibold text-foreground">
                      Créneaux horaires par défaut
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Définissez vos horaires de travail habituels
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {timeSlots.map((slot) => (
                    <div
                      key={slot.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                        slot.enabled
                          ? "border-border bg-card"
                          : "border-border/50 bg-muted/30"
                      }`}
                    >
                      <Switch
                        checked={slot.enabled}
                        onCheckedChange={() => toggleDayEnabled(slot.id)}
                      />
                      <span
                        className={`w-24 font-medium ${
                          slot.enabled
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {slot.day}
                      </span>
                      {slot.enabled && (
                        <div className="flex items-center gap-2 flex-1">
                          <Input
                            type="time"
                            value={slot.start}
                            onChange={(e) =>
                              updateSlotTime(slot.id, "start", e.target.value)
                            }
                            className="w-28"
                          />
                          <span className="text-muted-foreground">à</span>
                          <Input
                            type="time"
                            value={slot.end}
                            onChange={(e) =>
                              updateSlotTime(slot.id, "end", e.target.value)
                            }
                            className="w-28"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Cancellation Tab */}
            <TabsContent value="cancellation" className="space-y-6">
              <Card className="p-6 border-2 border-border bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Ban className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-semibold text-foreground">
                      Politique d'annulation
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Définissez les règles d'annulation pour vos clients
                    </p>
                  </div>
                </div>

                <RadioGroup
                  value={cancellationPolicy}
                  onValueChange={setCancellationPolicy}
                  className="space-y-4"
                >
                  <div
                    className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      cancellationPolicy === "flexible"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setCancellationPolicy("flexible")}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="flexible" id="flexible" />
                      <div>
                        <Label
                          htmlFor="flexible"
                          className="text-lg font-semibold cursor-pointer"
                        >
                          Flexible
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Annulation gratuite jusqu'à 24h avant le rendez-vous
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      cancellationPolicy === "moderate"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setCancellationPolicy("moderate")}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="moderate" id="moderate" />
                      <div>
                        <Label
                          htmlFor="moderate"
                          className="text-lg font-semibold cursor-pointer"
                        >
                          Modérée
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Annulation gratuite jusqu'à 48h avant le rendez-vous
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      cancellationPolicy === "strict"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setCancellationPolicy("strict")}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="strict" id="strict" />
                      <div>
                        <Label
                          htmlFor="strict"
                          className="text-lg font-semibold cursor-pointer"
                        >
                          Stricte
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Aucune annulation possible après réservation
                        </p>
                      </div>
                    </div>
                  </div>
                </RadioGroup>
              </Card>
            </TabsContent>

            {/* Loyalty Tab */}
            <TabsContent value="loyalty" className="space-y-6">
              <LoyaltySettingsForm
                initialSettings={defaultLoyaltySettings}
                onSave={(settings) => {
                  console.log("Loyalty settings saved:", settings);
                }}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ProviderSettings;
