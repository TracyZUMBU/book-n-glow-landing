import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Mail,
  Lock,
  ArrowRight,
  Calendar,
  Heart,
  Eye,
  EyeOff,
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation connexion
    setTimeout(() => setIsLoading(false), 1500);
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side — Branding */}
      <div className="relative hidden lg:flex lg:w-1/2 xl:w-3/5 flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-primary-light/10 via-background to-secondary-light/10 p-12">
        {/* Background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(340,100%,64%,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(291,64%,42%,0.12),transparent_50%)]" />

        <div className="relative z-10 max-w-lg text-center space-y-8">
          {/* Floating decorative elements */}
          <div className="relative w-64 h-64 mx-auto mb-8">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl" />
            <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl rotate-12 animate-float flex items-center justify-center">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <div
              className="absolute top-12 right-8 w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-xl -rotate-12 animate-float flex items-center justify-center"
              style={{ animationDelay: "0.5s" }}
            >
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div
              className="absolute bottom-16 left-8 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full animate-float flex items-center justify-center"
              style={{ animationDelay: "1s" }}
            >
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div
              className="absolute bottom-6 right-6 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg rotate-45 animate-float flex items-center justify-center"
              style={{ animationDelay: "1.5s" }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl font-bold font-serif">
              <span className="text-gradient">Book N' Glow</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Votre rendez-vous beauté, en quelques clics.
              <br />
              Simple, rapide, et tout en élégance.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Réservation 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Rappels auto</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>100 % gratuit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side — Login form */}
      <div className="flex-1 flex flex-col justify-center items-center p-4 sm:p-8 bg-gradient-to-br from-background via-background to-primary-light/5">
        {/* Mobile brand header */}
        <div className="lg:hidden text-center mb-8 space-y-2">
          <h1 className="text-3xl font-bold font-serif">
            <span className="text-gradient">Book N' Glow</span>
          </h1>
          <p className="text-sm text-muted-foreground">Connectez-vous à votre compte</p>
        </div>

        <Card className="w-full max-w-md shadow-soft border-border/60 animate-fade-in">
          <CardContent className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-2xl font-semibold text-foreground">
                Connexion
              </h2>
              <p className="text-sm text-muted-foreground">
                Entrez vos identifiants pour accéder à votre espace
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    className="pl-10 h-12 rounded-xl border-border/80 focus-visible:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-foreground font-medium">
                    Mot de passe
                  </Label>
                  <Link
                    to="#"
                    className="text-xs text-primary hover:text-primary-dark hover:underline transition-colors"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10 h-12 rounded-xl border-border/80 focus-visible:ring-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isLoading}
                className="w-full h-12 rounded-xl text-base"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Connexion...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Se connecter
                    <ArrowRight className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-3 text-muted-foreground">
                  Ou continuer avec
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={handleGoogleLogin}
              className="w-full h-12 rounded-xl border-2 hover:bg-muted/50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">
                Pas encore de compte ?{" "}
              </span>
              <Link
                to="/inscription"
                className="text-primary font-medium hover:text-primary-dark hover:underline transition-colors"
              >
                Créer un compte
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          <Link to="/mentions-legales" className="hover:text-primary transition-colors">
            Mentions légales
          </Link>
          <Link to="/politique-de-confidentialite" className="hover:text-primary transition-colors">
            Confidentialité
          </Link>
          <Link to="/cgu" className="hover:text-primary transition-colors">
            CGU
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
