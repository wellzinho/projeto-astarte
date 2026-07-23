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

function HeroCopy({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <motion.span {...fade} className="eyebrow !text-gold-light">
        Projeto Astarte
      </motion.span>

      <motion.h1
        {...fade}
        className={
          compact
            ? "headline-light mt-3 text-[2.15rem] leading-[1.12] tracking-tight"
            : "headline-light mt-3 max-w-xl text-[2.85rem] leading-[1.08] md:text-[3.5rem] lg:text-[4rem]"
        }
      >
        Faça esse homem <span className="italic text-gold-light">querer você</span>.
      </motion.h1>

      <motion.p
        {...fade}
        className={
          compact
            ? "mt-3 font-sans text-[16px] leading-relaxed text-warm/85"
            : "body-text-light mt-4 max-w-xl"
        }
      >
        Descubra por que ele ficou frio, se tem outra mulher e saiba como conquistar ele.
      </motion.p>

      {!compact ? (
        <motion.ul {...fade} className="mt-5 flex flex-col gap-2.5">
          {heroList.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 font-sans text-[16px] font-medium leading-snug text-warm/90 md:text-[17px]"
            >
              <span className="mt-0.5 text-gold-light" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </motion.ul>
      ) : null}

      <motion.div {...fade} className="mt-5">
        <p
          className={
            compact
              ? "font-serif text-4xl text-gold-light"
              : "font-serif text-5xl text-gold-light md:text-6xl"
          }
        >
          {siteConfig.price}
        </p>
      </motion.div>

      <motion.div {...fade} className="mt-4 flex flex-col gap-2">
        <CheckoutButton
          location="hero"
          label={CTA_LABEL}
          className="min-h-[56px] w-full text-base md:min-h-[58px] md:w-auto md:min-w-[320px]"
        >
          {CTA_TEXT}
        </CheckoutButton>
        <p className="micro-text-light">Compra única • Pagamento seguro • Coleção completa</p>
      </motion.div>
    </>
  );
}

function HeroImage({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-ink via-sapphire-deep to-sapphire-night ${className}`}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src="/imagens/body.jpeg"
          alt="Projeto Astarte — os cinco volumes e o bônus O Botão de Emergência"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <>
      <header id="hero">
        {/* Mobile: imagem primeiro + card editorial enxuto */}
        <div className="bg-paper px-4 pb-2 pt-4 md:hidden">
          <motion.div
            {...fade}
            className="overflow-hidden rounded-[1.75rem] border border-gold/30 sapphire-field shadow-editorial"
          >
            <HeroImage />
            <div className="px-5 pb-6 pt-5">
              <HeroCopy compact />
            </div>
          </motion.div>
        </div>

        {/* Desktop: duas colunas */}
        <div className="sapphire-field section-pad !py-7 hidden md:block md:!py-11">
          <div className="relative mx-auto grid max-w-7xl grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-center gap-10 lg:gap-12">
            <motion.div {...fade}>
              <div className="overflow-hidden rounded-2xl border border-gold/30 shadow-editorial">
                <HeroImage />
              </div>
            </motion.div>
            <div>
              <HeroCopy />
            </div>
          </div>
        </div>
      </header>

      {/* Ponte: benefícios fora da hero — quebra visual antes da próxima seção */}
      <section
        aria-label="O que você vai descobrir"
        className="border-b border-sapphire-deep/10 bg-warm px-5 py-7 md:hidden"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3.5">
          {heroList.map((item) => (
            <p
              key={item}
              className="flex items-start gap-2.5 font-sans text-[15px] leading-snug text-sapphire-deep/90"
            >
              <span className="mt-0.5 text-gold" aria-hidden="true">
                ✓
              </span>
              <span>{item}</span>
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
