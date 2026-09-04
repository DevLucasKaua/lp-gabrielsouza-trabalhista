import CTAButton from "./CTAButton";
import { getWhatsAppLink } from "@/config/site";

const HERO_PRIMARY_ARIA_LABEL =
  "Enviar mensagem no WhatsApp solicitando análise do caso trabalhista";
const HERO_SECONDARY_ARIA_LABEL =
  "Rolar até a seção de áreas de atuação";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-24 pb-16 md:pt-28"
    >
      {/* Vídeo de fundo. Fallback = cor sólida escura (bom LCP; sem poster ainda). */}
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 -z-10 h-full w-full bg-bg-base object-cover brightness-[0.55]"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Filtro escuro uniforme sobre o vídeo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-bg-base/45"
      />

      {/* Vinheta: bordas bem escuras, suavizando progressivamente até o centro. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 85% 90% at 50% 50%, rgba(27,27,27,0) 22%, rgba(27,27,27,0.55) 58%, rgba(27,27,27,0.9) 88%, rgba(27,27,27,0.97) 100%)",
        }}
      />

      {/* Reforço à esquerda para manter o texto legível sobre o vídeo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(27,27,27,0.8)_0%,rgba(27,27,27,0.35)_42%,transparent_70%)]"
      />

      {/* Escurecimento extra no canto inferior direito. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 100% 100%, rgba(27,27,27,0.85) 0%, rgba(27,27,27,0.4) 40%, transparent 68%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <h1 className="font-display text-[34px] leading-[1.05] font-extrabold tracking-tight text-text-primary uppercase md:text-[60px] lg:text-[68px]">
            Quem defende o trabalhador não se cala diante da&nbsp;injustiça
          </h1>

          <p className="mt-6 font-body text-sm leading-relaxed text-text-secondary md:text-base">
            Demissão sem receber os direitos, horas extras não pagas, assédio
            ou acidente de trabalho têm prazo para serem cobrados. Quanto
            antes o seu caso for analisado, mais opções de defesa ficam
            abertas. Fale com um advogado antes de decidir sozinho.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton
              href={getWhatsAppLink()}
              ariaLabel={HERO_PRIMARY_ARIA_LABEL}
              variant="primary"
              external
              className="w-full sm:w-auto"
            >
              Solicitar Análise do Meu Caso
            </CTAButton>
            <CTAButton
              href="#areas-de-atuacao"
              ariaLabel={HERO_SECONDARY_ARIA_LABEL}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Ver Áreas de Atuação
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
