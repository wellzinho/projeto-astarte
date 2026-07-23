"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CTA_LABEL, CTA_TEXT, heroList } from "@/data/astarte-content";
import { siteConfig } from "@/config/site";
import CheckoutButton from "./CheckoutButton";
import CarouselProgress from "./social-proof/CarouselProgress";

const fade = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35 },
};

const heroPains = [
  "Ele parou de me procurar",
  "Ele não toma uma atitude",
  "Ele some e depois volta",
  "Ele conversa com outras",
] as const;

const heroSocialProofs = [
  {
    name: "Larissa M.",
    details: "36 anos · Recife",
    avatar: "/provas/avatars/larissa.jpg",
    quote:
      "Eu ficava correndo atrás sempre que ele sumia. Quando parei de fazer isso do jeito errado, ele voltou a me procurar.",
  },
  {
    name: "Vanessa R.",
    details: "34 anos · Campinas",
    avatar: "/provas/avatars/vanessa.jpg",
    quote: "O Projeto Astarte me mostrou como conquistar o amor da minha vida.",
  },
] as const;

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
            ? "headline-light mt-3 text-[1.85rem] leading-[1.15] tracking-tight"
            : "headline-light mt-3 max-w-xl text-[2.65rem] leading-[1.1] md:text-[3.25rem] lg:text-[3.75rem]"
        }
      >
        Pare de fazer o que afasta ele.{" "}
        <span className="italic text-gold-light">Conquiste esse homem</span>.
      </motion.h1>

      <motion.p
        {...fade}
        className={
          compact
            ? "mt-3 font-sans text-[15px] leading-relaxed text-warm/85"
            : "body-text-light mt-4 max-w-xl"
        }
      >
        Um plano de 30 dias para você descobrir onde está errando, mudar suas atitudes e fazer
        esse homem voltar a olhar para você com vontade de ficar.
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
  const proofTrackRef = useRef<HTMLDivElement>(null);
  const [proofIndex, setProofIndex] = useState(0);

  const scrollProofTo = useCallback((next: number) => {
    const el = proofTrackRef.current;
    if (!el) return;
    const clamped =
      ((next % heroSocialProofs.length) + heroSocialProofs.length) % heroSocialProofs.length;
    const card = el.children[clamped] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - 8, behavior: "smooth" });
    setProofIndex(clamped);
  }, []);

  const onProofScroll = useCallback(() => {
    const el = proofTrackRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    let closest = 0;
    let min = Infinity;
    children.forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - el.scrollLeft);
      if (dist < min) {
        min = dist;
        closest = i;
      }
    });
    setProofIndex(closest);
  }, []);

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

      {/* Ponte mobile: reconhecimento — mesmo fundo paper da hero e das provas */}
      <section
        aria-label="Você pode estar afastando ele sem perceber"
        className="bg-paper px-4 pb-2 pt-3 md:hidden"
      >
        <div className="mx-auto max-w-lg rounded-[1.75rem] border border-sapphire-deep/10 bg-warm px-5 py-6 shadow-soft">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold">
            Reconhecimento
          </p>
          <h2 className="mt-2 font-serif text-[1.45rem] leading-snug text-sapphire-deep">
            Você pode estar afastando ele{" "}
            <span className="italic text-gold">sem perceber</span>
          </h2>
          <p className="mt-3 font-sans text-[15px] leading-relaxed text-ink/75">
            Quanto mais você demonstra que estará ali de qualquer jeito, menos ele sente que
            precisa lutar por você.
          </p>

          <ul className="mt-5 flex flex-col gap-0 divide-y divide-sapphire-deep/10 border-t border-sapphire-deep/10">
            {heroPains.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 py-3.5 font-serif text-[16px] leading-snug text-sapphire-deep"
              >
                <span
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Provas sociais rápidas — carrossel mobile */}
      <section
        aria-label="Experiências de leitoras"
        className="bg-paper px-4 pb-8 pt-3 md:hidden"
      >
        <div className="mx-auto max-w-lg">
          <div
            ref={proofTrackRef}
            onScroll={onProofScroll}
            className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            tabIndex={0}
            role="region"
            aria-label="Carrossel de depoimentos"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                e.preventDefault();
                scrollProofTo(proofIndex + 1);
              }
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                scrollProofTo(proofIndex - 1);
              }
            }}
          >
            {heroSocialProofs.map((proof) => (
              <article
                key={proof.quote}
                className="w-[88%] flex-shrink-0 snap-start rounded-[1.75rem] border border-sapphire-deep/10 bg-warm p-4 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={proof.avatar}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-sans text-[15px] font-medium text-ink">{proof.name}</p>
                    <p className="font-sans text-sm text-ink/55">{proof.details}</p>
                  </div>
                </div>
                <blockquote className="mt-3 font-serif text-[16px] leading-relaxed text-sapphire-deep">
                  “{proof.quote}”
                </blockquote>
              </article>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between gap-4">
            <CarouselProgress index={proofIndex} total={heroSocialProofs.length} />
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Depoimento anterior"
                onClick={() => scrollProofTo(proofIndex - 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-sapphire-deep"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Próximo depoimento"
                onClick={() => scrollProofTo(proofIndex + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-sapphire-deep"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
