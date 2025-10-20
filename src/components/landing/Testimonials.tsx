import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Coiffeuse indépendante",
    content: "Book N' Glow a transformé ma façon de travailler. Plus besoin de gérer les messages sur Instagram, mes clientes réservent directement en ligne !",
    rating: 5,
  },
  {
    name: "Léa D.",
    role: "Maquilleuse professionnelle",
    content: "La page est magnifique et super facile à configurer. Mes clientes adorent la simplicité de réservation. Je gagne au moins 2h par jour !",
    rating: 5,
  },
  {
    name: "Camille R.",
    role: "Nail Artist",
    content: "J'adore pouvoir personnaliser ma page aux couleurs de mon brand. C'est exactement ce que je cherchais pour professionnaliser mon activité.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Elles ont choisi <span className="text-gradient">Book N' Glow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rejoignez les prestataires qui ont déjà transformé leur activité
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
