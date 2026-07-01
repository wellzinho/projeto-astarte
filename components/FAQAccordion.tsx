"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const items: FAQItem[] = [
  {
    question: "O produto é discreto?",
    answer:
      "Sim, a cobrança no cartão e o envio no e-mail são totalmente discretos, garantindo sua total privacidade.",
  },
  {
    question: "Serve para qualquer tipo de relacionamento?",
    answer:
      "Sim, o protocolo foi desenhado com base na psicologia comportamental humana, aplicando-se a ficantes, namorados ou casamentos em crise de afastamento.",
  },
  {
    question: "Como recebo o material?",
    answer:
      "Imediatamente após a aprovação do pagamento, você receberá um link exclusivo no seu e-mail para baixar todos os 5 volumes e o bônus.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-0">
      {items.map((item, i) => (
        <div key={i} className="border-b border-sapphire-deep/40">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
            aria-expanded={open === i}
          >
            <span className="font-serif text-xl md:text-2xl text-silk tracking-tight pr-6 group-hover:text-silk/80 transition-colors">
              {item.question}
            </span>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-shrink-0 w-5 h-5 relative"
            >
              <span className="absolute top-1/2 left-0 w-full h-px bg-gold-light/60 -translate-y-1/2" />
              <span className="absolute left-1/2 top-0 h-full w-px bg-gold-light/60 -translate-x-1/2" />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <p className="font-sans text-silk-muted text-base md:text-lg leading-relaxed pb-6 md:pb-8 max-w-2xl">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
