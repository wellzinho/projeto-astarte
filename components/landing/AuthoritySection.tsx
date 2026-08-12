"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { authorityConfig } from "@/config/site";
import {
  authorityClosing,
  authorityIntro,
  authorityTitle,
} from "@/data/astarte-content";

const reveal = {
  initial: { opacity: 1, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

/**
 * Por que confiar — só é renderizada quando os dados reais do responsável
 * estiverem preenchidos em authorityConfig (config/site.ts).
 * Nunca publica placeholders.
 */
export default function AuthoritySection() {
  const { name, credentials, studies, story, photo } = authorityConfig;

  if (!name || !credentials) return null;

  return (
    <section className="section-pad bg-warm" aria-labelledby="authority-heading">
      <div className="mx-auto max-w-3xl">
        <motion.p {...reveal} className="eyebrow">
          Por que confiar
        </motion.p>

        <motion.h2 id="authority-heading" {...reveal} className="headline mt-3 max-w-2xl">
          {authorityTitle}
        </motion.h2>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start">
          {photo && (
            <motion.figure {...reveal} className="mx-auto w-40 flex-shrink-0 md:mx-0">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-gold/40 shadow-soft">
                <Image
                  src={photo}
                  alt={`Foto de ${name}`}
                  fill
                  loading="lazy"
                  sizes="160px"
                  className="object-cover object-center"
                />
              </div>
            </motion.figure>
          )}

          <motion.div {...reveal} className="min-w-0 flex flex-col gap-3">
            <p className="body-text font-medium text-sapphire-deep">
              O Método Astarte foi desenvolvido por {name}, {credentials}.
            </p>
            <p className="body-text">{authorityIntro}</p>
            {studies && <p className="body-text">{studies}</p>}
            {story && <p className="body-text">{story}</p>}
          </motion.div>
        </div>

        <motion.blockquote
          {...reveal}
          className="mt-6 max-w-xl border-l-[3px] border-gold pl-4 sm:pl-5"
        >
          {authorityClosing.map((line) => (
            <p key={line} className="font-serif text-lg leading-snug text-sapphire-deep md:text-xl">
              {line}
            </p>
          ))}
        </motion.blockquote>
      </div>
    </section>
  );
}
