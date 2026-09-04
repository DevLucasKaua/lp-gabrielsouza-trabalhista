import Image from "next/image";
import SectionContainer from "./SectionContainer";
import { siteConfig } from "@/config/site";

export default function AboutSection() {
  return (
    <SectionContainer
      id="sobre"
      as="section"
      aria-labelledby="sobre-heading"
      className="bg-bg-surface-alt"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Texto — esquerda */}
        <div className="lg:col-span-5">
          <h2
            id="sobre-heading"
            className="mt-4 max-w-md font-display text-[26px] leading-[1.1] font-extrabold tracking-tight uppercase text-balance md:text-[44px]"
          >
            Um escritório que escolheu{" "}
            <span className="text-gold-base">um só lado da mesa</span>
          </h2>

          <p className="mt-6 font-body text-base leading-relaxed text-text-primary">
            O {siteConfig.officeName} é um escritório sediado em Brasília/DF,
            com atuação dedicada exclusivamente à defesa de trabalhadores.
            Não representamos empresas nem empregadores, apenas quem precisa
            fazer valer os seus direitos.
          </p>
          <p className="mt-4 font-body text-base leading-relaxed text-text-primary">
            Ao longo de mais de 5 anos, os sócios acumularam experiência em
            demandas trabalhistas e previdenciárias, incluindo atuação junto a
            Sindicatos de Trabalhadores. O atendimento é próximo e transparente.
            Cada etapa do processo é explicada em linguagem simples, para que o
            cliente entenda exatamente onde está o seu caso.
          </p>
        </div>

        {/* Cards dos sócios — direita */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
          {siteConfig.partners.map((partner) => (
            <article
              key={partner.oab}
              tabIndex={0}
              aria-label={`${partner.name}, ${partner.oab}. ${partner.bio}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border-hairline outline-none focus-visible:ring-2 focus-visible:ring-gold-base"
            >
              <Image
                src={partner.photo}
                alt={`${partner.name}, ${partner.oab}`}
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />

              {/* Nome sempre visível na base (some ao revelar) */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(27,27,27,0.85))] p-4 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0"
              >
                <p className="font-display text-base font-bold text-text-primary">
                  {partner.name}
                </p>
                <p className="font-body text-xs font-medium text-gold-base">
                  {partner.oab}
                </p>
              </div>

              {/* Overlay revelado no hover/focus */}
              <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-bg-base/95 p-5 transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0">
                <h3 className="font-display text-lg font-bold text-text-primary md:text-xl">
                  {partner.name}
                </h3>
                <p className="mt-1 font-body text-sm font-medium text-gold-base">
                  {partner.oab}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-text-secondary">
                  {partner.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
