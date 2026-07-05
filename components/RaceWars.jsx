"use client";

import Reveal, { SectionLabel } from "./ui/Reveal";
import Icon from "./ui/Icon";
import TrackMap from "./TrackMap";
import { race } from "@/lib/data";

const circuitStats = [
  { k: "Length", v: "5.14 km" },
  { k: "Turns", v: "16" },
  { k: "Longest Straight", v: "1.06 km" },
  { k: "Layout", v: "GP Circuit" },
];

export default function RaceWars() {
  return (
    <section id="racewars" className="relative py-24 md:py-36 border-t border-white/5 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex justify-center">
            <SectionLabel n="06">Race Weekend</SectionLabel>
          </div>
          <Reveal>
            <h2 className="font-racing text-6xl md:text-8xl leading-[0.85]">
              <span className="neon-pink">RACE WARS</span>{" "}
              <span className="grad-heat">INDIA</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-body text-white/60 text-lg">
              {race.venue} · {race.discipline}
            </p>
          </Reveal>
        </div>

        {/* Track map + timeline */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* animated circuit */}
          <Reveal className="lg:col-span-7">
            <div className="relative carbon border border-white/10 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="flag" className="w-5 h-5 text-magenta" />
                <span className="font-body uppercase tracking-[0.25em] text-xs text-white/60">
                  Buddh International Circuit
                </span>
              </div>
              <TrackMap />
              <div className="grid grid-cols-4 gap-2 mt-4 border-t border-white/10 pt-4">
                {circuitStats.map((s) => (
                  <div key={s.k}>
                    <div className="font-racing text-xl md:text-2xl text-white leading-none">{s.v}</div>
                    <div className="font-body uppercase tracking-[0.14em] text-[10px] text-white/40 mt-1">{s.k}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* timeline */}
          <div className="lg:col-span-5 space-y-3">
            {race.timeline.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="relative flex items-start gap-4 bg-night/70 border border-white/10 p-5 tile group hover:border-magenta/40">
                  <div className="flex-shrink-0 grid place-items-center w-10 h-10 border border-white/15 font-racing text-lg text-magenta">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="font-racing text-xl text-white leading-tight">{s.t}</h3>
                    <p className="mt-1 font-body text-white/55 text-sm">{s.d}</p>
                  </div>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/10 group-hover:text-magenta/50 transition-colors">
                    <Icon name="arrow" className="w-5 h-5" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* result banner */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-magenta/15 via-haze/10 to-cyan/10 border border-white/10 p-8">
            <div className="flex items-center gap-6">
              <span className="grid place-items-center w-16 h-16 border border-magenta/40 text-magenta">
                <Icon name="trophy" className="w-8 h-8" />
              </span>
              <div>
                <div className="font-body uppercase tracking-[0.2em] text-xs text-cyan">Campaign Status</div>
                <div className="font-racing text-3xl text-white">On The Boards · 2024 Season</div>
              </div>
            </div>
            <a href="#contact" className="btn-ghost">Full Results Pack</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
