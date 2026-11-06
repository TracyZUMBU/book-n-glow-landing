import accueil from "@/assets/landing/app-01-accueil.jpg";
import agenda from "@/assets/landing/app-03-agenda.jpg";
import detailRdv from "@/assets/landing/app-05-detail-rdv.jpg";
import messagerie from "@/assets/landing/app-06-messagerie.jpg";
import { Accent, Lead, PhoneFrame, Pill, Section, SectionTitle } from "./ui";

// `short` : version mobile du texte, quand celle du desktop est trop longue.
const FEATURES: { title: string; text: string; short?: string; src: string; alt: string }[] = [
  {
    title: "Ton agenda",
    text: "En liste ou en agenda. Tu peux aussi créer un rendez-vous à la main.",
    short: "En liste ou en agenda, avec création à la main.",
    src: agenda,
    alt: "Agenda de l'app : rendez-vous en vue 3 jours",
  },
  {
    title: "Tes clientes",
    text: "Un fichier clientes et l'historique de chaque rendez-vous.",
    src: detailRdv,
    alt: "Fiche d'un rendez-vous : coordonnées de la cliente, prestation et paiement",
  },
  {
    title: "Ta messagerie",
    text: "Tu discutes avec tes clientes, au même endroit que leurs rendez-vous.",
    short: "Tu discutes avec tes clientes, au même endroit.",
    src: messagerie,
    alt: "Messagerie de l'app : une conversation avec une cliente",
  },
  {
    title: "Ton chiffre d'affaires",
    text: "Ton mois d'un coup d'œil : encaissé et prévu.",
    src: accueil,
    alt: "Accueil de l'app : chiffre d'affaires du mois",
  },
];

const MORE = [
  "Avis clients vérifiés",
  "Notifications push",
  "Prestations avec options et photos",
  "Promotions",
];

/** « Tout ton salon dans ton téléphone » : les écrans clés de l'app. */
export default function FeaturesSection() {
  return (
    <Section id="fonctionnalites" className="scroll-mt-4 bg-[#f4f4f4]">
      <div className="lg:text-center">
        <SectionTitle>
          Tout ton salon <Accent>dans ton téléphone</Accent>.
        </SectionTitle>
        <Lead className="lg:mx-auto">
          Agenda, fichier clientes, messagerie, avis vérifiés, chiffre d'affaires.
        </Lead>
      </div>

      <ul className="m-0 mt-10 grid list-none grid-cols-2 gap-x-3.5 gap-y-9 p-0 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
        {FEATURES.map(({ title, text, short, src, alt }) => (
          <li key={title} className="flex flex-col items-center text-center">
            <PhoneFrame src={src} alt={alt} className="w-full max-w-[156px] lg:max-w-[240px]" />
            <h3 className="mb-1 mt-[18px] font-sans text-[17px] font-bold lg:mb-1.5 lg:mt-7 lg:text-[22px]">
              {title}
            </h3>
            <p className="m-0 text-sm leading-[1.45] text-[#3d3d3d] lg:max-w-[24ch] lg:text-base lg:leading-normal">
              {short ? (
                <>
                  <span className="lg:hidden">{short}</span>
                  <span className="hidden lg:inline">{text}</span>
                </>
              ) : (
                text
              )}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap gap-2.5 lg:mt-14 lg:justify-center lg:gap-3">
        {MORE.map((m) => (
          <Pill key={m} className="bg-white px-4 py-[9px] lg:px-5 lg:py-2.5 lg:text-base">
            {m}
          </Pill>
        ))}
      </div>
    </Section>
  );
}
