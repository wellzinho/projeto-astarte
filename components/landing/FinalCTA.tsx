"use client";

import { motion } from "framer-motion";
import { CTA_LABEL, CTA_TEXT } from "@/data/astarte-content";
import { siteConfig } from "@/config/site";
import CheckoutButton from "./CheckoutButton";

const reveal = {
  initial: { opacity: 1, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4 },
};

export default function FinalCTA() {
  return (
    <section id="cta-final" className="section-pad sapphire-field" aria-labelledby="final-heading">
      <div className="mx-auto max-w-2xl text-center">
        <motion.span {...reveal} className="eyebrow !text-gold-light">
          Você pode estar afastando ele sem perceber
        </motion.span>
        <motion.h2 id="final-heading" {...reveal} className="headline-light mt-3">
          Descubra o erro e conquiste esse homem.
        </motion.h2>
        <motion.p {...reveal} className="body-text-light mx-auto mt-4 max-w-xl">
          O Projeto Astarte mostra por que ele se afastou, o que você pode estar fazendo de
          errado e como fazer ele voltar a te querer.
        </motion.p>
        <motion.p
          {...reveal}
          className="mt-5 font-serif text-xl italic text-gold-light md:text-2xl"
        >
          Pare de errar com o homem que você quer.
        </motion.p>
        <motion.p {...reveal} className="mt-6 font-serif text-4xl text-gold-light md:text-5xl">
          {siteConfig.price}
        </motion.p>
        <motion.div {...reveal} className="mt-6 flex flex-col items-center gap-2">
          <CheckoutButton
            location="final"
            label={CTA_LABEL}
            className="min-h-[56px] w-full md:w-auto md:min-w-[320px]"
          >
            {CTA_TEXT}
          </CheckoutButton>
          <p className="font-sans text-[12px] text-warm/50">
            Compra única • Pagamento seguro • Coleção completa
          </p>
        </motion.div>
      </div>
    </section>
  );
}
