"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ProductCover from "@/components/ProductCover";
import SocialLinks from "@/components/SocialLinks";
import {
  buildCheckoutUrl,
  captureTrackingParams,
  CHECKOUT_BASE_URL,
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

const heroBullets = [
  "Pare de agir como opção",
  "Entenda por que ele esfria e reaparece",
  "Saiba como se posicionar sem implorar atenção",
];

const symptoms = [
  "Você abre o WhatsApp mesmo sabendo que talvez não tenha resposta.",
  "Ele some por dias e volta carinhoso como se nada tivesse acontecido.",
  "Você tenta parecer tranquila, mas por dentro está ansiosa.",
  "Você tem medo de pedir clareza e parecer emocionada demais.",
  "Você entrega energia de namorada, mas recebe tratamento de opção.",
  "Você vive esperando uma atitude que nunca vem.",
];

const volumes = [
  {
    num: 1,
    title: "Código do Silêncio",
    desc: "Pare de reagir no impulso e aprenda a não transformar ansiedade em mensagem.",
  },
  {
    num: 2,
    title: "Virada do Tabuleiro",
    desc: "Entenda como ajustar sua disponibilidade para parar de parecer garantida.",
  },
  {
    num: 3,
    title: "Arquivo dos Cafajestes",
    desc: "Reconheça padrões de homens que confundem desejo com acesso fácil.",
  },
  {
    num: 4,
    title: "Vínculo Profundo",
    desc: "Diferencie conexão real de carência, química e falsa intimidade.",
  },
  {
    num: 5,
    title: "Xeque-Mate",
    desc: "Conduza a relação para uma definição sem implorar, pressionar ou se perder.",
  },
];

const benefits = [
  "Menos impulso para mandar mensagem",
  "Mais clareza sobre o comportamento dele",
  "Mais controle sobre suas atitudes",
  "Menos tolerância a migalhas",
  "Mais firmeza para pedir definição",
  "Mais paz para decidir se vale continuar",
];

const howItWorks = [
  {
    step: "01",
    title: "Acesse o material",
    desc: "Receba os e-books imediatamente após o pagamento.",
  },
  {
    step: "02",
    title: "Entenda a dinâmica",
    desc: "Identifique por que você está presa nesse ciclo.",
  },
  {
    step: "03",
    title: "Ajuste sua postura",
    desc: "Pare de dar acesso total para quem entrega pouco.",
  },
  {
    step: "04",
    title: "Leia os sinais",
    desc: "Entenda se ele quer presença real ou apenas conveniência.",
  },
  {
    step: "05",
    title: "Conduza para uma definição",
    desc: "Compromisso, clareza ou liberdade para seguir.",
  },
];

const bonusBenefits = [
  "Pare antes de mandar mensagem no impulso",
  "Recupere o eixo quando ele sumir ou esfriar",
  "Evite atitudes que fazem você perder posição",
];

const offerIncludes = [
  "5 e-books do protocolo completo",
  "Bônus Botão de Emergência",
  "Acesso imediato",
  "Leitura pelo celular",
  "Garantia de 7 dias",
  "Pagamento único, sem assinatura",
];

const testimonials = [
  {
    quote:
      "Eu percebi que passava mais tempo tentando entender o silêncio dele do que cuidando de mim. O material me ajudou a parar de reagir no impulso.",
    name: "Marina",
    age: "34",
    image: "/imagens/Mulher_40_anos_perfil_brasileiro_202607071657.jpeg",
    alt: "Retrato de Marina",
  },
  {
    quote:
      "Eu sempre achava que ele estava confuso. Depois entendi que eu estava disponível demais para alguém que não precisava decidir nada.",
    name: "Patrícia",
    age: "39",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&q=75",
    alt: "Retrato de Patrícia",
  },
  {
    quote:
      "O que mais me pegou foi entender que voltar não é o mesmo que escolher. Isso mudou totalmente a forma como eu comecei a me posicionar.",
    name: "Renata",
    age: "32",
    image: "/imagens/Mulher_de_35_anos_realista_202607071652.jpeg",
    alt: "Retrato de Renata",
  },
];

const faqItems = [
  {
    q: "Como recebo o material?",
    a: "Após a confirmação do pagamento, você recebe acesso digital aos e-books no e-mail cadastrado na compra.",
  },
  {
    q: "Posso ler pelo celular?",
    a: "Sim. O material pode ser acessado pelo celular, tablet ou computador.",
  },
  {
    q: "É pagamento único?",
    a: "Sim. Você paga uma única vez. Não é assinatura.",
  },
  {
    q: "Serve se ele está distante?",
    a: "Sim. O protocolo foi pensado para situações de afastamento, ambiguidade, sumiço e falta de definição.",
  },
  {
    q: "Isso é terapia?",
    a: "Não. É um material digital de orientação prática sobre postura, limites e clareza nas relações.",
  },
  {
    q: "Tenho garantia?",
    a: "Sim. Você tem garantia de 7 dias.",
  },
];

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
      }}
    >
      {children}
    </a>
  );
}

function TrustLine({
  className = "",
  dark = false,
  variant = "default",
}: {
  className?: string;
  dark?: boolean;
  variant?: "default" | "offer";
}) {
  const items =
    variant === "offer"
      ? ["Pagamento seguro", "Acesso imediato", "Garantia de 7 dias"]
      : ["Acesso imediato", "Pagamento seguro", "Garantia de 7 dias"];

  return (
    <ul
      className={`trust-badges ${dark ? "trust-badges-dark" : ""} ${className}`}
      aria-label="Garantias de compra"
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function CTABlock({
  children,
  variant = "primary",
  className = "",
  trustDark = false,
  trustVariant = "default",
  align = "center",
  note,
  showTrust = true,
}: {
  children: React.ReactNode;
  variant?: "primary" | "pulse";
  className?: string;
  trustDark?: boolean;
  trustVariant?: "default" | "offer";
  align?: "center" | "left";
  note?: string;
  showTrust?: boolean;
}) {
  return (
    <div className={`cta-block cta-block-${align} ${className}`}>
      <CTA variant={variant}>{children}</CTA>
      {note ? (
        <p className={`cta-note ${trustDark ? "cta-note-dark" : ""}`}>{note}</p>
      ) : showTrust ? (
        <TrustLine dark={trustDark} variant={trustVariant} />
      ) : null}
    </div>
  );
}

function StickyMobileCTA() {
  return (
    <div className="sticky-cta-mobile" aria-hidden={false}>
      <CTA variant="sticky">Acessar por R$ 27,90</CTA>
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
            className="w-full flex items-center justify-between gap-4 py-6 md:py-7 text-left min-h-[56px]"
            aria-expanded={open === i}
          >
            <span className="font-serif text-xl md:text-2xl lg:text-[1.4rem] text-midnight tracking-tight pr-4">
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
                <p className="text-body-muted pb-6 md:pb-8">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header className="hero-section section-mobile !pt-7 md:!pt-14 !pb-9 md:!pb-20">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1.24fr)_minmax(0,0.76fr)] lg:grid-cols-[minmax(0,1.27fr)_minmax(0,0.73fr)] gap-5 md:gap-10 lg:gap-12 md:items-center">
          <motion.div {...revealHero} className="hero-visual order-1">
            <div className="hero-product-wrap relative w-full min-w-0 mx-auto aspect-[4/3] md:aspect-[2752/1536] max-w-full overflow-hidden">
              <Image
                src="/imagens/hero2.jpeg"
                alt="Coleção Projeto Astarte — livros com capas em azul marinho e detalhes em dourado"
                fill
                priority
                quality={85}
                sizes="(max-width: 768px) 94vw, 58vw"
              />
            </div>
          </motion.div>

          <div className="min-w-0 w-full flex flex-col justify-center order-2 md:pl-2 lg:pl-4">
            <motion.span {...revealHero} className="hero-eyebrow">
              Projeto Astarte
            </motion.span>
            <motion.h1
              {...revealHero}
              transition={{ ...revealHero.transition, delay: 0.05 }}
              className="headline-hero"
            >
              Ele some, volta quando quer
              <span className="block mt-1.5 md:mt-2">e você ainda tenta entender.</span>
            </motion.h1>
            <motion.div
              {...revealHero}
              transition={{ ...revealHero.transition, delay: 0.08 }}
              className="text-body-muted mt-4 md:mt-5"
            >
              <p>
                Um protocolo direto para mulheres que cansaram de correr atrás, aceitar
                migalhas e viver presas no quase. Em 30 dias, você aprende a recuperar
                postura, cortar o excesso de acesso e descobrir se ele quer compromisso
                real — ou só conveniência.
              </p>
            </motion.div>
            <motion.ul
              {...revealHero}
              transition={{ ...revealHero.transition, delay: 0.1 }}
              className="hero-bullets"
            >
              {heroBullets.map((bullet) => (
                <li key={bullet} className="hero-bullet">
                  {bullet}
                </li>
              ))}
            </motion.ul>
            <motion.div
              {...revealHero}
              transition={{ ...revealHero.transition, delay: 0.12 }}
              className="mt-5 md:mt-7"
            >
              <p className="hero-price">
                5 e-books + bônus por apenas <span>R$ 27,90</span>
              </p>
              <p className="hero-price-note">Pagamento único. Não é assinatura.</p>
              <CTABlock className="mt-4 md:mt-5" align="left">
                Quero Parar de Correr Atrás
              </CTABlock>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="mobile-sticky-pad">
        {/* DOR / IDENTIFICAÇÃO */}
        <section className="section-mobile bg-white" aria-labelledby="dor-heading">
          <div className="max-w-4xl mx-auto">
            <motion.h2 id="dor-heading" {...reveal} className="headline-section">
              Se você está presa no &ldquo;quase&rdquo;, este protocolo foi feito para você.
            </motion.h2>

            <motion.p {...reveal} className="text-body-muted mt-4 md:mt-5 max-w-2xl">
              Você não precisa de mais conselho vago.
              <span className="block mt-3">
                Você precisa entender por que essa relação não anda — e parar de se
                desgastar tentando arrancar clareza de quem continua te mantendo em dúvida.
              </span>
            </motion.p>

            <motion.p
              {...reveal}
              className="impact-highlight mt-6 md:mt-8 max-w-2xl"
            >
              Você não está exagerando. Você está cansada de sustentar sozinha uma relação
              que nunca se define.
            </motion.p>

            <motion.ul
              {...reveal}
              className="mt-6 md:mt-8 flex flex-col gap-3 md:gap-4"
            >
              {symptoms.map((item, i) => (
                <li
                  key={i}
                  className="symptom-card premium-card flex items-start gap-3"
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full border border-gold/40 flex items-center justify-center mt-0.5"
                    aria-hidden="true"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  </span>
                  <span className="text-body-sm">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div {...reveal} className="mt-7 md:mt-10">
              <CTABlock>Quero Sair Dessa Dinâmica</CTABlock>
            </motion.div>
          </div>
        </section>

        {/* REFRAME */}
        <section
          className="section-mobile section-mecanismo"
          aria-labelledby="mecanismo-heading"
        >
          <div className="relative z-[1] max-w-3xl mx-auto md:mr-auto md:ml-0 lg:max-w-2xl">
            <motion.h2 id="mecanismo-heading" {...reveal} className="headline-section">
              O problema não é sentir demais.
              <span className="block mt-2">
                É dar acesso demais para quem entrega clareza de menos.
              </span>
            </motion.h2>

            <motion.div {...reveal} className="text-body mt-5 md:mt-7 max-w-xl space-y-3">
              <p>
                Quando ele recebe sua atenção, paciência, escuta e disponibilidade sem
                precisar se posicionar, ele não sente urgência de decidir.
              </p>
              <p>Você continua ali.</p>
              <p>Ele continua confortável.</p>
              <p>
                O Projeto Astarte te mostra como parar de premiar a ausência e recuperar
                sua posição sem joguinho, cobrança ou humilhação.
              </p>
            </motion.div>

            <motion.div
              {...reveal}
              className="mecanismo-glass mt-7 md:mt-10 border-l-[3px] border-l-gold"
            >
              <p className="pull-quote">
                Você não precisa convencer um homem. Precisa parar de negociar contra você.
              </p>
            </motion.div>

            <motion.p {...reveal} className="mecanismo-closing mt-6 md:mt-8 max-w-lg">
              Saudade sem presença é só manutenção de acesso.
            </motion.p>
          </div>
        </section>

        {/* O QUE VOCÊ RECEBE */}
        <section className="section-mobile bg-cream" aria-labelledby="volumes-heading">
          <div className="max-w-5xl mx-auto">
            <motion.h2 id="volumes-heading" {...reveal} className="headline-section">
              O que você recebe no Projeto Astarte
            </motion.h2>
            <motion.p {...reveal} className="text-body-muted mt-3 md:mt-4 max-w-2xl">
              5 e-books + bônus para parar de agir no impulso, entender os padrões dele e
              conduzir a relação para uma definição.
            </motion.p>

            <div className="mt-8 md:mt-14 flex flex-col gap-4 md:gap-6">
              {volumes.map((vol, i) => (
                <motion.article
                  key={vol.num}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.04 }}
                  className="volume-card-compact"
                >
                  <ProductCover
                    label={String(vol.num).padStart(2, "0")}
                    title={vol.title}
                    size="md"
                    className="flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-xs uppercase tracking-wider text-gray-500 mb-1">
                      Módulo {vol.num}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl text-midnight leading-snug">
                      {vol.title}
                    </h3>
                    <p className="text-body-muted mt-3">{vol.desc}</p>
                  </div>
                </motion.article>
              ))}

              <motion.article
                {...reveal}
                className="volume-card-compact border-gold/25 bg-gradient-to-br from-white via-white to-gold/10"
              >
                <ProductCover
                  label="★"
                  title="Botão de Emergência"
                  size="md"
                  isBonus
                  className="flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="day-badge mb-2 border-gold/50 bg-gold/15">
                    Bônus Exclusivo
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-midnight leading-snug">
                    Bônus: Botão de Emergência
                  </h3>
                  <p className="text-body-muted mt-3">
                    Use nos momentos em que você quase manda textão, corre atrás ou aceita
                    pouco de novo.
                  </p>
                </div>
              </motion.article>
            </div>

            <motion.div {...reveal} className="mt-8 md:mt-12">
              <CTABlock note="Acesso imediato por R$ 27,90">
                Quero Acessar o Protocolo
              </CTABlock>
            </motion.div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="section-mobile bg-white" aria-labelledby="benefits-heading">
          <div className="max-w-5xl mx-auto">
            <motion.h2 id="benefits-heading" {...reveal} className="headline-section">
              O que muda quando você para de agir como opção
            </motion.h2>
            <motion.p {...reveal} className="text-body-muted mt-3 md:mt-4 max-w-2xl">
              Você deixa de reagir pelo medo de perder e começa a agir com postura,
              clareza e direção.
            </motion.p>

            <div className="benefit-grid mt-6 md:mt-10">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.04 }}
                  className="benefit-card"
                >
                  <span className="benefit-card-icon" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-body leading-snug">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <motion.p {...reveal} className="pull-quote mt-8 md:mt-10 max-w-2xl mx-auto text-center md:text-left">
              Você não controla o que ele sente. Mas pode parar de entregar sua paz para
              alguém que ainda não decidiu ficar.
            </motion.p>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="section-mobile bg-section" aria-labelledby="how-heading">
          <div className="max-w-3xl mx-auto">
            <motion.h2 id="how-heading" {...reveal} className="headline-section text-center md:text-left">
              O protocolo foi feito para aplicar sem complicação
            </motion.h2>
            <motion.p {...reveal} className="text-body-muted mt-3 md:mt-4 max-w-2xl text-center md:text-left">
              Você não precisa entender tudo sobre relacionamentos.
              <span className="block mt-2">
                Precisa saber o que fazer quando ele some, volta, esfria ou evita definir a
                relação.
              </span>
            </motion.p>

            <ol className="how-timeline mt-6 md:mt-10">
              {howItWorks.map((item, i) => (
                <motion.li
                  key={item.step}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.05 }}
                  className="how-timeline-item"
                >
                  <span className="how-timeline-number" aria-hidden="true">
                    {item.step}
                  </span>
                  <div className="how-timeline-content">
                    <h3 className="font-serif text-xl md:text-2xl text-midnight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-body-muted mt-2">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        {/* BÔNUS */}
        <section className="section-mobile bg-cream" aria-labelledby="bonus-heading">
          <div className="max-w-5xl mx-auto">
            <div className="premium-card border-gold/20 bg-gradient-to-br from-white via-white to-gold/5 p-6 md:p-9 mb-6 md:mb-8">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
                <div className="flex-1 order-2 lg:order-1">
                  <motion.h2 id="bonus-heading" {...reveal} className="headline-section">
                    Bônus exclusivo: Botão de Emergência
                  </motion.h2>
                  <motion.p {...reveal} className="text-body-muted mt-4 md:mt-5">
                    Para os momentos em que você quase manda textão, aceita pouco de novo ou
                    sente vontade de correr atrás só para aliviar a ansiedade.
                  </motion.p>
                  <motion.p {...reveal} className="text-body mt-4">
                    Esse bônus te ajuda a pausar, respirar e não destruir sua postura no
                    momento em que a emoção tenta decidir por você.
                  </motion.p>
                </div>
                <motion.div {...reveal} className="flex-shrink-0 order-1 lg:order-2">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {bonusBenefits.map((item, i) => (
                <motion.div
                  key={item}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.05 }}
                  className="premium-card border-l-[3px] border-l-gold !py-5 md:!py-6"
                >
                  <p className="font-serif text-lg md:text-xl text-midnight leading-snug">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div {...reveal} className="mt-8 md:mt-12">
              <CTABlock note="Acesso imediato por R$ 27,90">
                Quero Acessar o Protocolo
              </CTABlock>
            </motion.div>
          </div>
        </section>

        {/* PROVA SOCIAL */}
        <section className="section-mobile bg-white" aria-labelledby="social-heading">
          <div className="max-w-6xl mx-auto">
            <motion.h2 id="social-heading" {...reveal} className="headline-section">
              Elas começaram a virar o jogo
            </motion.h2>
            <motion.p {...reveal} className="text-body-muted mt-3 md:mt-4 max-w-2xl">
              Relatos de mulheres que pararam de aceitar qualquer migalha como sinal de
              amor.
            </motion.p>

            <div className="flex gap-5 overflow-x-auto snap-x-mandatory pb-4 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-7 md:overflow-visible mt-6 md:mt-8">
              {testimonials.map((t, i) => (
                <motion.article
                  key={i}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.08 }}
                  className="flex-shrink-0 w-[88vw] sm:w-[75vw] md:w-auto snap-center premium-card flex flex-col min-h-[240px] !p-6 md:!p-8 border-midnight/10"
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

            <motion.div {...reveal} className="mt-7 md:mt-9">
              <CTABlock>Quero Parar de Correr Atrás</CTABlock>
            </motion.div>
          </div>
        </section>

        {/* OFERTA */}
        <section
          id="oferta"
          className="section-mobile bg-midnight text-white"
          aria-labelledby="oferta-heading"
        >
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
            <motion.h2
              id="oferta-heading"
              {...reveal}
              className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-tight"
            >
              Retome as rédeas da sua vida amorosa hoje.
            </motion.h2>
            <motion.p {...reveal} className="text-body text-white/85 mt-5 md:mt-7 max-w-lg leading-relaxed">
              Por menos do que uma pizza, você acessa um protocolo direto para parar de
              correr atrás, recuperar postura e descobrir se ele quer compromisso real — ou
              só acesso quando convém.
            </motion.p>

            <motion.div
              {...reveal}
              className="mt-7 md:mt-9 w-full text-left premium-card !bg-white/[0.07] !border-white/15 !p-6 md:!p-8"
            >
              <p className="font-sans text-sm uppercase tracking-wider text-gold-light mb-4">
                Você recebe hoje:
              </p>
              <ul className="flex flex-col gap-3">
                {offerIncludes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-sans text-[16px] md:text-[17px] text-white/95 leading-relaxed"
                  >
                    <span className="offer-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...reveal} className="mt-8 md:mt-10">
              <p className="font-serif text-xl md:text-2xl text-white/90">
                Tudo isso por apenas:
              </p>
              <p className="font-serif text-3xl md:text-5xl text-gold-light mt-2">
                R$ 27,90
              </p>
            </motion.div>

            <motion.div {...reveal} className="mt-8 md:mt-10 w-full max-w-md">
              <CTABlock variant="pulse" trustDark trustVariant="offer" align="center">
                Quero Acessar Agora
              </CTABlock>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-mobile bg-white" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto">
            <div className="gold-divider max-w-xs mx-auto mb-10" />
            <motion.h2
              id="faq-heading"
              {...reveal}
              className="headline-section mb-8 md:mb-10"
            >
              Perguntas frequentes
            </motion.h2>
            <motion.div {...reveal}>
              <FAQ />
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-10 px-6 text-center border-t border-midnight/5 bg-cream mobile-sticky-pad">
        <SocialLinks />
        <p className="font-sans text-gray-400 text-sm">
          © {new Date().getFullYear()} Projeto Astarte. Todos os direitos reservados.
        </p>
      </footer>

      <StickyMobileCTA />
    </>
  );
}
