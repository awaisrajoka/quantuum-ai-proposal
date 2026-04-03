"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const cases = [
  {
    name: "Vertex360",
    category: "NDIS & Disability Management",
    desc: "End-to-end NDIS platform managing participant plans, service bookings, incident reporting, and compliance. Built with governed entities and full audit trails — the same architectural pattern proposed for Quantuum AI.",
    metrics: ["50+ Providers", "10K+ Participants", "Full NDIS Compliance"],
  },
  {
    name: "PeoplePlus",
    category: "Workforce & Employment Services",
    desc: "National employment services platform with KPI dashboards, case management, and outcome tracking across 200+ sites. Real-time reporting with RAG indicators — direct precedent for the Quantuum reporting layer.",
    metrics: ["200+ Sites", "Real-Time KPIs", "Government Reporting"],
  },
  {
    name: "SimpliRFP",
    category: "Procurement Automation",
    desc: "AI-powered RFP response platform that structures unstructured tender data, manages proposal workflows, and generates compliance matrices. Multi-tenant SaaS with governed data objects.",
    metrics: ["AI-Powered", "Multi-Tenant", "SOC 2 Ready"],
  },
  {
    name: "Odus Cloud",
    category: "Operational Data Platform",
    desc: "Cloud-native operational data platform for industrial clients. API ingestion from SCADA, CMMS, and ERP systems with field mapping and data lineage — the exact pattern for Quantuum's Data & API Layer.",
    metrics: ["Industrial IoT", "API Ingestion", "Data Lineage"],
  },
  {
    name: "Scale Mediation",
    category: "Legal Tech & Dispute Resolution",
    desc: "Digital mediation platform with structured workflows, document management, and outcome tracking. Full action lifecycle with approval chains — mirrors the Quantuum Action Management Layer.",
    metrics: ["Workflow Engine", "Document Mgmt", "Audit Trail"],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {"// PROOF"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            We&apos;ve Built This Before.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-accent">
                  {c.category}
                </span>
                <ExternalLink className="text-white/20 group-hover:text-accent/50 transition-colors" size={16} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">{c.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">{c.desc}</p>
              <div className="flex flex-wrap gap-2">
                {c.metrics.map((m) => (
                  <span
                    key={m}
                    className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/50"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
