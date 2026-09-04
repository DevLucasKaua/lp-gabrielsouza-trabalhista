const MARQUEE_TEXT =
  "DEFESA DOS SEUS DIREITOS • ATENDIMENTO HUMANIZADO • ESTRATÉGIA JURÍDICA • ATUAÇÃO EXCLUSIVA PARA O TRABALHADOR • ANÁLISE TÉCNICA DO SEU CASO • ACOMPANHAMENTO DO INÍCIO AO FIM • ";

export default function Marquee() {
  return (
    <div
      className="flex h-14 items-center overflow-hidden bg-gold-base md:h-16"
      role="img"
      aria-label={MARQUEE_TEXT.replaceAll("•", ",")}
    >
      <div className="flex w-max animate-marquee gap-0 whitespace-nowrap" aria-hidden="true">
        <span className="font-display text-sm font-semibold tracking-wide text-bg-base uppercase md:text-base">
          {MARQUEE_TEXT.repeat(2)}
        </span>
      </div>
    </div>
  );
}
