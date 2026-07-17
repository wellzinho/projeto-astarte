"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ProductCover from "@/components/ProductCover";
import PdfPageMockup from "@/components/PdfPageMockup";
import SocialLinks from "@/components/SocialLinks";
import {
  buildCheckoutUrl,
  captureTrackingParams,
  CHECKOUT_BASE_URL,
  trackInitiateCheckoutOnce,
} from "@/lib/checkout";

const reveal = {
  initial: false,
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
};

const revealHero = {
  initial: false,
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
};

const recognitionItems = [
  "Já assistiu a vídeos tentando entender por que ele mudou.",
  "Já pensou em mandar mensagem e teve medo de piorar tudo.",
  "Já tentou esperar para ver se ele procurava.",
  "Já ouviu opiniões completamente diferentes.",
  "E ainda não sabe se ele sente alguma coisa.",
];

const planBlocks = [
  {
    num: "01",
    title: "Por que ele se afastou",
    text: "Entenda se ele está confuso, perdeu o interesse, se acomodou ou ainda sente algo por você.",
  },
  {
    num: "02",
    title: "O que os sinais dele querem dizer",
    text: "Descubra se ele está com saudade, quer apenas atenção ou está tentando voltar.",
  },
  {
    num: "03",
    title: "O que fazer agora",
    text: "Saiba quando mandar mensagem, quando esperar e quais atitudes podem afastá-lo ainda mais.",
  },
];

const looseAdvice = [
  "\u201cMande mensagem.\u201d",
  "\u201cEspere ele procurar.\u201d",
  "\u201cSome para ele sentir falta.\u201d",
  "\u201cNão demonstre nada.\u201d",
  "\u201cFaça ele sentir ciúme.\u201d",
];

const astarteWay = [
  "Entenda primeiro por que ele se afastou.",
  "Saiba qual atitude pode piorar cada situação.",
  "Observe o que os sinais dele realmente mostram.",
  "Encontre mensagens para momentos específicos.",
  "Descubra se ele quer voltar ou apenas está com saudade.",
];

const volumes = [
  {
    num: 1,
    title: "O Código do Silêncio",
    days: "Dias 1 a 6",
    phrase: "Descubra por que ele se afastou e o que fazer antes de mandar outra mensagem.",
  },
  {
    num: 2,
    title: "A Virada do Tabuleiro",
    days: "Dias 7 a 12",
    phrase: "Pare de correr atrás e veja se ele também faz alguma coisa para ficar perto de você.",
  },
  {
    num: 3,
    title: "O Arquivo Secreto dos Cafajestes",
    days: "Dias 13 a 18",
    phrase: "Saiba se ele ainda sente algo, só quer atenção ou deseja ter você de volta.",
  },
  {
    num: 4,
    title: "Os Gatilhos do Vínculo Profundo",
    days: "Dias 19 a 24",
    phrase: "Descubra o que pode fazer o sentimento entre vocês voltar a crescer.",
  },
  {
    num: 5,
    title: "O Xeque-Mate",
    days: "Dias 25 a 30",
    phrase: "Entenda se ele está voltando de verdade e como conversar sobre o futuro de vocês.",
  },
];

const previews = [
  {
    type: "diagnosis" as const,
    title: "Entenda por que ele se afastou",
    text: "Compare os sinais e descubra o que pode estar acontecendo.",
  },
  {
    type: "message" as const,
    title: "Saiba o que responder",
    text: "Encontre mensagens para quando ele some, esfria ou reaparece.",
  },
  {
    type: "response-map" as const,
    title: "Descubra se ele está voltando",
    text: "Compare as palavras dele com as atitudes dos dias seguintes.",
  },
];

const bonusSituations = [
  "Quando ele some.",
  "Quando responde frio.",
  "Quando reaparece carinhoso.",
  "Quando diz que está confuso.",
  "Quando você quer perguntar o que ele sente.",
];

const testimonials = [
  {
    quote:
      "O Projeto Astarte me fez entender onde estava errando e com isso consegui reconquistar ele",
    name: "Renata",
    age: "32",
    image: "/imagens/Mulher_40_anos_brasileira_unsplash.jpeg",
    alt: "Retrato de Renata",
  },
  {
    quote:
      "Hoje eu consigo entender melhor os homens e o que passa na cabeça deles, sem ficar frustrada",
    name: "Patrícia",
    age: "39",
    image: "/imagens/Mulher_de_35_anos_realista_202607071652.jpeg",
    alt: "Retrato de Patrícia",
  },
  {
    quote:
      "Após ler o material, ficou claro pra mim que ele era cafageste e que pra conquistar ele eu teria que agir diferente",
    name: "Marina",
    age: "34",
    image: "/imagens/Mulher_40_anos_perfil_brasileiro_202607071657.jpeg",
    alt: "Retrato de Marina",
  },
];

const offerIncludes = [
  "5 volumes digitais",
  "Protocolo de 30 dias",
  "Bônus O Botão de Emergência",
  "Acesso imediato",
  "7 dias de garantia",
];

const faqItems = [
  {
    q: "Ele vai voltar?",
    a: "Nenhum material pode controlar a decisão de outra pessoa. O Projeto Astarte ajuda você a entender os sinais, evitar erros e agir da forma que aumenta suas chances de ter ele de volta.",
  },
  {
    q: "É mais um ebook sobre autoestima?",
    a: "Não. O foco do Projeto Astarte é ajudar você a entender por que ele mudou, o que os sinais dele significam e o que fazer em cada fase do afastamento.",
  },
  {
    q: "Não gosto de ler. Vou conseguir acompanhar?",
    a: "Sim. Os volumes são curtos, visuais e divididos por dias, com mensagens, checklists, exercícios e exemplos práticos.",
  },
  {
    q: "Serve se ele não fala comigo há algum tempo?",
    a: "Sim. O primeiro volume começa justamente pelo afastamento e ajuda você a entender o que fazer antes de procurar ele novamente.",
  },
  {
    q: "Como recebo o material?",
    a: "O acesso digital é enviado pela Kiwify logo após a confirmação do pagamento.",
  },
];

function SectionEyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`section-eyebrow ${className}`}>{children}</span>;
}

function CTA({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "pulse" | "sticky";
  className?: string;
}) {
  const [checkoutUrl, setCheckoutUrl] = useState(CHECKOUT_BASE_URL);

  useEffect(() => {
    captureTrackingParams();
    setCheckoutUrl(buildCheckoutUrl());
  }, []);

  const variantClass =
    variant === "pulse"
      ? "btn-cta-pulse"
      : variant === "sticky"
        ? "btn-cta-sticky"
        : "";

  return (
    <a
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-cta ${variantClass} ${className}`}
      onClick={(event) => {
        const url = buildCheckoutUrl();
        event.currentTarget.href = url;
        setCheckoutUrl(url);
        trackInitiateCheckoutOnce();
      }}
    >
      {children}
    </a>
  );
}

function StickyMobileCTA({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div className="sticky-cta-mobile" aria-hidden={false}>
      <div className="sticky-cta-inner">
        <div className="sticky-cta-copy">
          <p className="sticky-cta-label">Projeto completo</p>
          <p className="sticky-cta-price">R$ 27,90</p>
        </div>
        <CTA variant="sticky" className="sticky-cta-btn">
          Quero Acessar
        </CTA>
      </div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {faqItems.map((item, i) => (
        <div key={i} className="border-b border-midnight/10">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left min-h-[56px]"
            aria-expanded={open === i}
          >
            <span className="font-serif text-xl md:text-2xl text-midnight tracking-tight pr-4">
              {item.q}
            </span>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex-shrink-0 w-5 h-5 relative"
              aria-hidden="true"
            >
              <span className="absolute top-1/2 left-0 w-full h-px bg-gold -translate-y-1/2" />
              <span className="absolute left-1/2 top-0 h-full w-px bg-gold -translate-x-1/2" />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-body-muted pb-5 md:pb-6">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [lightboxPage, setLightboxPage] = useState<(typeof previews)[0] | null>(null);
  const [volIndex, setVolIndex] = useState(0);
  const volCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const oferta = document.getElementById("oferta");
    if (!hero || !oferta) return;

    let heroVisible = true;
    let offerVisible = false;

    const update = () => setShowStickyCta(!heroVisible && !offerVisible);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        update();
      },
      { threshold: 0.12 }
    );

    const offerObserver = new IntersectionObserver(
      ([entry]) => {
        offerVisible = entry.isIntersecting;
        update();
      },
      { threshold: 0.15 }
    );

    heroObserver.observe(hero);
    offerObserver.observe(oferta);
    update();

    return () => {
      heroObserver.disconnect();
      offerObserver.disconnect();
    };
  }, []);

  const closeLightbox = useCallback(() => setLightboxPage(null), []);

  useEffect(() => {
    if (!lightboxPage) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxPage, closeLightbox]);

  const onVolumeScroll = useCallback(() => {
    const el = volCarouselRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) return;
    const idx = Math.round((el.scrollLeft / max) * (volumes.length - 1));
    setVolIndex(Math.min(volumes.length - 1, Math.max(0, idx)));
  }, []);

  return (
    <>
      {/* HERO */}
      <header id="hero" className="hero-section section-mobile !pt-5 md:!pt-12 !pb-6 md:!pb-16">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-5 md:gap-8 lg:gap-10 md:items-center">
          <div className="min-w-0 w-full flex flex-col justify-center order-1">
            <motion.span {...revealHero} className="hero-eyebrow">
              Projeto Astarte · Protocolo de 30 dias
            </motion.span>
            <motion.h1
              {...revealHero}
              transition={{ ...revealHero.transition, delay: 0.05 }}
              className="headline-hero"
            >
              Quer ele de volta? Descubra por que ele se afastou e o que fazer agora.
            </motion.h1>
            <motion.p
              {...revealHero}
              transition={{ ...revealHero.transition, delay: 0.08 }}
              className="text-body-muted mt-2.5 md:mt-3"
            >
              Entenda os sinais dele, evite os erros que afastam e aumente suas chances de
              ter esse homem de volta.
            </motion.p>
            <motion.div
              {...revealHero}
              transition={{ ...revealHero.transition, delay: 0.1 }}
              className="mt-3.5 md:mt-5"
            >
              <p className="hero-price">
                Projeto completo por <span>R$ 27,90</span>
              </p>
              <CTA className="mt-2 md:mt-3 w-full md:w-auto">Quero Saber Como Agir</CTA>
              <p className="cta-note mt-2">
                5 volumes + bônus · Acesso imediato · 7 dias de garantia
              </p>
            </motion.div>
          </div>

          <motion.div
            {...revealHero}
            transition={{ ...revealHero.transition, delay: 0.12 }}
            className="hero-visual order-2 mt-2 md:mt-0"
          >
            <div className="hero-product-wrap relative w-full mx-auto aspect-[2752/1536] overflow-hidden">
              <Image
                src="/imagens/hero2.jpeg"
                alt="Coleção Projeto Astarte — cinco volumes e bônus com capas em azul-marinho e dourado"
                fill
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </div>
          </motion.div>
        </div>
      </header>

      <main className="mobile-sticky-pad">
        {/* RECONHECIMENTO */}
        <section className="section-mobile bg-white" aria-labelledby="reconhecimento-heading">
          <div className="max-w-3xl mx-auto">
            <motion.div {...reveal}>
              <SectionEyebrow>Você já tentou entender</SectionEyebrow>
              <h2 id="reconhecimento-heading" className="headline-section mt-3">
                Você já procurou respostas. Mas ainda não sabe o que fazer.
              </h2>
            </motion.div>

            <motion.ul {...reveal} className="recognition-list mt-6 md:mt-8">
              {recognitionItems.map((item) => (
                <li key={item} className="recognition-item">
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.p {...reveal} className="impact-highlight mt-7 md:mt-9 max-w-2xl">
              O Projeto Astarte reúne tudo em uma ordem clara: o que observar, quais erros
              evitar e o que fazer nos próximos 30 dias.
            </motion.p>
          </div>
        </section>

        {/* PROMESSA PRINCIPAL */}
        <section className="section-mobile bg-section" aria-labelledby="plano-heading">
          <div className="max-w-3xl mx-auto">
            <motion.div {...reveal}>
              <SectionEyebrow>O plano que faltava</SectionEyebrow>
              <h2 id="plano-heading" className="headline-section mt-3">
                Entenda por que ele mudou e saiba como agir.
              </h2>
            </motion.div>

            <div className="mt-6 md:mt-9">
              {planBlocks.map((block, i) => (
                <motion.article
                  key={block.num}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.05 }}
                  className="result-block"
                >
                  <span className="result-number" aria-hidden="true">
                    {block.num}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-midnight leading-snug">
                      {block.title}
                    </h3>
                    <p className="text-body-sm mt-2 max-w-lg">{block.text}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div {...reveal} className="mt-7 md:mt-9">
              <CTA className="w-full md:w-auto">Quero Seguir o Plano de 30 Dias</CTA>
            </motion.div>
          </div>
        </section>

        {/* DIFERENCIAL */}
        <section className="section-mobile bg-cream" aria-labelledby="diferencial-heading">
          <div className="max-w-4xl mx-auto">
            <motion.div {...reveal}>
              <SectionEyebrow>Não é mais uma dica solta</SectionEyebrow>
              <h2 id="diferencial-heading" className="headline-section mt-3">
                Você não precisa testar um conselho diferente todos os dias.
              </h2>
            </motion.div>

            <motion.p {...reveal} className="text-body-muted mt-4 max-w-2xl">
              O Projeto Astarte organiza o processo completo: desde o momento em que ele se
              afasta até a hora de descobrir se ele quer voltar de verdade.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-7 md:mt-9">
              <motion.div {...reveal} className="compare-plain">
                <p className="compare-title">Dicas soltas</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {looseAdvice.map((item) => (
                    <li key={item} className="compare-plain-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div {...reveal} className="compare-featured">
                <p className="compare-title !text-gold-light">Projeto Astarte</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {astarteWay.map((item) => (
                    <li key={item} className="compare-featured-item">
                      <span className="offer-check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* VOLUMES */}
        <section className="section-mobile bg-white" aria-labelledby="volumes-heading">
          <div className="max-w-5xl mx-auto">
            <motion.h2 id="volumes-heading" {...reveal} className="headline-section">
              Cinco fases para entender o que aconteceu e saber o que fazer
            </motion.h2>
            <motion.p {...reveal} className="text-body-muted mt-3 max-w-xl">
              Cada volume responde uma pergunta diferente da história de vocês.
            </motion.p>

            <motion.div {...reveal} className="flex items-center justify-between mt-5 md:hidden">
              <p className="carousel-hint">Deslize para ver os próximos →</p>
              <p className="volume-indicator" aria-live="polite">
                {volIndex + 1} de {volumes.length}
              </p>
            </motion.div>

            <div
              ref={volCarouselRef}
              onScroll={onVolumeScroll}
              className="volume-carousel mt-3 md:mt-8"
            >
              {volumes.map((vol, i) => (
                <motion.article
                  key={vol.num}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.04 }}
                  className="volume-slide premium-card !p-5"
                >
                  <ProductCover
                    label={String(vol.num).padStart(2, "0")}
                    title={vol.title}
                    size="lg"
                  />
                  <span className="day-badge mt-4">{vol.days}</span>
                  <h3 className="font-serif text-lg md:text-xl text-midnight leading-snug mt-2">
                    {vol.title}
                  </h3>
                  <p className="text-body-sm mt-1.5">{vol.phrase}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* PROVA DO PRODUTO */}
        <section className="section-mobile bg-section" aria-labelledby="interno-heading">
          <div className="max-w-5xl mx-auto">
            <motion.div {...reveal}>
              <SectionEyebrow>Antes de comprar, veja o material</SectionEyebrow>
              <h2 id="interno-heading" className="headline-section mt-3">
                Você não vai receber mais uma coleção de frases motivacionais.
              </h2>
            </motion.div>
            <motion.p {...reveal} className="text-body-muted mt-3 max-w-2xl">
              O Projeto Astarte apresenta explicações, sinais, exercícios e mensagens para
              situações reais.
            </motion.p>

            <div className="mt-7 md:mt-10 flex flex-col gap-9 md:grid md:grid-cols-3 md:gap-6">
              {previews.map((preview, i) => (
                <motion.div
                  key={preview.type}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.05 }}
                  className="preview-block"
                >
                  <PdfPageMockup
                    type={preview.type}
                    title={preview.title}
                    className="preview-page"
                    onExpand={() => setLightboxPage(preview)}
                  />
                  <h3 className="font-serif text-xl text-midnight leading-snug mt-4">
                    {preview.title}
                  </h3>
                  <p className="text-body-sm mt-1.5">{preview.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROVA SOCIAL */}
        <section className="section-mobile bg-white" aria-labelledby="depoimentos-heading">
          <div className="max-w-6xl mx-auto">
            <motion.h2 id="depoimentos-heading" {...reveal} className="headline-section">
              O que outras mulheres entenderam depois de ler
            </motion.h2>

            <div className="testimonial-carousel mt-6 md:mt-8 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:mx-0 md:px-0">
              {testimonials.map((t, i) => (
                <motion.article
                  key={t.name}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.06 }}
                  className="testimonial-card premium-card flex flex-col min-h-[240px] !p-6 md:!p-8 border-midnight/10"
                >
                  <div className="relative w-14 h-14 mb-4">
                    <Image
                      src={t.image}
                      alt={t.alt}
                      fill
                      loading="lazy"
                      className="rounded-full object-cover"
                      sizes="56px"
                    />
                  </div>
                  <blockquote className="flex-1">
                    <p className="font-serif text-lg md:text-xl text-midnight leading-snug">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                  <p className="font-serif text-base md:text-lg text-midnight mt-5 pt-4 border-t border-midnight/10">
                    {t.name}, {t.age} anos
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* BÔNUS */}
        <section className="section-mobile section-bonus" aria-labelledby="bonus-heading">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
              <div className="flex-1 order-2 md:order-1">
                <motion.div {...reveal}>
                  <SectionEyebrow>Bônus incluso</SectionEyebrow>
                  <h2 id="bonus-heading" className="headline-section mt-3">
                    Ele mandou mensagem e você não sabe o que responder?
                  </h2>
                  <p className="headline-sub mt-3 text-midnight/85">
                    Abra O Botão de Emergência antes de agir no impulso.
                  </p>
                </motion.div>

                <motion.ul {...reveal} className="mt-5 flex flex-col gap-2">
                  {bonusSituations.map((item) => (
                    <li key={item} className="bonus-item">
                      {item}
                    </li>
                  ))}
                </motion.ul>

                <motion.p {...reveal} className="text-body-sm mt-5 max-w-md">
                  Você encontra o que responder, quando usar a mensagem e o que observar
                  depois.
                </motion.p>

                <motion.div {...reveal} className="mt-6 md:mt-7">
                  <CTA className="w-full md:w-auto">Quero Receber o Bônus</CTA>
                </motion.div>
              </div>

              <motion.div {...reveal} className="flex-shrink-0 order-1 md:order-2 mx-auto md:mx-0">
                <ProductCover
                  label="★"
                  title="O Botão de Emergência"
                  size="lg"
                  isBonus
                  className="shadow-editorial"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* OFERTA + GARANTIA — logo após volumes, páginas e bônus */}
        <section
          id="oferta"
          className="section-mobile bg-midnight text-white"
          aria-labelledby="oferta-heading"
        >
          <div className="max-w-xl mx-auto flex flex-col items-center text-center">
            <motion.p {...reveal} className="font-serif text-xl md:text-2xl text-white/85 italic leading-snug">
              Você já gastou tempo tentando adivinhar. Agora pode seguir um plano.
            </motion.p>

            <motion.div {...reveal} className="mt-6 md:mt-8">
              <SectionEyebrow className="!text-gold-light">Acesso imediato</SectionEyebrow>
              <h2
                id="oferta-heading"
                className="font-serif text-3xl md:text-[2.6rem] text-white tracking-tight leading-tight mt-3"
              >
                Receba agora o Projeto Astarte completo
              </h2>
            </motion.div>

            <motion.ul
              {...reveal}
              className="mt-6 md:mt-8 w-full text-left flex flex-col gap-2.5"
            >
              {offerIncludes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-sans text-[16px] md:text-[17px] text-white/95 leading-relaxed"
                >
                  <span className="offer-check">✓</span>
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.p {...reveal} className="font-serif text-4xl md:text-5xl text-gold-light mt-6 md:mt-8">
              R$ 27,90
            </motion.p>

            <motion.div {...reveal} className="mt-5 md:mt-6 w-full max-w-md">
              <CTA variant="pulse" className="w-full">
                Quero Ter o Plano Completo
              </CTA>
              <p className="cta-note-dark cta-note mt-2.5">Pagamento seguro pela Kiwify</p>
            </motion.div>

            <motion.div {...reveal} className="guarantee-block mt-8 md:mt-10">
              <h3 className="font-serif text-xl md:text-2xl text-white">
                7 dias para conhecer o material
              </h3>
              <p className="font-sans text-[16px] text-white/75 mt-2 leading-relaxed">
                Acesse os volumes e veja se o conteúdo faz sentido para você. Caso decida
                que não, solicite o reembolso dentro do prazo de garantia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-mobile bg-white" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto">
            <div className="gold-divider max-w-xs mx-auto mb-8" />
            <motion.h2 id="faq-heading" {...reveal} className="headline-section mb-6 md:mb-8">
              Perguntas frequentes
            </motion.h2>
            <motion.div {...reveal}>
              <FAQ />
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 text-center border-t border-midnight/5 bg-cream mobile-sticky-pad">
        <SocialLinks />
        <p className="font-sans text-gray-400 text-sm">
          © {new Date().getFullYear()} Projeto Astarte. Todos os direitos reservados.
        </p>
      </footer>

      <StickyMobileCTA visible={showStickyCta} />

      <AnimatePresence>
        {lightboxPage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={lightboxPage.title}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeLightbox}
                className="lightbox-close"
                aria-label="Fechar visualização"
              >
                × Fechar
              </button>
              <PdfPageMockup type={lightboxPage.type} title={lightboxPage.title} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
