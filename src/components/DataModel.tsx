"use client";

import { motion } from "framer-motion";
import { Database, Clock, Brain, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Database,
    title: "Azure PostgreSQL Flexible Server",
    desc: "Enterprise-grade managed PostgreSQL on Azure. Your tenant, your VNet, your data sovereignty. Full backup, point-in-time restore, and geo-redundancy.",
  },
  {
    icon: Clock,
    title: "TimescaleDB Extension",
    desc: "Time-series extension for PostgreSQL. Hypertables for KPI values over time. Automatic partitioning, continuous aggregates, and compression for historical data.",
  },
  {
    icon: Brain,
    title: "Future AI Readiness",
    desc: "pgvector extension ready for embeddings. The same database that stores your KPIs can store vector representations for semantic search and AI-powered insights.",
  },
];

const lineageSteps = [
  "Source Data",
  "KPI Object",
  "Derived KPI",
  "Dashboard View",
  "Action",
  "Action History",
];

export default function DataModel() {
  return (
    <section id="data-model" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {"// DATA MODEL"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Why PostgreSQL on Azure.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/20 transition-colors"
            >
              <card.icon className="text-accent mb-4" size={24} />
              <h3 className="text-white font-semibold text-lg mb-3">{card.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Data Lineage Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Data Lineage Flow</h3>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
              {lineageSteps.map((step, i) => (
                <div key={step} className="flex items-center">
                  <div className="bg-white/[0.05] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white/70 font-mono">
                    {step}
                  </div>
                  {i < lineageSteps.length - 1 && (
                    <ArrowRight className="text-accent/50 mx-1 md:mx-2 shrink-0 hidden sm:block" size={16} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
