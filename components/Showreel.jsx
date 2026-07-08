"use client";

import { useRef } from "react";
import Reveal, { SectionLabel } from "./ui/Reveal";
import Icon from "./ui/Icon";
import { clips } from "@/lib/data";

function Clip({ clip, big }) {
  const ref = useRef(null);
  return (
    <div
      className={`relative group overflow-hidden border border-white/10 tile bg-ink ${
        big ? "col-span-2 row-span-2" : ""
      }`}
      onMouseEnter={() => ref.current?.play?.()}
    >
      <video
        ref={ref}
        className={`w-full object-cover ${big ? "h-full min-h-[240px]" : "h-full min-h-[150px]"}`}
        src={clip.src}
        poster={clip.poster}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
      />
      {/* carbon vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/20 pointer-events-none" />
      {/* corner ticks */}
      <span className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-white/40" />
      <span className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-white/40" />

      <div className="absolute top-3 right-3 flex items-center gap-1.5 pointer-events-none">
        <span className="h-1.5 w-1.5 rounded-full bg-magenta animate-pulse" />
        <span className="font-body uppercase tracking-[0.22em] text-[9px] text-white/70">Rec</span>
      </div>

      <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between pointer-events-none">
        <div>
          <div className="font-body uppercase tracking-[0.24em] text-[10px] text-magenta">{clip.place}</div>
          <div className={`font-racing text-white leading-none ${big ? "text-3xl md:text-4xl" : "text-xl"}`}>
            {clip.label}
          </div>
        </div>
        <span className="grid place-items-center w-9 h-9 rounded-full border border-white/30 bg-ink/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <Icon name="play" className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
}

export default function Showreel() {
  const [feature, ...rest] = clips;
  return (
    <section id="showreel" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel n="06">Showreel</SectionLabel>
            <Reveal>
              <h2 className="font-racing text-6xl md:text-8xl leading-[0.85]">
                <span className="neon-pink">FULL</span> <span className="grad-heat">SEND</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="font-body text-white/55 max-w-xs md:text-right">
              Five reels — street pulls, night flames and flat-out laps at Buddh International Circuit.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[190px] gap-4">
            <Clip clip={feature} big />
            {rest.map((c) => (
              <Clip key={c.src} clip={c} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
