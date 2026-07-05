"use client";

import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0, y = 30, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children, n }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="chip">{children}</span>
      {n && <span className="font-display text-white/10 text-2xl">/ {n}</span>}
    </div>
  );
}
