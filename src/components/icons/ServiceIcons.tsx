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

/** Benefícios por Incapacidade */
export function HeartIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 20s-7.2-4.5-9.5-9.1C1.1 8.1 2.4 5 5.4 4.3c1.9-.4 3.7.4 4.6 2 .9-1.6 2.7-2.4 4.6-2 3 .7 4.3 3.8 2.9 6.6C19.2 15.5 12 20 12 20z" />
    </svg>
  );
}

/** Auxílio-Doença */
export function PulseIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <polyline points="2 12 7 12 9.5 6 13 18 15.5 12 22 12" />
    </svg>
  );
}

/** Auxílio-Acidente */
export function ShieldAlertIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <circle cx="12" cy="16" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Aposentadoria por Invalidez */
export function ShieldIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

/** BPC/LOAS */
export function HandHeartIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 13l3.5 3.5c.5.5 1.2.8 1.9.8h6.4c1 0 1.9-.7 2.1-1.7v0c.2-1.1-.5-2.1-1.6-2.3l-4.8-.9" />
      <path d="M3 13V7h2.5L9 9h3.5c1.2 0 2.2.7 2.6 1.8" />
      <path d="M17.5 8.5c1-1 1-2.5 0-3.4-1-.9-2.4-.7-3 .3-.6-1-2-1.2-3-.3-1 .9-1 2.4 0 3.4l3 2.9 3-2.9z" />
    </svg>
  );
}

/** Salário-Maternidade */
export function BabyIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="9" r="5" />
      <path d="M8 9c0-1.4.9-2.5 2-2.9" />
      <path d="M7 19c1-2 3-3 5-3s4 1 5 3" />
      <circle cx="10" cy="8.5" r="0.4" fill="currentColor" stroke="none" />
      <circle cx="14" cy="8.5" r="0.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Adicional de Insalubridade */
export function HazardIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3.5 21 19H3L12 3.5z" />
      <line x1="12" y1="9.5" x2="12" y2="13.5" />
      <circle cx="12" cy="16.2" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Adicional de Periculosidade */
export function BoltIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M13 2 5 13.5h6L10.5 22 19 10h-6L13 2z" />
    </svg>
  );
}

/** Aposentadorias Urbanas */
export function BuildingIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <line x1="9" y1="7" x2="9" y2="7.01" />
      <line x1="12" y1="7" x2="12" y2="7.01" />
      <line x1="15" y1="7" x2="15" y2="7.01" />
      <line x1="9" y1="11" x2="9" y2="11.01" />
      <line x1="12" y1="11" x2="12" y2="11.01" />
      <line x1="15" y1="11" x2="15" y2="11.01" />
      <line x1="9" y1="15" x2="9" y2="15.01" />
      <line x1="12" y1="15" x2="12" y2="15.01" />
      <line x1="15" y1="15" x2="15" y2="15.01" />
      <line x1="10" y1="21" x2="10" y2="18" />
      <line x1="14" y1="21" x2="14" y2="18" />
    </svg>
  );
}
