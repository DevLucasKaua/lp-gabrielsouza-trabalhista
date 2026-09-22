import type { IconProps } from "./types";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": "true" as const,
};

/** Pessoas com doenças incapacitantes */
export function StethoscopeIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M6 3v6a4 4 0 0 0 8 0V3" />
      <path d="M10 13v2a5 5 0 0 0 10 0v-2" />
      <circle cx="20" cy="9" r="1.6" />
      <line x1="6" y1="3" x2="4.5" y2="3" />
      <line x1="14" y1="3" x2="12.5" y2="3" />
    </svg>
  );
}

/** Pessoas com sequelas de acidentes */
export function BandageIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect
        x="3.5"
        y="9.5"
        width="17"
        height="5"
        rx="2.5"
        transform="rotate(-35 12 12)"
      />
      <circle cx="9.3" cy="10.8" r="0.9" transform="rotate(-35 12 12)" />
      <circle cx="14.7" cy="13.2" r="0.9" transform="rotate(-35 12 12)" />
    </svg>
  );
}

/** Gestantes e mães */
export function PregnantIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="13" cy="5" r="2.2" />
      <path d="M9 21v-5.5C9 12 10.5 10 12 10c2.8 0 4.5 2.3 4.5 5 0 1.8-1 3-2.5 3.4V21" />
      <path d="M9.5 12.5C8 13.2 7 14.7 7 16.5" />
    </svg>
  );
}

/** Idosos que ainda não se aposentaram */
export function ElderlyIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="9" cy="5" r="2.2" />
      <path d="M6 21v-4l1.5-5.5L9 13l1.5-2.5L12 15v6" />
      <path d="M13.5 21l1-6 3-2" />
      <line x1="17" y1="13" x2="17.5" y2="17" />
    </svg>
  );
}

/** Quem trabalha em locais insalubres (limpeza / serviços gerais / enfermagem) */
export function SprayIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M9 10h6v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V10z" />
      <path d="M10.5 10V7h3v3" />
      <path d="M13.5 7V4.5h-3" />
      <path d="M13.5 4.5h3" />
      <line x1="18.5" y1="3" x2="19.5" y2="2" />
      <line x1="19" y1="5" x2="20.5" y2="5" />
      <line x1="18.5" y1="7" x2="19.5" y2="8" />
    </svg>
  );
}
