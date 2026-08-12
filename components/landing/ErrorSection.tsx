"use client";

import { motion } from "framer-motion";
import {
  errorClosing,
  errorConsequences,
  errorHighlight,
  errorIntro,
  errorList,
  errorQuestion,
  errorQuestionLead,
  errorTitle,
} from "@/data/astarte-content";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

/** O erro que mata o desejo — identificação da dor e do erro. */
export default function ErrorSection() {
  return (
    <section
      className="section-pad bg-paper paper-texture"
      aria-labelledby="error-heading"
      data-analytics-section="error_section"
    >
      <div className="mx-auto max-w-3xl">
        <motion.p {...reveal} className="eyebrow">
          O erro que mata o desejo
        </motion.p>

        <motion.h2 id="error-heading" {...reveal} className="headline mt-3 max-w-2xl">
          {errorTitle}
        </motion.h2>

        <motion.p {...reveal} className="body-text mt-5 max-w-xl font-medium text-sapphire-deep">
          {errorIntro}
        </motion.p>

        <motion.ul {...reveal} className="mt-4 flex max-w-xl flex-col gap-1.5">
          {errorList.map((item) => (
            <li key={item} className="font-serif text-lg leading-snug text-sapphire-deep/85">
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.p {...reveal} className="body-text mt-5 max-w-xl">
          {errorQuestionLead}
        </motion.p>

        <motion.blockquote
          {...reveal}
          className="mt-3 max-w-xl border-l-[3px] border-gold pl-4 font-serif text-xl leading-snug text-sapphire-deep sm:pl-5 md:text-2xl"
        >
          {errorQuestion}
        </motion.blockquote>

        <motion.div {...reveal} className="mt-5 flex max-w-xl flex-col gap-1.5">
          {errorConsequences.map((line) => (
            <p key={line} className="body-text">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.p
          {...reveal}
          className="mt-6 max-w-xl rounded-2xl border border-gold/40 bg-warm px-5 py-4 font-serif text-xl leading-snug text-sapphire-deep shadow-soft md:text-2xl"
        >
          {errorHighlight}
        </motion.p>

        <motion.div {...reveal} className="mt-5 flex max-w-xl flex-col gap-1.5">
          {errorClosing.map((line) => (
            <p key={line} className="body-text font-medium text-sapphire-deep">
              {line}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
