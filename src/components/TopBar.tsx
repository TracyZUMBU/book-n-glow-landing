import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [userType, setUserType] = useState<"client" | "provider">("client");
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const openAuthDialog = (type: "client" | "provider") => {
    setUserType(type);
    setIsAuthDialogOpen(true);
  };

  const navItems = [
    { path: "/fonctionnalites", label: "Fonctionnalités" },
    { path: "/tarifs", label: "Tarifs" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-mobile max-w-7xl flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gradient">
              Book N' Glow
            </span>
          </Link>
          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          {/* Auth Buttons Desktop */}
          {/* TODO: Add auth buttons back in */}
          {/* <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => openAuthDialog("provider")}
              className="flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              Je suis prestataire
            </Button>
            <Button
              onClick={() => openAuthDialog("client")}
              className="flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Mon compte
            </Button>
          </div> */}
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background animate-fade-in">
            <div className="container-mobile py-4 space-y-4">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              {/* TODO: Add auth buttons back in */}
              {/* <div className="flex flex-col gap-2 pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => {
                    openAuthDialog("provider");
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 justify-center"
                >
                  <Briefcase className="w-4 h-4" />
                  Je suis prestataire
                </Button>
                <Button
                  onClick={() => {
                    openAuthDialog("client");
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 justify-center"
                >
                  <User className="w-4 h-4" />
                  Mon compte
                </Button>
              </div> */}
            </div>
          </div>
        )}
      </header>

      {/* Auth Dialog */}
      <Dialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {userType === "client" ? "Compte Client" : "Espace Prestataire"}
            </DialogTitle>
            <DialogDescription>
              {userType === "client"
                ? "Connectez-vous pour gérer vos réservations"
                : "Accédez à votre espace professionnel"}
            </DialogDescription>
          </DialogHeader>

          <Tabs
            value={authMode}
            onValueChange={(v) => setAuthMode(v as "login" | "signup")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Connexion</TabsTrigger>
              <TabsTrigger value="signup">Inscription</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="votre@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-password">Mot de passe</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                />
              </div>

              <Button className="w-full" size="lg">
                Se connecter
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                <button className="text-primary hover:underline">
                  Mot de passe oublié ?
                </button>
              </p>
            </TabsContent>

            <TabsContent value="signup" className="space-y-4">
              {userType === "provider" && (
                <div className="space-y-2">
                  <Label htmlFor="signup-business">Nom de l'entreprise</Label>
                  <Input
                    id="signup-business"
                    type="text"
                    placeholder="Mon Institut"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="signup-name">
                  {userType === "client" ? "Nom complet" : "Nom du responsable"}
                </Label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Marie Dupont"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="votre@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-phone">Téléphone</Label>
                <Input
                  id="signup-phone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-password">Mot de passe</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-confirm-password">
                  Confirmer le mot de passe
                </Label>
                <Input
                  id="signup-confirm-password"
                  type="password"
                  placeholder="••••••••"
                />
              </div>

              <Button className="w-full" size="lg">
                Créer mon compte
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                En vous inscrivant, vous acceptez nos{" "}
                <button className="text-primary hover:underline">
                  conditions d'utilisation
                </button>
              </p>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TopBar;
