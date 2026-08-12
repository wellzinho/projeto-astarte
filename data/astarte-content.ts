import { pricing } from "@/config/site";

/**
 * Copy central do Método Astarte — página de resposta direta.
 * Promessa única: o protocolo de 30 dias para reconquistar o homem que se afastou.
 * Um produto, um objetivo. Nada de cinco e-books vendidos separadamente.
 */

/* ---------------------------------------------------------------- CTAs */

export const CTA_MAIN_LABEL = "QUERO TER ELE DE VOLTA";
export const CTA_METHOD_LABEL = "COMEÇAR MEU PLANO DE 30 DIAS";
export const CTA_PROOF_LABEL = "QUERO SER A PRÓXIMA HISTÓRIA";
export const CTA_PRICE_LABEL = `COMPRAR AGORA POR ${pricing.price}`;
export const CTA_GUARANTEE_LABEL = "QUERO CONHECER O ASTARTE SEM RISCO";
export const CTA_SCARCITY_LABEL = `GARANTIR MEU ACESSO POR ${pricing.price}`;
export const CTA_FINAL_LABEL = "SIM, EU QUERO ELE DE VOLTA";
export const CTA_STICKY_TEXT = "QUERO TER ELE DE VOLTA";

/* ------------------------------------------------------- Barra superior */

export const promoBarTitle = "Lote de reabertura do Método Astarte";

export const promoBarText = pricing.promoActive
  ? `De ${pricing.previousPrice} por apenas ${pricing.price} enquanto houver acessos neste lote.`
  : "";

/** Exibido quando PROMO_BAR_FINAL_PHASE = true (fim real do lote). */
export const promoBarFinalTitle = `Últimos acessos do lote de ${pricing.price}`;

export const promoBarFinalText = `Depois disso, o Método Astarte voltará para R$ 130,00.`;

/* ---------------------------------------------------------------- Hero */

export const heroProofLine =
  "Mais de 10 mil mulheres já usaram o Método Astarte para ter o homem que amavam de volta";

export const heroTitle =
  "O plano de 30 dias para ter o homem que você ama de volta";

export const heroComplement =
  "Faça ele sentir sua falta, recuperar o desejo e perceber que pode estar perdendo a mulher que ainda ama.";

export const heroEvenIf = [
  "Mesmo que hoje ele esteja frio.",
  "Mesmo que tenha se afastado.",
  "Mesmo que pareça decidido a seguir sem você.",
] as const;

export const heroText =
  "O Método Astarte mostra como parar de afastá-lo e fazer ele voltar a olhar para você como a mulher que não deveria ter deixado ir.";

export const heroBullets = [
  "Sem implorar por mais uma chance.",
  "Sem correr atrás de uma resposta.",
  "Sem aceitar migalhas.",
  "Sem depender de uma mensagem milagrosa.",
  "Sem continuar errando até ele se acostumar com uma vida sem você.",
] as const;

export const heroHighlight = [
  "Ele já sabe que você o ama.",
  "Agora ele precisa sentir que também pode perder você.",
] as const;

export const heroPriceEyebrow = "Lote promocional";

export const heroMicrocopy =
  "Entre agora, conheça o método e decida com tranquilidade. Sua compra possui garantia de reembolso.";

export const heroTrustLine =
  "Acesso imediato • Pagamento seguro • Acesso permanente";

/* -------------------------------------------- O erro que mata o desejo */

export const errorTitle =
  "Quando você corre atrás dele, ele não sente medo de te perder";

export const errorIntro = "Ele sente que você continuará esperando.";

export const errorList = [
  "Cada mensagem.",
  "Cada explicação.",
  "Cada pedido para conversar.",
  "Cada tentativa de mostrar que agora será diferente.",
] as const;

export const errorQuestionLead =
  "Tudo isso pode estar respondendo à pergunta que passa pela cabeça dele:";

export const errorQuestion =
  "“Eu posso ir embora e ainda encontrar ela esperando por mim?”";

export const errorConsequences = [
  "Enquanto a resposta for “sim”, ele não precisa sentir saudade.",
  "Não precisa ter ciúmes.",
  "Não precisa tomar uma decisão.",
  "Não precisa fazer esforço para recuperar você.",
] as const;

export const errorHighlight =
  "Um homem não corre atrás daquilo que acredita já ter garantido.";

export const errorClosing = [
  "Você não precisa provar mais uma vez que o ama.",
  "Precisa fazer ele perceber que, se continuar parado, pode perder você de verdade.",
] as const;

/* ------------------------------------------ O que você quer que ele sinta */

export const feelingsTitle =
  "O Astarte foi criado para mudar o que ele sente quando pensa em você";

export type FeelingBlock = {
  name: string;
  lines: readonly string[];
};

export const feelingBlocks: readonly FeelingBlock[] = [
  {
    name: "Saudade",
    lines: [
      "Ele lembra das conversas.",
      "Dos momentos.",
      "Da intimidade.",
      "Da mulher que fazia parte da vida dele.",
    ],
  },
  {
    name: "Curiosidade",
    lines: [
      "Ele percebe que você não está mais reagindo da mesma maneira.",
      "E começa a se perguntar:",
      "“O que mudou nela?”",
    ],
  },
  {
    name: "Ciúmes",
    lines: [
      "Sem inventar outro homem e sem postar indiretas, ele começa a imaginar se você está seguindo em frente sem ele.",
    ],
  },
  {
    name: "Medo de te perder",
    lines: [
      "Ele entende que você não ficará parada para sempre.",
      "E que outra pessoa pode enxergar a mulher que ele deixou escapar.",
    ],
  },
  {
    name: "Desejo",
    lines: [
      "Ele deixa de enxergar desespero e cobrança.",
      "E volta a enxergar a mulher que despertou a atração dele no começo.",
    ],
  },
] as const;

export const feelingsClosing = [
  "Você não precisa obrigar ele a voltar.",
  "Precisa fazer ele voltar a querer você.",
] as const;

/* --------------------------------------------- O que é o Método Astarte */

export const methodTitleTop =
  "O Método Astarte não foi criado para fazer você esquecer ele";

export const methodTitleBottom = "Foi criado para fazer ele voltar";

export const methodIntroLines = [
  "Talvez já tenham dito para você se amar mais.",
  "Seguir em frente.",
  "Aceitar que acabou.",
  "Bloquear ele.",
  "Conhecer outra pessoa.",
] as const;

export const methodIntroTurn = [
  "Mas você não chegou até aqui porque quer esquecer.",
  "Você chegou porque ainda ama esse homem.",
  "E acredita que a história de vocês merece outra chance.",
  "Foi para essa mulher que o Método Astarte foi criado.",
] as const;

export const methodHighlight =
  "Um protocolo completo de 30 dias para transformar distância em saudade, saudade em desejo e desejo em vontade de voltar.";

export const methodDiscoverLead = "No Astarte, você descobre:";

export const methodDiscoverList = [
  "O que precisa parar de fazer imediatamente.",
  "Como deixar de ser uma certeza confortável.",
  "Como fazer sua ausência começar a pesar.",
  "Como voltar a ocupar a mente dele.",
  "Como despertar curiosidade, saudade e desejo.",
  "Como agir quando ele voltar a procurar.",
  "O que dizer sem entregar novamente todo o controle.",
  "Como transformar o primeiro contato em uma chance real.",
  "Como conduzir a volta sem afastá-lo novamente.",
] as const;

export const methodClosingLines = [
  "Você não abre o Astarte para estudar relacionamento.",
  "Você abre para descobrir o que fazer hoje para ter ele de volta.",
] as const;

/* -------------------------------------------------- Princípio Astarte */

export const principleName = "O Princípio Astarte";

export const principleTitleTop = "O problema não é que ele esqueceu você";

export const principleTitleBottom =
  "O problema é o que ele sente quando lembra de você";

export const principleIntro = [
  "Um homem pode ainda amar e, ao mesmo tempo, associar a relação a brigas, cobranças, pressão e desgaste.",
  "Enquanto essas forem as primeiras lembranças que aparecem, ele continuará se protegendo.",
  "Por isso, uma única frase não resolve.",
  "Uma mensagem pode fazer ele responder.",
  "Mas somente uma mudança completa pode fazer ele querer ficar.",
] as const;

export const principleOrderLead = "O Método Astarte trabalha na ordem certa:";

export type PrincipleStep = {
  label: string;
  text: string;
};

export const principleSteps: readonly PrincipleStep[] = [
  {
    label: "Primeiro",
    text: "Você para de reforçar os motivos que fizeram ele se afastar.",
  },
  {
    label: "Depois",
    text: "Ele percebe que você não continuará esperando no mesmo lugar.",
  },
  {
    label: "Então",
    text: "Sua ausência começa a ocupar o espaço que antes era preenchido por cobranças.",
  },
] as const;

export const principleResult = [
  "A saudade aparece.",
  "A curiosidade cresce.",
  "O medo de perder começa a incomodar.",
  "E ele volta a enxergar a mulher pela qual se apaixonou.",
] as const;

export const principleHighlightLead = "O objetivo não é arrancar uma resposta.";

export const principleHighlightText = "É fazer ele pensar:";

export const principleHighlightQuote =
  "“Eu posso estar perdendo a mulher da minha vida.”";

export const principleExplanation =
  "Esse é o Princípio Astarte: antes de qualquer contato, mudar o que ele sente quando lembra de você. Primeiro os erros param, depois a ausência pesa, e só então a reaproximação acontece — nessa ordem, do primeiro ao trigésimo dia.";

/* -------------------------------------------------------- Autoridade */
/*
 * A seção de autoridade só é publicada quando authorityConfig (config/site.ts)
 * estiver preenchida com nome e formação reais. Não publicar placeholders.
 */

export const authorityTitle = "Isso não foi criado a partir de achismos da internet";

export const authorityIntro =
  "O protocolo nasceu de estudos sobre atração e relacionamentos, da análise de casos reais e daquilo que já ajudou mais de 10 mil mulheres a reconquistar o homem que amavam.";

export const authorityClosing = [
  "O Astarte não pede que você confie em uma promessa vazia.",
  "Ele mostra os estudos, o método e os resultados das mulheres que vieram antes de você.",
] as const;

/* ------------------------------------------------------------ Os 30 dias */

export const movementsTitle = "O que você fará nos próximos 30 dias";

export type MovementItem = {
  movement: string;
  title: string;
  text: string;
};

export const movements: readonly MovementItem[] = [
  {
    movement: "Movimento 1",
    title: "Pare de afastar ele",
    text: "Identifique o que está fazendo ele levantar ainda mais barreiras e interrompa os erros antes que seja tarde.",
  },
  {
    movement: "Movimento 2",
    title: "Faça sua ausência pesar",
    text: "Pare de entregar a certeza de que estará sempre disponível e abra espaço para ele sentir sua falta.",
  },
  {
    movement: "Movimento 3",
    title: "Volte a ocupar a mente dele",
    text: "Mude aquilo que ele sente quando pensa em você e faça as boas lembranças voltarem a falar mais alto.",
  },
  {
    movement: "Movimento 4",
    title: "Desperte o medo de te perder",
    text: "Faça ele perceber que você não ficará parada enquanto ele decide se quer ou não voltar.",
  },
  {
    movement: "Movimento 5",
    title: "Conduza a volta",
    text: "Quando ele procurar, saiba como transformar curiosidade em contato, contato em desejo e desejo em uma nova chance para vocês.",
  },
] as const;

export const movementsClosing = [
  "Você não terá que adivinhar.",
  "Não terá que pedir conselho para cinco pessoas.",
  "Não terá que mandar uma mensagem e passar a noite arrependida.",
  "Durante os próximos 30 dias, você terá um caminho.",
] as const;

/* ---------------------------------------------------------------- Provas */

export const proofTitle =
  "Mais de 10 mil mulheres já reconquistaram o homem que amavam com o Método Astarte";

export const proofIntro = [
  "Elas também acharam que ele não voltaria.",
  "Também choraram olhando para o celular.",
  "Também tiveram medo de que outra pessoa ocupasse o lugar delas.",
  "Mas pararam de agir sem direção.",
  "Seguiram o método.",
  "E deram uma nova chance para a história que acreditavam ter perdido.",
] as const;

export type ProofStat = {
  value: string;
  text: string;
};

export const proofStats: readonly ProofStat[] = [
  { value: "+10 mil mulheres", text: "Já reconquistaram o homem que amavam." },
  { value: "30 dias", text: "É o período completo do Método Astarte." },
  {
    value: "Um único objetivo",
    text: "Fazer ele voltar a procurar, desejar e escolher você.",
  },
] as const;

export const proofTestimonialsTitleTop =
  "Não acredite apenas no que estamos dizendo";

export const proofTestimonialsTitleBottom = "Veja o que aconteceu com elas";

export const proofClosing = [
  "Elas não tiveram mais sorte do que você.",
  "Elas tiveram um caminho.",
] as const;

/* --------------------------------------------------------- O que recebe */

export const receiveIntro = [
  "Tudo o que você precisa fazer durante os próximos 30 dias estará organizado em um único protocolo.",
  "Sem informações espalhadas.",
  "Sem conselhos que se contradizem.",
  "Sem precisar descobrir sozinha qual é o próximo passo.",
] as const;

export const receiveList = [
  "Método Astarte completo",
  "Plano de reconquista em 30 dias",
  "Cinco movimentos em uma única sequência",
  "Orientações para silêncio, contato e retorno",
  "Acesso imediato",
  "Acesso pelo celular, computador ou tablet",
  "Acesso permanente",
  "Suporte após a compra",
  "Hipnose da Reconquista",
] as const;

export const bonusLabel = "Bônus";
export const bonusTitle = "Hipnose da Reconquista";
export const bonusText =
  "Um conteúdo complementar para ajudar você a manter o controle nos momentos em que a ansiedade tenta fazer você colocar tudo a perder.";

export const receiveHighlightLead =
  "O Astarte responde à pergunta que não sai da sua cabeça:";

export const receiveHighlightQuote =
  "“O que eu faço agora para trazer ele de volta?”";

/* ------------------------------------------------ Justificativa do preço */

export const priceTitle =
  "Vamos ser muito diretas sobre quanto isso deveria custar";

export const priceIntro = [
  "O Método Astarte já foi vendido por R$ 130,00.",
  "E mulheres realmente pagaram esse valor.",
  "Porque não estavam comprando arquivos.",
  "Estavam comprando um caminho para deixar de arriscar o relacionamento mais importante da vida delas em mensagens impulsivas e conselhos aleatórios.",
] as const;

export const priceQuestionsLead = "Agora responda:";

export const priceQuestions = [
  "Quanto vale impedir que uma única atitude errada afaste ele definitivamente?",
  "Quanto vale fazer ele olhar para você novamente e pensar: “Será que eu cometi um erro?”",
  "Quanto vale ter os próximos 30 dias organizados em vez de continuar tentando no escuro?",
] as const;

export const priceRealLabel = "Valor real do Método Astarte";

export const priceBatchLabel = "Lote especial de reabertura";

export const priceComparisons = [
  "Menos do que uma pizza.",
  "Menos do que um jantar.",
  "Menos do que muitas pessoas gastam em uma noite tentando esquecer alguém que ainda amam.",
] as const;

export const priceIncluded = [
  `Por ${pricing.price}, você recebe o protocolo completo.`,
  "Sem mensalidade.",
  "Sem uma segunda parte para comprar.",
  "Sem cobranças escondidas.",
] as const;

export const priceHighlight = `Se esse relacionamento ainda importa para você, não deixe ${pricing.price} ser o motivo para continuar arriscando tudo no improviso.`;

export const priceMicrocopy =
  "Pagamento único • Acesso imediato • Compra protegida por garantia";

/* -------------------------------------------------------------- Garantia */

export const guaranteeSectionTitle = "Entre, conheça o Astarte e decida depois";

export const guaranteeIntro =
  "Você não precisa descobrir se o Método Astarte é para você olhando a página por fora.";

export const guaranteeSteps = [
  "Compre.",
  "Receba o acesso.",
  "Conheça a sequência.",
  "Veja os primeiros passos.",
  "E tome sua decisão com o método nas mãos.",
] as const;

export const guaranteeRefund = [
  "Se dentro de 7 dias você entender que o Astarte não é para você, basta solicitar o reembolso.",
  "Você recebe 100% do valor pago de volta.",
] as const;

export const guaranteeNotList = [
  "Não será crédito.",
  "Não será cupom.",
  "Não será outro produto.",
  "Será o seu dinheiro.",
] as const;

export const guaranteeHighlight = "O risco da compra não precisa ser seu.";

export const guaranteeMicrocopy = "Garantia de reembolso de 7 dias.";

/** Bloco resumido usado no card de oferta. */
export const guaranteeTitle = "Garantia de reembolso de 7 dias";

export const guaranteeText =
  "Depois da confirmação da compra, você recebe acesso imediato e tem 7 dias para conhecer o conteúdo. Se entender que o Astarte não é para você, poderá solicitar o reembolso integral dentro desse prazo.";

/* --------------------------------------------------------- Escassez real */

export const scarcityTitle = `O preço de ${pricing.price} não ficará disponível para sempre`;

export const scarcityText = [
  "O Método Astarte já custou R$ 130,00.",
  `O valor de ${pricing.price} existe porque estamos reabrindo e validando este novo lote.`,
  "Mas a quantidade de acessos promocionais é limitada.",
  "Quando este lote terminar, o preço voltará para R$ 130,00.",
  "Sem extensão pelo suporte.",
  "Sem cupom para recuperar o valor antigo.",
  "Sem contador falso.",
] as const;

export const scarcityHighlightTop = `Entre neste lote por ${pricing.price}`;

export const scarcityHighlightBottom = "Ou pague R$ 130,00 quando ele encerrar";

/* ------------------------------------------------------ Os três caminhos */

export const pathsTitle = "Agora você tem três caminhos";

export type PathItem = {
  label: string;
  title: string;
  lines: readonly string[];
};

export const pathItems: readonly PathItem[] = [
  {
    label: "Caminho 1",
    title: "Esperar",
    lines: [
      "Continuar olhando o celular.",
      "Torcer para ele sentir falta sozinho.",
      "E assistir ele se acostumar com uma vida sem você.",
    ],
  },
  {
    label: "Caminho 2",
    title: "Tentar novamente sem saber o que fazer",
    lines: [
      "Mandar outra mensagem.",
      "Pedir outro conselho.",
      "Agir novamente no desespero.",
      "E correr o risco de afastá-lo ainda mais.",
    ],
  },
  {
    label: "Caminho 3",
    title: "Seguir o Método Astarte",
    lines: [
      "Saber o que fazer nos próximos 30 dias.",
      "Parar de matar o desejo.",
      "Fazer sua ausência ser sentida.",
      "E começar agora com uma compra protegida por garantia.",
    ],
  },
] as const;

export const pathsClosing = [
  "A primeira opção não muda nada.",
  "A segunda repete aquilo que não funcionou.",
  `A terceira custa ${pricing.price}.`,
] as const;

/* --------------------------------------------------------- Encerramento */

export const finalTopLine =
  "O Método Astarte já ajudou mais de 10 mil mulheres a reconquistar quem amavam";

export const finalTitle = "E você está esperando o quê?";

export const finalText = [
  "Se você ainda quer esse homem, pare de entregar sua reconquista ao medo, ao impulso e à sorte.",
  "Compre agora o Método Astarte.",
  "Siga o plano durante os próximos 30 dias.",
  "Faça sua ausência pesar.",
  "Faça ele voltar a pensar em você.",
  "Faça ele sentir que pode estar perdendo a mulher que ama.",
  "E esteja preparada quando ele voltar a procurar.",
] as const;

export const finalPriceBatchNote = pricing.promoActive ? "neste lote" : "";

export const finalMicrocopy =
  "Acesso imediato • Acesso permanente • Garantia de reembolso";

export const finalPhrase = [
  "Daqui a 30 dias, você pode continuar se perguntando se ele ainda pensa em você.",
  "Ou pode estar vivendo a nova chance que hoje parece impossível.",
  "A decisão começa agora.",
] as const;

/* ------------------------------------------------------------------ FAQ */

export type FaqItem = {
  q: string;
  a: readonly string[];
};

export const faqItems: readonly FaqItem[] = [
  {
    q: "Esse método é para mim?",
    a: [
      "O Método Astarte foi feito para a mulher que ainda quer esse homem e precisa saber o que fazer agora para reconquistá-lo.",
    ],
  },
  {
    q: "E se hoje a gente não estiver junto?",
    a: [
      "Você pode começar mesmo assim. O Método Astarte foi criado para a mulher que ainda acredita nessa história e quer ter esse homem de volta.",
    ],
  },
  {
    q: "Ele vai voltar em 30 dias?",
    a: [
      "Os 30 dias são o período do Método Astarte. Cada história é diferente, mas esse é o tempo em que você vai colocar o método em prática para mudar o rumo dessa relação e se aproximar do resultado que deseja.",
    ],
  },
  {
    q: "O que eu recebo?",
    a: [
      "Você recebe os cinco volumes do Método Astarte, o bônus Hipnose da Reconquista e o método completo de 30 dias.",
    ],
  },
  {
    q: "Como eu recebo os materiais?",
    a: [
      "Depois da confirmação do pagamento, a Kiwify envia as instruções para o seu e-mail. Os volumes são e-books e podem ser lidos pelo celular, tablet ou computador.",
    ],
  },
  {
    q: "O que é a Hipnose da Reconquista?",
    a: [
      "É um exercício guiado para ajudar você a se sentir mais segura, confiante e preparada durante os 30 dias da sua reconquista.",
    ],
  },
  {
    q: "O pagamento é seguro?",
    a: [
      "Sim. O pagamento é processado pela Kiwify, uma plataforma especializada na venda e entrega de produtos digitais.",
    ],
  },
  {
    q: "E se eu comprar e não gostar?",
    a: [
      "Você tem 7 dias para conhecer o material. Se dentro desse prazo decidir que ele não é para você, poderá solicitar o reembolso pelo canal de contato.",
    ],
  },
] as const;

/* --------------------------------------------------------------- Rodapé */

export const trustLineText =
  "Pagamento único • Acesso imediato • Compra protegida por garantia";

export const footerDisclaimer =
  "O Método Astarte é um conteúdo digital sobre reconquista. Os resultados variam de acordo com a história e as decisões de cada homem e de cada mulher.";
