"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CTA_LABEL, CTA_TEXT } from "@/data/astarte-content";
import { getVisibleSocialProofs, type SocialProof } from "@/data/social-proofs";
import CheckoutButton from "./CheckoutButton";
import SocialProofCard from "./social-proof/SocialProofCard";
import CarouselProgress from "./social-proof/CarouselProgress";
import SocialProofLightbox from "./social-proof/SocialProofLightbox";

export default function SocialProofCarousel() {
  const proofs = getVisibleSocialProofs();
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState<SocialProof | null>(null);

  const scrollToIndex = useCallback(
    (next: number) => {
      const el = trackRef.current;
      if (!el) return;
      const clamped = ((next % proofs.length) + proofs.length) % proofs.length;
      const card = el.children[clamped] as HTMLElement | undefined;
      if (!card) return;
      el.scrollTo({ left: card.offsetLeft - 8, behavior: "smooth" });
      setIndex(clamped);
    },
    [proofs.length]
  );

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    let closest = 0;
    let min = Infinity;
    children.forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - el.scrollLeft);
      if (dist < min) {
        min = dist;
        closest = i;
      }
    });
    setIndex(closest);
  }, []);

  return (
    <section className="section-pad bg-warm !py-10 md:!py-12" aria-labelledby="proof-heading">
      <div className="mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 1, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          Depoimentos reais
        </motion.span>
        <motion.h2
          id="proof-heading"
          initial={{ opacity: 1, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline mt-3 max-w-3xl"
        >
          Elas viram onde estavam errando. Então ele voltou a procurar.
        </motion.h2>
        <motion.p
          initial={{ opacity: 1, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="body-text mt-3 max-w-2xl"
        >
          Relatos de mulheres que conquistaram o homem que amava.
        </motion.p>

        <div
          className="relative mt-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          data-paused={paused || undefined}
        >
          <button
            type="button"
            aria-label="Prova anterior"
            onClick={() => scrollToIndex(index - 1)}
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#E5E7EB] bg-white/95 text-sapphire-deep shadow-sm transition hover:bg-paper md:flex"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Próxima prova"
            onClick={() => scrollToIndex(index + 1)}
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#E5E7EB] bg-white/95 text-sapphire-deep shadow-sm transition hover:bg-paper md:flex"
          >
            →
          </button>

          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex gap-4 overflow-x-auto px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory md:px-12 [&::-webkit-scrollbar]:hidden"
            tabIndex={0}
            role="region"
            aria-label="Carrossel de depoimentos"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                e.preventDefault();
                scrollToIndex(index + 1);
              }
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                scrollToIndex(index - 1);
              }
            }}
          >
            {proofs.map((proof) => (
              <div key={proof.id} className="snap-start flex-shrink-0">
                <SocialProofCard
                  proof={proof}
                  onExpand={(item) => {
                    setPaused(true);
                    setActive(item);
                  }}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between gap-4 px-1 md:px-12">
            <CarouselProgress index={index} total={proofs.length} />
            <div className="flex gap-2 md:hidden">
              <button
                type="button"
                aria-label="Prova anterior"
                onClick={() => scrollToIndex(index - 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-sapphire-deep"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Próxima prova"
                onClick={() => scrollToIndex(index + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-sapphire-deep"
              >
                →
              </button>
            </div>
          </div>
          <p className="mt-2 px-1 font-sans text-xs text-ink/40 md:px-12" aria-live="polite">
            {index + 1} de {proofs.length}
          </p>
        </div>

        <div className="mt-7">
          <CheckoutButton
            location="social-proof"
            label={CTA_LABEL}
            className="min-h-[56px] w-full md:w-auto md:min-w-[320px]"
          >
            {CTA_TEXT}
          </CheckoutButton>
        </div>
      </div>

      <SocialProofLightbox proof={active} onClose={() => setActive(null)} />
    </section>
  );
}
