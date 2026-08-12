"use client";

import { motion } from "framer-motion";
import { pricing } from "@/config/site";
import {
  CTA_PRICE_LABEL,
  priceBatchLabel,
  priceComparisons,
  priceHighlight,
  priceIncluded,
  priceIntro,
  priceMicrocopy,
  priceQuestions,
  priceQuestionsLead,
  priceRealLabel,
  priceTitle,
} from "@/data/astarte-content";
import CheckoutButton from "./CheckoutButton";
import TrustLine from "./TrustLine";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

/** Justificativa do preço + bloco de oferta. */
export default function OfferSection() {
  return (
    <section
      id="oferta"
      className="section-pad sapphire-field"
      aria-labelledby="offer-heading"
      data-analytics-section="offer_section"
    >
      <div className="mx-auto max-w-3xl">
        <motion.p {...reveal} className="eyebrow !text-gold-light">
          A oferta
        </motion.p>

        <motion.h2 id="offer-heading" {...reveal} className="headline-light mt-3 max-w-2xl">
          {priceTitle}
        </motion.h2>

        <motion.div {...reveal} className="mt-5 flex max-w-xl flex-col gap-1.5">
          {priceIntro.map((line) => (
            <p key={line} className="body-text-light">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.p {...reveal} className="mt-6 font-serif text-xl text-gold-light md:text-2xl">
          {priceQuestionsLead}
        </motion.p>

        <motion.ul {...reveal} className="mt-3 flex max-w-xl flex-col gap-2.5">
          {priceQuestions.map((question) => (
            <li
              key={question}
              className="rounded-2xl border border-gold/30 bg-sapphire-deep/55 px-4 py-3.5 font-serif text-lg leading-snug text-warm sm:px-5 sm:text-xl"
            >
              {question}
            </li>
          ))}
        </motion.ul>

        <motion.div
          {...reveal}
          className="mx-auto mt-8 max-w-xl rounded-3xl border border-gold/50 bg-sapphire-deep/70 px-5 py-7 text-center shadow-editorial md:mt-10 md:px-10 md:py-9"
        >
          {pricing.previousPrice && (
            <>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-warm/70">
                {priceRealLabel}
              </p>
              <p className="mt-1 font-serif text-3xl text-warm/60 md:text-4xl">
                <s>{pricing.previousPrice}</s>
              </p>
              <div className="gold-divider mx-auto mt-4 max-w-[160px]" aria-hidden="true" />
              <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
                {priceBatchLabel}
              </p>
            </>
          )}
          <p className="mt-2 font-serif text-6xl leading-none text-gold-light md:text-7xl">
            {pricing.price}
          </p>
          <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-light/80">
            Pagamento único
          </p>

          <div className="mt-5 flex flex-col gap-1 text-left">
            {priceComparisons.map((line) => (
              <p key={line} className="body-text-light">
                {line}
              </p>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-1 text-left">
            {priceIncluded.map((line) => (
              <p key={line} className="body-text-light">
                {line}
              </p>
            ))}
          </div>

          <p className="mt-5 border-l-[3px] border-gold pl-4 text-left font-serif text-lg leading-snug text-gold-light md:text-xl">
            {priceHighlight}
          </p>

          <div className="mt-6 flex flex-col items-center gap-2.5">
            <CheckoutButton
              location="offer"
              label={CTA_PRICE_LABEL}
              className="min-h-[56px] w-full md:min-w-[320px]"
            >
              {CTA_PRICE_LABEL}
            </CheckoutButton>
            <TrustLine tone="dark" text={priceMicrocopy} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
