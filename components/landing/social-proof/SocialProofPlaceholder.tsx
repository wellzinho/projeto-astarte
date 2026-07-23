import type { SocialProof } from "@/data/social-proofs";

export default function SocialProofPlaceholder({ proof }: { proof: SocialProof }) {
  return (
    <div
      data-placeholder={proof.screenshot}
      className="flex min-h-[120px] flex-col justify-center rounded-lg border border-dashed border-sapphire-deep/15 bg-[#F8F5EF] px-3 py-4"
    >
      <p className="text-center font-sans text-[13px] leading-snug text-ink/55">
        Prova real será inserida aqui
      </p>
    </div>
  );
}
