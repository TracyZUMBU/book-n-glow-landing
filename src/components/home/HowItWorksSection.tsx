import { Accent, Card, Section, SectionTitle, StepNumber } from "./ui";

const STEPS = [
  {
    title: "Télécharge et crée ta page",
    text: "Tes prestations, tes tarifs, tes photos et tes horaires. L'app te guide.",
  },
  {
    title: "Colle ton lien en bio",
    text: "Un seul lien, dans ta bio Insta (et TikTok). Tes clientes n'ont plus qu'à cliquer.",
  },
  {
    title: "Reçois tes réservations",
    text: "Une notification à chaque nouvelle réservation. Tu n'as plus qu'à venir travailler.",
  },
];

/** « Prête en 3 étapes » : de l'installation à la première réservation. */
export default function HowItWorksSection() {
  return (
    <Section className="pt-2 lg:pt-6">
      <SectionTitle className="lg:text-center">
        Prête en <Accent>3 étapes</Accent>.
      </SectionTitle>
      <ol className="m-0 mt-8 grid list-none gap-3 p-0 lg:mt-14 lg:grid-cols-3 lg:gap-6">
        {STEPS.map(({ title, text }, i) => (
          <li key={title}>
            <Card className="h-full">
              <StepNumber n={i + 1} />
              <h3 className="mb-1.5 mt-[18px] font-sans text-[21px] font-bold leading-[1.2] lg:mb-2 lg:mt-6 lg:text-[26px]">
                {title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.55] text-[#3d3d3d] lg:text-[17px]">{text}</p>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
