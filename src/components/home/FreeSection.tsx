import { Accent, SectionTitle, StoreBadges } from "./ui";

const FIGURES = [
  { value: "0 €", label: "d'abonnement" },
  { value: "0 %", label: "de commission" },
];

/** « Gratuit. Vraiment. » : bloc sombre avec 0 € et 0 %. */
export default function FreeSection() {
  return (
    <section className="px-3 pb-3 lg:px-6 lg:pb-6">
      <div className="mx-auto max-w-[1392px] rounded-[32px] bg-[#1f1f1f] px-5 py-16 text-center text-white lg:rounded-[56px] lg:px-[72px] lg:py-28">
        <SectionTitle className="text-[44px] leading-[1.06] lg:text-[72px] lg:leading-[1.05]">
          Gratuit. <Accent>Vraiment.</Accent>
        </SectionTitle>
        <div className="mt-9 grid grid-cols-2 gap-3 lg:mt-14 lg:flex lg:flex-wrap lg:justify-center lg:gap-6">
          {FIGURES.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-[22px] bg-[#2c2c2c] px-2.5 py-6 lg:max-w-[340px] lg:flex-[1_1_280px] lg:rounded-[32px] lg:p-9"
            >
              <div className="text-[44px] font-extrabold leading-none tracking-[-0.04em] text-primary lg:text-[72px]">
                {value}
              </div>
              <p className="m-0 mt-2.5 text-[15px] text-[#e6e6e6] lg:mt-3 lg:text-lg">{label}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mb-0 mt-7 max-w-[34ch] text-base leading-[1.6] text-[#d9d9d9] lg:mt-10 lg:max-w-[52ch] lg:text-lg">
          Sur un paiement par carte, seuls les frais Stripe sont déduits.
        </p>
        <StoreBadges ring className="mt-8 justify-center lg:mt-10" />
      </div>
    </section>
  );
}
