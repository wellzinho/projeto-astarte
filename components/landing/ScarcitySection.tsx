"use client";

import { motion } from "framer-motion";
import {
  CTA_SCARCITY_LABEL,
  scarcityHighlightBottom,
  scarcityHighlightTop,
  scarcityText,
  scarcityTitle,
} from "@/data/astarte-content";
import CheckoutButton from "./CheckoutButton";
import TrustLine from "./TrustLine";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

/**
 * Escassez real — sem contador, sem quantidade inventada.
 * O fim do lote é controlado manualmente em config/site.ts.
 */
export default function ScarcitySection() {
  return (
    <section
      className="section-pad sapphire-field"
      aria-labelledby="scarcity-heading"
      data-analytics-section="scarcity_section"
    >
      <div className="mx-auto max-w-3xl">
        <motion.p {...reveal} className="eyebrow !text-gold-light">
          Escassez real
        </motion.p>

        <motion.h2 id="scarcity-heading" {...reveal} className="headline-light mt-3 max-w-2xl">
          {scarcityTitle}
        </motion.h2>

        <motion.div {...reveal} className="mt-5 flex max-w-xl flex-col gap-1.5">
          {scarcityText.map((line) => (
            <p key={line} className="body-text-light">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.div
          {...reveal}
          className="mt-7 max-w-xl rounded-2xl border border-gold/40 bg-sapphire-deep/60 px-5 py-5 text-center"
        >
          <p className="font-serif text-xl uppercase tracking-[0.04em] text-gold-light md:text-2xl">
            {scarcityHighlightTop}
          </p>
          <p className="mt-1 font-serif text-lg text-warm/85 md:text-xl">
            {scarcityHighlightBottom}
          </p>
        </motion.div>

        <motion.div {...reveal} className="mt-6 flex flex-col gap-2.5">
          <CheckoutButton
            location="scarcity"
            label={CTA_SCARCITY_LABEL}
            className="w-full md:w-auto md:min-w-[380px]"
          >
            {CTA_SCARCITY_LABEL}
          </CheckoutButton>
          <TrustLine tone="dark" className="md:text-left md:mx-0" />
        </motion.div>
      </div>
    </section>
  );
}
