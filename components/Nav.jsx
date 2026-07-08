"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nav } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-ink/70 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 select-none">
          <span className="font-racing text-2xl tracking-wide neon-pink leading-none">SPUNKY</span>
          <span className="font-body font-extrabold text-cyan text-sm border border-cyan/50 px-1.5 leading-none py-0.5">
            #19
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-body font-semibold uppercase tracking-[0.2em] text-xs text-white/70 hover:text-cyan transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden sm:inline-flex btn-heat !py-2.5 !px-5 text-xs">
          Get in Touch
        </a>
      </div>
    </motion.header>
  );
}
