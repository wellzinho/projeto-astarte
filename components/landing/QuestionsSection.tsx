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
          Ele ainda não escolheu você. E isso deixou uma cabeça cheia de{" "}
          <span className="italic text-gold">perguntas</span>.
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {questionCards.map((card, i) => (
            <motion.article
              key={card.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.04 }}
              className="rounded-2xl border border-sapphire-deep/10 bg-paper px-5 py-5 shadow-soft md:px-6 md:py-6"
            >
              <h3 className="font-serif text-[1.45rem] leading-snug text-sapphire-deep md:text-[1.65rem]">
                {card.title}
              </h3>
            </motion.article>
          ))}
        </div>

        <motion.p {...reveal} className="body-text mx-auto mt-8 max-w-2xl text-center">
          Enquanto você tenta adivinhar, pode continuar fazendo exatamente o que deixa esse homem
          cada vez mais longe.
        </motion.p>

        <motion.div
          {...reveal}
          className="mt-6 rounded-2xl border border-gold/35 bg-sapphire-deep px-5 py-8 text-center md:px-10 md:py-10"
        >
          <p className="mx-auto max-w-3xl font-serif text-[1.55rem] leading-snug text-warm md:text-[1.85rem]">
            O Projeto Astarte mostra o erro que você não está vendo e o que mudar para{" "}
            <span className="italic text-gold-light">conquistar esse homem</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
