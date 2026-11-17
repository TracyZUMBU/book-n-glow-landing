import logo from "@/assets/landing/logo-wordmark.png";
import { SUPPORT_WHATSAPP_URL } from "@/lib/constants";
import { Instagram, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const INSTAGRAM_URL = "https://instagram.com/bookn_glow";
const CONTACT_EMAIL_URL = "mailto:contact@book-n-glow.fr";

const heading = "m-0 font-sans text-base font-semibold text-white";
const link =
  "flex min-h-11 items-center text-[15px] text-white/75 underline-offset-4 hover:text-white hover:underline lg:min-h-0";
const supportButton =
  "flex min-h-11 w-full items-center justify-center gap-2.5 rounded-full bg-white/10 px-6 text-[15px] font-medium text-white no-underline transition-colors hover:bg-white/20";

/** Logo WhatsApp (lucide-react n'a pas les logos de marques). */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      <h2 className={heading}>{title}</h2>
      {children}
    </div>
  );
}

/** Pied de page sombre : marque, contact du support, liens utiles, réseaux. */
export default function SiteFooter() {
  return (
    <footer className="bg-[#161616] px-5 pb-10 pt-12 text-white lg:px-24 lg:pb-12 lg:pt-16">
      <div className="mx-auto grid max-w-[1248px] gap-10 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-16">
        <div>
          <Link to="/" aria-label="Book N' Glow, accueil" className="inline-flex">
            {/* Logo noir sur fond blanc : inversé puis fondu pour ressortir en blanc sur le fond sombre. */}
            <img src={logo} alt="" className="block h-6 w-auto invert hue-rotate-180 mix-blend-screen lg:h-7" />
          </Link>
          <p className="m-0 mt-4 max-w-[32ch] text-sm leading-[1.5] text-white/60">
            L'app gratuite de réservation pour les prestataires beauté.
          </p>
        </div>

        <FooterColumn title="Contacter le support">
          <div className="flex flex-col gap-3 lg:w-72">
            <a className={supportButton} href={CONTACT_EMAIL_URL}>
              <Mail className="h-5 w-5" aria-hidden="true" />
              E-mail
            </a>
            <a
              className={supportButton}
              href={SUPPORT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </FooterColumn>

        <FooterColumn title="Liens rapides">
          <nav aria-label="Liens rapides" className="flex flex-col lg:gap-2.5">
            <Link className={link} to="/faq">
              FAQ
            </Link>
            <Link className={link} to="/contact">
              Contact
            </Link>
            <Link className={link} to="/cgu">
              CGU
            </Link>
            <Link className={link} to="/politique-de-confidentialite">
              Confidentialité
            </Link>
            <Link className={link} to="/mentions-legales">
              Mentions légales
            </Link>
          </nav>
        </FooterColumn>

        <FooterColumn title="Nous suivre">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book N' Glow sur Instagram"
            className="-ml-2.5 flex h-11 w-11 items-center justify-center rounded-full text-white/75 hover:bg-white/10 hover:text-white"
          >
            <Instagram className="h-6 w-6" aria-hidden="true" />
          </a>
        </FooterColumn>
      </div>

      <p className="mx-auto m-0 mt-12 max-w-[1248px] text-sm text-white/50 lg:mt-16">
        © {new Date().getFullYear()} Book N' Glow
      </p>
    </footer>
  );
}
