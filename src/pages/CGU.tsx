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
            Conditions Générales d'
            <span className="text-gradient">Utilisation</span>
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
                  Les présentes Conditions Générales d'Utilisation (ci-après
                  "CGU") ont pour objet de définir les modalités et conditions
                  d'utilisation du site web{" "}
                  <strong className="text-foreground">Book n Glow</strong>{" "}
                  (ci-après "le Site").
                </p>
                <p>
                  Le Site est édité par{" "}
                  <strong className="text-foreground">Book n Glow</strong>,
                  auto-entrepreneur, dont le responsable de publication est{" "}
                  <strong className="text-foreground">Tracy Garcia</strong>.
                </p>
                <p>
                  Toute utilisation du Site implique l'acceptation pleine et
                  entière des présentes CGU.
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
                  En accédant et en utilisant le Site, vous reconnaissez avoir
                  lu, compris et accepté d'être lié par les présentes CGU. Si
                  vous n'acceptez pas ces conditions, veuillez ne pas utiliser
                  le Site.
                </p>
                <p>
                  Nous nous réservons le droit de modifier ces CGU à tout
                  moment. Les modifications prennent effet dès leur publication
                  sur le Site. Il est de votre responsabilité de consulter
                  régulièrement les CGU pour prendre connaissance des
                  éventuelles modifications.
                </p>
              </div>
            </div>

            {/* Définitions */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                3. Définitions
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Aux fins des présentes CGU, les termes suivants ont la
                  signification qui leur est attribuée ci-dessous :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">"Site"</strong> :
                    désigne le site web accessible à l'adresse
                    www.book-n-glow.fr et toutes ses pages associées.
                  </li>
                  <li>
                    <strong className="text-foreground">"Service"</strong> :
                    désigne l'ensemble des services proposés par{" "}
                    <strong className="text-foreground">Book n Glow</strong> via
                    le Site, notamment la mise en relation entre Clients et
                    Prestataires.
                  </li>
                  <li>
                    <strong className="text-foreground">"Utilisateur"</strong> :
                    désigne toute personne physique ou morale accédant au Site,
                    qu'elle soit Client ou Prestataire.
                  </li>
                  <li>
                    <strong className="text-foreground">"Client"</strong> :
                    désigne toute personne physique utilisant le Site pour
                    rechercher et réserver des prestations auprès des
                    Prestataires.
                  </li>
                  <li>
                    <strong className="text-foreground">"Prestataire"</strong> :
                    désigne toute personne physique ou morale proposant des
                    prestations de services via le Site.
                  </li>
                  <li>
                    <strong className="text-foreground">"Prestation"</strong> :
                    désigne tout service proposé par un Prestataire et
                    réservable via le Site.
                  </li>
                  <li>
                    <strong className="text-foreground">"Compte"</strong> :
                    désigne l'espace personnel créé par l'Utilisateur lors de
                    son inscription sur le Site.
                  </li>
                  <li>
                    <strong className="text-foreground">"Contenu"</strong> :
                    désigne l'ensemble des informations, données, textes,
                    images, vidéos et autres éléments accessibles sur le Site.
                  </li>
                </ul>
              </div>
            </div>

            {/* Identification */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                4. Identification
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Pour accéder à certaines fonctionnalités du Site, notamment
                  pour réserver une Prestation ou proposer des services,
                  l'Utilisateur doit créer un Compte en suivant la procédure
                  d'inscription décrite à la section 9 des présentes CGU.
                </p>
                <p>
                  L'Utilisateur s'engage à fournir des informations exactes,
                  complètes et à jour lors de la création de son Compte et à les
                  maintenir à jour tout au long de son utilisation du Site.
                </p>
                <p>
                  L'Utilisateur est responsable de la confidentialité de ses
                  identifiants (adresse e-mail, nom d'utilisateur) et de son mot
                  de passe. Il s'engage à ne pas les divulguer à des tiers et à
                  informer immédiatement{" "}
                  <strong className="text-foreground">Book n Glow</strong> en
                  cas de perte, vol ou utilisation non autorisée de son Compte.
                </p>
                <p>
                  Toute utilisation du Site effectuée à partir du Compte de
                  l'Utilisateur est présumée avoir été effectuée par
                  l'Utilisateur lui-même. L'Utilisateur est responsable de
                  toutes les actions effectuées depuis son Compte.
                </p>
              </div>
            </div>

            {/* Accès au site */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                5. Accès au site
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le Site est accessible gratuitement à tout utilisateur
                  disposant d'un accès à Internet. Tous les coûts liés à l'accès
                  au Site (matériel, connexion Internet, etc.) sont à la charge
                  de l'utilisateur.
                </p>
                <p>
                  Nous nous efforçons de permettre l'accès au Site 24 heures sur
                  24 et 7 jours sur 7, mais ne pouvons garantir une
                  disponibilité ininterrompue. L'accès au Site peut être
                  interrompu pour des raisons de maintenance, de mise à jour ou
                  en cas de force majeure.
                </p>
                <p>
                  Nous nous réservons le droit de modifier, suspendre ou
                  interrompre l'accès au Site, ou à une partie de celui-ci, à
                  tout moment et sans préavis.
                </p>
              </div>
            </div>

            {/* Utilisation du site */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                6. Utilisation du site
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Vous vous engagez à utiliser le Site conformément à la loi et
                  aux présentes CGU. Vous vous engagez notamment à ne pas :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Utiliser le Site à des fins illégales ou non autorisées
                  </li>
                  <li>
                    Transmettre ou diffuser des contenus illicites,
                    diffamatoires, injurieux, obscènes, offensants ou contraires
                    aux bonnes mœurs
                  </li>
                  <li>
                    Violer les droits de propriété intellectuelle ou les droits
                    de tiers
                  </li>
                  <li>
                    Perturber le fonctionnement du Site ou des serveurs associés
                  </li>
                  <li>
                    Tenter d'accéder de manière non autorisée à une partie du
                    Site ou aux systèmes informatiques liés
                  </li>
                  <li>
                    Collecter ou stocker des données personnelles concernant
                    d'autres utilisateurs
                  </li>
                  <li>
                    Utiliser des robots, scripts ou autres moyens automatisés
                    pour accéder au Site
                  </li>
                </ul>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                7. Propriété intellectuelle
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  L'ensemble des éléments du Site (textes, images, vidéos,
                  logos, icônes, graphismes, mise en page, structure, etc.) sont
                  protégés par les lois relatives à la propriété intellectuelle
                  et sont la propriété exclusive de{" "}
                  <strong className="text-foreground">Book n Glow</strong> ou de
                  ses partenaires.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication,
                  adaptation de tout ou partie des éléments du Site, quel que
                  soit le moyen ou le procédé utilisé, est interdite, sauf
                  autorisation écrite préalable de{" "}
                  <strong className="text-foreground">Book n Glow</strong>.
                </p>
                <p>
                  Toute exploitation non autorisée du Site ou de son contenu
                  engage la responsabilité civile et/ou pénale de l'utilisateur.
                </p>
                <p>
                  Les marques, logos et signes distinctifs présents sur le Site
                  sont la propriété de{" "}
                  <strong className="text-foreground">Book n Glow</strong> ou de
                  leurs propriétaires respectifs. Toute reproduction ou
                  utilisation non autorisée de ces signes distinctifs est
                  interdite.
                </p>
              </div>
            </div>

            {/* Données utilisateur */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                8. Données personnelles
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
                  En utilisant le Site, vous acceptez le traitement de vos
                  données personnelles conformément à cette politique.
                </p>
              </div>
            </div>

            {/* Inscription */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                9. Inscription
              </h2>
              <div className="space-y-6 text-muted-foreground">
                {/* Obligation d'information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    9.1 Obligation d'information
                  </h3>
                  <p>
                    L'Utilisateur reconnaît avoir vérifié l'adéquation du
                    Service à ses besoins et avoir reçu toutes les informations
                    et conseils nécessaires pour s'inscrire en toute
                    connaissance de cause.
                  </p>
                  <p>
                    À des fins de transparence, d'amélioration de la confiance,
                    ou de prévention ou détection des fraudes,{" "}
                    <strong className="text-foreground">Book n Glow</strong> se
                    réserve le droit de procéder à toute vérification et de
                    demander à l'Utilisateur de lui fournir tout document utile
                    pour justifier les informations fournies lors de
                    l'inscription.
                  </p>
                </div>

                {/* Durée */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    9.2 Durée
                  </h3>
                  <p>
                    L'inscription au Service est valable pour une durée
                    indéterminée, l'Utilisateur pouvant mettre fin à
                    l'utilisation du Site à tout moment, en faisant une demande
                    par mail à{" "}
                    <a
                      href="mailto:contact@book-n-glow"
                      className="text-primary hover:underline"
                    >
                      contact@book-n-glow
                    </a>
                    . Pour le Prestataire ayant adhéré à un abonnement payant,
                    la fin de service prend effet à la fin de la période de
                    facturation pour le Prestataire. Il n'y a pas de
                    remboursement ou de crédit pour les mois ou années partiels.
                    Les Parties sont liées par les présentes à compter du jour
                    de leur acceptation par l'Utilisateur, lors de la création
                    de son compte.
                  </p>
                </div>

                {/* Inscription Client */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    9.3 Inscription Client
                  </h3>
                  <p>
                    Afin de pouvoir créer un compte, le Client doit avoir l'âge
                    de 15 ans. Il reconnaît s'inscrire en son nom et pour son
                    compte personnel.
                  </p>
                  <p>
                    Le Client doit fournir à{" "}
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    l'ensemble des informations demandées. Le client est seul
                    responsable de l'exactitude des informations fournies.
                  </p>
                  <p>
                    Lors de la création de compte, le Client doit renseigner les
                    informations suivantes : numéro de téléphone portable,
                    prénom, nom, adresse e-mail et mot de passe.
                  </p>
                  <p>
                    Lors de son inscription sur le Site, le Client doit indiquer
                    son nom d'utilisateur (pseudonyme), son adresse de courrier
                    électronique et son mot de passe, ce qui permet au Site
                    d'identifier le Client à chaque fois qu'il accède au Site.
                    Seul le nom d'utilisateur (pseudonyme) est visible pour les
                    autres Utilisateurs.
                  </p>
                  <p>
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    peut procéder à la demande de confirmation concernant votre
                    compte à des fins de sécurité. De telles confirmations
                    peuvent notamment inclure les démarches suivantes :
                    confirmer votre numéro de téléphone ; vous fournir un code
                    PIN à usage unique ; ou toutes autres démarches que{" "}
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    pourrait mettre en place. Toutes les données collectées
                    seront utilisées conformément à notre Politique de
                    Confidentialité qui fait partie intégrante de l'accord
                    conclu entre{" "}
                    <strong className="text-foreground">Book n Glow</strong> et
                    les Utilisateurs.
                  </p>
                </div>

                {/* Inscription Prestataire */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    9.4 Inscription Prestataire
                  </h3>
                  <p>
                    Afin de pouvoir créer un compte, le Prestataire doit avoir
                    la capacité de contracter (majeur, capable). Il reconnaît
                    s'inscrire en son nom et pour son compte professionnel.
                  </p>
                  <p>
                    L'inscription au Service est réalisée directement par le
                    Prestataire.
                  </p>
                  <p>
                    Lors de la création de compte, le Prestataire doit fournir
                    les informations nécessaires à son identification. Le compte
                    ne peut être utilisé que par le Prestataire inscrit. L'accès
                    au compte se fait par le biais d'identifiants et mots de
                    passe qui sont strictement personnels et confidentiels. Le
                    Prestataire s'engage à les garder secrets et à ne pas les
                    divulguer.
                  </p>
                  <p>
                    En cas de perte ou de vol de l'identifiant ou mot de passe,
                    le Prestataire doit en avertir{" "}
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    sans délai.
                  </p>
                  <p>
                    Le Prestataire certifie que les informations le concernant
                    sont exactes et s'engage à les maintenir à jour via son
                    compte.
                  </p>
                  <p>
                    Le Prestataire s'engage à utiliser personnellement les
                    Services et à ne permettre à aucun tiers de les utiliser à
                    sa place ou pour son compte.
                  </p>
                  <p>
                    Pour les Prestataires ayant souscrit à un abonnement payant,
                    le Prestataire autorise par avance sa banque à prélever son
                    compte bancaire du montant de l'abonnement correspondant à
                    la période de facturation.
                  </p>
                  <p>
                    Le Prestataire pourra bénéficier du mode de paiement en
                    ligne (PayPalMe) lorsqu'il aura souscrit à un abonnement
                    payant. Une fois l'abonnement payant activé, le Prestataire
                    peut décider ou non d'accepter les paiements en ligne via
                    PayPalMe. Les Prestataires n'ayant pas souscrit à un
                    abonnement payant peuvent prendre des réservations, mais ne
                    peuvent pas accepter les paiements en ligne via PayPalMe.
                  </p>
                </div>
              </div>
            </div>

            {/* Liens hypertextes */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                10. Liens hypertextes
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le Site peut contenir des liens vers d'autres sites web. Nous
                  ne contrôlons pas ces sites externes et ne sommes pas
                  responsables de leur contenu, de leurs pratiques de
                  confidentialité ou de leurs politiques.
                </p>
                <p>
                  L'inclusion de liens vers des sites externes ne constitue pas
                  une approbation de ces sites. Vous accédez à ces sites à vos
                  propres risques.
                </p>
                <p>
                  Il est interdit de créer un lien hypertexte vers le Site sans
                  autorisation écrite préalable de{" "}
                  <strong className="text-foreground">Book n Glow</strong>.
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                11. Limitation de responsabilité
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Book n Glow</strong>{" "}
                  s'efforce de fournir des informations exactes et à jour sur le
                  Site. Cependant, nous ne pouvons garantir l'exactitude, la
                  complétude ou l'actualité des informations diffusées.
                </p>
                <p>
                  Le Site est fourni "en l'état" et "selon disponibilité". Nous
                  ne garantissons pas que le Site sera ininterrompu, sécurisé ou
                  exempt d'erreurs.
                </p>
                <p>
                  <strong className="text-foreground">Book n Glow</strong> ne
                  saurait être tenu responsable :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Des dommages directs ou indirects résultant de l'utilisation
                    ou de l'impossibilité d'utiliser le Site
                  </li>
                  <li>Des erreurs ou omissions dans le contenu du Site</li>
                  <li>
                    Des interruptions, bugs, erreurs techniques ou problèmes de
                    sécurité
                  </li>
                  <li>De l'utilisation faite du Site par les utilisateurs</li>
                  <li>
                    Des contenus des sites tiers accessibles via des liens
                    depuis le Site
                  </li>
                </ul>
              </div>
            </div>

            {/* Limitation de responsabilité de la Plateforme */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                12. Limitation de responsabilité de la Plateforme
              </h2>
              <div className="space-y-6 text-muted-foreground">
                {/* Fonction d'intermédiation */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    Fonction d'intermédiation
                  </h3>
                  <p>
                    <strong className="text-foreground">Book N Glow</strong> est
                    une plateforme de mise en relation entre des prestataires de
                    services (fournisseurs) et des clients. La plateforme met
                    uniquement en relation les deux parties — ce sont ces
                    parties qui concluent un contrat de prestation entre elles.{" "}
                    <strong className="text-foreground">Book N Glow</strong>{" "}
                    n'intervient pas en tant que prestataire de service pour la
                    réalisation des prestations proposées.
                  </p>
                </div>

                {/* Litiges de paiement */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    Litiges de paiement
                  </h3>
                  <p>
                    <strong className="text-foreground">Book N Glow</strong>{" "}
                    n'est pas responsable des litiges de paiement entre clients
                    et prestataires. La plateforme ne garantit pas le paiement
                    des prestataires : toute réclamation liée au paiement doit
                    être adressée directement au prestataire concerné.
                  </p>
                </div>

                {/* Qualité des services */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    Qualité des services
                  </h3>
                  <p>
                    <strong className="text-foreground">Book N Glow</strong> ne
                    peut être tenu responsable :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      de la qualité des services fournis par les prestataires,
                    </li>
                    <li>
                      du non-respect par un prestataire de ses obligations
                      contractuelles vis-à-vis du client,
                    </li>
                    <li>
                      du comportement, des manquements ou des dégradations
                      causés par un prestataire pendant l'exécution des
                      prestations.
                    </li>
                  </ul>
                </div>

                {/* Comportement des clients */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    Comportement des clients
                  </h3>
                  <p>
                    De même,{" "}
                    <strong className="text-foreground">Book N Glow</strong>{" "}
                    décline toute responsabilité :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      en cas de dégradations commises par un client chez un
                      prestataire,
                    </li>
                    <li>
                      pour tout manquement contractuel ou faute d'un client
                      vis-à-vis d'un prestataire,
                    </li>
                    <li>
                      pour tout préjudice lié au comportement d'un client
                      (non-paiement, annulation, réclamation, etc.).
                    </li>
                  </ul>
                </div>

                {/* Obligation de moyens */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    Obligation de moyens
                  </h3>
                  <p>
                    <strong className="text-foreground">Book N Glow</strong>{" "}
                    s'engage à faire ses meilleurs efforts en tant
                    qu'intermédiaire, mais n'assume qu'une obligation de moyens,
                    et non de résultat, quant à la mise à disposition du service
                    de mise en relation, à la disponibilité de la plateforme, ou
                    à la vérification des prestataires.
                  </p>
                </div>

                {/* Clause d'indemnisation */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    Clause d'indemnisation
                  </h3>
                  <p>
                    Le client et le prestataire s'engagent à indemniser{" "}
                    <strong className="text-foreground">Book N Glow</strong> de
                    toute réclamation, condamnation ou frais (y compris
                    honoraires d'avocat) résultant d'un litige qui les
                    opposerait, tant que ce litige résulte de leur relation
                    contractuelle directe.
                  </p>
                </div>
              </div>
            </div>

            {/* Disponibilité du service */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                13. Disponibilité du service
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Book n Glow</strong> est
                  actuellement ouvert et accessible pour l'abonnement gratuit.
                  Les utilisateurs peuvent créer un compte et utiliser la
                  plateforme avec les fonctionnalités disponibles dans le cadre
                  de l'abonnement gratuit.
                </p>
                <p>
                  Concernant l'abonnement payant, l'accès s'ouvre par vagues
                  successives. Pour être informé de l'ouverture d'une nouvelle
                  vague et pouvoir souscrire à l'abonnement payant, il est
                  nécessaire de s'inscrire sur la liste d'attente via le Site.
                </p>
                <p>
                  L'ouverture de chaque vague pour l'abonnement payant sera
                  communiquée aux personnes inscrites à la liste d'attente.
                  Aucune garantie n'est donnée quant à la date d'ouverture
                  effective de chaque vague ou quant à la disponibilité des
                  places pour l'abonnement payant.
                </p>
              </div>
            </div>

            {/* Obligations de l'Utilisateur */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                14. Obligations de l'Utilisateur
              </h2>
              <div className="space-y-6 text-muted-foreground">
                {/* Utilisation du Service */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    14.1 Utilisation du Service
                  </h3>
                  <p>
                    Le Client s'engage à ne pas utiliser le Service à d'autres
                    fins que celles précisées au sein des présentes CGU, et en
                    particulier à ne pas l'utiliser à des fins professionnelles,
                    commerciales ou illicites.
                  </p>
                  <p>
                    Une fois le Prestataire sélectionné, le Client choisit une
                    Prestation, puis un créneau de réservation pour la
                    prestation sélectionnée.
                  </p>
                  <p>
                    En cas d'empêchement du Client de se présenter au
                    rendez-vous, il est possible d'annuler la réservation, dans
                    les conditions prévues par les Conditions Générales de
                    Prestation de Service du Prestataire.
                  </p>
                  <p>
                    L'Utilisateur est seul responsable de son utilisation des
                    Services et notamment des relations qu'il pourra nouer avec
                    les autres Utilisateurs et des informations qu'il leur
                    communique dans le cadre des Services. Il lui appartient
                    d'exercer la prudence et le discernement appropriés dans ces
                    relations et communications. L'Utilisateur s'engage en
                    outre, dans ses échanges avec les autres Utilisateurs, à
                    agir de bonne foi.
                  </p>
                </div>

                {/* Règlement de la prestation */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    14.2 Règlement de la prestation
                  </h3>
                  <p>
                    Le Service n'est qu'un moyen de mise en relation entre les
                    Utilisateurs. Ni{" "}
                    <strong className="text-foreground">Book n Glow</strong>, ni
                    ses sous-traitants n'interviennent dans la relation
                    contractuelle entre le Client et le Prestataire. Le prix de
                    la Prestation est donc fixé par le Prestataire. Le prix de
                    la Prestation doit être payé par le Client :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Soit au jour de la réalisation de la prestation,
                      directement chez le Prestataire ;
                    </li>
                    <li>
                      Soit via PayPalMe si ce mode de paiement est proposé par
                      le Prestataire.
                    </li>
                  </ul>
                  <p>
                    Les Clients sont informés qu'un droit de rétractation
                    s'applique en principe aux contrats de prestations de
                    services conclus à distance entre un professionnel et un
                    consommateur, ce droit étant à exercer dans les quatorze
                    (14) jours à compter de la conclusion du contrat. Ils sont
                    toutefois expressément informés et acceptent que les
                    Services leur soient fournis dès leur inscription et soient
                    ainsi pleinement exécutés avant la fin du délai de
                    rétractation visé ci-dessus. En conséquence, ils renoncent
                    expressément à leur droit de rétractation, qui ne pourra
                    donc pas être exercé, conformément à l'article L.121-21-8 du
                    Code de la consommation.
                  </p>
                  <p>
                    Toute autre condition d'annulation ou de modification de la
                    commande sera soumise aux Conditions Générales de Prestation
                    de Service du Prestataire.
                  </p>
                </div>

                {/* Respect des droits de propriété */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    14.3 Respect des droits de propriété de Book n Glow
                  </h3>
                  <p>
                    Sauf mention contraire, les éléments accessibles sur le Site
                    tels que les bases de données, les outils de gestion, les
                    textes et plus généralement l'ensemble des informations
                    mises à la disposition de l'Utilisateur sont la propriété
                    pleine, entière et exclusive de{" "}
                    <strong className="text-foreground">Book n Glow</strong>.
                  </p>
                  <p>L'Utilisateur s'interdit notamment :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      De copier ou de reproduire, décompiler, en tout ou partie
                      le Site par n'importe quel moyens et sous n'importe quelle
                      forme ;
                    </li>
                    <li>
                      D'utiliser le Site autrement que selon les stipulations
                      strictement interprétées des présentes CGU ;
                    </li>
                    <li>
                      De procéder à des extractions par transfert temporaire ou
                      permanent, ou d'utiliser par la mise à disposition au
                      public, la totalité ou une partie substantielle en termes
                      quantitatifs ou qualitatifs du Site et autres bases de
                      données visibles sur le Site, que ce soit à des fins
                      commerciales ou autres ;
                    </li>
                    <li>
                      Extraire ou d'utiliser de façon répétée et systématique
                      tout ou partie des informations visibles sur le Site,
                      lorsqu'une telle opération excède manifestement une
                      utilisation normale et à titre privé du service offert par{" "}
                      <strong className="text-foreground">Book n Glow</strong> ;
                    </li>
                    <li>
                      Exploiter, commercialiser ou distribuer tout élément
                      constitutif du Site, notamment les informations visibles
                      sur le Site et toute autre base de données ;
                    </li>
                    <li>
                      Utiliser des logiciels ou procédés manuels pour copier les
                      pages web de{" "}
                      <strong className="text-foreground">Book n Glow</strong>{" "}
                      ou pour enregistrer ou collecter les informations sur ces
                      pages sans le consentement exprès préalable et écrit de{" "}
                      <strong className="text-foreground">Book n Glow</strong> ;
                    </li>
                    <li>
                      Utiliser des dispositifs ou logiciels aux fins de
                      perturber ou tenter de perturber le bon fonctionnement du
                      Service ; ou mettre en œuvre des actions qui imposeraient
                      une charge disproportionnée sur ses infrastructures.
                    </li>
                  </ul>
                  <p>
                    L'Inscription de l'Utilisateur ne lui confère qu'un droit
                    d'usage privé personnel, non transmissible et non exclusif.
                  </p>
                </div>

                {/* Utilisations interdites */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    14.4 Utilisations interdites
                  </h3>
                  <p>
                    Il est strictement interdit d'utiliser les Services aux fins
                    suivantes :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      l'exercice d'activités illégales, frauduleuses ou portant
                      atteinte aux droits ou à la sécurité des tiers
                    </li>
                    <li>
                      l'atteinte à l'ordre public ou la violation des lois et
                      règlements en vigueur
                    </li>
                    <li>
                      l'intrusion dans le système informatique d'un tiers ou
                      toute activité de nature à nuire, contrôler, interférer,
                      ou intercepter tout ou partie du système informatique d'un
                      tiers, en violer l'intégrité ou la sécurité
                    </li>
                    <li>
                      l'envoi d'emails non sollicités et/ou de prospection ou
                      sollicitation commerciale
                    </li>
                    <li>
                      les manipulations destinées à améliorer le référencement
                      d'une application ou d'un site tiers
                    </li>
                    <li>
                      l'aide ou l'incitation, sous quelque forme et de quelque
                      manière que ce soit, à un ou plusieurs des actes et
                      activités décrits ci-dessus et plus généralement toute
                      pratique détournant les Services à des fins autres que
                      celles pour lesquelles ils ont été conçus
                    </li>
                  </ul>
                  <p>
                    Il est strictement interdit aux Utilisateurs de copier et/ou
                    de détourner à leurs fins ou à celles de tiers le concept,
                    les technologies ou tout autre élément de{" "}
                    <strong className="text-foreground">Book n Glow</strong>. Il
                    est à ce titre notamment interdit d'insérer sur un site
                    miroir une quelconque partie de{" "}
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    sans accord préalable écrit de{" "}
                    <strong className="text-foreground">Book n Glow</strong>, ou
                    d'utiliser n'importe quel meta tag ou code ou autre
                    dispositif contenant une quelconque référence à{" "}
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    dans le but de diriger une personne vers une autre
                    application ou un autre site internet, quelle qu'en soit la
                    raison.
                  </p>
                  <p>Sont également strictement interdits :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      tous comportements de nature à interrompre, suspendre,
                      ralentir ou empêcher la continuité des Services
                    </li>
                    <li>
                      toutes intrusions ou tentatives d'intrusions dans les
                      systèmes de{" "}
                      <strong className="text-foreground">Book n Glow</strong>
                    </li>
                    <li>
                      tous détournements des ressources système de{" "}
                      <strong className="text-foreground">Book n Glow</strong>{" "}
                      ou du Site
                    </li>
                    <li>
                      toutes actions de nature à imposer une charge
                      disproportionnée sur les infrastructures de ces derniers
                    </li>
                    <li>
                      toutes atteintes aux mesures de sécurité et
                      d'authentification
                    </li>
                    <li>
                      tous actes de nature à porter atteinte aux droits et
                      intérêts financiers, commerciaux ou moraux de{" "}
                      <strong className="text-foreground">Book n Glow</strong>{" "}
                      ou des usagers de son Site, et enfin plus généralement
                      tout manquement aux présentes conditions générales
                    </li>
                  </ul>
                  <p>
                    Il est strictement interdit de monnayer, vendre ou concéder
                    tout ou partie de l'accès aux Services ou à{" "}
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    ainsi qu'aux informations qui y sont hébergées et/ou
                    partagées.
                  </p>
                  <p>
                    <strong className="text-foreground">Book n Glow</strong> se
                    réserve expressément tous les droits sur le nom de domaine
                    www.book-n-glow.fr et domaines et sous-domaines liés, la
                    dénomination{" "}
                    <strong className="text-foreground">Book n Glow</strong>,
                    son logo, ses marques de service, noms commerciaux et/ou
                    marques de fabrique. Les autres marques de fabrique,
                    produits et dénominations de société mentionnés sur le Site
                    peuvent être des marques de leurs propriétaires ou
                    concédants respectifs et les droits sur ces marques sont
                    réservés à leurs propriétaires ou concédants respectifs.
                  </p>
                </div>
              </div>
            </div>

            {/* Résiliation */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                15. Résiliation
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le client ou le prestataire peut demander à{" "}
                  <strong className="text-foreground">Book n Glow</strong> de
                  supprimer son compte à tout moment. De même,{" "}
                  <strong className="text-foreground">Book n Glow</strong> peut
                  cesser de fournir le Service sans préavis ou décider de
                  suspendre le compte d'un utilisateur (client ou prestataire)
                  pour l'une des raisons suivantes, sans avoir à verser
                  d'indemnités ni de dommages et intérêts :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Violation des présentes Conditions Générales d'Utilisation
                  </li>
                  <li>
                    Comportement inapproprié ou contraire aux bonnes mœurs
                  </li>
                  <li>
                    Pour les clients : absences répétées aux rendez-vous
                    réservés (no-shows)
                  </li>
                  <li>
                    Toute autre raison légitime justifiant la suspension ou la
                    résiliation du compte
                  </li>
                </ul>
                <p>
                  En cas d'abonnement payant, la résiliation demandée par
                  l'utilisateur prendra effet à la date de fin de l'abonnement
                  mensuel en cours. Aucun remboursement ne sera effectué pour la
                  période d'abonnement déjà payée et en cours.
                </p>
                <p>
                  Le client ou le prestataire peut demander la suppression de
                  son compte en contactant{" "}
                  <strong className="text-foreground">Book n Glow</strong> à
                  l'adresse{" "}
                  <a
                    href="mailto:contact@book-n-glow"
                    className="text-primary hover:underline"
                  >
                    contact@book-n-glow
                  </a>
                  . Dans ce cas, ses données seront intégralement effacées dans
                  un délai de 1 mois, sans possibilité ultérieure de les
                  récupérer.
                </p>
              </div>
            </div>

            {/* Droits et obligations */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                16. Droits et obligations de Book n Glow
              </h2>
              <div className="space-y-6 text-muted-foreground">
                {/* Blocage et limitation d'accès */}
                <div className="space-y-4">
                  <p>
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    peut interdire en tout ou partie l'utilisation du Site (en
                    indiquant les conditions de limitation) ou mettre fin à la
                    possibilité que le Client et le Prestataire utilisent le
                    Site, notamment en supprimant le Contenu mis en ligne sur le
                    Site, en annulant le compte de l'Utilisateur et en empêchant
                    l'Utilisateur de se réinscrire sur le Site ou en empêchant
                    le visiteur de se rendre sur le Site, sous réserve que{" "}
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    envoie une notification officielle préalable à cet
                    Utilisateur ou Visiteur, s'il :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      enfreint ou manque à ses obligations découlant des
                      Conditions Générales, de la Politique de Confidentialité
                      ou d'autres règlements du Site ;
                    </li>
                    <li>
                      fournit des informations incorrectes, trompeuses et/ou
                      incomplètes selon les Conditions Générales au moment de
                      son inscription sur le Site ou de son utilisation du Site
                      ;
                    </li>
                    <li>
                      divulgue délibérément et intentionnellement des
                      informations erronées sur le Site, insulte d'autres
                      personnes ou agit de manière inappropriée ;
                    </li>
                    <li>
                      utilise l'identité d'autres Utilisateurs ou agit par
                      ailleurs de manière illégale ;
                    </li>
                    <li>
                      se connecte à partir de la même adresse IP ou du même
                      ordinateur que celle ou celui qui a été bloqué(e) en
                      raison de violations ; ou
                    </li>
                    <li>
                      a reçu au moins un avertissement de{" "}
                      <strong className="text-foreground">Book n Glow</strong>
                    </li>
                  </ul>
                </div>

                {/* Blocage partiel et total */}
                <div className="space-y-4">
                  <p>
                    Sous réserve des mêmes circonstances que celles décrites
                    ci-dessus,{" "}
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    peut, moyennant l'envoi d'une notification officielle à ce
                    sujet à l'Utilisateur concerné, limiter, en tout ou partie,
                    le Compte de l'Utilisateur ou l'accès du Visiteur. Le
                    blocage partiel signifie que l'Utilisateur ne sera pas en
                    mesure de réserver une Prestation chez un Prestataire et de
                    communiquer avec les autres Utilisateurs. Le blocage total
                    signifie que le compte de l'Utilisateur sera bloqué et/ou
                    annulé, et que la possibilité de se rendre sur le Site à
                    partir de l'ordinateur de l'Utilisateur sera bloquée.
                  </p>
                  <p>
                    L'Utilisateur doit savoir qu'après un blocage total, il
                    n'aura plus le droit de se réinscrire sur le Site.
                    L'annulation du compte de l'Utilisateur ne signifie pas que{" "}
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    supprimera toutes les informations pertinentes du compte,
                    notamment les données personnelles de l'Utilisateur, dans la
                    mesure où elles peuvent être stockées pour en savoir plus
                    sur les circonstances dans lesquelles{" "}
                    <strong className="text-foreground">Book n Glow</strong> a
                    pris la décision d'annuler le compte de l'Utilisateur et
                    pour transférer ces données aux institutions et autorités
                    chargées de faire appliquer les lois, conformément à la
                    Politique de Confidentialité.
                  </p>
                </div>

                {/* Suppression de contenu illicite */}
                <div className="space-y-4">
                  <p>
                    <strong className="text-foreground">Book n Glow</strong>,
                    après en avoir été dûment notifié conformément à l'article
                    ci-dessus, supprimera tout contenu illicite.
                  </p>
                  <p>
                    Si l'Utilisateur n'accepte pas ce droit de{" "}
                    <strong className="text-foreground">Book n Glow</strong>, il
                    doit s'abstenir d'utiliser le Site.{" "}
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    peut enquêter sur toute violation des Conditions Générales,
                    et en informer les institutions et autorités compétentes
                    chargées de faire appliquer les lois.
                  </p>
                </div>

                {/* Réorganisation et nouveautés */}
                <div className="space-y-4">
                  <p>
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    peut, à tout moment, réorganiser les espaces publicitaires
                    ou les autres informations sur les Prestations, sous réserve
                    que ces changements ne modifient pas le Contenu fourni par
                    l'Utilisateur, et ce, afin de rendre le Site plus facile
                    d'utilisation.{" "}
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    peut publier des nouveautés, en publiant la description, les
                    instructions ou les règles liées à celles-ci.
                  </p>
                  <p>
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    peut, à tout moment, publier sur le Site des offres à court
                    et long terme, des concours, des jeux ou des loteries
                    conformes au droit national pour proposer de nouveaux
                    Services et, par conséquent, les présentes Conditions
                    Générales ne seront pas modifiées. Les informations
                    relatives aux offres, concours, jeux ou loteries conformes
                    au droit national, seront fournies sur le Site. En cas
                    d'incohérences entre les Conditions Générales et les
                    conditions particulières publiées sur le Site (telles que
                    les règlements, instructions et descriptions portant sur les
                    nouveautés), ces dernières prévaudront.
                  </p>
                </div>

                {/* Cession et arrêt du service */}
                <div className="space-y-4">
                  <p>
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    peut mettre fin ou suspendre ou céder à des tiers
                    l'exploitation du Site, sous réserve d'en notifier les
                    Utilisateurs du Site, en respectant un préavis de trente
                    (30) jours.
                  </p>
                  <p>
                    Le non-respect par l'Utilisateur des points visés ci-dessus,
                    entraînera le droit pour{" "}
                    <strong className="text-foreground">Book n Glow</strong> de
                    fermer le compte de l'Utilisateur sans préavis, ni indemnité
                    ou dédommagement quelconque.
                  </p>
                </div>

                {/* Mesures en cas de manquement */}
                <div className="space-y-4">
                  <p>
                    En cas de manquement à l'une quelconque des dispositions des
                    présentes conditions générales ou plus généralement,
                    d'infraction aux lois et règlements en vigueur par un
                    Utilisateur,{" "}
                    <strong className="text-foreground">Book n Glow</strong> se
                    réserve le droit de prendre toute mesure appropriée et
                    notamment de :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      supprimer le compte de l'Utilisateur, auteur du manquement
                      ou de l'infraction, ou y ayant participé
                    </li>
                    <li>
                      publier sur{" "}
                      <strong className="text-foreground">Book n Glow</strong>{" "}
                      ou sur le Site tout message d'information que{" "}
                      <strong className="text-foreground">Book n Glow</strong>{" "}
                      jugera utile
                    </li>
                    <li>avertir toute autorité concernée</li>
                    <li>
                      engager toute action judiciaire, et notamment toute action
                      nécessaire au recouvrement des montants dus au titre de
                      l'utilisation des Services
                    </li>
                  </ul>
                  <p>
                    <strong className="text-foreground">Book n Glow</strong> se
                    réserve le droit d'engager des poursuites judiciaires contre
                    l'Utilisateur.
                  </p>
                </div>

                {/* Résiliation immédiate */}
                <div className="space-y-4">
                  <p>
                    En cas de manquement de l'Utilisateur à une obligation
                    essentielle découlant des présentes conditions générales,{" "}
                    <strong className="text-foreground">Book n Glow</strong> se
                    réserve le droit de résilier son accès à tout ou partie des
                    Services, avec effet immédiat, par lettre, fax ou email.
                  </p>
                  <p>
                    La résiliation prend effet de plein droit à la date d'envoi,
                    par <strong className="text-foreground">Book n Glow</strong>
                    , de l'écrit adressé à l'Utilisateur en application de la
                    présente clause. Elle entraîne automatiquement et sans mise
                    en demeure préalable la suppression du Compte de
                    l'Utilisateur, sans préjudice des autres conséquences
                    éventuellement induites en application des présentes
                    conditions générales.
                  </p>
                </div>

                {/* Plaintes des prestataires */}
                <div className="space-y-4">
                  <p>
                    Si plusieurs plaintes des Prestataires concernent le Client
                    (retard au rendez-vous, non-présentation...), celui-ci en
                    sera informé. Les Prestataires doivent prendre contact avec{" "}
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    pour signaler ces incidents.{" "}
                    <strong className="text-foreground">Book n Glow</strong> se
                    réserve la possibilité de limiter l'accès au Service pour
                    l'Utilisateur concerné.
                  </p>
                </div>

                {/* Transactions entre utilisateurs */}
                <div className="space-y-4">
                  <p>
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    n'est partie à aucune transaction entre les Utilisateurs. En
                    aucun cas{" "}
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    n'achète, ne vend ou n'échange des services présentés sur le
                    Site ni ne prétend le faire.
                  </p>
                  <p>
                    <strong className="text-foreground">Book n Glow</strong> se
                    réserve le droit de proposer tout autre Service utile, sous
                    une forme et selon les fonctionnalités et moyens techniques
                    que <strong className="text-foreground">Book n Glow</strong>{" "}
                    estimera le plus approprié.
                  </p>
                </div>
              </div>
            </div>

            {/* Force majeure */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                17. Force majeure
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Book n Glow</strong> ne
                  saurait être tenu responsable en cas d'inexécution ou de
                  mauvaise exécution de ses obligations résultant d'un cas de
                  force majeure tel que défini par la jurisprudence française.
                </p>
              </div>
            </div>

            {/* Modification des CGU */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                18. Modification des CGU
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Book n Glow</strong> se
                  réserve le droit de modifier les présentes CGU à tout moment.
                  Les modifications prennent effet dès leur publication sur le
                  Site.
                </p>
                <p>
                  Il est de votre responsabilité de consulter régulièrement les
                  CGU pour prendre connaissance des éventuelles modifications.
                  Votre utilisation continue du Site après la publication des
                  modifications constitue votre acceptation des nouvelles CGU.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                19. Droit applicable et juridiction compétente
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Les présentes CGU sont régies par le droit français. En cas de
                  litige et à défaut d'accord amiable, le litige sera porté
                  devant les tribunaux français conformément aux règles de
                  compétence en vigueur.
                </p>
                <p>
                  Conformément à l'article L.612-1 du Code de la consommation,
                  tout consommateur a le droit de recourir gratuitement à un
                  médiateur de la consommation en vue de la résolution amiable
                  d'un litige qui l'oppose à un professionnel.
                </p>
              </div>
            </div>

            {/* Paiements par carte bancaire via Stripe */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                20. Paiements par carte bancaire via Stripe
              </h2>
              <div className="space-y-6 text-muted-foreground">
                {/* Objet */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    20.1 Objet
                  </h3>
                  <p>
                    La présente section a pour objet de définir les conditions
                    applicables aux paiements par carte bancaire effectués via
                    la plateforme{" "}
                    <strong className="text-foreground">Book n Glow</strong>,
                    utilisant la solution de paiement sécurisée Stripe.
                  </p>
                  <p>
                    <strong className="text-foreground">Book n Glow</strong>{" "}
                    agit en qualité d'intermédiaire technique de paiement entre
                    le Client et le Prestataire.
                  </p>
                </div>

                {/* Rôle de Book n Glow */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    20.2 Rôle de Book n Glow
                  </h3>
                  <p>
                    <strong className="text-foreground">Book n Glow</strong> :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      met à disposition une infrastructure de paiement
                      sécurisée,
                    </li>
                    <li>
                      collecte les paiements pour le compte des Prestataires via
                      Stripe,
                    </li>
                    <li>
                      organise le transfert des fonds vers les Prestataires
                      selon les règles définies ci-après,
                    </li>
                    <li>ne fournit aucune prestation de service esthétique.</li>
                  </ul>
                  <p>
                    Le contrat de prestation est conclu directement entre le
                    Client et le Prestataire.
                  </p>
                </div>

                {/* Paiement par carte bancaire */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    20.3 Paiement par carte bancaire
                  </h3>
                  <p>
                    <strong className="text-foreground">
                      20.3.1 Modalités de paiement
                    </strong>
                  </p>
                  <p>
                    Le Client peut régler tout ou partie de sa réservation par
                    carte bancaire directement depuis la plateforme{" "}
                    <strong className="text-foreground">Book n Glow</strong>.
                  </p>
                  <p>
                    Les paiements sont traités par Stripe, prestataire de
                    services de paiement certifié PCI-DSS.
                  </p>
                  <p>
                    À aucun moment{" "}
                    <strong className="text-foreground">Book n Glow</strong> n'a
                    accès aux données bancaires du Client.
                  </p>
                  <p className="mt-4">
                    <strong className="text-foreground">
                      20.3.2 Acompte et paiement total
                    </strong>
                  </p>
                  <p>Selon les paramètres définis par le Prestataire :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>un acompte peut être exigé lors de la réservation,</li>
                    <li>ou le montant total peut être payé immédiatement.</li>
                  </ul>
                  <p>
                    Le montant dû est clairement indiqué avant validation du
                    paiement.
                  </p>
                </div>

                {/* Conservation et transfert des fonds */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    20.4 Conservation et transfert des fonds
                  </h3>
                  <p>
                    <strong className="text-foreground">
                      20.4.1 Conservation temporaire
                    </strong>
                  </p>
                  <p>
                    Les fonds payés par le Client sont conservés temporairement
                    par la plateforme via Stripe.
                  </p>
                  <p>
                    <strong className="text-foreground">Book n Glow</strong> ne
                    procède à aucun transfert immédiat vers le Prestataire.
                  </p>
                  <p className="mt-4">
                    <strong className="text-foreground">
                      20.4.2 Transfert au Prestataire
                    </strong>
                  </p>
                  <p>
                    Sauf cas exceptionnel (annulation, litige, remboursement),
                    les fonds sont transférés automatiquement au Prestataire 24
                    heures après la date et l'heure du rendez-vous.
                  </p>
                  <p>Ce délai permet :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>la gestion des annulations,</li>
                    <li>la résolution d'éventuels litiges,</li>
                    <li>la sécurisation des paiements.</li>
                  </ul>
                </div>

                {/* Annulations et remboursements */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    20.5 Annulations et remboursements
                  </h3>
                  <p>
                    <strong className="text-foreground">
                      20.5.1 Annulation par le Client
                    </strong>
                  </p>
                  <p>
                    Le Client peut annuler sa réservation uniquement avant la
                    date limite d'annulation indiquée lors de la réservation.
                  </p>
                  <p>Si l'annulation intervient dans ce délai :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      le paiement effectué est remboursé automatiquement
                      (totalement ou selon les conditions du Prestataire).
                    </li>
                  </ul>
                  <p>
                    Toute annulation hors délai ne donne lieu à aucun
                    remboursement, sauf décision exceptionnelle du Prestataire
                    ou de{" "}
                    <strong className="text-foreground">Book n Glow</strong>.
                  </p>
                  <p className="mt-4">
                    <strong className="text-foreground">
                      20.5.2 Annulation par le Prestataire
                    </strong>
                  </p>
                  <p>Si le Prestataire annule la réservation :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      le Client est intégralement remboursé, quel que soit le
                      moment de l'annulation.
                    </li>
                  </ul>
                  <p className="mt-4">
                    <strong className="text-foreground">
                      20.5.3 Remboursements après réalisation du rendez-vous
                    </strong>
                  </p>
                  <p>Après la date du rendez-vous :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>aucun remboursement n'est automatique,</li>
                    <li>
                      un remboursement partiel ou total peut être accordé à
                      titre exceptionnel, à l'initiative du Prestataire ou de{" "}
                      <strong className="text-foreground">Book n Glow</strong>.
                    </li>
                  </ul>
                  <p>
                    Les remboursements sont toujours traités via la plateforme{" "}
                    <strong className="text-foreground">Book n Glow</strong>.
                  </p>
                </div>

                {/* Modalités de remboursement */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    20.6 Modalités de remboursement
                  </h3>
                  <p>Les remboursements sont effectués :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>exclusivement via Stripe,</li>
                    <li>
                      sur le moyen de paiement utilisé lors de la réservation,
                    </li>
                    <li>
                      dans un délai dépendant des délais bancaires (généralement
                      5 à 10 jours ouvrés).
                    </li>
                  </ul>
                  <p>
                    En cas de remboursement après transfert des fonds au
                    Prestataire,{" "}
                    <strong className="text-foreground">Book n Glow</strong> se
                    réserve le droit d'effectuer une contre-opération financière
                    auprès du Prestataire via Stripe.
                  </p>
                </div>

                {/* Responsabilité */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    20.7 Responsabilité
                  </h3>
                  <p>
                    <strong className="text-foreground">Book n Glow</strong> ne
                    saurait être tenue responsable :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      de l'inexécution ou de la mauvaise exécution de la
                      prestation réalisée par le Prestataire,
                    </li>
                    <li>d'un litige lié à la qualité de la prestation,</li>
                    <li>
                      d'un refus de remboursement hors conditions prévues.
                    </li>
                  </ul>
                  <p>
                    Toute réclamation doit être adressée en priorité au
                    Prestataire concerné.
                  </p>
                </div>

                {/* Sécurité et conformité */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    20.8 Sécurité et conformité
                  </h3>
                  <p>
                    Les paiements sont traités par Stripe conformément aux
                    normes de sécurité en vigueur.
                  </p>
                  <p>
                    <strong className="text-foreground">Book n Glow</strong> se
                    conforme aux obligations réglementaires applicables en
                    matière de lutte contre la fraude et de protection des
                    consommateurs.
                  </p>
                </div>

                {/* Acceptation */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    20.9 Acceptation
                  </h3>
                  <p>
                    Le paiement par carte bancaire implique l'acceptation pleine
                    et entière :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>des présentes conditions,</li>
                    <li>
                      des conditions générales de{" "}
                      <strong className="text-foreground">Book n Glow</strong>,
                    </li>
                    <li>des conditions d'utilisation de Stripe.</li>
                  </ul>
                </div>

                {/* Modification */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    20.10 Modification
                  </h3>
                  <p>
                    <strong className="text-foreground">Book n Glow</strong> se
                    réserve le droit de modifier les présentes conditions à tout
                    moment.
                  </p>
                </div>
              </div>
            </div>

            {/* Programme de fidélité */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                21. Programme de carte de fidélité – Book n Glow
              </h2>
              <div className="space-y-6 text-muted-foreground">
                {/* Objet */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    21.1 Objet
                  </h3>
                  <p>
                    Les présentes conditions définissent les règles applicables
                    au programme de carte de fidélité proposé sur la plateforme
                    Book n Glow (ci-après la « Plateforme »).
                  </p>
                  <p>
                    Ce programme permet aux prestataires proposant des services
                    via la Plateforme (ci-après les « Prestataires ») d'offrir à
                    leurs clients (ci-après les « Clients ») une récompense
                    après un nombre déterminé de prestations effectuées.
                  </p>
                  <p>
                    Le programme de carte de fidélité est facultatif,
                    paramétrable par chaque Prestataire, et indépendant de Book
                    n Glow.
                  </p>
                </div>

                {/* Activation et paramétrage du programme */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    21.2 Activation et paramétrage du programme
                  </h3>
                  <p className="font-semibold text-foreground">
                    21.2.1 Activation facultative
                  </p>
                  <p>Chaque Prestataire peut :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      activer ou désactiver un programme de carte de fidélité à
                      tout moment depuis son espace personnel,
                    </li>
                    <li>
                      choisir librement de ne pas proposer de programme de
                      fidélité.
                    </li>
                  </ul>
                  <p className="mt-4 font-semibold text-foreground">
                    21.2.2 Paramétrage par le Prestataire
                  </p>
                  <p>Lors de l'activation, le Prestataire définit :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      le nombre de prestations terminées nécessaires pour
                      débloquer une récompense,
                    </li>
                    <li>le type de récompense proposé :</li>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>réduction fixe (montant en euros),</li>
                      <li>réduction en pourcentage,</li>
                      <li>produit offert,</li>
                      <li>
                        prestation offerte (avec sélection des prestations
                        éligibles).
                      </li>
                    </ul>
                  </ul>
                  <p>
                    Le nombre de prestations requis est défini par le
                    Prestataire et n'est pas imposé par Book n Glow.
                  </p>
                  <p className="mt-4 font-semibold text-foreground">
                    21.2.3 Modification du programme
                  </p>
                  <p>
                    Le Prestataire peut modifier les paramètres de son programme
                    à tout moment. Les nouvelles règles s'appliquent
                    immédiatement aux Clients, y compris à ceux ayant déjà
                    commencé une carte de fidélité.
                  </p>
                </div>

                {/* Fonctionnement de la carte de fidélité */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    21.3 Fonctionnement de la carte de fidélité
                  </h3>
                  <p className="font-semibold text-foreground">
                    21.3.1 Attribution des prestations
                  </p>
                  <p>Une prestation est comptabilisée uniquement lorsque :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>la prestation est terminée,</li>
                    <li>la réservation n'est pas annulée.</li>
                  </ul>
                  <p>
                    Chaque prestation terminée valide une unité sur la carte de
                    fidélité.
                  </p>
                  <p className="mt-4 font-semibold text-foreground">
                    21.3.2 Annulation de prestation
                  </p>
                  <p>
                    Une prestation annulée ne donne droit à aucune unité de
                    fidélité.
                  </p>
                  <p>
                    Si une prestation est annulée après avoir été comptabilisée,
                    l'unité correspondante est retirée.
                  </p>
                </div>

                {/* Déclenchement et attribution de la récompense */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    21.4 Déclenchement et attribution de la récompense
                  </h3>
                  <p className="font-semibold text-foreground">
                    21.4.1 Déclenchement automatique
                  </p>
                  <p>Lorsque le nombre de prestations requis est atteint :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>la récompense est créée automatiquement,</li>
                    <li>
                      le compteur de la carte de fidélité est réinitialisé à
                      zéro.
                    </li>
                  </ul>
                  <p className="mt-4 font-semibold text-foreground">
                    21.4.2 Unicité
                  </p>
                  <p>
                    Une seule récompense est attribuée par cycle de carte de
                    fidélité.
                  </p>
                  <p>Il n'existe pas de paliers intermédiaires.</p>
                </div>

                {/* Utilisation de la récompense */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    21.5 Utilisation de la récompense
                  </h3>
                  <p className="font-semibold text-foreground">
                    21.5.1 Conditions d'utilisation
                  </p>
                  <p>
                    La récompense peut être utilisée par le Client lors d'une
                    réservation ultérieure.
                  </p>
                  <p>
                    La récompense est cumulable avec les promotions
                    éventuellement proposées par le Prestataire.
                  </p>
                  <p className="mt-4 font-semibold text-foreground">
                    21.5.2 Durée de validité
                  </p>
                  <p>
                    Chaque récompense est valable six (6) mois à compter de sa
                    date de création.
                  </p>
                  <p>
                    La durée de validité est fixe et ne peut pas être prolongée.
                  </p>
                </div>

                {/* Annulation après utilisation d'une récompense */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    21.6 Annulation après utilisation d'une récompense
                  </h3>
                  <p className="font-semibold text-foreground">
                    21.6.1 Annulation de la réservation
                  </p>
                  <p>
                    Si une réservation payée à l'aide d'une récompense est
                    annulée :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      la récompense est restaurée et redevient disponible,
                    </li>
                    <li>la date de validité initiale ne change pas.</li>
                  </ul>
                  <p className="mt-4 font-semibold text-foreground">
                    21.6.2 Récompense expirée
                  </p>
                  <p>
                    Si la récompense était expirée au moment de l'annulation :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>elle reste expirée,</li>
                    <li>aucune restauration n'est possible.</li>
                  </ul>
                </div>

                {/* Suivi et historique */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    21.7 Suivi et historique
                  </h3>
                  <p>
                    Toutes les actions liées à la carte de fidélité
                    (attribution, retrait, déclenchement de récompense,
                    utilisation, annulation) sont enregistrées à des fins de
                    traçabilité.
                  </p>
                  <p>Le Client peut consulter :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>l'état de sa carte de fidélité,</li>
                    <li>ses récompenses disponibles, utilisées ou expirées.</li>
                  </ul>
                </div>

                {/* Responsabilité */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    21.8 Responsabilité
                  </h3>
                  <p className="font-semibold text-foreground">
                    21.8.1 Responsabilité du Prestataire
                  </p>
                  <p>Le Prestataire est seul responsable :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>du contenu de son programme de fidélité,</li>
                    <li>des récompenses proposées,</li>
                    <li>
                      de l'exécution des prestations ou de la remise des
                      produits offerts.
                    </li>
                  </ul>
                  <p className="mt-4 font-semibold text-foreground">
                    21.8.2 Rôle de Book n Glow
                  </p>
                  <p>
                    Book n Glow agit exclusivement en tant que fournisseur de
                    solution technique permettant la gestion du programme de
                    fidélité.
                  </p>
                  <p>Book n Glow ne saurait être tenu responsable :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      de la modification ou suppression d'un programme par un
                      Prestataire,
                    </li>
                    <li>du refus d'un Prestataire d'honorer une récompense,</li>
                    <li>
                      de tout litige entre un Prestataire et un Client relatif
                      au programme de fidélité.
                    </li>
                  </ul>
                </div>

                {/* Modification ou suppression du programme */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    21.9 Modification ou suppression du programme
                  </h3>
                  <p>
                    Le Prestataire peut désactiver son programme de fidélité à
                    tout moment.
                  </p>
                  <p>En cas de désactivation :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      les récompenses déjà attribuées restent valables jusqu'à
                      leur date d'expiration,
                    </li>
                    <li>aucune nouvelle unité de fidélité n'est attribuée.</li>
                  </ul>
                  <p>En cas de suppression :</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      les unités gagnés sont perdus. Si le prestataire crée à
                      nouveau la carte de fidélité, les unités seront remis à
                      zéro.
                    </li>
                  </ul>
                </div>

                {/* Acceptation */}
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    21.10 Acceptation
                  </h3>
                  <p>
                    L'utilisation de la carte de fidélité implique l'acceptation
                    pleine et entière des présentes Conditions Générales par le
                    Prestataire et le Client.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                22. Contact
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Pour toute question concernant les présentes CGU, vous pouvez
                  nous contacter :
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
