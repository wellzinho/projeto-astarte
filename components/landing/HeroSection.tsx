"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTA_LABEL, CTA_TEXT, heroList } from "@/data/astarte-content";
import { siteConfig } from "@/config/site";
import CheckoutButton from "./CheckoutButton";

const fade = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35 },
};

export default function HeroSection() {
  return (
    <header id="hero" className="sapphire-field section-pad !py-7 md:!py-11">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-10 lg:gap-12">
        <motion.div {...fade} className="order-2 md:order-1">
          <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-ink via-sapphire-deep to-sapphire-night shadow-editorial">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/imagens/body.jpeg"
                alt="Projeto Astarte — os cinco volumes e o bônus O Botão de Emergência"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="rounded-2xl object-cover object-center"
              />
            </div>
          </div>
        </motion.div>

        <div className="order-1 md:order-2">
          <motion.span {...fade} className="eyebrow !text-gold-light">
            Projeto Astarte
          </motion.span>

          <motion.h1
            {...fade}
            className="headline-light mt-3 max-w-xl text-[2.75rem] leading-[1.05] md:text-[3.35rem] lg:text-[3.85rem]"
          >
            Faça esse homem{" "}
            <span className="italic text-gold-light">querer você</span>.
          </motion.h1>

          <motion.p
            {...fade}
            className="body-text-light mt-4 max-w-xl text-[15px] leading-relaxed md:text-base"
          >
            Descubra por que ele ficou frio, se tem outra mulher e saiba como conquistar ele.
          </motion.p>

          <motion.ul {...fade} className="mt-5 flex flex-col gap-2">
            {heroList.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 font-sans text-[14px] font-medium text-warm/90 md:text-[15px]"
              >
                <span className="mt-1 text-gold-light" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div {...fade} className="mt-5">
            <p className="font-serif text-4xl text-gold-light md:text-5xl">{siteConfig.price}</p>
          </motion.div>

          <motion.div {...fade} className="mt-5 flex flex-col gap-2">
            <CheckoutButton
              location="hero"
              label={CTA_LABEL}
              className="min-h-[56px] w-full text-base md:min-h-[58px] md:w-auto md:min-w-[320px]"
            >
              {CTA_TEXT}
            </CheckoutButton>
            <p className="font-sans text-[12px] tracking-wide text-warm/50">
              Compra única • Pagamento seguro • Coleção completa
            </p>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
