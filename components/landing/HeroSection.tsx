"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { pricing } from "@/config/site";
import {
  CTA_MAIN_LABEL,
  heroBullets,
  heroComplement,
  heroEvenIf,
  heroHighlight,
  heroMicrocopy,
  heroPriceEyebrow,
  heroProofLine,
  heroText,
  heroTitle,
  heroTrustLine,
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
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-x-12 px-5 pb-10 pt-7 md:grid-cols-[1.05fr_0.95fr] md:px-12 md:py-16 lg:py-20">
        <div className="min-w-0 md:col-start-1 md:row-start-1">
          <motion.p {...fadeUp(0)} className="eyebrow max-w-[52ch]">
            {heroProofLine}
          </motion.p>
          <motion.h1
            {...fadeUp(0.06)}
            className="mt-3 max-w-[20ch] font-serif text-[2.1rem] font-medium leading-[1.12] tracking-tight text-sapphire-deep md:text-[2.9rem] lg:text-[3.3rem]"
          >
            {heroTitle}
          </motion.h1>
          <motion.p
            {...fadeUp(0.1)}
            className="mt-4 max-w-[46ch] font-serif text-lg leading-snug text-sapphire-deep md:text-xl"
          >
            {heroComplement}
          </motion.p>
        </div>

        <motion.figure
          {...fadeUp(0.12)}
          className="mt-6 min-w-0 md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0"
        >
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-gold/40 shadow-editorial md:max-w-md lg:max-w-lg">
            <div className="relative aspect-[3/4] w-full bg-sapphire-night">
              <Image
                src="/imagens/hero-nova.png"
                alt="Mockup do Método Astarte — o protocolo de 30 dias e o bônus Hipnose da Reconquista"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.figure>

        <div className="min-w-0 md:col-start-1 md:row-start-2">
          <motion.div {...fadeUp(0.16)} className="mt-5 flex flex-col gap-1 md:mt-6">
            {heroEvenIf.map((line) => (
              <p key={line} className="font-serif text-lg italic leading-snug text-sapphire-deep/85">
                {line}
              </p>
            ))}
          </motion.div>

          <motion.p {...fadeUp(0.2)} className="mt-4 max-w-[46ch] body-text">
            {heroText}
          </motion.p>

          <motion.ul {...fadeUp(0.24)} className="mt-4 flex max-w-[46ch] flex-col gap-2">
            {heroBullets.map((item) => (
              <li key={item} className="flex items-start gap-2.5 body-text">
                <span className="mt-0.5 text-gold" aria-hidden="true">
                  ✕
                </span>
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.blockquote
            {...fadeUp(0.27)}
            className="mt-5 max-w-[44ch] border-l-[3px] border-gold pl-4 font-serif text-lg leading-snug text-sapphire-deep sm:pl-5 md:text-xl"
          >
            {heroHighlight.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.blockquote>

          <motion.div {...fadeUp(0.3)} className="mt-5">
            <span className="block font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-deep">
              {heroPriceEyebrow}
            </span>
            {pricing.previousPrice && (
              <span className="mt-1 block font-serif text-lg text-sapphire-deep/55">
                De <s>{pricing.previousPrice}</s>
              </span>
            )}
            <span className="block font-serif text-[2.6rem] leading-none text-sapphire-deep md:text-5xl">
              Por apenas {pricing.price}
            </span>
            <span className="mt-1 block font-sans text-xs font-semibold uppercase tracking-[0.14em] text-gold-deep">
              Pagamento único
            </span>
          </motion.div>

          <motion.div {...fadeUp(0.34)} className="mt-4 flex flex-col gap-2.5">
            <CheckoutButton
              location="hero"
              variant="navy"
              label={CTA_MAIN_LABEL}
              className="min-h-[54px] w-full text-base md:w-auto md:min-w-[320px]"
            >
              {CTA_MAIN_LABEL}
            </CheckoutButton>
            <p className="max-w-md font-sans text-[13px] leading-snug text-sapphire-deep/70 md:text-left">
              {heroMicrocopy}
            </p>
            <TrustLine text={heroTrustLine} className="md:text-left md:mx-0" />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
