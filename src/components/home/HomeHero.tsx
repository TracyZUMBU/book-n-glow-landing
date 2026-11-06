import accueil from "@/assets/landing/app-01-accueil.jpg";
import agenda from "@/assets/landing/app-03-agenda.jpg";
import messagerie from "@/assets/landing/app-06-messagerie.jpg";
import { Accent, StoresRating, ChatBubble, PhoneFrame, StoreBadges } from "./ui";

const LinkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#161616"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="flex-none lg:h-[18px] lg:w-[18px]"
  >
    <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
    <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
  </svg>
);

const ALT_AGENDA = "Agenda de l'app Book N' Glow : les rendez-vous sur trois jours";
const ALT_MESSAGERIE = "Messagerie de l'app Book N' Glow : un échange avec une cliente";
const ALT_ACCUEIL =
  "Accueil de l'app Book N' Glow : prochain rendez-vous confirmé et chiffre d'affaires du mois";

/** Les DM en haut, trois écrans de l'app sur un disque rose. */
const HeroVisual = () => (
  <>
    {/* Mobile et tablette */}
    <div className="relative mx-3 mt-9 h-[560px] overflow-hidden rounded-t-[32px] bg-[#f4f4f4] px-4 pt-6 sm:mx-auto sm:max-w-[560px] xl:hidden">
      <div aria-hidden="true" className="flex flex-col gap-2">
        <ChatBubble className="max-w-[85%] self-start">T'as une dispo samedi ?</ChatBubble>
        <ChatBubble className="max-w-[85%] self-start">C'est combien ?</ChatBubble>
        <ChatBubble from="out" className="max-w-[85%] self-end">
          Tout est sur mon lien en bio.
        </ChatBubble>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[250px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary"
      />
      <PhoneFrame eager src={agenda} alt={ALT_AGENDA} className="absolute -left-3.5 top-[262px] w-[150px] -rotate-[8deg]" />
      <PhoneFrame eager src={messagerie} alt={ALT_MESSAGERIE} className="absolute -right-3.5 top-[262px] w-[150px] rotate-[8deg]" />
      <PhoneFrame eager src={accueil} alt={ALT_ACCUEIL} className="absolute left-1/2 top-[206px] w-[190px] -translate-x-1/2" />
    </div>

    {/* Desktop */}
    <div className="relative hidden h-[760px] w-[640px] flex-none overflow-hidden rounded-[48px] bg-[#f4f4f4] xl:block">
      <div aria-hidden="true">
        <ChatBubble className="absolute left-7 top-11 z-[3] whitespace-nowrap">T'as une dispo samedi ?</ChatBubble>
        <ChatBubble className="absolute left-7 top-[108px] z-[3] whitespace-nowrap">C'est combien ?</ChatBubble>
        <ChatBubble from="out" className="absolute right-7 top-[76px] z-[3] whitespace-nowrap">
          Tout est sur mon lien en bio.
        </ChatBubble>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[230px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary"
      />
      <PhoneFrame eager src={agenda} alt={ALT_AGENDA} className="absolute left-[34px] top-[300px] w-[210px] -rotate-[7deg]" />
      <PhoneFrame eager src={messagerie} alt={ALT_MESSAGERIE} className="absolute right-[34px] top-[300px] w-[210px] rotate-[7deg]" />
      <PhoneFrame eager src={accueil} alt={ALT_ACCUEIL} className="absolute left-1/2 top-[200px] w-[270px] -translate-x-1/2" />
    </div>
  </>
);

export default function HomeHero() {
  return (
    <section className="overflow-hidden xl:flex xl:min-h-[800px] xl:items-center xl:gap-12 xl:pb-12 xl:pl-24 xl:pr-12 xl:pt-6">
      <div className="px-5 pt-5 sm:mx-auto sm:max-w-[680px] xl:mx-0 xl:min-w-0 xl:flex-1 xl:p-0">
        <p className="m-0 inline-flex items-center gap-2 rounded-full bg-[#f4f4f4] px-3.5 py-2 text-[13px] leading-[1.35] text-[#1f1f1f] lg:gap-2.5 lg:px-[18px] lg:py-[9px] lg:text-[15px]">
          <LinkIcon />
          100 % gratuit · Pour les prestataires beauté d'Instagram
        </p>
        <h1 className="mb-0 mt-5 font-sans text-[40px] font-extrabold leading-[1.04] tracking-[-0.03em] sm:text-[56px] xl:mt-[26px] xl:text-[68px] xl:tracking-[-0.035em]">
          Ta page de réservation, aussi <Accent>belle</Accent> que ton feed
        </h1>
        <p className="mb-0 mt-[18px] max-w-[38ch] text-base leading-[1.55] text-[#3d3d3d] xl:mt-[26px] xl:text-xl">
          Tes clientes voient tes disponibilités en temps réel, réservent en ligne et reçoivent des
          rappels automatiques. Fini les DM, les stories à mettre à jour et les confirmations la
          veille : tout s'automatise, et c'est 100 % gratuit.
        </p>
        <StoreBadges className="mt-6 xl:mt-[34px]" />
        <StoresRating className="mt-[18px] xl:mt-6" />
      </div>
      <HeroVisual />
    </section>
  );
}
