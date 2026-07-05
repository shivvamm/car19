"use client";

import { partners } from "@/lib/data";

export default function Partners() {
  const row = [...partners, ...partners];
  return (
    <section className="relative py-14 border-y border-white/10 bg-night/40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 mb-8">
        <span className="chip">Backed By</span>
      </div>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-14 pr-14">
          {row.map((p, i) => (
            <span
              key={i}
              className="font-display text-2xl md:text-3xl whitespace-nowrap text-white/35 hover:text-white transition-colors"
            >
              {p}
              <span className="text-magenta"> ·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
