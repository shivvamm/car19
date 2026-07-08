"use client";

import Image from "next/image";
import Reveal, { SectionLabel } from "./ui/Reveal";
import Icon from "./ui/Icon";
import { results, upcoming } from "@/lib/data";

function Corners() {
  const base = "absolute w-3 h-3 border-cyan/50";
  return (
    <>
      <span className={`${base} top-1.5 left-1.5 border-t border-l`} />
      <span className={`${base} top-1.5 right-1.5 border-t border-r`} />
      <span className={`${base} bottom-1.5 left-1.5 border-b border-l`} />
      <span className={`${base} bottom-1.5 right-1.5 border-b border-r`} />
    </>
  );
}

export default function Results() {
  return (
    <section id="results" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel n="05">The Receipts</SectionLabel>
            <Reveal>
              <h2 className="font-display text-6xl md:text-8xl leading-[0.85] uppercase">
                Timing <span className="neon-cyan">Sheets</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="font-body text-white/55 max-w-sm md:text-right">{results.intro}</p>
          </Reveal>
        </div>

        {/* result documents */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {results.items.map((r, i) => (
            <Reveal key={i} delay={i * 0.07} y={40}>
              <div className="group h-full flex flex-col bg-night/70 border border-white/10 hover:border-cyan/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,229,255,0.35)]">
                {/* readout header bar */}
                <div className="flex items-center justify-between px-3.5 h-9 border-b border-white/10 bg-ink/60">
                  <span className="font-body uppercase tracking-[0.18em] text-[9px] font-bold text-magenta">
                    {r.tag}
                  </span>
                  <span className="flex items-center gap-1.5 font-body text-[9px] tracking-[0.2em] text-white/35">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                    REC 0{i + 1}
                  </span>
                </div>

                {/* framed screenshot */}
                <div className="relative aspect-[4/5] bg-[#08090c] overflow-hidden">
                  <Image
                    src={r.src}
                    alt={`${r.title} — ${r.result}`}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <Corners />
                  {/* subtle scanlines */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
                    style={{ backgroundImage: "repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 3px)" }}
                  />
                </div>

                {/* caption */}
                <div className="p-5 border-t border-white/10 flex-1 flex flex-col">
                  <div className="font-body uppercase tracking-[0.16em] text-[10px] text-white/40">
                    {r.title}
                  </div>
                  <div className="mt-1.5 font-display text-lg text-white leading-tight">{r.result}</div>
                  <div className="mt-1.5 h-px w-8 bg-cyan group-hover:w-14 transition-all" />
                  <div className="mt-auto pt-3 font-body text-white/45 text-xs">{r.detail}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* upcoming */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-5">
            <Icon name="flag" className="w-5 h-5 text-cyan" />
            <span className="font-body uppercase tracking-[0.25em] text-xs text-white/60">
              Upcoming — Season 2, 2026
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {upcoming.map((u, i) => {
              const confirmed = u.status.toLowerCase() === "confirmed";
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="group flex items-center gap-5 border border-white/10 bg-night/50 p-5 tile hover:border-cyan/40 transition-colors">
                    <div className="font-display text-3xl text-white w-28 flex-shrink-0 leading-none">
                      {u.date}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-body font-bold text-white leading-tight">{u.event}</div>
                      <div className="font-body text-white/45 text-sm">{u.venue}</div>
                    </div>
                    <span
                      className={`font-body uppercase tracking-[0.16em] text-[10px] font-bold px-2.5 py-1 border flex-shrink-0 ${
                        confirmed
                          ? "text-cyan border-cyan/40"
                          : "text-white/40 border-white/15"
                      }`}
                    >
                      {u.status}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
