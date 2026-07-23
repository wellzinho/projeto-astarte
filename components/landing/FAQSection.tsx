"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/data/astarte-content";

const reveal = {
  initial: { opacity: 1, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4 },
};

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-pad bg-paper" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <motion.h2 id="faq-heading" {...reveal} className="headline">
          O que você ainda quer saber
        </motion.h2>

        <motion.div {...reveal} className="mt-8">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-sapphire-deep/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 font-serif text-xl tracking-tight text-sapphire-deep md:text-[1.35rem]">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="relative h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gold" />
                    <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gold" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="body-text pb-5">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
