"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  CTA_MAIN_LABEL,
  heroEyebrow,
  heroProductLine,
  heroSubtitle,
  heroTitle,
} from "@/data/astarte-content";
import CheckoutButton from "./CheckoutButton";
import TrustLine from "./TrustLine";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduceMotion
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: "easeOut" as const },
        };

  return (
    <header id="hero" className="w-full max-w-[100vw] overflow-x-clip bg-paper paper-texture">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-x-12 px-5 pb-10 pt-7 md:grid-cols-[1.05fr_0.95fr] md:px-12 md:py-16 lg:py-20">
        <div className="min-w-0 md:col-start-1 md:row-start-1">
          <motion.p {...fadeUp(0)} className="eyebrow">
            {heroEyebrow}
          </motion.p>
          <motion.h1
            {...fadeUp(0.06)}
            className="mt-3 max-w-[20ch] font-serif text-[2.1rem] font-medium leading-[1.12] tracking-tight text-sapphire-deep md:text-[2.9rem] lg:text-[3.3rem]"
          >
            {heroTitle}
          </motion.h1>
        </div>

        <motion.figure
          {...fadeUp(0.12)}
          className="mt-6 min-w-0 md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0"
        >
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-gold/40 shadow-editorial md:max-w-md lg:max-w-lg">
            <div className="relative aspect-[3/4] w-full bg-sapphire-night">
              <Image
                src="/imagens/hero-nova.png"
                alt="Mockup do Método Astarte — as capas dos cinco volumes digitais e o bônus Hipnose da Reconquista"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.figure>

        <div className="min-w-0 md:col-start-1 md:row-start-2">
          <motion.p {...fadeUp(0.18)} className="mt-5 max-w-[46ch] body-text md:mt-6">
            {heroSubtitle}
          </motion.p>

          <motion.p
            {...fadeUp(0.24)}
            className="mt-4 font-serif text-lg leading-snug text-sapphire-deep md:text-xl"
          >
            {heroProductLine}
          </motion.p>

          <motion.div {...fadeUp(0.28)} className="mt-4">
            <span className="block font-serif text-[2.6rem] leading-none text-sapphire-deep md:text-5xl">
              R$ 37,90
            </span>
            <span className="mt-1 block font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-deep">
              Pagamento único
            </span>
          </motion.div>

          <motion.div {...fadeUp(0.33)} className="mt-4 flex flex-col gap-2.5">
            <CheckoutButton
              location="hero"
              variant="navy"
              label={CTA_MAIN_LABEL}
              className="min-h-[54px] w-full text-base md:w-auto md:min-w-[320px]"
            >
              {CTA_MAIN_LABEL}
            </CheckoutButton>
            <TrustLine className="md:text-left md:mx-0" />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
