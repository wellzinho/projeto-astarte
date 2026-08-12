"use client";

import { motion } from "framer-motion";
import { pricing } from "@/config/site";
import {
  CTA_FINAL_LABEL,
  finalMicrocopy,
  finalPhrase,
  finalText,
  finalTitle,
  finalTopLine,
} from "@/data/astarte-content";
import CheckoutButton from "./CheckoutButton";
import TrustLine from "./TrustLine";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

/** Fechamento emocional — última chamada. */
export default function FinalCTA() {
  return (
    <section id="cta-final" className="section-pad sapphire-field" aria-labelledby="final-heading">
      <div className="mx-auto max-w-2xl text-center">
        <motion.p {...reveal} className="eyebrow !text-gold-light mx-auto max-w-[52ch]">
          {finalTopLine}
        </motion.p>

        <motion.h2 id="final-heading" {...reveal} className="headline-light mt-3">
          {finalTitle}
        </motion.h2>

        <motion.div {...reveal} className="mx-auto mt-5 flex max-w-xl flex-col gap-1.5">
          {finalText.map((line) => (
            <p key={line} className="body-text-light">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.div {...reveal} className="mt-7">
          {pricing.previousPrice && (
            <p className="font-serif text-xl text-warm/60 md:text-2xl">
              De <s>{pricing.previousPrice}</s>
            </p>
          )}
          <p className="mt-1 font-serif text-4xl text-gold-light md:text-5xl">
            Por {pricing.price}
            {pricing.promoActive ? " neste lote" : ""}
          </p>
          <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-light/80">
            Pagamento único
          </p>
        </motion.div>

        <motion.div {...reveal} className="mt-5 flex flex-col items-center gap-2.5">
          <CheckoutButton
            location="final"
            label={CTA_FINAL_LABEL}
            className="min-h-[54px] w-full md:w-auto md:min-w-[340px]"
          >
            {CTA_FINAL_LABEL}
          </CheckoutButton>
          <TrustLine tone="dark" text={finalMicrocopy} />
        </motion.div>

        <motion.div {...reveal} className="mx-auto mt-8 flex max-w-xl flex-col gap-1">
          {finalPhrase.map((line) => (
            <p key={line} className="font-serif text-lg leading-snug text-warm md:text-xl">
              {line}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
