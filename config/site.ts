/**
 * Configuração central do Método Astarte.
 *
 * Dados comerciais / de contato usados no rodapé e links públicos.
 * Só altere valores aqui — não invente CPF, CNPJ ou endereços detalhados.
 */

/* ------------------------------------------------------------ Lote promocional */

/**
 * Controle manual do lote de reabertura.
 * true  → página vende por R$ 29,90 com R$ 130,00 riscado (checkout promocional).
 * false → página volta para R$ 130,00 (exige REGULAR_CHECKOUT_URL preenchida).
 */
export const PROMOTIONAL_BATCH_ACTIVE = true;

/**
 * Controle manual da barra superior quando o lote estiver realmente acabando.
 * true → a barra passa a exibir "ÚLTIMOS ACESSOS DO LOTE DE R$ 29,90".
 */
export const PROMO_BAR_FINAL_PHASE = false;

/**
 * Checkout promocional ativo (R$ 29,90) — Kiwify.
 */
const PROMO_CHECKOUT_URL = "https://pay.kiwify.com.br/aIDnsjt";

/**
 * [URL REAL DO CHECKOUT DE R$ 130,00]
 * PENDENTE: preencher com a oferta regular da Kiwify antes de desativar o lote.
 * Enquanto estiver vazia, a página NÃO troca para a versão de R$ 130,00,
 * mesmo que PROMOTIONAL_BATCH_ACTIVE seja alterado para false.
 */
export const REGULAR_CHECKOUT_URL = "";

const promoEffective = PROMOTIONAL_BATCH_ACTIVE || REGULAR_CHECKOUT_URL.length === 0;

/** Preços e checkout ativos conforme o estado do lote. */
export const pricing = promoEffective
  ? {
      promoActive: true as const,
      price: "R$ 29,90",
      priceValue: "29.90",
      previousPrice: "R$ 130,00",
      previousPriceValue: "130.00",
      checkoutUrl: PROMO_CHECKOUT_URL,
    }
  : {
      promoActive: false as const,
      price: "R$ 130,00",
      priceValue: "130.00",
      previousPrice: null,
      previousPriceValue: null,
      checkoutUrl: REGULAR_CHECKOUT_URL,
    };

/* ------------------------------------------------------------ Autoridade */

/**
 * Dados reais do responsável pelo método.
 * PENDENTE DE PREENCHIMENTO — a seção de autoridade só é exibida quando
 * `name` e `credentials` estiverem preenchidos com dados reais compromováveis.
 * Não publicar placeholders.
 */
export const authorityConfig = {
  /** [NOME DO RESPONSÁVEL] */
  name: "",
  /** [FORMAÇÃO COMPROVÁVEL] */
  credentials: "",
  /** [ESTUDOS QUE FUNDAMENTARAM O MÉTODO] */
  studies: "",
  /** [HISTÓRIA REAL DE CRIAÇÃO] */
  story: "",
  /** Caminho da foto real (ex.: /imagens/responsavel.jpg) */
  photo: "",
} as const;

/* ------------------------------------------------------------ Site */

export const siteConfig = {
  brand: "Método Astarte",
  /** Nome curto do responsável comercial (exibido no rodapé). */
  responsible: "Astarte",
  tagline: "Conteúdo digital sobre reconquista.",
  /** Cidade/UF comercial ou fiscal — sem inventar endereço completo. */
  commercialAddress: "Curitiba/PR",
  contactEmail: "projetoastarte.suporte@gmail.com",
  productName:
    "Método Astarte — O Plano de 30 Dias para Ter o Homem que Você Ama de Volta",
  productDescription:
    "Protocolo digital de 30 dias para reconquistar o homem que se afastou, com o bônus Hipnose da Reconquista.",
  price: pricing.price,
  priceValue: pricing.priceValue,
  priceLabel: "Pagamento único",
  productSlug: "metodo-astarte",
  /** Checkout ativo — único link usado por todos os CTAs. */
  checkoutUrl: pricing.checkoutUrl,
  /** Alias do checkoutUrl (mesmo destino). */
  kiwifyUrl: pricing.checkoutUrl,
  social: {
    facebook: "https://www.facebook.com/Tshirtsastarte?locale=pt_BR",
    instagram: "https://www.instagram.com/projeto.astarte/",
  },
} as const;

export const CHECKOUT_URL = siteConfig.checkoutUrl;
