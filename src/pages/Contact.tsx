import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    body: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    if (field === "subject" && value.length > 100) {
      return; // Limite de 100 caractères pour le sujet
    }
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Créer le lien mailto avec le sujet et le corps
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(formData.body);
    const mailtoLink = `mailto:contact@book-n-glow.fr?subject=${subject}&body=${body}`;

    // Ouvrir le client email
    window.location.href = mailtoLink;

    // Réinitialiser le formulaire après un délai
    setTimeout(() => {
      setFormData({ subject: "", body: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-10 pb-8 md:pt-20 md:pb-16 px-4 text-center">
        <div className="container-mobile max-w-4xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            <span>Contactez-nous</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            <span className="text-gradient">Contact</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une question ? Un besoin spécifique ? Notre équipe est là pour vous
            accompagner dans votre projet beauté.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-10 md:py-20 px-4">
        <div className="container-mobile max-w-2xl">
          <div className="bg-card rounded-3xl shadow-xl border border-border p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-base font-medium">
                  Sujet de votre message
                </Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Ex: Demande d'information sur les tarifs"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  maxLength={100}
                  required
                  className="text-base"
                />
                <p className="text-sm text-muted-foreground">
                  {formData.subject.length}/100 caractères
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="body" className="text-base font-medium">
                  Votre message
                </Label>
                <Textarea
                  id="body"
                  placeholder="Décrivez votre besoin, votre projet ou posez votre question..."
                  value={formData.body}
                  onChange={(e) => handleInputChange("body", e.target.value)}
                  rows={8}
                  required
                  className="text-base resize-none"
                />
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Note :</strong> En cliquant sur "Envoyer", votre
                  client email par défaut s'ouvrira avec votre message
                  pré-rempli à l'adresse{" "}
                  <span className="text-primary font-medium">
                    contact@book-n-glow.fr
                  </span>
                </p>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group"
                disabled={
                  isSubmitting ||
                  !formData.subject.trim() ||
                  !formData.body.trim()
                }
              >
                {isSubmitting ? (
                  "Ouverture de votre client email..."
                ) : (
                  <>
                    Envoyer le message
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
