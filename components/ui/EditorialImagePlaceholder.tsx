import { cn } from "@/lib/cn";

type Aspect = "4/5" | "16/10" | "3/4" | "1/1" | "9/16";

const aspectClass: Record<Aspect, string> = {
  "4/5": "aspect-[4/5]",
  "16/10": "aspect-[16/10]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
  "9/16": "aspect-[9/16]",
};

const variantClass = {
  sapphire: "from-sapphire-deep via-sapphire-night to-sapphire-glow",
  paper: "from-paper via-warm to-paper",
  night: "from-ink via-sapphire-deep to-sapphire-night",
  gold: "from-sapphire-night via-sapphire-deep to-[#1a2744]",
} as const;

interface EditorialImagePlaceholderProps {
  label: string;
  description: string;
  aspectRatio?: Aspect;
  variant?: keyof typeof variantClass;
  futurePath: string;
  className?: string;
}

export default function EditorialImagePlaceholder({
  label,
  description,
  aspectRatio = "4/5",
  variant = "sapphire",
  futurePath,
  className = "",
}: EditorialImagePlaceholderProps) {
  return (
    <div
      data-placeholder={futurePath}
      role="img"
      aria-label={`${label}. ${description}`}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-gold/30 shadow-editorial",
        aspectClass[aspectRatio],
        "bg-gradient-to-br",
        variantClass[variant],
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(224,198,138,0.2), transparent 42%), radial-gradient(circle at 80% 85%, rgba(23,90,143,0.35), transparent 48%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-5 text-center">
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold-light/90">
          {label}
        </span>
        <span className="max-w-[15rem] font-serif text-base leading-snug text-warm/90 md:text-lg">
          {description}
        </span>
      </div>
      <div className="pointer-events-none absolute inset-x-5 bottom-4 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent" />
    </div>
  );
}
