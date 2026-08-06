/**
 * Copy central do Projeto Astarte.
 * Promessa única: reconquistar o homem que ela ama em 30 dias.
 * Uma dor, uma promessa — sem narrativas paralelas.
 */

/* ---------------------------------------------------------------- CTAs */

export const CTA_MAIN_LABEL = "QUERO ELE DE VOLTA";
export const CTA_METHOD_LABEL = "QUERO ELE DE VOLTA";
export const CTA_STICKY_TEXT = "QUERO ELE DE VOLTA";

/* ---------------------------------------------------------------- Hero */

export const heroEyebrow = "30 dias para reconquistar o homem que você ama";

export const heroTitle =
  "Você ainda quer esse homem? Aprenda como ter ele de volta em 30 dias.";

export const heroSubtitle =
  "O Método Astarte reúne tudo o que você precisa para viver os próximos 30 dias com um único objetivo: despertar novamente o interesse, o desejo e a vontade dele de estar com você.";

export const heroProductLine = "5 volumes digitais + bônus Hipnose da Reconquista";

export const heroMicrocopy =
  "Pagamento protegido pela Kiwify • pagamento único • e-books enviados após a confirmação • 7 dias de garantia";

/* -------------------------------------------------- Princípio Astarte */

export const principleEyebrow = "Existe um princípio Astarte";

export const principleTitle =
  "Se é esse homem que você quer, não deixe o tempo transformar essa história em passado.";

export const principleText =
  "Durante 30 dias, tudo no Método Astarte foi criado com um único objetivo: fazer ele voltar a olhar para você com interesse, desejo e vontade de viver essa história novamente.";

export const principleHighlight =
  "O objetivo é um só: reconquistar o homem que você ama.";

/* ------------------------------------------------------- Método / volumes */

export type VolumeItem = {
  volume: string;
  title: string;
};

export const methodVolumes: readonly VolumeItem[] = [
  { volume: "Volume 1", title: "Descubra o que fez ele mudar com você" },
  { volume: "Volume 2", title: "Faça ele sentir sua falta" },
  { volume: "Volume 3", title: "Faça ele voltar a te procurar" },
  { volume: "Volume 4", title: "Reconquiste o interesse dele" },
  { volume: "Volume 5", title: "Faça ele querer ficar" },
] as const;

export const methodIntro =
  "Leia os volumes na ordem e viva cada parte da reconquista até chegar mais perto do que você realmente quer: ter esse homem de volta.";

export const methodClosing =
  "Do primeiro ao último volume, tudo foi criado para aproximar você de um único resultado: ter esse homem de volta.";

/* ---------------------------------------------------------------- Desejo */

export const desireItems = [
  "Ele procurando a sua companhia.",
  "Ele demonstrando interesse novamente.",
  "Ele querendo viver essa história com você.",
  "Você com uma nova chance de ter esse homem de volta.",
] as const;

export const desireClosing =
  "É para aumentar as chances desse retorno que o Método Astarte foi criado.";

/* --------------------------------------------------------- O que recebe */

export const receiveList = [
  "Descubra o que fez ele mudar com você",
  "Faça ele sentir sua falta",
  "Faça ele voltar a te procurar",
  "Reconquiste o interesse dele",
  "Faça ele querer ficar",
  "Bônus: Hipnose da Reconquista",
  "Os cinco volumes em e-book",
  "Método completo para os seus 30 dias de reconquista",
  "Leitura pelo celular, tablet ou computador",
  "Pagamento único",
] as const;

export const bonusLabel = "Bônus especial";
export const bonusTitle = "Hipnose da Reconquista";
export const bonusText =
  "Um material especial para fortalecer sua confiança, sua presença e fazer ele pensar em você de outro jeito durante os 30 dias.";

export const receiveMicrocopy =
  "Os materiais são enviados depois da confirmação do pagamento.";

/* --------------------------------------------------------------- Oferta */

export const offerEyebrow = "Comece hoje";

export const offerTitle =
  "Se você ainda quer esse homem, comece agora a reconquistar ele.";

export const offerSubtitle =
  "Tenha o Método Astarte completo e comece hoje os seus 30 dias para reconquistar o homem que você ama.";

export const offerCardName = "Método Astarte";
export const offerCardSubname = "30 Dias para Reconquistar o Homem que Você Ama";

export const offerItems = [
  "5 volumes digitais em e-book",
  "Bônus Hipnose da Reconquista",
  "Método completo de 30 dias",
  "Pagamento único",
  "7 dias de garantia",
] as const;

export const offerMicrocopy =
  "Pagamento protegido pela Kiwify • pagamento único • e-books enviados após a confirmação • 7 dias de garantia";

export const trustLineText =
  "Pagamento protegido pela Kiwify • pagamento único • e-books enviados após a confirmação • 7 dias de garantia";

export const guaranteeTitle = "Você tem 7 dias para decidir";

export const guaranteeText =
  "Depois da compra, você tem 7 dias para conhecer o material. Se dentro desse prazo decidir que ele não é para você, poderá solicitar o reembolso pelo canal de contato.";

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

/* --------------------------------------------------------- Encerramento */

export const finalEyebrow = "A sua reconquista começa agora";

export const finalTitle = "Dê a essa história uma nova chance.";

export const finalSubtitle =
  "Comece hoje o Método Astarte e viva os próximos 30 dias com um único objetivo: reconquistar o homem que você ama.";

export const finalPriceLine = "R$ 37,90 • pagamento único";

/* --------------------------------------------------------------- Rodapé */

export const footerDisclaimer =
  "O Método Astarte é um material educacional. Os resultados variam de acordo com a história e as decisões de cada homem e de cada mulher.";
