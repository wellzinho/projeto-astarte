interface PdfPageMockupProps {
  type: "cronograma" | "script" | "bonus";
  title: string;
  caption: string;
  className?: string;
}

const content = {
  cronograma: {
    day: "Dia 3",
    heading: "Corte o suprimento emocional",
    lines: [
      "Hoje você não inicia conversa.",
      "Não reage a stories.",
      "Não justifica sua ausência.",
      "Registre como se sente, sem agir.",
    ],
    tag: "Volume 1",
  },
  script: {
    day: "Script",
    heading: "Resposta para frieza",
    lines: [
      '"Percebi sua distância. Não vou',
      "insistir onde a presença precisa",
      'ser cobrada. Quando quiser falar',
      "com seriedade, estou aqui.\"",
    ],
    tag: "Protocolo",
  },
  bonus: {
    day: "Bônus",
    heading: "O Botão de Emergência",
    lines: [
      "Quando ele some → script curto",
      "Quando ele confunde → limite claro",
      "Quando ele culpa → postura firme",
      "Copie, adapte, envie sem drama.",
    ],
    tag: "Exclusivo",
  },
};

export default function PdfPageMockup({
  type,
  title,
  caption,
  className = "",
}: PdfPageMockupProps) {
  const c = content[type];

  return (
    <figure className={className}>
      <div
        className="bg-[#FDFBF7] border border-midnight/10 rounded-2xl shadow-editorial overflow-hidden min-h-[280px] md:min-h-[320px] flex flex-col"
        aria-label={title}
      >
        <div className="h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="p-6 md:p-8 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold-dark">
              {c.tag}
            </span>
            <span className="font-sans text-xs text-gray-400">{c.day}</span>
          </div>
          <h4 className="font-serif text-xl md:text-2xl text-midnight leading-tight mb-5">
            {c.heading}
          </h4>
          <div className="space-y-3 flex-1">
            {c.lines.map((line, i) => (
              <p
                key={i}
                className="font-sans text-[16px] md:text-[18px] text-gray-700 leading-relaxed"
              >
                {line}
              </p>
            ))}
          </div>
          <div className="mt-6 pt-5 border-t border-midnight/5 flex items-center gap-2">
            <span className="w-5 h-px bg-gold/50" />
            <span className="font-sans text-[10px] uppercase tracking-widest text-gray-400">
              Projeto Astarte
            </span>
          </div>
        </div>
      </div>
      <figcaption className="font-sans text-[16px] md:text-[17px] text-gray-700 text-center mt-4 leading-relaxed px-2">
        {caption}
      </figcaption>
    </figure>
  );
}
