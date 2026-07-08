"use client";

import Reveal, { SectionLabel } from "./ui/Reveal";
import Icon from "./ui/Icon";
import { journey } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
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
          <div className="absolute left-[19px] md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-magenta/60 via-white/15 to-cyan/40 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {journey.map((j, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={i} delay={(i % 2) * 0.05}>
                  <div className="relative md:grid md:grid-cols-2 md:gap-12 md:py-6">
                    {/* node */}
                    <span className="absolute left-[13px] md:left-1/2 top-1 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 z-10 grid place-items-center w-3 h-3">
                      <span className="w-3 h-3 rounded-full bg-magenta shadow-[0_0_12px_#ff1e6b]" />
                    </span>

                    {/* card */}
                    <div
                      className={`ml-10 md:ml-0 ${
                        left ? "md:col-start-1 md:text-right md:pr-4" : "md:col-start-2 md:pl-4"
                      }`}
                    >
                      <div className="group carbon border border-white/10 p-6 hover:border-magenta/40 transition-colors">
                        <div
                          className={`flex items-center gap-3 ${
                            left ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <span className="grid place-items-center w-10 h-10 flex-shrink-0 border border-white/10 text-cyan group-hover:text-magenta transition-colors">
                            <Icon name={j.icon} className="w-5 h-5" />
                          </span>
                          <div>
                            <div className="font-body uppercase tracking-[0.2em] text-[10px] text-magenta">
                              {j.era}
                            </div>
                            <div className="font-display text-xl text-white leading-none mt-0.5">
                              {j.year}
                            </div>
                          </div>
                        </div>
                        <h3 className="mt-4 font-body font-bold text-white text-lg leading-tight">
                          {j.title}
                        </h3>
                        <p className="mt-2 font-body text-white/55 text-sm leading-relaxed">
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
