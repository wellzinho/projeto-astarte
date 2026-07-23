"use client";

import { motion } from "framer-motion";
import { questionCards } from "@/data/astarte-content";

const reveal = {
  initial: { opacity: 1, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4 },
};

export default function QuestionsSection() {
  return (
    <section className="section-pad bg-warm" aria-labelledby="questions-heading">
      <div className="mx-auto max-w-6xl">
        <motion.span {...reveal} className="eyebrow">
          As perguntas que não saem da sua cabeça
        </motion.span>
        <motion.h2 id="questions-heading" {...reveal} className="headline mt-3 max-w-3xl">
          Ele está escondendo algo? Agora você vai descobrir a{" "}
          <span className="italic text-gold">verdade</span>.
        </motion.h2>
        <motion.p {...reveal} className="body-text mt-4 max-w-2xl">
          Descubra como fazer ele ter interesse em você.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {questionCards.map((card, i) => (
            <motion.article
              key={card.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.04 }}
              className="rounded-2xl border border-sapphire-deep/10 bg-paper p-5 shadow-soft md:p-6"
            >
              <h3 className="font-serif text-[1.65rem] leading-snug text-sapphire-deep md:text-2xl">
                {card.title}
              </h3>
              <p className="mt-3 font-sans text-[16px] leading-relaxed text-ink/85 md:text-[17px]">
                {card.text}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          {...reveal}
          className="mt-8 rounded-2xl border border-gold/35 bg-sapphire-deep px-5 py-8 text-center md:px-10 md:py-10"
        >
          <p className="mx-auto max-w-3xl font-serif text-[1.65rem] leading-snug text-warm md:text-3xl">
            Veja o que você está fazendo de errado, pare de afastar ele e aprenda como{" "}
            <span className="italic text-gold-light">conquistar esse homem</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
