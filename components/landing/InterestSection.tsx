"use client";

import { motion } from "framer-motion";
import {
  CTA_MAIN_LABEL,
  principleEyebrow,
  principleHighlight,
  principleText,
  principleTitle,
} from "@/data/astarte-content";
import CheckoutButton from "./CheckoutButton";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

/** Princípio Astarte — seção curta, emocional e visualmente impactante. */
export default function InterestSection() {
  return (
    <section className="section-pad sapphire-field" aria-labelledby="principle-heading">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p {...reveal} className="eyebrow !text-gold-light mx-auto">
          {principleEyebrow}
        </motion.p>

        <motion.h2
          id="principle-heading"
          {...reveal}
          className="headline-light mx-auto mt-3 max-w-2xl"
        >
          {principleTitle}
        </motion.h2>

        <motion.p {...reveal} className="body-text-light mx-auto mt-5 max-w-xl">
          {principleText}
        </motion.p>

        <motion.blockquote
          {...reveal}
          className="quote-editorial-light mx-auto mt-6 max-w-xl border-l-[3px] border-gold pl-4 text-left sm:pl-5"
        >
          {principleHighlight}
        </motion.blockquote>

        <motion.div {...reveal} className="mt-7 md:mt-8">
          <CheckoutButton
            location="interest"
            label={CTA_MAIN_LABEL}
            className="w-full md:w-auto md:min-w-[320px]"
          >
            {CTA_MAIN_LABEL}
          </CheckoutButton>
        </motion.div>
      </div>
    </section>
  );
}
