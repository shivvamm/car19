"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Icon from "./ui/Icon";

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* landscape car photo — slow cinematic push-in */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.14 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <Image
          src="/media/studio-side.jpg"
          alt="SPUNKY #19 — black Škoda Superb in the build bay"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
      </motion.div>

      {/* HUD weave + scrims for legibility */}
      <div className="absolute inset-0 hud-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink via-ink/70 to-transparent pointer-events-none" />
      {/* red accent pool */}
      <div className="absolute -left-40 top-1/3 w-[38rem] h-[38rem] rounded-full bg-magenta/10 blur-3xl pointer-events-none" />

      {/* copy */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 min-h-[100svh] flex flex-col justify-center">
        <motion.div custom={0} variants={fade} initial="hidden" animate="show" className="chip mb-5">
          Race Wars India · Buddh Circuit
        </motion.div>

        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="font-racing leading-[0.82] text-[19vw] md:text-[12vw] lg:text-[10rem]"
        >
          <span className="block neon-pink">SPUNKY</span>
          <span className="block">
            <span className="stroke-text">TIME</span>
            <span className="grad-heat"> ATTACK</span>
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-4 max-w-md font-body text-lg md:text-xl text-white/75 font-medium"
        >
          #19 · Black Škoda Superb 1.8 TSI · ATM Performance Stage 1 · 320 BHP.
        </motion.p>

        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a href="#machine" className="btn-heat">Inspect the Machine</a>
          <a href="#showreel" className="btn-ghost">Watch the Runs</a>
        </motion.div>
      </div>

      {/* corner spec HUD */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="absolute bottom-8 right-6 md:right-10 z-10 flex items-center gap-3 text-white/50 font-body uppercase tracking-[0.28em] text-[10px]"
      >
        <Icon name="flag" className="w-4 h-4 text-magenta" strokeWidth={1.6} />
        Buddh International Circuit · S-Class
      </motion.div>
    </section>
  );
}
