export interface CronogramaItem {
  days: string;
  label: string;
}

interface CronogramaTimelineProps {
  items: CronogramaItem[];
}

export default function CronogramaTimeline({ items }: CronogramaTimelineProps) {
  return (
    <ol className="relative mx-auto flex max-w-2xl flex-col items-center gap-12 md:gap-16">
      <div
        className="absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-gradient-to-b from-gold/10 via-gold/35 to-gold/10"
        aria-hidden="true"
      />

      {items.map((item, i) => (
        <li
          key={item.days}
          className="relative flex w-full max-w-lg flex-col items-center text-center"
        >
          <span
            className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-gold bg-white font-sans text-[11px] font-semibold tracking-wider text-gold-dark shadow-soft"
            aria-hidden="true"
          >
            {String(i + 1).padStart(2, "0")}
          </span>

          <article className="mt-5 w-full rounded-2xl border border-midnight/[0.07] bg-section/70 px-7 py-6 md:px-9 md:py-8 shadow-soft">
            <span className="day-badge">{item.days}</span>
            <p className="font-serif text-xl md:text-[1.35rem] text-midnight mt-4 leading-snug">
              {item.label}
            </p>
          </article>
        </li>
      ))}
    </ol>
  );
}
