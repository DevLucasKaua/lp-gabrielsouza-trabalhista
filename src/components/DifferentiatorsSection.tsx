import SectionContainer from "./SectionContainer";
import WhyUsAccordion from "./WhyUsAccordion";

export default function DifferentiatorsSection() {
  return (
    <SectionContainer
      id="diferenciais"
      aria-labelledby="diferenciais-heading"
      className="bg-bg-base"
    >
      <div className="flex flex-col items-center text-center">
        <h2
          id="diferenciais-heading"
          className="mt-4 font-display text-[26px] leading-[1.1] font-extrabold tracking-tight uppercase md:text-[44px]"
        >
          Advocacia com lado definido
        </h2>
      </div>

      <div className="mt-12">
        <WhyUsAccordion />
      </div>
    </SectionContainer>
  );
}
