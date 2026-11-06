import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Mot mis en rose dans un titre. */
export const Accent = ({ children }: { children: ReactNode }) => (
  <span className="text-primary">{children}</span>
);

/** Capture d'écran de l'app dans un cadre de téléphone. */
export const PhoneFrame = ({
  src,
  alt,
  className,
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  /** À mettre pour les images visibles dès l'ouverture (hero). */
  eager?: boolean;
}) => (
  <div
    className={cn(
      "relative rounded-[17%/8%] bg-[#1b1b1b] px-2 pb-3 pt-6 shadow-[0_30px_60px_-28px_rgba(0,0,0,.5),inset_0_0_0_1.5px_#3a3a3a] lg:px-[9px] lg:pb-[13px] lg:pt-[26px]",
      className
    )}
  >
    <div
      aria-hidden="true"
      className="absolute left-1/2 top-2 h-[9px] w-[22%] -translate-x-1/2 rounded-full bg-[#050505] lg:top-[9px] lg:h-2.5"
    />
    <div className="overflow-hidden rounded-[14%/6.6%] bg-white">
      <img src={src} alt={alt} className="block h-auto w-full" loading={eager ? "eager" : "lazy"} />
    </div>
  </div>
);

/** Bulle de message façon DM Instagram. */
export const ChatBubble = ({
  children,
  from = "in",
  className,
}: {
  children: ReactNode;
  from?: "in" | "out";
  className?: string;
}) => (
  <div
    className={cn(
      "rounded-[20px] px-4 py-2.5 text-[15px] leading-[1.3] shadow-[0_8px_20px_-12px_rgba(0,0,0,.3)] lg:rounded-[22px] lg:px-[18px] lg:py-3 lg:text-base lg:leading-[1.35]",
      from === "in"
        ? "rounded-bl-md bg-white text-[#1f1f1f]"
        : "rounded-br-md bg-primary font-medium text-[#161616]",
      className
    )}
  >
    {children}
  </div>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 flex-none" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-none" aria-hidden="true">
    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.175-.1-.296-.284-.296-.506V2.32c0-.222.12-.406.296-.506zm11.75 10.186l3.977 3.977L6.872 22.45l8.486-10.45zm4.273-2.698L15.61 12l4.021 4.021 2.139-2.14c.391-.39.391-1.023 0-1.414l-2.138-2.14zM5.864 1.568l11.05 6.448-3.976 3.976L5.864 1.568z" />
  </svg>
);

/** Boutons noirs App Store / Google Play. */
export const StoreBadges = ({
  ring = false,
  className,
}: {
  /** Liseré gris, pour les fonds sombres. */
  ring?: boolean;
  className?: string;
}) => {
  const badge = cn(
    "flex h-[54px] min-w-0 flex-1 items-center gap-2 whitespace-nowrap rounded-xl border bg-black px-3 text-white no-underline transition-opacity hover:opacity-85 sm:flex-none lg:h-[58px] lg:min-w-[178px] lg:px-5",
    ring ? "border-[#8a8a8a]" : "border-black"
  );
  const label = (small: string, big: string) => (
    <span className="text-left">
      <small className="block text-[10px] leading-[1.1]">{small}</small>
      <b className="block text-base font-semibold leading-[1.15] sm:text-[17px] lg:text-[19px]">{big}</b>
    </span>
  );

  return (
    <div className={cn("flex gap-2.5 lg:gap-3.5", className)}>
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={badge}>
        <AppleIcon />
        {label("Télécharger sur", "App Store")}
      </a>
      <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className={badge}>
        <PlayIcon />
        {label("Disponible sur", "Google Play")}
      </a>
    </div>
  );
};

/** Cinq étoiles roses et « Noté 5/5 sur les stores » (App Store et Google Play). */
export const StoresRating = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-2 text-[13px] text-[#3d3d3d] lg:gap-2.5 lg:text-[15px]", className)}>
    <svg width="86" height="16" viewBox="0 0 86 16" className="fill-primary" aria-hidden="true">
      {[0, 17, 34, 51, 68].map((x) => (
        <polygon
          key={x}
          transform={`translate(${x} 0)`}
          points="8 1 10.1 5.6 15 6.2 11.4 9.6 12.3 14.5 8 12.1 3.7 14.5 4.6 9.6 1 6.2 5.9 5.6"
        />
      ))}
    </svg>
    <span>Noté 5/5 sur les stores</span>
  </div>
);

/** Section de la landing : marges et largeur max de la maquette. */
export const Section = ({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) => (
  <section id={id} className={cn("px-5 py-[72px] lg:px-24 lg:py-28", className)}>
    <div className="mx-auto max-w-[1248px]">{children}</div>
  </section>
);

/** Titre de section (h2). */
export const SectionTitle = ({ children, className }: { children: ReactNode; className?: string }) => (
  <h2
    className={cn(
      "m-0 font-sans text-[38px] font-extrabold leading-[1.06] tracking-[-0.03em] lg:text-[64px] lg:leading-[1.05] lg:tracking-[-0.035em]",
      className
    )}
  >
    {children}
  </h2>
);

/** Chapô sous un titre de section. */
export const Lead = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p
    className={cn(
      "mb-0 mt-4 max-w-[36ch] text-base leading-[1.55] text-[#3d3d3d] lg:mt-5 lg:max-w-[46ch] lg:text-xl",
      className
    )}
  >
    {children}
  </p>
);

/** Pastille rose numérotée. */
export const StepNumber = ({ n, className }: { n: number; className?: string }) => (
  <div
    className={cn(
      "flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary text-lg font-bold text-[#161616] lg:h-12 lg:w-12 lg:text-xl",
      className
    )}
  >
    {n}
  </div>
);

/** Carte grise arrondie. */
export const Card = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("rounded-3xl bg-[#f4f4f4] px-[22px] py-[26px] lg:rounded-[32px] lg:p-9", className)}>
    {children}
  </div>
);

/** Étiquette arrondie (option, fonctionnalité). */
export const Pill = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span className={cn("rounded-full bg-[#f4f4f4] px-3.5 py-2 text-sm lg:text-[15px]", className)}>
    {children}
  </span>
);
