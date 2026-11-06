import { QRCodeSVG } from "qrcode.react";
import { SectionTitle, StoreBadges } from "./ui";

/** Page /telecharger, avec les liens des deux stores. */
const DOWNLOAD_PAGE_URL = "https://book-n-glow.fr/telecharger";

/** Bloc rose final : promesse, boutons des stores, QR code sur ordinateur. */
export default function FinalCtaSection() {
  return (
    <section id="telecharger" className="scroll-mt-4 p-3 lg:p-6">
      <div className="mx-auto flex max-w-[1392px] flex-wrap items-center justify-between gap-16 rounded-[32px] bg-primary px-[22px] py-14 text-[#161616] lg:rounded-[56px] lg:px-[72px] lg:py-24">
        <div className="min-w-0 lg:flex-[1_1_560px]">
          <SectionTitle className="text-[40px] leading-[1.06] lg:text-[72px] lg:leading-[1.02]">
            Ta page de réservation, dans ta bio Insta.
          </SectionTitle>
          <p className="m-0 mt-4 max-w-[30ch] text-[17px] leading-[1.5] lg:mt-6 lg:max-w-[36ch] lg:text-xl">
            Télécharge l'app, crée ta page, colle ton lien. C'est gratuit.
          </p>
          <StoreBadges className="mt-7 lg:mt-9" />
        </div>

        {/* Sur téléphone, les boutons suffisent : le QR code ne sert que sur ordinateur. */}
        <div className="hidden flex-none text-center lg:block">
          <div className="flex h-44 w-44 items-center justify-center rounded-3xl bg-white p-5">
            <QRCodeSVG
              value={DOWNLOAD_PAGE_URL}
              size={136}
              fgColor="#161616"
              title="QR code pour télécharger l'app Book N' Glow"
            />
          </div>
          <p className="m-0 mt-3 text-[15px] font-medium">Scanne avec ton téléphone</p>
        </div>
      </div>
    </section>
  );
}
