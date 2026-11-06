import FaqList from "@/components/home/FaqList";
import SiteFooter from "@/components/home/SiteFooter";
import SiteHeader from "@/components/home/SiteHeader";
import { Accent, Lead, SectionTitle } from "@/components/home/ui";
import { FAQ, FAQ_CATEGORIES, type FaqAudience } from "@/data/faq";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Les questions se modifient dans src/data/faq.ts.

const FILTERS: { value: FaqAudience | "tous"; label: string }[] = [
  { value: "tous", label: "Toutes" },
  { value: "prestataire", label: "Prestataires" },
  { value: "cliente", label: "Clientes" },
];

export default function FAQPage() {
  const [audience, setAudience] = useState<FaqAudience | "tous">("tous");

  const visible = FAQ.filter((item) => audience === "tous" || item.audience.includes(audience));

  return (
    <div className="min-h-screen bg-white text-[#1f1f1f]">
      <SiteHeader />
      <main className="px-5 pb-[72px] pt-8 lg:px-24 lg:pb-28 lg:pt-16">
        <div className="mx-auto max-w-[920px]">
          <h1 className="m-0 font-sans text-[40px] font-extrabold leading-[1.04] tracking-[-0.03em] lg:text-center lg:text-[64px] lg:tracking-[-0.035em]">
            Toutes tes <Accent>questions</Accent>.
          </h1>
          <Lead className="lg:mx-auto lg:text-center">
            Prestataires ou clientes, tout ce qu'il faut savoir sur Book N' Glow.
          </Lead>

          <div
            role="group"
            aria-label="Filtrer les questions"
            className="mt-8 flex flex-wrap gap-2 lg:mt-10 lg:justify-center"
          >
            {FILTERS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                aria-pressed={audience === value}
                onClick={() => setAudience(value)}
                className={cn(
                  "min-h-11 rounded-full px-5 text-[15px] font-medium transition-colors",
                  audience === value
                    ? "bg-[#1f1f1f] text-white"
                    : "bg-[#f4f4f4] text-[#1f1f1f] hover:bg-[#e8e8e8]"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          {FAQ_CATEGORIES.map((category) => {
            const items = visible.filter((item) => item.category === category);
            if (items.length === 0) return null;
            return (
              <section key={category} className="mt-12 lg:mt-16">
                <SectionTitle className="mb-5 text-[26px] leading-[1.15] lg:mb-6 lg:text-[32px] lg:leading-[1.15]">
                  {category}
                </SectionTitle>
                <FaqList items={items} />
              </section>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
