"use client";

import Image from "next/image";
import Reveal, { SectionLabel } from "./ui/Reveal";
import Icon from "./ui/Icon";
import { results, upcoming } from "@/lib/data";

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

        {/* result cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {results.items.map((r, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="group h-full flex flex-col carbon border border-white/10 overflow-hidden hover:border-cyan/40 transition-colors">
                <div className="relative aspect-[4/5] bg-ink/80">
                  <Image
                    src={r.src}
                    alt={`${r.title} — ${r.result}`}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                    className="object-contain p-2"
                  />
                  <span className="absolute top-3 left-3 font-body uppercase tracking-[0.16em] text-[10px] font-bold text-white bg-magenta px-2 py-1">
                    {r.tag}
                  </span>
                </div>
                <div className="p-5 border-t border-white/10 flex-1 flex flex-col">
                  <div className="font-body uppercase tracking-[0.16em] text-[10px] text-white/40">
                    {r.title}
                  </div>
                  <div className="mt-1 font-display text-lg text-white leading-tight">{r.result}</div>
                  <div className="mt-auto pt-3 font-body text-white/45 text-xs">{r.detail}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* upcoming */}
        <div className="mt-14">
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
                  <div className="flex items-center gap-5 border border-white/10 bg-night/50 p-5 tile">
                    <div className="font-display text-2xl text-white w-28 flex-shrink-0 leading-none">
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
