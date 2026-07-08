"use client";

import Reveal, { SectionLabel } from "./ui/Reveal";
import Icon from "./ui/Icon";
import { journey } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <SectionLabel n="02">The Journey</SectionLabel>
            <Reveal>
              <h2 className="font-display text-6xl md:text-8xl leading-[0.85] uppercase">
                Kid To <span className="neon-pink">Grid</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="font-body text-white/55 max-w-sm md:text-right">
              A decade from arcade laps on dad's PC to a self-built Stage-2 podium car — every mile self-taught.
            </p>
          </Reveal>
        </div>

        {/* timeline */}
        <div className="relative">
          {/* spine */}
          <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:-translate-x-1/2" />

          <div className="space-y-6 md:space-y-0">
            {journey.map((j, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={i} y={40}>
                  <div className="relative md:grid md:grid-cols-2 md:items-center md:min-h-[168px]">
                    {/* node */}
                    <span className="absolute left-0 md:left-1/2 top-6 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 z-10 grid place-items-center">
                      <span className="w-3.5 h-3.5 rounded-full bg-heat border-2 border-magenta shadow-[0_0_14px_#ff1e6b]" />
                    </span>

                    {/* big ghost year — fills the opposite column */}
                    <div
                      className={`hidden md:flex flex-col justify-center ${
                        left
                          ? "md:col-start-2 md:row-start-1 md:pl-14 items-start"
                          : "md:col-start-1 md:row-start-1 md:pr-14 items-end text-right"
                      }`}
                    >
                      <span className="font-body uppercase tracking-[0.3em] text-[11px] text-magenta">
                        {j.era}
                      </span>
                      <span className="font-display leading-[0.8] text-7xl lg:text-8xl text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.16)]">
                        {j.year}
                      </span>
                    </div>

                    {/* content card */}
                    <div
                      className={`pl-8 md:pl-0 md:row-start-1 ${
                        left ? "md:col-start-1 md:pr-14" : "md:col-start-2 md:pl-14"
                      }`}
                    >
                      <div className="group carbon border border-white/10 p-6 lg:p-7 hover:border-magenta/50 transition-all duration-300 hover:-translate-y-0.5 wedge-r">
                        <div className="flex items-center gap-3">
                          <span className="grid place-items-center w-11 h-11 flex-shrink-0 border border-white/12 text-cyan group-hover:text-magenta group-hover:border-magenta/40 transition-colors">
                            <Icon name={j.icon} className="w-5 h-5" />
                          </span>
                          <div className="md:hidden">
                            <div className="font-body uppercase tracking-[0.2em] text-[10px] text-magenta">
                              {j.era}
                            </div>
                            <div className="font-display text-xl text-white leading-none mt-0.5">
                              {j.year}
                            </div>
                          </div>
                          <h3 className="hidden md:block font-display text-2xl text-white leading-none uppercase">
                            {j.title}
                          </h3>
                        </div>
                        <h3 className="md:hidden mt-4 font-body font-bold text-white text-lg leading-tight">
                          {j.title}
                        </h3>
                        <p className="mt-4 font-body text-white/55 text-sm leading-relaxed">
                          {j.body}
                        </p>
                      </div>
                    </div>
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
