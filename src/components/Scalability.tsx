"use client";

import { Zap, Database, Bot, ArrowRight } from "lucide-react";

const expansions = [
  {
    icon: Zap,
    title: "From Manual to Intelligent",
    desc: "The MVP starts with manual input. But every KPI object is API-ready from day one. When you connect CMMS, ERP, or IMS - the KPIs auto-populate without changing the data model.",
  },
  {
    icon: Database,
    title: "From KPIs to Operational Data",
    desc: "The entity model supports any governed data type - not just KPIs. Safety observations, maintenance logs, incident reports - all can become first-class entities.",
  },
  {
    icon: Bot,
    title: "From Dashboard to AI Copilot",
    desc: "The data model is designed for pgvector embeddings. The same PostgreSQL database that stores KPIs can power semantic search, anomaly detection, and an AI copilot.",
  },
];

const roadmap = [
  { label: "MVP", sublabel: "Now", active: true },
  { label: "Multi-Source Ingestion", sublabel: "Q3 2026", active: false },
  { label: "Pattern Detection", sublabel: "Q4 2026", active: false },
  { label: "AI Copilot", sublabel: "2027", active: false },
];

export default function Scalability() {
  return (
    <section id="scalability" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {"// FUTURE-READY"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Built for What Comes Next.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {expansions.map((card) => (
            <div
              key={card.title}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/20 transition-colors"
            >
              <card.icon className="text-accent mb-4" size={24} />
              <h3 className="text-white font-semibold text-lg mb-3">{card.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Roadmap */}
        <div
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-white mb-8">Evolution Roadmap</h3>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-0">
            {roadmap.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <div
                  className={`rounded-xl px-6 py-4 text-center border ${
                    step.active
                      ? "bg-accent/10 border-accent/30"
                      : "bg-white/[0.03] border-white/10"
                  }`}
                >
                  <p className={`font-semibold text-sm ${step.active ? "text-accent" : "text-white/70"}`}>
                    {step.label}
                  </p>
                  <p className="text-xs text-white/40 mt-1 font-mono">{step.sublabel}</p>
                </div>
                {i < roadmap.length - 1 && (
                  <ArrowRight className="text-white/20 mx-2 shrink-0 hidden md:block" size={16} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
