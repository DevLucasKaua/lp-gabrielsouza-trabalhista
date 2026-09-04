import type { ElementType, ReactNode } from "react";

interface SectionContainerProps {
  as?: ElementType;
  id?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
}

/**
 * Wrapper de seção padrão: cuida do container/grid máximo e do padding
 * vertical responsivo. O background é definido pelo chamador via `className`.
 */
export default function SectionContainer({
  as: Component = "section",
  id,
  className = "",
  innerClassName = "",
  children,
  "aria-labelledby": ariaLabelledBy,
}: SectionContainerProps) {
  return (
    <Component
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`py-14 md:py-24 ${className}`}
    >
      <div className={`mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 ${innerClassName}`}>
        {children}
      </div>
    </Component>
  );
}
