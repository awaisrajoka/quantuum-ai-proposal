"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const stats = [
  { value: "8 Weeks", label: "to MVP" },
  { value: "4 Layers", label: "One Platform" },
  { value: "$15,000", label: "Fixed Investment" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-16 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-8"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            TENDER RESPONSE — APRIL 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight"
        >
          <span className="text-white">The Foundation of</span>
          <br />
          <span className="text-accent">Quantuum AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          An execution assurance engine built on governed entities, structured data, and architectural permanence. Not dashboards — the platform beneath them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.value}
              className="bg-white/5 border border-white/10 rounded-full px-5 py-2 flex items-center gap-2"
            >
              <span className="text-white font-semibold text-sm">{s.value}</span>
              <span className="text-white/40 text-sm">{s.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 space-y-1 text-sm text-white/40"
        >
          <p>Prepared for William McLean — Quantuum AI</p>
          <p>By Hamad Pervaiz, CEO — BearPlex &middot; April 2026</p>
        </motion.div>
      </div>

      <motion.a
        href="#problem"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-10 text-white/30 hover:text-white/60 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  );
}
