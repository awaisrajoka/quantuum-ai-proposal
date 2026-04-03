"use client";

const archLayers = [
  {
    label: "PRESENTATION LAYER",
    tech: "Next.js 14 \u00b7 TypeScript \u00b7 Tailwind \u00b7 shadcn/ui",
    color: "border-accent/40",
    boxes: ["Executive Dashboard", "Asset Dashboard", "Functional Dashboard", "Action Manager"],
  },
  {
    label: "APPLICATION LAYER",
    tech: "Node.js \u00b7 Express \u00b7 REST API \u00b7 NextAuth",
    color: "border-blue-500/40",
    boxes: ["KPI Engine", "Formula Engine", "Action Engine", "Reporting Engine"],
  },
  {
    label: "DATA LAYER",
    tech: "Azure PostgreSQL \u00b7 TimescaleDB \u00b7 Redis",
    color: "border-purple-500/40",
    boxes: ["Entity Store", "Time-Series Store", "Action Store", "Audit Log"],
  },
  {
    label: "INTEGRATION LAYER",
    tech: "API Broker \u00b7 Azure Service Bus \u00b7 Redis Cache",
    color: "border-amber-500/40",
    boxes: ["API Broker", "Field Mapper", "Raw Storage", "Event Queue"],
  },
];

const techStack = [
  { category: "Frontend", items: "Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, Recharts" },
  { category: "Backend", items: "Node.js, Express, REST API, Zod Validation" },
  { category: "Database", items: "Azure PostgreSQL Flexible Server, TimescaleDB, Redis" },
  { category: "Infrastructure", items: "Azure App Service, Azure VNet, Azure Key Vault" },
  { category: "Auth & Security", items: "NextAuth.js, RBAC, AES-256, Row-Level Security" },
  { category: "DevOps", items: "GitHub Actions, Docker, Terraform, Automated Testing" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {"// ARCHITECTURE"}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Entity-Driven. Not UI-Driven.
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            The platform is designed around structured, governed entities - not dashboard logic.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div
          className="mt-16 space-y-0"
        >
          {archLayers.map((layer, li) => (
            <div key={layer.label} className="relative">
              {/* Connector lines */}
              {li < archLayers.length - 1 && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-px h-4 bg-white/10 z-10" />
              )}
              <div
                className={`bg-white/[0.02] border ${layer.color} rounded-xl p-5 md:p-6 ${
                  li > 0 ? "mt-4" : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                    {layer.label}
                  </span>
                  <span className="text-xs text-white/30 font-mono">{layer.tech}</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {layer.boxes.map((box) => (
                    <div
                      key={box}
                      className="bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-center text-sm text-white/70 hover:border-white/20 hover:text-white/90 transition-all"
                    >
                      {box}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Technology Stack</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((ts) => (
              <div
                key={ts.category}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-5"
              >
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  {ts.category}
                </span>
                <p className="mt-2 text-white/60 text-sm leading-relaxed">{ts.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
