import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalHeaderWithIcon,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
  ModalClose,
} from "@/components/ui/modal";
import {
  Mail,
  CheckCircle2,
  AlertTriangle,
  Info,
  Calendar,
  CreditCard,
  Trash2,
} from "lucide-react";
import Navigation from "@/components/landing/Navigation";

const ModalPreview = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container-mobile py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
              Prévisualisation des Modals
            </h1>
            <p className="text-muted-foreground text-lg">
              Découvrez les différentes variantes de notre composant modal personnalisé
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Modal Simple */}
            <div className="p-6 border-2 border-border rounded-xl bg-card hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Modal Simple</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Un modal basique avec titre et description
              </p>
              <Modal>
                <ModalTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Ouvrir
                  </Button>
                </ModalTrigger>
                <ModalContent size="md">
                  <ModalHeader>
                    <ModalTitle>Modal Simple</ModalTitle>
                    <ModalDescription>
                      Ceci est un exemple de modal simple avec un titre et une description.
                    </ModalDescription>
                  </ModalHeader>
                  <ModalBody>
                    <p className="text-foreground">
                      Voici le contenu principal du modal. Vous pouvez ajouter n'importe quel contenu ici.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <ModalClose asChild>
                      <Button variant="outline">Fermer</Button>
                    </ModalClose>
                    <Button variant="hero">Confirmer</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>

            {/* Modal avec Icône */}
            <div className="p-6 border-2 border-border rounded-xl bg-card hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Avec Icône</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Modal élégant avec icône et gradient
              </p>
              <Modal>
                <ModalTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Ouvrir
                  </Button>
                </ModalTrigger>
                <ModalContent size="lg">
                  <ModalHeaderWithIcon icon={Mail}>
                    <ModalTitle>Envoyer un message</ModalTitle>
                    <ModalDescription>
                      Remplissez le formulaire pour nous contacter
                    </ModalDescription>
                  </ModalHeaderWithIcon>
                  <ModalBody>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom</Label>
                        <Input
                          id="name"
                          placeholder="Votre nom"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Votre message..." rows={4} />
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <ModalClose asChild>
                      <Button variant="outline">Annuler</Button>
                    </ModalClose>
                    <Button variant="hero">
                      <Mail className="w-4 h-4 mr-2" />
                      Envoyer
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>

            {/* Modal avec Glow */}
            <div className="p-6 border-2 border-border rounded-xl bg-card hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Effet Glow</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Modal avec effet lumineux élégant
              </p>
              <Modal>
                <ModalTrigger asChild>
                  <Button variant="hero" className="w-full">
                    Ouvrir
                  </Button>
                </ModalTrigger>
                <ModalContent size="md" glow>
                  <ModalHeaderWithIcon icon={CheckCircle2}>
                    <ModalTitle>Réservation confirmée</ModalTitle>
                    <ModalDescription>
                      Votre rendez-vous a été confirmé avec succès
                    </ModalDescription>
                  </ModalHeaderWithIcon>
                  <ModalBody>
                    <div className="space-y-4">
                      <div className="p-4 bg-background-light rounded-lg">
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span className="font-semibold text-foreground">Lundi 27 octobre</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Un email de confirmation vous a été envoyé
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Paiement vérifié</span>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <ModalClose asChild>
                      <Button variant="hero" className="w-full sm:w-auto">
                        Voir mes réservations
                      </Button>
                    </ModalClose>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>

            {/* Modal de Confirmation */}
            <div className="p-6 border-2 border-border rounded-xl bg-card hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Confirmation</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Modal de confirmation d'action
              </p>
              <Modal>
                <ModalTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Ouvrir
                  </Button>
                </ModalTrigger>
                <ModalContent size="sm">
                  <ModalHeaderWithIcon icon={AlertTriangle}>
                    <ModalTitle>Confirmer l'annulation</ModalTitle>
                    <ModalDescription>
                      Cette action est irréversible
                    </ModalDescription>
                  </ModalHeaderWithIcon>
                  <ModalBody>
                    <div className="border-l-4 border-destructive bg-destructive/5 p-4 rounded-r-lg">
                      <p className="text-sm text-foreground">
                        Êtes-vous sûr de vouloir annuler cette réservation ? Vous ne pourrez pas revenir en arrière.
                      </p>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <ModalClose asChild>
                      <Button variant="outline">Non, garder</Button>
                    </ModalClose>
                    <ModalClose asChild>
                      <Button variant="default" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Oui, annuler
                      </Button>
                    </ModalClose>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>

            {/* Modal Information */}
            <div className="p-6 border-2 border-border rounded-xl bg-card hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Information</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Modal d'information avec icône bleue
              </p>
              <Modal>
                <ModalTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Ouvrir
                  </Button>
                </ModalTrigger>
                <ModalContent size="md">
                  <ModalHeaderWithIcon icon={Info}>
                    <ModalTitle>Politique d'annulation</ModalTitle>
                    <ModalDescription>
                      Conditions importantes à connaître
                    </ModalDescription>
                  </ModalHeaderWithIcon>
                  <ModalBody>
                    <div className="space-y-3 text-sm text-foreground">
                      <p>
                        • Annulation gratuite jusqu'à 24h avant le rendez-vous
                      </p>
                      <p>
                        • Entre 24h et 12h : 50% du montant sera retenu
                      </p>
                      <p>
                        • Moins de 12h avant : aucun remboursement
                      </p>
                      <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                        <p className="text-accent font-semibold">
                          En cas d'absence sans préavis, votre compte pourra être suspendu.
                        </p>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <ModalClose asChild>
                      <Button variant="outline">J'ai compris</Button>
                    </ModalClose>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>

            {/* Modal Paiement */}
            <div className="p-6 border-2 border-border rounded-xl bg-card hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Paiement</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Modal de paiement sécurisé
              </p>
              <Modal>
                <ModalTrigger asChild>
                  <Button variant="hero" className="w-full">
                    Ouvrir
                  </Button>
                </ModalTrigger>
                <ModalContent size="lg" glow>
                  <ModalHeaderWithIcon icon={CreditCard}>
                    <ModalTitle>Paiement sécurisé</ModalTitle>
                    <ModalDescription>
                      Acompte de 30€ à régler maintenant
                    </ModalDescription>
                  </ModalHeaderWithIcon>
                  <ModalBody>
                    <div className="space-y-4">
                      <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-foreground font-semibold">Montant à payer</span>
                          <span className="text-2xl font-bold text-primary">30€</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="card">Numéro de carte</Label>
                        <Input id="card" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiration</Label>
                          <Input id="expiry" placeholder="MM/AA" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Paiement sécurisé SSL</span>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <ModalClose asChild>
                      <Button variant="outline">Annuler</Button>
                    </ModalClose>
                    <Button variant="hero">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Payer 30€
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>

            {/* Modal Large */}
            <div className="p-6 border-2 border-border rounded-xl bg-card hover:border-primary transition-colors md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Grande Taille</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Modal extra large pour plus de contenu
              </p>
              <Modal>
                <ModalTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Ouvrir
                  </Button>
                </ModalTrigger>
                <ModalContent size="2xl">
                  <ModalHeaderWithIcon icon={Calendar}>
                    <ModalTitle>Détails de la réservation</ModalTitle>
                    <ModalDescription>
                      Récapitulatif complet de votre rendez-vous
                    </ModalDescription>
                  </ModalHeaderWithIcon>
                  <ModalBody>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-background-light rounded-lg">
                          <h4 className="font-semibold text-foreground mb-2">Service</h4>
                          <p className="text-sm text-muted-foreground">Maquillage marié</p>
                          <p className="text-sm text-primary font-semibold mt-1">190€</p>
                        </div>
                        <div className="p-4 bg-background-light rounded-lg">
                          <h4 className="font-semibold text-foreground mb-2">Date & Heure</h4>
                          <p className="text-sm text-muted-foreground">Lundi 27 octobre</p>
                          <p className="text-sm text-foreground font-semibold mt-1">10:00</p>
                        </div>
                      </div>
                      <div className="p-4 border-2 border-border rounded-lg">
                        <h4 className="font-semibold text-foreground mb-3">Options sélectionnées</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-foreground">Retouche durant l'événement</span>
                            <span className="text-primary font-semibold">+100€</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-foreground">Essai maquillage préalable</span>
                            <span className="text-primary font-semibold">+50€</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                        <span className="text-lg font-semibold text-foreground">Total</span>
                        <span className="text-2xl font-bold text-primary">340€</span>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <ModalClose asChild>
                      <Button variant="outline">Fermer</Button>
                    </ModalClose>
                    <Button variant="hero">Confirmer la réservation</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>

            {/* Modal Sans Bouton Close */}
            <div className="p-6 border-2 border-border rounded-xl bg-card hover:border-primary transition-colors md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Sans Bouton X</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Modal qui force l'utilisateur à choisir une action
              </p>
              <Modal>
                <ModalTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Ouvrir
                  </Button>
                </ModalTrigger>
                <ModalContent size="md" showClose={false}>
                  <ModalHeaderWithIcon icon={AlertTriangle}>
                    <ModalTitle>Action requise</ModalTitle>
                    <ModalDescription>
                      Veuillez faire un choix pour continuer
                    </ModalDescription>
                  </ModalHeaderWithIcon>
                  <ModalBody>
                    <p className="text-foreground text-sm">
                      Ce modal nécessite une action de votre part. Vous devez choisir une des options ci-dessous pour continuer.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <ModalClose asChild>
                      <Button variant="outline" className="flex-1">
                        Option 1
                      </Button>
                    </ModalClose>
                    <ModalClose asChild>
                      <Button variant="hero" className="flex-1">
                        Option 2
                      </Button>
                    </ModalClose>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>

            {/* Modal Minimaliste */}
            <div className="p-6 border-2 border-border rounded-xl bg-card hover:border-primary transition-colors md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Minimaliste</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Modal simple et épuré, taille small
              </p>
              <Modal>
                <ModalTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Ouvrir
                  </Button>
                </ModalTrigger>
                <ModalContent size="sm">
                  <ModalHeader>
                    <ModalTitle>Êtes-vous sûr ?</ModalTitle>
                  </ModalHeader>
                  <ModalBody>
                    <p className="text-sm text-muted-foreground">
                      Cette action ne peut pas être annulée.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <ModalClose asChild>
                      <Button variant="outline" size="sm">Non</Button>
                    </ModalClose>
                    <ModalClose asChild>
                      <Button variant="hero" size="sm">Oui</Button>
                    </ModalClose>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPreview;
