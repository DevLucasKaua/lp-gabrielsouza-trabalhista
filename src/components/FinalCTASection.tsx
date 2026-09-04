import CTAButton from "./CTAButton";
import { getWhatsAppLink } from "@/config/site";

const FINAL_CTA_ARIA_LABEL =
  "Abrir WhatsApp para solicitar análise do caso trabalhista";

export default function FinalCTASection() {
  return (
    <section
      aria-labelledby="cta-final-heading"
      className="bg-gold-base py-16 md:py-28"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 text-center sm:px-6">
        <h2
          id="cta-final-heading"
          className="font-display text-[26px] leading-[1.1] font-extrabold tracking-tight text-bg-base uppercase md:text-[44px]"
        >
          Seus direitos merecem
          <br />
          uma análise técnica
        </h2>
        <p className="font-body text-base leading-relaxed text-bg-base/80 md:text-lg">
          Fale com um advogado e entenda, com clareza, quais são os caminhos
          possíveis para o seu caso. A conversa inicial não compromete você a
          nada.
        </p>
        <CTAButton
          href={getWhatsAppLink()}
          ariaLabel={FINAL_CTA_ARIA_LABEL}
          variant="dark-on-gold"
          external
          showWhatsAppIcon
          className="w-full sm:w-auto"
        >
          Solicitar Análise do Meu Caso
        </CTAButton>
      </div>
    </section>
  );
}
