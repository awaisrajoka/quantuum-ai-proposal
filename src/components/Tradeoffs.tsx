"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const simplify = [
  "Single-tenant deployment for MVP (multi-tenant later)",
  "Email-based notifications (no SMS/push in MVP)",
  "3 dashboard views (Executive, Asset, Functional)",
  "Manual approval workflow (automated triggers in v2)",
  "Basic charting (line, bar, gauge — advanced analytics later)",
];

const protect = [
  "Entity-governed data model (every KPI is a structured object)",
  "Full audit trail on every mutation",
  "API-first architecture (every feature accessible via REST)",
  "Row-level security in PostgreSQL",
  "Data lineage from source to dashboard to action",
];

export default function Tradeoffs() {
  return (
    <section id="tradeoffs" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {"// TRADE-OFFS"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            What We Would Simplify. What We Would Not.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Simplify */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8"
          >
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <Check className="text-accent" size={20} />
              We Would Simplify
            </h3>
            <ul className="space-y-4">
              {simplify.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/60 text-sm">
                  <Check className="text-accent shrink-0 mt-0.5" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Protect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8"
          >
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <X className="text-red-400" size={20} />
              We Would NOT Compromise
            </h3>
            <ul className="space-y-4">
              {protect.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/60 text-sm">
                  <X className="text-red-400 shrink-0 mt-0.5" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
