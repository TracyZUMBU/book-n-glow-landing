import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { User, Briefcase } from "lucide-react";

const AuthTabs = () => {
  const [userType, setUserType] = useState<"client" | "provider">("client");
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-primary-light/5 to-background">
      <div className="container-mobile max-w-4xl">
        <div className="text-center mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Accédez à votre compte
          </h2>
          <p className="text-muted-foreground text-lg">
            Connectez-vous en tant que client ou prestataire
          </p>
        </div>

        <Card className="border-2 shadow-lg">
          <CardHeader className="space-y-4">
            <div className="flex gap-4 justify-center">
              <Button
                variant={userType === "client" ? "default" : "outline"}
                onClick={() => setUserType("client")}
                className="flex items-center gap-2 flex-1 max-w-xs"
              >
                <User className="w-4 h-4" />
                Client
              </Button>
              <Button
                variant={userType === "provider" ? "default" : "outline"}
                onClick={() => setUserType("provider")}
                className="flex items-center gap-2 flex-1 max-w-xs"
              >
                <Briefcase className="w-4 h-4" />
                Prestataire
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            <Tabs value={authMode} onValueChange={(v) => setAuthMode(v as "login" | "signup")} className="w-full">
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
                  Se connecter en tant que {userType === "client" ? "Client" : "Prestataire"}
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
                  <Label htmlFor="signup-confirm-password">Confirmer le mot de passe</Label>
                  <Input
                    id="signup-confirm-password"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>

                <Button className="w-full" size="lg">
                  Créer mon compte {userType === "client" ? "Client" : "Prestataire"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  En vous inscrivant, vous acceptez nos{" "}
                  <button className="text-primary hover:underline">
                    conditions d'utilisation
                  </button>
                  {" "}et notre{" "}
                  <button className="text-primary hover:underline">
                    politique de confidentialité
                  </button>
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AuthTabs;
