interface ProductCoverProps {
  label: string;
  title: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  isBonus?: boolean;
}

const sizeMap = {
  sm: "cover-mockup-sm flex flex-col justify-between",
  md: "cover-mockup-md flex flex-col justify-between",
  lg: "cover-mockup-lg flex flex-col justify-between",
  xl: "cover-mockup-xl flex flex-col justify-between",
};

export default function ProductCover({
  label,
  title,
  size = "md",
  className = "",
  isBonus = false,
}: ProductCoverProps) {
  return (
    <div
      className={`cover-mockup ${sizeMap[size]} ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between gap-1">
        <span className="font-sans text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-gold-light/80">
          {isBonus ? "Bônus" : "Volume"}
        </span>
        <span className="w-3 h-px bg-gold/40" />
      </div>

      <div className="flex-1 flex flex-col justify-center py-1">
        <span className="font-serif text-[10px] md:text-xs text-gold-light/60 leading-none mb-1">
          {label}
        </span>
        <p className="font-serif text-[11px] md:text-sm text-white/95 leading-tight tracking-tight">
          {title}
        </p>
      </div>

      <div className="flex items-center gap-1">
        <span className="w-1 h-1 rounded-full bg-gold/50" />
        <span className="flex-1 h-px bg-gold/20" />
        <span className="font-sans text-[7px] text-white/30 uppercase tracking-widest">
          Astarte
        </span>
      </div>
    </div>
  );
}
