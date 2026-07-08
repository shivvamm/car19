"use client";

import Reveal, { SectionLabel } from "./ui/Reveal";
import PlayerCard from "./PlayerCard";
import { driver } from "@/lib/data";

export default function Driver() {
  return (
    <section id="driver" className="relative py-24 md:py-36">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* NFS player card */}
        <Reveal className="relative">
          <PlayerCard />
        </Reveal>

        {/* Bio */}
        <div>
          <SectionLabel n="01">The Driver</SectionLabel>
          <Reveal>
            <h2 className="font-racing text-5xl md:text-7xl leading-[0.9]">
              <span className="text-white">HANDLE:</span>{" "}
              <span className="grad-heat">SPUNKY</span>
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-2 font-display text-2xl md:text-3xl text-white/85 uppercase tracking-wide">
              {driver.legalName}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 font-body text-cyan uppercase tracking-[0.2em] text-sm font-semibold">
              {driver.tagline}
            </p>
          </Reveal>

          <div className="mt-8 space-y-5 max-w-xl">
            {driver.bio.map((p, i) => (
              <Reveal key={i} delay={0.15 + i * 0.08}>
                <p className="font-body text-lg text-white/70 leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                ["Based", driver.location],
                ["Number", "#19 · SPUNKY"],
                ["Discipline", "Autocross · Time-Trial"],
                ["Machine", "Škoda Superb · Stage 2"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-body uppercase tracking-[0.2em] text-[11px] text-white/40">{k}</div>
                  <div className="font-body font-bold text-white text-lg">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
