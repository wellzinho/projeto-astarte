"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CTA_LABEL,
  CTA_TEXT,
  offerDiscoveries,
  offerIncludes,
} from "@/data/astarte-content";
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
          <motion.h2 id="offer-heading" {...reveal} className="headline-light">
            Pare de tentar no escuro. Veja onde você está errando e comece a{" "}
            <span className="italic text-gold-light">conquistar esse homem</span>.
          </motion.h2>

          <motion.div {...reveal} className="mt-7">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-gold-light">
              O que você vai descobrir
            </p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {offerDiscoveries.map((item) => (
                <li key={item} className="flex items-start gap-2.5 body-text-light">
                  <span className="mt-0.5 text-gold-light" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...reveal} className="mt-7">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-gold-light">
              O que você recebe
            </p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {offerIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 body-text-light">
                  <span className="mt-0.5 text-gold-light" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...reveal} className="mt-7">
            <p className="font-sans text-sm uppercase tracking-[0.12em] text-gold-light/80">
              Tudo por
            </p>
            <p className="mt-1 font-serif text-5xl text-gold-light md:text-6xl">
              {siteConfig.price}
            </p>
          </motion.div>

          <motion.div {...reveal} className="mt-6 flex flex-col gap-2">
            <CheckoutButton
              location="offer"
              label={CTA_LABEL}
              className="min-h-[56px] w-full md:w-auto md:min-w-[320px]"
            >
              {CTA_TEXT}
            </CheckoutButton>
            <p className="micro-text-light">Pagamento único. Sem mensalidade.</p>
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
