/**
 * Depoimentos reais de clientes do Projeto Astarte.
 *
 * Regras de publicação:
 * - Renderizar somente quando authorized: true && published: true.
 * - "Cliente verificada" aparece somente quando purchaseConfirmed: true.
 * - A foto do avatar é exibida quando `photo` existe. Fotos atuais são
 *   retratos ilustrativos de banco de imagens (Unsplash) — placeholders
 *   até haver fotos reais das clientes (photoConfirmed: true).
 * - Estrelas só aparecem quando rating tiver sido coletada de verdade.
 * - Nunca inventar nomes, cidades, notas, prints ou resultados.
 *
 * PENDÊNCIA DE COLETA — o carrossel do grupo 3 tem 10 slots.
 * Publicados: 8 (3 iniciais + 5 autorizados). Faltam 2 slots (14–15).
 */

export type ReviewGroupId = 1 | 2 | 3;

export type Review = {
  id: string;
  quote: string;
  name: string;
  location: string;
  photo?: string;
  photoAlt?: string;
  photoConfirmed: boolean;
  source?: "whatsapp" | "instagram" | "email" | "support";
  purchaseConfirmed: boolean;
  authorized: boolean;
  published: boolean;
  rating?: number;
  date?: string;
  group: ReviewGroupId;
};

export const reviews: Review[] = [
  // ——— Grupo 1: faixa após a hero ———
  {
    id: "prova-01",
    name: "Camila R.",
    location: "34 anos · São Paulo",
    photo: "/provas/avatars/camila.jpg",
    photoAlt: "Retrato ilustrativo — Camila R.",
    photoConfirmed: false,
    quote:
      "Achei que ele estava com outra. Depois que mudei minha atitude, foi ele quem veio atrás.",
    date: "mar/2026",
    purchaseConfirmed: false,
    authorized: true,
    published: true,
    group: 1,
  },
  {
    id: "prova-06",
    name: "Marina C.",
    location: "37 anos · Salvador",
    photo: "/provas/avatars/marina.jpg",
    photoAlt: "Retrato ilustrativo — Marina C.",
    photoConfirmed: false,
    quote:
      "Eu parei de fazer o que afastava ele. Essa semana ele voltou a me procurar",
    date: "out/2025",
    purchaseConfirmed: false,
    authorized: true,
    published: true,
    group: 1,
  },
  {
    id: "prova-03",
    name: "Juliana S.",
    location: "36 anos · Curitiba",
    photo: "/provas/avatars/juliana.jpg",
    photoAlt: "Retrato ilustrativo — Juliana S.",
    photoConfirmed: false,
    quote:
      "Eu sempre estragava tudo quando ele sumia. Dessa vez fiz diferente e ele voltou.",
    date: "jan/2026",
    purchaseConfirmed: false,
    authorized: true,
    published: true,
    group: 1,
  },

  // ——— Grupo 2: bloco do meio ———
  {
    id: "prova-02",
    name: "Patrícia M.",
    location: "38 anos · Belo Horizonte",
    photo: "/provas/avatars/patricia.jpg",
    photoAlt: "Retrato ilustrativo — Patrícia M.",
    photoConfirmed: false,
    quote:
      "O Projeto Astarte fez ele ficar louco por mim. Eu parei de correr atrás e, de repente, era ele quem queria minha atenção o tempo todo.",
    date: "fev/2026",
    purchaseConfirmed: false,
    authorized: true,
    published: true,
    group: 2,
  },
  {
    id: "prova-04",
    name: "Fernanda L.",
    location: "32 anos · Rio de Janeiro",
    photo: "/provas/avatars/fernanda.jpg",
    photoAlt: "Retrato ilustrativo — Fernanda L.",
    photoConfirmed: false,
    quote:
      "Parecia que o material estava descrevendo a minha vida. Entendi o erro que afastava ele e mudei. Hoje sou a prioridade dele.",
    date: "dez/2025",
    purchaseConfirmed: false,
    authorized: true,
    published: true,
    group: 2,
  },

  // ——— Grupo 3: carrossel antes da oferta (10 slots) ———
  {
    id: "prova-05",
    name: "Renata A.",
    location: "40 anos · Porto Alegre",
    photo: "/provas/avatars/renata.jpg",
    photoAlt: "Retrato ilustrativo — Renata A.",
    photoConfirmed: false,
    quote:
      "Achei que tinha perdido ele de vez. O Astarte me mostrou o que fazer sem implorar e ele reapareceu diferente, mais presente.",
    date: "nov/2025",
    purchaseConfirmed: false,
    authorized: true,
    published: true,
    group: 3,
  },
  {
    id: "prova-07",
    name: "Beatriz N.",
    location: "35 anos · Brasília",
    photo: "/provas/avatars/beatriz.jpg",
    photoAlt: "Retrato ilustrativo — Beatriz N.",
    photoConfirmed: false,
    quote:
      "Eu vivia interpretando cada silêncio. O Astarte me ensinou a observar sem desespero e ele começou a me tratar como a única opção.",
    date: "set/2025",
    purchaseConfirmed: false,
    authorized: true,
    published: true,
    group: 3,
  },
  {
    id: "prova-08",
    name: "Amanda T.",
    location: "33 anos · Florianópolis",
    photo: "/provas/avatars/amanda.jpg",
    photoAlt: "Retrato ilustrativo — Amanda T.",
    photoConfirmed: false,
    quote:
      "Parecia impossível. Depois do Projeto Astarte, a dinâmica mudou: ele me procura, valoriza e não quer me perder de jeito nenhum.",
    date: "ago/2025",
    purchaseConfirmed: false,
    authorized: true,
    published: true,
    group: 3,
  },

  {
    id: "prova-09",
    name: "Camila S.",
    location: "34 anos · Curitiba, PR",
    photo: "/provas/avatars/slot-09.jpg",
    photoAlt: "Retrato ilustrativo — Camila S.",
    photoConfirmed: false,
    quote:
      "O Projeto Astarte me ajudou a entender por que correr atrás dele estava piorando tudo. Quando comecei a aplicar o método, parei de agir por impulso e mudei completamente a forma como me posicionava. Depois de semanas sem conversar, ele voltou a me procurar. Mesmo antes disso, eu já estava muito mais segura e no controle da situação.",
    date: "jul/2026",
    purchaseConfirmed: false,
    authorized: true,
    published: true,
    group: 3,
  },
  {
    id: "prova-10",
    name: "Juliana M.",
    location: "39 anos · Belo Horizonte, MG",
    photo: "/provas/avatars/slot-10.jpg",
    photoAlt: "Retrato ilustrativo — Juliana M.",
    photoConfirmed: false,
    quote:
      "Eu achava que precisava mandar a mensagem perfeita para ele voltar. O Astarte me mostrou que o problema não estava apenas no que eu dizia, mas na forma como eu estava me comportando. Segui o passo a passo, parei de insistir e ele começou a demonstrar interesse novamente. Foi o primeiro material que realmente me mostrou o que fazer.",
    date: "jul/2026",
    purchaseConfirmed: false,
    authorized: true,
    published: true,
    group: 3,
  },
  {
    id: "prova-11",
    name: "Renata A.",
    location: "31 anos · Salvador, BA",
    photo: "/provas/avatars/slot-11.jpg",
    photoAlt: "Retrato ilustrativo — Renata A.",
    photoConfirmed: false,
    quote:
      "Quando comecei, eu estava desesperada e acreditava que ele já tinha outra pessoa. Os livros me ajudaram a enxergar os sinais com mais clareza e a não estragar qualquer possibilidade de aproximação. Hoje voltamos a conversar, mas o principal é que eu não me sinto mais dependente de cada resposta dele.",
    date: "jul/2026",
    purchaseConfirmed: false,
    authorized: true,
    published: true,
    group: 3,
  },
  {
    id: "prova-12",
    name: "Patrícia L.",
    location: "42 anos · São Paulo, SP",
    photo: "/provas/avatars/slot-12.jpg",
    photoAlt: "Retrato ilustrativo — Patrícia L.",
    photoConfirmed: false,
    quote:
      "Já tinha comprado outros materiais, mas sempre terminava com mais dúvidas. No Projeto Astarte encontrei orientações claras para cada fase. Entendi quando ficar em silêncio, como agir quando ele aparecesse e quais erros poderiam afastá-lo novamente. Ele voltou a falar comigo e, dessa vez, eu soube conduzir a situação sem me desesperar.",
    date: "jul/2026",
    purchaseConfirmed: false,
    authorized: true,
    published: true,
    group: 3,
  },
  {
    id: "prova-13",
    name: "Vanessa R.",
    location: "36 anos · Recife, PE",
    photo: "/provas/avatars/slot-13.jpg",
    photoAlt: "Retrato ilustrativo — Vanessa R.",
    photoConfirmed: false,
    quote:
      "O Astarte me ajudou justamente quando eu estava prestes a mandar mais uma mensagem enorme cobrando uma resposta. Usei o Botão de Emergência, consegui me controlar e comecei o método do jeito certo. Alguns dias depois, ele foi quem entrou em contato. Ainda estamos reconstruindo nossa relação, mas a mudança já foi muito maior do que eu esperava.",
    date: "ago/2026",
    purchaseConfirmed: false,
    authorized: true,
    published: true,
    group: 3,
  },

  // Slots restantes — fotos prontas; publicar só com relato real autorizado
  {
    id: "slot-14",
    name: "",
    location: "",
    photo: "/provas/avatars/slot-14.jpg",
    photoAlt: "Retrato ilustrativo — slot reservado",
    photoConfirmed: false,
    quote: "",
    purchaseConfirmed: false,
    authorized: false,
    published: false,
    group: 3,
  },
  {
    id: "slot-15",
    name: "",
    location: "",
    photo: "/provas/avatars/slot-15.jpg",
    photoAlt: "Retrato ilustrativo — slot reservado",
    photoConfirmed: false,
    quote: "",
    purchaseConfirmed: false,
    authorized: false,
    published: false,
    group: 3,
  },
];

export function getPublishedReviews(group?: ReviewGroupId): Review[] {
  return reviews.filter(
    (item) =>
      item.authorized &&
      item.published &&
      item.quote.trim().length > 0 &&
      item.name.trim().length > 0 &&
      (group === undefined || item.group === group)
  );
}
