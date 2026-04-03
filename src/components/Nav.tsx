"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Architecture", href: "#architecture" },
  { label: "Timeline", href: "#delivery" },
  { label: "Impact", href: "#scalability" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-black font-bold text-sm">
            B
          </div>
          <span className="text-white font-semibold text-sm tracking-wide">BearPlex</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/50 hover:text-white text-sm transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://cal.com/hamad/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex bg-accent text-black rounded-lg px-5 py-2 text-sm font-medium hover:brightness-110 transition"
          >
            Book a Call
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/70 hover:text-white"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-white/5 px-4 pb-6"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-white/60 hover:text-white text-sm border-b border-white/5 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://cal.com/hamad/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center bg-accent text-black rounded-lg px-5 py-2.5 text-sm font-medium"
          >
            Book a Call
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
