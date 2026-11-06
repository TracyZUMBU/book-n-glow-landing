import pagePublique from "@/assets/landing/site-00-page-publique.jpg";
import { Accent, Lead, PhoneFrame, SectionTitle, StepNumber } from "./ui";

const STEPS = [
  {
    title: "Elle choisit sa prestation et son créneau",
    text: "Avec tes options, tes photos et tes tarifs.",
  },
  {
    title: "Elle paie en ligne ou sur place",
    text: "Par carte (20 % ou totalité), en PayPal.Me, ou sur place.",
  },
  {
    title: "Elle reçoit ses rappels par e‑mail",
    text: "Confirmation, adresse 24 h avant, annulation, reçu de remboursement.",
  },
];

/** « Et côté cliente ? » : la réservation vue depuis le navigateur de la cliente. */
export default function CustomerSideSection() {
  return (
    <section className="px-5 py-[72px] lg:px-24 lg:py-28">
      {/* Mobile : titre, capture, étapes. Desktop : texte à gauche, capture à droite. */}
      <div className="mx-auto grid max-w-[1248px] [grid-template-areas:'head'_'visual'_'steps'] lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-x-24 lg:[grid-template-areas:'._visual'_'head_visual'_'steps_visual'_'._visual'] lg:[grid-template-rows:1fr_auto_auto_1fr]">
        <div className="[grid-area:head]">
          <SectionTitle>
            Et côté <Accent>cliente</Accent> ?
          </SectionTitle>
          <Lead>
            Rien à télécharger. Elle clique sur ton lien, et tout se passe dans son navigateur.
          </Lead>
        </div>

        <div className="relative my-9 flex h-[440px] justify-center overflow-hidden rounded-[32px] bg-[#f4f4f4] pt-7 [grid-area:visual] lg:my-0 lg:h-[640px] lg:self-center lg:rounded-[48px] lg:pt-12">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-20 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-primary lg:top-[150px] lg:h-[420px] lg:w-[420px]"
          />
          <PhoneFrame
            src={pagePublique}
            alt="Page de réservation vue par une cliente : photo, nom du studio, services proposés"
            className="h-fit w-[220px] flex-none lg:w-[300px]"
          />
        </div>

        <ol className="m-0 flex list-none flex-col gap-6 p-0 [grid-area:steps] lg:mt-10 lg:gap-7 lg:self-start">
          {STEPS.map(({ title, text }, i) => (
            <li key={title} className="flex gap-4 lg:gap-5">
              <StepNumber n={i + 1} className="lg:h-11 lg:w-11 lg:text-lg" />
              <div>
                <h3 className="mb-1 mt-0 font-sans text-lg font-semibold leading-[1.3] lg:text-[21px]">
                  {title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.55] text-[#3d3d3d] lg:text-[17px]">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
