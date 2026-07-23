"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import EditorialImagePlaceholder from "@/components/ui/EditorialImagePlaceholder";
import CarouselProgress from "@/components/landing/social-proof/CarouselProgress";
import { bonus, volumes } from "@/data/astarte-content";

const reveal = {
  initial: { opacity: 1, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4 },
};

const collection = [
  ...volumes.map((v) => ({
    number: `Volume ${v.number}`,
    title: v.title,
    promise: v.promise,
    coverPath: v.coverPath,
    label: `Volume ${v.number}`,
  })),
  {
    number: "Bônus",
    title: bonus.title,
    promise: bonus.promise,
    coverPath: bonus.coverPath,
    label: "Bônus",
  },
];

function CollectionCard({
  item,
  className = "",
}: {
  item: (typeof collection)[number];
  className?: string;
}) {
  return (
    <article className={`flex flex-col ${className}`}>
      <EditorialImagePlaceholder
        label={item.label}
        description={item.title}
        aspectRatio="3/4"
        variant={item.number === "Bônus" ? "gold" : "night"}
        futurePath={item.coverPath}
        className="!rounded-xl"
      />
      <p className="mt-3 font-sans text-xs uppercase tracking-[0.16em] text-gold">
        {item.number}
      </p>
      <h3 className="mt-1 font-serif text-lg leading-snug text-sapphire-deep md:text-xl">
        {item.title}
      </h3>
      <p className="mt-2 font-sans text-[15px] leading-relaxed text-ink/80 md:text-base">
        {item.promise}
      </p>
    </article>
  );
}

export default function CollectionSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = useCallback((next: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = ((next % collection.length) + collection.length) % collection.length;
    const card = el.children[clamped] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - 8, behavior: "smooth" });
    setIndex(clamped);
  }, []);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
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
    setIndex(closest);
  }, []);

  return (
    <section className="section-pad bg-paper" aria-labelledby="collection-heading">
      <div className="mx-auto max-w-6xl">
        <motion.h2 id="collection-heading" {...reveal} className="headline max-w-4xl">
          Descubra o erro e se torne a única escolha dele.
        </motion.h2>
        <motion.p {...reveal} className="body-text mt-4 max-w-2xl">
          Cada livro mostra uma coisa que você precisa descobrir para fazer ele ser seu.
        </motion.p>

        {/* Mobile: carrossel */}
        <div className="relative mt-8 md:hidden">
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex gap-4 overflow-x-auto px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            tabIndex={0}
            role="region"
            aria-label="Carrossel da coleção Projeto Astarte"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                e.preventDefault();
                scrollToIndex(index + 1);
              }
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                scrollToIndex(index - 1);
              }
            }}
          >
            {collection.map((item) => (
              <div key={item.title} className="w-[72%] max-w-[260px] flex-shrink-0 snap-start">
                <CollectionCard item={item} />
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between gap-4 px-1">
            <CarouselProgress index={index} total={collection.length} />
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Volume anterior"
                onClick={() => scrollToIndex(index - 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-sapphire-deep"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Próximo volume"
                onClick={() => scrollToIndex(index + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-sapphire-deep"
              >
                →
              </button>
            </div>
          </div>
          <p className="mt-2 px-1 font-sans text-sm text-ink/55" aria-live="polite">
            {index + 1} de {collection.length}
          </p>
        </div>

        {/* Desktop / tablet: grid */}
        <div className="mt-8 hidden grid-cols-2 gap-4 sm:grid-cols-3 md:grid lg:grid-cols-6 lg:gap-4">
          {collection.map((item, i) => (
            <motion.div
              key={item.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.03 }}
            >
              <CollectionCard item={item} />
            </motion.div>
          ))}
        </div>

        <motion.p
          {...reveal}
          className="mt-8 max-w-3xl border-l-[3px] border-gold pl-4 font-serif text-2xl leading-snug text-sapphire-deep md:text-[1.75rem]"
        >
          Você pode estar afastando esse homem sem perceber. O Projeto Astarte ensina como você
          ser a única opção dele.
        </motion.p>
      </div>
    </section>
  );
}
