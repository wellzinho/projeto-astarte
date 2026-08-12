import { PROMO_BAR_FINAL_PHASE, pricing } from "@/config/site";
import {
  promoBarFinalText,
  promoBarFinalTitle,
  promoBarText,
  promoBarTitle,
} from "@/data/astarte-content";

/**
 * Barra superior do lote promocional.
 * Sem contador e sem quantidade restante — apenas o fato real do lote.
 * A fase final ("últimos acessos") é ativada manualmente em config/site.ts.
 */
export default function PromoBar() {
  if (!pricing.promoActive) return null;

  const title = PROMO_BAR_FINAL_PHASE ? promoBarFinalTitle : promoBarTitle;
  const text = PROMO_BAR_FINAL_PHASE ? promoBarFinalText : promoBarText;

  return (
    <aside
      className="w-full bg-sapphire-night px-4 py-2.5 text-center"
      aria-label="Aviso do lote promocional"
    >
      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-light md:text-xs">
        {title}
      </p>
      <p className="mt-0.5 font-sans text-[12px] leading-snug text-warm/85 md:text-[13px]">
        {text}
      </p>
    </aside>
  );
}
