import type { ReactNode } from "react";
import { Accent, ChatBubble, Lead, Section, SectionTitle } from "./ui";

const ROWS: { question: string; answer: ReactNode }[] = [
  {
    question: "T'as une dispo samedi ?",
    answer: (
      <>
        <b className="font-semibold">Tes clientes voient tes dispos</b> et réservent seules, 24 h/24.
      </>
    ),
  },
  {
    question: "C'est combien ?",
    answer: (
      <>
        <b className="font-semibold">Tes prestations, tes photos et tes tarifs</b> sont sur ta page.
      </>
    ),
  },
  {
    question: "Tu as encore de la place cette semaine ?",
    answer: (
      <>
        <b className="font-semibold">Ton agenda est à jour en temps réel.</b> Plus de dispos à
        republier en story.
      </>
    ),
  },
  {
    question: "Je t'envoie l'acompte quand ?",
    answer: (
      <>
        <b className="font-semibold">Si tu demandes un acompte, il est payé à la réservation</b> :
        carte (20 % ou totalité) ou PayPal.Me.
      </>
    ),
  },
  {
    question: "Je te confirme pour demain ?",
    answer: (
      <>
        <b className="font-semibold">Si tu actives la confirmation la veille</b>, ta cliente confirme
        toute seule. Sans réponse, le créneau est libéré.
      </>
    ),
  },
];

/** « Fini les DM » : chaque question de cliente et ce qui y répond. */
export default function DmSection() {
  return (
    <Section>
      <div className="lg:text-center">
        <SectionTitle>
          Fini les DM à répéter <Accent>toute la journée</Accent>.
        </SectionTitle>
        <Lead className="lg:mx-auto">
          Les mêmes questions, les mêmes relances. Book N' Glow y répond à ta place.
        </Lead>
      </div>
      <ul className="m-0 mt-9 list-none rounded-[28px] bg-[#f4f4f4] px-5 py-1.5 lg:mt-16 lg:rounded-[48px] lg:px-14 lg:py-4">
        {ROWS.map(({ question, answer }) => (
          <li
            key={question}
            className="flex flex-col gap-3 border-b border-[#dcdcdc] py-[22px] last:border-b-0 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:items-center lg:gap-12 lg:py-7"
          >
            <ChatBubble className="self-start lg:justify-self-start">« {question} »</ChatBubble>
            <p className="m-0 text-base leading-[1.5] lg:text-[19px]">{answer}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
