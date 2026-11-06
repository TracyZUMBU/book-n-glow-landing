import logo from "@/assets/landing/logo-wordmark.png";
import { CUSTOMER_SIGN_IN_URL } from "@/lib/constants";
import { Link } from "react-router-dom";

const navLink = "text-[15px] text-[#3d3d3d] no-underline hover:text-[#1f1f1f] hover:underline";

export default function SiteHeader() {
  return (
    <header className="flex h-[68px] items-center justify-between gap-2 pl-5 pr-3 lg:h-[84px] lg:gap-6 lg:px-12">
      <Link to="/" aria-label="Book N' Glow, accueil" className="flex items-center">
        <img src={logo} alt="" className="block h-5 w-auto lg:h-6" />
      </Link>

      <nav aria-label="Navigation principale" className="hidden items-center gap-9 lg:flex">
        <Link className={navLink} to="/#fonctionnalites">
          Fonctionnalités
        </Link>
        <Link className={navLink} to="/#faq">
          FAQ
        </Link>
      </nav>

      <div className="flex items-center gap-1.5 lg:gap-4">
        <a
          href={CUSTOMER_SIGN_IN_URL}
          className="flex min-h-11 items-center whitespace-nowrap px-2 text-[13px] text-[#4a4a4a] no-underline hover:text-[#1f1f1f] hover:underline lg:px-0 lg:text-sm"
        >
          Espace cliente
        </a>
        <Link
          to="/#telecharger"
          className="flex h-11 items-center justify-center rounded-full bg-primary px-[18px] text-sm font-semibold text-[#161616] no-underline transition-opacity hover:opacity-90 lg:h-12 lg:px-[26px] lg:text-[15px]"
        >
          Télécharger
        </Link>
      </div>
    </header>
  );
}
