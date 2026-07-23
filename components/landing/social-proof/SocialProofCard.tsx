"use client";

import Image from "next/image";
import type { SocialProof } from "@/data/social-proofs";
import SocialProofPlaceholder from "./SocialProofPlaceholder";

interface Props {
  proof: SocialProof;
  onExpand?: (proof: SocialProof) => void;
}

export default function SocialProofCard({ proof, onExpand }: Props) {
  const isReal = proof.authorized && proof.published && !proof.placeholder;
  const hasImage = Boolean(isReal && proof.screenshot);
  const quote = proof.quote?.trim();
  const displayName = proof.name || "Cliente";

  return (
    <article className="flex h-full w-[270px] flex-col rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-[0_4px_16px_rgba(17,24,39,0.06)] sm:w-[280px] lg:w-[270px]">
      <header className="flex items-center gap-3">
        {proof.avatar && isReal ? (
          <Image
            src={proof.avatar}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <span
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sapphire-deep/10 font-sans text-sm font-medium text-sapphire-deep/70"
            aria-hidden="true"
          >
            {displayName.slice(0, 1).toUpperCase()}
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate font-sans text-[15px] font-medium text-ink">
            {isReal && proof.name ? proof.name : "Depoimento real"}
          </p>
          <p className="truncate font-sans text-sm text-ink/55">
            {isReal && proof.details ? proof.details : "depoimento real"}
          </p>
        </div>
      </header>

      <div className="mt-3 flex-1">
        {hasImage ? (
          <button
            type="button"
            onClick={() => onExpand?.(proof)}
            className="block w-full overflow-hidden rounded-lg border border-[#EEE] bg-[#FAFAFA] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label="Ampliar prova social"
          >
            <div className="relative mx-auto max-h-[220px] w-full">
              <Image
                src={proof.screenshot!}
                alt={`Prova social${proof.name ? ` de ${proof.name}` : ""}`}
                width={280}
                height={220}
                className="mx-auto max-h-[220px] w-full object-contain"
              />
            </div>
          </button>
        ) : proof.placeholder ? (
          <SocialProofPlaceholder proof={proof} />
        ) : null}

        {quote && !proof.placeholder ? (
          <div className={hasImage ? "mt-3" : "mt-1"}>
            <blockquote className="font-serif text-[16px] leading-relaxed text-sapphire-deep md:text-[17px]">
              “{quote}”
            </blockquote>
          </div>
        ) : null}
      </div>

      <footer className="mt-3 border-t border-[#F0F0F0] pt-2.5">
        <p className="font-sans text-sm text-ink/55">
          Relato enviado por uma cliente
          {proof.date ? ` · ${proof.date}` : ""}
        </p>
      </footer>
    </article>
  );
}
