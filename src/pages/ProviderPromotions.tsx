import { useState } from 'react';
import { Percent, Tag, Info, Sparkles, Save } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import {
  fakeServices,
  ServicePromotion,
  calculateDiscountedPrice,
} from '@/data/fakePromotionsData';

const ProviderPromotions = () => {
  const [globalPromoActive, setGlobalPromoActive] = useState(false);
  const [globalDiscountPercent, setGlobalDiscountPercent] = useState(10);
  const [services, setServices] = useState<ServicePromotion[]>(fakeServices);

  const handleGlobalPromoToggle = (checked: boolean) => {
    setGlobalPromoActive(checked);
  };

  const handleApplyGlobalPromo = () => {
    setServices((prev) =>
      prev.map((service) => ({
        ...service,
        promotionActive: true,
        discountPercent: globalDiscountPercent,
      }))
    );
  };

  const handleServicePromoToggle = (serviceId: string, checked: boolean) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === serviceId
          ? {
              ...service,
              promotionActive: checked,
              discountPercent: checked ? service.discountPercent || 10 : 0,
            }
          : service
      )
    );
  };

  const handleServiceDiscountChange = (serviceId: string, percent: number) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === serviceId
          ? { ...service, discountPercent: Math.min(100, Math.max(0, percent)) }
          : service
      )
    );
  };

  const activePromotionsCount = services.filter((s) => s.promotionActive).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Tag className="h-6 w-6 text-primary" />
          Promotions sur vos services
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Les promotions vous permettent d'attirer plus de clients en proposant des
          réductions temporaires sur vos services. Vous pouvez appliquer une promotion
          à tous vos services ou gérer chaque service individuellement.
        </p>
      </div>

      {/* Stats Banner */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 flex items-center gap-3">
        <Sparkles className="h-5 w-5 text-primary" />
        <span className="text-sm text-foreground">
          <strong>{activePromotionsCount}</strong> promotion{activePromotionsCount > 1 ? 's' : ''} active{activePromotionsCount > 1 ? 's' : ''} sur{' '}
          <strong>{services.length}</strong> services
        </span>
      </div>

      {/* Global Promotion Section */}
      <Card className="border-2 border-dashed border-primary/30 bg-primary/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Percent className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Promotion globale</CardTitle>
            </div>
            <Badge variant={globalPromoActive ? 'default' : 'secondary'}>
              {globalPromoActive ? 'Mode activé' : 'Mode désactivé'}
            </Badge>
          </div>
          <CardDescription>
            Appliquez rapidement une promotion identique à tous vos services
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Switch
              checked={globalPromoActive}
              onCheckedChange={handleGlobalPromoToggle}
              id="global-promo"
            />
            <Label htmlFor="global-promo" className="cursor-pointer">
              Appliquer une promotion à tous mes services
            </Label>
          </div>

          {globalPromoActive && (
            <div className="space-y-4 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
                <div className="space-y-2 flex-1 max-w-xs">
                  <Label htmlFor="global-discount" className="flex items-center gap-2">
                    Pourcentage de réduction
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          Ce pourcentage sera appliqué au prix de chaque service
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <div className="relative">
                    <Input
                      id="global-discount"
                      type="number"
                      min={0}
                      max={100}
                      value={globalDiscountPercent}
                      onChange={(e) =>
                        setGlobalDiscountPercent(
                          Math.min(100, Math.max(0, parseInt(e.target.value) || 0))
                        )
                      }
                      className="pr-8"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>
                <Button onClick={handleApplyGlobalPromo} className="gap-2">
                  <Percent className="h-4 w-4" />
                  Appliquer à tous les services
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                💡 Cette promotion sera copiée sur tous vos services. Vous pourrez
                ensuite ajuster chaque service individuellement.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Services List */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Vos services</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServicePromotionCard
              key={service.id}
              service={service}
              onToggle={(checked) => handleServicePromoToggle(service.id, checked)}
              onDiscountChange={(percent) =>
                handleServiceDiscountChange(service.id, percent)
              }
            />
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-4 border-t">
        <Button size="lg" className="gap-2">
          <Save className="h-4 w-4" />
          Enregistrer les modifications
        </Button>
      </div>
    </div>
  );
};

interface ServicePromotionCardProps {
  service: ServicePromotion;
  onToggle: (checked: boolean) => void;
  onDiscountChange: (percent: number) => void;
}

const ServicePromotionCard = ({
  service,
  onToggle,
  onDiscountChange,
}: ServicePromotionCardProps) => {
  const discountedPrice = calculateDiscountedPrice(
    service.originalPrice,
    service.discountPercent
  );

  return (
    <Card
      className={cn(
        'transition-all duration-200',
        service.promotionActive
          ? 'border-primary/50 bg-primary/5 shadow-md'
          : 'hover:border-muted-foreground/30'
      )}
    >
      <CardContent className="pt-4 space-y-4">
        {/* Service Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <h3 className="font-semibold text-foreground">{service.name}</h3>
            <div className="flex items-center gap-2">
              {service.promotionActive ? (
                <>
                  <span className="text-sm text-muted-foreground line-through">
                    {service.originalPrice.toFixed(2)} €
                  </span>
                  <span className="text-lg font-bold text-primary">
                    {discountedPrice.toFixed(2)} €
                  </span>
                </>
              ) : (
                <span className="text-lg font-semibold text-foreground">
                  {service.originalPrice.toFixed(2)} €
                </span>
              )}
            </div>
          </div>
          {service.promotionActive && (
            <Badge className="bg-primary/20 text-primary border-primary/30 shrink-0">
              -{service.discountPercent}%
            </Badge>
          )}
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-3 pt-2 border-t">
          <Switch
            checked={service.promotionActive}
            onCheckedChange={onToggle}
            id={`promo-${service.id}`}
          />
          <Label
            htmlFor={`promo-${service.id}`}
            className="text-sm cursor-pointer"
          >
            Promotion active
          </Label>
        </div>

        {/* Discount Input */}
        {service.promotionActive ? (
          <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <Label
              htmlFor={`discount-${service.id}`}
              className="text-sm text-muted-foreground"
            >
              Réduction (%)
            </Label>
            <div className="relative">
              <Input
                id={`discount-${service.id}`}
                type="number"
                min={0}
                max={100}
                value={service.discountPercent}
                onChange={(e) =>
                  onDiscountChange(parseInt(e.target.value) || 0)
                }
                className="pr-8"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                %
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Prix après promotion :{' '}
              <span className="font-medium text-primary">
                {discountedPrice.toFixed(2)} €
              </span>
            </p>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground italic">
            Aucune promotion active
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ProviderPromotions;
