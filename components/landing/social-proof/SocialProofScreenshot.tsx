import Image from "next/image";
import type { SocialProof } from "@/data/social-proofs";
import SocialProofPlaceholder from "./SocialProofPlaceholder";

export default function SocialProofScreenshot({ proof }: { proof: SocialProof }) {
  if (proof.placeholder || !proof.screenshot || !proof.authorized || !proof.published) {
    return <SocialProofPlaceholder proof={proof} />;
  }

  return (
    <div className="relative max-h-[220px] w-full overflow-hidden rounded-lg border border-[#EEE] bg-[#FAFAFA]">
      <Image
        src={proof.screenshot}
        alt={`Prova social${proof.name ? ` de ${proof.name}` : ""}`}
        width={280}
        height={220}
        className="mx-auto max-h-[220px] w-full object-contain"
      />
    </div>
  );
}
