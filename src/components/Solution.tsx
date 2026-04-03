"use client";

import { Check, ArrowRight } from "lucide-react";

const pipeline = ["KPI LAYER", "REPORTING LAYER", "DATA & API LAYER", "ACTION LAYER"];

const layers = [
  {
    num: "01",
    title: "KPI Operating Layer",
    tag: "Governed Intelligence",
    desc: "Central KPI library where every metric is a governed object — defined, owned, thresholded, and auditable.",
    items: [
      "Central KPI library with governed objects",
      "Manual-first input with structured forms",
      "Seamless manual \u2192 API switch per KPI",
      "Derived KPI formula engine (calculated from child KPIs)",
      "Multi-level hierarchy (Company \u2192 Asset \u2192 Function)",
    ],
  },
  {
    num: "02",
    title: "Reporting Layer",
    tag: "Executive Visibility",
    desc: "Multiple dashboards generated from one unified data model. Filter, drill down, and act.",
    items: [
      "Multiple dashboards from one data model",
      "Filtering by entity, time range, and status",
      "RAG threshold logic (Red / Amber / Green)",
      "Full drilldown from dashboard to KPI to action",
      "Executive-quality visualization with charts",
    ],
  },
  {
    num: "03",
    title: "Data & API Layer",
    tag: "Future-Ready Ingestion",
    desc: "A structured API ingestion framework that stores raw data and maps it to governed entities.",
    items: [
      "API ingestion framework with endpoint registry",
      "Admin field mapping interface",
      "Raw data storage (never lose source data)",
      "Structured datasets for KPI calculation",
      "Full data lineage from source to dashboard",
    ],
  },
  {
    num: "04",
    title: "Action Management Layer",
    tag: "Execution Assurance",
    desc: "Every KPI breach triggers a structured action with full lifecycle tracking and audit trail.",
    items: [
      "Actions auto-linked to KPI breaches",
      "Owner + Assignee with accountability chain",
      "Full status lifecycle (Open \u2192 In Progress \u2192 Closed)",
      "Comments, history, and full audit trail",
      "Approval workflow for action closure",
    ],
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {"// THE SOLUTION"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Four Layers. One Platform.
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            Every layer is independently governed, fully traceable, and built for the intelligence engine that comes next.
          </p>
        </div>

        {/* Pipeline */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-2 md:gap-0"
        >
          {pipeline.map((stage, i) => (
            <div key={stage} className="flex items-center">
              <div className="bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 md:px-6 md:py-4">
                <span className="font-mono text-xs md:text-sm text-accent tracking-wider">{stage}</span>
              </div>
              {i < pipeline.length - 1 && (
                <ArrowRight className="text-white/20 mx-1 md:mx-3 shrink-0 hidden sm:block" size={18} />
              )}
            </div>
          ))}
        </div>

        {/* Layer Cards */}
        <div className="mt-16 space-y-8">
          {layers.map((layer) => (
            <div
              key={layer.num}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="shrink-0">
                  <span className="font-mono text-4xl md:text-5xl font-bold text-white/10">
                    {layer.num}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="inline-block bg-accent/10 border border-accent/20 rounded-full px-3 py-1 text-xs font-mono text-accent uppercase tracking-wider mb-3">
                    {layer.tag}
                  </span>
                  <h3 className="text-white font-semibold text-xl mb-2">{layer.title}</h3>
                  <p className="text-white/60 mb-5">{layer.desc}</p>
                  <ul className="space-y-2">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-white/70 text-sm">
                        <Check className="text-accent shrink-0 mt-0.5" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
