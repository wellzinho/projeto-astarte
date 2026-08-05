"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  bonusLabel,
  bonusText,
  bonusTitle,
  CTA_MAIN_LABEL,
  receiveList,
} from "@/data/astarte-content";
import CheckoutButton from "./CheckoutButton";
import TrustLine from "./TrustLine";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

export default function ReceiveSection() {
  return (
    <section className="section-pad bg-paper" aria-labelledby="receive-heading">
      <div className="mx-auto max-w-6xl">
        <motion.h2 id="receive-heading" {...reveal} className="headline max-w-3xl">
          Tudo o que você recebe para começar sua{" "}
          <span className="italic text-gold">reconquista hoje</span>.
        </motion.h2>

        <div className="mt-6 grid grid-cols-1 items-center gap-8 md:mt-8 md:grid-cols-2 md:gap-12">
          <motion.figure {...reveal} className="min-w-0">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-gold/30 shadow-editorial">
              <div className="relative aspect-[3/4] w-full bg-sapphire-night">
                <Image
                  src="/imagens/body-novo.png"
                  alt="As capas oficiais dos cinco volumes do Método Astarte e o bônus Hipnose da Reconquista"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <figcaption className="mt-3 text-center font-serif text-xl text-sapphire-deep">
              R$ 37,90
            </figcaption>
          </motion.figure>

          <motion.div {...reveal} className="min-w-0">
            <ul className="flex flex-col gap-2.5">
              {receiveList.map((item) => (
                <li key={item} className="flex items-start gap-2.5 body-text">
                  <span className="mt-0.5 text-gold" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-2xl border border-gold/40 bg-warm px-4 py-4 shadow-soft">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                {bonusLabel}
              </p>
              <p className="mt-1 font-serif text-xl text-sapphire-deep sm:text-2xl">
                {bonusTitle}
              </p>
              <p className="body-text mt-2">{bonusText}</p>
            </div>

            <div className="mt-5 flex flex-col gap-2.5">
              <CheckoutButton
                location="receive"
                label={CTA_MAIN_LABEL}
                className="w-full md:w-auto md:min-w-[320px]"
              >
                {CTA_MAIN_LABEL}
              </CheckoutButton>
              <TrustLine className="md:text-left md:mx-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
