export const siteConfig = {
  brand: "Projeto Astarte",
  price: "R$ 37,90",
  priceValue: "37.90",
  priceLabel: "Pagamento único",
  productSlug: "projeto-astarte",
  /** Checkout ativo da Kiwify — único link usado por todos os CTAs. */
  checkoutUrl: "https://pay.kiwify.com.br/aIDnsjt",
  supportUrl: "#",
  termsUrl: "#",
  privacyUrl: "#",
  purchasePolicyUrl: "#",
  contactUrl: "#",
  /** Alias do checkoutUrl (mesmo destino). */
  kiwifyUrl: "https://pay.kiwify.com.br/aIDnsjt",
} as const;

export const CHECKOUT_URL = siteConfig.checkoutUrl;
export const SUPPORT_URL = siteConfig.supportUrl;
export const TERMS_URL = siteConfig.termsUrl;
export const PRIVACY_URL = siteConfig.privacyUrl;
export const PURCHASE_POLICY_URL = siteConfig.purchasePolicyUrl;
