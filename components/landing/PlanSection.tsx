"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { movements, movementsClosing, movementsTitle } from "@/data/astarte-content";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

/** Os 30 dias — cinco movimentos de um único protocolo (não são cinco livros). */
export default function PlanSection() {
  return (
    <section
      className="section-pad bg-paper paper-texture"
      aria-labelledby="movements-heading"
      data-analytics-section="movements_section"
    >
      <div className="mx-auto max-w-3xl">
        <motion.p {...reveal} className="eyebrow">
          Os 30 dias
        </motion.p>

        <motion.h2 id="movements-heading" {...reveal} className="headline mt-3 max-w-2xl">
          {movementsTitle}
        </motion.h2>

        <ol className="mt-7 flex flex-col gap-3 md:mt-8 md:gap-3.5">
          {movements.map((item, i) => (
            <motion.li
              key={item.movement}
              {...reveal}
              className="flex min-w-0 items-start gap-4 rounded-2xl border border-sapphire-deep/10 bg-warm px-4 py-4 shadow-soft sm:gap-5 sm:px-5"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-gold/60 font-serif text-lg text-gold"
              >
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                  {item.movement}
                </p>
                <h3 className="mt-0.5 font-serif text-[1.25rem] leading-tight text-sapphire-deep sm:text-2xl">
                  {item.title}
                </h3>
                <p className="body-text mt-1.5">{item.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>

        <motion.figure {...reveal} className="mt-7 md:mt-8">
          <div className="relative w-full overflow-hidden rounded-2xl border border-gold/40 shadow-editorial">
            <div className="relative aspect-[16/9] w-full bg-sapphire-night">
              <Image
                src="/imagens/body2.png"
                alt="Mockup do Método Astarte — o protocolo 30 Dias para Reconquistar o Homem que Você Ama aberto em um tablet"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 92vw, 768px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.figure>

        <motion.div {...reveal} className="mt-6 flex max-w-xl flex-col gap-1.5">
          {movementsClosing.map((line) => (
            <p key={line} className="body-text font-medium text-sapphire-deep">
              {line}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
