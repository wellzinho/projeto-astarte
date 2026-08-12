"use client";

import { motion } from "framer-motion";
import {
  CTA_PROOF_LABEL,
  proofClosing,
  proofIntro,
  proofStats,
  proofTestimonialsTitleBottom,
  proofTestimonialsTitleTop,
  proofTitle,
} from "@/data/astarte-content";
import CheckoutButton from "./CheckoutButton";
import ReviewGroup from "./ReviewGroup";
import TrustLine from "./TrustLine";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

/** Provas — números reais e depoimentos reais e autorizados. */
export default function ProofSection() {
  return (
    <section
      className="section-pad bg-warm"
      aria-labelledby="proof-heading"
      data-analytics-section="proof_section"
    >
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <div className="mx-auto max-w-3xl">
          <motion.p {...reveal} className="eyebrow">
            Provas reais
          </motion.p>

          <motion.h2 id="proof-heading" {...reveal} className="headline mt-3 max-w-2xl">
            {proofTitle}
          </motion.h2>

          <motion.div {...reveal} className="mt-5 flex max-w-xl flex-col gap-1.5">
            {proofIntro.map((line) => (
              <p key={line} className="body-text">
                {line}
              </p>
            ))}
          </motion.div>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {proofStats.map((stat) => (
            <motion.div
              key={stat.value}
              {...reveal}
              className="rounded-2xl border border-gold/40 bg-paper px-5 py-6 text-center shadow-soft"
            >
              <p className="font-serif text-2xl leading-tight text-sapphire-deep md:text-[1.65rem]">
                {stat.value}
              </p>
              <p className="body-text mt-2">{stat.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center md:mt-14">
          <motion.h3 {...reveal} className="headline">
            {proofTestimonialsTitleTop}.{" "}
            <span className="italic text-gold">{proofTestimonialsTitleBottom}.</span>
          </motion.h3>
        </div>

        <div className="mt-8 md:mt-10">
          <ReviewGroup group={2} columns={2} />
        </div>

        <div className="mt-8 md:mt-10">
          <ReviewGroup group={3} carousel />
        </div>

        <motion.div {...reveal} className="mx-auto mt-10 max-w-xl text-center">
          {proofClosing.map((line) => (
            <p key={line} className="font-serif text-xl leading-snug text-sapphire-deep md:text-2xl">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.div {...reveal} className="mx-auto mt-6 flex max-w-xl flex-col items-center gap-2.5">
          <CheckoutButton
            location="proof"
            label={CTA_PROOF_LABEL}
            className="w-full md:w-auto md:min-w-[360px]"
          >
            {CTA_PROOF_LABEL}
          </CheckoutButton>
          <TrustLine />
        </motion.div>
      </div>
    </section>
  );
}
