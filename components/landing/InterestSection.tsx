"use client";

import { motion } from "framer-motion";
import {
  principleExplanation,
  principleHighlightLead,
  principleHighlightQuote,
  principleHighlightText,
  principleIntro,
  principleName,
  principleOrderLead,
  principleResult,
  principleSteps,
  principleTitleBottom,
  principleTitleTop,
} from "@/data/astarte-content";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

/** O Princípio Astarte — o mecanismo simples do método. */
export default function InterestSection() {
  return (
    <section className="section-pad sapphire-field" aria-labelledby="principle-heading">
      <div className="mx-auto max-w-3xl">
        <motion.p {...reveal} className="eyebrow !text-gold-light">
          {principleName}
        </motion.p>

        <motion.h2 id="principle-heading" {...reveal} className="headline-light mt-3 max-w-2xl">
          {principleTitleTop}.{" "}
          <span className="italic text-gold-light">{principleTitleBottom}.</span>
        </motion.h2>

        <motion.div {...reveal} className="mt-5 flex max-w-xl flex-col gap-1.5">
          {principleIntro.map((line) => (
            <p key={line} className="body-text-light">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.p {...reveal} className="mt-6 font-serif text-xl text-gold-light md:text-2xl">
          {principleOrderLead}
        </motion.p>

        <div className="mt-4 flex flex-col gap-3">
          {principleSteps.map((step, i) => (
            <motion.div
              key={step.label}
              {...reveal}
              className="flex min-w-0 items-start gap-4 rounded-2xl border border-gold/30 bg-sapphire-deep/55 px-4 py-4 sm:gap-5 sm:px-5"
            >
              <span
                aria-hidden="true"
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-gold/60 font-serif text-base text-gold-light"
              >
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-light">
                  {step.label}
                </p>
                <p className="mt-1 font-serif text-lg leading-snug text-warm sm:text-xl">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...reveal} className="mt-6 flex max-w-xl flex-col gap-1.5">
          {principleResult.map((line) => (
            <p key={line} className="font-serif text-lg leading-snug text-warm sm:text-xl">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.blockquote
          {...reveal}
          className="mt-7 max-w-xl border-l-[3px] border-gold pl-4 sm:pl-5"
        >
          <p className="font-serif text-lg leading-snug text-warm md:text-xl">
            {principleHighlightLead}
          </p>
          <p className="mt-1 font-serif text-lg leading-snug text-warm md:text-xl">
            {principleHighlightText}
          </p>
          <p className="mt-2 font-serif text-2xl leading-snug text-gold-light md:text-3xl">
            {principleHighlightQuote}
          </p>
        </motion.blockquote>

        <motion.p {...reveal} className="body-text-light mt-6 max-w-xl">
          {principleExplanation}
        </motion.p>
      </div>
    </section>
  );
}
