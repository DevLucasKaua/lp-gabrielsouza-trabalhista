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

/** Atuação exclusiva para o trabalhador */
export function ScaleIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="5" y1="7" x2="19" y2="7" />
      <path d="M5 7l-3 6a3.2 3.2 0 0 0 6 0l-3-6z" />
      <path d="M19 7l-3 6a3.2 3.2 0 0 0 6 0l-3-6z" />
      <line x1="8" y1="21" x2="16" y2="21" />
    </svg>
  );
}

/** Atendimento próximo e humanizado */
export function ChatIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 5h16v10H9l-4 4v-4H4z" />
      <line x1="8" y1="9" x2="16" y2="9" />
      <line x1="8" y1="12" x2="13" y2="12" />
    </svg>
  );
}

/** Experiência consolidada */
export function HistoryClockIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <polyline points="3 4 3 9 8 9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  );
}

/** Núcleo especializado em Trabalhista */
export function TargetIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Metodologia ágil */
export function BoltIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <polygon points="13 2 4 14 11 14 10 22 20 9 13 9 13 2" />
    </svg>
  );
}
