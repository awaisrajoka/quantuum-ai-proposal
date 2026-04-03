"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", text: "Book a 30-minute architecture call to align on priorities" },
  { num: "02", text: "We deliver a refined scope document within 48 hours" },
  { num: "03", text: "Sign the engagement letter and lock in the early commitment rate" },
  { num: "04", text: "Kick off Week 1 — foundation, schema design, and CI/CD pipeline" },
  { num: "05", text: "First demo in 7 days. Production MVP in 8 weeks." },
];

export default function NextSteps() {
  return (
    <section id="next-steps" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {"// NEXT STEPS"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Ready to Build the Foundation?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 max-w-2xl mx-auto space-y-4"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex items-start gap-4 text-left bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4"
            >
              <span className="font-mono text-accent text-sm font-bold shrink-0 mt-0.5">
                {step.num}
              </span>
              <span className="text-white/70 text-sm">{step.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://cal.com/hamad/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-black rounded-lg px-8 py-3 font-medium hover:brightness-110 transition text-sm"
          >
            Book Architecture Call
          </a>
          <a
            href="mailto:hamad@bearplex.com"
            className="bg-transparent border border-white/20 text-white rounded-lg px-6 py-3 hover:bg-white/5 transition text-sm"
          >
            Reply to William
          </a>
        </motion.div>
      </div>
    </section>
  );
}
