interface StepItemProps {
  number: number;
  title: string;
  description: string;
}

export default function StepItem({
  number,
  title,
  description,
}: StepItemProps) {
  return (
    <div className="relative flex gap-4 md:flex-col md:items-center md:text-center">
      <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-base font-display text-lg font-extrabold text-bg-base">
        {number}
      </span>
      <div className="md:mt-4">
        <h3 className="font-display text-lg font-bold text-text-primary">
          {title}
        </h3>
        <p className="mt-1 font-body text-sm leading-relaxed text-text-secondary md:text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
}
