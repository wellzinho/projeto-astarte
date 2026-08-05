"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import { faqItems } from "@/data/astarte-content";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

const reveal = {
  initial: { opacity: 1, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4 },
};

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section className="section-pad bg-paper" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <motion.h2 id="faq-heading" {...reveal} className="headline">
          Antes de começar sua <span className="italic text-gold">reconquista</span>
        </motion.h2>

        <motion.div {...reveal} className="mt-6 md:mt-8" role="list">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-answer-${i}`;
            const buttonId = `${baseId}-question-${i}`;

            return (
              <div key={item.q} className="border-b border-sapphire-deep/10" role="listitem">
                <button
                  type="button"
                  id={buttonId}
                  onClick={() => {
                    setOpen(isOpen ? null : i);
                    if (!isOpen) {
                      trackEvent("faq_open", { faq_question: item.q });
                    }
                  }}
                  className="flex min-h-[52px] w-full items-center justify-between gap-4 py-3.5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="pr-4 font-serif text-[1.15rem] tracking-tight text-sapphire-deep md:text-[1.3rem]">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gold" />
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gold" />
                  </motion.span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-3 pb-4">
                      {item.a.map((paragraph) => (
                        <p key={paragraph} className="body-text">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
