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
        <motion.h2 id="final-heading" {...reveal} className="headline-light">
          Se você continuar fazendo a mesma coisa, ele não terá motivo para agir diferente.
        </motion.h2>
        <motion.p {...reveal} className="body-text-light mx-auto mt-4 max-w-xl">
          Descubra o que está afastando esse homem e comece hoje o plano de 30 dias para
          conquistar ele.
        </motion.p>
        <motion.p {...reveal} className="mt-6 font-serif text-5xl text-gold-light md:text-6xl">
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
          <p className="micro-text-light">
            Compra única • Pagamento seguro • Coleção completa
          </p>
        </motion.div>
      </div>
    </section>
  );
}
