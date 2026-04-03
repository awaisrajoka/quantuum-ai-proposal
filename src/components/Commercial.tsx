"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const includes = [
  "Full 4-layer platform (KPI, Reporting, Data, Action)",
  "8-week delivery with weekly demos",
  "3 dashboard views (Executive, Asset, Functional)",
  "API ingestion framework with field mapping",
  "RBAC, audit trails, and row-level security",
  "Full source code ownership",
  "Infrastructure as Code (Terraform)",
  "30-day post-launch support",
  "Documentation and knowledge transfer",
];

export default function Commercial() {
  return (
    <section id="investment" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {"// INVESTMENT"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            The Investment.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 bg-white/[0.03] border border-accent/20 rounded-xl p-6 md:p-10"
          >
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-8">
              <div>
                <p className="text-white/40 text-sm mb-1">MVP Development — Fixed Price</p>
                <p className="text-5xl md:text-6xl font-bold text-accent">$15,000</p>
              </div>
              <p className="text-white/40 text-sm sm:mb-2">USD / one-time</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {includes.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check className="text-accent shrink-0 mt-0.5" size={16} />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Side Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8"
            >
              <span className="inline-block bg-accent/10 border border-accent/20 rounded-full px-3 py-1 text-xs font-mono text-accent uppercase tracking-wider mb-4">
                Early Commitment
              </span>
              <p className="text-3xl font-bold text-white mb-1">$11,200</p>
              <p className="text-white/40 text-sm mb-3">Save $3,800 with upfront commitment</p>
              <p className="text-white/50 text-xs leading-relaxed">
                Available when contract is signed within 14 days of proposal delivery. Same scope, same timeline, same quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8"
            >
              <span className="inline-block bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-mono text-white/50 uppercase tracking-wider mb-4">
                Ongoing Support
              </span>
              <p className="text-3xl font-bold text-white mb-1">$2,000</p>
              <p className="text-white/40 text-sm mb-3">per month — Guardian Plan</p>
              <p className="text-white/50 text-xs leading-relaxed">
                Ongoing maintenance, bug fixes, minor enhancements, monitoring, and priority support. Cancel anytime with 30-day notice.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
