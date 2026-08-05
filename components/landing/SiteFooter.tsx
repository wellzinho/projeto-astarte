import { siteConfig } from "@/config/site";
import { footerDisclaimer } from "@/data/astarte-content";
import SocialLinks from "@/components/SocialLinks";

export default function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="border-t border-sapphire-deep/10 bg-paper px-5 py-10 text-center md:px-12"
    >
      <p className="font-serif text-3xl text-sapphire-deep">{siteConfig.brand}</p>
      <p className="mt-1 font-sans text-[15px] text-ink/60 md:text-sm">{siteConfig.tagline}</p>

      <div className="mt-6">
        <SocialLinks />
      </div>

      <div className="mx-auto mt-6 max-w-md space-y-1 font-sans text-[14px] leading-relaxed text-ink/60 md:text-[13px]">
        <p>
          Responsável: <span className="text-sapphire-deep/80">{siteConfig.responsible}</span>
        </p>
        <p>
          Endereço comercial ou fiscal:{" "}
          <span className="text-sapphire-deep/80">{siteConfig.commercialAddress}</span>
        </p>
        <p>
          Contato:{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-sapphire-deep/80 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {siteConfig.contactEmail}
          </a>
        </p>
      </div>

      <p className="micro-text mx-auto mt-5 max-w-2xl">{footerDisclaimer}</p>

      <p className="mt-5 font-sans text-[16px] text-ink/55 md:text-sm">
        © {new Date().getFullYear()} {siteConfig.brand}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
