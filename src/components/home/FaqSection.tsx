import { FAQ } from "@/data/faq";
import { Link } from "react-router-dom";
import FaqList from "./FaqList";
import { Accent, Section, SectionTitle } from "./ui";

const HOME_FAQ = FAQ.filter((item) => item.onHome);

/** « Tes questions » : les questions principales, et un lien vers la page /faq. */
export default function FaqSection() {
  return (
    <Section id="faq" className="scroll-mt-4 bg-[#f4f4f4]">
      <div className="mx-auto max-w-[920px]">
        <SectionTitle className="lg:text-center">
          Tes <Accent>questions</Accent>.
        </SectionTitle>
        <div className="mt-8 lg:mt-12">
          <FaqList items={HOME_FAQ} openFirst />
        </div>
        <p className="m-0 mt-6 lg:mt-8 lg:text-center">
          <Link
            to="/faq"
            className="inline-flex min-h-11 items-center text-[15px] font-semibold underline underline-offset-4 lg:text-base"
          >
            Voir toutes les questions
          </Link>
        </p>
      </div>
    </Section>
  );
}
