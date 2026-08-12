"use client";

import { motion } from "framer-motion";
import {
  CTA_METHOD_LABEL,
  methodClosingLines,
  methodDiscoverLead,
  methodDiscoverList,
  methodHighlight,
  methodIntroLines,
  methodIntroTurn,
  methodTitleBottom,
  methodTitleTop,
} from "@/data/astarte-content";
import CheckoutButton from "./CheckoutButton";
import TrustLine from "./TrustLine";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

/** O que é o Método Astarte — apresentação do método como plano de ação. */
export default function MethodSection() {
  return (
    <section
      className="section-pad bg-paper paper-texture"
      aria-labelledby="method-heading"
      data-analytics-section="method_section"
    >
      <div className="mx-auto max-w-3xl">
        <motion.p {...reveal} className="eyebrow">
          O que é o Método Astarte
        </motion.p>

        <motion.h2 id="method-heading" {...reveal} className="headline mt-3 max-w-2xl">
          {methodTitleTop}.{" "}
          <span className="italic text-gold">{methodTitleBottom}.</span>
        </motion.h2>

        <motion.div {...reveal} className="mt-5 flex max-w-xl flex-col gap-1.5">
          {methodIntroLines.map((line) => (
            <p key={line} className="font-serif text-lg leading-snug text-sapphire-deep/85">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.div {...reveal} className="mt-5 flex max-w-xl flex-col gap-1.5">
          {methodIntroTurn.map((line) => (
            <p key={line} className="body-text font-medium text-sapphire-deep">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.p
          {...reveal}
          className="mt-6 max-w-2xl rounded-2xl border border-gold/40 bg-warm px-5 py-4 font-serif text-xl leading-snug text-sapphire-deep shadow-soft md:text-2xl"
        >
          {methodHighlight}
        </motion.p>

        <motion.p {...reveal} className="body-text mt-6 max-w-xl font-medium text-sapphire-deep">
          {methodDiscoverLead}
        </motion.p>

        <motion.ul {...reveal} className="mt-3 flex max-w-xl flex-col gap-2">
          {methodDiscoverList.map((item) => (
            <li key={item} className="flex items-start gap-2.5 body-text">
              <span className="mt-0.5 text-gold" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.blockquote
          {...reveal}
          className="mt-6 max-w-xl border-l-[3px] border-gold pl-4 sm:pl-5"
        >
          {methodClosingLines.map((line) => (
            <p key={line} className="font-serif text-lg leading-snug text-sapphire-deep md:text-xl">
              {line}
            </p>
          ))}
        </motion.blockquote>

        <motion.div {...reveal} className="mt-6 flex flex-col gap-2.5">
          <CheckoutButton
            location="method"
            label={CTA_METHOD_LABEL}
            className="w-full md:w-auto md:min-w-[360px]"
          >
            {CTA_METHOD_LABEL}
          </CheckoutButton>
          <TrustLine className="md:text-left md:mx-0" />
        </motion.div>
      </div>
    </section>
  );
}
