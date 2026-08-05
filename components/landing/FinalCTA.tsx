"use client";

import { motion } from "framer-motion";
import {
  CTA_MAIN_LABEL,
  finalEyebrow,
  finalPriceLine,
  finalSubtitle,
  finalTitle,
} from "@/data/astarte-content";
import CheckoutButton from "./CheckoutButton";
import TrustLine from "./TrustLine";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

export default function FinalCTA() {
  return (
    <section id="cta-final" className="section-pad sapphire-field" aria-labelledby="final-heading">
      <div className="mx-auto max-w-2xl text-center">
        <motion.p {...reveal} className="eyebrow !text-gold-light mx-auto">
          {finalEyebrow}
        </motion.p>

        <motion.h2 id="final-heading" {...reveal} className="headline-light mt-3">
          {finalTitle}
        </motion.h2>

        <motion.p {...reveal} className="body-text-light mx-auto mt-4 max-w-xl">
          {finalSubtitle}
        </motion.p>

        <motion.p {...reveal} className="mt-6 font-serif text-4xl text-gold-light md:text-5xl">
          {finalPriceLine}
        </motion.p>

        <motion.div {...reveal} className="mt-5 flex flex-col items-center gap-2.5">
          <CheckoutButton
            location="final"
            label={CTA_MAIN_LABEL}
            className="min-h-[54px] w-full md:w-auto md:min-w-[340px]"
          >
            {CTA_MAIN_LABEL}
          </CheckoutButton>
          <TrustLine tone="dark" />
        </motion.div>
      </div>
    </section>
  );
}
