interface PdfPageMockupProps {
  type: "diagnosis" | "message" | "response-map";
  title: string;
  className?: string;
  onExpand?: () => void;
}

const content = {
  diagnosis: {
    tag: "Volume 1",
    day: "Diagnóstico",
    heading: "Qual afastamento você está vivendo?",
    lines: [
      "□ Ele parou de responder de um dia para o outro",
      "□ Ele responde curto, mas não puxa assunto",
      "□ Ele sumiu depois de uma conversa difícil",
      "□ Ele foi se afastando aos poucos, sem explicar",
      "□ Ele some, mas continua vendo seus stories",
    ],
  },
  message: {
    tag: "Bônus",
    day: "Roteiro",
    heading: "Quando ele reaparece carinhoso",
    lines: [
      '"Fico feliz em saber de você."',
      '"Mas antes de a gente voltar a conversar',
      "como antes, quero entender o que",
      'você está procurando."',
      "Depois: observe se ele continua procurando você.",
    ],
  },
  "response-map": {
    tag: "Volume 5",
    day: "Mapa",
    heading: "Ele está voltando de verdade?",
    lines: [
      "Ele diz que sente saudade → ele marca de te ver?",
      "Ele diz que mudou → o comportamento mudou?",
      "Ele fala de futuro → ele dá o próximo passo?",
      "Ele pede outra chance → ele continua te procurando nos dias seguintes?",
    ],
  },
};

export default function PdfPageMockup({
  type,
  title,
  className = "",
  onExpand,
}: PdfPageMockupProps) {
  const c = content[type];

  const page = (
    <div
      className="bg-[#FDFBF7] border border-midnight/10 rounded-2xl shadow-editorial overflow-hidden min-h-[300px] flex flex-col"
      aria-label={title}
    >
      <div className="h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="p-6 md:p-7 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold-dark">
            {c.tag}
          </span>
          <span className="font-sans text-xs text-gray-400">{c.day}</span>
        </div>
        <h4 className="font-serif text-xl md:text-2xl text-midnight leading-tight mb-4">
          {c.heading}
        </h4>
        <div className="space-y-2.5 flex-1">
          {c.lines.map((line, i) => (
            <p
              key={i}
              className="font-sans text-[16px] md:text-[17px] text-gray-700 leading-relaxed"
            >
              {line}
            </p>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-midnight/5 flex items-center gap-2">
          <span className="w-5 h-px bg-gold/50" />
          <span className="font-sans text-[10px] uppercase tracking-widest text-gray-400">
            Projeto Astarte
          </span>
        </div>
      </div>
    </div>
  );

  if (!onExpand) {
    return <div className={className}>{page}</div>;
  }

  return (
    <button
      type="button"
      onClick={onExpand}
      className={`block w-full text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded-2xl ${className}`}
      aria-label={`Ampliar: ${title}`}
    >
      {page}
    </button>
  );
}
