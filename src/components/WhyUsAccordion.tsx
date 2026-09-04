"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
} from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import type { IconProps } from "./icons/types";
import CTAButton from "./CTAButton";
import { getWhatsAppLink } from "@/config/site";
import {
  ScaleIcon,
  ChatIcon,
  HistoryClockIcon,
  TargetIcon,
  BoltIcon,
} from "./icons/DifferentiatorIcons";

type Item = {
  id: string;
  title: string;
  description: string;
  highlight: string;
  Icon: ComponentType<IconProps>;
};

const ITEMS: Item[] = [
  {
    id: "exclusiva",
    title: "Atuação exclusiva para o trabalhador",
    description:
      "Não representamos empresas nem empregadores. Defendemos apenas quem vive do próprio trabalho.",
    highlight: "Um só lado da mesa: o seu.",
    Icon: ScaleIcon,
  },
  {
    id: "humanizado",
    title: "Atendimento próximo e humanizado",
    description:
      "Cada etapa do processo é explicada em linguagem simples, sem jargão desnecessário.",
    highlight: "Você entende cada passo do processo.",
    Icon: ChatIcon,
  },
  {
    id: "experiencia",
    title: "Experiência consolidada",
    description:
      "Mais de 5 anos de atuação em Direito Trabalhista e Previdenciário, incluindo casos junto a Sindicatos de Trabalhadores.",
    highlight: "5+ anos ao lado do trabalhador.",
    Icon: HistoryClockIcon,
  },
  {
    id: "especializado",
    title: "Núcleo especializado em Trabalhista",
    description:
      "Estrutura voltada especificamente para as particularidades técnicas das demandas na Justiça do Trabalho.",
    highlight: "Especialistas em CLT.",
    Icon: TargetIcon,
  },
  {
    id: "agil",
    title: "Metodologia ágil",
    description:
      "Organização do caso e da documentação com foco em agilidade e estratégia jurídica desde o primeiro contato.",
    highlight: "Estratégia desde o primeiro contato.",
    Icon: BoltIcon,
  },
];

/** Mede a largura (border-box) de um elemento via ResizeObserver. */
function useMeasure<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const box = entry.borderBoxSize?.[0];
      setWidth(
        box ? box.inlineSize : entry.target.getBoundingClientRect().width
      );
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return [ref, width] as const;
}

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export default function WhyUsAccordion() {
  const [active, setActive] = useState<string>("");
  const [isDesktop, setIsDesktop] = useState(false);
  const [rootRef, rootWidth] = useMeasure<HTMLDivElement>();
  const activeItem = ITEMS.find((item) => item.id === active) ?? null;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <MotionConfig
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Accordion — esquerda */}
        <div
          ref={rootRef}
          className="flex flex-col items-start gap-3 lg:col-span-7"
        >
          {ITEMS.map((item) => (
            <AccordionRow
              key={item.id}
              item={item}
              isOpen={active === item.id}
              openWidth={rootWidth}
              isDesktop={isDesktop}
              onToggle={() =>
                setActive((current) => (current === item.id ? "" : item.id))
              }
            />
          ))}
        </div>

        {/* Coluna direita: painel sincronizado + botão */}
        <div className="flex flex-col gap-6 lg:col-span-5">
        <div className="relative hidden min-h-[360px] overflow-hidden rounded-3xl border border-border-hairline bg-[linear-gradient(160deg,var(--color-bg-surface),var(--color-bg-base)_70%,#2c2410_140%)] p-8 lg:flex lg:flex-col lg:justify-end">
          {/* Watermark do ícone ativo */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem?.id ?? "default"}
              initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
              animate={{ opacity: 0.08, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 6 }}
              transition={{ duration: 0.4 }}
              className="pointer-events-none absolute -top-6 -right-6 text-gold-base"
            >
              {(() => {
                const Icon = (activeItem ?? ITEMS[0]).Icon;
                return <Icon className="h-56 w-56" />;
              })()}
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem?.id ?? "default"}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              {activeItem ? (
                <>
                  <activeItem.Icon className="h-9 w-9 text-gold-base" />
                  <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-text-primary md:text-3xl">
                    {activeItem.highlight}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary md:text-base">
                    {activeItem.title}
                  </p>
                </>
              ) : (
                <>
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-gold-base uppercase">
                    Por Que Nós
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-text-primary md:text-3xl">
                    Advocacia com lado definido.
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary md:text-base">
                    Toque em cada diferencial ao lado para conhecer como
                    trabalhamos exclusivamente pelo trabalhador.
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

          <CTAButton
            href={getWhatsAppLink()}
            ariaLabel="Falar com um advogado pelo WhatsApp"
            variant="primary"
            external
            showWhatsAppIcon
            showChevron={false}
            className="w-full"
          >
            Falar com um Advogado
          </CTAButton>
        </div>
      </div>
    </MotionConfig>
  );
}

type AccordionRowProps = {
  item: Item;
  isOpen: boolean;
  openWidth: number;
  isDesktop: boolean;
  onToggle: () => void;
};

function AccordionRow({
  item,
  isOpen,
  openWidth,
  isDesktop,
  onToggle,
}: AccordionRowProps) {
  const [headerRef, headerWidth] = useMeasure<HTMLButtonElement>();

  return (
    <motion.div
      animate={
        isDesktop && headerWidth
          ? { width: isOpen ? Math.max(openWidth, headerWidth) : headerWidth }
          : { width: "100%" }
      }
      className="relative max-w-full overflow-hidden rounded-3xl bg-bg-surface shadow-[0_8px_30px_rgba(0,0,0,0.35)] ring-1 ring-border-hairline ring-inset"
    >
      <button
        ref={headerRef}
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className={`flex min-h-14 items-center gap-3 py-3 pr-6 pl-4 text-left font-display text-[15px] font-semibold tracking-tight text-text-primary md:text-base ${
          isDesktop ? "w-max whitespace-nowrap" : "w-full"
        }`}
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-gold-base"
        >
          <PlusIcon />
        </motion.span>
        <span>{item.title}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { type: "spring", stiffness: 400, damping: 40 },
              opacity: { duration: 0.25, ease: "easeOut" },
            }}
            className="overflow-hidden"
          >
            {/* Largura fixa (= largura final aberta) para o texto não refluir
                durante a expansão — evita o "ajuste brusco" da altura. */}
            <div style={openWidth ? { width: openWidth } : undefined}>
              <p className="pr-6 pb-5 pl-4 font-body text-sm leading-relaxed text-text-secondary md:text-[15px]">
                {item.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
