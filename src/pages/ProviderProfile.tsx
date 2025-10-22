import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";

const services = [
  {
    id: 1,
    title: "Maquillage marié",
    description: "Maquillage complet pour le jour J, adapté à la morphologie du visage et au style souhaité.",
    price: "120",
    category: "maquillage",
  },
  {
    id: 2,
    title: "Soin du visage complet",
    description: "Nettoyage en profondeur, gommage, masque et hydratation pour une peau éclatante.",
    price: "80",
    category: "soins",
  },
  {
    id: 3,
    title: "Manucure complète",
    description: "Soin des ongles, pose de vernis semi-permanent et nail art selon vos envies.",
    price: "45",
    category: "ongles",
  },
  {
    id: 4,
    title: "Maquillage de soirée",
    description: "Look glamour et sophistiqué pour vos événements spéciaux.",
    price: "70",
    category: "maquillage",
  },
  {
    id: 5,
    title: "Rehaussement de cils",
    description: "Effet naturel et durable pour un regard sublime sans mascara.",
    price: "60",
    category: "soins",
  },
  {
    id: 6,
    title: "Extension d'ongles en gel",
    description: "Pose d'extensions pour des ongles longs et résistants.",
    price: "65",
    category: "ongles",
  },
];

const categories = [
  { id: "tous", label: "Tous" },
  { id: "maquillage", label: "Maquillage" },
  { id: "soins", label: "Soins du visage" },
  { id: "ongles", label: "Ongles" },
];

const ProviderProfile = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("tous");
  const [showDetails, setShowDetails] = useState<number | null>(null);

  const filteredServices = activeCategory === "tous" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-light">
      <Navigation />
      
      <main className="container-mobile max-w-4xl pt-24 pb-16">
        <Tabs defaultValue="booking" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8 h-12 bg-background-light">
            <TabsTrigger value="booking" className="flex-1 text-base">
              Prendre RDV
            </TabsTrigger>
            <TabsTrigger value="info" className="flex-1 text-base">
              Informations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="booking" className="space-y-8">
            {/* Provider Image */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src="/placeholder.svg" 
                alt="Salon" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Provider Info */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-gradient">
                Manucurist
              </h1>
              
              <div className="flex flex-col gap-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-lg">75020 Paris</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Instagram className="w-5 h-5 text-primary" />
                  <a 
                    href="https://instagram.com/book.n.glow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg hover:text-primary transition-colors"
                  >
                    @book.n.glow
                  </a>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold">Services proposés</h2>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-primary to-secondary text-white shadow-glow"
                        : "bg-background-light text-text-secondary hover:bg-primary/10"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Services List */}
              <div className="grid gap-4">
                {filteredServices.map((service) => (
                  <Card 
                    key={service.id}
                    className="overflow-hidden hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/20"
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    {showDetails === service.id && (
                      <CardContent className="animate-fade-in">
                        <p className="text-muted-foreground">
                          Ce service comprend une consultation personnalisée pour adapter la prestation à vos besoins spécifiques.
                        </p>
                      </CardContent>
                    )}
                    
                    <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">à partir de</p>
                        <p className="text-3xl font-bold text-primary">{service.price}€</p>
                      </div>
                      
                      <div className="flex flex-col gap-2 w-full sm:w-auto">
                        <Button 
                          variant="hero"
                          size="lg"
                          className="w-full sm:w-auto"
                          onClick={() => navigate(`/reserver/${service.id}`)}
                        >
                          Choisir
                        </Button>
                        
                        <button
                          onClick={() => setShowDetails(showDetails === service.id ? null : service.id)}
                          className="text-sm text-primary hover:underline"
                        >
                          {showDetails === service.id ? "Moins de détails ▲" : "Plus de détails ▼"}
                        </button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="info" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">À propos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Professionnelle de la beauté depuis plus de 8 ans, je vous accueille dans mon salon moderne et chaleureux au cœur de Paris.
                </p>
                <p className="text-lg text-muted-foreground">
                  Spécialisée dans les prestations haut de gamme, je mets mon expertise au service de votre beauté avec des produits de qualité professionnelle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Horaires</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Lundi - Vendredi</span>
                    <span className="text-muted-foreground">9h00 - 19h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Samedi</span>
                    <span className="text-muted-foreground">10h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Dimanche</span>
                    <span className="text-muted-foreground">Fermé</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Politique d'annulation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Annulation gratuite jusqu'à 24h avant le rendez-vous. Au-delà, 50% du montant de la prestation sera facturé.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ProviderProfile;
