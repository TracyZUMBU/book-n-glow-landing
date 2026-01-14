import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Gift,
  Stamp,
  Trophy,
  Info,
  Sparkles,
  CheckCircle2,
  Euro,
  Percent,
  Package,
  Scissors,
} from "lucide-react";
import { 
  LoyaltyCardSettings, 
  getRewardTypeLabel,
  fakeAvailableServices 
} from "@/data/fakeLoyaltyData";

interface LoyaltySettingsFormProps {
  initialSettings?: LoyaltyCardSettings;
  onSave?: (settings: LoyaltyCardSettings) => void;
}

const LoyaltySettingsForm = ({ 
  initialSettings,
  onSave 
}: LoyaltySettingsFormProps) => {
  const [settings, setSettings] = useState<LoyaltyCardSettings>(
    initialSettings || {
      enabled: false,
      stampsRequired: 10,
      rewardType: 'percentage_discount',
      rewardValue: 10,
      validityMonths: 3,
      eligibleServices: [],
    }
  );

  const handleSave = () => {
    onSave?.(settings);
  };

  const getRewardIcon = (type: LoyaltyCardSettings['rewardType']) => {
    switch (type) {
      case 'fixed_discount':
        return <Euro className="w-4 h-4" />;
      case 'percentage_discount':
        return <Percent className="w-4 h-4" />;
      case 'free_service':
        return <Scissors className="w-4 h-4" />;
      case 'free_product':
        return <Package className="w-4 h-4" />;
    }
  };

  const getRewardPreviewText = () => {
    switch (settings.rewardType) {
      case 'fixed_discount':
        return `${settings.rewardValue}€ de réduction`;
      case 'percentage_discount':
        return `${settings.rewardValue}% de réduction`;
      case 'free_service':
        return settings.rewardServiceName || 'une prestation gratuite';
      case 'free_product':
        return settings.rewardProductName || 'un produit offert';
    }
  };

  const toggleEligibleService = (serviceId: string, serviceName: string) => {
    const current = settings.eligibleServices || [];
    const exists = current.find(s => s.id === serviceId);
    if (exists) {
      setSettings({
        ...settings,
        eligibleServices: current.filter(s => s.id !== serviceId),
      });
    } else {
      setSettings({
        ...settings,
        eligibleServices: [...current, { id: serviceId, name: serviceName }],
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Enable/Disable Toggle */}
      <Card className={`p-6 border-2 transition-all ${
        settings.enabled 
          ? 'border-primary bg-primary/5' 
          : 'border-border bg-card'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
              settings.enabled 
                ? 'bg-gradient-to-br from-primary to-secondary' 
                : 'bg-muted'
            }`}>
              <Stamp className={`w-6 h-6 ${
                settings.enabled ? 'text-primary-foreground' : 'text-muted-foreground'
              }`} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground">
                Carte de fidélité
              </h3>
              <p className="text-sm text-muted-foreground">
                {settings.enabled 
                  ? 'Active - Vos clients accumulent des tampons' 
                  : 'Inactive - Activez pour fidéliser vos clients'}
              </p>
            </div>
          </div>
          <Switch
            checked={settings.enabled}
            onCheckedChange={(checked) => 
              setSettings({ ...settings, enabled: checked })
            }
          />
        </div>
      </Card>

      {/* Settings Form */}
      {settings.enabled && (
        <div className="space-y-6 animate-in slide-in-from-top-2 duration-300">
          {/* Stamps Configuration */}
          <Card className="p-6 border-2 border-border bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <Stamp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Configuration de la carte</h3>
                <p className="text-sm text-muted-foreground">
                  Définissez le nombre de prestations nécessaires
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Stamps Required */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="stampsRequired">Nombre de prestations pour la récompense</Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        Chaque prestation réservée = 1 tampon sur la carte.
                        Une fois la carte complète, le client reçoit sa récompense.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    id="stampsRequired"
                    type="number"
                    min="3"
                    max="20"
                    value={settings.stampsRequired}
                    onChange={(e) => 
                      setSettings({ 
                        ...settings, 
                        stampsRequired: parseInt(e.target.value) || 10 
                      })
                    }
                    className="w-24"
                  />
                  <span className="text-sm text-muted-foreground">prestations</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Recommandé : entre 8 et 12 prestations pour un bon équilibre
                </p>
              </div>

              {/* Validity */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="validityMonths">Validité de la récompense</Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        Durée pendant laquelle le client peut utiliser sa récompense
                        une fois la carte complétée.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    id="validityMonths"
                    type="number"
                    min="1"
                    max="12"
                    value={settings.validityMonths}
                    onChange={(e) => 
                      setSettings({ 
                        ...settings, 
                        validityMonths: parseInt(e.target.value) || 3 
                      })
                    }
                    className="w-24"
                  />
                  <span className="text-sm text-muted-foreground">mois</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Reward Configuration */}
          <Card className="p-6 border-2 border-border bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Type de récompense</h3>
                <p className="text-sm text-muted-foreground">
                  Choisissez ce que vos clients recevront
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Reward Type */}
              <div className="space-y-2">
                <Label htmlFor="rewardType">Récompense offerte</Label>
                <Select
                  value={settings.rewardType}
                  onValueChange={(value: LoyaltyCardSettings['rewardType']) => 
                    setSettings({ ...settings, rewardType: value })
                  }
                >
                  <SelectTrigger className="w-full sm:w-64">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fixed_discount">
                      <div className="flex items-center gap-2">
                        <Euro className="w-4 h-4" />
                        Réduction fixe (€)
                      </div>
                    </SelectItem>
                    <SelectItem value="percentage_discount">
                      <div className="flex items-center gap-2">
                        <Percent className="w-4 h-4" />
                        Réduction en %
                      </div>
                    </SelectItem>
                    <SelectItem value="free_service">
                      <div className="flex items-center gap-2">
                        <Scissors className="w-4 h-4" />
                        Prestation offerte
                      </div>
                    </SelectItem>
                    <SelectItem value="free_product">
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        Produit offert
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Reward Value (for discounts) */}
              {(settings.rewardType === 'fixed_discount' || 
                settings.rewardType === 'percentage_discount') && (
                <div className="space-y-2 animate-in slide-in-from-top-2 duration-200">
                  <Label htmlFor="rewardValue">
                    Valeur de la réduction
                  </Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="rewardValue"
                      type="number"
                      min="1"
                      max={settings.rewardType === 'percentage_discount' ? 100 : 500}
                      value={settings.rewardValue}
                      onChange={(e) => 
                        setSettings({ 
                          ...settings, 
                          rewardValue: parseInt(e.target.value) || 10 
                        })
                      }
                      className="w-24"
                    />
                    <span className="text-sm text-muted-foreground">
                      {settings.rewardType === 'fixed_discount' ? '€' : '%'}
                    </span>
                  </div>
                </div>
              )}

              {/* Service Selection (for free service) */}
              {settings.rewardType === 'free_service' && (
                <div className="space-y-3 animate-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center gap-2">
                    <Label>Prestations éligibles à la récompense</Label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          Sélectionnez les prestations que le client pourra choisir
                          comme récompense gratuite.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {fakeAvailableServices.map((service) => (
                      <div 
                        key={service.id}
                        className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                      >
                        <Checkbox
                          id={service.id}
                          checked={settings.eligibleServices?.some(s => s.id === service.id)}
                          onCheckedChange={() => toggleEligibleService(service.id, service.name)}
                        />
                        <label
                          htmlFor={service.id}
                          className="text-sm font-medium leading-none cursor-pointer"
                        >
                          {service.name}
                        </label>
                      </div>
                    ))}
                  </div>
                  {(settings.eligibleServices?.length || 0) === 0 && (
                    <p className="text-sm text-amber-600 flex items-center gap-2">
                      <Info className="w-4 h-4" />
                      Sélectionnez au moins une prestation éligible
                    </p>
                  )}
                </div>
              )}

              {/* Product Name (for free product) */}
              {settings.rewardType === 'free_product' && (
                <div className="space-y-2 animate-in slide-in-from-top-2 duration-200">
                  <Label htmlFor="productName">Nom du produit offert</Label>
                  <Input
                    id="productName"
                    placeholder="Ex: Shampoing, Crème hydratante..."
                    value={settings.rewardProductName || ''}
                    onChange={(e) => 
                      setSettings({ ...settings, rewardProductName: e.target.value })
                    }
                    className="sm:w-64"
                  />
                </div>
              )}
            </div>
          </Card>

          {/* Preview Card */}
          <Card className="p-6 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Aperçu pour vos clients</h3>
                <p className="text-sm text-muted-foreground">
                  Voici ce que vos clients verront
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-card border border-border p-4 space-y-4">
              {/* Visual Stamp Card Preview */}
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Votre carte de fidélité</p>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: settings.stampsRequired }).map((_, index) => (
                    <div
                      key={index}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                        index < 7 
                          ? 'bg-gradient-to-br from-primary to-secondary border-primary text-white' 
                          : 'border-dashed border-muted-foreground/30 bg-muted/20'
                      }`}
                    >
                      {index < 7 ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <span className="text-xs text-muted-foreground">{index + 1}</span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-foreground">
                  Encore <strong>{settings.stampsRequired - 7} prestations</strong> avant votre récompense 🎉
                </p>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-center gap-2 text-sm">
                {getRewardIcon(settings.rewardType)}
                <span className="text-foreground">
                  Après <strong>{settings.stampsRequired} prestations</strong>, recevez : <strong>{getRewardPreviewText()}</strong>
                </span>
              </div>

              {/* Example calculation */}
              <div className="mt-4 p-3 rounded-lg bg-muted/50 text-sm">
                <p className="text-muted-foreground">
                  💡 <strong>Exemple :</strong> Un client qui vient 1 fois par mois obtiendra 
                  sa récompense après{' '}
                  <strong>{settings.stampsRequired} mois</strong>.
                </p>
              </div>
            </div>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button onClick={handleSave} className="gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Enregistrer les paramètres
            </Button>
          </div>
        </div>
      )}

      {/* Inactive State Message */}
      {!settings.enabled && (
        <Card className="p-8 border-2 border-dashed border-border bg-muted/20">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-muted mx-auto flex items-center justify-center">
              <Stamp className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Fidélisez vos clients
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Avec la carte de fidélité, vos clients accumulent un tampon à chaque prestation. 
                Une fois la carte complétée, ils reçoivent une récompense de votre choix.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid gap-3 max-w-md mx-auto pt-4 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Simple et efficace</p>
                  <p className="text-sm text-muted-foreground">
                    1 prestation = 1 tampon, facile à comprendre
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Encourage les visites régulières</p>
                  <p className="text-sm text-muted-foreground">
                    Vos clients reviennent pour compléter leur carte
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Vous choisissez la récompense</p>
                  <p className="text-sm text-muted-foreground">
                    Réduction, prestation gratuite ou produit offert
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default LoyaltySettingsForm;
