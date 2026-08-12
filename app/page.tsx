import PromoBar from "@/components/landing/PromoBar";
import HeroSection from "@/components/landing/HeroSection";
import ReviewGroup from "@/components/landing/ReviewGroup";
import ErrorSection from "@/components/landing/ErrorSection";
import DesireSection from "@/components/landing/DesireSection";
import MethodSection from "@/components/landing/MethodSection";
import InterestSection from "@/components/landing/InterestSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import PlanSection from "@/components/landing/PlanSection";
import ProofSection from "@/components/landing/ProofSection";
import ReceiveSection from "@/components/landing/ReceiveSection";
import OfferSection from "@/components/landing/OfferSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import ScarcitySection from "@/components/landing/ScarcitySection";
import PathsSection from "@/components/landing/PathsSection";
import FinalCTA from "@/components/landing/FinalCTA";
import FAQSection from "@/components/landing/FAQSection";
import SiteFooter from "@/components/landing/SiteFooter";
import MobileStickyCTA from "@/components/landing/MobileStickyCTA";
import AnalyticsTracker from "@/components/landing/AnalyticsTracker";
import { pricing, siteConfig } from "@/config/site";

/** Dados estruturados do produto — preço atual do lote (29.90 enquanto ativo). */
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: siteConfig.productName,
  description: siteConfig.productDescription,
  brand: { "@type": "Brand", name: siteConfig.brand },
  offers: {
    "@type": "Offer",
    price: pricing.priceValue,
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: siteConfig.checkoutUrl,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* 1 — Barra superior do lote */}
      <PromoBar />

      {/* 2 — Hero (grande promessa) */}
      <HeroSection />

      <main className="w-full max-w-[100vw] overflow-x-clip mobile-sticky-pad">
        {/* Prova imediata abaixo do hero */}
        <section
          className="section-pad bg-warm !py-6 md:!py-9"
          aria-label="Depoimentos reais de reconciliação"
        >
          <div className="mx-auto w-full max-w-6xl min-w-0">
            <ReviewGroup
              group={1}
              eyebrow="Elas seguiram o método e tiveram ele de volta."
            />
          </div>
        </section>

        {/* 3 — O erro que mata o desejo */}
        <ErrorSection />

        {/* 4 — O que você quer que ele sinta */}
        <DesireSection />

        {/* 5 — O que é o Método Astarte */}
        <MethodSection />

        {/* 6 — O Princípio Astarte */}
        <InterestSection />

        {/* 7 — Por que confiar (só renderiza com dados reais preenchidos) */}
        <AuthoritySection />

        {/* 8 — Os 30 dias: cinco movimentos */}
        <PlanSection />

        {/* 9 — Provas: números + depoimentos */}
        <ProofSection />

        {/* 10 — O que ela recebe */}
        <ReceiveSection />

        {/* 11 — Justificativa do preço + oferta */}
        <OfferSection />

        {/* 12 — Garantia */}
        <GuaranteeSection />

        {/* 13 — Escassez real */}
        <ScarcitySection />

        {/* 14 — Os três caminhos */}
        <PathsSection />

        {/* 15 — Fechamento emocional */}
        <FinalCTA />

        {/* FAQ */}
        <FAQSection />
      </main>
      <SiteFooter />
      <MobileStickyCTA />
      <AnalyticsTracker />
    </>
  );
}
