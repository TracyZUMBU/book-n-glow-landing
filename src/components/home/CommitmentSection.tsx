import confirmation from "@/assets/landing/app-09-confirmation-presence.jpg";
import type { ReactNode } from "react";
import { Accent, Lead, PhoneFrame, Pill, SectionTitle, StepNumber } from "./ui";

const OPTIONS = [
  "Acompte par carte : 20 % ou totalité",
  "Acompte PayPal.Me",
  "Paiement sur place",
  "Demande de confirmation la veille",
];

const STEPS: { title: string; text: string; extra?: ReactNode }[] = [
  {
    title: "Elle réserve depuis ta bio Insta",
    text: "Elle choisit sa prestation et son créneau, sans t'écrire.",
  },
  {
    title: "Elle peut annuler, dans ton délai",
    text: "C'est toi qui fixes jusqu'à quand.",
  },
  {
    title: "À toi de choisir tes options",
    text: "Tu actives ce que tu veux. Avec la confirmation la veille, un créneau non confirmé est libéré.",
    extra: (
      <div className="mt-3 flex flex-wrap gap-2 lg:mt-3.5">
        {OPTIONS.map((o) => (
          <Pill key={o}>{o}</Pill>
        ))}
      </div>
    ),
  },
  {
    title: "Si elle ne vient pas, un tap",
    text: "Tu signales l'absence en un tap et tu gardes l'acompte.",
  },
];

/** « Ta cliente s'engage » : acompte, annulation, confirmation la veille, absence. */
export default function CommitmentSection() {
  return (
    <section id="engagement" className="px-5 py-[72px] lg:px-24 lg:py-28">
      {/* Mobile : titre, capture, étapes. Desktop : capture à gauche, le reste à droite. */}
      <div className="mx-auto grid max-w-[1248px] [grid-template-areas:'head'_'visual'_'steps'] lg:grid-cols-[520px_minmax(0,1fr)] lg:gap-x-24 lg:[grid-template-areas:'visual_.'_'visual_head'_'visual_steps'_'visual_.'] lg:[grid-template-rows:1fr_auto_auto_1fr]">
        <div className="[grid-area:head]">
          <SectionTitle>
            Ta cliente <Accent>s'engage</Accent> avant de venir.
          </SectionTitle>
          <Lead>
            Acompte, délai d'annulation, confirmation la veille : tu actives ce que tu veux, une
            seule fois.
          </Lead>
        </div>

        <div className="relative my-9 flex flex-col items-center overflow-hidden rounded-[32px] bg-[#f4f4f4] pt-7 [grid-area:visual] lg:my-0 lg:self-center lg:rounded-[48px] lg:pt-12">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[70px] h-80 w-80 -translate-x-1/2 rounded-full bg-primary lg:top-[110px] lg:h-[420px] lg:w-[420px]"
          />
          <PhoneFrame
            src={confirmation}
            alt="Réglages de l'app : la cliente doit confirmer sa réservation la veille à 20h00, sinon le créneau est libéré"
            className="w-[210px] lg:w-[290px]"
          />
          <p className="relative mx-0 mb-5 mt-4 px-4 text-center text-[13px] leading-[1.4] text-[#3d3d3d] lg:mb-7 lg:mt-5 lg:text-sm">
            Tout se règle une fois, dans « Politique de réservation ».
          </p>
        </div>

        <ol className="m-0 list-none p-0 [grid-area:steps] lg:mt-11 lg:self-start">
          {STEPS.map(({ title, text, extra }, i) => {
            const last = i === STEPS.length - 1;
            return (
              <li key={title} className="flex gap-4 lg:gap-6">
                <div className="flex flex-col items-center">
                  <StepNumber n={i + 1} />
                  {!last && (
                    <div aria-hidden="true" className="my-1.5 w-0.5 flex-1 bg-[#d8d8d8] lg:my-2" />
                  )}
                </div>
                <div className={last ? undefined : "pb-7 lg:pb-[30px]"}>
                  <h3 className="mb-1.5 mt-[7px] font-sans text-lg font-semibold leading-[1.25] lg:mt-2.5 lg:text-[22px]">
                    {title}
                  </h3>
                  <p className="m-0 text-[15px] leading-[1.55] text-[#3d3d3d] lg:text-[17px]">{text}</p>
                  {extra}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
