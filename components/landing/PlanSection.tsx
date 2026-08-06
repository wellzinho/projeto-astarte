"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CTA_METHOD_LABEL,
  methodClosing,
  methodIntro,
  methodVolumes,
} from "@/data/astarte-content";
import CheckoutButton from "./CheckoutButton";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

/** Os cinco volumes oficiais — sem promessa diferente por volume. */
export default function PlanSection() {
  return (
    <section
      className="section-pad bg-paper paper-texture"
      aria-labelledby="method-heading"
      data-analytics-section="method_section"
    >
      <div className="mx-auto max-w-3xl">
        <motion.p {...reveal} className="eyebrow">
          O Método Astarte
        </motion.p>

        <motion.h2 id="method-heading" {...reveal} className="headline mt-3 max-w-2xl">
          Os cinco volumes para reconquistar{" "}
          <span className="italic text-gold">o homem que você ama</span> em 30 dias.
        </motion.h2>

        <motion.p {...reveal} className="body-text mt-4 max-w-xl">
          {methodIntro}
        </motion.p>

        <ol className="mt-7 flex flex-col gap-3 md:mt-8 md:gap-3.5">
          {methodVolumes.map((item, i) => (
            <motion.li
              key={item.volume}
              {...reveal}
              className="flex min-w-0 items-center gap-4 rounded-2xl border border-sapphire-deep/10 bg-warm px-4 py-4 shadow-soft sm:gap-5 sm:px-5"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gold/60 font-serif text-lg text-gold"
              >
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                  {item.volume}
                </p>
                <h3 className="mt-0.5 font-serif text-[1.25rem] leading-tight text-sapphire-deep sm:text-2xl">
                  {item.title}
                </h3>
              </div>
            </motion.li>
          ))}
        </ol>

        <motion.figure {...reveal} className="mt-7 md:mt-8">
          <div className="relative w-full overflow-hidden rounded-2xl border border-gold/40 shadow-editorial">
            <div className="relative aspect-[16/9] w-full bg-sapphire-night">
              <Image
                src="/imagens/body2.png"
                alt="Mockup do Método Astarte — o livro 30 Dias para Reconquistar o Homem que Você Ama ao lado do volume 1 aberto em um tablet"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 92vw, 768px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.figure>

        <motion.p {...reveal} className="body-text mt-6 max-w-xl font-medium text-sapphire-deep">
          {methodClosing}
        </motion.p>

        <motion.div {...reveal} className="mt-5">
          <CheckoutButton
            location="plan"
            label={CTA_METHOD_LABEL}
            className="w-full md:w-auto md:min-w-[360px]"
          >
            {CTA_METHOD_LABEL}
          </CheckoutButton>
        </motion.div>
      </div>
    </section>
  );
}
