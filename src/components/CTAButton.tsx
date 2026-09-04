import type { ReactNode } from "react";
import { ChevronDoubleIcon } from "./icons/UtilityIcons";
import { WhatsAppIcon } from "./icons/ContactIcons";

type Variant = "primary" | "secondary" | "dark-on-gold";
type Size = "sm" | "md";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  ariaLabel: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  showWhatsAppIcon?: boolean;
  showChevron?: boolean;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[linear-gradient(135deg,var(--color-gold-light),var(--color-gold-base),var(--color-gold-dark))] text-bg-base hover:bg-[linear-gradient(135deg,var(--color-gold-dark),var(--color-gold-base),var(--color-gold-light))] hover:-translate-y-px hover:shadow-[0_0_28px_rgba(212,175,55,0.35)]",
  secondary:
    "border-[1.5px] border-gold-base text-text-primary bg-transparent hover:bg-gold-base/10",
  "dark-on-gold":
    "bg-bg-base text-text-primary hover:bg-bg-surface hover:-translate-y-px",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-6 py-3 text-sm min-h-12",
  md: "px-8 py-4 text-base min-h-[52px]",
};

export default function CTAButton({
  href,
  children,
  ariaLabel,
  variant = "primary",
  size = "md",
  external = false,
  showWhatsAppIcon = false,
  showChevron = true,
  className = "",
}: CTAButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-display font-bold tracking-wide uppercase transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {showWhatsAppIcon && <WhatsAppIcon className="h-5 w-5 shrink-0" />}
      <span>{children}</span>
      {showChevron && <ChevronDoubleIcon className="h-4 w-4 shrink-0" />}
    </a>
  );
}
