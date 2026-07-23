"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTA_LABEL, CTA_TEXT, offerIncludes } from "@/data/astarte-content";
import { siteConfig } from "@/config/site";
import CheckoutButton from "./CheckoutButton";

const reveal = {
  initial: { opacity: 1, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4 },
};

export default function OfferSection() {
  return (
    <section id="oferta" className="section-pad sapphire-field" aria-labelledby="offer-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <motion.span {...reveal} className="eyebrow !text-gold-light">
            Pare de tentar adivinhar
          </motion.span>
          <motion.h2 id="offer-heading" {...reveal} className="headline-light mt-3">
            Veja onde você está errando e faça ele te querer.
          </motion.h2>
          <motion.p {...reveal} className="body-text-light mt-4">
            Se ele ficou frio, sumiu ou parou de procurar, alguma coisa afastou ele. O Projeto
            Astarte mostra o que pode estar errado e o que fazer para conquistar esse homem.
          </motion.p>
          <motion.p
            {...reveal}
            className="mt-5 border-l-[3px] border-gold pl-4 font-serif text-xl text-gold-light md:text-2xl"
          >
            Pare de afastar ele sem perceber.
          </motion.p>

          <motion.ul {...reveal} className="mt-6 flex flex-col gap-2.5">
            {offerIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 body-text-light text-[15px]">
                <span className="text-gold-light" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div {...reveal} className="mt-7">
            <p className="font-serif text-5xl text-gold-light md:text-6xl">{siteConfig.price}</p>
          </motion.div>

          <motion.div {...reveal} className="mt-6 flex flex-col gap-2">
            <CheckoutButton
              location="offer"
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

        <motion.div {...reveal}>
          <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-ink via-sapphire-deep to-sapphire-night shadow-editorial">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/imagens/body2.jpeg"
                alt="Projeto Astarte — composição com todos os volumes e o bônus"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="rounded-2xl object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
