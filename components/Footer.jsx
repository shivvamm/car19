"use client";

import Image from "next/image";
import Reveal from "./ui/Reveal";
import Icon from "./ui/Icon";
import { driver } from "@/lib/data";

const socialIcon = { Instagram: "instagram", YouTube: "youtube", LinkedIn: "star", Email: "mail", Phone: "pin" };

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-24 md:pt-36 overflow-hidden">
      {/* neon car strip bg */}
      <div className="absolute inset-0">
        <Image src="/media/studio-rear.jpg" alt="" fill className="object-cover object-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="text-center">
          <Reveal>
            <div className="chip justify-center inline-flex mb-5">Get In Touch</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-racing text-[15vw] md:text-[10rem] leading-[0.8]">
              <span className="stroke-text">RUN WITH</span>
              <br />
              <span className="neon-pink">SPUNKY</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 font-body text-white/60 text-lg max-w-xl mx-auto">
              Sponsorship, media, co-drives or a build collab — the #19 inbox is open.
              Season 2 kicks off with BND Motorsport on 20 Sep 2026.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {driver.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group flex items-center gap-3 border border-white/15 hover:border-magenta/60 px-6 py-4 bg-ink/50 transition-colors"
                >
                  <span className="grid place-items-center w-9 h-9 border border-white/10 text-cyan group-hover:text-magenta transition-colors">
                    <Icon name={socialIcon[s.label] || "mail"} className="w-5 h-5" />
                  </span>
                  <span className="text-left">
                    <span className="block font-body uppercase tracking-[0.2em] text-[10px] text-white/40 group-hover:text-magenta leading-none">
                      {s.label}
                    </span>
                    <span className="block font-racing text-lg text-white leading-tight mt-1">{s.handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-24 pb-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          <div className="flex items-center gap-2">
            <span className="font-racing text-xl neon-pink">SPUNKY</span>
            <span className="font-body font-extrabold text-cyan text-xs border border-cyan/50 px-1.5 py-0.5">#19</span>
          </div>
          <p className="font-body text-white/35 text-sm text-center">
            {driver.tagline} · Built in the bay, proven on the clock.
          </p>
          <p className="font-body text-white/30 text-xs uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} SPUNKY Racing
          </p>
        </div>
      </div>
    </footer>
  );
}
