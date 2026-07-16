export interface CronogramaItem {
  days: string;
  title: string;
  desc: string;
}

interface CronogramaTimelineProps {
  items: CronogramaItem[];
}

export default function CronogramaTimeline({ items }: CronogramaTimelineProps) {
  return (
    <>
      <ol className="how-timeline md:hidden">
        {items.map((item, i) => (
          <li key={item.days} className="how-timeline-item">
            <span className="how-timeline-number" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="how-timeline-content">
              <span className="day-badge">{item.days}</span>
              <h3 className="font-serif text-xl text-midnight leading-snug mt-3">
                {item.title}
              </h3>
              <p className="text-body-muted mt-2">{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <ol className="hidden md:grid md:grid-cols-5 md:gap-4 lg:gap-5 list-none p-0 m-0">
        {items.map((item, i) => (
          <li key={item.days} className="flex flex-col">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-white font-sans text-[11px] font-semibold tracking-wider text-gold-dark shadow-soft mb-4"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <article className="premium-card !p-5 lg:!p-6 flex-1 border-midnight/[0.06]">
              <span className="day-badge text-[10px]">{item.days}</span>
              <h3 className="font-serif text-lg lg:text-xl text-midnight leading-snug mt-3">
                {item.title}
              </h3>
              <p className="text-body-sm mt-2">{item.desc}</p>
            </article>
          </li>
        ))}
      </ol>
    </>
  );
}
