"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-white/40 text-sm font-medium">
            Quantuum AI MVP Proposal
          </div>

          <div className="text-white/30 text-sm text-center">
            Built by BearPlex. Powered by AI. Architecturally Permanent.
          </div>

          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://bearplex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 transition-colors"
            >
              bearplex.com
            </a>
            <span className="text-white/10">&middot;</span>
            <a
              href="https://hamadpervaiz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 transition-colors"
            >
              hamadpervaiz.com
            </a>
          </div>
        </motion.div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs">
            &copy; 2026 BearPlex Technologies &middot; Engineering permanent advantages.
          </p>
        </div>
      </div>
    </footer>
  );
}
