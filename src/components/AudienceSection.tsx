import SectionContainer from "./SectionContainer";
import AudienceCard from "./AudienceCard";
import {
  StethoscopeIcon,
  BandageIcon,
  PregnantIcon,
  ElderlyIcon,
} from "./icons/AudienceIcons";

const AUDIENCE = [
  {
    title: "Quem adoeceu por causa do trabalho",
    description:
      "Trabalhadores que desenvolveram doenças físicas ou emocionais ligadas à atividade ou ao ambiente de trabalho.",
    Icon: StethoscopeIcon,
  },
  {
    title: "Quem sofreu acidente de trabalho",
    description:
      "Quem se acidentou no trabalho ou no trajeto e não teve seus direitos respeitados pelo empregador.",
    Icon: BandageIcon,
  },
  {
    title: "Gestantes e mães",
    description:
      "Mulheres demitidas durante a gravidez ou o período de estabilidade, ou pressionadas a abrir mão de seus direitos.",
    Icon: PregnantIcon,
  },
  {
    title: "Quem saiu do emprego sem receber",
    description:
      "Trabalhadores demitidos — com ou sem justa causa — que não receberam corretamente as verbas rescisórias, e quem trabalhou sem carteira assinada.",
    Icon: ElderlyIcon,
  },
] as const;

export default function AudienceSection() {
  return (
    <SectionContainer
      id="para-quem-e"
      aria-labelledby="para-quem-heading"
      className="bg-gold-base"
    >
      <div className="flex flex-col items-center text-center">
        <h2
          id="para-quem-heading"
          className="mt-4 max-w-xl font-display text-[26px] leading-[1.1] font-extrabold tracking-tight text-bg-base uppercase text-balance md:text-[44px]"
        >
          Este atendimento foi
          <br />
          pensado para você
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {AUDIENCE.map((profile) => (
          <AudienceCard
            key={profile.title}
            title={profile.title}
            description={profile.description}
            Icon={profile.Icon}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
