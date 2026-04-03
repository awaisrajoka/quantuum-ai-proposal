"use client";

import { Layers, GitBranch, Lock, AlertTriangle } from "lucide-react";

const cards = [
  {
    icon: Layers,
    title: "Fragmented Signals",
    desc: "KPIs scattered across CMMS, ERP, IMS, HSEQ, and spreadsheets. No single source of truth.",
  },
  {
    icon: GitBranch,
    title: "No Action Lineage",
    desc: "When a KPI breaches threshold, there's no structured path from signal \u2192 action \u2192 execution \u2192 verified closure.",
  },
  {
    icon: Lock,
    title: "Third-Party Dependency",
    desc: "Your current KPI tool is a black box you don't own. No data lineage, no extensibility, no future AI layer.",
  },
  {
    icon: AlertTriangle,
    title: "Architecture Debt Ahead",
    desc: "Build the MVP wrong and the AI layer can't be added later. The data model IS the product.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {"// THE CHALLENGE"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white max-w-3xl">
            You don&apos;t have a dashboard problem. You have an execution gap.
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            Operational systems generate signals. But signals without structured follow-through are just noise.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/20 transition-colors"
            >
              <card.icon className="text-accent mb-4" size={24} />
              <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-white/60 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-16 bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8"
        >
          <p className="text-white/70 italic leading-relaxed text-lg">
            &ldquo;We are not looking for someone to build screens. We are looking for someone to build the foundation of a platform.&rdquo;
          </p>
          <p className="mt-3 text-accent font-mono text-sm">— Quantuum AI Tender</p>
        </div>
      </div>
    </section>
  );
}
