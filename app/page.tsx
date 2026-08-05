import HeroSection from "@/components/landing/HeroSection";
import ReviewGroup from "@/components/landing/ReviewGroup";
import InterestSection from "@/components/landing/InterestSection";
import PlanSection from "@/components/landing/PlanSection";
import DesireSection from "@/components/landing/DesireSection";
import ReceiveSection from "@/components/landing/ReceiveSection";
import OfferSection from "@/components/landing/OfferSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import SiteFooter from "@/components/landing/SiteFooter";
import MobileStickyCTA from "@/components/landing/MobileStickyCTA";
import AnalyticsTracker from "@/components/landing/AnalyticsTracker";

export default function Home() {
  return (
    <>
      {/* 1 — Hero */}
      <HeroSection />
      <main className="w-full max-w-[100vw] overflow-x-clip mobile-sticky-pad">
        {/* 2 — Primeira prova social */}
        <section className="section-pad bg-warm !py-6 md:!py-9" aria-label="Depoimentos de clientes">
          <div className="mx-auto w-full max-w-6xl min-w-0">
            <ReviewGroup
              group={1}
              eyebrow="Mulheres que também começaram a reconquista."
            />
          </div>
        </section>

        {/* 3 — Princípio Astarte */}
        <InterestSection />

        {/* 4 — Método / cinco volumes */}
        <PlanSection />

        {/* 5 — Desejo */}
        <DesireSection />

        {/* 6 — Segunda prova social */}
        <section className="section-pad bg-warm" aria-labelledby="proof-mid-heading">
          <div className="mx-auto w-full max-w-6xl min-w-0">
            <ReviewGroup
              group={2}
              columns={2}
              heading="Elas também queriam ter ele de volta."
              subheading="Veja os relatos de mulheres que decidiram começar a reconquista."
            />
          </div>
        </section>

        {/* 7 — Conteúdo da oferta */}
        <ReceiveSection />

        {/* 8 — Terceira prova social */}
        <section className="section-pad bg-warm !pb-0" aria-label="Mais depoimentos de clientes">
          <div className="mx-auto w-full max-w-6xl min-w-0">
            <ReviewGroup
              group={3}
              carousel
              heading="Quando a reconquista deixa de ser apenas uma esperança."
              subheading="Resultados e experiências de mulheres que começaram o Método Astarte."
            />
          </div>
        </section>

        {/* 9 — Oferta principal */}
        <OfferSection />

        {/* 10 — FAQ */}
        <FAQSection />

        {/* 11 — CTA final */}
        <FinalCTA />
      </main>
      <SiteFooter />
      <MobileStickyCTA />
      <AnalyticsTracker />
    </>
  );
}
