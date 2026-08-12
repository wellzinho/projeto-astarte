"use client";

import { motion } from "framer-motion";
import {
  CTA_GUARANTEE_LABEL,
  guaranteeHighlight,
  guaranteeIntro,
  guaranteeMicrocopy,
  guaranteeNotList,
  guaranteeRefund,
  guaranteeSectionTitle,
  guaranteeSteps,
} from "@/data/astarte-content";
import CheckoutButton from "./CheckoutButton";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

/** Garantia de reembolso de 7 dias — sem promessa de resultado garantido. */
export default function GuaranteeSection() {
  return (
    <section
      className="section-pad bg-paper paper-texture"
      aria-labelledby="guarantee-heading"
      data-analytics-section="guarantee_section"
    >
      <div className="mx-auto max-w-3xl">
        <motion.p {...reveal} className="eyebrow">
          Garantia
        </motion.p>

        <motion.h2 id="guarantee-heading" {...reveal} className="headline mt-3 max-w-2xl">
          {guaranteeSectionTitle}
        </motion.h2>

        <motion.p {...reveal} className="body-text mt-5 max-w-xl">
          {guaranteeIntro}
        </motion.p>

        <motion.div {...reveal} className="mt-4 flex max-w-xl flex-col gap-1.5">
          {guaranteeSteps.map((line) => (
            <p key={line} className="font-serif text-lg leading-snug text-sapphire-deep">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.div
          {...reveal}
          className="mt-6 max-w-xl rounded-2xl border border-gold/40 bg-warm px-5 py-5 shadow-soft"
        >
          {guaranteeRefund.map((line) => (
            <p key={line} className="body-text font-medium text-sapphire-deep">
              {line}
            </p>
          ))}
          <div className="mt-3 flex flex-col gap-0.5">
            {guaranteeNotList.map((line) => (
              <p key={line} className="body-text">
                {line}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.p
          {...reveal}
          className="mt-6 max-w-xl border-l-[3px] border-gold pl-4 font-serif text-xl leading-snug text-sapphire-deep sm:pl-5 md:text-2xl"
        >
          {guaranteeHighlight}
        </motion.p>

        <motion.div {...reveal} className="mt-6 flex flex-col gap-2.5">
          <CheckoutButton
            location="guarantee"
            label={CTA_GUARANTEE_LABEL}
            className="w-full md:w-auto md:min-w-[380px]"
          >
            {CTA_GUARANTEE_LABEL}
          </CheckoutButton>
          <p className="font-sans text-[13px] leading-snug text-sapphire-deep/65 md:text-left">
            {guaranteeMicrocopy}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
