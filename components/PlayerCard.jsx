"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Icon from "./ui/Icon";
import { driver, playerCard as pc } from "@/lib/data";

const idRows = [
  ["Class", pc.rank.replace("-CLASS", "").replace("CLASS", "").trim() || "S"],
  ["No.", `#${driver.number}`],
  ["Base", driver.location],
  ["Licence", "FMSCI"],
];

export default function PlayerCard() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 16 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 16 });
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
    <div className="[perspective:1400px]">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-sm mx-auto lg:mx-0 select-none"
      >
        <div
          className="relative carbon border border-white/12 overflow-hidden shadow-2xl shadow-black/60"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 93%, 93% 100%, 0 100%)" }}
        >
          {/* moving sheen */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-30 opacity-25 mix-blend-overlay"
            style={{ background: useTransform(glareX, (x) => `radial-gradient(340px 420px at ${x} 0%, rgba(255,255,255,0.55), transparent 60%)`) }}
          />
          {/* giant number watermark */}
          <span className="pointer-events-none absolute -right-3 bottom-6 font-display text-[11rem] leading-none text-white/[0.035] select-none">
            {driver.number}
          </span>

          {/* red credential header */}
          <div className="relative z-20 flex items-center justify-between h-11 px-5 bg-magenta" style={{ transform: "translateZ(45px)" }}>
            <div className="flex items-center gap-2">
              <Icon name="flag" className="w-4 h-4 text-white" strokeWidth={1.8} />
              <span className="font-body font-bold uppercase tracking-[0.2em] text-[11px] text-white">SPUNKY Racing</span>
            </div>
            <span className="font-body uppercase tracking-[0.24em] text-[9px] text-white/80">Competition Licence</span>
          </div>

          {/* identity body */}
          <div className="relative z-20 grid grid-cols-[118px_1fr] gap-4 p-5" style={{ transform: "translateZ(25px)" }}>
            {/* portrait */}
            <div className="relative h-40 border border-white/12 overflow-hidden">
              <Image src="/media/driver.jpg" alt="SPUNKY driver" fill sizes="120px" className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <div className="absolute bottom-1.5 left-2 font-display text-2xl neon-pink leading-none">{driver.number}</div>
            </div>

            {/* name + id rows */}
            <div className="min-w-0">
              <div className="font-body uppercase tracking-[0.22em] text-[9px] text-white/40">Driver</div>
              <div className="font-display text-4xl text-white leading-none uppercase">{driver.handle}</div>
              <div className="font-body text-cyan text-[11px] uppercase tracking-[0.14em] mt-1">Time-Attack Driver</div>

              <dl className="mt-3">
                {idRows.map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between border-b border-white/8 py-[5px]">
                    <dt className="font-body uppercase tracking-[0.16em] text-[9px] text-white/40">{k}</dt>
                    <dd className="font-body font-bold text-white text-[12px] truncate max-w-[120px] text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* stat strip */}
          <div className="relative z-20 grid grid-cols-4 border-t border-white/10 divide-x divide-white/10" style={{ transform: "translateZ(20px)" }}>
            {pc.cardStats.map((s) => (
              <div key={s.k} className="px-2 py-3 text-center">
                <div className="font-display text-2xl text-white leading-none">{s.v}</div>
                <div className="font-body uppercase tracking-[0.08em] text-[8px] text-white/40 mt-1.5">{s.k}</div>
              </div>
            ))}
          </div>

          {/* credential footer + barcode */}
          <div className="relative z-20 flex items-center justify-between px-5 py-3 border-t border-white/10 bg-ink/60" style={{ transform: "translateZ(15px)" }}>
            <span className="font-body uppercase tracking-[0.18em] text-[9px] text-white/45">LIC · FMSCI-2024-{driver.number}</span>
            <span
              className="h-6 w-24"
              aria-hidden
              style={{
                background:
                  "repeating-linear-gradient(90deg, #cfd5dc 0 1px, transparent 1px 3px, #cfd5dc 3px 4px, transparent 4px 7px, #cfd5dc 7px 9px, transparent 9px 10px)",
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
