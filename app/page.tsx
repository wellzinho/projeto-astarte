"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ProductCover from "@/components/ProductCover";
import PdfPageMockup from "@/components/PdfPageMockup";
import SocialLinks from "@/components/SocialLinks";
import CronogramaTimeline from "@/components/CronogramaTimeline";

const reveal = {
  initial: false,
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
};

/** Hero: visível sem depender de IntersectionObserver ou hidratação lenta */
const revealHero = {
  initial: false,
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
};

const volumes = [
  {
    num: 1,
    title: "O Código do Silêncio",
    days: "Dias 1 a 6",
    desc: "Pare de correr atrás quando ele se afasta e aprenda a cortar o suprimento emocional que mantém você presa.",
  },
  {
    num: 2,
    title: "A Virada do Tabuleiro",
    days: "Dias 7 a 12",
    desc: "Ative magnetismo, presença e escassez real sem joguinho barato.",
  },
  {
    num: 3,
    title: "O Arquivo Secreto dos Cafajestes",
    days: "Dias 13 a 18",
    desc: "Entenda frases, desculpas e padrões de homens que querem acesso sem compromisso.",
  },
  {
    num: 4,
    title: "Os Gatilhos do Vínculo Profundo",
    days: "Dias 19 a 24",
    desc: "Construa conexão com limite, vulnerabilidade calibrada e valor percebido.",
  },
  {
    num: 5,
    title: "O Xeque-Mate",
    days: "Dias 25 a 30",
    desc: "O protocolo final para transformar ambiguidade em decisão: compromisso real ou retirada elegante.",
  },
];

const symptoms = [
  "Você olha o status dele a cada 30 minutos.",
  "Você sente que entrega energia de namorada, mas recebe tratamento de possibilidade.",
  "Ele some, volta carinhoso e você aceita como se nada tivesse acontecido.",
  "Você tem medo de pedir clareza e parecer emocionada.",
  "Você não sabe se ele gosta de você ou só gosta do acesso que tem.",
  "Sua autoestima depende do tom da última mensagem dele.",
  "Você já pensou em mandar textão só para tentar se sentir segura.",
];

const cronograma = [
  { days: "Dias 1 a 6", label: "Silêncio e corte do suprimento emocional." },
  { days: "Dias 7 a 12", label: "Magnetismo e virada de dinâmica." },
  { days: "Dias 13 a 18", label: "Leitura dos bastidores masculinos." },
  { days: "Dias 19 a 24", label: "Vínculo profundo com limite." },
  { days: "Dias 25 a 30", label: "Conversa final e decisão." },
];

const bonusExamples = [
  {
    when: "Quando ele some",
    msg: "Entendi seu silêncio como uma resposta. Não vou insistir onde a presença precisa ser cobrada.",
  },
  {
    when: "Quando ele diz que está confuso",
    msg: "Entendo sua confusão. Só não quero que ela vire o lugar onde eu fico presa.",
  },
  {
    when: "Quando ele tenta culpar seus limites",
    msg: "Não é drama. É clareza sobre o que eu aceito viver.",
  },
];

const offerIncludes = [
  "Volume 1: O Código do Silêncio",
  "Volume 2: A Virada do Tabuleiro",
  "Volume 3: O Arquivo Secreto dos Cafajestes",
  "Volume 4: Os Gatilhos do Vínculo Profundo",
  "Volume 5: O Xeque-Mate",
  "Bônus: O Botão de Emergência",
  "Cronograma de 30 dias",
  "Scripts prontos para conversas difíceis",
  "Acesso imediato",
  "Garantia de 7 dias",
];

const testimonials = [
  {
    hook: "Eu ia mandar mais um textão cobrando explicação.",
    rest: "Usei o protocolo do silêncio e percebi que eu estava tentando compensar a ausência dele com a minha ansiedade. Foi a primeira vez que eu não corri atrás.",
    name: "Camila",
    age: "28",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    alt: "Retrato de Camila",
  },
  {
    hook: "O Projeto Astarte não me ensinou a manipular ninguém.",
    rest: "Me ensinou a parar de agir como namorada de um homem que ainda me tratava como possibilidade.",
    name: "Juliana",
    age: "34",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    alt: "Retrato de Juliana",
  },
  {
    hook: "O bônus de mensagens foi o que mais me salvou.",
    rest: "Eu copiei uma frase curta, enviei sem drama e finalmente consegui manter minha postura.",
    name: "Mariana",
    age: "25",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    alt: "Retrato de Mariana",
  },
];

const faqItems = [
  {
    q: "Como vou receber os e-books?",
    a: "Após a compra, você recebe acesso imediato ao material digital pelo e-mail cadastrado.",
  },
  {
    q: "Esse método é sobre manipular homens?",
    a: "Não. O Projeto Astarte não ensina manipulação. Ele ensina leitura de comportamento, limites emocionais, comunicação firme e retomada de postura.",
  },
  {
    q: "Serve se ele já sumiu?",
    a: "Sim. O cronograma começa justamente ensinando como agir diante de afastamento, silêncio e frieza sem correr atrás ou se humilhar.",
  },
  {
    q: "Serve se ainda não temos nada sério?",
    a: "Sim. O protocolo foi criado para mulheres em relações ambíguas, ficantes, quase-relacionamentos ou conexões sem definição.",
  },
  {
    q: "E se ele não quiser compromisso?",
    a: "O protocolo também resolve isso: ele te ajuda a parar de perder tempo com quem quer acesso sem responsabilidade. O objetivo é clareza, não ilusão.",
  },
  {
    q: "Posso aplicar mesmo sendo ansiosa?",
    a: "Sim. O material foi pensado para momentos de ansiedade emocional, com passos diários e scripts prontos para evitar mensagens impulsivas.",
  },
  {
    q: "Tem garantia?",
    a: "Sim. Você tem 7 dias de garantia para acessar o material com tranquilidade.",
  },
];

function CTA({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "pulse";
  className?: string;
}) {
  return (
    <a
      href="#oferta"
      className={`btn-cta ${variant === "pulse" ? "btn-cta-pulse" : ""} ${className}`}
    >
      {children}
    </a>
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
      <header className="hero-section section-mobile !pt-10 md:!pt-14 !pb-12 md:!pb-20">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)] lg:grid-cols-[minmax(0,1.28fr)_minmax(0,0.72fr)] gap-6 md:gap-8 lg:gap-10 md:items-center">
          {/* Mockup da coleção */}
          <motion.div {...revealHero} className="hero-visual order-1">
            <div className="hero-product-wrap relative w-full min-w-0 mx-auto aspect-[2752/1536] max-w-full overflow-hidden">
              <Image
                src="/imagens/hero.png"
                alt="Coleção Projeto Astarte: 5 volumes e bônus O Botão de Emergência"
                fill
                priority
                sizes="(max-width: 768px) 94vw, 58vw"
              />
            </div>
          </motion.div>

          {/* Copy */}
          <div className="min-w-0 w-full flex flex-col justify-center order-2 md:pl-2 lg:pl-4">
            <motion.span
              {...revealHero}
              className="hero-eyebrow"
            >
              5 volumes + bônus
            </motion.span>
            <motion.h1
              {...revealHero}
              transition={{ ...revealHero.transition, delay: 0.05 }}
              className="headline-hero"
            >
              Ele se afasta, volta quando quer
              <span className="block mt-2 md:mt-3">e você continua tentando entender.</span>
            </motion.h1>
            <motion.p
              {...revealHero}
              transition={{ ...revealHero.transition, delay: 0.1 }}
              className="text-body-muted mt-6 md:mt-7"
            >
              O protocolo de 30 dias para sair da ambiguidade, recuperar sua postura
              emocional e fazer ele revelar se quer compromisso real, ou apenas acesso
              a você.
            </motion.p>
            <motion.div
              {...revealHero}
              transition={{ ...revealHero.transition, delay: 0.15 }}
              className="mt-8 md:mt-10"
            >
              <CTA className="md:w-full lg:w-auto">Quero Virar o Jogo em 30 Dias</CTA>
              <p className="font-sans text-[15px] md:text-base text-gray-500 mt-4 tracking-wide">
                Acesso imediato • Garantia de 7 dias
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      <main>
        {/* IDENTIFIQUE-SE */}
        <section className="section-mobile bg-white" aria-labelledby="dor-heading">
          <div className="max-w-4xl mx-auto">
            <motion.p {...reveal} className="impact-line mb-6 md:mb-8">
              Você não está exagerando. Você está presa em uma dinâmica que te faz
              duvidar de si mesma.
            </motion.p>

            <motion.h2 id="dor-heading" {...reveal} className="headline-section">
              Se você respondeu sim para isso, o Projeto Astarte foi feito para você.
            </motion.h2>

            <motion.ul
              {...reveal}
              className="mt-10 md:mt-14 flex flex-col gap-5 md:gap-6"
            >
              {symptoms.map((item, i) => (
                <li
                  key={i}
                  className="premium-card flex items-start gap-5 !py-5 md:!py-6"
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full border border-gold/40 flex items-center justify-center mt-0.5"
                    aria-hidden="true"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  </span>
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.p {...reveal} className="pull-quote mt-10 md:mt-14 max-w-2xl">
              &ldquo;Ausência também é resposta.&rdquo;
            </motion.p>

            <motion.div {...reveal} className="mt-10 md:mt-12 flex justify-center">
              <CTA className="md:min-w-[320px]">
                Quero Parar de Ser Tratada Como Opção
              </CTA>
            </motion.div>
          </div>
        </section>

        {/* MECANISMO */}
        <section
          className="section-mobile section-mecanismo"
          aria-labelledby="mecanismo-heading"
        >
          <div className="relative z-[1] max-w-3xl mx-auto md:mr-auto md:ml-0 lg:max-w-2xl">
            <motion.h2 id="mecanismo-heading" {...reveal} className="headline-section">
              O problema não é sentir demais. É entregar acesso demais para quem entrega
              clareza de menos.
            </motion.h2>

            <motion.p {...reveal} className="text-body mt-8 md:mt-10 max-w-xl">
              Quando um homem recebe atenção, corpo, escuta, paciência, exclusividade
              emocional e disponibilidade sem precisar entregar presença real, ele não
              sente urgência de decidir. O Projeto Astarte te ensina a parar de premiar
              ausência, cortar o impulso de correr atrás e ajustar o acesso até que a
              relação revele a verdade: compromisso ou conveniência.
            </motion.p>

            <motion.div
              {...reveal}
              className="mecanismo-glass mt-12 md:mt-14 border-l-[3px] border-l-gold"
            >
              <p className="pull-quote">
                Você não vai tentar convencer um homem. Vai parar de negociar contra você.
              </p>
            </motion.div>

            <motion.p {...reveal} className="mecanismo-closing mt-10 md:mt-12 max-w-lg">
              &ldquo;Saudade sem presença é só manutenção de acesso.&rdquo;
            </motion.p>
          </div>
        </section>

        {/* O QUE VOCÊ RECEBE */}
        <section className="section-mobile bg-cream" aria-labelledby="volumes-heading">
          <div className="max-w-6xl mx-auto">
            <motion.h2 id="volumes-heading" {...reveal} className="headline-section text-center md:text-left">
              O que você recebe dentro do Projeto Astarte
            </motion.h2>
            <motion.p {...reveal} className="text-body-muted mt-4 text-center md:text-left max-w-2xl">
              Do quase para a decisão. Uma coleção completa para ler no celular.
            </motion.p>

            <div className="mt-12 md:mt-16 flex flex-col gap-8 md:gap-10">
              {volumes.map((vol, i) => (
                <motion.article
                  key={vol.num}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.06 }}
                  className="premium-card flex flex-col md:flex-row gap-7 md:gap-12 items-start md:items-center relative overflow-hidden shadow-editorial"
                >
                  <div className="gold-accent-bar absolute top-0 left-8 md:left-10" aria-hidden="true" />
                  <ProductCover
                    label={String(vol.num).padStart(2, "0")}
                    title={vol.title}
                    size="lg"
                    className="flex-shrink-0 mx-auto md:mx-0 mt-1"
                  />
                  <div className="flex-1 text-center md:text-left pt-1">
                    <span className="day-badge mb-3">{vol.days}</span>
                    <p className="font-sans text-sm uppercase tracking-wider text-gray-500 mb-2">
                      Volume {vol.num}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl text-midnight leading-snug">
                      {vol.title}
                    </h3>
                    <p className="text-body-muted mt-4 md:mt-5">{vol.desc}</p>
                  </div>
                </motion.article>
              ))}

              <motion.article
                {...reveal}
                className="premium-card flex flex-col md:flex-row gap-7 md:gap-12 items-start md:items-center border-gold/30 bg-gradient-to-br from-white via-white to-gold/10 relative overflow-hidden shadow-editorial"
              >
                <div className="gold-accent-bar absolute top-0 left-8 md:left-10 bg-gold" aria-hidden="true" />
                <ProductCover
                  label="★"
                  title="O Botão de Emergência"
                  size="lg"
                  isBonus
                  className="flex-shrink-0 mx-auto md:mx-0 mt-1"
                />
                <div className="flex-1 text-center md:text-left pt-1">
                  <span className="day-badge mb-3 border-gold/50 bg-gold/15">Bônus Exclusivo</span>
                  <h3 className="font-serif text-2xl md:text-3xl text-midnight leading-snug">
                    O Botão de Emergência
                  </h3>
                  <p className="text-body-muted mt-4 md:mt-5">
                    Mensagens copie e cole para sumiço, frieza, convite de última hora,
                    mentira, confusão, sexualização e conversas difíceis.
                  </p>
                </div>
              </motion.article>
            </div>

            <motion.div {...reveal} className="mt-14 md:mt-16 flex justify-center">
              <CTA className="md:min-w-[360px]">
                Quero Receber os 5 Volumes + Bônus
              </CTA>
            </motion.div>
          </div>
        </section>

        {/* VEJA POR DENTRO */}
        <section className="section-mobile bg-white" aria-labelledby="inside-heading">
          <div className="max-w-6xl mx-auto">
            <motion.h2 id="inside-heading" {...reveal} className="headline-section">
              Veja por dentro do protocolo
            </motion.h2>
            <motion.p {...reveal} className="text-body-muted mt-5 md:mt-6 max-w-3xl">
              Não é um PDF raso com frases motivacionais. É uma coleção estruturada, com
              cronograma, explicações, exercícios, scripts e rituais de decisão para os
              próximos 30 dias.
            </motion.p>

            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0 }}>
                <PdfPageMockup
                  type="cronograma"
                  title="Página do cronograma diário"
                  caption="Cronograma diário para saber exatamente como agir."
                />
              </motion.div>
              <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>
                <PdfPageMockup
                  type="script"
                  title="Página de scripts prontos"
                  caption="Scripts prontos para conversas difíceis."
                />
              </motion.div>
              <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.16 }}>
                <PdfPageMockup
                  type="bonus"
                  title="Página do bônus"
                  caption="Exercícios e frases para recuperar postura sem implorar."
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CRONOGRAMA */}
        <section className="section-mobile bg-white" aria-labelledby="cronograma-heading">
          <div className="max-w-4xl mx-auto">
            <motion.h2 id="cronograma-heading" {...reveal} className="headline-section">
              Um passo por dia. Uma decisão por vez.
            </motion.h2>
            <motion.p {...reveal} className="text-body mt-6 md:mt-8">
              Você não precisa descobrir tudo sozinha nem agir no impulso. Durante 30 dias,
              o Projeto Astarte guia suas atitudes com uma técnica por dia: primeiro você
              corta a ansiedade, depois muda a dinâmica, aprende a ler os padrões masculinos,
              constrói vínculo com critério e conduz a relação para uma decisão.
            </motion.p>

            <motion.div {...reveal} className="mt-10 md:mt-14">
              <CronogramaTimeline items={cronograma} />
            </motion.div>
          </div>
        </section>

        {/* BÔNUS */}
        <section className="section-mobile bg-section" aria-labelledby="bonus-heading">
          <div className="max-w-5xl mx-auto">
            <div className="premium-card-dark border-2 border-gold/20 bg-gradient-to-br from-section via-white to-gold/5 p-8 md:p-10 mb-10 md:mb-12">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
                <div className="flex-1 order-2 lg:order-1">
                  <motion.h2 id="bonus-heading" {...reveal} className="headline-section">
                    Bônus Arrebatador: O Botão de Emergência
                  </motion.h2>
                  <motion.p {...reveal} className="headline-sub mt-4 text-gray-700">
                    Mensagens prontas para os momentos em que você não pode errar.
                  </motion.p>
                  <motion.p {...reveal} className="text-body mt-6 md:mt-8">
                    Quando a ansiedade bate, a mensagem errada te coloca de joelhos. O Botão de
                    Emergência entrega scripts prontos para responder com postura quando ele some,
                    responde frio, volta carinhoso, sexualiza a conversa, mente, evita compromisso
                    ou tenta culpar seus limites.
                  </motion.p>
                </div>

                <motion.div {...reveal} className="flex-shrink-0 order-1 lg:order-2">
                  <div className="relative p-4 rounded-2xl border border-gold/25 bg-midnight/5">
                    <ProductCover
                      label="★"
                      title="O Botão de Emergência"
                      size="xl"
                      isBonus
                      className="shadow-editorial"
                    />
                    <span className="absolute -top-3 -right-3 bg-gold text-midnight text-xs font-sans font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-soft">
                      Kit de Emergência
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {bonusExamples.map((ex, i) => (
                <motion.div
                  key={i}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.06 }}
                  className="premium-card border-l-[3px] border-l-gold !py-7 md:!py-8"
                >
                  <p className="font-sans text-xs md:text-sm uppercase tracking-wider text-gold-dark mb-2">
                    Situação
                  </p>
                  <p className="font-serif text-lg md:text-xl text-midnight mb-4">
                    {ex.when}
                  </p>
                  <p className="font-sans text-xs md:text-sm uppercase tracking-wider text-gray-400 mb-2">
                    Mensagem pronta
                  </p>
                  <p className="font-serif text-[17px] md:text-[19px] text-midnight italic leading-relaxed">
                    &ldquo;{ex.msg}&rdquo;
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div {...reveal} className="mt-12 md:mt-14 flex justify-center">
              <CTA className="md:min-w-[360px]">
                Quero Receber o Bônus Junto com o Protocolo
              </CTA>
            </motion.div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="section-mobile bg-cream" aria-labelledby="social-heading">
          <div className="max-w-6xl mx-auto">
            <motion.h2 id="social-heading" {...reveal} className="headline-section mb-8 md:mb-12">
              Elas viraram o jogo
            </motion.h2>

            <div className="flex gap-6 overflow-x-auto snap-x-mandatory pb-4 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
              {testimonials.map((t, i) => (
                <motion.article
                  key={i}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.1 }}
                  className="flex-shrink-0 w-[90vw] sm:w-[80vw] md:w-auto snap-center premium-card flex flex-col min-h-[300px] !p-8 md:!p-10"
                >
                  <div className="relative w-16 h-16 mb-6">
                    <Image
                      src={t.image}
                      alt={t.alt}
                      fill
                      className="rounded-full object-cover"
                      sizes="64px"
                    />
                  </div>
                  <blockquote className="flex-1">
                    <p className="font-serif text-[18px] md:text-xl lg:text-[1.35rem] text-midnight font-semibold leading-snug mb-4">
                      &ldquo;{t.hook}&rdquo;
                    </p>
                    <p className="font-sans text-[17px] md:text-[18px] text-gray-700 leading-[1.7]">
                      {t.rest}
                    </p>
                  </blockquote>
                  <p className="font-serif text-xl md:text-2xl text-midnight mt-7 pt-6 border-t border-midnight/8">
                    {t.name}, {t.age}
                  </p>
                </motion.article>
              ))}
            </div>
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
            <motion.p {...reveal} className="text-body text-white/85 mt-6 md:mt-8 max-w-lg leading-relaxed">
              Receba agora o Protocolo Astarte completo com 5 volumes + bônus arrebatador.
            </motion.p>

            <motion.p
              {...reveal}
              className="font-serif text-xl md:text-2xl text-gold-light mt-8 md:mt-10 max-w-lg leading-[1.5]"
            >
              Você não está comprando apenas e-books. Está comprando um plano de ação para os
              próximos 30 dias para parar de correr atrás, recuperar sua postura e descobrir
              se ele quer compromisso ou apenas acesso.
            </motion.p>

            <motion.div
              {...reveal}
              className="mt-8 md:mt-10 w-full text-left premium-card !bg-white/[0.07] !border-white/15 !p-8 md:!p-10"
            >
              <p className="font-sans text-sm uppercase tracking-wider text-gold-light mb-6">
                Você recebe:
              </p>
              <ul className="flex flex-col gap-4">
                {offerIncludes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 font-sans text-[17px] md:text-[18px] text-white/95 leading-relaxed"
                  >
                    <span className="offer-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...reveal} className="mt-10 md:mt-12">
              <p className="font-sans text-white/40 text-lg line-through">De R$ 97,00</p>
              <p className="font-serif text-2xl md:text-4xl text-white mt-2">
                por apenas 12x de R$ 2,99
              </p>
              <p className="font-serif text-xl md:text-2xl text-gold-light mt-1">
                ou R$ 27,90 à vista
              </p>
            </motion.div>

            <motion.div {...reveal} className="mt-10 w-full max-w-md">
              <CTA variant="pulse">Sim, Quero Acessar o Protocolo Agora</CTA>
            </motion.div>

            <motion.p {...reveal} className="font-sans text-white/55 text-[15px] md:text-base mt-6">
              Acesso imediato • Pagamento seguro via Kiwify • Garantia de 7 dias
            </motion.p>
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
              Perguntas Frequentes
            </motion.h2>
            <motion.div {...reveal}>
              <FAQ />
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-10 px-6 text-center border-t border-midnight/5 bg-cream">
        <SocialLinks />
        <p className="font-sans text-gray-400 text-sm">
          © {new Date().getFullYear()} Projeto Astarte. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}
