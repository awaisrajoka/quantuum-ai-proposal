"use client";

import { motion } from "framer-motion";
import { Code, Target, ShieldCheck } from "lucide-react";

const roles = [
  {
    icon: Code,
    title: "Strike Engineer",
    badge: "10x OUTPUT",
    desc: "Senior full-stack engineer with deep expertise in Next.js, PostgreSQL, and API architecture. Writes production code, not prototypes.",
  },
  {
    icon: Target,
    title: "Sprint Commander",
    badge: "5 PM DAILY REPORT",
    desc: "Project lead who sends daily progress reports at 5 PM. Manages scope, timeline, and client communication. Zero surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Sentinel",
    badge: "0 BUGS SHIPPED",
    desc: "QA engineer embedded in every sprint. Automated testing, manual review, and performance validation before every deployment.",
  },
];

const workingDetails = [
  { label: "Sprint Length", value: "1 Week" },
  { label: "Daily Standup", value: "Async (Loom + Slack)" },
  { label: "Progress Report", value: "Daily at 5 PM" },
  { label: "Demo Cadence", value: "Every Friday" },
  { label: "Communication", value: "Slack (dedicated channel)" },
  { label: "Code Reviews", value: "Every PR, same day" },
  { label: "Deployment", value: "Staging on every merge" },
  { label: "Documentation", value: "Inline + Runbooks" },
];

export default function WorkingModel() {
  return (
    <section id="working-model" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {"// HOW WE WORK"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            The Strike Team Protocol.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/20 transition-colors"
            >
              <role.icon className="text-accent mb-4" size={24} />
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-white font-semibold text-lg">{role.title}</h3>
                <span className="bg-accent/10 border border-accent/20 rounded-full px-2.5 py-0.5 text-[10px] font-mono text-accent uppercase tracking-wider">
                  {role.badge}
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{role.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Working Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
            {workingDetails.map((d) => (
              <div key={d.label} className="p-5 md:p-6">
                <p className="font-mono text-xs text-white/40 uppercase tracking-wider mb-1">
                  {d.label}
                </p>
                <p className="text-white font-medium text-sm">{d.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
