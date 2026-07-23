import { siteConfig } from "@/config/site";
import SocialLinks from "@/components/SocialLinks";

export default function SiteFooter() {
  return (
    <footer className="border-t border-sapphire-deep/10 bg-paper px-5 py-12 text-center md:px-12">
      <p className="font-serif text-3xl text-sapphire-deep">{siteConfig.brand}</p>

      <div className="mt-8">
        <SocialLinks />
      </div>

      <p className="micro-text mx-auto mt-6 max-w-2xl">
        O Projeto Astarte apresenta um plano prático sobre relacionamentos. Resultados variam
        conforme o contexto e a aplicação.
      </p>

      <p className="mt-5 font-sans text-sm text-ink/55">
        © {new Date().getFullYear()} {siteConfig.brand}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
