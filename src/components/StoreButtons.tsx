import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AppleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-4 h-4", className)}
    aria-hidden="true"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-4 h-4", className)}
    aria-hidden="true"
  >
    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.175-.1-.296-.284-.296-.506V2.32c0-.222.12-.406.296-.506zm11.75 10.186l3.977 3.977L6.872 22.45l8.486-10.45zm4.273-2.698L15.61 12l4.021 4.021 2.139-2.14c.391-.39.391-1.023 0-1.414l-2.138-2.14zM5.864 1.568l11.05 6.448-3.976 3.976L5.864 1.568z" />
  </svg>
);

interface StoreButtonsProps {
  variant?: "default" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  vertical?: boolean;
}

export const StoreButtons = ({
  variant = "outline",
  size = "md",
  className,
  vertical = false,
}: StoreButtonsProps) => {
  const sizeClasses = {
    sm: "h-8 text-xs px-3",
    md: "h-9 text-sm px-4",
    lg: "h-10 text-sm px-5",
  };

  const variantClasses = {
    default:
      "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity",
    outline:
      "border border-border bg-background hover:bg-muted transition-colors text-foreground",
    dark: "bg-foreground text-background hover:bg-foreground/90 transition-colors",
  };

  const baseBtn = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium",
    sizeClasses[size],
    variantClasses[variant]
  );

  return (
    <div
      className={cn(
        "flex gap-2",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={baseBtn}
      >
        <AppleIcon />
        <span>App Store</span>
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={baseBtn}
      >
        <PlayIcon />
        <span>Google Play</span>
      </a>
    </div>
  );
};

export default StoreButtons;
