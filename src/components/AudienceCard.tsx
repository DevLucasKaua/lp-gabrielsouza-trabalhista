import type { ComponentType } from "react";
import type { IconProps } from "./icons/types";

interface AudienceCardProps {
  title: string;
  description: string;
  Icon: ComponentType<IconProps>;
}

export default function AudienceCard({
  title,
  description,
  Icon,
}: AudienceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/15 bg-bg-base/92 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
      {/* Brilho diagonal sutil do vidro */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_26%,transparent_52%)]"
      />
      {/* Linha de luz na borda superior */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="relative">
        <Icon className="h-7 w-7 text-gold-base" />
        <h3 className="mt-4 font-display text-lg font-bold text-text-primary">
          {title}
        </h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary md:text-[15px]">
          {description}
        </p>
      </div>
    </article>
  );
}
