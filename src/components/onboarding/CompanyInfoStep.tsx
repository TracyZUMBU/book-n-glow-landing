import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Building2, Instagram, MapPin, Upload, Info, Eye, EyeOff } from "lucide-react";

interface CompanyInfoStepProps {
  data: {
    companyName: string;
    instagramHandle: string;
    description: string;
    city: string;
    streetNumber: string;
    street: string;
    postalCode: string;
    showFullAddress: boolean;
    profileImage: string | null;
  };
  onChange: (data: Partial<CompanyInfoStepProps["data"]>) => void;
}

const CompanyInfoStep = ({ data, onChange }: CompanyInfoStepProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(data.profileImage);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        onChange({ profileImage: result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Présentez votre activité
        </h2>
        <p className="text-muted-foreground">
          Ces informations seront visibles par vos futurs clients sur votre page de réservation.
        </p>
      </div>

      {/* Profile Image */}
      <div className="flex flex-col items-center gap-4 p-6 border-2 border-dashed border-muted rounded-lg bg-muted/20">
        <div className="relative">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Aperçu"
              className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-lg"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center border-4 border-background shadow-lg">
              <Upload className="w-8 h-8 text-muted-foreground" />
            </div>
          )}
        </div>
        <div className="text-center">
          <Label htmlFor="profileImage" className="cursor-pointer">
            <Button variant="outline" size="sm" asChild>
              <span>
                <Upload className="w-4 h-4 mr-2" />
                {imagePreview ? "Changer la photo" : "Ajouter une photo"}
              </span>
            </Button>
          </Label>
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <p className="text-xs text-muted-foreground mt-2">
            Recommandé : photo de profil professionnelle (facultatif)
          </p>
        </div>
      </div>

      {/* Company Name & Instagram */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="companyName" className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-muted-foreground" />
            Nom de votre entreprise <span className="text-destructive">*</span>
          </Label>
          <Input
            id="companyName"
            placeholder="Ex: Studio Beauté Paris"
            value={data.companyName}
            onChange={(e) => onChange({ companyName: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="instagram" className="flex items-center gap-2">
            <Instagram className="w-4 h-4 text-muted-foreground" />
            Compte Instagram <span className="text-destructive">*</span>
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              @
            </span>
            <Input
              id="instagram"
              className="pl-8"
              placeholder="votre_compte"
              value={data.instagramHandle}
              onChange={(e) => onChange({ instagramHandle: e.target.value })}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Votre compte Instagram sera affiché sur votre page de réservation.
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description" className="flex items-center gap-2">
          <Info className="w-4 h-4 text-muted-foreground" />
          Description de votre activité
          <span className="text-xs text-muted-foreground ml-2">(recommandé)</span>
        </Label>
        <Textarea
          id="description"
          placeholder="Décrivez votre activité, vos spécialités, ce qui vous rend unique... Cette description aidera vos clients à mieux vous connaître."
          value={data.description}
          onChange={(e) => onChange({ description: e.target.value })}
          rows={4}
        />
        <p className="text-xs text-muted-foreground">
          Vous pourrez compléter ou modifier cette description plus tard.
        </p>
      </div>

      {/* Address */}
      <div className="space-y-4">
        <Label className="flex items-center gap-2 text-base font-semibold">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          Adresse de votre établissement <span className="text-destructive">*</span>
        </Label>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="streetNumber">Numéro</Label>
            <Input
              id="streetNumber"
              placeholder="123"
              value={data.streetNumber}
              onChange={(e) => onChange({ streetNumber: e.target.value })}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="street">Rue</Label>
            <Input
              id="street"
              placeholder="Rue de la Beauté"
              value={data.street}
              onChange={(e) => onChange({ street: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="postalCode">Code postal</Label>
            <Input
              id="postalCode"
              placeholder="75001"
              value={data.postalCode}
              onChange={(e) => onChange({ postalCode: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">Ville</Label>
            <Input
              id="city"
              placeholder="Paris"
              value={data.city}
              onChange={(e) => onChange({ city: e.target.value })}
            />
          </div>
        </div>

        {/* Show Address Toggle */}
        <div className="p-4 rounded-lg bg-muted/50 border">
          <div className="flex items-start gap-3">
            <Checkbox
              id="showFullAddress"
              checked={data.showFullAddress}
              onCheckedChange={(checked) => onChange({ showFullAddress: checked as boolean })}
            />
            <div className="space-y-1">
              <Label htmlFor="showFullAddress" className="flex items-center gap-2 cursor-pointer">
                {data.showFullAddress ? (
                  <Eye className="w-4 h-4 text-primary" />
                ) : (
                  <EyeOff className="w-4 h-4 text-muted-foreground" />
                )}
                Afficher l'adresse complète sur ma page de réservation
              </Label>
              {!data.showFullAddress && (
                <p className="text-xs text-muted-foreground bg-amber-500/10 text-amber-700 dark:text-amber-400 p-2 rounded">
                  <strong>Note :</strong> Seuls la ville et le code postal seront affichés publiquement. 
                  L'adresse complète sera envoyée au client 2 heures avant le rendez-vous.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoStep;
