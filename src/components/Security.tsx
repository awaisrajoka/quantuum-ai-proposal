"use client";

import { Cloud, Shield, Lock, FileSearch, Code, Settings } from "lucide-react";

const items = [
  {
    icon: Cloud,
    title: "Azure-Native Hosting",
    desc: "Deployed on your Azure tenant. Your VNet. Your resource group. No shared infrastructure.",
  },
  {
    icon: Shield,
    title: "RBAC",
    desc: "Role-based access control at every layer. Admin, Manager, Operator, Viewer - fully configurable.",
  },
  {
    icon: Lock,
    title: "AES-256 Encryption",
    desc: "Encryption at rest and in transit. Azure Key Vault for secrets. No plaintext credentials anywhere.",
  },
  {
    icon: FileSearch,
    title: "Full Audit Trail",
    desc: "Every action, every change, every login - logged with timestamp, user, and before/after state.",
  },
  {
    icon: Code,
    title: "Code in Your Repository",
    desc: "Full source code delivered to your GitHub/Azure DevOps. You own every line. No vendor lock-in.",
  },
  {
    icon: Settings,
    title: "Infrastructure as Code",
    desc: "Terraform modules for every Azure resource. Reproducible, version-controlled infrastructure.",
  },
];

export default function Security() {
  return (
    <section id="security" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {"// SECURITY"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Your Platform. Your Infrastructure. Your Data.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8 hover:border-white/20 transition-colors"
            >
              <item.icon className="text-accent mb-4" size={24} />
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
