import SectionContainer from "./SectionContainer";
import ServiceCard from "./ServiceCard";
import CTAButton from "./CTAButton";
import { getWhatsAppLink } from "@/config/site";
import {
  HeartIcon,
  PulseIcon,
  ShieldAlertIcon,
  ShieldIcon,
  HandHeartIcon,
  BabyIcon,
  WheatIcon,
  BuildingIcon,
} from "./icons/ServiceIcons";

const SERVICES = [
  {
    title: "Verbas Rescisórias",
    description:
      "Conferência e cobrança de tudo o que é devido na saída do emprego: saldo de salário, aviso prévio, férias, 13º, FGTS e multa de 40%.",
    Icon: HandHeartIcon,
    large: true,
  },
  {
    title: "Horas Extras e Adicionais",
    description:
      "Cobrança de horas extras não pagas e de adicionais noturno, de insalubridade e de periculosidade devidos ao trabalhador.",
    Icon: PulseIcon,
  },
  {
    title: "Assédio Moral e Sexual",
    description:
      "Responsabilização do empregador por humilhações, perseguições e condutas abusivas no ambiente de trabalho, com pedido de indenização.",
    Icon: ShieldAlertIcon,
    accent: "gold",
  },
  {
    title: "Reversão de Justa Causa",
    description:
      "Contestação de demissões por justa causa aplicadas de forma indevida ou desproporcional.",
    Icon: ShieldIcon,
  },
  {
    title: "Direitos da Gestante",
    description:
      "Defesa da estabilidade da gestante e da licença-maternidade, com reintegração ou indenização em caso de demissão irregular.",
    Icon: BabyIcon,
    accent: "deep",
  },
  {
    title: "Acidente de Trabalho e Doença Ocupacional",
    description:
      "Indenizações e estabilidade para quem sofreu acidente de trabalho ou desenvolveu doença física ou emocional ligada à atividade.",
    Icon: HeartIcon,
    large: true,
  },
  {
    title: "Trabalhador Rural",
    description:
      "Defesa dos direitos de trabalhadores do campo, incluindo verbas não pagas e condições irregulares de trabalho.",
    Icon: WheatIcon,
    large: true,
    accent: "warm",
  },
  {
    title: "Reconhecimento de Vínculo",
    description:
      "Registro em carteira e direitos retroativos para quem trabalhou sem carteira assinada ou como PJ em relação de emprego disfarçada.",
    Icon: BuildingIcon,
    large: true,
  },
] as const;

export default function ServicesGrid() {
  return (
    <SectionContainer
      id="areas-de-atuacao"
      aria-labelledby="areas-heading"
      className="bg-bg-base"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
        <div>
          <h2
            id="areas-heading"
            className="mt-4 font-display text-[26px] leading-[1.1] font-extrabold tracking-tight uppercase md:text-[44px]"
          >
            O seu caso pode estar
            <br />
            em uma dessas situações
          </h2>
        </div>
        <div>
          <p className="font-body text-base leading-relaxed text-text-secondary md:text-lg">
            Atuamos em todas as etapas da relação de trabalho — durante o
            contrato, na demissão e depois dela, da negociação ao processo na
            Justiça do Trabalho.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton
              href={getWhatsAppLink()}
              ariaLabel="Falar com um advogado pelo WhatsApp sobre o meu caso"
              variant="primary"
              size="sm"
              external
              showWhatsAppIcon
              showChevron={false}
              className="w-full sm:w-auto"
            >
              Falar com um Advogado
            </CTAButton>
            <CTAButton
              href="#contato"
              ariaLabel="Ver informações de contato do escritório"
              variant="secondary"
              size="sm"
              showChevron={false}
              className="w-full sm:w-auto"
            >
              Ver Contato
            </CTAButton>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:gap-3 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            Icon={service.Icon}
            large={"large" in service ? service.large : false}
            accent={"accent" in service ? service.accent : undefined}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
