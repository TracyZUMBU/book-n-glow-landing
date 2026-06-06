import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Mail, Smartphone } from "lucide-react";

const Auth = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleGoogleLogin = () => {
    // Google login logic will be implemented later
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Bloc prestataire : redirection vers l'app mobile */}
        <div className="rounded-2xl border-2 border-primary/30 bg-card p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="space-y-1">
                <p className="font-semibold text-foreground">
                  Vous êtes prestataire&nbsp;?
                </p>
                <p className="text-sm text-muted-foreground">
                  La gestion de votre compte se fait désormais depuis
                  l'application mobile Book N' Glow.
                </p>
              </div>
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 rounded-xl"
              >
                <Link to="/telecharger" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Télécharger l'app
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Card className="w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Book N' Glow</CardTitle>
          <CardDescription className="text-center">
            Espace client&nbsp;— connectez-vous ou créez votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Connexion</TabsTrigger>
              <TabsTrigger value="signup">Inscription</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="votre@email.com"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Mot de passe</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                />
              </div>
              <Button className="w-full" size="lg">
                Se connecter
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Ou continuer avec</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full"
                size="lg"
                onClick={handleGoogleLogin}
              >
                <Mail className="mr-2 h-4 w-4" />
                Google
              </Button>
            </TabsContent>

            {/* Signup Tab */}
            <TabsContent value="signup" className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-firstname">
                    Prénom <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="signup-firstname"
                    type="text"
                    placeholder="Jean"
                    value={signupData.firstName}
                    onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-lastname">
                    Nom <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="signup-lastname"
                    type="text"
                    placeholder="Dupont"
                    value={signupData.lastName}
                    onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signup-email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="votre@email.com"
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-phone">Téléphone (optionnel)</Label>
                <Input
                  id="signup-phone"
                  type="tel"
                  placeholder="+33 6 12 34 56 78"
                  value={signupData.phone}
                  onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-password">
                  Mot de passe <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  value={signupData.password}
                  onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-confirm-password">
                  Confirmer le mot de passe <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="signup-confirm-password"
                  type="password"
                  placeholder="••••••••"
                  value={signupData.confirmPassword}
                  onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                />
              </div>

              <Button className="w-full" size="lg">
                Créer mon compte
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Ou continuer avec</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full"
                size="lg"
                onClick={handleGoogleLogin}
              >
                <Mail className="mr-2 h-4 w-4" />
                Google
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
