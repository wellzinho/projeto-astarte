"use client";

import { motion } from "framer-motion";
import { desireClosing, desireItems } from "@/data/astarte-content";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

/**
 * Seção de desejo: composição aspiracional do resultado desejado.
 * Não apresenta as frases como resultados garantidos.
 */
export default function DesireSection() {
  return (
    <section className="section-pad sapphire-field" aria-labelledby="desire-heading">
      <div className="mx-auto max-w-3xl">
        <motion.p {...reveal} className="eyebrow !text-gold-light">
          O que você quer viver novamente
        </motion.p>

        <motion.h2 id="desire-heading" {...reveal} className="headline-light mt-3 max-w-2xl">
          Ele olhando para você e querendo estar com você outra vez.
        </motion.h2>

        <motion.ul {...reveal} className="mt-6 flex flex-col gap-3 md:mt-7">
          {desireItems.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-gold/30 bg-sapphire-deep/55 px-4 py-3.5 font-serif text-lg leading-snug text-warm sm:px-5 sm:text-xl"
            >
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.p {...reveal} className="body-text-light mt-6 max-w-xl">
          {desireClosing}
        </motion.p>
      </div>
    </section>
  );
}
