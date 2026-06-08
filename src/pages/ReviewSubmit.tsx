import { useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
  Sparkles,
  Star,
  Calendar,
  CheckCircle2,
  Heart,
  ArrowRight,
  Info,
} from "lucide-react";

type CriterionKey = "ponctualite" | "prestation" | "proprete" | "savoirEtre";

const CRITERIA: {
  key: CriterionKey;
  label: string;
  description: string;
}[] = [
  {
    key: "ponctualite",
    label: "Ponctualité",
    description: "Le prestataire a-t-il respecté l'horaire de votre rendez-vous ?",
  },
  {
    key: "prestation",
    label: "Qualité de la prestation",
    description: "Êtes-vous satisfait·e du résultat obtenu ?",
  },
  {
    key: "proprete",
    label: "Propreté",
    description: "L'espace et le matériel étaient-ils propres et soignés ?",
  },
  {
    key: "savoirEtre",
    label: "Savoir-être",
    description: "Accueil, écoute et professionnalisme du prestataire.",
  },
];

const RATING_LABELS = [
  "",
  "Décevant",
  "Passable",
  "Correct",
  "Très bien",
  "Excellent",
];

interface StarRatingProps {
  value: number;
  onChange: (v: number) => void;
  label: string;
}

const StarRating = ({ value, onChange, label }: StarRatingProps) => {
  const [hover, setHover] = useState(0);
  const display = hover || value;

  return (
    <div
      className="flex items-center gap-1"
      role="radiogroup"
      aria-label={label}
      onMouseLeave={() => setHover(0)}
    >
      {[1, 2, 3, 4, 5].map((n) => {
        const active = n <= display;
        return (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={value === n}
            aria-label={`${n} étoile${n > 1 ? "s" : ""}`}
            onMouseEnter={() => setHover(n)}
            onFocus={() => setHover(n)}
            onClick={() => onChange(n)}
            className="p-1 rounded-md transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Star
              className={`w-8 h-8 transition-colors ${
                active
                  ? "fill-accent text-accent drop-shadow-[0_2px_6px_hsl(45,100%,60%,0.35)]"
                  : "text-muted-foreground/40"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

const ReviewSubmit = () => {
  const { providerId } = useParams();
  const [searchParams] = useSearchParams();
  const providerName = searchParams.get("provider") || "votre prestataire";
  const serviceName = searchParams.get("service") || "votre dernière prestation";
  const appointmentDate = searchParams.get("date") || "";

  const [ratings, setRatings] = useState<Record<CriterionKey, number>>({
    ponctualite: 0,
    prestation: 0,
    proprete: 0,
    savoirEtre: 0,
  });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const average = useMemo(() => {
    const values = Object.values(ratings).filter((v) => v > 0);
    if (values.length === 0) return 0;
    return values.reduce((a, b) => a + b, 0) / values.length;
  }, [ratings]);

  const allRated = Object.values(ratings).every((v) => v > 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!allRated) {
      toast({
        title: "Critères incomplets",
        description: "Merci de noter les 4 critères avant d'envoyer votre avis.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary-light/10 via-background to-secondary-light/10">
        <Card className="w-full max-w-md shadow-soft border-border/60 animate-fade-in">
          <CardContent className="p-8 text-center space-y-6">
            <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold font-serif text-gradient">
                Merci pour votre avis !
              </h1>
              <p className="text-muted-foreground">
                Votre évaluation a bien été envoyée à <strong>{providerName}</strong>.
                Elle sera publiée sur son profil après modération.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span>Vous aidez la communauté Book N' Glow à grandir.</span>
            </div>
            <Button asChild variant="hero" size="lg" className="w-full rounded-xl">
              <Link to="/">
                Retour à l'accueil
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/10 via-background to-secondary-light/10 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-3 animate-fade-in">
          <Link to="/" className="inline-flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-xl font-bold font-serif text-gradient">
              Book N' Glow
            </span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-foreground">
            Évaluez votre expérience
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Votre avis sur <strong className="text-foreground">{providerName}</strong>{" "}
            aide d'autres clients à choisir en toute confiance.
          </p>
        </div>

        {/* Appointment recap */}
        <Card className="border-border/60 shadow-soft animate-fade-in">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-muted-foreground">Prestation évaluée</p>
              <p className="font-semibold text-foreground truncate">{serviceName}</p>
              {appointmentDate && (
                <p className="text-xs text-muted-foreground mt-0.5">
                  {appointmentDate}
                </p>
              )}
            </div>
            {average > 0 && (
              <div className="text-right shrink-0">
                <p className="text-xs text-muted-foreground">Note moyenne</p>
                <div className="flex items-center gap-1 justify-end">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-bold text-foreground">
                    {average.toFixed(1)}
                  </span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="border-border/60 shadow-soft animate-fade-in">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-foreground">
                  Notez les 4 critères
                </h2>
                <p className="text-sm text-muted-foreground">
                  Attribuez une note de 1 à 5 étoiles à chaque critère.
                </p>
              </div>

              <div className="space-y-5">
                {CRITERIA.map((c) => (
                  <div
                    key={c.key}
                    className="p-4 rounded-xl bg-muted/30 border border-border/40 transition-colors hover:border-primary/30"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{c.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {c.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <StarRating
                          value={ratings[c.key]}
                          onChange={(v) =>
                            setRatings((prev) => ({ ...prev, [c.key]: v }))
                          }
                          label={c.label}
                        />
                        {ratings[c.key] > 0 && (
                          <span className="text-xs text-primary font-medium">
                            {RATING_LABELS[ratings[c.key]]}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-soft animate-fade-in">
            <CardContent className="p-6 space-y-4">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-foreground">
                  Votre commentaire
                </h2>
                <p className="text-sm text-muted-foreground">
                  Partagez votre ressenti général (facultatif).
                </p>
              </div>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ex : Accueil chaleureux, résultat magnifique, je recommande !"
                rows={5}
                maxLength={600}
                className="rounded-xl border-border/80 focus-visible:ring-primary resize-none"
              />
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                <p>
                  Votre avis sera publié sur le profil public du prestataire après
                  modération. Restez bienveillant·e et respectueux·se.
                </p>
              </div>
              <p className="text-xs text-muted-foreground text-right">
                {message.length}/600
              </p>
            </CardContent>
          </Card>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            disabled={isSubmitting || !allRated}
            className="w-full h-12 rounded-xl text-base"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Envoi en cours...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Envoyer mon avis
                <ArrowRight className="w-5 h-5" />
              </span>
            )}
          </Button>

          {!allRated && (
            <p className="text-center text-xs text-muted-foreground">
              Les 4 critères doivent être notés pour valider votre avis.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ReviewSubmit;
