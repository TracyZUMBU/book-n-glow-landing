import type { FaqItem } from "@/data/faq";

/** Liste de questions dépliables (accueil et page /faq). */
export default function FaqList({
  items,
  openFirst = false,
}: {
  items: FaqItem[];
  /** Ouvre la première question au chargement. */
  openFirst?: boolean;
}) {
  return (
    <div className="border-t border-[#d6d6d6]">
      {items.map(({ question, answer }, i) => (
        <details key={question} open={openFirst && i === 0} className="group border-b border-[#d6d6d6]">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold leading-[1.3] after:flex-none after:text-[28px] after:font-normal after:leading-none after:content-['+'] group-open:after:content-['–'] lg:min-h-[72px] lg:text-[21px] lg:after:text-[32px] [&::-webkit-details-marker]:hidden">
            {question}
          </summary>
          <p className="m-0 mb-5 text-[15px] leading-[1.6] text-[#3d3d3d] lg:mb-6 lg:max-w-[70ch] lg:text-[17px]">
            {answer}
          </p>
        </details>
      ))}
    </div>
  );
}
