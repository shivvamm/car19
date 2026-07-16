"use client";

import { motion } from "framer-motion";
import Icon from "./ui/Icon";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.11, duration: 0.75, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

const meta = [
  "Buddh Int'l Circuit",
  "Škoda Superb · Stage 2",
  "260 BHP",
  "FMSCI",
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* graded aerial track video — slow cinematic push-in */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.14 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.6, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <video
          className="w-full h-full object-cover object-center"
          src="/media/clip-track-graded.mp4"
          poster="/media/poster-track-graded.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </motion.div>

      {/* scrims */}
      <div className="absolute inset-0 hud-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/20" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-ink via-ink/75 to-transparent pointer-events-none" />

      {/* giant driver number watermark */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
        className="pointer-events-none absolute right-[-2%] top-1/2 -translate-y-1/2 hidden md:block"
      >
        <span className="font-display leading-none text-[40vh] text-white/[0.04] select-none">19</span>
      </motion.div>

      {/* copy */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-16 min-h-[100svh] flex flex-col justify-center">
        <motion.div custom={0} variants={fade} initial="hidden" animate="show" className="chip mb-6">
          Driver · #19 · SPUNKY Racing
        </motion.div>

        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="font-display leading-[0.82] text-[18vw] md:text-[13vw] lg:text-[11rem]"
        >
          <span className="block text-white">SPUNKY</span>
          <span className="block text-[0.4em] tracking-tight">
            <span className="stroke-text">MOTORSPORT </span>
            <span className="neon-pink">ATHLETE</span>
          </span>
        </motion.h1>

        {/* meta strip */}
        <motion.div
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-body uppercase tracking-[0.16em] text-[11px] md:text-xs text-white/60"
        >
          {meta.map((m, i) => (
            <span key={m} className="flex items-center gap-5">
              {i > 0 && <span className="h-3 w-px bg-white/25" />}
              <span className={i === 2 ? "text-white font-bold" : ""}>{m}</span>
            </span>
          ))}
        </motion.div>

        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#machine" className="btn-heat">
            Inspect the Machine <Icon name="arrow" className="w-4 h-4" strokeWidth={2} />
          </a>
          <a href="#showreel" className="btn-ghost">Watch the Runs</a>
        </motion.div>
      </div>

      {/* bottom-right locator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute bottom-8 right-6 md:right-16 z-10 flex items-center gap-3 text-white/45 font-body uppercase tracking-[0.28em] text-[10px]"
      >
        <Icon name="pin" className="w-4 h-4 text-magenta" strokeWidth={1.6} />
        Delhi NCR, India
      </motion.div>
    </section>
  );
}
