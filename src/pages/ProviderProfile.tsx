import Footer from "@/components/landing/Footer";
import Navigation from "@/components/landing/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Clock, Instagram, MapPin, Star, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Review {
  id: number;
  clientName: string;
  date: string;
  comment?: string;
  ratings: {
    proprete: number;
    qualiteTravail: number;
    savoirEtre: number;
    ponctualite: number;
  };
}

const reviews: Review[] = [
  {
    id: 1,
    clientName: "Marie L.",
    date: "2024-01-15",
    comment: "Un moment de détente absolue ! Le salon est impeccable et la prestation au top. Je recommande vivement.",
    ratings: { proprete: 5, qualiteTravail: 5, savoirEtre: 5, ponctualite: 5 }
  },
  {
    id: 2,
    clientName: "Sophie D.",
    date: "2024-01-10",
    comment: "Très satisfaite de ma manucure, le résultat est magnifique !",
    ratings: { proprete: 5, qualiteTravail: 5, savoirEtre: 4, ponctualite: 5 }
  },
  {
    id: 3,
    clientName: "Julie M.",
    date: "2024-01-08",
    ratings: { proprete: 4, qualiteTravail: 5, savoirEtre: 5, ponctualite: 4 }
  },
  {
    id: 4,
    clientName: "Camille R.",
    date: "2024-01-05",
    comment: "Excellent travail, très professionnelle. Le salon est magnifique et très propre.",
    ratings: { proprete: 5, qualiteTravail: 5, savoirEtre: 5, ponctualite: 5 }
  },
  {
    id: 5,
    clientName: "Emma B.",
    date: "2024-01-02",
    comment: "Ponctuelle et à l'écoute, une vraie pro !",
    ratings: { proprete: 5, qualiteTravail: 4, savoirEtre: 5, ponctualite: 5 }
  },
  {
    id: 6,
    clientName: "Léa P.",
    date: "2023-12-28",
    ratings: { proprete: 4, qualiteTravail: 5, savoirEtre: 5, ponctualite: 5 }
  },
  {
    id: 7,
    clientName: "Chloé V.",
    date: "2023-12-20",
    comment: "Super expérience, je reviendrai sans hésiter.",
    ratings: { proprete: 5, qualiteTravail: 5, savoirEtre: 5, ponctualite: 4 }
  },
  {
    id: 8,
    clientName: "Inès K.",
    date: "2023-12-15",
    comment: "Travail de qualité, ambiance très agréable.",
    ratings: { proprete: 5, qualiteTravail: 5, savoirEtre: 4, ponctualite: 5 }
  }
];

const ratingLabels = {
  proprete: "Propreté",
  qualiteTravail: "Qualité du travail",
  savoirEtre: "Savoir-être",
  ponctualite: "Ponctualité"
};

const calculateAverageRatings = (reviews: Review[]) => {
  const totals = { proprete: 0, qualiteTravail: 0, savoirEtre: 0, ponctualite: 0 };
  reviews.forEach(review => {
    totals.proprete += review.ratings.proprete;
    totals.qualiteTravail += review.ratings.qualiteTravail;
    totals.savoirEtre += review.ratings.savoirEtre;
    totals.ponctualite += review.ratings.ponctualite;
  });
  const count = reviews.length;
  return {
    proprete: totals.proprete / count,
    qualiteTravail: totals.qualiteTravail / count,
    savoirEtre: totals.savoirEtre / count,
    ponctualite: totals.ponctualite / count
  };
};

const getOverallAverage = (ratings: Review["ratings"]) => {
  return (ratings.proprete + ratings.qualiteTravail + ratings.savoirEtre + ratings.ponctualite) / 4;
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "fill-primary text-primary"
              : star - 0.5 <= rating
              ? "fill-primary/50 text-primary"
              : "fill-muted text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
};

interface ServiceOption {
  id: number;
  name: string;
  price: string;
  duration: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: string;
  category: string;
  options?: ServiceOption[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Maquillage marié",
    description:
      "Maquillage complet pour le jour J, adapté à la morphologie du visage et au style souhaité.",
    price: "120",
    duration: "1h30",
    category: "maquillage",
    options: [
      { id: 1, name: "Essai maquillage", price: "50", duration: "45min" },
      { id: 2, name: "Faux cils individuels", price: "25", duration: "20min" },
      { id: 3, name: "Retouche en soirée", price: "40", duration: "30min" },
    ],
  },
  {
    id: 2,
    title: "Soin du visage complet",
    description:
      "Nettoyage en profondeur, gommage, masque et hydratation pour une peau éclatante.",
    price: "80",
    duration: "1h15",
    category: "soins",
    options: [
      { id: 1, name: "Massage du visage", price: "20", duration: "15min" },
      { id: 2, name: "Soin contour des yeux", price: "15", duration: "10min" },
    ],
  },
  {
    id: 3,
    title: "Manucure complète",
    description:
      "Soin des ongles, pose de vernis semi-permanent et nail art selon vos envies.",
    price: "45",
    duration: "1h",
    category: "ongles",
    options: [
      { id: 1, name: "Nail art simple", price: "10", duration: "15min" },
      { id: 2, name: "Nail art complexe", price: "25", duration: "30min" },
      { id: 3, name: "Soin des cuticules", price: "8", duration: "10min" },
    ],
  },
  {
    id: 4,
    title: "Maquillage de soirée",
    description: "Look glamour et sophistiqué pour vos événements spéciaux.",
    price: "70",
    duration: "1h",
    category: "maquillage",
    options: [
      { id: 1, name: "Faux cils en bande", price: "15", duration: "10min" },
      { id: 2, name: "Paillettes/strass", price: "10", duration: "10min" },
    ],
  },
  {
    id: 5,
    title: "Rehaussement de cils",
    description:
      "Effet naturel et durable pour un regard sublime sans mascara.",
    price: "60",
    duration: "45min",
    category: "soins",
  },
  {
    id: 6,
    title: "Extension d'ongles en gel",
    description: "Pose d'extensions pour des ongles longs et résistants.",
    price: "65",
    duration: "1h30",
    category: "ongles",
    options: [
      { id: 1, name: "Forme stiletto", price: "10", duration: "15min" },
      { id: 2, name: "French manucure", price: "15", duration: "20min" },
    ],
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

  const filteredServices =
    activeCategory === "tous"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-light">
      <Navigation />

      <main className="container-mobile max-w-4xl pt-24 pb-16">
        <Tabs defaultValue="booking" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8 h-12 bg-background-light">
            <TabsTrigger value="booking" className="flex-1 text-sm sm:text-base">
              Prendre RDV
            </TabsTrigger>
            <TabsTrigger value="info" className="flex-1 text-sm sm:text-base">
              Informations
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1 text-sm sm:text-base">
              Avis
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
                    href="https://instagram.com/bookn_glow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-primary transition-colors"
                  >
                    @bookn_glow
                  </a>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold">
                Services proposés
              </h2>

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
                      <CardTitle className="text-2xl">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    {showDetails === service.id && (
                      <CardContent className="animate-fade-in space-y-4">
                        <p className="text-muted-foreground">
                          Ce service comprend une consultation personnalisée
                          pour adapter la prestation à vos besoins spécifiques.
                        </p>
                        
                        {service.options && service.options.length > 0 && (
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground">Options disponibles</h4>
                            <div className="space-y-2">
                              {service.options.map((option) => (
                                <div 
                                  key={option.id}
                                  className="flex items-center justify-between p-3 rounded-lg bg-background-light border border-border/50"
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="font-medium text-foreground">{option.name}</span>
                                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                      <Clock className="w-3.5 h-3.5" />
                                      {option.duration}
                                    </span>
                                  </div>
                                  <span className="font-semibold text-primary">+{option.price}€</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    )}

                    <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                          à partir de
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="text-3xl font-bold text-primary">
                            {service.price}€
                          </p>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {service.duration}
                          </span>
                        </div>
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
                          onClick={() =>
                            setShowDetails(
                              showDetails === service.id ? null : service.id
                            )
                          }
                          className="text-sm text-primary hover:underline"
                        >
                          {showDetails === service.id
                            ? "Moins de détails ▲"
                            : "Plus de détails ▼"}
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
                  Professionnelle de la beauté depuis plus de 8 ans, je vous
                  accueille dans mon salon moderne et chaleureux au cœur de
                  Paris.
                </p>
                <p className="text-lg text-muted-foreground">
                  Spécialisée dans les prestations haut de gamme, je mets mon
                  expertise au service de votre beauté avec des produits de
                  qualité professionnelle.
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
                <CardTitle className="text-2xl">
                  Politique d'annulation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Annulation gratuite jusqu'à 24h avant le rendez-vous. Au-delà,
                  50% du montant de la prestation sera facturé.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            {/* Global Ratings Summary */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Note globale</CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary">
                      {(Object.values(calculateAverageRatings(reviews)).reduce((a, b) => a + b, 0) / 4).toFixed(1)}
                    </span>
                    <Star className="w-6 h-6 fill-primary text-primary" />
                    <span className="text-muted-foreground">({reviews.length} avis)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(calculateAverageRatings(reviews)).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{ratingLabels[key as keyof typeof ratingLabels]}</span>
                      <div className="flex items-center gap-2">
                        <StarRating rating={Math.round(value)} />
                        <span className="text-sm font-semibold text-primary">{value.toFixed(1)}</span>
                      </div>
                    </div>
                    <Progress value={value * 20} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Individual Reviews */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold">Tous les avis</h2>
              
              {reviews.map((review) => {
                const overallRating = getOverallAverage(review.ratings);
                return (
                  <Card key={review.id} className="hover:shadow-elegant transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{review.clientName}</CardTitle>
                            <CardDescription>
                              {new Date(review.date).toLocaleDateString("fr-FR", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                              })}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-full">
                          <Star className="w-4 h-4 fill-primary text-primary" />
                          <span className="font-semibold text-primary">{overallRating.toFixed(1)}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {review.comment && (
                        <p className="text-muted-foreground italic">"{review.comment}"</p>
                      )}
                      
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(review.ratings).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              {ratingLabels[key as keyof typeof ratingLabels]}
                            </span>
                            <StarRating rating={value} />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ProviderProfile;
