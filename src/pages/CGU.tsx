import Footer from "@/components/landing/Footer";
import Navigation from "@/components/landing/Navigation";

export default function CGU() {
  return (
    <>
      <Navigation />
      {/* Hero Section */}
      <section className="pt-10 pb-8 md:pt-20 md:pb-16 px-4 text-center">
        <div className="container-mobile max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Conditions Générales d'<span className="text-gradient">Utilisation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pt-10 pb-20 md:pt-20 md:pb-32 px-4 bg-background-light">
        <div className="container-mobile max-w-4xl">
          <div className="space-y-8">
            {/* Objet */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                1. Objet
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Les présentes Conditions Générales d'Utilisation (ci-après "CGU")
                  ont pour objet de définir les modalités et conditions d'utilisation
                  du site web{" "}
                  <strong className="text-foreground">Book n Glow</strong> (ci-après
                  "le Site").
                </p>
                <p>
                  Le Site est édité par <strong className="text-foreground">Book n Glow</strong>,
                  auto-entrepreneur, dont le responsable de publication est{" "}
                  <strong className="text-foreground">Tracy Garcia</strong>.
                </p>
                <p>
                  Toute utilisation du Site implique l'acceptation pleine et entière
                  des présentes CGU.
                </p>
              </div>
            </div>

            {/* Acceptation */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                2. Acceptation des CGU
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  En accédant et en utilisant le Site, vous reconnaissez avoir lu,
                  compris et accepté d'être lié par les présentes CGU. Si vous
                  n'acceptez pas ces conditions, veuillez ne pas utiliser le Site.
                </p>
                <p>
                  Nous nous réservons le droit de modifier ces CGU à tout moment. Les
                  modifications prennent effet dès leur publication sur le Site. Il
                  est de votre responsabilité de consulter régulièrement les CGU pour
                  prendre connaissance des éventuelles modifications.
                </p>
              </div>
            </div>

            {/* Accès au site */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                3. Accès au site
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le Site est accessible gratuitement à tout utilisateur disposant
                  d'un accès à Internet. Tous les coûts liés à l'accès au Site
                  (matériel, connexion Internet, etc.) sont à la charge de
                  l'utilisateur.
                </p>
                <p>
                  Nous nous efforçons de permettre l'accès au Site 24 heures sur 24
                  et 7 jours sur 7, mais ne pouvons garantir une disponibilité
                  ininterrompue. L'accès au Site peut être interrompu pour des
                  raisons de maintenance, de mise à jour ou en cas de force majeure.
                </p>
                <p>
                  Nous nous réservons le droit de modifier, suspendre ou interrompre
                  l'accès au Site, ou à une partie de celui-ci, à tout moment et sans
                  préavis.
                </p>
              </div>
            </div>

            {/* Utilisation du site */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                4. Utilisation du site
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Vous vous engagez à utiliser le Site conformément à la loi et aux
                  présentes CGU. Vous vous engagez notamment à ne pas :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Utiliser le Site à des fins illégales ou non autorisées
                  </li>
                  <li>
                    Transmettre ou diffuser des contenus illicites, diffamatoires,
                    injurieux, obscènes, offensants ou contraires aux bonnes mœurs
                  </li>
                  <li>
                    Violer les droits de propriété intellectuelle ou les droits de
                    tiers
                  </li>
                  <li>
                    Perturber le fonctionnement du Site ou des serveurs associés
                  </li>
                  <li>
                    Tenter d'accéder de manière non autorisée à une partie du Site ou
                    aux systèmes informatiques liés
                  </li>
                  <li>
                    Collecter ou stocker des données personnelles concernant d'autres
                    utilisateurs
                  </li>
                  <li>
                    Utiliser des robots, scripts ou autres moyens automatisés pour
                    accéder au Site
                  </li>
                </ul>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                5. Propriété intellectuelle
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  L'ensemble des éléments du Site (textes, images, vidéos, logos,
                  icônes, graphismes, mise en page, structure, etc.) sont protégés
                  par les lois relatives à la propriété intellectuelle et sont la
                  propriété exclusive de <strong className="text-foreground">Book n Glow</strong>{" "}
                  ou de ses partenaires.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication,
                  adaptation de tout ou partie des éléments du Site, quel que soit le
                  moyen ou le procédé utilisé, est interdite, sauf autorisation
                  écrite préalable de <strong className="text-foreground">Book n Glow</strong>.
                </p>
                <p>
                  Toute exploitation non autorisée du Site ou de son contenu engage la
                  responsabilité civile et/ou pénale de l'utilisateur.
                </p>
                <p>
                  Les marques, logos et signes distinctifs présents sur le Site sont
                  la propriété de <strong className="text-foreground">Book n Glow</strong> ou de
                  leurs propriétaires respectifs. Toute reproduction ou utilisation
                  non autorisée de ces signes distinctifs est interdite.
                </p>
              </div>
            </div>

            {/* Données utilisateur */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                6. Données personnelles
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  La collecte et le traitement de vos données personnelles sont
                  régis par notre{" "}
                  <a
                    href="/politique-de-confidentialite"
                    className="text-primary hover:underline"
                  >
                    Politique de confidentialité
                  </a>
                  , qui fait partie intégrante des présentes CGU.
                </p>
                <p>
                  En utilisant le Site, vous acceptez le traitement de vos données
                  personnelles conformément à cette politique.
                </p>
              </div>
            </div>

            {/* Liens hypertextes */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                7. Liens hypertextes
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le Site peut contenir des liens vers d'autres sites web. Nous ne
                  contrôlons pas ces sites externes et ne sommes pas responsables de
                  leur contenu, de leurs pratiques de confidentialité ou de leurs
                  politiques.
                </p>
                <p>
                  L'inclusion de liens vers des sites externes ne constitue pas une
                  approbation de ces sites. Vous accédez à ces sites à vos propres
                  risques.
                </p>
                <p>
                  Il est interdit de créer un lien hypertexte vers le Site sans
                  autorisation écrite préalable de <strong className="text-foreground">Book n Glow</strong>.
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                8. Limitation de responsabilité
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Book n Glow</strong> s'efforce
                  de fournir des informations exactes et à jour sur le Site.
                  Cependant, nous ne pouvons garantir l'exactitude, la complétude ou
                  l'actualité des informations diffusées.
                </p>
                <p>
                  Le Site est fourni "en l'état" et "selon disponibilité". Nous ne
                  garantissons pas que le Site sera ininterrompu, sécurisé ou exempt
                  d'erreurs.
                </p>
                <p>
                  <strong className="text-foreground">Book n Glow</strong> ne saurait
                  être tenu responsable :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Des dommages directs ou indirects résultant de l'utilisation ou de
                    l'impossibilité d'utiliser le Site
                  </li>
                  <li>
                    Des erreurs ou omissions dans le contenu du Site
                  </li>
                  <li>
                    Des interruptions, bugs, erreurs techniques ou problèmes de
                    sécurité
                  </li>
                  <li>
                    De l'utilisation faite du Site par les utilisateurs
                  </li>
                  <li>
                    Des contenus des sites tiers accessibles via des liens depuis le
                    Site
                  </li>
                </ul>
              </div>
            </div>

            {/* Disponibilité du service */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                9. Disponibilité du service
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Actuellement, <strong className="text-foreground">Book n Glow</strong> est en
                  phase de développement. Le Site permet de s'inscrire à une liste
                  d'attente pour être informé de la disponibilité du service.
                </p>
                <p>
                  L'ouverture du service sera communiquée aux personnes inscrites à
                  la liste d'attente. Aucune garantie n'est donnée quant à la date
                  d'ouverture effective du service.
                </p>
              </div>
            </div>

            {/* Force majeure */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                10. Force majeure
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Book n Glow</strong> ne saurait
                  être tenu responsable en cas d'inexécution ou de mauvaise
                  exécution de ses obligations résultant d'un cas de force majeure
                  tel que défini par la jurisprudence française.
                </p>
              </div>
            </div>

            {/* Modification des CGU */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                11. Modification des CGU
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Book n Glow</strong> se réserve
                  le droit de modifier les présentes CGU à tout moment. Les
                  modifications prennent effet dès leur publication sur le Site.
                </p>
                <p>
                  Il est de votre responsabilité de consulter régulièrement les CGU
                  pour prendre connaissance des éventuelles modifications. Votre
                  utilisation continue du Site après la publication des modifications
                  constitue votre acceptation des nouvelles CGU.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                12. Droit applicable et juridiction compétente
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Les présentes CGU sont régies par le droit français. En cas de
                  litige et à défaut d'accord amiable, le litige sera porté devant
                  les tribunaux français conformément aux règles de compétence en
                  vigueur.
                </p>
                <p>
                  Conformément à l'article L.612-1 du Code de la consommation, tout
                  consommateur a le droit de recourir gratuitement à un médiateur de
                  la consommation en vue de la résolution amiable d'un litige qui
                  l'oppose à un professionnel.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                13. Contact
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Pour toute question concernant les présentes CGU, vous pouvez nous
                  contacter :
                </p>
                <p>
                  <strong className="text-foreground">Email :</strong>{" "}
                  <a
                    href="mailto:contact@book-n-glow"
                    className="text-primary hover:underline"
                  >
                    contact@book-n-glow
                  </a>
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
