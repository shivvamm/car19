"use client";

import Icon from "./ui/Icon";
import { driver } from "@/lib/data";

const socialIcon = { Instagram: "instagram", YouTube: "youtube", Email: "mail" };

export default function SideRail() {
  return (
    <>
      {/* left edge — driver number + vertical wordmark */}
      <div className="hidden xl:flex fixed left-0 top-0 bottom-0 z-40 w-14 flex-col items-center justify-between py-6 pointer-events-none">
        <div className="font-display text-2xl neon-pink leading-none">19</div>
        <div
          className="font-body uppercase tracking-[0.4em] text-[10px] text-white/40"
          style={{ writingMode: "vertical-rl" }}
        >
          Spunky · Time Attack
        </div>
        <div className="w-px h-16 bg-gradient-to-b from-magenta to-transparent" />
      </div>

      {/* right edge — social rail */}
      <div className="hidden xl:flex fixed right-0 top-0 bottom-0 z-40 w-14 flex-col items-center justify-center gap-5">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/20" />
        {driver.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="text-white/40 hover:text-magenta transition-colors"
          >
            <Icon name={socialIcon[s.label] || "mail"} className="w-4 h-4" strokeWidth={1.5} />
          </a>
        ))}
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-white/20" />
      </div>
    </>
  );
}
