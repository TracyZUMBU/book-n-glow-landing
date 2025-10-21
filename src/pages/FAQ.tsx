import Footer from "@/components/landing/Footer";

export default function FAQ() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Questions <span className="text-gradient">Fréquentes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trouvez les réponses aux questions les plus courantes sur Book &
            Glow
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 bg-background-light">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-2">
                Puis-je changer de plan à tout moment ?
              </h3>
              <p className="text-muted-foreground">
                Oui, vous pouvez passer à un plan supérieur ou inférieur à tout
                moment. Les changements prennent effet immédiatement.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-2">
                L'essai gratuit nécessite-t-il une carte bancaire ?
              </h3>
              <p className="text-muted-foreground">
                Non, aucune carte bancaire n'est requise pour commencer votre
                essai de 14 jours.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-2">
                Que se passe-t-il si je dépasse ma limite de réservations ?
              </h3>
              <p className="text-muted-foreground">
                Nous vous notifierons avant d'atteindre votre limite. Vous
                pourrez alors passer à un plan supérieur ou attendre le mois
                suivant.
              </p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-2">
                Y a-t-il des frais cachés ?
              </h3>
              <p className="text-muted-foreground">
                Non, tous les tarifs sont transparents. Les seuls frais
                supplémentaires concernent les paiements en ligne (frais
                bancaires standards).
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
