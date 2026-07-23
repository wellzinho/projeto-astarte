import HeroSection from "@/components/landing/HeroSection";
import QuestionsSection from "@/components/landing/QuestionsSection";
import CollectionSection from "@/components/landing/CollectionSection";
import SocialProofCarousel from "@/components/landing/SocialProofCarousel";
import OfferSection from "@/components/landing/OfferSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import SiteFooter from "@/components/landing/SiteFooter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <QuestionsSection />
        <CollectionSection />
        <SocialProofCarousel />
        <OfferSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
