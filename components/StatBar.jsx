"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Icon from "./ui/Icon";
import { stats } from "@/lib/data";

function Counter({ value, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1400;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

export default function StatBar() {
  return (
    <section className="relative z-20 border-y border-white/10 bg-night/60 backdrop-blur">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
        {stats.map((s, i) => (
          <div key={i} className="px-6 py-8 md:py-10 group relative overflow-hidden">
            <div className="absolute -bottom-6 -right-2 font-display text-8xl text-white/[0.03] select-none">
              0{i + 1}
            </div>
            <span className={`inline-flex mb-4 ${i % 2 ? "text-magenta" : "text-cyan"}`}>
              <Icon name={s.icon} className="w-6 h-6" strokeWidth={1.5} />
            </span>
            <div className={`font-display text-4xl md:text-5xl lg:text-6xl leading-none ${i % 2 ? "neon-pink" : "neon-cyan"}`}>
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="mt-3 font-body font-bold uppercase tracking-[0.2em] text-xs text-white/80">
              {s.label}
            </div>
            <div className="font-body text-white/45 text-sm">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
