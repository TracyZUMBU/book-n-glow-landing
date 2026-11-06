import { Accent, Card, Section, SectionTitle, StoresRating } from "./ui";

/**
 * Vrais avis des stores, cités tels quels (coupes signalées par « […] »).
 * Relevés App Store du 2026-11-04 et Google Play du 2026-11-06.
 * Ne jamais inventer ni réécrire un avis (Code de la consommation, L121-2 et L121-4),
 * ni afficher celui d'un proche de Book N' Glow.
 */
const REVIEWS: { title?: string; quote: string; author: string }[] = [
  {
    title: "Un vrai gain de temps au quotidien",
    quote:
      "Avant j'utilisais les DM WhatsApp […] c'était le chaos. […] Les clients réservent eux-mêmes, je reçois une notif et c'est tout.",
    author: "Kays_94",
  },
  {
    title: "Un outil complet",
    quote: "L'outil est complet, je suis toute mon activité avec.",
    author: "AlexRR098",
  },
  {
    quote: "Super application !",
    author: "Florence Alonzeau",
  },
];

/** « Ce qu'en disent les prestataires » : avis réels des stores. */
export default function ReviewsSection() {
  return (
    <Section>
      <div className="lg:text-center">
        <SectionTitle>
          Ce qu'en disent les <Accent>prestataires</Accent>.
        </SectionTitle>
        <StoresRating className="mt-5 text-[15px] lg:mt-6 lg:inline-flex lg:text-[17px]" />
      </div>

      <div className="mt-8 grid gap-3 lg:mt-14 lg:grid-cols-[repeat(auto-fit,minmax(340px,1fr))] lg:gap-6">
        {REVIEWS.map(({ title, quote, author }) => (
          <Card key={author}>
            <figure className="m-0">
              {title && (
                <p className="m-0 mb-1.5 text-lg font-bold leading-[1.3] lg:text-xl">{title}</p>
              )}
              <blockquote className="m-0 text-base leading-[1.6] text-[#2b2b2b] lg:text-lg">
                « {quote} »
              </blockquote>
              <figcaption className="mt-4 text-sm text-[#3d3d3d] lg:mt-5 lg:text-[15px]">
                {author}
              </figcaption>
            </figure>
          </Card>
        ))}
      </div>
    </Section>
  );
}
