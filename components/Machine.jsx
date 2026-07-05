"use client";

import Image from "next/image";
import Reveal, { SectionLabel } from "./ui/Reveal";
import DynoChart from "./DynoChart";
import Icon from "./ui/Icon";
import { car } from "@/lib/data";

export default function Machine() {
  return (
    <section id="machine" className="relative py-24 md:py-36 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel n="02">The Machine</SectionLabel>
            <Reveal>
              <h2 className="font-racing text-6xl md:text-8xl leading-[0.85]">
                <span className="stroke-text">THE</span> <span className="grad-heat">SUPERB</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 font-body text-white/60 text-lg max-w-md">
                {car.year} {car.name} — reborn as a Stage 1 time-attack weapon.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="flex gap-8">
              <BigStat v="320" u="BHP" />
              <BigStat v="370" u="LB-FT" accent />
            </div>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Hero render */}
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10 wedge-r tile">
              <Image
                src="/media/hero-neon.jpg"
                alt="SPUNKY Škoda Superb neon render"
                fill
                sizes="(max-width:1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <div className="absolute bottom-5 left-6 font-display text-4xl neon-pink">SPUNKY</div>
            </div>
          </Reveal>

          {/* Spec sheet */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="h-full bg-night/60 border border-white/10 p-7">
              <div className="font-body uppercase tracking-[0.25em] text-xs text-cyan mb-5">Spec Sheet</div>
              <dl className="divide-y divide-white/8">
                {car.spec.map((s) => (
                  <div key={s.k} className="flex justify-between py-3">
                    <dt className="font-body text-white/50 uppercase tracking-wide text-sm">{s.k}</dt>
                    <dd className="font-body font-bold text-white text-right">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* Dyno chart */}
          <Reveal className="lg:col-span-7">
            <div className="bg-night/60 border border-white/10 p-7">
              <DynoChart />
            </div>
          </Reveal>

          {/* Build parts */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="h-full carbon border border-white/10 p-7">
              <div className="flex items-center gap-2 mb-5">
                <Icon name="engine" className="w-5 h-5 text-magenta" />
                <span className="font-body uppercase tracking-[0.25em] text-xs text-magenta">Build Sheet</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {car.parts.map((p, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-3 border border-white/10 bg-ink/40 p-3 tile hover:border-magenta/40"
                  >
                    <span className="grid place-items-center w-10 h-10 flex-shrink-0 border border-white/10 text-cyan group-hover:text-magenta transition-colors">
                      <Icon name={p.icon} className="w-5 h-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="font-body font-bold text-white text-sm leading-tight truncate">{p.name}</div>
                      <div className="font-body text-white/45 text-xs truncate">{p.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BigStat({ v, u, accent }) {
  return (
    <div className="text-right">
      <div className={`font-display text-5xl md:text-6xl leading-none ${accent ? "neon-cyan" : "neon-pink"}`}>{v}</div>
      <div className="font-body uppercase tracking-[0.2em] text-xs text-white/50">{u}</div>
    </div>
  );
}
