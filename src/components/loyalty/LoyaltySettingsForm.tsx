import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
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
  Coins,
  Trophy,
  Info,
  Sparkles,
  CheckCircle2,
  Euro,
  Percent,
  Package,
  Scissors,
} from "lucide-react";
import { LoyaltySettings, getRewardTypeLabel } from "@/data/fakeLoyaltyData";

interface LoyaltySettingsFormProps {
  initialSettings?: LoyaltySettings;
  onSave?: (settings: LoyaltySettings) => void;
}

const LoyaltySettingsForm = ({ 
  initialSettings,
  onSave 
}: LoyaltySettingsFormProps) => {
  const [settings, setSettings] = useState<LoyaltySettings>(
    initialSettings || {
      enabled: false,
      pointsPerEuro: 1,
      pointsForReward: 100,
      rewardType: 'percentage_discount',
      rewardValue: 10,
      pointsValidityMonths: 12,
    }
  );

  const handleSave = () => {
    onSave?.(settings);
  };

  const getRewardIcon = (type: LoyaltySettings['rewardType']) => {
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
              <Gift className={`w-6 h-6 ${
                settings.enabled ? 'text-primary-foreground' : 'text-muted-foreground'
              }`} />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground">
                Programme de fidélité
              </h3>
              <p className="text-sm text-muted-foreground">
                {settings.enabled 
                  ? 'Actif - Vos clients gagnent des points' 
                  : 'Inactif - Activez pour fidéliser vos clients'}
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
          {/* Points Configuration */}
          <Card className="p-6 border-2 border-border bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <Coins className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Configuration des points</h3>
                <p className="text-sm text-muted-foreground">
                  Définissez comment vos clients gagnent des points
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Points per Euro */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="pointsPerEuro">Points par euro dépensé</Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        Nombre de points que le client gagne pour chaque euro dépensé.
                        Ex: 1 point = 1€ dépensé
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    id="pointsPerEuro"
                    type="number"
                    min="0.1"
                    step="0.1"
                    max="10"
                    value={settings.pointsPerEuro}
                    onChange={(e) => 
                      setSettings({ 
                        ...settings, 
                        pointsPerEuro: parseFloat(e.target.value) || 1 
                      })
                    }
                    className="w-24"
                  />
                  <span className="text-sm text-muted-foreground">
                    point{settings.pointsPerEuro > 1 ? 's' : ''} / €
                  </span>
                </div>
              </div>

              {/* Points for Reward */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="pointsForReward">Points pour une récompense</Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        Nombre de points nécessaires pour débloquer une récompense.
                        Plus le nombre est bas, plus les récompenses sont fréquentes.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    id="pointsForReward"
                    type="number"
                    min="10"
                    step="10"
                    max="1000"
                    value={settings.pointsForReward}
                    onChange={(e) => 
                      setSettings({ 
                        ...settings, 
                        pointsForReward: parseInt(e.target.value) || 100 
                      })
                    }
                    className="w-24"
                  />
                  <span className="text-sm text-muted-foreground">points</span>
                </div>
              </div>

              {/* Points Validity */}
              <div className="space-y-2 sm:col-span-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="pointsValidity">Durée de validité des points</Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        Après cette durée sans nouvelle réservation, les points expirent.
                        Une durée courte encourage les visites régulières.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    id="pointsValidity"
                    type="number"
                    min="1"
                    max="36"
                    value={settings.pointsValidityMonths}
                    onChange={(e) => 
                      setSettings({ 
                        ...settings, 
                        pointsValidityMonths: parseInt(e.target.value) || 12 
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
                  onValueChange={(value: LoyaltySettings['rewardType']) => 
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
                        Prestation gratuite
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

              {/* Service Name (for free service) */}
              {settings.rewardType === 'free_service' && (
                <div className="space-y-2 animate-in slide-in-from-top-2 duration-200">
                  <Label htmlFor="serviceName">Nom de la prestation offerte</Label>
                  <Input
                    id="serviceName"
                    placeholder="Ex: Brushing, Soin visage..."
                    value={settings.rewardServiceName || ''}
                    onChange={(e) => 
                      setSettings({ ...settings, rewardServiceName: e.target.value })
                    }
                    className="sm:w-64"
                  />
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

            <div className="rounded-xl bg-card border border-border p-4 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Coins className="w-4 h-4 text-amber-500" />
                <span className="text-foreground">
                  Gagnez <strong>{settings.pointsPerEuro} point{settings.pointsPerEuro > 1 ? 's' : ''}</strong> par euro dépensé
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Trophy className="w-4 h-4 text-purple-500" />
                <span className="text-foreground">
                  À <strong>{settings.pointsForReward} points</strong>, recevez <strong>{getRewardPreviewText()}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-foreground">
                  Vos points sont valables <strong>{settings.pointsValidityMonths} mois</strong>
                </span>
              </div>

              {/* Example calculation */}
              <div className="mt-4 p-3 rounded-lg bg-muted/50 text-sm">
                <p className="text-muted-foreground">
                  💡 <strong>Exemple :</strong> Pour une prestation à 50€, votre client gagne{' '}
                  <strong>{Math.round(50 * settings.pointsPerEuro)} points</strong>. 
                  Il lui faudra{' '}
                  <strong>
                    {Math.ceil(settings.pointsForReward / (50 * settings.pointsPerEuro))} visite{Math.ceil(settings.pointsForReward / (50 * settings.pointsPerEuro)) > 1 ? 's' : ''}
                  </strong>{' '}
                  à ce montant pour obtenir sa récompense.
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
              <Gift className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Fidélisez vos clients
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Activez le programme de fidélité pour récompenser vos clients réguliers. 
                Ils accumuleront des points à chaque réservation et débloqueront des avantages exclusifs.
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setSettings({ ...settings, enabled: true })}
              className="gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Activer le programme
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default LoyaltySettingsForm;
