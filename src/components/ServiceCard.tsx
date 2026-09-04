import type { ComponentType } from "react";
import type { IconProps } from "./icons/types";

type Accent = "gold" | "warm" | "deep";

const ACCENT_BG: Record<Accent, string> = {
  gold: "bg-[linear-gradient(160deg,#2b2612,var(--color-bg-surface)_55%,#5a4718_140%)]",
  warm: "bg-[linear-gradient(160deg,#2a1f16,var(--color-bg-base)_55%,#6b4a1e_150%)]",
  deep: "bg-[linear-gradient(160deg,#12100a,var(--color-bg-base)_60%,#2c2410_130%)]",
};

const DEFAULT_BG =
  "bg-[linear-gradient(160deg,var(--color-bg-surface),var(--color-bg-base)_65%,#3a2f14_130%)]";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: ComponentType<IconProps>;
  large?: boolean;
  accent?: Accent;
}

export default function ServiceCard({
  title,
  description,
  Icon,
  large = false,
  accent,
}: ServiceCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-border-hairline p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-200 hover:border-gold-base/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] ${
        accent ? ACCENT_BG[accent] : DEFAULT_BG
      } ${
        large
          ? "sm:col-span-2 md:min-h-[240px] md:p-8"
          : "md:min-h-[190px]"
      }`}
    >
      <Icon
        className={`text-gold-base ${large ? "h-9 w-9" : "h-7 w-7"}`}
      />
      <h3
        className={`mt-4 font-display font-bold tracking-tight text-text-primary uppercase ${
          large ? "text-xl md:text-[26px]" : "text-lg"
        }`}
      >
        {title}
      </h3>

      {large ? (
        /* Card grande: texto sempre visível para ocupar o espaço */
        <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-text-secondary md:text-base">
          {description}
        </p>
      ) : (
        /* Card menor: texto revelado ao passar o mouse (ou focar) */
        <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary opacity-100 transition-all duration-200 md:max-h-0 md:translate-y-2 md:opacity-0 md:group-hover:max-h-40 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:max-h-40 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100">
          {description}
        </p>
      )}
    </article>
  );
}
