"use client";

import { motion } from "framer-motion";
import { pathItems, pathsClosing, pathsTitle } from "@/data/astarte-content";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

/** Os três caminhos — escolha antes do fechamento. */
export default function PathsSection() {
  return (
    <section
      className="section-pad bg-warm"
      aria-labelledby="paths-heading"
      data-analytics-section="paths_section"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2 id="paths-heading" {...reveal} className="headline max-w-2xl">
          {pathsTitle}
        </motion.h2>

        <div className="mt-7 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-3">
          {pathItems.map((path, i) => {
            const isLast = i === pathItems.length - 1;
            return (
              <motion.div
                key={path.label}
                {...reveal}
                className={
                  isLast
                    ? "rounded-2xl border-2 border-gold bg-paper px-5 py-6 shadow-editorial"
                    : "rounded-2xl border border-sapphire-deep/10 bg-paper px-5 py-6 shadow-soft"
                }
              >
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                  {path.label}
                </p>
                <h3 className="mt-1 font-serif text-xl leading-tight text-sapphire-deep sm:text-2xl">
                  {path.title}
                </h3>
                <div className="mt-3 flex flex-col gap-1">
                  {path.lines.map((line) => (
                    <p key={line} className="body-text">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...reveal} className="mt-7 flex max-w-xl flex-col gap-1">
          {pathsClosing.map((line) => (
            <p key={line} className="font-serif text-lg leading-snug text-sapphire-deep md:text-xl">
              {line}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
