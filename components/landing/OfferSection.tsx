"use client";

import { motion } from "framer-motion";
import {
  CTA_MAIN_LABEL,
  guaranteeText,
  guaranteeTitle,
  offerCardName,
  offerCardSubname,
  offerEyebrow,
  offerItems,
  offerSubtitle,
  offerTitle,
} from "@/data/astarte-content";
import CheckoutButton from "./CheckoutButton";
import TrustLine from "./TrustLine";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

export default function OfferSection() {
  return (
    <section
      id="oferta"
      className="section-pad sapphire-field"
      aria-labelledby="offer-heading"
      data-analytics-section="offer_section"
    >
      <div className="mx-auto max-w-3xl">
        <motion.p {...reveal} className="eyebrow !text-gold-light mx-auto">
          {offerEyebrow}
        </motion.p>

        <motion.h2
          id="offer-heading"
          {...reveal}
          className="headline-light mx-auto mt-3 max-w-2xl text-center"
        >
          {offerTitle}
        </motion.h2>

        <motion.p {...reveal} className="body-text-light mx-auto mt-4 max-w-xl text-center">
          {offerSubtitle}
        </motion.p>

        <motion.div
          {...reveal}
          className="mx-auto mt-7 max-w-xl rounded-3xl border border-gold/50 bg-sapphire-deep/70 px-5 py-7 text-center shadow-editorial md:mt-9 md:px-10 md:py-9"
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
            {offerCardName}
          </p>
          <p className="mt-1 font-serif text-2xl leading-snug text-warm md:text-[1.75rem]">
            {offerCardSubname}
          </p>

          <div className="gold-divider mx-auto mt-5 max-w-[160px]" aria-hidden="true" />

          <ul className="mx-auto mt-5 flex max-w-xs flex-col gap-2 text-left">
            {offerItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5 body-text-light">
                <span className="mt-0.5 text-gold-light" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-6 font-serif text-6xl leading-none text-gold-light md:text-7xl">
            R$ 37,90
          </p>
          <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-light/80">
            Pagamento único
          </p>

          <div className="mt-5 flex flex-col items-center gap-2.5">
            <CheckoutButton
              location="offer"
              label={CTA_MAIN_LABEL}
              className="min-h-[56px] w-full md:min-w-[320px]"
            >
              {CTA_MAIN_LABEL}
            </CheckoutButton>
            <TrustLine tone="dark" />
          </div>

          <div className="mt-5 rounded-2xl border border-gold/35 bg-sapphire-night/45 px-4 py-4 text-left md:px-5">
            <p className="font-serif text-lg leading-snug text-gold-light md:text-xl">
              {guaranteeTitle}
            </p>
            <p className="mt-2 font-sans text-[15px] leading-relaxed text-warm/80 md:text-[14px]">
              {guaranteeText}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
