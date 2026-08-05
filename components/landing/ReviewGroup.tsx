"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getPublishedReviews, type Review, type ReviewGroupId } from "@/data/social-proofs";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

const LONG_QUOTE_LENGTH = 200;

interface ReviewGroupProps {
  group: ReviewGroupId;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  tone?: "light" | "dark";
  columns?: 2 | 3 | 4;
  /** Força carrossel horizontal em todos os breakpoints (com controles). */
  carousel?: boolean;
  className?: string;
}

function ReviewCard({
  review,
  onInteract,
}: {
  review: Review;
  onInteract: (action: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.quote.length > LONG_QUOTE_LENGTH;
  const shownQuote =
    isLong && !expanded ? `${review.quote.slice(0, LONG_QUOTE_LENGTH).trimEnd()}…` : review.quote;

  return (
    <article className="editorial-card flex h-full w-full min-w-0 flex-col !p-5 md:!p-6">
      <div className="flex min-w-0 items-center gap-3">
        {review.photo ? (
          <Image
            src={review.photo}
            alt={review.photoAlt ?? `Retrato ilustrativo — ${review.name}`}
            width={48}
            height={48}
            loading="lazy"
            className="h-12 w-12 flex-shrink-0 rounded-full border border-gold/40 object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 font-serif text-xl text-gold"
          >
            {review.name.charAt(0)}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate font-sans text-[16px] font-semibold text-sapphire-deep md:text-[15px]">
            {review.name}
          </p>
          <p className="truncate font-sans text-[16px] text-ink/55 md:text-[14px]">
            {review.location}
            {review.date ? ` · ${review.date}` : ""}
          </p>
        </div>
      </div>

      {typeof review.rating === "number" && (
        <p className="mt-2 font-sans text-sm text-gold" aria-label={`Nota ${review.rating} de 5`}>
          {"★".repeat(Math.round(review.rating))}
        </p>
      )}

      <blockquote className="mt-3 flex-1 break-words font-serif text-[1.1rem] leading-snug text-sapphire-deep md:text-xl">
        “{shownQuote}”
      </blockquote>

      {isLong && (
        <button
          type="button"
          className="mt-2 self-start font-sans text-[16px] font-semibold text-gold underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:text-[15px]"
          onClick={() => {
            setExpanded((value) => !value);
            onInteract(expanded ? "collapse_quote" : "expand_quote");
          }}
          aria-expanded={expanded}
        >
          {expanded ? "Recolher relato" : "Ler relato completo"}
        </button>
      )}

      {review.purchaseConfirmed && (
        <p className="mt-3 inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold uppercase tracking-wide text-gold">
          <span aria-hidden="true">✓</span> Cliente verificada
        </p>
      )}
    </article>
  );
}

/**
 * Bloco reutilizável de avaliações reais.
 * Desktop: grade. Mobile: rolagem horizontal contida — sem expandir o body.
 */
export default function ReviewGroup({
  group,
  eyebrow,
  heading,
  subheading,
  tone = "light",
  columns = 3,
  carousel = false,
  className,
}: ReviewGroupProps) {
  const items = getPublishedReviews(group);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const interacted = useRef(false);

  const onInteract = useCallback(
    (action: string) => {
      trackEvent("review_interaction", { review_group: group, action });
      interacted.current = true;
    },
    [group]
  );

  const getStep = useCallback(() => {
    const el = scrollerRef.current;
    const card = el?.querySelector("li");
    if (!el || !card) return 0;
    return card.getBoundingClientRect().width + 16;
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const step = getStep();
      if (step <= 0) return;
      setActive(Math.min(items.length - 1, Math.round(el.scrollLeft / step)));
      if (!interacted.current) {
        interacted.current = true;
        trackEvent("review_interaction", { review_group: group, action: "scroll" });
      }
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [getStep, group, items.length]);

  const scrollTo = (index: number, action: string) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = getStep();
    if (step <= 0) return;
    const next = Math.max(0, Math.min(items.length - 1, index));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({
      left: next * step,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    setActive(next);
    onInteract(action);
  };

  if (items.length === 0) return null;

  const dark = tone === "dark";

  return (
    <div className={cn("w-full max-w-full min-w-0", className)} data-analytics-section={`reviews_group_${group}`}>
      {eyebrow && (
        <p className={cn("eyebrow", dark && "!text-gold-light")}>{eyebrow}</p>
      )}
      {heading && (
        <h2
          className={cn(
            "mt-2 max-w-2xl font-serif text-[1.5rem] leading-snug tracking-tight md:text-[1.9rem]",
            dark ? "text-warm" : "text-sapphire-deep"
          )}
        >
          {heading}
        </h2>
      )}
      {subheading && (
        <p className={cn("mt-2 max-w-xl", dark ? "body-text-light" : "body-text")}>
          {subheading}
        </p>
      )}

      <div
        ref={scrollerRef}
        className={cn(
          "mt-5 w-full max-w-full min-w-0 overflow-x-auto overscroll-x-contain scroll-smooth md:mt-6",
          !carousel && "md:overflow-visible"
        )}
      >
        <ul
          className={cn(
            "flex w-max max-w-none snap-x snap-mandatory gap-4 pb-1",
            carousel
              ? "md:pb-1"
              : cn(
                  "md:grid md:w-full md:max-w-full md:gap-4 md:pb-0",
                  columns === 4
                    ? "md:grid-cols-2 lg:grid-cols-4"
                    : columns === 2
                      ? "md:grid-cols-2"
                      : "md:grid-cols-2 lg:grid-cols-3"
                )
          )}
        >
          {items.map((review) => (
            <li
              key={review.id}
              className={cn(
                "w-[min(82vw,20rem)] flex-shrink-0 snap-center",
                !carousel && "md:w-auto md:min-w-0 md:max-w-none md:flex-shrink"
              )}
            >
              <ReviewCard review={review} onInteract={onInteract} />
            </li>
          ))}
        </ul>
      </div>

      {items.length > 1 && (
        <div
          className={cn(
            "mt-3 flex items-center justify-center gap-4",
            !carousel && "md:hidden"
          )}
        >
          <button
            type="button"
            aria-label="Avaliação anterior"
            disabled={active === 0}
            onClick={() => scrollTo(active - 1, "prev")}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border font-serif text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
              dark ? "border-gold/50 text-gold-light" : "border-gold/50 text-gold",
              active === 0 && "opacity-35"
            )}
          >
            ‹
          </button>
          <div className="flex items-center gap-2" aria-label="Posição das avaliações">
            {items.map((review, i) => (
              <button
                key={review.id}
                type="button"
                aria-current={active === i}
                aria-label={`Ir para a avaliação ${i + 1} de ${items.length}`}
                onClick={() => scrollTo(i, "dot")}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                  active === i
                    ? "bg-gold"
                    : dark
                      ? "bg-warm/30"
                      : "bg-sapphire-deep/20"
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Próxima avaliação"
            disabled={active === items.length - 1}
            onClick={() => scrollTo(active + 1, "next")}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border font-serif text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
              dark ? "border-gold/50 text-gold-light" : "border-gold/50 text-gold",
              active === items.length - 1 && "opacity-35"
            )}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
