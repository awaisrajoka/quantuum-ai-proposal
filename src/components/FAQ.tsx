"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Why BearPlex over a larger consultancy?",
    a: "Large consultancies assign junior resources and bill for overhead. We assign senior engineers who've built platforms like this before. You get direct access to the people writing the code — no account managers, no layers.",
  },
  {
    q: "Can you really deliver an MVP in 8 weeks?",
    a: "Yes. Our architecture-first approach means we design the entity model in Week 1, not Week 6. The 4-layer architecture is proven — we've shipped similar platforms for Vertex360, PeoplePlus, and Odus Cloud on comparable timelines.",
  },
  {
    q: "What happens if scope changes during the project?",
    a: "We use weekly sprint demos to align on scope continuously. Minor adjustments are absorbed. If a change significantly impacts the data model or timeline, we'll flag it immediately with a clear impact assessment and options.",
  },
  {
    q: "How does the AI layer get added later?",
    a: "The PostgreSQL data model supports pgvector embeddings natively. Every KPI object, action, and data point is structured for future semantic search and pattern detection. The AI layer connects to existing entities — it doesn't require a rebuild.",
  },
  {
    q: "Do we need to provide Azure infrastructure?",
    a: "We can deploy to your existing Azure tenant or provision a new one. All infrastructure is defined as Terraform code, so it's reproducible and version-controlled. We'll guide your team through the setup.",
  },
  {
    q: "What's included in the $2,000/month Guardian Plan?",
    a: "Bug fixes, security patches, minor enhancements (up to 20 hours/month), monitoring, uptime alerts, and priority Slack support. It's designed to keep the platform healthy while your team focuses on operations.",
  },
  {
    q: "Can we hire our own developers to extend the platform?",
    a: "Absolutely. That's the point. Full source code, full documentation, full knowledge transfer. The architecture is designed for any competent Next.js/PostgreSQL developer to extend without reverse-engineering.",
  },
  {
    q: "What if we want to add more dashboard types later?",
    a: "The reporting layer generates dashboards from the same data model. Adding a new dashboard view is a frontend task — the data, APIs, and permissions are already in place. This is a configuration, not a rebuild.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="border-b border-white/5 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-white/80 group-hover:text-white font-medium pr-4 transition-colors">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="text-white/30" size={18} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-white/60 text-sm leading-relaxed pr-8">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {"// FAQ"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="mt-12 bg-white/[0.03] border border-white/10 rounded-xl px-6 md:px-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
