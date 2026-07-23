"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { SocialProof } from "@/data/social-proofs";

interface Props {
  proof: SocialProof | null;
  onClose: () => void;
}

export default function SocialProofLightbox({ proof, onClose }: Props) {
  useEffect(() => {
    if (!proof) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [proof, onClose]);

  if (!proof?.screenshot || proof.placeholder) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-sapphire-deep/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Prova social ampliada"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-auto rounded-2xl bg-white p-3 shadow-editorial"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-lg text-sapphire-deep shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          aria-label="Fechar"
        >
          ×
        </button>
        <Image
          src={proof.screenshot}
          alt={`Prova social ampliada${proof.name ? ` de ${proof.name}` : ""}`}
          width={720}
          height={960}
          className="mx-auto h-auto max-h-[80vh] w-full object-contain"
        />
      </div>
    </div>
  );
}
