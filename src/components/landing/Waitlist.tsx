import { submitToWaitlist } from "@/api/waitlist";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Loader2, Sparkles } from "lucide-react";
import { useState } from "react";

const Waitlist = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    activity: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation simple
    if (!formData.firstName || !formData.email || !formData.activity) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await submitToWaitlist(formData);

      toast({
        title: "Bienvenue dans la communauté ! ✨",
        description: "Vous recevrez bientôt un email de confirmation.",
      });

      setFormData({ firstName: "", email: "", activity: "" });
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      toast({
        title: "Erreur lors de l'inscription",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card rounded-3xl shadow-xl border border-border p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-10 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Rejoignez la communauté</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Rejoignez les premières prestataires à{" "}
              <span className="text-gradient">briller</span> avec Book N' Glow
            </h2>

            <p className="text-lg text-muted-foreground">
              Inscrivez-vous à la liste d'attente et soyez parmi les premières à
              bénéficier d'un accès exclusif.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  Prénom
                </label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Votre prénom"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="activity" className="text-sm font-medium">
                  Activité
                </label>
                <Input
                  id="activity"
                  type="text"
                  placeholder="Ex: Coiffeuse, Maquilleuse..."
                  value={formData.activity}
                  onChange={(e) =>
                    setFormData({ ...formData, activity: e.target.value })
                  }
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-12"
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full group"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Inscription en cours...
                </>
              ) : (
                <>
                  Rejoindre la liste d'attente ✨
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              En vous inscrivant, vous acceptez de recevoir des emails de Book
              N' Glow. Vous pourrez vous désinscrire à tout moment.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
