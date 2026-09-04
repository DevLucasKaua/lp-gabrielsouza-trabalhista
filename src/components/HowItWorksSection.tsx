import SectionContainer from "./SectionContainer";
import StepItem from "./StepItem";

const STEPS = [
  {
    title: "Fale conosco pelo WhatsApp",
    description:
      "Envie sua mensagem e conte, em poucas palavras, a sua situação.",
  },
  {
    title: "Análise do seu caso",
    description:
      "Um advogado avalia a documentação e a viabilidade jurídica da sua demanda.",
  },
  {
    title: "Estratégia e documentação",
    description:
      "Definimos, junto com você, o caminho mais adequado e organizamos o que for necessário.",
  },
  {
    title: "Acompanhamento até o fim",
    description:
      "Você é informado sobre cada etapa do processo, do protocolo à decisão final.",
  },
] as const;

export default function HowItWorksSection() {
  return (
    <SectionContainer
      id="como-funciona"
      aria-labelledby="como-funciona-heading"
      className="bg-bg-surface-alt"
    >
      <div className="flex flex-col items-center text-center">
        <h2
          id="como-funciona-heading"
          className="mt-4 max-w-2xl font-display text-[26px] leading-[1.1] font-extrabold tracking-tight uppercase md:text-[44px]"
        >
          Do primeiro contato
          <br />
          ao acompanhamento do seu caso
        </h2>
      </div>

      <div className="relative mt-12 flex flex-col gap-8 md:grid md:grid-cols-4 md:gap-6">
        <span
          aria-hidden="true"
          className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px bg-border-hairline md:block"
        />
        {STEPS.map((step, index) => (
          <StepItem
            key={step.title}
            number={index + 1}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
