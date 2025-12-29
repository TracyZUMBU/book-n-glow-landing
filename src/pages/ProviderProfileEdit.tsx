import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import {
  Store,
  ImagePlus,
  Instagram,
  MapPin,
  FileText,
  Save,
  X,
} from "lucide-react";

const ProviderProfileEdit = () => {
  // Mock data - will be replaced with real data later
  const [coverImage, setCoverImage] = useState<string | null>(
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800"
  );
  const [companyName, setCompanyName] = useState("Salon Élégance");
  const [instagramUsername, setInstagramUsername] = useState("salon_elegance");
  const [description, setDescription] = useState(
    "Bienvenue dans notre salon de coiffure et d'esthétique.\n\n**Notre équipe** vous accueille dans un cadre chaleureux et moderne.\n\nNous proposons une large gamme de services pour sublimer votre beauté."
  );
  const [address, setAddress] = useState("123 Rue de la Beauté");
  const [city, setCity] = useState("Paris");
  const [postalCode, setPostalCode] = useState("75001");
  const [rules, setRules] = useState(
    "• Merci d'arriver 5 minutes avant votre rendez-vous\n\n• En cas d'empêchement, veuillez nous prévenir **24h à l'avance**\n\n• Les retards de plus de 15 minutes entraînent l'annulation du rendez-vous");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setCoverImage(null);
  };

  const handleSave = () => {
    // TODO: Save to backend
    console.log({
      coverImage,
      companyName,
      instagramUsername,
      description,
      address,
      city,
      postalCode,
      rules,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container-mobile py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Store className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                  Profil du salon
                </h1>
                <p className="text-muted-foreground">
                  Modifiez les informations visibles par vos clients
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Cover Image */}
            <Card className="p-6 border-2 border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <ImagePlus className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground">
                    Image de couverture
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Image principale affichée sur votre profil
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {coverImage ? (
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={coverImage}
                      alt="Couverture du salon"
                      className="w-full h-48 sm:h-64 object-cover"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleRemoveImage}
                      className="absolute top-3 right-3 gap-1 bg-background/80 hover:bg-background text-destructive hover:text-destructive"
                    >
                      <X className="w-4 h-4" />
                      Supprimer
                    </Button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
                    <ImagePlus className="w-10 h-10 text-muted-foreground mb-2" />
                    <span className="text-sm text-muted-foreground">
                      Cliquez pour ajouter une image
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}

                {coverImage && (
                  <label className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border cursor-pointer hover:bg-muted/50 transition-colors">
                    <ImagePlus className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Changer l'image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </Card>

            {/* Company Info */}
            <Card className="p-6 border-2 border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Store className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground">
                    Informations générales
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Nom et réseaux sociaux
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nom de la société</Label>
                  <Input
                    id="company-name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Nom de votre salon"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-muted text-muted-foreground">
                      <Instagram className="w-4 h-4" />
                      <span className="text-sm">@</span>
                    </div>
                    <Input
                      id="instagram"
                      value={instagramUsername}
                      onChange={(e) => setInstagramUsername(e.target.value)}
                      placeholder="votre_compte"
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Description */}
            <Card className="p-6 border-2 border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground">
                    Description
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Présentez votre salon à vos clients
                  </p>
                </div>
              </div>

              <RichTextEditor
                value={description}
                onChange={setDescription}
                placeholder="Décrivez votre salon, vos services, votre équipe..."
                rows={6}
              />
            </Card>

            {/* Address */}
            <Card className="p-6 border-2 border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground">
                    Adresse
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Localisation de votre salon
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Adresse</Label>
                  <Input
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Rue Exemple"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Ville</Label>
                    <Input
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Paris"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postal-code">Code postal</Label>
                    <Input
                      id="postal-code"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="75001"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Rules */}
            <Card className="p-6 border-2 border-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground">
                    Règles et conditions
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Informations importantes pour vos clients
                  </p>
                </div>
              </div>

              <RichTextEditor
                value={rules}
                onChange={setRules}
                placeholder="Conditions d'annulation, règles du salon..."
                rows={6}
              />
            </Card>

            {/* Save Button */}
            <div className="sticky bottom-4 flex justify-end">
              <Button
                onClick={handleSave}
                variant="hero"
                size="lg"
                className="gap-2 shadow-lg"
              >
                <Save className="w-5 h-5" />
                Enregistrer les modifications
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProviderProfileEdit;
