"use client";

import Image from "next/image";
import Reveal, { SectionLabel } from "./ui/Reveal";
import Icon from "./ui/Icon";
import { careerStats, achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <SectionLabel n="02">Career</SectionLabel>
            <Reveal>
              <h2 className="font-display text-6xl md:text-8xl leading-[0.85] uppercase">
                By The <span className="neon-pink">Numbers</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="font-body text-white/55 max-w-xs md:text-right">
              Grassroots campaign record — logged across Buddh International Circuit and Race Wars India.
            </p>
          </Reveal>
        </div>

        {/* career stat row */}
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-white/10 divide-x divide-y lg:divide-y-0 divide-white/10">
            {careerStats.map((s, i) => (
              <div key={i} className="relative px-5 py-8 group hover:bg-white/[0.02] transition-colors">
                <div className="absolute top-3 right-4 font-display text-white/[0.05] text-xl">0{i + 1}</div>
                <div className="font-display text-4xl md:text-5xl text-white leading-none">{s.v}</div>
                <div className="mt-3 h-[2px] w-8 bg-magenta group-hover:w-14 transition-all" />
                <div className="mt-3 font-body uppercase tracking-[0.16em] text-[11px] text-white/50">{s.k}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* achievements + image */}
        <div className="grid lg:grid-cols-12 gap-8 mt-10">
          <Reveal className="lg:col-span-5">
            <div className="relative h-full min-h-[320px] overflow-hidden border border-white/10">
              <Image src="/media/cockpit.jpg" alt="SPUNKY #19 — helmet on, in the cockpit" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute bottom-5 left-6">
                <div className="font-body uppercase tracking-[0.2em] text-[10px] text-magenta">Race Ready</div>
                <div className="font-display text-3xl text-white uppercase">Lights Out</div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-5">
              <Icon name="trophy" className="w-5 h-5 text-magenta" />
              <span className="font-body uppercase tracking-[0.25em] text-xs text-white/60">Honours & Milestones</span>
            </div>
            <div className="divide-y divide-white/10 border-t border-white/10">
              {achievements.map((a, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="group flex items-center gap-5 py-5 hover:bg-white/[0.02] transition-colors">
                    <div className="font-display text-2xl text-white/25 w-16 flex-shrink-0 group-hover:text-magenta transition-colors">
                      {a.year}
                    </div>
                    <span className="grid place-items-center w-10 h-10 flex-shrink-0 border border-white/10 text-cyan group-hover:text-magenta group-hover:border-magenta/40 transition-colors">
                      <Icon name={a.icon} className="w-5 h-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="font-body font-bold text-white leading-tight">{a.title}</div>
                      <div className="font-body text-white/45 text-sm">{a.place}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
