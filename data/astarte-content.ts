/**
 * Copy central do Projeto Astarte.
 * Promessa única: reconquistar o homem que ela ama em 30 dias.
 * Uma dor, uma promessa — sem narrativas paralelas.
 */

/* ---------------------------------------------------------------- CTAs */

export const CTA_MAIN_LABEL = "QUERO ELE DE VOLTA";
export const CTA_METHOD_LABEL = "QUERO COMEÇAR MINHA RECONQUISTA";
export const CTA_STICKY_TEXT = "Quero ele de volta";

/* ---------------------------------------------------------------- Hero */

export const heroEyebrow = "30 dias para reconquistar o homem que você ama";

export const heroTitle =
  "Você ainda quer esse homem? Aprenda a reconquistar ele em 30 dias.";

export const heroSubtitle =
  "O Método Astarte mostra, passo a passo, como recuperar o interesse, o desejo e a vontade dele de estar com você novamente.";

export const heroProductLine = "5 volumes digitais + bônus Hipnose da Reconquista";

export const heroMicrocopy =
  "Pagamento protegido pela Kiwify • pagamento único • PDFs enviados após a confirmação • 7 dias de garantia";

/* -------------------------------------------------- Princípio Astarte */

export const principleEyebrow = "Existe um princípio Astarte";

export const principleTitle =
  "Se é esse homem que você quer, não deixe o tempo transformar essa história em passado.";

export const principleText =
  "Durante 30 dias, você vai seguir um passo a passo criado para recuperar o interesse dele e aumentar suas chances de viver essa história novamente.";

export const principleHighlight =
  "O objetivo é um só: reconquistar o homem que você ama.";

/* ------------------------------------------------------- Método / volumes */

export type VolumeItem = {
  volume: string;
  title: string;
};

export const methodVolumes: readonly VolumeItem[] = [
  { volume: "Volume 1", title: "Entenda por que ele se afastou" },
  { volume: "Volume 2", title: "Faça ele sentir sua falta" },
  { volume: "Volume 3", title: "Faça ele voltar a te procurar" },
  { volume: "Volume 4", title: "Reconquiste o interesse dele" },
  { volume: "Volume 5", title: "Faça ele querer ficar" },
] as const;

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
  "Entenda por que ele se afastou",
  "Faça ele sentir sua falta",
  "Faça ele voltar a te procurar",
  "Reconquiste o interesse dele",
  "Faça ele querer ficar",
  "Bônus: Hipnose da Reconquista",
  "Os cinco volumes em PDF",
  "Passo a passo para seguir durante 30 dias",
  "Leitura pelo celular, tablet ou computador",
  "Pagamento único",
] as const;

export const bonusLabel = "Bônus especial";
export const bonusTitle = "Hipnose da Reconquista";
export const bonusText =
  "Um material especial para ajudar você a usar presença, palavras e emoção para voltar a ocupar a mente desse homem durante a reconquista.";

export const receiveMicrocopy =
  "Os materiais são enviados depois da confirmação do pagamento.";

/* --------------------------------------------------------------- Oferta */

export const offerEyebrow = "Comece hoje";

export const offerTitle =
  "Se você ainda quer esse homem, comece agora a reconquistar ele.";

export const offerSubtitle =
  "Tenha o Método Astarte completo e siga o passo a passo dos próximos 30 dias.";

export const offerCardName = "Método Astarte";
export const offerCardSubname = "30 Dias para Reconquistar o Homem que Você Ama";

export const offerItems = [
  "5 volumes digitais em PDF",
  "Bônus Hipnose da Reconquista",
  "Passo a passo de 30 dias",
  "Pagamento único",
  "7 dias de garantia",
] as const;

export const offerMicrocopy =
  "Pagamento protegido pela Kiwify • pagamento único • PDFs enviados após a confirmação • 7 dias de garantia";

export const trustLineText =
  "Pagamento protegido pela Kiwify • pagamento único • PDFs enviados após a confirmação • 7 dias de garantia";

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
      "Se vocês já viveram uma história e ele se afastou, sim. O Método Astarte foi feito para a mulher que ainda quer esse homem e precisa saber o que fazer agora para reconquistá-lo.",
    ],
  },
  {
    q: "E se ele não estiver falando comigo?",
    a: [
      "Você não precisa começar mandando mensagem. O plano mostra o que fazer antes de procurar ele e conduz você, passo a passo, até o momento certo de retomar o contato.",
    ],
  },
  {
    q: "Ele vai voltar em 30 dias?",
    a: [
      "Os 30 dias são o período do passo a passo. Cada história tem seu próprio tempo, mas durante esse período você deixa de agir no escuro e passa a seguir uma direção pensada para reconstruir o interesse dele.",
    ],
  },
  {
    q: "O que eu recebo?",
    a: [
      "Você recebe os cinco volumes do Método Astarte, o bônus Hipnose da Reconquista e um plano completo para seguir durante 30 dias.",
    ],
  },
  {
    q: "Como eu recebo os materiais?",
    a: [
      "Depois da confirmação do pagamento, a Kiwify envia as instruções para o seu e-mail. Os volumes são em PDF e podem ser lidos pelo celular, tablet ou computador.",
    ],
  },
  {
    q: "O que é a Hipnose da Reconquista?",
    a: [
      "É um exercício guiado para você se preparar antes de falar ou agir e não colocar sua reconquista a perder por impulso. Não é controle mental e não age sobre ele.",
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
  "Comece hoje o Método Astarte e siga o passo a passo para aumentar suas chances de ter esse homem de volta.";

export const finalPriceLine = "R$ 37,90 • pagamento único";

/* --------------------------------------------------------------- Rodapé */

export const footerDisclaimer =
  "O Método Astarte é um material educacional. Os resultados variam de acordo com a história e as decisões de cada homem e de cada mulher.";
