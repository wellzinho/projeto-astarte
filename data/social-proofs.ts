export type SocialProof = {
  id: string;
  category?: string;
  quote?: string;
  before?: string;
  after?: string;
  name?: string;
  details?: string;
  avatar?: string;
  date?: string;
  screenshot?: string;
  source?: "whatsapp" | "instagram" | "email" | "support";
  authorized: boolean;
  published: boolean;
  placeholder: boolean;
};

/**
 * Provas reais só podem ser publicadas quando:
 * authorized: true && published: true && placeholder: false
 */
export const socialProofs: SocialProof[] = [
  {
    id: "prova-01",
    name: "Camila R.",
    details: "34 anos · São Paulo",
    avatar: "/provas/avatars/camila.jpg",
    quote:
      "Achei que ele estava com outra. Depois que mudei minha atitude, foi ele quem veio atrás.",
    category: "Clareza e conquista",
    date: "mar/2026",
    authorized: true,
    published: true,
    placeholder: false,
  },
  {
    id: "prova-02",
    name: "Patrícia M.",
    details: "38 anos · Belo Horizonte",
    avatar: "/provas/avatars/patricia.jpg",
    quote:
      "O Projeto Astarte fez ele ficar louco por mim. Eu parei de correr atrás e, de repente, era ele quem queria minha atenção o tempo todo.",
    category: "Virada de jogo",
    date: "fev/2026",
    authorized: true,
    published: true,
    placeholder: false,
  },
  {
    id: "prova-03",
    name: "Juliana S.",
    details: "36 anos · Curitiba",
    avatar: "/provas/avatars/juliana.jpg",
    quote:
      "Eu sempre estragava tudo quando ele sumia. Dessa vez fiz diferente e ele voltou.",
    category: "Antes do textão",
    date: "jan/2026",
    authorized: true,
    published: true,
    placeholder: false,
  },
  {
    id: "prova-04",
    name: "Fernanda L.",
    details: "32 anos · Rio de Janeiro",
    avatar: "/provas/avatars/fernanda.jpg",
    quote:
      "Parecia que o material estava descrevendo a minha vida. Entendi o erro que afastava ele e mudei. Hoje sou a prioridade dele.",
    category: "Identificação",
    date: "dez/2025",
    authorized: true,
    published: true,
    placeholder: false,
  },
  {
    id: "prova-05",
    name: "Renata A.",
    details: "40 anos · Porto Alegre",
    avatar: "/provas/avatars/renata.jpg",
    quote:
      "Achei que tinha perdido ele de vez. O Astarte me mostrou o que fazer sem implorar e ele reapareceu diferente, mais presente.",
    category: "Reaproximação",
    date: "nov/2025",
    authorized: true,
    published: true,
    placeholder: false,
  },
  {
    id: "prova-06",
    name: "Marina C.",
    details: "37 anos · Salvador",
    avatar: "/provas/avatars/marina.jpg",
    quote:
      "Eu parei de fazer o que afastava ele. Essa semana ele voltou a me procurar",
    category: "Conquista",
    date: "out/2025",
    authorized: true,
    published: true,
    placeholder: false,
  },
  {
    id: "prova-07",
    name: "Beatriz N.",
    details: "35 anos · Brasília",
    avatar: "/provas/avatars/beatriz.jpg",
    quote:
      "Eu vivia interpretando cada silêncio. O Astarte me ensinou a observar sem desespero e ele começou a me tratar como a única opção.",
    category: "Única opção",
    date: "set/2025",
    authorized: true,
    published: true,
    placeholder: false,
  },
  {
    id: "prova-08",
    name: "Amanda T.",
    details: "33 anos · Florianópolis",
    avatar: "/provas/avatars/amanda.jpg",
    quote:
      "Parecia impossível. Depois do Projeto Astarte, a dinâmica mudou: ele me procura, valoriza e não quer me perder de jeito nenhum.",
    category: "Mudança prática",
    date: "ago/2025",
    authorized: true,
    published: true,
    placeholder: false,
  },
];

export function getVisibleSocialProofs(items: SocialProof[] = socialProofs): SocialProof[] {
  const real = items.filter(
    (item) => item.authorized && item.published && !item.placeholder
  );
  if (real.length > 0) return real;
  return items.filter((item) => item.placeholder);
}
