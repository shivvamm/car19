"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Icon from "./ui/Icon";
import { driver, playerCard as pc } from "@/lib/data";

export default function PlayerCard() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 15 });
  const glareX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);

  function onMove(e) {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div className="[perspective:1200px]">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-sm mx-auto lg:mx-0 select-none"
      >
        {/* glow frame */}
        <div className="absolute -inset-[2px] bg-gradient-to-br from-magenta/70 via-white/10 to-cyan/40 opacity-70 blur-[2px]"
             style={{ clipPath: "polygon(0 4%, 92% 0, 100% 96%, 8% 100%)" }} />

        <div
          className="relative carbon border border-white/15 overflow-hidden"
          style={{ clipPath: "polygon(0 4%, 92% 0, 100% 96%, 8% 100%)" }}
        >
          {/* moving glare */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-30 opacity-40 mix-blend-overlay"
            style={{ background: useTransform(glareX, (x) => `radial-gradient(300px 400px at ${x} 0%, rgba(255,255,255,0.5), transparent 60%)`) }}
          />

          {/* header */}
          <div className="relative z-20 flex items-center justify-between px-5 pt-5" style={{ transform: "translateZ(40px)" }}>
            <div className="flex items-center gap-2">
              <span className="font-body uppercase tracking-[0.25em] text-[10px] text-white/50">Driver Card</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-body uppercase tracking-[0.18em] text-[10px] text-magenta border border-magenta/50 px-2 py-0.5">
                {pc.rank}
              </span>
            </div>
          </div>

          {/* level + overall corner badges over avatar */}
          <div className="relative mt-3 mx-4 h-64 border border-white/10 overflow-hidden" style={{ transform: "translateZ(20px)" }}>
            <Image src="/media/driver.jpg" alt="SPUNKY driver" fill sizes="380px" className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            {/* level */}
            <div className="absolute top-3 left-3 text-center">
              <div className="font-racing text-5xl neon-pink leading-none">{pc.level}</div>
              <div className="font-body uppercase tracking-[0.2em] text-[9px] text-white/60 -mt-1">Level</div>
            </div>
            {/* overall rating */}
            <div className="absolute top-3 right-3 grid place-items-center w-14 h-14 border border-cyan/40 bg-ink/60"
                 style={{ clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)" }}>
              <span className="font-racing text-2xl neon-cyan leading-none">{pc.overall}</span>
              <span className="font-body text-[8px] tracking-widest text-white/50 -mt-0.5">OVR</span>
            </div>
            {/* number + handle */}
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
              <div>
                <div className="font-racing text-4xl neon-pink leading-none">{driver.handle}</div>
                <div className="font-body uppercase tracking-[0.2em] text-[10px] text-cyan mt-1">{driver.tagline.split("·")[0]}</div>
              </div>
              <span className="font-racing text-3xl text-white/90">#{driver.number}</span>
            </div>
          </div>

          {/* heat meter */}
          <div className="relative z-20 flex items-center gap-2 px-5 mt-4" style={{ transform: "translateZ(30px)" }}>
            <span className="font-body uppercase tracking-[0.2em] text-[10px] text-white/50 mr-1">Heat</span>
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon
                key={i}
                name="flame"
                className={`w-4 h-4 ${i < pc.heat ? "text-magenta" : "text-white/15"}`}
                strokeWidth={1.4}
              />
            ))}
            <span className="ml-auto font-body text-white/40 text-xs uppercase tracking-widest">Lvl {pc.heat}</span>
          </div>

          {/* REP bar */}
          <div className="relative z-20 px-5 mt-3" style={{ transform: "translateZ(30px)" }}>
            <div className="flex justify-between font-body uppercase tracking-[0.18em] text-[9px] text-white/40 mb-1">
              <span>{pc.repLabel}</span>
              <span className="text-cyan">{pc.rep}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-magenta to-hotpink"
                initial={{ width: 0 }}
                whileInView={{ width: `${pc.rep}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* stats grid */}
          <div className="relative z-20 grid grid-cols-4 gap-px bg-white/5 mt-4" style={{ transform: "translateZ(25px)" }}>
            {pc.cardStats.map((s) => (
              <div key={s.k} className="bg-ink/70 px-2 py-3 text-center">
                <Icon name={s.icon} className="w-4 h-4 mx-auto text-cyan" strokeWidth={1.5} />
                <div className="font-racing text-xl text-white mt-1 leading-none">{s.v}</div>
                <div className="font-body uppercase tracking-[0.1em] text-[8px] text-white/40 mt-1">{s.k}</div>
              </div>
            ))}
          </div>

          {/* footer wanted strip */}
          <div className="relative z-20 flex items-center justify-between px-5 py-3 mt-1 border-t border-white/10" style={{ transform: "translateZ(20px)" }}>
            <span className="font-body uppercase tracking-[0.2em] text-[10px] text-white/50">Škoda Superb · Stage 1</span>
            <span className="flex items-center gap-1.5 font-body uppercase tracking-[0.2em] text-[10px] text-magenta">
              <Icon name="flame" className="w-3.5 h-3.5" strokeWidth={1.5} /> {pc.wanted}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
