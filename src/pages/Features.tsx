import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Check,
  Clock,
  CreditCard,
  MessageSquare,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";

const Features = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="container mx-auto max-w-6xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Des fonctionnalités pensées pour les{" "}
            <span className="text-gradient">pros d'Instagram</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Book n' Glow est conçu spécialement pour les prestataires beauté qui
            développent leur activité sur Instagram
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary shrink-0" />
              <span>Fini les allers-retours par DM</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary shrink-0" />
              <span>Réservations 24/7 en autonomie</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary shrink-0" />
              <span>Vérification des acomptes PayPal.me</span>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram-Specific Features */}
      <section className="py-20 px-4 bg-background-light">
        <div className="container mx-auto max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                Optimisé pour les prestataires Instagram
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Des fonctionnalités uniques qui s'adaptent parfaitement à votre
                activité sur Instagram
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CreditCard className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Vérification PayPal.me intégrée
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Vérifiez automatiquement les acomptes PayPal.me pour
                      sécuriser vos réservations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Confirmation client automatique
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Possibilité de demander la confirmation la veille du RDV.
                      Annulation automatique si non confirmée
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Smartphone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Lien de réservation direct
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Un lien unique à mettre dans votre bio Instagram pour des
                      réservations instantanées
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-8" variant="outline">
                Découvrir les fonctionnalités Instagram
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Smartphone className="w-24 h-24 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interface optimisée Instagram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="w-24 h-24 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Automatisation complète
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-serif font-bold mb-6">
                Dites adieu aux allers-retours par DM
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tout est automatisé pour vous faire gagner du temps et
                professionnaliser votre activité
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Réservations 24/7 en autonomie
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Vos clients réservent quand ils veulent, vous êtes notifié
                      instantanément par SMS
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Notifications SMS instantanées
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Recevez un SMS pour chaque prise et annulation de RDV
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Rappels clients automatiques
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Envoi automatique de rappels par email (SMS bientôt
                      disponible)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Mises à jour en temps réel
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Ne perdez plus de temps à répondre aux messages privés.
                      Votre page contient toutes les informations nécessaires.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-8" variant="outline">
                Découvrir l'automatisation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Protection & Management */}
      <section className="py-20 px-4 bg-background-light">
        <div className="container mx-auto max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                Sécurité et contrôle total
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Protégez votre activité et gérez tout depuis une interface
                unique
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Mises à jour en temps réel
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Vos clients voient vos disponibilités en temps réel ainsi
                      que tous les changements que vous faites.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Interface unique de gestion
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Configurez toute votre activité depuis un seul endroit :{" "}
                      Vos services, tarifs, disponibilités, etc.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CreditCard className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Paiements flexibles</h3>
                    <p className="text-muted-foreground text-sm">
                      Sur place, PayPal.me (pour les acomptes), carte bancaire
                      (Stripe)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Calendrier multi-vues
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Gérez vos RDV avec des vues optimisées pour votre activité
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-8" variant="outline">
                Découvrir la gestion complète
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-24 h-24 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Protection & Gestion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Prêt à transformer votre activité Instagram ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Rejoignez les prestataires beauté qui ont choisi Book n' Glow pour
            automatiser leurs réservations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Commencer gratuitement
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Découvrir les tarifs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Features;
