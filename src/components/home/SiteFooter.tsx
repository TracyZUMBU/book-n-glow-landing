import logo from "@/assets/landing/logo-wordmark.png";
import { Link } from "react-router-dom";

const INSTAGRAM_URL = "https://instagram.com/bookn_glow";

const link = "flex min-h-11 items-center text-[15px] text-[#3d3d3d] no-underline hover:underline";

export default function SiteFooter() {
  return (
    <footer className="px-5 pb-14 pt-10 lg:px-24 lg:pb-16 lg:pt-14">
      <div className="mx-auto flex max-w-[1248px] flex-col gap-5 lg:flex-row lg:flex-wrap lg:items-start lg:justify-between lg:gap-12">
        <div>
          <Link to="/" aria-label="Book N' Glow, accueil" className="inline-flex">
            <img src={logo} alt="" className="block h-5 w-auto lg:h-[22px]" />
          </Link>
          <p className="m-0 mt-3 max-w-[32ch] text-sm leading-[1.5] text-[#505050] lg:mt-3.5">
            L'app gratuite de réservation pour les prestataires beauté.
          </p>
        </div>
        <nav aria-label="Liens utiles" className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-7">
          <Link className={link} to="/mentions-legales">
            Mentions légales
          </Link>
          <Link className={link} to="/cgu">
            CGU
          </Link>
          <Link className={link} to="/politique-de-confidentialite">
            Confidentialité
          </Link>
          <Link className={link} to="/contact">
            Contact
          </Link>
          <a className={link} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}
