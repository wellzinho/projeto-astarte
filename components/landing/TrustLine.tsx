import { trustLineText } from "@/data/astarte-content";
import { cn } from "@/lib/cn";

interface TrustLineProps {
  /** `light` = seções claras; `dark` = seções azuis / card de oferta. */
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Linha de confiança reutilizável sob CTAs.
 * Sem selos falsos, sem logos externos, sem ícones de bibliotecas.
 */
export default function TrustLine({ tone = "light", className }: TrustLineProps) {
  return (
    <p
      className={cn(
        "mx-auto max-w-md text-center font-sans text-[13px] leading-snug md:text-[13px]",
        tone === "dark" ? "text-warm/75" : "text-sapphire-deep/65",
        className
      )}
    >
      {trustLineText}
    </p>
  );
}
