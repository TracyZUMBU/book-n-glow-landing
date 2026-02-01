import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CreditCard, 
  Banknote, 
  Clock, 
  Calendar, 
  Phone, 
  Instagram, 
  AlertCircle,
  Percent,
  Euro,
  CheckCircle2,
  XCircle
} from "lucide-react";

interface BookingSettingsStepProps {
  data: {
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
  };
  onChange: (data: Partial<BookingSettingsStepProps["data"]>) => void;
}

const BookingSettingsStep = ({ data, onChange }: BookingSettingsStepProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Configurez vos réservations
        </h2>
        <p className="text-muted-foreground">
          Personnalisez l'expérience de réservation pour vos clients. Ces paramètres peuvent être modifiés à tout moment.
        </p>
      </div>

      {/* Payment Method */}
      <Card>
        <CardContent className="pt-6">
          <Label className="flex items-center gap-2 text-base font-semibold mb-4">
            <CreditCard className="w-5 h-5 text-primary" />
            Mode de paiement
          </Label>
          
          <RadioGroup
            value={data.paymentMethod}
            onValueChange={(value) => onChange({ paymentMethod: value as "onsite" | "paypal" | "stripe" })}
            className="space-y-3"
          >
            <div className="flex items-start gap-3 p-4 rounded-lg border hover:border-primary/50 transition-colors">
              <RadioGroupItem value="onsite" id="onsite" className="mt-1" />
              <div className="flex-1">
                <Label htmlFor="onsite" className="flex items-center gap-2 cursor-pointer font-medium">
                  <Banknote className="w-4 h-4 text-green-600" />
                  Paiement sur place (espèces)
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Le client paie intégralement lors de son rendez-vous.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border hover:border-primary/50 transition-colors">
              <RadioGroupItem value="paypal" id="paypal" className="mt-1" />
              <div className="flex-1">
                <Label htmlFor="paypal" className="flex items-center gap-2 cursor-pointer font-medium">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/>
                  </svg>
                  PayPal.me (acompte + espèces)
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Le client verse un acompte via PayPal.me, puis paie le reste sur place.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border hover:border-primary/50 transition-colors">
              <RadioGroupItem value="stripe" id="stripe" className="mt-1" />
              <div className="flex-1">
                <Label htmlFor="stripe" className="flex items-center gap-2 cursor-pointer font-medium">
                  <CreditCard className="w-4 h-4 text-purple-600" />
                  Carte bancaire (Stripe)
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Paiement sécurisé par carte bancaire en ligne.
                </p>
              </div>
            </div>
          </RadioGroup>

          {/* PayPal Settings */}
          {data.paymentMethod === "paypal" && (
            <div className="mt-4 p-4 bg-muted/50 rounded-lg space-y-4">
              <div className="space-y-2">
                <Label htmlFor="paypalUsername">Votre nom d'utilisateur PayPal.me</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                    paypal.me/
                  </span>
                  <Input
                    id="paypalUsername"
                    className="pl-24"
                    placeholder="votre_username"
                    value={data.paypalUsername}
                    onChange={(e) => onChange({ paypalUsername: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Type d'acompte</Label>
                <RadioGroup
                  value={data.depositType}
                  onValueChange={(value) => onChange({ depositType: value as "fixed" | "percentage" })}
                  className="flex gap-4"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="fixed" id="fixed" />
                    <Label htmlFor="fixed" className="flex items-center gap-1 cursor-pointer">
                      <Euro className="w-4 h-4" /> Montant fixe
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="percentage" id="percentage" />
                    <Label htmlFor="percentage" className="flex items-center gap-1 cursor-pointer">
                      <Percent className="w-4 h-4" /> Pourcentage
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="depositAmount">
                  Montant de l'acompte {data.depositType === "percentage" ? "(%)" : "(€)"}
                </Label>
                <Input
                  id="depositAmount"
                  type="number"
                  min={0}
                  max={data.depositType === "percentage" ? 100 : 1000}
                  value={data.depositAmount}
                  onChange={(e) => onChange({ depositAmount: parseInt(e.target.value) || 0 })}
                />
                {data.depositType === "fixed" && (
                  <p className="text-xs text-amber-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Veillez à fixer un montant inférieur au prix de vos services.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Stripe Settings */}
          {data.paymentMethod === "stripe" && (
            <div className="mt-4 p-4 bg-muted/50 rounded-lg space-y-4">
              <div className="space-y-2">
                <Label>Type de paiement par carte</Label>
                <RadioGroup
                  value={data.stripePaymentType}
                  onValueChange={(value) => onChange({ stripePaymentType: value as "deposit" | "full" })}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="deposit" id="stripeDeposit" />
                    <Label htmlFor="stripeDeposit" className="cursor-pointer">
                      Acompte uniquement (le reste sur place)
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="full" id="stripeFull" />
                    <Label htmlFor="stripeFull" className="cursor-pointer">
                      Paiement intégral en ligne
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {data.stripePaymentType === "deposit" && (
                <>
                  <div className="space-y-2">
                    <Label>Type d'acompte</Label>
                    <RadioGroup
                      value={data.depositType}
                      onValueChange={(value) => onChange({ depositType: value as "fixed" | "percentage" })}
                      className="flex gap-4"
                    >
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="fixed" id="stripeFixed" />
                        <Label htmlFor="stripeFixed" className="flex items-center gap-1 cursor-pointer">
                          <Euro className="w-4 h-4" /> Montant fixe
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="percentage" id="stripePercentage" />
                        <Label htmlFor="stripePercentage" className="flex items-center gap-1 cursor-pointer">
                          <Percent className="w-4 h-4" /> Pourcentage
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stripeDepositAmount">
                      Montant de l'acompte {data.depositType === "percentage" ? "(%)" : "(€)"}
                    </Label>
                    <Input
                      id="stripeDepositAmount"
                      type="number"
                      min={0}
                      max={data.depositType === "percentage" ? 100 : 1000}
                      value={data.depositAmount}
                      onChange={(e) => onChange({ depositAmount: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Confirmation Settings */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <Label className="flex items-center gap-2 text-base font-semibold">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              Confirmation client requise
            </Label>
            <Switch
              checked={data.requireConfirmation}
              onCheckedChange={(checked) => onChange({ requireConfirmation: checked })}
            />
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            Si activé, le client devra confirmer son rendez-vous la veille à l'heure que vous définissez.
          </p>

          {data.requireConfirmation && (
            <div className="p-4 bg-muted/50 rounded-lg space-y-2">
              <Label htmlFor="confirmationHour">
                Heure limite de confirmation (la veille du rendez-vous)
              </Label>
              <Select
                value={data.confirmationHour}
                onValueChange={(value) => onChange({ confirmationHour: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez une heure" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 24 }, (_, i) => (
                    <SelectItem key={i} value={`${i.toString().padStart(2, "0")}:00`}>
                      {`${i.toString().padStart(2, "0")}:00`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Exemple : si vous choisissez 18:00, le client devra confirmer avant 18h la veille.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Booking Time Settings */}
      <Card>
        <CardContent className="pt-6 space-y-6">
          <Label className="flex items-center gap-2 text-base font-semibold">
            <Clock className="w-5 h-5 text-primary" />
            Paramètres de temps
          </Label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="minBookingHours">
                Délai minimum pour réserver le jour même
              </Label>
              <Select
                value={data.minBookingHours.toString()}
                onValueChange={(value) => onChange({ minBookingHours: parseInt(value) })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 6, 8, 12, 24].map((hours) => (
                    <SelectItem key={hours} value={hours.toString()}>
                      {hours} heure{hours > 1 ? "s" : ""} à l'avance
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Nombre d'heures minimum avant un créneau pour qu'il soit réservable.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="slotInterval">
                Intervalle entre les créneaux
              </Label>
              <Select
                value={data.slotInterval.toString()}
                onValueChange={(value) => onChange({ slotInterval: parseInt(value) })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">1 heure</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Ex: 30 min → créneaux à 10:00, 10:30, 11:00...
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="advanceBookingMonths">
              Réservation possible jusqu'à
            </Label>
            <Select
              value={data.advanceBookingMonths.toString()}
              onValueChange={(value) => onChange({ advanceBookingMonths: parseInt(value) })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 mois à l'avance</SelectItem>
                <SelectItem value="2">2 mois à l'avance</SelectItem>
                <SelectItem value="3">3 mois à l'avance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Cancellation Settings */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <Label className="flex items-center gap-2 text-base font-semibold">
              <XCircle className="w-5 h-5 text-primary" />
              Autoriser les annulations
            </Label>
            <Switch
              checked={data.allowCancellation}
              onCheckedChange={(checked) => onChange({ allowCancellation: checked })}
            />
          </div>

          {data.allowCancellation && (
            <div className="p-4 bg-muted/50 rounded-lg space-y-2">
              <Label htmlFor="cancellationHours">
                Délai minimum pour annuler
              </Label>
              <Select
                value={data.cancellationHours.toString()}
                onValueChange={(value) => onChange({ cancellationHours: parseInt(value) })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[6, 12, 24, 48, 72].map((hours) => (
                    <SelectItem key={hours} value={hours.toString()}>
                      {hours} heures avant le rendez-vous
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Le client ne pourra plus annuler après ce délai.
              </p>
            </div>
          )}

          {!data.allowCancellation && (
            <p className="text-sm text-muted-foreground">
              Les clients ne pourront pas annuler leurs rendez-vous en ligne.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Contact Method */}
      <Card>
        <CardContent className="pt-6">
          <Label className="flex items-center gap-2 text-base font-semibold mb-4">
            <Phone className="w-5 h-5 text-primary" />
            Comment vos clients peuvent-ils vous contacter ?
          </Label>
          
          <p className="text-sm text-muted-foreground mb-4">
            Cette information sera visible uniquement par les clients ayant déjà réservé.
          </p>

          <RadioGroup
            value={data.contactMethod}
            onValueChange={(value) => onChange({ contactMethod: value as "instagram" | "phone" })}
            className="space-y-3"
          >
            <div className="flex items-start gap-3 p-4 rounded-lg border hover:border-primary/50 transition-colors">
              <RadioGroupItem value="instagram" id="contactInstagram" className="mt-1" />
              <div className="flex-1">
                <Label htmlFor="contactInstagram" className="flex items-center gap-2 cursor-pointer font-medium">
                  <Instagram className="w-4 h-4" />
                  Via Instagram
                </Label>
                <p className="text-xs text-muted-foreground mt-1">
                  En cas de problème, le client vous contactera via votre compte Instagram.
                  Nous recommandons le téléphone pour une communication plus fluide.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg border hover:border-primary/50 transition-colors">
              <RadioGroupItem value="phone" id="contactPhone" className="mt-1" />
              <div className="flex-1">
                <Label htmlFor="contactPhone" className="flex items-center gap-2 cursor-pointer font-medium">
                  <Phone className="w-4 h-4" />
                  Via téléphone
                </Label>
                <p className="text-xs text-muted-foreground mt-1">
                  Votre numéro sera accessible uniquement aux clients ayant déjà réservé.
                </p>
              </div>
            </div>
          </RadioGroup>

          {data.contactMethod === "phone" && (
            <div className="mt-4 p-4 bg-muted/50 rounded-lg space-y-2">
              <Label htmlFor="phoneNumber">Votre numéro de téléphone</Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="06 12 34 56 78"
                value={data.phoneNumber}
                onChange={(e) => onChange({ phoneNumber: e.target.value })}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingSettingsStep;
