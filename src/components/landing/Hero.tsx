import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroPhone from "@/assets/hero-phone.jpg";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light/10 via-background to-secondary-light/10 pt-20 pb-32 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(340,100%,64%,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(291,64%,42%,0.08),transparent_50%)]" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Rejoignez les prestataires beauté qui brillent</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Votre page de réservation,{" "}
              <span className="text-gradient">aussi belle</span> que votre feed
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Automatisez vos réservations beauté, concentrez-vous sur votre art. 
              Plus de DM, plus de stress. Juste des rendez-vous qui brillent ✨
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToWaitlist}
                className="group"
              >
                Rejoindre la liste d'attente
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/tarifs">
                <Button 
                  variant="outline" 
                  size="lg"
                >
                  Voir les tarifs
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background" />
                  ))}
                </div>
                <span className="text-muted-foreground">+200 prestataires</span>
              </div>
              <div className="text-muted-foreground">
                ⭐ 4.9/5 sur les réseaux
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
            <img 
              src={heroPhone} 
              alt="Interface de réservation Book N' Glow" 
              className="relative w-full max-w-lg mx-auto drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
