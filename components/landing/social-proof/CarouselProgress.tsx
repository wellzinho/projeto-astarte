import { cn } from "@/lib/cn";

export default function CarouselProgress({
  index,
  total,
}: {
  index: number;
  total: number;
}) {
  return (
    <div className="flex items-center gap-2" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "h-1.5 rounded-full transition-all",
            i === index ? "w-6 bg-gold" : "w-1.5 bg-gold/30"
          )}
        />
      ))}
    </div>
  );
}
