import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Euro,
  Instagram,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light/10 via-background to-secondary-light/10 pt-20 pb-32 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(340,100%,64%,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(291,64%,42%,0.08),transparent_50%)]" />

      <div className="container-mobile max-w-7xl relative z-10">
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
              Tes clientes voient tes disponibilités en temps réel, réservent en
              ligne et reçoivent des rappels automatiques. Fini les DM, les
              stories à mettre à jour et les confirmations la veille — tout
              s'automatise. ✨
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToWaitlist}
                className="group w-full sm:w-auto"
              >
                Rejoindre la liste d'attente
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/tarifs" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Voir les tarifs
                </Button>
              </Link>
            </div>

            {/* <div className="flex items-center gap-8 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background"
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">+200 prestataires</span>
              </div>
              <div className="text-muted-foreground">
                ⭐ 4.9/5 sur les réseaux
              </div>
            </div> */}
          </div>

          <div className="relative animate-fade-in-up">
            {/* Background glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />

            {/* Booking page mockup */}
            <div className="relative w-72 h-[600px] mx-auto">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 rounded-[2.5rem] p-1.5 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                  {/* Screen content */}
                  <div className="w-full h-full bg-white flex flex-col">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-gray-800 text-xs px-4 py-2 bg-gray-100">
                      <span>12:12</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-1.5 bg-gray-600 rounded-sm"></div>
                        <div className="w-3 h-1.5 bg-gray-600 rounded-sm"></div>
                        <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b">
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      <h3 className="text-gray-800 font-bold text-lg">
                        Book N' Glow
                      </h3>
                      <div className="w-6 h-6"></div>
                    </div>

                    {/* Navigation tabs */}
                    <div className="flex border-b">
                      <div className="flex-1 text-center py-3 border-b-2 border-primary">
                        <span className="text-primary font-medium text-sm">
                          Prendre RDV
                        </span>
                      </div>
                      <div className="flex-1 text-center py-3">
                        <span className="text-gray-500 text-sm">À-propos</span>
                      </div>
                    </div>

                    {/* Hero image placeholder */}
                    <div className="h-32 bg-gradient-to-br from-pink-100 to-rose-200 mx-4 mt-4 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-pink-300 rounded-full mx-auto mb-2"></div>
                        <div className="text-xs text-gray-600">
                          Image du salon
                        </div>
                      </div>
                    </div>

                    {/* Business info */}
                    <div className="px-4 py-3">
                      <h4 className="text-gray-800 font-bold text-lg mb-1">
                        Nail's Ange
                      </h4>
                      <div className="flex items-center gap-1 mb-1">
                        <MapPin className="w-3 h-3 text-gray-500" />
                        <span className="text-gray-600 text-sm">
                          14 rue de lion, Paris, 75002
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Instagram className="w-3 h-3 text-gray-500" />
                        <span className="text-gray-600 text-sm">
                          @nails_ange
                        </span>
                      </div>
                    </div>

                    {/* Services section */}
                    <div className="px-4 mb-3">
                      <h5 className="text-gray-800 font-bold text-sm mb-2">
                        Services proposés
                      </h5>

                      {/* Category tabs */}
                      <div className="flex gap-2 mb-3">
                        <div className="px-3 py-1 bg-primary text-white rounded-full text-xs">
                          Tous
                        </div>
                        <div className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          Cils
                        </div>
                        <div className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          Ongles
                        </div>
                        <div className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          Épilation
                        </div>
                      </div>

                      {/* Service list */}
                      <div className="space-y-3">
                        {/* Service 1 */}
                        <div className="bg-gray-50 rounded-xl p-3">
                          <h6 className="text-gray-800 font-medium text-sm mb-1">
                            Extension cils - Volume Mixte
                          </h6>
                          <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                            Non dolores ex at fugiat a doloremque. Iste error
                            officia porro maxime in...
                          </p>
                          <div className="flex items-center gap-1 mb-2">
                            <span className="text-xs text-primary">
                              Plus de détails
                            </span>
                            <ChevronDown className="w-3 h-3 text-primary" />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                <Euro className="w-3 h-3 text-gray-600" />
                                <span className="text-gray-800 font-medium text-sm">
                                  80
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-gray-600" />
                                <span className="text-gray-600 text-xs">
                                  90min
                                </span>
                              </div>
                            </div>
                            <button className="bg-primary text-white px-4 py-1 rounded-lg text-xs">
                              Choisir
                            </button>
                          </div>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-gray-50 rounded-xl p-3">
                          <h6 className="text-gray-800 font-medium text-sm mb-1">
                            Nail art
                          </h6>
                          <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                            Recusandae amet sapiente officia. Repudiandae totam
                            et. Voluptatem quas...
                          </p>
                          <div className="flex items-center gap-1 mb-2">
                            <span className="text-xs text-primary">
                              Plus de détails
                            </span>
                            <ChevronDown className="w-3 h-3 text-primary" />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1">
                                <Euro className="w-3 h-3 text-gray-600" />
                                <span className="text-gray-800 font-medium text-sm">
                                  100
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-gray-600" />
                                <span className="text-gray-600 text-xs">
                                  60min
                                </span>
                              </div>
                            </div>
                            <button className="bg-primary text-white px-4 py-1 rounded-lg text-xs">
                              Choisir
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Minimal floating elements */}
            <div className="absolute top-8 -right-6 animate-float">
              <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
            </div>

            <div
              className="absolute bottom-12 -left-4 animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
