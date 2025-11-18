import Footer from "@/components/landing/Footer";
import Navigation from "@/components/landing/Navigation";

export default function MentionsLegales() {
  return (
    <>
      <Navigation />
      {/* Hero Section */}
      <section className="pt-10 pb-8 md:pt-20 md:pb-16 px-4 text-center">
        <div className="container-mobile max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Mentions <span className="text-gradient">Légales</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
            pour la confiance en l'économie numérique
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pt-10 pb-20 md:pt-20 md:pb-32 px-4 bg-background-light">
        <div className="container-mobile max-w-4xl">
          <div className="space-y-8">
            {/* Éditeur du site */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                1. Éditeur du site
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">
                    Nom de l'entreprise :
                  </strong>{" "}
                  Book n Glow
                </p>
                <p>
                  <strong className="text-foreground">Forme juridique :</strong>{" "}
                  Micro-entreprise
                </p>
                <p>
                  <strong className="text-foreground">Siège social :</strong> 1
                  allée du furet, 77186 Noisiel
                </p>
                <p>
                  <strong className="text-foreground">
                    Numéro SIREN/SIRET :
                  </strong>{" "}
                  83307726600025
                </p>
                <p>
                  <strong className="text-foreground">
                    Numéro de TVA intracommunautaire :
                  </strong>{" "}
                  Non applicable
                </p>
                <p>
                  <strong className="text-foreground">
                    Email de contact :
                  </strong>{" "}
                  <a
                    href="mailto:contact@book-n-glow"
                    className="text-primary hover:underline"
                  >
                    contact@book-n-glow
                  </a>
                </p>
                <p>
                  <strong className="text-foreground">Téléphone :</strong> Non
                  disponible
                </p>
              </div>
            </div>

            {/* Hébergeur du site */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                2. Hébergeur du site
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">
                    Nom de l'hébergeur :
                  </strong>{" "}
                  Netlify, Inc.
                </p>
                <p>
                  <strong className="text-foreground">Adresse :</strong> 44
                  Montgomery Street, Suite 300, San Francisco, California 94104,
                  États-Unis
                </p>
                <p>
                  <strong className="text-foreground">Site web :</strong>{" "}
                  <a
                    href="https://www.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.netlify.com
                  </a>
                </p>
              </div>
            </div>

            {/* Responsable de la publication */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                3. Responsable de la publication
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Nom et prénom :</strong>{" "}
                  Tracy Z. Garcia
                </p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                4. Propriété intellectuelle
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  L'ensemble de ce site relève de la législation française et
                  internationale sur le droit d'auteur et la propriété
                  intellectuelle. Tous les droits de reproduction sont réservés,
                  y compris pour les documents téléchargeables et les
                  représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support
                  électronique quel qu'il soit est formellement interdite sauf
                  autorisation expresse de l'éditeur.
                </p>
              </div>
            </div>

            {/* Protection des données */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                5. Protection des données personnelles
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Conformément à la loi "Informatique et Libertés" du 6 janvier
                  1978 modifiée et au Règlement Général sur la Protection des
                  Données (RGPD), vous disposez d'un droit d'accès, de
                  rectification, de suppression et d'opposition aux données
                  personnelles vous concernant.
                </p>
                <p>
                  Pour exercer ce droit, veuillez nous contacter à l'adresse
                  suivante :{" "}
                  <a
                    href="mailto:contact@book-n-glow"
                    className="text-primary hover:underline"
                  >
                    contact@book-n-glow
                  </a>
                </p>
                <p>
                  Pour plus d'informations, consultez notre{" "}
                  <a
                    href="/politique-de-confidentialite"
                    className="text-primary hover:underline"
                  >
                    Politique de confidentialité
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                6. Droit applicable et juridiction compétente
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Les présentes mentions légales sont régies par le droit
                  français. En cas de litige et à défaut d'accord amiable, le
                  litige sera porté devant les tribunaux français conformément
                  aux règles de compétence en vigueur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
