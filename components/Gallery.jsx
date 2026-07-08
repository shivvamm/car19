"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal, { SectionLabel } from "./ui/Reveal";
import { gallery } from "@/lib/data";

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="relative py-24 md:py-36 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="mb-14">
          <SectionLabel n="07">Gallery</SectionLabel>
          <Reveal>
            <h2 className="font-racing text-6xl md:text-8xl leading-[0.85]">
              <span className="grad-heat">SHOT</span> <span className="stroke-text">ON SIGHT</span>
            </h2>
          </Reveal>
        </div>

        {/* photo mosaic */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[190px] gap-4">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 4) * 0.06} className={g.span}>
              <button
                onClick={() => setActive(g)}
                className={`relative group h-full w-full overflow-hidden border border-white/10 tile ${g.span}`}
              >
                <Image
                  src={g.src}
                  alt={g.label}
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute top-3 left-3">
                  <span className="font-body uppercase tracking-[0.2em] text-[9px] bg-magenta/90 text-white px-2 py-0.5">
                    {g.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="font-display text-lg text-white text-left leading-none">{g.label}</span>
                  <span className="font-body text-cyan text-lg opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] bg-ink/92 backdrop-blur-sm grid place-items-center p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full aspect-[16/10] border border-white/15"
            >
              <Image src={active.src} alt={active.label} fill sizes="90vw" className="object-contain" />
              <div className="absolute -bottom-9 left-0 font-display text-2xl neon-pink">{active.label}</div>
              <div className="absolute -top-9 right-0 font-body uppercase tracking-[0.2em] text-xs text-white/50">
                Click anywhere to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
