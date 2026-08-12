"use client";

import { motion } from "framer-motion";
import {
  feelingBlocks,
  feelingsClosing,
  feelingsTitle,
} from "@/data/astarte-content";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

/** O que você quer que ele sinta — os cinco sentimentos que o método desperta. */
export default function DesireSection() {
  return (
    <section className="section-pad sapphire-field" aria-labelledby="desire-heading">
      <div className="mx-auto max-w-3xl">
        <motion.p {...reveal} className="eyebrow !text-gold-light">
          O que você quer que ele sinta
        </motion.p>

        <motion.h2 id="desire-heading" {...reveal} className="headline-light mt-3 max-w-2xl">
          {feelingsTitle}
        </motion.h2>

        <div className="mt-7 flex flex-col gap-4 md:mt-8">
          {feelingBlocks.map((block, i) => (
            <motion.div
              key={block.name}
              {...reveal}
              className="rounded-2xl border border-gold/30 bg-sapphire-deep/55 px-5 py-5 sm:px-6"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-gold/60 font-serif text-base text-gold-light"
                >
                  {i + 1}
                </span>
                <h3 className="font-serif text-xl uppercase tracking-[0.08em] text-gold-light sm:text-2xl">
                  {block.name}
                </h3>
              </div>
              <div className="mt-3 flex flex-col gap-1">
                {block.lines.map((line) => (
                  <p key={line} className="font-serif text-lg leading-snug text-warm sm:text-xl">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          {...reveal}
          className="mt-7 max-w-xl border-l-[3px] border-gold pl-4 sm:pl-5"
        >
          {feelingsClosing.map((line) => (
            <p key={line} className="font-serif text-xl leading-snug text-gold-light md:text-2xl">
              {line}
            </p>
          ))}
        </motion.blockquote>
      </div>
    </section>
  );
}
