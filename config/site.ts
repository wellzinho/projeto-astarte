/**
 * Configuração central do Projeto Astarte.
 *
 * Dados comerciais / de contato usados no rodapé e links públicos.
 * Só altere valores aqui — não invente CPF, CNPJ ou endereços detalhados.
 */
export const siteConfig = {
  brand: "Projeto Astarte",
  /** Nome curto do responsável comercial (exibido no rodapé). */
  responsible: "Astarte",
  tagline: "Conteúdo digital sobre reconquista.",
  /** Cidade/UF comercial ou fiscal — sem inventar endereço completo. */
  commercialAddress: "Curitiba/PR",
  contactEmail: "projetoastarte.suporte@gmail.com",
  productName:
    "Projeto Astarte — 30 Dias para Reconquistar o Homem que Você Ama",
  productDescription:
    "Método digital de 30 dias em cinco volumes, com o bônus especial Hipnose da Reconquista.",
  price: "R$ 37,90",
  priceValue: "37.90",
  priceLabel: "Pagamento único",
  productSlug: "metodo-astarte",
  /** Checkout ativo da Kiwify — único link usado por todos os CTAs. */
  checkoutUrl: "https://pay.kiwify.com.br/aIDnsjt",
  /** Alias do checkoutUrl (mesmo destino). */
  kiwifyUrl: "https://pay.kiwify.com.br/aIDnsjt",
  social: {
    facebook: "https://www.facebook.com/Tshirtsastarte?locale=pt_BR",
    instagram: "https://www.instagram.com/projeto.astarte/",
  },
} as const;

export const CHECKOUT_URL = siteConfig.checkoutUrl;
