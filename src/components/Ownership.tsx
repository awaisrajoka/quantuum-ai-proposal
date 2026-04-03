"use client";

import { Check } from "lucide-react";

const commitments = [
  {
    title: "Full Source Code Ownership",
    desc: "Every line of code is delivered to your repository. You own it outright. No licensing fees, no vendor dependency, no runtime royalties.",
  },
  {
    title: "Infrastructure Documentation",
    desc: "Terraform modules, architecture diagrams, runbooks, and deployment guides. Your team can operate and extend the platform independently.",
  },
  {
    title: "Knowledge Transfer Sessions",
    desc: "Structured handoff with recorded walkthroughs of every module, every API endpoint, and every deployment pipeline.",
  },
  {
    title: "30-Day Post-Launch Support",
    desc: "Bug fixes and critical support for 30 days after launch. No additional cost. We stand behind what we ship.",
  },
];

export default function Ownership() {
  return (
    <section id="ownership" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {"// OWNERSHIP"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Zero Lock-In. Full Ownership.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {commitments.map((c) => (
            <div
              key={c.title}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Check className="text-accent" size={16} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{c.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
